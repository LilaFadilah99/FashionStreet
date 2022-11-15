import CardProductList from "../components/CardProductList";
import CircleImage from "../components/CircleImage";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import SideBar from "../components/SideBar";
import TableProducts from "../components/TableProducts";

// panggil action
import { get_data_product, delete_data_product } from "../store/actions/product";
// panggil selector dan dispatch
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const ProductsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_data_product());
  }, []);

  // ambil data dari store
  const { products } = useSelector((store) => store.product);
  const handleDeleteProduct = (id) => {
    dispatch(delete_data_product(id));
  };
  return (
    <>
      <div className="d-flex" id="wrapper">
        <SideBar />
        <div id="page-content-wrapper">
          <div className="row">
            {/* left */}
            <div className="col-8">
              <div className="row">
                <Navbar />
                <div className="row mx-4 mt-5">
                  <div className="row">
                    <div className="col-6">
                      <SearchForm />
                    </div>
                    {/* card */}
                    <div className="row justify-content-center my-5">
                      <CardProductList icon={"fa-solid fa-sack-dollar"} title={"Total Sales"} detail={"Rp.60.000"} />
                      <CardProductList icon={"fa-solid fa-bag-shopping"} title={"Total Order"} detail={"10.000 Orders"} />
                      <CardProductList icon={"fa-solid fa-box-archive"} title={"Total Products"} detail={`${products?.length} Products`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="col-4 mt-5">
              <div className="col mt-4">
                <div className="row justify-content-center">
                  <div className="col ms-2 me-5 rounded-card mt-5 bg-custom custom-shadow-color-pink">
                    <div className="row">
                      <div className="d-flex flex-row align-items-center">
                        <CircleImage imageUrl={"https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"} width={"30px"} height={"30px"} />
                        <CircleImage imageUrl={"https://www.adobe.com/express/create/media_11b1adffc91b8e6206e56adab00fa2bb4da3e694a.jpeg?width=400&format=jpeg&optimize=medium"} width={"30px"} height={"30px"} />
                        <CircleImage
                          imageUrl={"https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ="}
                          width={"30px"}
                          height={"30px"}
                        />
                        <button type="button" className="btn btn-sm position-relative ms-5 me-2 mt-3">
                          <h6>
                            <i className="fa-solid fa-bell"></i>
                          </h6>
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white text-dark"> 99+ </span>
                        </button>
                        <p className="ms-5 mt-3 text-white">
                          <i className="fa-solid fa-ellipsis"></i>
                        </p>
                      </div>
                    </div>
                    <div className="row ps-2 pb-2 mt-3 text-white">
                      <p className="text-size">Check Your Activity</p>
                      <p className="mini-text">increase your profit and upgrade your products. Make sure to check your notifications regularly</p>
                    </div>
                  </div>
                </div>
                <div className="row mt-5 align-items-center">
                  <p className="fw-bold text-p mb-4">
                    Your Best Product &nbsp; <i className="fa-solid fa-trophy text-warning"></i>
                  </p>
                  {/* <!-- best product --> */}
                  <div className="row mb-3">
                    <div className="col-2 rounded-full number-style">
                      <p className="mb-0 number-position text-size fw-bold">01</p>
                    </div>
                    <div className="col-7">
                      <p className="mini-text mb-0 mt-1">Maybeline SuperStay Matte Ink</p>
                      <p className="mini-text text-secondary">5.000 Checkout</p>
                    </div>
                    <div className="col-3">
                      <p className="mini-text mb-0 mt-1">
                        <span className="text-p">
                          <i className="fa-solid fa-clock"></i>
                        </span>
                        &nbsp; 2022
                      </p>
                    </div>
                  </div>
                  {/* <!-- best product --> */}
                  <div className="row">
                    <div className="col-2 rounded-full number-style">
                      <p className="mb-0 number-position text-size fw-bold">01</p>
                    </div>
                    <div className="col-7">
                      <p className="mini-text mb-0 mt-1">Maybeline SuperStay Matte Ink</p>
                      <p className="mini-text text-secondary">5.000 Checkout</p>
                    </div>
                    <div className="col-3">
                      <p className="mini-text mb-0 mt-1">
                        <span className="text-p">
                          <i className="fa-solid fa-clock"></i>
                        </span>
                        &nbsp; 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Table Product */}
          <TableProducts products={products} />
        </div>
      </div>
    </>
  );
};

export default ProductsList;
