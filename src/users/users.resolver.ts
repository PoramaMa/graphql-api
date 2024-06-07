import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UserSettingsService } from 'src/user_setting/user_setting.service';
import { UserSetting } from '../user_setting/entities/user_setting.entitie';
import { CreateUserInput } from './dto/create-user.dto';
import { User } from './entities/users.entity';
import { UserService } from './users.service';

export let incrementalId = 3;

@Resolver((of) => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private userSettingsService: UserSettingsService,
  ) {}

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
    return this.userSettingsService.getUserSettingById(user.id);
  }

  @Mutation((returns) => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }
}
