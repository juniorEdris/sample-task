import { Link } from 'react-router-dom'
import './home.css'

const Banner = (props) => {
    const banners = [
        {
            id: 1,
            photo:'banner-1.jpg',
        },
    ]
    return (
        <div className="banner_wrapper">
            {banners.map(banner => (
                <div className="single_banner" style={{ background: `url(./assets/images/banners/${banner.photo})` }} key={banner.id}>
                    <div className="">
                        <div className="banner_body">
                            <h3>natural health</h3>
                            <h1>Organic food</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore vero eum ullam, <br/>doloremque consequatur reprehenderit?</p>
                            <Link to='#' className='btn btn-success text-light '>
                                shop now
                            </Link>
                        </div>
                    </div>
            </div>
            ))}
        </div>
     );
}
 
export default Banner;