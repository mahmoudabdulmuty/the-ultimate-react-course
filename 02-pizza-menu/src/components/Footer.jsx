function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 17;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className='footer'>
      <div className="order">
        <p>{isOpen && "We're Currently Open"}</p>
        <button className='btn'>Order</button>
      </div>
    </footer>
  );
}

export default Footer;
