import profile from './profile.module.css'

const Profile = ( ) => {

    return (
        <div className={profile.main_Component}>
            <img 
            className={profile.user_Image}
             alt='UserPhoto' 
             src='https://res.cloudinary.com/dmm420bfv/image/upload/ar_1:1,b_rgb:262c35,bo_5px_solid_rgb:000000,c_fill,g_auto,r_max,w_1000/v1681416165/WhatsApp_Image_2023-04-14_at_1.20.29_AM_ttwpwi.jpg'
              />

        </div>
    )
}

export default Profile