import { useState } from "react";
import NavBar from "../components/NavBar";
import { postData } from "../api/postData";

const AddItems = () => {
  const [formData, setFormData] = useState({ name: "", price: "", img: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { name, price, img } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ name, price, img });
  };

  const handleImage = (e) => {
    setFormData({ ...formData, img: `./img/${e.target.files[0].name}` });
  };

  return (
    <div className="vh-100 bg-light">
      <NavBar />

      <div className="container col-12 py-5 ">
        <form
          className="col-8 mx-auto d-flex flex-column align-items-center justify-content-center"
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="imgUrl" className="form-label">
              Upload Image
            </label>
            <input
              type="file"
              src={img}
              className="form-control"
              id="imgFile"
              name="imgFile"
              onChange={handleImage}
              required
            />
          </div>

          <button className="btn btn-primary col-2">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
