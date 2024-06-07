import { Inject } from '@nestjs/common';
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
import { UserSetting } from '../graphql/models/UserSetting';
import { CreateUserInput } from './dto/create-user.dto';
import { User } from './entities/users.entity';
import { UserService } from './users.service';

export let incrementalId = 3;

@Resolver((of) => User)
export class UserResolver {
  constructor(@Inject(UserService) private userService: UserService) {}

  @Query((returns) => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUserById(id);
  }

  @Query(() => [User])
  getUsers() {
    return this.userService.getUsers();
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
    return this.userService.createUser(createUserInput);
  }
}
