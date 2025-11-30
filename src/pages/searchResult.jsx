
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SlideProductLoading from '../components/slideProducts/SlideProductLoading'
import Product from '../components/slideProducts/product'
import PageTransition from '../components/PageTransation'

function SearchResult() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = new URLSearchParams(useLocation().search).get("query");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );
        const data = await res.json();

        setResult(data.products || []);
      } catch (error) {
        console.error("Search Error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (query) fetchResults();
  }, [query]);

  return (
    <PageTransition key={query}>
      <div className="category_products">

        {loading ? (
          <SlideProductLoading key={query} />
        ) : result.length > 0 ? (

          <div className="container">
            <div className="top_slide">
              <h2>Results for: {query}</h2>
            </div>

            <div className="products">
              {result.map((item, index) => (
                <Product key={index} item={item} />
              ))}
            </div>
          </div>

        ) : (
          <div className="container">
            <p>No Results found</p>
          </div>
        )}

      </div>
    </PageTransition>
  );
}

export default SearchResult;