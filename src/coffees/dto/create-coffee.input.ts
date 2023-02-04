import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: 'Create a new coffee' })
export class CreateCoffeeInput {
  @Field(() => String, { description: 'The name of the coffee.' })
  name: string;
  brand: string;
  flavors: string[];
}
