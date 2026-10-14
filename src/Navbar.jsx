import { Link } from 'react-router-dom';

function Navbar({search, setSearch, total}) {
    return (
        <nav className='navbar'>
            <div className="nav-logo">Fresh Mart</div>
            <input
                value={search}
                className="nav-search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for Products..."
            />

            <div className="nav-right">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>

                <div className="cart-icon">
                    🛒
                    <span className='cart-count'>{total}</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;