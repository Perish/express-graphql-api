import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import { userType } from '../../types/user';
import UserModel from '../../../models/user';

export default {
  type: userType,
  args: {
    id: {
      name: 'ID',
      description: '用户的唯一ID',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    return UserModel.findById(params.id).exec();
  }
}