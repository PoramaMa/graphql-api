import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/users.entity';
import { UserSetting } from './entities/user_setting.entitie';
import { UserSettingsResolver } from './user_setting.resolver';
import { UserSettingsService } from './user_setting.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  controllers: [],
  providers: [UserSettingsResolver, UserSettingsService],
  exports: [UserSettingsService],
})
export class UserSettingsModule {}
