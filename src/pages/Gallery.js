import React from 'react'

import couple from "./images/colored/sm_couple_col_comp.jpg" 
import photo1 from "./images/colored/sm_prision_col_comp.jpg" 
import lady from "./images/colored/sm_lady_col_inc.jpg" 
import leopard from "./images/colored/sm_leop_monkey_col.jpg" 
import cheetah from "./images/colored/sm_cheetah_col.jpg" 
import shark from "./images/colored/sm_shark_lady_col.jpg" 
import lady1 from "./images/colored/sm_lady1_col.jpg"
import mzungu from "./images/colored/sm_mzungu_family_col.jpg"
import kinoti from "./images/colored/sm_kinoti_wall_col.jpg"

import betty from "./images/gray/sm_betty_complete.JPG"
import twinKid from "./images/gray/sm_twin_kid_complete.JPG"
import lawKid from "./images/gray//sm_law_kid_comp.jpg"
import cynthia from "./images/gray/sm_cynthia_comp.jpg"
import daisy from "./images/gray/sm_daisy_comp.jpg"
import winnie from "./images/gray/sm_winnie_comp.jpg"

import dadSon from "./images/gray/sm_dad_son_paint_complete.jpg"
import couple1 from "./images/gray/sm_couple_paint_comp.jpg"
import sunFace from "./images/gray/sm_sun_face_paint_comp.jpg"
import qatar from "./images/gray/sm_qatar_paint_comp.jpg"
import nigeriaFamily from "./images/gray/sm_nigeria_family_paint_comp.jpg" 
import SA_Family from "./images/gray/sm_SA_family_paint_comp.jpg" 
            

export class Gallery extends React.Component{
    render(){ 
        const type = this.props.artType === "gray"? <Gray />: <Colored />;
            return(
                <div>
                    {/* <!-- gallery images --> */}
                    <section className="gallery-section">
                        <div className="gallery-img"> { type }
                        </div>
                    </section>   
                </div>
            )        
    }
}

const Colored = () =>(
<>
    <h3 className="art-type">COLORED PAINTINGS</h3>
    <div className="gallery-images">
        <div><img src= {couple} alt="COLORED PAINTING" /></div>
        <div><img src= {photo1} alt="COLORED PAINTING" /></div>
        <div><img src= {lady} alt="COLORED PAINTING" /></div>
        <div><img src= {leopard} alt="COLORED PAINTING" /></div>
        <div><img src= {cheetah} alt="COLORED PAINTING" /></div>
        <div><img src= {shark} alt="COLORED PAINTING" /></div>
        <div className="Lscape3 Lscape">
            <img className="landscape" src= {lady1} alt="COLORED PAINTING" /></div>
        <div className="Lscape4 Lscape">
            <img className="landscape" src={mzungu} alt="COLORED PAINTING" /></div>
        <div className="Lscape5 Lscape">
            <img className="landscape" src={kinoti} alt="COLORED PAINTING" /></div>
    </div>
</>
)
const Gray = () =>(
    <>
    <h3 className="art-type">BLACK AND WHITE DRAWING(GRAY)</h3>
    <div className="gallery-images">
        <div><img src={betty} alt="BLACK AND WHITE DRAWING" /></div>
        <div><img src={twinKid} alt="BLACK AND WHITE DRAWING" /></div>
        <div><img src={lawKid} alt="BLACK AND WHITE DRAWING" /></div>
        <div><img src={cynthia} alt="BLACK AND WHITE DRAWING" /></div>
        <div><img src={daisy} alt="BLACK AND WHITE DRAWING" /></div>
        <div><img src={winnie} alt="BLACK AND WHITE DRAWING" /></div>
    </div>
    <h3 className="art-type">BLACK AND WHITE PAINTING(GRAY)</h3>
    <div className="gallery-images">
        <div><img src={dadSon} alt="BLACK AND WHITE PAINTING" /></div>
        <div><img src={couple1} alt="BLACK AND WHITE PAINTING" /></div>
        <div><img src={sunFace} alt="BLACK AND WHITE PAINTING" /></div>
        <div><img src={qatar} alt="BLACK AND WHITE PAINTING" /></div>
        <div className="Lscape1 Lscape">
            <img className="landscape" src={nigeriaFamily} 
            alt="BLACK AND WHITE PAINTING" /></div>
        <div className="Lscape2 Lscape">
            <img className="landscape" src={SA_Family} 
            alt="BLACK AND WHITE PAINTING" /></div>
    </div>
    </>
)