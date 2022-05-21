import { NavLink, Outlet } from "react-router-dom";
import styles from './Page.module.css'

export default function Page() {
    return (
        <>
            <h1>My app</h1>

            <nav className={styles.nav}>
                {/* NavLink performs client-side routing, and allows us to change style based on whether link is active. */}
                <NavLink to="about" className={({isActive}) => isActive ? styles.activeLink : styles.inactiveLink}>About me!</NavLink>
                <NavLink to="todos" className={({isActive}) => isActive ? styles.activeLink : styles.inactiveLink}>Todos</NavLink>
            </nav>

            {/* Allows ReactRouter to render child routes */}
            <Outlet />

        </>
    )
}