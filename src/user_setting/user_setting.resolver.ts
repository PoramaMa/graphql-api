import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserSettingsInput } from './dto/create-user_setting';
import { UserSetting } from './entities/user_setting.entitie';
import { UserSettingsService } from './user_setting.service';

@Resolver()
export class UserSettingsResolver {
  constructor(
    @Inject(UserSettingsService)
    private userSettingsService: UserSettingsService,
  ) {}

  @Mutation((returns) => UserSetting)
  createUserSettings(
    @Args('createUserSettingsInput')
    createUserSettingsInput: CreateUserSettingsInput,
  ) {
    return this.userSettingsService.createUserSettings(createUserSettingsInput);
  }
}
