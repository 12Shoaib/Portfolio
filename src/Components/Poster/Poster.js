import poster from './poster.module.css'
import Profile from '../Profile/Profile'

const Poster = () => {
    return (
        <div className={poster.main_Component}>
            <div className={poster.Header}>
            <h1 className={poster.heading}>Portfolio</h1>
                <div className={poster.Menu_options}>
                <span className={poster.menu}>Home</span>
                <span className={poster.menu}>About</span>
                <span className={poster.menu}>Project</span>
                <span className={poster.menu}>Skills</span>
                <span className={poster.menu}>Contact</span>
                </div>
            </div>

            <div className={poster.user_image}>
                <Profile />
            </div>

            <div className={poster.introduction_subHeading}>
                <h1 className={poster.sub_Heading}>Hi, Iam 
                <span className={poster.user_Name}>Mohd Shoaib</span>
                </h1>
                <h2 className={poster.sub_Heading}>Front-End Developer</h2>
                <span className={poster.text}>Welcome to my Portfolio</span>
            </div>
        </div>
    )
}

export default Poster