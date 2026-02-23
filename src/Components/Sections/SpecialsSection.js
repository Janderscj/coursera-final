const specials = [
  { title: "Greek Salad", price: "$12.99", description: "Crisp lettuce..." },
  { title: "Bruschetta", price: "$5.99", description: "Grilled bread..." },
  { title: "Lemon Dessert", price: "$4.99", description: "Sweet and tart..." },
];

function SpecialSection() {
  return (
    <section className="specials">
      <h2>This Week’s Specials</h2>
      <div className="specials-grid">
        {specials.map((item, i) => (
          <div className="special-card" key={i}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpecialSection;
