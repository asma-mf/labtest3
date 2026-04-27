import { useEffect, useState } from "react";
import { deleteProduct, getProducts } from "../api/productApi.js";
import ProductCard from "../components/ProductCard.jsx";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (!confirmed) return;

    try {
      await deleteProduct(id);
      fetchProducts();
    } catch (error) {
      console.error("Failed to delete product", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section>
      <div className="hero">
        <h1>Product Catalog</h1>
        <p>View, manage, edit, and remove products from the inventory.</p>
      </div>

      {loading ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <p>No products available. Add a new product from the menu.</p>
      ) : (
        <div className="grid">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </section>
  );
}

export default HomePage;
