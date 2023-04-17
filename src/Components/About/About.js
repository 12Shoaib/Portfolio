import about from './about.module.css';

const About =  () => {
    return(
        <div className={about.main__Component}>   
        <p className={about.heading}>About me</p>
        <div className={about.content_Container}>
            <p className={about.content}>
                Hello there , Iam Mohd Shoaib born and brought up in hyderabad.
                I have completed my <span>Btech</span> from nawab shah alam khan
                collage of engineering and technology, my major was in information technology 
                and iam a 2022 graduate with first class degree. After my graduation i joined
                function up as a <span>front-end developer</span> trainee and during my training 
                i even got selected as a <span>teching assistant </span> for fron-end developers.
            </p>

        </div>

        </div>
    )
}

export default About