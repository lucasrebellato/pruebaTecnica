import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashCan, faLightbulb, faCirclePlus, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import stylesFooter from '../../styles/footer.module.css'

const Footer = ()  => {

    return ( 
        <footer className={stylesFooter.footer}>
            
            <button className={`${stylesFooter.button} ${stylesFooter.delete}`}>Delete <FontAwesomeIcon icon={faTrashCan} /></button>
            <button className={`${stylesFooter.button} ${stylesFooter.advice}`}>Advice <FontAwesomeIcon icon={faLightbulb} /></button>
            <button className={`${stylesFooter.button} ${stylesFooter.create}`}><FontAwesomeIcon icon={faCirclePlus}/> Create</button>
            <button className={`${stylesFooter.button} ${stylesFooter.submit}`}>Submit <FontAwesomeIcon icon={faAngleRight} /></button>
       
        </footer>
    );
}

export default Footer;