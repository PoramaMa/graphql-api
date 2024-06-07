import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { mockUsers } from 'src/_mocks/mockUsers';
import { mockUserSettings } from 'src/_mocks/mockUserSettings';
import { User } from '../models/User';
import { UserSetting } from '../models/UserSetting';

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }

  @Query(() => [User])
  getUsers() {
    return mockUsers;
  }

  @ResolveField((returns) => UserSetting, {
    name: 'settings',
    nullable: true,
  })
  getUserSettings(@Parent() user: User) {
    return mockUserSettings.find(
      (userSetting) => userSetting.userId === user.id,
    );
  }

  @Mutation((returns) => User)
  createUser() {
    console.log('pass');
  }
}
