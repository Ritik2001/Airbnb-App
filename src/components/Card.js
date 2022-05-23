
import Star from "../images/Star.png"

const Card = function(props){

    let badgeText
    if(props.openSpots === 0)
    {
        badgeText="SOLD"
    }
    else if(props.country === "Online")
    {
        badgeText="ONLINE"
    }
    return (

            <div className="card">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={ require(`../images/${props.img}`) } alt="Experience" />

                <div className="rating-location">
                    <img className="star" src={Star} alt="" /> 
                    <span className="gray"> {props.rating} </span>
                    <span className="gray"> ({props.reviewCount}) &bull; </span>
                    <span className="gray"> {props.country} </span>   
                </div>
                <p className="card-title">{props.title} </p>
                <p className="pricetag"> <span className="bold">From ${props.price}</span> / person </p>
            </div>
        

    )
}

export default Card