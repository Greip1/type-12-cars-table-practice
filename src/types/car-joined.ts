import Brand from './brand';
import Car from './car';
import Model from './model';

type CarJoined = {
  id: Car['id'];
  price: Car['price'];
  year: Car['year'];
  brand: Brand['title'];
  model: Model['title'];
};

export default CarJoined;
