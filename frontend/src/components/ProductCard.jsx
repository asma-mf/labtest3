import { Link } from "react-router-dom";
function ProductCard({ product, onDelete }) {

  let stockEl = "";

  if(product.stockQuantity > 10){
    stockEl = <span style = {{color : "green"}}>stock is normal</span>
  }
  else if(product.stockQuantity >= 1){
    stockEl = <span style ={{color : "yellow"}}> stock is low</span>
  }
  else{
    stockEl = <span style ={{color : "red"}}> stock is low</span>
  }

  return (
    <div className="card">
      <img
        src={product.imageUrl || "https://via.placeholder.com/400x200?text=Product"}
        alt={product.name}
        className="card-image"
      />
      <h3>{product.name}</h3>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>stock Quantity:</strong>{product.stockQuantity}</p>

     

      {stockEl}

      <p>{product.description}</p>
      <div className="card-actions">
        <Link className="btn secondary" to={`/edit-product/${product._id}`}>Edit</Link>
        <button className="btn danger" onClick={() => onDelete(product._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
