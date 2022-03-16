import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";

const Navbar = () => {
    return (
        <ul className={styles.navbar}>
            <li>
                <NavLink
                    to="/"
                    style={({ isActive }) =>
                        isActive ? styles.selected : undefined
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    style={({ isActive }) =>
                        isActive ? styles.selected : undefined
                    }
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/"
                    style={({ isActive }) =>
                        isActive ? styles.selected : undefined
                    }
                >
                    Dummy Data
                </NavLink>
            </li>
        </ul>
    );
};

export default Navbar;
