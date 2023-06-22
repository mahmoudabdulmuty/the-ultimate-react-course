import pizzaData from '../pizzaData';
import Pizza from './Pizza';

function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <ul className='pizzas'>
        {pizzaData.map((pizza, index) => (
          <Pizza pizzaObj={pizza} key={index} />
        ))}
      </ul>
    </main>
  );
}

export default Menu;
