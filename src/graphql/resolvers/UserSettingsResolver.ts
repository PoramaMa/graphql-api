import { Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';

@Resolver()
export class UserSettingsResolver {
  @Mutation((returns) => UserSetting)
  createUserSettings() {}
}
