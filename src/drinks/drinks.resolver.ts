import { Query, Resolver } from '@nestjs/graphql';
import { Drink } from 'src/common/interfaces/drink.interface';
import { Coffee } from './../coffees/entities/coffee.entity';
import { Tea } from './../teas/entities/tea.entity';

@Resolver()
export class DrinksResolver {
  @Query(() => [Drink], { name: 'drinks' })
  async findAll() {
    const coffee = new Coffee();
    coffee.id = 1;
    coffee.name = 'Coffee';
    coffee.brand = 'Nest';

    const tea = new Tea();
    tea.name = 'Tea';

    return [coffee, tea];
  }
}
