import { useEffect } from "react";
import NavBar from "../components/NavBar";

const Items = () => {
  // const fetchItems = async (url) => {
  //   const res = await fetch(url, {
  //     method: "GET",
  //     headers: {
  //       // "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   });
  //   const data = await res.json();
  //   console.log(data);
  // };

  // useEffect(() => {
  //   fetchItems("/items");
  // }, []);

  const style = { width: "18rem" };
  return (
    <div>
      <NavBar />
      <div className="container text-center my-5">
        <div className="col-12 row align-items-center">
          <div className="col-4 my-5">
            <div className="card" style={{ style }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">King Size Bed</h5>
                <p className="card-text">price:</p>
                <a className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ style }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Comfy Slippers</h5>
                <p className="card-text">price:</p>
                <a className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ style }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">CD Rack</h5>
                <p className="card-text">price:</p>
                <a className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card" style={{ style }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Glow Stick</h5>
                <p className="card-text">price:</p>
                <a className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ style }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Cookie Jar</h5>
                <p className="card-text">price:</p>
                <a className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
