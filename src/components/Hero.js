import Grid from "../images/Group 77.png"
const Hero=function(){
    return (
        <section className="hero">
            <div className="image-container">
            <img src={Grid} alt="grid-pics" />
            </div>
            <div className="textContentArea">
            <h1> Online Experiences </h1>
            <p> 
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
            </div>
        </section>

    )

}
export default Hero