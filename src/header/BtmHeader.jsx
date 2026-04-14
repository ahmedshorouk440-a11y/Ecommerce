
import React, { useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import './header.css'



const NavLinks = [
  { title: "Home", link: "/" },

     { title: "Faq", link: "/FAQ" },
  { title: "About", link: "/about" },
    { title:  "Terms-and-Condition" , link: "/Terms-and-Condition" },
 { title: "Contact", link: "/ContactPage" },
  { title: "Login", link: "/login" },
 
 
];

function BtmHeader() {

  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    setIsCategoryOpen(false);
  }, [location]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='btm_header'>
      <div className="container">
        
        <nav className="nav">

          {/* CATEGORY DROPDOWN */}
          <div className="category_nav">
            <div 
              className="category_btn" 
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <IoMdMenu />
              <div style={{color:"#fff"}}>Browse Category</div>
              <MdOutlineArrowDropDown />
            </div>

            {/* CATEGORIES LIST */}
            <div className={`category_nav_list ${isCategoryOpen ? "active" : ""}`}>
              {categories.map((category, index) => {

                // لو التصنيف String (زي smartphones)
                if (typeof category === "string") {
                  return (
                    <Link key={index} to={`/category/${category}`}>
                      {category}
                    </Link>
                  );
                }

                // لو التصنيف Object
                if (typeof category === "object" && category !== null) {
                  const name = category.name || category.slug || category-`${index}`;
                  const slug = category.slug || name;

                  return (
                    <Link key={index} to={`/category/${slug}`}>
                      {name}
                    </Link>
                  );
                }

                return null;
              })}
            </div>
          </div>

          {/* NAV LINKS */}
          <div className="nav_links">
            {NavLinks.map((item) => (
              <li 
                key={item.link}
                className={location.pathname === item.link ? "active" : ""}
              >
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </div>

        </nav>

        {/* SIGN IN / SIGN UP ICONS */}
        <div className="sign_regs_icon" style={{padding:"15px"}}>
          <Link to="/"><PiSignInBold /></Link>
          <Link to="/"><FaUserPlus /></Link>
        </div>

      </div>
    </div>
  );
}

export default BtmHeader;