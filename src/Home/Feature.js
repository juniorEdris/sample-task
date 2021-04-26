const Featur = (props) => {
    const features = [
        {id:1,head:'receive your orders',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, vero.',icon:'Shape.svg'},
        {id:2,head:'free returns',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, vero.',icon:'Shape2.svg'},
        {id:3,head:'100% Organic food',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, vero.',icon:'Shape1.svg'},
        {id:4,head:'enjoy',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, vero.',icon:'Shape3.svg'},
    ]
    return (
        <div className="feature_wrapper">
            <div className="home_container_fluid">
                <div className="row no-gutters">
                    {features.map(x => (
                        <div className="col-12 col-md-3 feature_item" key={x.id}>
                    <div className="mb-2">
                        <img src={`./assets/images/features/${x.icon}`} alt=""/>
                    </div>
                      <span>{x.head}</span>
                      <p>{x.body}</p>
                  </div>  
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Featur;