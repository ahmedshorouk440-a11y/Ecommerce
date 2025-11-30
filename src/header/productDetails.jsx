
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import SlideProduct from "../components/slideProducts/SlideProduct";
import ProductDetailsLoading from "../pages/productDetails/ProductDetailsLoading";
import SlideProductLoading from "../components/slideProducts/SlideProductLoading";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import PageTransition from "../components/PageTransation";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelatedProducts, setloadingRelatedProducts] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product) return;

    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products);
      })
      .catch((error) => console.error(error))
      .finally(() => setloadingRelatedProducts(false));
  }, [product?.category]);

  if (loading) return <ProductDetailsLoading />;

  if (!product) return <p>Product Not Found</p>;

  return (
    <PageTransition key={id}>
    <div>

      <div className="item_details">
        <div className="container">
          <ProductImages product={product} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* المنتجات المتعلقة */}
      <div className="related_products container">
        {loadingRelatedProducts ? (
          <SlideProductLoading />
        ) : (
          <SlideProduct
            title="Related Products"
            data={relatedProducts}
          />
        )}
      </div>

    </div>
    </PageTransition>
  );
}

export default ProductDetails;