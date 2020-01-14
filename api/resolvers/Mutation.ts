import { MutationResolvers } from './types'
import User, { UserModel } from '../models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server-micro'

export const getFullPassword = (password: string, userId: string) => `${password}-${userId}`
export const createPasswordHash = (password: string, userId: string) => bcrypt.hash(getFullPassword(password, userId), 10)
export const createToken = (user: UserModel) => jwt.sign({ userId: user.id, email: user.email, role: 'user' }, process.env.JWT_SECRET!)

const MutationResolve: MutationResolvers = {
  async signUp (_parent, { username, email, password }) {
    const user = await User.findOne({ username })
    // TODO: test regex. ^@?(\w){1,15}$
    if (user) {
      throw new Error(`User with username ${username} already exists.`)
    }
    
    const newUser = await User.create({ username, email })
    newUser.password = await createPasswordHash(password, newUser.id)
    const savedUser = await newUser.save()
    delete savedUser.password
    const token = createToken(savedUser)
    return { jwt: token, user: savedUser  }
  },
  async logIn (_parent, { username, password }) {
    const user = await User.findOne({ username })
    // TODO: test regex. ^@?(\w){1,15}$
    if (!user) {
      throw new Error(`User with username ${username} not found.`)
    }
    const passwordsMatch = await bcrypt.compare(getFullPassword(password, user.id), user.password)
    if (!passwordsMatch) {
      throw new AuthenticationError(`Incorrect username or password, please try again.`)
    }
    const token = createToken(user)
    delete user.password
    return { jwt: token, user }
  }
}

export default MutationResolve
