import Pizzas from '../pizzaData';
import Pizza from './Pizza';

function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <ul className='pizzas'>
        {Pizzas.length > 0 &&
          Pizzas.map((pizza, index) => <Pizza pizzaObj={pizza} key={index} />)}
      </ul>
    </main>
  );
}

export default Menu;
