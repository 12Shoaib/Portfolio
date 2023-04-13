import home from './home.module.css'
import Poster from '../Poster/Poster'

const Home = () => {
    return(
        <div className={home.mainComponent}>
            <Poster />
        </div>
    )
}

export default Home