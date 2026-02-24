import greekSalad from "../../Assets/greek salad.jpg";
import bruschetta from "../../Assets/bruchetta.svg";
import lemonDessert from "../../Assets/lemon dessert.jpg";

const specials = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description: "Crisp lettuce...",
    Image: greekSalad,
    footer: "Order a delivery",
  },
  {
    title: "Bruschetta",
    price: "$5.99",
    description: "Grilled bread...",
    Image: bruschetta,
    footer: "Order a delivery",
  },
  {
    title: "Lemon Dessert",
    price: "$4.99",
    description: "Sweet and tart...",
    Image: lemonDessert,
    footer: "Order a delivery",
  },
];

function SpecialSection() {
  return (
    <section className="specials-section">
      <span className="specials-header">
        <h2>Specials</h2>
        <button className="special-button">Order Online</button>
      </span>
      <div className="specials-grid">
        {specials.map((item, i) => (
          <div className="special-card" key={i}>
            <img src={item.Image} alt={item.title} className="special-image" />
            <div className="special-text">
              <h3 className="special-title">
                {item.title}
                <span className="special-price">{item.price}</span>
              </h3>
              <span className="special-description">{item.description}</span>
            </div>
            <button className="special-card-button">{item.footer}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpecialSection;
