import { Schema, Document, model } from 'mongoose'


export interface UserModel extends Document {
  username: string
  email: string
  password: string
}

const userSchema = new Schema({
  username: String,
  email: String,
  password: String
})

const User = model<UserModel>('User', userSchema)

export default User

