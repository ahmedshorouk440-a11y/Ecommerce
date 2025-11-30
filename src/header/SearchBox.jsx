import React, { useEffect, useState } from "react";
import { FaSearchPlus } from "react-icons/fa";
import './header.css'
import { Link, useLocation, useNavigate } from "react-router-dom";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const navigate = useNavigate();

  const location = useLocation()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
    setSuggestion([]);
  };
  useEffect(() => {
    const fetchSuggestion = async () => {
      if (!searchTerm.trim()) {
        setSuggestion([]);
        return;
      }
      try {
        const res = await fetch(
          ` https://dummyjson.com/products/search?q=${searchTerm} `
        );
        const data = await res.json();
        setSuggestion(data.products.slice(0, 5) || []);
      } catch (error) {
        console.error("Search Error:", error);
        setSuggestion([]);
      }
    };
    const debonuce = setTimeout(() => {
      fetchSuggestion();
    }, 300);
    return () => clearTimeout(debonuce);
  }, [searchTerm]);
  useEffect(()=>{
   setSuggestion([])
  }, [location])

  return (
    <div className="searchBox_container">
      <form onSubmit={handleSubmit} className="search_box">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search for product"
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />

        <button type="submit">
          <FaSearchPlus />
        </button>
      </form>
      {suggestion.length > 0 && (
        <ul className="suggestion">
          {suggestion.map((item) => (
           <Link to={`/products/${item.id}`}> <li key={item.id}><img src={item.images[0]} alt="" /><span>{item.title}</span></li></Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;
