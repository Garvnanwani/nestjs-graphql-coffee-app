import { Query, Resolver } from '@nestjs/graphql';
import { DrinksResultUnion } from 'src/common/unions/drinks-result.union';
import { Coffee } from './../coffees/entities/coffee.entity';
import { Tea } from './../teas/entities/tea.entity';

@Resolver()
export class DrinksResolver {
  @Query(() => [DrinksResultUnion], { name: 'drinks' })
  async findAll(): Promise<typeof DrinksResultUnion[]> {
    {
      const coffee = new Coffee();
      coffee.id = 1;
      coffee.name = 'Coffee';
      coffee.brand = 'Nest';

      const tea = new Tea();
      tea.name = 'Tea';

      return [coffee, tea];
    }
  }
}
