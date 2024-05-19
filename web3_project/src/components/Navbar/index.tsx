import { ARTEM_ROUTE, MASHA_ROUTE, VLAD_ROUTE, TABLE_PAGINATION_ROUTE } from '../../app/routes/config'; 
import { Link } from 'react-router-dom'; 
import { createContext, useState } from 'react'; 
 
 
interface AuthContextType { 
  loginButtonText: string; 
  toggleLogin: () => void; 
} 
 
const defaultValue: AuthContextType = { 
  loginButtonText: '', 
  toggleLogin: () => {}, 
}; 
 
const AuthContext = createContext<AuthContextType>(defaultValue); 
 
const Navbar: React.FC = () => { 
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const loginButtonText = isAuthenticated ? "Выйти" : "Войти"; 
 
  const toggleLogin = () => { 
    setIsAuthenticated((prevState) => !prevState); 
  }; 
  return( 
    <div className='navbar'> 
        <div className='navbar__links'> 
          <Link to={ARTEM_ROUTE} className="routeLink"> 
            Артем
          </Link> 
          <Link to={MASHA_ROUTE} className="routeLink"> 
            Маша 
          </Link> 
          <Link to={VLAD_ROUTE} className="routeLink"> 
            Влад 
          </Link> 
          {isAuthenticated && ( 
            <Link to={TABLE_PAGINATION_ROUTE} className="routeLink"> 
              Таблица 
            </Link> 
          )} 
        </div> 
        <AuthContext.Provider value={{ loginButtonText, toggleLogin }}> 
          <div> 
            <button 
              onClick={toggleLogin} 
            > 
              {loginButtonText} 
            </button> 
          </div> 
        </AuthContext.Provider> 
        </div> 
  ); 
}; 
 
export default Navbar;
