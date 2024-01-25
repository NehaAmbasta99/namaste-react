import { Link } from "react-router-dom";
import logo from '../assets/logo Background.png';
const HeaderComponent = () => {
    return (
    <div className="fixed-header border-shad">
        <div className="container">
            <nav>
            <img src={logo} className="logo"/>
                <Link to="/">HANGRY</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </div>
    </div>
    );
}

export default HeaderComponent;