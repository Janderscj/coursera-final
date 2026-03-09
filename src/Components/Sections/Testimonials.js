import "../../Styles/Testimonials.css";
const testimonials = [
  { name: "Sarah", rating: 5, text: "Amazing food!" },
  { name: "John", rating: 4, text: "Loved the atmosphere." },
  { name: "Maria", rating: 5, text: "Best Mediterranean in Chicago!" },
];

function TestimonialSection() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <h3>{t.name}</h3>
            <p>{"⭐".repeat(t.rating)}</p>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
