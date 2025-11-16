"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoSearchOutline,
  IoPersonOutline,
  IoHeartOutline,
  IoBagHandleOutline,
  IoMenuOutline,
  IoHomeOutline,
  IoGridOutline,
  IoCloseOutline,
  IoAddOutline,
  IoRemoveOutline,
  IoCaretBackOutline,
} from "react-icons/io5";

export default function Header() {
  const router = useRouter();
  return (
    <header>
      {/* HEADER TOP */}
      <div className="header-top">
        <div className="container">
          <ul className="header-social-container">
            <li>
              <a href="#" className="social-link">
                <IoLogoFacebook />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <IoLogoTwitter />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <IoLogoInstagram />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <IoLogoLinkedin />
              </a>
            </li>
          </ul>

          <div className="header-alert-news">
            <p>
              <b>Free Shipping</b> This Week Order Over - $55
            </p>
          </div>

          <div className="header-top-actions">
            <select name="currency">
              <option value="usd">USD $</option>
              <option value="eur">EUR €</option>
            </select>

            <select name="language">
              <option value="en-US">English</option>
              <option value="es-ES">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>

      {/* HEADER MAIN */}
      <div className="header-main">
        <div className="container">
          <a href="#" className="header-logo" onClick={() => router.push("/")}>
            <img
              src="/images/logo/sasa.avif"
              alt="SASA logo"
              // width={120}
              // height={80}
              height={38}
            />
          </a>

          {/* <div className="header-search-container">
            <input
              type="search"
              name="search"
              className="search-field"
              placeholder="Enter your product name..."
            />

            <button className="search-btn">
              <IoSearchOutline />
            </button>
          </div> */}

          <div className="header-user-actions">
            <button className="action-btn">
              {/* <IoPersonOutline /> */}
              <SignedOut>
                <SignInButton mode="modal" />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </button>

            {/* <button
              className="action-btn"
              onClick={() => router.push("/wishlist")}
            >
              <IoHeartOutline />
              <span className="count">0</span>
            </button> */}

            <button
              className="action-btn"
              onClick={() => router.push("/cart")}
            >
              <IoBagHandleOutline />
              <span className="count">0</span>
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP NAVIGATION */}
      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <a href="#" className="menu-title">
                Home
              </a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Categories
              </a>

              <div className="dropdown-panel">
                {/* ------------ PANEL GROUP 1 ------------ */}
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Electronics</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Desktop</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Laptop</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Camera</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Tablet</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Headphone</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">
                      <Image
                        src="/images/electronics-banner-1.jpg"
                        alt="headphone collection"
                        width={250}
                        height={119}
                      />
                    </a>
                  </li>
                </ul>

                {/* ------------ PANEL GROUP 2 ------------ */}
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Men's</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Formal</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Casual</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Sports</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Jacket</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Sunglasses</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">
                      <Image
                        src="/images/mens-banner.jpg"
                        alt="men's fashion"
                        width={250}
                        height={119}
                      />
                    </a>
                  </li>
                </ul>

                {/* ------------ PANEL GROUP 3 ------------ */}
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Women's</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Formal</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Casual</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Perfume</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Cosmetics</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Bags</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">
                      <Image
                        src="/images/womens-banner.jpg"
                        alt="women's fashion"
                        width={250}
                        height={119}
                      />
                    </a>
                  </li>
                </ul>

                {/* ------------ PANEL GROUP 4 ------------ */}
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Electronics</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Smart Watch</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Smart TV</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Keyboard</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Mouse</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Microphone</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">
                      <Image
                        src="/images/electronics-banner-2.jpg"
                        alt="mouse collection"
                        width={250}
                        height={119}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* MEN'S */}
            <li className="menu-category">
              <a href="#" className="menu-title">
                Men's
              </a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Shirt</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Shorts & Jeans</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Safety Shoes</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Wallet</a>
                </li>
              </ul>
            </li>

            {/* WOMEN'S */}
            <li className="menu-category">
              <a href="#" className="menu-title">
                Women's
              </a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Dress & Frock</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Earrings</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Necklace</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Makeup Kit</a>
                </li>
              </ul>
            </li>

            {/* JEWELRY */}
            <li className="menu-category">
              <a href="#" className="menu-title">
                Jewelry
              </a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Earrings</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Couple Rings</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Necklace</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Bracelets</a>
                </li>
              </ul>
            </li>

            {/* PERFUME */}
            <li className="menu-category">
              <a href="#" className="menu-title">
                Perfume
              </a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Clothes Perfume</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Deodorant</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Flower Fragrance</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Air Freshener</a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Blog
              </a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Hot Offers
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* MOBILE NAV BOTTOM */}
      <div className="mobile-bottom-navigation">
        {/* <button className="action-btn">
          <IoMenuOutline />
        </button> */}

        <button className="action-btn" onClick={() => router.push("/cart")}>
          <IoBagHandleOutline />
          <span className="count">0</span>
        </button>

        {/* <button className="action-btn" onClick={() => router.push("/")}>
          <IoHomeOutline />
        </button> */}

        {/* <button className="action-btn" onClick={() => router.push("/wishlist")>
          <IoHeartOutline />
          <span className="count">0</span>
        </button> */}

        <button className="action-btn">
          <IoGridOutline />
        </button>
      </div>

      {/* MOBILE NAVIGATION MENU */}
      <nav className="mobile-navigation-menu has-scrollbar">
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>
          <button className="menu-close-btn">
            <IoCloseOutline />
          </button>
        </div>

        <ul className="mobile-menu-category-list">
          <li className="menu-category">
            <a href="#" className="menu-title">
              Home
            </a>
          </li>

          {/* Men's Accordion */}
          <li className="menu-category">
            <button className="accordion-menu">
              <p className="menu-title">Men's</p>
              <div>
                <IoAddOutline className="add-icon" />
                <IoRemoveOutline className="remove-icon" />
              </div>
            </button>

            <ul className="submenu-category-list">
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Shirt
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Shorts & Jeans
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Safety Shoes
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Wallet
                </a>
              </li>
            </ul>
          </li>

          {/* Women's */}
          <li className="menu-category">
            <button className="accordion-menu">
              <p className="menu-title">Women's</p>

              <div>
                <IoAddOutline className="add-icon" />
                <IoRemoveOutline className="remove-icon" />
              </div>
            </button>

            <ul className="submenu-category-list">
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Dress & Frock
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Earrings
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Necklace
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Makeup Kit
                </a>
              </li>
            </ul>
          </li>

          {/* Jewelry */}
          <li className="menu-category">
            <button className="accordion-menu">
              <p className="menu-title">Jewelry</p>
              <div>
                <IoAddOutline className="add-icon" />
                <IoRemoveOutline className="remove-icon" />
              </div>
            </button>

            <ul className="submenu-category-list">
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Earrings
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Couple Rings
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Necklace
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Bracelets
                </a>
              </li>
            </ul>
          </li>

          {/* Perfume */}
          <li className="menu-category">
            <button className="accordion-menu">
              <p className="menu-title">Perfume</p>
              <div>
                <IoAddOutline className="add-icon" />
                <IoRemoveOutline className="remove-icon" />
              </div>
            </button>

            <ul className="submenu-category-list">
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Clothes Perfume
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Deodorant
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Flower Fragrance
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Air Freshener
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <a href="#" className="menu-title">
              Blog
            </a>
          </li>

          <li className="menu-category">
            <a href="#" className="menu-title">
              Hot Offers
            </a>
          </li>
        </ul>

        {/* MENU BOTTOM */}
        <div className="menu-bottom">
          <ul className="menu-category-list">
            <li className="menu-category">
              <button className="accordion-menu">
                <p className="menu-title">Language</p>
                <IoCaretBackOutline className="caret-back" />
              </button>

              <ul className="submenu-category-list">
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    English
                  </a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Español
                  </a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    French
                  </a>
                </li>
              </ul>
            </li>

            {/* Currency */}
            <li className="menu-category">
              <button className="accordion-menu">
                <p className="menu-title">Currency</p>
                <IoCaretBackOutline className="caret-back" />
              </button>

              <ul className="submenu-category-list">
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    USD $
                  </a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    EUR €
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* SOCIALS */}
          <ul className="menu-social-container">
            <li>
              <a href="#" className="social-link">
                <IoLogoFacebook />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <IoLogoTwitter />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <IoLogoInstagram />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <IoLogoLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
