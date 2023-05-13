import card from './card.module.css'

const Card = (props) => {

    return(
        <div className={card.main_Container}>
            <span className={card.heading}>{props.element.projectName}</span>
            <img alt='image' className={card.image} src={props.element.image}/>
            <span className={card.role}>{props.element.role}</span>
            <span className={card.techstack}>{props.element.techStack}</span>
            <span className={card.description}>{props.element.description}</span>

        </div>
    )
}

export default Card