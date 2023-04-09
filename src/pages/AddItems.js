import { useState } from "react";
import NavBar from "../components/NavBar";

const AddItems = () => {
  const [formData, setFormData] = useState({ name: "", price: "", img: "" });
  const [imgFile, setImgFile] = useState("");
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { name, price, img } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const postData = async (inputData) => {
    const res = await fetch("/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    });
    const data = await res.json();
    if (data !== null) {
      alert("Item added succesfully");
    }
  };

  const handleImage = (e) => {
    setFormData({ ...formData, img: `./img/${e.target.files[0].name}` });
  };

  return (
    <div>
      <NavBar />

      <div className="container col-8 row-3">
        <form
          className="d-flex flex-column align-items-center justify-content-center my-5"
          onSubmit={handleSubmit}
        >
          <div className="mb-3 col-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Name of the item"
              required
              onChange={handleInput}
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              placeholder="Price of the item"
              required
              onChange={handleInput}
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="imgUrl" className="form-label">
              Upload Image
            </label>
            <input
              type="file"
              src={imgFile}
              className="form-control"
              id="imgFile"
              name="imgFile"
              onChange={handleImage}
              required
            />
          </div>

          <button
            className="btn btn-primary col-2"
            onClick={() => postData({ name, price, img })}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
