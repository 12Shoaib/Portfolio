import home from './home.module.css'
import Poster from '../Poster/Poster'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Project from '../Projects/Projects'
import Contact from '../Contact/Contact'

const Home = () => {
    return(
        <div className={home.mainComponent}>

            <div id='Home'>
            <Poster />
            </div>

            <div className={home.container} id='About' >
                <About />
                <div id='Skill'>
                <Skills />
                </div>
            </div>

            <div id='Project'>
                <Project />
            </div>
            <div id='Contact'>
                <Contact/>
            </div>

        </div>
    )
}

export default Home


