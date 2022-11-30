import '../HeroContainer/HeroContainer.scss';
import ProfilePic from '../../assets/profile.jpg';

export default function HeroContainer(){
    return(
        <div className="HeroContainer">
            <div className="Container">
                <div className="Container-Item" id='Home'>
                    <div className="HeroTextContainer">
                       <div className="HeroText">
                            <h1>Hi, I am Ariel Galvez A Front-end Engineer Based in City.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Consequatur doloribus facilis molestiae velit inventore quae repellat ratione non temporibus saepe architecto, 
                                repudiandae recusandae ipsam quas dolorum! Rerum quisquam dolore tempore!</p>
                                <button>EXPLORE</button>
                       </div>
                    </div>
                    <div className="HeroProfileContainer">
                        <img src={ProfilePic} alt="profile" />
                    </div>
                </div>
                <div className="Container-Item" id='Work'>WORK</div>
                <div className="Container-Item" id='Cnntact'>CONTACT</div>
            </div>
        </div>
    )
}