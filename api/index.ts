import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-micro'
import { IncomingMessage } from 'http';
import { connect, Mongoose } from 'mongoose';
import resolvers from './resolvers'
import schemaDirectives from './schema-directives'
import fs from 'fs'
 
const typeDefs = gql(fs.readFileSync(__dirname + '/schema.graphql', 'utf8'))

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives
})


let connection: Mongoose
const server = new ApolloServer({
  schema,
  
  playground: true,
  async context ({ req }: { req: IncomingMessage }) {
    if (!connection) {
      connection = await connect(process.env.DB_URL!, { useNewUrlParser: true })
    }
    return { req, connection }
  }
});

export default server.createHandler({ path: '/api' });
