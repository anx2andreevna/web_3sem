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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={HOME_ROUTE} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={DYNAMIC_PAGINATION_ROUTE} className="nav-link">
                DynamicPagination
              </Link>
            </li>
            <li className="nav-item">
              <Link to={MASHA_ROUTE} className="nav-link">
                Маша
              </Link>
            </li>
            <li className="nav-item">
              <Link to={VLAD_ROUTE} className="nav-link">
                Влад
              </Link>
            </li>
            {isAuthenticated && (
              <li className="nav-item">
                <Link to={TABLE_PAGINATION_ROUTE} className="nav-link">
                  Таблица
                </Link>
              </li>
            )}
          </ul>
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
