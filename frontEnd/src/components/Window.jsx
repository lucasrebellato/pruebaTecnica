import styles from '../styles/window.module.css'

const Window =  ({type, children}) => {
    return ( 

        <div className={styles[type]}>
                
            {children}
        
        </div>
        
     );
}

export default Window;
