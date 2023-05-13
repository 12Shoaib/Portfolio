import sidemenu from './sidemenu.module.css'
import {AiFillHome} from 'react-icons/ai'
import {BsFillPersonVcardFill} from 'react-icons/bs'
import {HiCodeBracketSquare} from 'react-icons/hi2'
import {BsUiChecks} from 'react-icons/bs'
import {FaPhoneSquareAlt} from 'react-icons/fa'


const SideMenu = () => {
    return (
        <div className={sidemenu.container}>
            <div className={sidemenu.menu}>
            <div className={sidemenu.content_wrapper}><a href='#Home'><AiFillHome className={sidemenu.icon}/></a><span className={sidemenu.info}>Home</span></div>
            <div className={sidemenu.content_wrapper}><a href='#About'><BsFillPersonVcardFill className={sidemenu.icon} /></a><span className={sidemenu.info}>About</span></div>
            <div className={sidemenu.content_wrapper}><a href='#Skill'><HiCodeBracketSquare className={sidemenu.icon}/></a><span className={sidemenu.info}>Skill</span></div>
            <div className={sidemenu.content_wrapper}><a href='#Project'><BsUiChecks className={sidemenu.icon} /></a><span className={sidemenu.info}>Project</span></div>
            <div className={sidemenu.content_wrapper}><a href='#Connect'><FaPhoneSquareAlt className={sidemenu.icon}/></a><span className={sidemenu.info}>Comtact</span></div>
            </div>

        </div>
    ) 

}

export default SideMenu