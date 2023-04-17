import project from './project.module.css'
import Card from '../../Atoms/Cards/Card'
import {data} from '../../Constants/Constant'

const Project = () => {

    return(
        <div className={project.header}>
        <p className={project.heading}>Projects</p>
        <div className={project.main__Container}>
        {data.map((element) => <Card element={element} />)}

        </div>
        </div>
    )
}

export default Project