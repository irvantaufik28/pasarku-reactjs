import React from "react";
import Styles from "../components/styles/global.module.css";
import product_1 from "../assets/img/product/product_2.png";
import product_2 from "../assets/img/product/product_2.png";
import product_3 from "../assets/img/product/product_3.png";
import product_4 from "../assets/img/product/product_4.png";
import product_5 from "../assets/img/product/product_5.png";
import product_6 from "../assets/img/product/product_6.png";
import product_7 from "../assets/img/product/product_7.png";
import product_8 from "../assets/img/product/product_8.png";
import banner_2 from "../assets/img/banner_2.png";

const HomePage = () => {
  return (
    <>
      <div className={`${Styles.banner_1}`}></div>
      <div className={Styles.wrapper}>
        <div className={Styles.row}>
          <div className={Styles.card}>
            <div className={Styles.input_group_1}>
              <input type="search" placeholder="search product" />
              <button>search</button>
            </div>
          </div>
          <div className={Styles.row}>
            <div className={Styles.grid_product}>
              <div className={Styles.item_product}>
                <div>
                  <img src={product_1} alt="item product" />
                  <h2>Nike Air Max 270</h2>
                  <h4>IDR 120.000</h4>
                  <button>Buy</button>
                </div>
              </div>
              <div className={Styles.item_product}>
                <div>
                  <img src={product_2} alt="item product" />
                  <h2>Nike Air Max 270</h2>
                  <h4>IDR 120.000</h4>
                  <button>Buy</button>
                </div>
              </div>
              <div className={Styles.item_product}>
                <div>
                  <img src={product_3} alt="item product" />
                  <h2>Nike Air Max 270</h2>
                  <h4>IDR 120.000</h4>
                  <button>Buy</button>
                </div>
              </div>
              <div className={Styles.item_product}>
                <div>
                  <img src={product_4} alt="item product" />
                  <h2>Nike Air Max 270</h2>
                  <h4>IDR 120.000</h4>
                  <button>Buy</button>
                </div>
              </div>
              <div className={Styles.item_product}>
                <div>
                  <img src={product_5} alt="item product" />
                  <h2>Nike Air Max 270</h2>
                  <h4>IDR 120.000</h4>
                  <button>Buy</button>
                </div>
              </div>
              <div className={Styles.item_product}>
                <div>
                  <img src={product_6} alt="item product" />
                  <h2>Nike Air Max 270</h2>
                  <h4>IDR 120.000</h4>
                  <button>Buy</button>
                </div>
              </div>
              <div className={Styles.item_product}>
                <div>
                  <img src={product_7} alt="item product" />
                  <h2>Nike Air Max 270</h2>
                  <h4>IDR 120.000</h4>
                  <button>Buy</button>
                </div>
              </div>
              <div className={Styles.item_product}>
                <div>
                  <img src={product_1} alt="item product" />
                  <h2>Nike Air Max 270</h2>
                  <h4>IDR 120.000</h4>
                  <button>Buy</button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${Styles.row} ${Styles.bg_primary} ${Styles.custome_banner}`}
          >
            <div className={Styles.grid_2}>
              <div>
                <h1>Adidas Men Running Sneakers</h1>
                <p>Performance and design, Taken right ti the edge</p>
                <p>Shop now</p>
              </div>
              <div>
                <img
                  src={banner_2}
                  className={Styles.image_custome_banner}
                  alt="banner_2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
