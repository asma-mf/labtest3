import { Link } from "react-router-dom";

function ProductCard({ product, onDelete }) {


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
