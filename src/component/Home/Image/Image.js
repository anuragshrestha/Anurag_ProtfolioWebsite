import './Image.scss';
import image from '../../../assets/images/anurag.png';


const logo = () => {


    return (
        <div className='logo-container'>
            <img className='solid-logo' src={image} alt='S'/>

        </div>
    )
}


export default logo;