import { Link } from 'react-router-dom';

const PopularCategories = () => {
    const categories = [
        {
            id: 1,
            photo: '01.jpg',
            name: 'malta slices',
            count:'17',
        },
        {
            id: 2,
            photo: '02.jpg',
            name: 'mixed foods',
            count:'10',
        },
        {
            id: 3,
            photo: '03.jpg',
            name: 'orange juice',
            count:'17',
        },
        {
            id: 4,
            photo: '04.jpg',
            name: 'special apples',
            count:'22',
        },
        {
            id: 5,
            photo: '05.jpg',
            name: 'vegetables',
            count:'17',
        },
        {
            id: 6,
            photo: '06.jpg',
            name: 'starwberry',
            count:'17',
        },
    ]
    return (
        <div className="popular_cat_wrapper">
            <div className="home_container_fluid">
                <div className="section_header">
                    <h1>popular categories</h1>
                    <p>Add Popular Categories to weekly line up</p>
                </div>
                <div className="row row-container">
                    {categories.map(cat => (
                        <div className="col-12 col-md-4 mb-3" key={ cat.id}>
                        <div className="single_catgory ">
                            <div className="category_childs" style={{background:`url(./assets/images/categories/${cat.photo})`}}>
                                <h4 className="cat_head">{cat.name}</h4>
                                <div className="">
                                <span className="cat_count mb-2">{cat.count} products</span>
                                </div>
                                <div className="">
                                <Link to='#' className='show_btn'>show more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>
     );
}
 
export default PopularCategories;