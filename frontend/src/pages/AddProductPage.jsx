import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm.jsx";
import { createProduct } from "../api/productApi.js";

function AddProductPage() {
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    try {
      await createProduct(formData);
      navigate("/");
    } catch (error) {
      console.error("Failed to create product", error);
      alert("Failed to create product");
    }
  };

  return <ProductForm submitText="Add Product" onSubmit={handleCreate} />;
}

export default AddProductPage;
