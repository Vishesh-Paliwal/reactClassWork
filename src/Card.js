import './Card.css'
import Avatar from './avatar.svg'
import { Carousel } from 'nuka-carousel';
function Card({header,subheader,img , text ,link ,linktext,position}){
    return <div> 
        <div className={`tile ${position}`}>
        <div className="img-parent">
            <img src={img} alt="img"/>
        </div>
        <div className="text-parent">
        <h2>{header}</h2>
        <h3>{subheader}</h3>
        <div className="text">{text}</div>
        <div className="link-parent">
            <a className="link" href={link}>{linktext}</a>
        </div>
        </div>
    </div>
        <Carousel showArrows wrapMode="wrap" autoplay={true} autoplayInterval={1000} >
    <img alt='a' src={Avatar}  width={700} height={700}/>
    <img alt='b' src={Avatar}  width={700} height={700}/>
    <img alt='c' src={Avatar}  width={700} height={700}/>
    <img alt='a' src={Avatar}  width={700} height={700}/>
    <img alt='b' src={Avatar}  width={700} height={700}/>
    <img alt='c' src={Avatar}  width={700} height={700}/>
    <img alt='a' src={Avatar}  width={700} height={700}/>
    <img alt='b' src={Avatar}  width={700} height={700}/>
    <img alt='c' src={Avatar}  width={700} height={700}/>
    <img alt='a' src={Avatar}  width={700} height={700}/>
    <img alt='b' src={Avatar}  width={700} height={700}/>
    <img alt='c' src={Avatar}  width={700} height={700}/>
    <img alt='a' src={Avatar}  width={700} height={700}/>
    <img alt='b' src={Avatar}  width={700} height={700}/>
    <img alt='c' src={Avatar}  width={700} height={700}/>
    <img alt='a' src={Avatar}  width={700} height={700}/>
    <img alt='b' src={Avatar}  width={700} height={700}/>
    <img alt='c' src={Avatar}  width={700} height={700}/>
    </Carousel>
    </div>
}

export default Card;