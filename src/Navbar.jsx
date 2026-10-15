import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import SearchiconImg from './assets/Searchiconimg.jpg';
import CartImg from './assets/CartImg.svg';

function Navbar({ search, setSearch, total, user, onLogout }) {
    const [searchOpen, setSearchOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className={`navbar ${user ? "logged-in" : "" }`}>
                <div className="nav-logo">Fresh Mart</div>

                <div className={`nav-search-wrap ${searchOpen ? "open" : ""}`}>
                    <button 
                        type="button"
                        className="search-toggle"
                        aria-label="Search products"
                        onClick={() => setSearchOpen(!searchOpen)}
                    >
                        <img src={SearchiconImg} alt="" className="search-icon-img"/>
                    </button>

                    <input
                    value={search}
                    className="nav-search"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search for Products..."
                    />

                </div>

                <div className="nav-right">
                    <button
                        type="button"
                        className="menu-toggle"
                        aria-label="Open Menu"
                        onClick={() => setMenuOpen(true)}
                    >
                        ☰
                    </button>

                    
                <div className="nav-right">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        {!user && (
                            <>
                                <li><Link to="/login">Log In</Link></li>
                                <li><Link to="/signup">Sign Up</Link></li>
                            </>
                        )}
                    </ul>

                </div>
                    <Link to="/cart" className="cart-link">
                        <div className="cart-icon">
                            <img src={CartImg} alt="Cart" className="cart-icon-img" />
                            <span className='cart-count'>{total}</span>
                        </div>
                    </Link>
                    
                </div>
            </nav>
            
            <Sidebar 
                isOpen={menuOpen} 
                onClose={() => setMenuOpen(false)}
                user={user}
                onLogout={onLogout}
            />
        </>
    );
}

export default Navbar;