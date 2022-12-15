import { Link } from 'react-router-dom';
import * as userService from "../../utilities/users-service"

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            <Link to="/about">About</Link>
            &nbsp; | &nbsp;
            <Link to="/yourlist">Your List</Link>
            &nbsp; | &nbsp;
            <Link to="/done">Done</Link>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
            <p>Welcome, {user.name}!</p>
        </nav>
    );
}