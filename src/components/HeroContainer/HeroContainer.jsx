import '../HeroContainer/HeroContainer.scss';
import ProfilePic from '../../assets/profile.jpg';

export default function HeroContainer(){
    return(
        <div className="HeroContainer">
            <div className="ScrollContainer">
                <div className="HeroContainer-Item">1</div>
                <div className="HeroContainer-Item">2</div>
                <div className="HeroContainer-Item">3</div>
            </div>
        </div>
    )
}