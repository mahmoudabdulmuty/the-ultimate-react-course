import pizzaData from '../pizzaData';
import Pizza from './Pizza';

function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {pizzaData.map((pizza, index) => (
        <Pizza
          key={index}
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
          img={pizza.photoName}
          soldOut={pizza.soldOut}
        />
      ))}
    </main>
  );
}

export default Menu;
