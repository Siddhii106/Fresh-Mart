import { useState } from "react";

function ProductCard (props) {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
        props.onAdd();
    }

    function decrement() {
        if (count === 0) return;
        setCount(count - 1);
        props.onRemove;
    }

    return (
        <> 
            <div className= "product-card">
                <img src={props.image} alt={props.name} />
                {props.tag && <span className="product-tag">{props.tag}</span>}
                <h2>{props.name}</h2>

                <div className="product-card-info">
                    <span className="rating">★ {props.rating}</span>
                    <span className="weight">{props.weight}</span>
                </div>

                
                <div className="card-footer">
                    <span className="price">{props.price}</span>

                {count === 0 ? (
                    <button className="add-btn" onClick={increment}>Add</button>
                ) : (
                    <div className="stepper">
                        <button onClick={decrement}>-</button>
                        <span>{count}</span>
                        <button onClick={increment}>+</button>
                    </div>
                )}
                </div>
            </div>
            
        </>
       
    )
}

export default ProductCard;