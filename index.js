import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

import schema from './graphql';

const app = express();

mongoose.connect('mongodb://localhost/graphql-api', {
  useMongoClient: true
});
const db = mongoose.connection;
db.on('error', () => console.log('db connection error!'))
  .once('open', () => console.log('Mongodb connected'));

app.get('/', (req, res) => {
  res.send('Hello');
});

// GraphQL API endpoint

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  pretty: true
}));

app.listen(3000, () => console.log('Graphql API running at port 3000'));

