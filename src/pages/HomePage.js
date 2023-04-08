import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <section className="text-center my-5">
        <p className="fs-4">
          Welcome to <span className="fs-3">RandoStore</span> where you can buy
          and sell items of various kinds.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
