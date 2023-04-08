import NavBar from "../components/NavBar";

const AddItems = () => {
  return (
    <div>
      <NavBar />

      <div className="container col-8 row-3">
        <div className="d-flex flex-column align-items-center justify-content-center my-5 ">
          <div className="mb-3 col-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name of the item"
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              placeholder="Price of the item"
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="imgUrl" className="form-label">
              Image Url
            </label>
            <input
              type="text"
              className="form-control"
              id="imgUrl"
              placeholder="Url of the image"
            />
          </div>
          <button className="btn btn-primary col-2">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
