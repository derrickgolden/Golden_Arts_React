import React from "react";
import photo from './images/Artist_photo1.jpg'
import nyeri from './images/colored/Nyeri_View.jpg'
import kid from './images/gray/Kid_hand_pic.jpg'

export class Biography extends React.Component{
    state = {message: null};

    requestApi = () =>{
    // React.useEffect(() => {
      fetch("/api")
        .then((res) => {
            console.log(res);
            return res.json()
        })
        .then((data) => {
            console.log(data);
            this.setState(data);
        })
    // }, []);
  }
    render(){
        return(
            <>
            <div className="bio-container">
                <section className="bio-section">
                    <h2 onClick={this.requestApi}>{!this.state.message? "Biography" : this.state.message}</h2>
                    <div className="about bio-image about-derrick">
                        <img src={photo} alt="" />
                        <div className="about-derrick-text">
                            <h2>About Derrick</h2>
                            <p>Derrick Nyarangi alias Golden(b. 1995) is a Kenyan Artist based in Nairobi, known 
                                for his hyperrealistic pencil drawings and oil paintings. Primarily focuses on 
                                portrait drawings and regularly does paintings of wildlife and landscapes.
                            </p>
                        </div>
                    </div>
                    <div className="bio-image">
                    </div>
                    <div className="mid-banner">
                        <h4>"Art is a drug am addicted to it. For that reason, I can only do it to perfection at the
                            bare minimum."
                        </h4>
                        <img src={nyeri} alt="" />
                        <p>Painting of somewhere in Nyeri</p>
                    </div>
                    <div className="journey">
                        <h2>The Journey</h2>
                        <p>Golden started drawing close to a decade ago while on campus. He began as a hobby. 
                            After perfecting his skills, people started requesting a portrait for themselves 
                            or as a gift for a loved one. A hobby turned into a career.
                        </p>
                        <p>His works normally take anywhere from two to seven days to complete depending on
                            the complexity and the size of the artwork. As he says, "Patience is key"
                        </p>
                    </div>
                    <div className=" artist-state">
                        <div className="artist-state-text">
                            <h2>Artist Statement</h2>
                            <p>Simple things make me happy; a pencil and paper or canvas and brush. This way art 
                                to me is like music, the pencil is my instrument, the drawing/painting is my song,
                                and the home the art will hang is my audience. 
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