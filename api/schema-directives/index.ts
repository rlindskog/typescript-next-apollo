import { SchemaDirectiveVisitor, AuthenticationError } from "apollo-server-micro"
import { defaultFieldResolver } from "graphql"
import jwt from 'jsonwebtoken'
import { TokenUser } from '../types'
import User from '../models/User'

export class AuthDirective extends SchemaDirectiveVisitor {
  public visitObject (type: any) {
    this.ensureFieldsWrapped(type)
    type._requiredAuthRole = this.args.requires
  }
  public vistFieldDefinition (field: any, details: any) {
    this.ensureFieldsWrapped(details.objectType)
    field._requiredAuthRole = this.args.requires
  }
  async ensureFieldsWrapped(objectType: any) {
    if (objectType._authFieldsWrapped) return
    objectType._authFieldsWrapped = true
    const fields = objectType.getFields()
    Object.keys(fields).forEach(fieldName => {
      const field = fields[fieldName]
      const { resolve = defaultFieldResolver } = field
      field.resolve = async function (...args: any) {
        const requiredRole = field._requiredAuthRole || objectType._requiredAuthRole
        if (!requiredRole) {
          return resolve.apply(this, args)
        }
        const context: any = args[2]
        if (!context?.req?.headers?.authorization) {
          throw new AuthenticationError(`No authorization header.`)
        }
        const token = context.req.headers.authorization.split('Bearer ')[1]
        if (!token) {
          throw new AuthenticationError(`Unauthorized. Couldn't parse token`)
        }
        const decoded = (await jwt.verify(token, process.env.JWT_SECRET!)) as TokenUser
        if (!decoded) {
          throw new AuthenticationError(`Unauthorized. Couldn't verify the token`)
        }
        if (decoded.role !== requiredRole) {
          throw new AuthenticationError(`Unauthorized. Users role ${decoded.role} does not match the required role ${requiredRole}.`)
        }
        context.req.users = await User.find({ id: decoded.userId })
        context.req.decoded = {
          userId: decoded.userId,
          email: decoded.email,
          role: decoded.role
        }
        context.req.token = token
        return resolve.apply(this, args)
      }
    })
  }
}

const schemaDirectives = {
  auth: AuthDirective
}

export default schemaDirectives