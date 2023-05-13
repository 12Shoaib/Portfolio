import contact from './contact.module.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {SlCallOut} from 'react-icons/sl'

const Contact = () => {
    return(
        <div className={contact.container}>
            <div className={contact.wrapper}>
            <div>
                <h1 className={contact.heading}>Mohd Shoaib</h1>
                <p className={contact.paragraph}>I'm a front-end developer with expertise in fusing the design and 
                    coding arts to create immersive and compelling user experiences 
                    through effective website creation, proactive feature optimisation, 
                    and persistent debugging.</p>
            </div>
            <div>
                <h1 className={contact.heading}>Social</h1>
                <div className={contact.contact_menu}>
                <a href='https://www.linkedin.com/in/mohammed-shoaib-a82a68208/' className={contact.icon_wrapper}><BsLinkedin /></a>
                <a href='https://github.com/12Shoaib' className={contact.icon_wrapper}><BsGithub/></a>
                <a href='mailto:Shoaibmohd916@gmail.com' className={contact.icon_wrapper}><SiGmail /></a>
                <a href='tel:+917893690962' className={contact.icon_wrapper}><SlCallOut /></a>
                </div>
            </div>
            </div>
            <div className={contact.copy_rights}>
                © Copyright 2023.Developed by : <span className={contact.highlighter}>Mohd Shoaib</span>
            </div>
        </div>
    )
}

export default Contact