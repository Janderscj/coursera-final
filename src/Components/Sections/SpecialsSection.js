import greekSalad from "../../Assets/greek salad.jpg";
import bruschetta from "../../Assets/bruchetta.svg";
import lemonDessert from "../../Assets/lemon dessert.jpg";

const specials = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    Image: greekSalad,
    footer: "Order a delivery",
  },
  {
    title: "Bruschetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    Image: bruschetta,
    footer: "Order a delivery",
  },
  {
    title: "Lemon Dessert",
    price: "$4.99",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
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
