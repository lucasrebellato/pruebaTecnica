import styles from '../../styles/header.module.css'
import { haveNumber } from '../../js/functions';

const Header = ({ menuItems, setMenu, activeElement })  => {
 
    return ( 
        <header className={styles.header}>
            {   
              menuItems.map((menuItem, i) => {
                let item = haveNumber(menuItem);
                return<button key={i} onClick={() => setMenu(menuItem)} className={`${menuItem === activeElement ? styles.active : ""} ${styles.button}`}>{item}</button>
              })
            }
        </header>
    );
}

export default Header;