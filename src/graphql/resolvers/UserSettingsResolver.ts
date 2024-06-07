import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { mockUserSettings } from 'src/_mocks/mockUserSettings';
import { CreateUserSettingsInput } from '../dto/CreateUserSettingsInput';
import { UserSetting } from '../models/UserSetting';

@Resolver()
export class UserSettingsResolver {
  @Mutation((returns) => UserSetting)
  createUserSettings(
    @Args('createUserSettingsInput')
    createUserSettingsInput: CreateUserSettingsInput,
  ) {
    console.log('createUserSettingsInput', createUserSettingsInput);
    mockUserSettings.push(createUserSettingsInput);
    return createUserSettingsInput;
  }
}
