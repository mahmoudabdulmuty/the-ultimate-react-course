function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  if (hour > closeHour) {
    alert('we are closed');
  } else if (hour < openHour) {
    alert('we are still not open');
  }

  return <footer className="footer">{hour}</footer>;
}

export default Footer;
