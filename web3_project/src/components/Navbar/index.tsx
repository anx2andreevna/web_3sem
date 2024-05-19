import {
  HOME_ROUTE,
  DYNAMIC_PAGINATION_ROUTE,
  MASHA_ROUTE,
  VLAD_ROUTE,
  TABLE_PAGINATION_ROUTE,
} from "../../app/routes/config";
import { Link } from "react-router-dom";
import { createContext, useState } from "react";

interface AuthContextType {
  loginButtonText: string;
  toggleLogin: () => void;
}

const defaultValue: AuthContextType = {
  loginButtonText: "",
  toggleLogin: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultValue);

const Navbar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const loginButtonText = isAuthenticated ? "Выйти" : "Войти";

  const toggleLogin = () => {
    setIsAuthenticated((prevState) => !prevState);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link to={HOME_ROUTE} className="navbar-brand" aria-current="page">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to={DYNAMIC_PAGINATION_ROUTE} className="nav-link">
              DynamicPagination
            </Link>
            <Link to={MASHA_ROUTE} className="nav-link">
              About us
            </Link>
            <Link to={VLAD_ROUTE} className="nav-link">
              Contacts
            </Link>
            {isAuthenticated && (
              <Link to={TABLE_PAGINATION_ROUTE} className="nav-link">
                Table
              </Link>
            )}
          </div>
        </div>
        <AuthContext.Provider value={{ loginButtonText, toggleLogin }}>
          <div>
            <button className="btn btn-primary" onClick={toggleLogin}>
              {loginButtonText}
            </button>
          </div>
        </AuthContext.Provider>
      </div>
    </nav>
  );
};

export default Navbar;
