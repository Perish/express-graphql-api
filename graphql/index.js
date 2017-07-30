import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql';

import mutations from './mutations';
import queries from './queries';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '根据doc里提供的方法，查询相关数据',
    fields: queries
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    description: '根据doc里提供的方法，修改相关数据',
    fields: mutations
  })
});