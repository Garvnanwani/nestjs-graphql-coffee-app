import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';
import { CoffeeType } from './../../common/enums/coffee-type.enum';

@InputType({ description: 'Create a new coffee' })
export class CreateCoffeeInput {
  @MinLength(3)
  @Field(() => String, { description: 'The name of the coffee.' })
  name: string;
  brand: string;
  flavors: string[];
  type: CoffeeType;
}
