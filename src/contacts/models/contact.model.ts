import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Contact {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  phone: string;
}
