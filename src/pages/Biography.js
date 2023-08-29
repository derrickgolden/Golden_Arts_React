import React from "react";
import photo from './images/Artist_photo1.jpg'
import nyeri from './images/colored/Nyeri_View.jpg'
import kid from './images/gray/Kid_hand_pic.jpg'

export class Biography extends React.Component{
    
    render(){
        return(
            <>
            <div className="bio-container">
                <section className="bio-section">
                    <h1> Diving into Derrick's World: </h1>
                    <p>Unveiling the Artistry of a Kenyan Talent. 
                        Explore the journey, creations, and passion that define the artist behind the name.</p>
                    <div className="about bio-image about-derrick">
                        <img src={photo} alt="" />
                        <div className="about-derrick-text">
                            <h2>About Derrick</h2>
                            <p>Derrick Nyarangi, also known as Golden (born 1995), is a prominent Kenyan Artist located in Nairobi. 
                                Renowned for his masterful hyperrealistic pencil drawings and captivating oil paintings, 
                                Derrick's artistic prowess shines. His primary artistic focus revolves around intricate portrait drawings, 
                                while he also beautifully captures the essence of wildlife and landscapes in his paintings.
                            </p>
                        </div>
                    </div>
                    <div className="bio-image">
                    </div>
                    <div className="mid-banner">
                        <h4>"Art: My Irresistible Addiction. Like a drug's pull, I'm drawn to it. <br />
                            This compels me to craft with unwavering precision, striving for nothing less than perfection."
                        </h4>
                        <img src={nyeri} alt="" />
                        <p>Painting of somewhere in Nyeri</p>
                    </div>
                    <div className="journey">
                        <h2>From Hobby to Masterful Artistry</h2>
                        <p style={{marginBottom: "1rem"}}>
                            Embarking on his artistic journey nearly a decade ago during his campus days, 
                            Golden's passion for drawing swiftly evolved from a hobby into an extraordinary career. 
                            With meticulous skill refinement, his artistry began captivating hearts, 
                            leading to requests for personal and cherished portrait commissions.
                        </p>
                        <p>Crafting each piece is an artful process, often spanning two to seven days, 
                            sculpted by intricacy and the artwork's dimensions. 
                            As he aptly asserts, 'Patience becomes the brushstroke of every masterpiece.
                        </p>
                    </div>
                    <div className=" artist-state">
                        <div className="artist-state-text">
                            <h2>My Artistic Harmony</h2>
                            <p>"Discovering Happiness in Simplicity: Pencil and Paper, 
                                Canvas and Brush – My Artistic Symphony. <br />
                                To me, art resonates like music, where the pencil becomes my instrument, 
                                the drawing and painting form my melodic composition, and 
                                the space it adorns becomes the stage for my artistic audience to enjoy." 
                            </p>
                        </div>
                    </div>
                </section>    
                <div className="artist-state-img">
                    <img src={kid} alt="" />
                </div>
            </div>        
            </>
        )
    }
}