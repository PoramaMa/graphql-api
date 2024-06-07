import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { mockUserSettings } from 'src/_mocks/mockUserSettings';
import { mockUsers } from 'src/_mocks/mockUsers';
import { CreateUserInput } from '../graphql/dto/CreateUserInput';
import { User } from '../graphql/models/User';
import { UserSetting } from '../graphql/models/UserSetting';

export let incrementalId = 3;

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
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    const { username, displayName } = createUserInput;
    const newUser = { username, displayName, id: ++incrementalId };
    mockUsers.push(newUser);
    return newUser;
  }
}
