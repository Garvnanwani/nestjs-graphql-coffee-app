import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Coffee Model' })
export class Coffee {
  @Field(() => ID, { description: 'This is a unique field' })
  id: number;
  name: string;
  brand: string;
  flavors: string[];
}
