import { Link } from 'react-router-dom'
import './header.css'

const Header = (props) => {
    return (
        <div className='header container-fluid bg-light'>
            <div className="row no-gutters">
                <div className="header_nav col-md-4">
                    <ul className=''>
                        <li>
                            <Link to='#'>
                                <i class="fas fa-bars mr-2"></i>categories<i class="fas fa-angle-down ml-2"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to='#'>new arrivals</Link>
                        </li>
                        <li>
                            <Link to='#'>todays deal's</Link>
                        </li>
                        <li>
                            <Link to='/ds'>flash sales</Link>
                        </li>
                    </ul>
                </div>
                <div className="header_logo col-md-4">
                    <Link to='/'>
                        <span className='logo_name'>store</span> <span className='ex text-danger'>x</span>
                    </Link>
                </div>
                <div className="header_btns col-md-4">
                <ul>
                        <li>
                            <Link to='#'><i class="fas fa-search"></i></Link>
                        </li>
                        <li>
                            <Link to='#'><i class="fas fa-shopping-basket"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default (Header)
