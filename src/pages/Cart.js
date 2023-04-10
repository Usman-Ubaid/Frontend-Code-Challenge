import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Cart = ({ size, cart, setCart, changeItemQuantity }) => {
  const [price, setPrice] = useState(0);

  const removeCartItem = (id) => {
    const filteredItems = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(filteredItems));
    setCart(filteredItems);
  };

  const handleTotalPrice = () => {
    let totalPrice = 0;
    cart.map((item) => (totalPrice += item.quantity * item.price));
    setPrice(totalPrice);
  };

  useEffect(() => {
    handleTotalPrice();
  });

  return (
    <div>
      <NavBar size={size} />
      <section className="p-5 bg-light ">
        <div className="container h-100 w-100">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col ">
              <p className=" w-50 mx-auto">
                <span className="h2 ">Shopping Cart </span>
                <span className="h4 ">({size} item in your cart)</span>
              </p>
              {cart.map((item) => {
                return (
                  <div className="card mb-4 w-50 mx-auto" key={item.id}>
                    <div className="card-body p-4 mx-auto">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <img src={item.img} className="img-fluid" alt="img" />
                        </div>
                        <div className="col-md-2 d-flex justify-content-center align-items-center text-center ">
                          <div>
                            <p className="small text-muted mb-4 pb-2">Name</p>
                            <p className="lead fw-normal mb-0">{item.name}</p>
                          </div>
                        </div>

                        <div className="col-md-2 d-flex justify-content-center text-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2">
                              Quantity
                            </p>
                            <div className="d-flex justify-content-center align-items-center">
                              <button
                                style={{
                                  height: "20px",
                                  width: "10px",
                                }}
                                className="btn btn-primary btn-sm mx-2 d-flex align-items-center justify-content-center"
                                onClick={() => {
                                  changeItemQuantity("+", item.id);
                                }}
                              >
                                +
                              </button>
                              <p className="lead fw-normal mb-0 text-center">
                                {item.quantity}
                              </p>
                              <button
                                style={{ height: "20px", width: "10px" }}
                                className="btn btn-primary btn-sm mx-2 d-flex align-items-center justify-content-center"
                                onClick={() => changeItemQuantity("-", item.id)}
                                disabled={item.quantity < 1}
                              >
                                -
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center text-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2">Price</p>
                            <p className="lead fw-normal mb-0">{item.price}</p>
                          </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center text-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2">Total</p>
                            <p className="lead fw-normal mb-0">
                              {item.quantity * item.price}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center align-items-center  ">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              paddingBottom: "5rem",
                            }}
                          >
                            <button
                              className="d-flex p-1 align-items-center justify-content-center "
                              onClick={() => removeCartItem(item.id)}
                            >
                              <FaTimes />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="card mb-5 w-50 mx-auto">
                <div className="card-body p-4 ">
                  <div className="float-end ">
                    <p className="mb-0 me-5 d-flex align-items-center ">
                      <span className="small text-muted me-2">
                        Order total:
                      </span>
                      <span className="lead fw-normal">Rs {price}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end w-75">
                <button type="button" className="btn btn-light btn-lg me-2">
                  <Link
                    style={{ textDecoration: "none" }}
                    className=""
                    to="/products"
                  >
                    Continue shopping
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
