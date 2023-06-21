function Pizza({ name, ingredients, price, img, soldOut }) {
  return (
    <div className='pizza'>
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default Pizza;
