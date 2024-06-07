import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSettingsModule } from 'src/user_setting/user_setting.module';
import { User } from './entities/users.entity';
import { UserResolver } from './users.resolver';
import { UserService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), UserSettingsModule],
  controllers: [],
  providers: [UserResolver, UserService],
})
export class UsersModule {}
