import home from './home.module.css'
import Poster from '../Poster/Poster'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Project from '../Projects/Projects'

const Home = () => {
    return(
        <div className={home.mainComponent}>

            <div id='Home'>
            <Poster />
            </div>

            <div id='About'>
                <About />
            </div>

            <div id='Skills'>
                <Skills />
            </div>

            <div id='Project'>
                <Project />

            </div>

        </div>
    )
}

export default Home


