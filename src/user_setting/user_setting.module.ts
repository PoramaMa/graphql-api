import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSetting } from './entities/user_setting.entitie';
import { UserSettingsResolver } from './user_setting.resolver';
import { UserSettingsService } from './user_setting.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserSetting])],
  controllers: [],
  providers: [UserSettingsResolver, UserSettingsService],
})
export class UserSettingsModule {}
