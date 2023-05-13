import poster from './poster.module.css'
import Profile from '../Profile/Profile'

const Poster = () => {
    return (
        <div className={poster.main_Component}>
            <div className={poster.Header}>
            <h1 className={poster.heading}>Portfolio</h1>
                <div className={poster.Menu_options}>
                <a className={poster.links} href='#Home'><span className={poster.menu}>Home</span></a>
                <a className={poster.links} href='#About'><span className={poster.menu}>About</span></a>
                <a className={poster.links} href='#Project'><span className={poster.menu}>Project</span></a>
                <a className={poster.links} href='#About'><span className={poster.menu}>Skills</span></a>
                <a className={poster.links} href='#Contact'><span className={poster.menu}>Contact</span></a>
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
                <span className={poster.text}>
                    I'm a front-end developer with expertise in fusing the design and coding arts to create
                    immersive and compelling user experiences through effective website creation, 
                    proactive feature optimisation, and persistent debugging. 
                </span><br/>
                <a 
                href='/Shoaib_Resume.pdf' 
                download='File'
                target="_blank">
                <button className={poster.button}>
                    Download Resume
                    </button>
                    </a>
            </div>
        </div>
    )
}

export default Poster