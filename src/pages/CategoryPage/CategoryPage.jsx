
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../../components/slideProducts/product';
import './CategoryPage.css';
import SlideProductLoading from '../../components/slideProducts/SlideProductLoading';
import PageTransition from '../../components/PageTransation';


function CategoryPage() {
  const { category } = useParams();
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // نبدأ بالـ loading لما يغير المستخدم الـ category
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryProduct(data || []); // نحتفظ بالبيانات
        setLoading(false); // إيقاف الـ loading بعد التحميل
      })
      .catch((err) => {
        console.log(err);
        setCategoryProduct([]); // لو حصل خطأ نعرض صفحة فاضية
        setLoading(false);
      });
  }, [category]);

  return (
    <PageTransition key={category}>
    <div className="category_products">
      {loading ? (
        <SlideProductLoading key={category} />
      ) : (
        <div className="container">
          <div className="top_slide">
            <h2>{category} : {categoryProduct.limit}</h2>
            <p>I am a Programmer</p>
          </div>

          <div className="products">
            {categoryProduct.products && categoryProduct.products.length > 0 ? (
              categoryProduct.products.map((item, index) => (
                <Product key={index} item={item} />
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        </div>
      )}
    </div>
    </PageTransition>
  );
}

export default CategoryPage;