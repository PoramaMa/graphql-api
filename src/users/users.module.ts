import { Module } from '@nestjs/common';
import { UserResolver } from './UserResolver';

@Module({
  imports: [],
  controllers: [],
  providers: [UserResolver],
})
export class UsersModule {}
