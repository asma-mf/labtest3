import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm.jsx";
import { getProductById, updateProduct } from "../api/productApi.js";

function EditProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleUpdate = async (formData) => {
    try {
      await updateProduct(id, formData);
      navigate("/");
    } catch (error) {
      console.error("Failed to update product", error);
      alert("Failed to update product");
    }
  };

  if (!product) return <p>Loading product details...</p>;

  return (
    <ProductForm
      initialValues={product}
      submitText="Update Product"
      onSubmit={handleUpdate}
    />
  );
}

export default EditProductPage;
