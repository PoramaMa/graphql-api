import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSetting } from './user_setting/entities/user_setting.entitie';
import { UserSettingsResolver } from './user_setting/user_setting.resolver';
import { User } from './users/entities/users.entity';
import { UsersModule } from './users/users.module';
require('dotenv').config();

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      entities: [User, UserSetting],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [UserSettingsResolver],
})
export class AppModule {}
