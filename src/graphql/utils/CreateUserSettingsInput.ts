import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserSettingsInput {
  @Field((type) => Int)
  userId: number;

  @Field({ nullable: true })
  receiveNotification: boolean;

  @Field({ nullable: true })
  receiveEmails: boolean;
}
