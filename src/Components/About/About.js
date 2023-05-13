import about from './about.module.css';

const About =  () => {
    return(
        <div className={about.main__Component}>
        <div>      
        <h1 className={about.heading}>About me</h1>
        <div className={about.content_Container}>
            <p className={about.content}>
                Hello there , Iam Mohd Shoaib born and brought up in hyderabad.
                I have completed my <span className={about.highlighter}>Btech</span> from nawab shah alam khan
                collage of engineering and technology, my major was in information technology 
                and iam a 2022 graduate with first class degree. After my graduation i joined
                FunctionUp as a <span className={about.highlighter}>front-end developer</span> trainee and during my training 
                i even got selected as a <span className={about.highlighter}>teching assistant </span> for fron-end developers.
            </p>
            <p className={about.content}>
            I'm open to Job opportunities where I can contribute, learn and grow.
            If you have a good opportunity that matches my skills and experience 
            then do contact me.
            </p>
        </div>
        </div>
        <img src='https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg' className={about.aboutImage} />
        </div>
    )
}

export default About