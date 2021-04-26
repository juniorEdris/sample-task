import { useState } from 'react';
import { Link } from 'react-router-dom'
import './header.css'
import Sidebar from './Sidebar';

const Header = (props) => {
    const [sidebar, setSidebar] = useState(false);
    return (
        <div className='header container-fluid bg-light'>
            <div className="row no-gutters">
                <div className="header_nav col-md-5">
                    <ul className=''>
                        <li>
                            <Link to='#'>
                                <i className="fas fa-bars mr-2"></i>categories<i className="fas fa-angle-down ml-2"></i>
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
                <div className="ham-burger col-4">
                    <Link to='#' onClick={ ()=>setSidebar(!sidebar)}>
                    <i className="fas fa-bars mr-2"/>
                    </Link>
                </div>
                <div className="header_logo col-5 col-md-4">
                    <Link to='/'>
                        <span className='logo_name'>store</span> <span className='ex text-danger'>x</span>
                    </Link>
                </div>
                <div className="header_btns col-3 col-md-3">
                <ul>
                        <li>
                            <Link to='#'><i className="fas fa-search"></i></Link>
                        </li>
                        <li>
                            <Link to='#'><i className="fas fa-shopping-basket"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
        </div>
    )
}


export default (Header)
