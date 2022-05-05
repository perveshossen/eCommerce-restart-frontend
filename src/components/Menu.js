import { Link, withRouter } from "react-router-dom";
import {isAuthenticated, signout} from '../utils/auth';



const isActive = (history, path) => {
    if(history.location.pathname === path){
        return {color: '#ff9900'}
    } else{
        return {color: 'grey'}
    }
}

const Menu = ({ history }) => {
    return(
        <nav className='navbar navbar-dark bg-dark'>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link style={isActive(history, '/')} to="/" className="nav-link">Home</Link>
                </li>
                {!isAuthenticated() && (<><li className="nav-item">
                    <Link style={isActive(history, '/login')} to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link style={isActive(history, '/register')} to="/register" className="nav-link">Register</Link>
                </li></>)}
                {(isAuthenticated() &&<><li className="nav-item">
                    <span className="nav-link" style={{ cursor: 'pointer', color: 'grey' }} onClick={() => {
                        signout(() => {
                            history.push('/login')
                        });
                    }}>Logout</span>
                </li></>)}
            </ul>
        </nav>
    )
}

export default withRouter(Menu);