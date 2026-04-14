import BtmHeader from "./header/BtmHeader";
import TopHeader from "./header/TopHeader";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./header/productDetails";
import Cart from "./pages/cart/Cart";
import SearchResult from "./pages/searchResult";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Favorites from "./pages/favorites/Favorites";
import ContactPage from "./header/ContactPage";
import AboutPage from "./header/AboutPage";
import Faqcomponent from "./Faqcomponent";
import TermsComponent from "./TermsComponent";
import Login from "./header/login";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#e9e9e9',
            borderRadius: '5px',
            padding: '14px'
          }
        }}
      />

      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/FAQ" element={<Faqcomponent />} />
          <Route path="/Terms-and-Condition" element={<TermsComponent />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
