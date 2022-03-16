import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import styles from "./style.module.scss";

const Header = ({ children, day }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>30 Days Of React</h1>
            {!isNaN(day) && parseInt(day) > 0 ? (
                <Link
                    to={"/solutions/day-" + (Number(day) + 1)}
                    className={styles.nextDay}
                >
                    Day {Number(day) + 1} &#62;&#62;
                </Link>
            ) : null}
            <Navbar />
            <div>{children}</div>
        </header>
    );
};

export default Header;
