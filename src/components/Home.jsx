import React, { useEffect, useState } from "react";
import HeroSlider from "./HeroSlider";
import "./home.css";
import SlideProduct from "./slideProducts/SlideProduct";
import SlideProductLoading from "./slideProducts/SlideProductLoading";
import PageTransition from "./PageTransation";

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sports-accessories",
  "sunglasses",
];

function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );
            const data = await res.json();
            return { [category]: data.products };
          })
        );

        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.error("error fetching", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <PageTransition>
      <div>
        <HeroSlider />
        {loading
          ? categories.map((category) => <SlideProductLoading key={category} />)
          : categories.map((category) => (
              <SlideProduct
                key={category}
                data={products[category]}
                title={category.replace("-", " ")}
              />
            ))}
      </div>
    </PageTransition>
  );
}

export default Home;
