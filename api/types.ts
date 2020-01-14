import { IncomingMessage } from "http";
import { Mongoose } from "mongoose";
import { UserModel } from "./models/User";
import { User } from "./resolvers/types";

export type ContextArguments = {
  req: IncomingMessage
}

export enum UserRole {
  user = 'user',
  admin = 'admin'
}

export interface UserIncomingMessage extends IncomingMessage {
  user?: User
  decoded?: TokenUser
  token?: string
}

export type TokenUser = {
  userId: string
  email: string
  role: UserRole
}

export interface Context {
  req: UserIncomingMessage
  connection: Mongoose
  // TODO: dataloaders: Dataloaders
}
