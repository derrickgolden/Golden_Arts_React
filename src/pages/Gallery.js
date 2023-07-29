import React from 'react'
import { Link, useLocation, useNavigate, } from 'react-router-dom'
import { art } from './images'
import { names } from './images'

export class Gallery extends React.Component{
    
    render(){ 
        const type = this.props.artType === "gray"? <Gray />: <Colored  />;
            return(
                <>
                    <div>
                        {/* <!-- gallery images --> */}
                        <section className="gallery-section">
                            <div className="gallery-img"> { type } </div>
                        </section>   
                    </div> 
                </>
            )        
    }
}

const Colored = (props) =>{
    return(
<>
    <h3 className="art-type">COLORED PAINTINGS</h3>
    <div className="gallery-images">
        {art.coloredPaintings.colPaintingsPortrait.map((image,id) =>(
            <ImageDom key={id} name = {image} description ="COLORED DRAWING" 
             journeyBtn={false}/>
        ))}
        {art.coloredPaintings.colPaintingsLandscape.map((image, id) =>(
            <ImageDom key={id} name={image} description="COLORED PAINTING"
             journeyBtn={false} landscape={true} />
        ))}
    </div>
</>
)}

const Gray = (props) =>{
    
    return(
    <>
    <h3 className="art-type">BLACK AND WHITE DRAWING(GRAY)</h3>
    <div className="gallery-images">
        {art.grayDrawings.map((image,id) =>(
            <ImageDom key={id} name = {image} description ="BLACK AND WHITE DRAWING" 
            handleJourneyImages ={props.handleJourneyImages} journeyBtn={true}/>
        ))}
    </div>
    <h3 className="art-type">BLACK AND WHITE PAINTING(GRAY)</h3>
    <div className="gallery-images">
        {art.grayPaintings.grayPaintingsPortrait.map((image, id) =>(
            <ImageDom key={id} name={image} description="BLACK AND WHITE PAINTING" 
            journeyBtn={false}/>
        ))}
        {art.grayPaintings.grayPaintingsLandscape.map((image, id) =>(
            <ImageDom key={id} name={image} description="BLACK AND WHITE PAINTING"
             landscape={true} journeyBtn={false}/>
        ))}
    </div>
    </>
)}

const ImageDom = (props)=>{
    const start= props.name.indexOf("_") + 1
    const end = props.name.indexOf("_", start)
    const name = props.name.slice(start,end)
    const editName = name.replace(/-/, " ")

    return(  
        <div className={props.landscape? "Lscape1 Lscape": ""}>
            <img className={props.landscape? "landscape": ""} 
                src={props.name} alt={props.description}/>
            <br />
                <span>{editName}</span>
                {props.journeyBtn? 
                <div className="link-btns images-btns d-flex flex-column">
                    <Link to="/journeyimages" role="button" preventScrollReset={false}
                    state={{name: editName}}>View The Journey</Link>    
                </div>:
                null }
        </div>   
    )
}

export const JourneyImages = (props) =>{
    const {state} = useLocation()
    const name = state.name
    const varName = name.replace(" ", "")
    const navigate= useNavigate()
    
    return(
    <>
        <div>
            <section className="gallery-section">
                <div className="gallery-img">
                    <h3 className="art-type">Step by Step Drawing Journey for {name} </h3>
                    <div className="gallery-images">
                        {names[varName]? names[varName].map((image,id) =>(
                            <div key={id}><img  src={image} alt="COLORED DRAWING" /></div>
                        )): <div className='btn-ctr'><h3>We apologize, step by step journey for {name} art
                        is not available at the moment. Keep on enjoying more of Golden Arts.
                        Thank You. </h3></div>}
                    </div> 
                    <div className='btn-ctr'>
                        <button onClick={() => navigate(-1)} className="btn-cart">Go Back</button>
                    </div>
                </div>     
            </section>   
        </div> 
    </>
    )
}