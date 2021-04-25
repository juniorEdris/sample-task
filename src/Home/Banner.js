import { Link } from 'react-router-dom'
import './home.css'

const Banner = (props) => {
    return (
        <div className="banner_wrapper">
            <div className="single_banner bg-secondary" style={ {background:`url()`} }>
                <div className="text_holder text-center">
                    <h3>natural health</h3>
                    <h1>natural health</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore vero eum ullam, <br/>doloremque consequatur reprehenderit?</p>
                    <Link to='#' className='btn btn-success text-light'>
                        shop now
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Banner;