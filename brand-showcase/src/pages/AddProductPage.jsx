import FormAddProduct from "../components/FormAddProduct";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import "../App.css";

const AddProductPage = () => {
  return (
    <>
      <div className="d-flex" id="wrapper">
        <SideBar />
        <div id="page-content-wrapper">
          <div className="row">
            <Navbar />
          </div>
          <FormAddProduct />
        </div>
      </div>
    </>
  );
};

export default AddProductPage;
