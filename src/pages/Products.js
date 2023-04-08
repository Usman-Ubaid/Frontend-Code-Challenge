import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const Items = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async (url) => {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          // "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      setItems(await res.json());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems("/items");
  }, []);

  const Display = () => {
    return (
      <div className="container row text-center my-4 d-flex align-items-stretch justify-content-center">
        {items.map((element) => {
          return (
            <div className="col-sm-3 my-3" key={element.id}>
              <div className="card mx-4 h-100 ">
                <img
                  src={element.img}
                  className="card-img-top"
                  alt={element.name}
                />
                <div className="card-body d-flex flex-column align-items-center justify-content-end ">
                  <h5 className="card-title">{element.name}</h5>
                  <p className="card-text">price: {element.price}</p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <NavBar />
      <section>
        <Display />
      </section>
    </>
  );
};

export default Items;
