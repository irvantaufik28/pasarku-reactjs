import React from "react";
import ProductItem from "../components/ProductItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Styles from "../components/styles/global.module.css";
import product_1 from "../assets/img/product/product_2.png";
import product_2 from "../assets/img/product/product_2.png";
import product_3 from "../assets/img/product/product_3.png";
import product_4 from "../assets/img/product/product_4.png";
import product_5 from "../assets/img/product/product_5.png";
import product_6 from "../assets/img/product/product_6.png";
import product_7 from "../assets/img/product/product_7.png";
import banner_2 from "../assets/img/banner_2.png";
import shipping from "../assets/icon/shipping.png";
import refund from "../assets/icon/refund.png";
import support from "../assets/icon/support.png";

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
              <ProductItem
                image={product_2}
                title="coba coba"
                price="IDR 120.000"
              />
              <ProductItem
                image={product_3}
                title="coba coba"
                price="IDR 120.000"
              />
              <ProductItem
                image={product_4}
                title="coba coba"
                price="IDR 120.000"
              />
              <ProductItem
                image={product_5}
                title="coba coba"
                price="IDR 120.000"
              />
              <ProductItem
                image={product_6}
                title="coba coba"
                price="IDR 120.000"
              />
              <ProductItem
                image={product_7}
                title="coba coba"
                price="IDR 120.000"
              />
              <ProductItem
                image={product_1}
                title="coba coba"
                price="IDR 120.000"
              />
              <ProductItem
                image={product_3}
                title="coba coba"
                price="IDR 120.000"
              />
            </div>
          </div>
          <div
            className={`${Styles.row} ${Styles.bg_primary} ${Styles.custome_banner}`}
          >
            <div className={Styles.grid_2}>
              <div className={Styles.banner_link}>
                <h1>Adidas Men Running Sneakers</h1>

                <p>Performance and design, Taken right ti the edge</p>
                <Nav.Link href="/">SHOP NOW</Nav.Link>
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

        <div>
          <Container className={Styles.grid_3}>
            <Row>
              <Col className={Styles.item_info}>
                <Card>
                  <div>
                    <img src={shipping} alt="shipping" />
                  </div>
                  <Card.Body>
                    <Card.Title className={Styles.title}>
                      FREE SHIPPING
                    </Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className={Styles.item_info}>
                <Card>
                  <div>
                    <img src={refund} alt="refund" />
                  </div>
                  <Card.Body>
                    <Card.Title className={Styles.title}>
                      100% REFUND
                    </Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className={Styles.item_info}>
                <Card>
                  <div>
                    <img src={support} alt="support" />
                  </div>
                  <Card.Body>
                    <Card.Title>support 24/7</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <div
          className={`${Styles.row} ${Styles.bg_primary} ${Styles.custome_banner}`}
        ></div>
      </div>
    </>
  );
};

export default HomePage;
