import { Link } from "react-router-dom";

function About() {
    return (
        <div className="about-page">
            <p className="about-eyebrow">Our Story</p>
            <h1>About <em>Us</em></h1>
            <p>Fresh Mart started with a simple idea: every family deserves fruits and vegetables that are fresh, honest, and easy to get. We began as a small neighborhood shop and have grown into an online store, but our focus has stayed the same. We choose each product carefully, check its quality before it leaves our warehouse, and pack it so it reaches your doorstep in the best condition.</p>

            <p>We work directly with local farmers and trusted suppliers, which shortens the journey from the field to your kitchen. That means fresher produce, fair prices for growers, and fewer middlemen between you and the food you eat. Our team checks the weather, harvest times, and stock every morning, so the items you see on the shelf are the ones that are ready to eat that day.</p>
            
            <p>Our goal is to make healthy eating simple. Whether you are buying a week’s worth of groceries or just need a few apples for lunch, we want shopping with Fresh Mart to feel quick, clear, and trustworthy. We will keep listening to our customers, adding new products, and improving our delivery so that fresh food is always within reach.</p>
            <Link to="/" className="about-cta">Shop Now</Link>
        </div>
    );
}

export default About;