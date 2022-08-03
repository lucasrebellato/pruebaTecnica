import styles from '../../styles/list.module.css'
import { getNumber, converterArr } from '../../js/functions';

const List = ({subMenu, mainMenu, data })  => {
    return ( 
        
        <div id="list" >
            
            <h3 className={styles.h3}>Number of users in module {getNumber({subMenu})} :</h3>

            {subMenu && (
                <div className={styles.buttonContent}>
                {
                data[mainMenu][subMenu] && converterArr(data[mainMenu][subMenu]).sort((a,b) => a-b).map((user, i) => {

                    return <button key={i} className={`${styles.listItem} ${styles.button}`}>User {getNumber({user})}</button>

                })
                }
           
                </div>
            )}

        </div>
    );
}

export default List;