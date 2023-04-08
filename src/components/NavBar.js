import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark py-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            RandoStore
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item mx-3 ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/data"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/additems">
                  Add Product
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
