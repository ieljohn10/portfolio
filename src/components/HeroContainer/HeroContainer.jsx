import '../HeroContainer/HeroContainer.scss';
import ProfilePic from '../../assets/profile.jpg';
  
export default function HeroContainer(){
    
    return(
        <div className="HeroContainer">
            <div className="ScrollContainer" >

                {/* HOME */}
                <div className="HeroContainer-Item" id='Home'>
                        <div className="HomeContent">
                            <div className="HomeContent-Item">
                                <div className="textContainer">
                                    <div class="Title">
                                        <h1>Hi, I am Codexx</h1>
                                        <h1>An Aspiring Front-end Developer</h1>
                                        {/* <h1>A Self-taught Front-end Development Engineer</h1> */}
                                    </div>
                                    <div class="Subtitle">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Ex perspiciatis cum placeat aliquid possimus maxime dignissimos 
                                            repellat delectus similique reiciendis, rerum, ipsa ullam nisi earum velit. 
                                            Consequatur consectetur dolorem eius!
                                        </p>
                                    </div>
                                    <a id="Explore-btn" href="#Contact">
                                        <button>CONTACT ME</button>
                                    </a>
                                </div>
                            </div>
                        <div className="HomeContent-Item">
                            <div className="ImageContainer">
                                <img src={ProfilePic} alt="profile" />
                            </div>
                        </div>
                    </div>
                </div>




                <div className="HeroContainer-Item" id='Work'>
                    {/* <div className="WorkNavigation">
                        <span className="WorkNav">WORK EXPERIENCE</span>
                        <span className="WorkNav">SKILLS AND TOOLS</span>
                        <span className="WorkNav">STUDY</span>
                    </div>
                    <div className="WorkContentContainer">
                        <div>WORK EXPERIENCE</div>
                        <div>SKILLS AND TOOLS</div>
                        <div>STUDY</div>
                    </div> */}


                    <div class="card">
                        <p><span>WORK EXPERIENCE</span></p>
                        <p><span>SKILLS AND TOOLS</span></p>
                        <p><span>EDUCATIONAL BACKGROUND</span></p>
                    </div>
                </div>




                <div className="HeroContainer-Item" id='Contact'>

                </div>
            </div>
        </div>
    )
}