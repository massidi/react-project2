import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav className="main-nav">
            <ul>
              <li> <Link to="/">Home</Link></li>
                <li>Articles</li>
                <li>About</li>
                <li> <Link to="/contact"> Contact</Link> </li>
            </ul>
        </nav>
    );
}

export default Nav;