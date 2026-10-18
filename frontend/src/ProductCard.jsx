
function ProductCard (props) {

    return (
        <> 
            <div className= "product-card">
                <img src={props.image} alt={props.name} />
                {props.tag && (<span className="product-tag" style={{ color: "#000", fontSize: "12px" }}>{props.tag}
                    </span>
                )}
                <h2>{props.name}</h2>

                <div className="product-card-info">
                    <span className="rating">★ {props.rating}</span>
                    <span className="weight">{props.weight}</span>
                </div>

                
                <div className="card-footer">
                    <span className="price">{props.price}</span>

                {props.quantity === 0 ? (
                    <button className="add-btn" onClick={props.onAdd}>Add</button>
                ) : (
                    <div className="stepper">
                        <button onClick={props.onRemove}>-</button>
                        <span>{props.quantity}</span>
                        <button onClick={props.onAdd}>+</button>
                    </div>
                )}
                </div>
            </div>
            
        </>
       
    )
}

export default ProductCard;