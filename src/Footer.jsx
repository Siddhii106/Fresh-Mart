import { Link } from "react-router-dom";

function Footer() {
    return (
            <footer className="footer">
                <div className="footer-grid">
                    <div>
                        <h3 className="footer-brand">Fresh Mart</h3>
                        <p>Farm-fresh fruits and vegetables delivered straight to your doorstep.</p>
                    </div>

                    <div>
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Subscribe</h4>
                        <p>Get exclusive deals and fresh updates in your inbox.</p>
                        <input type="email" placeholder="Enter your Email." />
                        <button>Subscribe</button>
                    </div>
                </div>
                <p className="footer-bottom">© 2026 Fresh Mart. All rights reserved.</p>
            </footer>
     );
}

export default Footer;