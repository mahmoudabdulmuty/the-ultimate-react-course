function Pizza({ pizzaObj }) {
  const pizzaClass = `pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`;
  const displayPrice = pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price;

  return (
    <li className={pizzaClass}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{displayPrice}</span>
      </div>
    </li>
  );
}

export default Pizza;
