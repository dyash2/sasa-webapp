import {
  Plus,
  Minus,
  Star,
  StarHalf,
  X,
  Shirt,
  Footprints,
  Gem,
  SprayCan,
  Droplets,
  Glasses,
  ShoppingBag,
} from 'lucide-react';

export default function ProuductSidebar() {
  return (
    <div className="sidebar has-scrollbar" data-mobile-menu>
      <div className="sidebar-category">
        <div className="sidebar-top">
          <h2 className="sidebar-title">Category</h2>
          <button className="sidebar-close-btn" data-mobile-menu-close-btn>
            <X />
          </button>
        </div>

        <ul className="sidebar-menu-category-list">
          {/* 1. Clothes Category */}
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn>
              <div className="menu-title-flex">
                {/* Replaced dress.svg with Shirt icon */}
                <Shirt size={20} className="menu-title-img" />
                <p className="menu-title">Clothes</p>
              </div>
              <div>
                <Plus className="add-icon" />
                <Minus className="remove-icon" />
              </div>
            </button>

            <ul className="sidebar-submenu-category-list" data-accordion>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Shirt</p>
                  <data value="300" className="stock" title="Available Stock">
                    300
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">shorts & jeans</p>
                  <data value="60" className="stock" title="Available Stock">
                    60
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">jacket</p>
                  <data value="50" className="stock" title="Available Stock">
                    50
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">dress & frock</p>
                  <data value="87" className="stock" title="Available Stock">
                    87
                  </data>
                </a>
              </li>
            </ul>
          </li>

          {/* 2. Footwear Category */}
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn>
              <div className="menu-title-flex">
                {/* Replaced shoes.svg with Footprints icon */}
                <Footprints size={20} className="menu-title-img" />
                <p className="menu-title">Footwear</p>
              </div>
              <div>
                <Plus className="add-icon" />
                <Minus className="remove-icon" />
              </div>
            </button>

            <ul className="sidebar-submenu-category-list" data-accordion>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Sports</p>
                  <data value="45" className="stock" title="Available Stock">
                    45
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Formal</p>
                  <data value="75" className="stock" title="Available Stock">
                    75
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Casual</p>
                  <data value="35" className="stock" title="Available Stock">
                    35
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Safety Shoes</p>
                  <data value="26" className="stock" title="Available Stock">
                    26
                  </data>
                </a>
              </li>
            </ul>
          </li>

          {/* 3. Jewelry Category */}
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn>
              <div className="menu-title-flex">
                {/* Replaced jewelry.svg with Gem icon */}
                <Gem size={20} className="menu-title-img" />
                <p className="menu-title">Jewelry</p>
              </div>
              <div>
                <Plus className="add-icon" />
                <Minus className="remove-icon" />
              </div>
            </button>

            <ul className="sidebar-submenu-category-list" data-accordion>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Earrings</p>
                  <data value="46" className="stock" title="Available Stock">
                    46
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Couple Rings</p>
                  <data value="73" className="stock" title="Available Stock">
                    73
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Necklace</p>
                  <data value="61" className="stock" title="Available Stock">
                    61
                  </data>
                </a>
              </li>
            </ul>
          </li>

          {/* 4. Perfume Category */}
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn>
              <div className="menu-title-flex">
                {/* Replaced perfume.svg with SprayCan icon */}
                <SprayCan size={20} className="menu-title-img" />
                <p className="menu-title">Perfume</p>
              </div>
              <div>
                <Plus className="add-icon" />
                <Minus className="remove-icon" />
              </div>
            </button>

            <ul className="sidebar-submenu-category-list" data-accordion>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Clothes Perfume</p>
                  <data value="12" className="stock" title="Available Stock">
                    12 pcs
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Deodorant</p>
                  <data value="60" className="stock" title="Available Stock">
                    60 pcs
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">jacket</p>
                  <data value="50" className="stock" title="Available Stock">
                    50 pcs
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">dress & frock</p>
                  <data value="87" className="stock" title="Available Stock">
                    87 pcs
                  </data>
                </a>
              </li>
            </ul>
          </li>

          {/* 5. Cosmetics Category */}
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn>
              <div className="menu-title-flex">
                {/* Replaced cosmetics.svg with Droplets icon */}
                <Droplets size={20} className="menu-title-img" />
                <p className="menu-title">Cosmetics</p>
              </div>
              <div>
                <Plus className="add-icon" />
                <Minus className="remove-icon" />
              </div>
            </button>

            <ul className="sidebar-submenu-category-list" data-accordion>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Shampoo</p>
                  <data value="68" className="stock" title="Available Stock">
                    68
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Sunscreen</p>
                  <data value="46" className="stock" title="Available Stock">
                    46
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Body Wash</p>
                  <data value="79" className="stock" title="Available Stock">
                    79
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Makeup Kit</p>
                  <data value="23" className="stock" title="Available Stock">
                    23
                  </data>
                </a>
              </li>
            </ul>
          </li>

          {/* 6. Glasses Category */}
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn>
              <div className="menu-title-flex">
                {/* Replaced glasses.svg with Glasses icon */}
                <Glasses size={20} className="menu-title-img" />
                <p className="menu-title">Glasses</p>
              </div>
              <div>
                <Plus className="add-icon" />
                <Minus className="remove-icon" />
              </div>
            </button>

            <ul className="sidebar-submenu-category-list" data-accordion>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Sunglasses</p>
                  <data value="50" className="stock" title="Available Stock">
                    50
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Lenses</p>
                  <data value="48" className="stock" title="Available Stock">
                    48
                  </data>
                </a>
              </li>
            </ul>
          </li>

          {/* 7. Bags Category */}
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn>
              <div className="menu-title-flex">
                {/* Replaced bag.svg with ShoppingBag icon */}
                <ShoppingBag size={20} className="menu-title-img" />
                <p className="menu-title">Bags</p>
              </div>
              <div>
                <Plus className="add-icon" />
                <Minus className="remove-icon" />
              </div>
            </button>

            <ul className="sidebar-submenu-category-list" data-accordion>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Shopping Bag</p>
                  <data value="62" className="stock" title="Available Stock">
                    62
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Gym Backpack</p>
                  <data value="35" className="stock" title="Available Stock">
                    35
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Purse</p>
                  <data value="80" className="stock" title="Available Stock">
                    80
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Wallet</p>
                  <data value="75" className="stock" title="Available Stock">
                    75
                  </data>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="product-showcase">
        <h3 className="showcase-heading">best sellers</h3>

        <div className="showcase-wrapper">
          <div className="showcase-container">
            {/* Best Seller 1 */}
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="/images/products/1.jpg"
                  alt="baby fabric shoes"
                  width="75"
                  height="75"
                  className="showcase-img"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">baby fabric shoes</h4>
                </a>

                <div className="showcase-rating">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>

                <div className="price-box">
                  <del>$5.00</del>
                  <p className="price">$4.00</p>
                </div>
              </div>
            </div>

            {/* Best Seller 2 */}
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="/images/products/2.jpg"
                  alt="men's hoodies t-shirt"
                  className="showcase-img"
                  width="75"
                  height="75"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">men's hoodies t-shirt</h4>
                </a>
                <div className="showcase-rating">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <StarHalf />
                </div>

                <div className="price-box">
                  <del>$17.00</del>
                  <p className="price">$7.00</p>
                </div>
              </div>
            </div>

            {/* Best Seller 3 */}
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="/images/products/3.jpg"
                  alt="girls t-shirt"
                  className="showcase-img"
                  width="75"
                  height="75"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">girls t-shirt</h4>
                </a>
                <div className="showcase-rating">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <StarHalf />
                </div>

                <div className="price-box">
                  <del>$5.00</del>
                  <p className="price">$3.00</p>
                </div>
              </div>
            </div>

            {/* Best Seller 4 */}
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="/images/products/4.jpg"
                  alt="woolen hat for men"
                  className="showcase-img"
                  width="75"
                  height="75"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">woolen hat for men</h4>
                </a>
                <div className="showcase-rating">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>

                <div className="price-box">
                  <del>$15.00</del>
                  <p className="price">$12.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}