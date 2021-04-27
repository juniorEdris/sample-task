import { Link } from 'react-router-dom';

const FreshFoods = () => {
    const foods = [
        {
            id: 1,
            photo: '01.jpg',
            name: 'Solid Basic Jumpsuit',
            price:'17.00',
        },
        {
            id: 2,
            photo: '02.jpg',
            name: 'Solid Basic Jumpsuit',
            price:'10.00',
        },
        {
            id: 3,
            photo: '03.jpg',
            name: 'Solid Basic Jumpsuit',
            price:'17.00',
        },
        {
            id: 4,
            photo: '04.jpg',
            name: 'Solid Basic Jumpsuit',
            price:'22.22',
        },
        {
            id: 5,
            photo: '05.jpg',
            name: 'Solid Basic Jumpsuit',
            price:'17.00',
        },
        {
            id: 6,
            photo: '06.jpg',
            name: 'Solid Basic Jumpsuit',
            price:'17.00',
        },
        {
            id: 7,
            photo: '07.jpg',
            name: 'Solid Basic Jumpsuit',
            price:'17.00',
        },
        {
            id: 8,
            photo: '08.jpg',
            name: 'Solid Basic Jumpsuit',
            price:'17.00',
        },
    ]
    return (
        <div className="fresh_foods_container mb-5">
            <div className="home_container_fluid">
                <div className="section_header">
                    <h1>fresh foods</h1>
                    <p>We provide fresh and health food service</p>
                </div>
                <div className="row">
                {foods.map(food => (
                        <div className="col-12 col-md-3 mb-3" key={ food.id}>
                        <div className="single_food">
                            <div className="food_thumb">
                                <img src={`./assets/images/products/${food.photo}`} alt={food.name} />
                            </div>
                            <div className="food_rating mb-2">
                                <span className={`rated`}>
                                <i className="fa fa-star" />
                                </span>
                                <span className={`rated`}>
                                <i className="fa fa-star" />
                                </span>
                                <span className={`rated`}>
                                <i className="fa fa-star" />
                                </span>
                                <span className={`rated`}>
                                <i className="fa fa-star" />
                                </span>
                                <span className={`not-rated`}>
                                <i className="fa fa-star" />
                                </span>

                            </div>
                            <div className="food_name">
                                <p> {food.name}</p>
                            </div>
                            <div className="food_price">
                                <p> <i className="fas fa-euro-sign"></i>{food.price}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default FreshFoods;