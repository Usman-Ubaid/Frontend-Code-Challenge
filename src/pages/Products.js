import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const Display = ({ items, addItemsToCart }) => {
  return (
    <div className="container row bg-light text-center mx-auto py-4 d-flex align-items-stretch justify-content-center">
      {items.map((item) => {
        return (
          <div className="col-md-4 col-lg-3 my-3 " key={item.id}>
            <div className="card mx-4 h-100">
              <img src={item.img} className="card-img-top" alt={item.name} />
              <div className="card-body d-flex flex-column align-items-center justify-content-end ">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">price: {item.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addItemsToCart({ ...item, quantity: 1 })}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Products = ({ addItemsToCart, size }) => {
  const [items, setItems] = useState([]);

  const fetchItems = async (url) => {
    try {
      const res = await fetch(url, {
        method: "GET",
      });

      setItems(await res.json());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems("/items");
  }, []);

  return (
    <>
      <NavBar size={size} />
      <div className="bg-light">
        <Display items={items} addItemsToCart={addItemsToCart} />
      </div>
    </>
  );
};

export default Products;
