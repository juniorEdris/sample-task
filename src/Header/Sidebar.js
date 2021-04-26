import { Link } from 'react-router-dom';
import './sidebar.css'

const Sidebar = (props) => {
    const links = [
        {id:1,name:'new arrivals',route:'/new-arrivals'},
        {id:2,name:'today\'s sale',route:'/todays-sale'},
        {id:3,name:'flash sale',route:'/flashsale'},
    ]
    return (
        <div className="">
            <div className={`sidebar_wrapper ${props.sidebar ? 'active_sidebar' : ''}`}>
                <i className="fas fa-times-circle sidebar_times" onClick={ ()=>props.setSidebar(false)}></i>
                <ul>
                    {links.map(link => (
                    <li key={link.id}>
                            <Link to={link.route}>{ link.name}</Link>
                    </li>    
                    ))
                }
                </ul>
            </div>
         </div>
     );
}
 
export default Sidebar;