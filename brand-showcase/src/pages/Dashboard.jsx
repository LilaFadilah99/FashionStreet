import React from "react";
import SideBar from "../components/SideBar";
import "../App.css";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import DashboardListProduct from "../components/DashboardListProduct";
import Notification from "../components/Notification";
import CircleImage from "../components/CircleImage";
import DashboardHistoryList from "../components/DashboardHistoryList";

// panggil action
import { get_data_product } from "../store/actions/product";
// panggil selector dan dispatch
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_data_product());
  }, []);
  // ambil data dari store
  const { products } = useSelector((store) => store.product);
  console.log(products);

  return (
    <>
      <div className="d-flex" id="wrapper">
        <SideBar />
        <div id="page-content-wrapper">
          <div className="row">
            {/* left */}
            <div className="col-8 border-end">
              <Navbar />
              <div id="penjualan " className="mx-4 mt-5">
                {/* Dashboard Card */}
                <div className="row align-items-center my-5">
                  <div className="col-5">
                    <DashboardCard title={"Total Penjualan"} data={"Rp. 40.000.000"} icon={"fa-solid fa-up-right-from-square"} backgroundStyle={"bg-custom custom-shadow-color-pink"} />
                  </div>
                  <div className="col-5 ms-3">
                    <DashboardCard title={"Total Product"} data={`${products?.length} Products`} icon={"fa-sharp fa-solid fa-dumpster-fire"} backgroundStyle={"bg-purple custom-card-shadow-color-purple"} />
                  </div>
                </div>
                {/* Recent Activity */}
                <div className="d-flex flex-row flex-wrap justify-content-center align-items-center mt-5 mb-2 g-3">
                  <h4>Recent Activity</h4>
                  <div className="ms-auto">
                    <Link role="button" to="/admin/add" className="btn btn-sm px-4 text-white rounded-pill" style={{ backgroundColor: "#582be7" }}>
                      + Add
                    </Link>
                  </div>
                </div>
                <hr className="hr-color" />
                <p className="text-secondary text-medium">Products</p>
                {products &&
                  products.map((el) => {
                    return <DashboardListProduct key={el.id} name={el.name} image={el.mainImg} price={el.price} createdAt={el.createdAt} />;
                  })}
              </div>
            </div>
            {/* right */}
            <div className="col-4">
              <div className="col mx-2 mt-4">
                <div className="row">
                  <div className="col-8">
                    <h6 className="fw-bold">Your Update</h6>
                    <br />
                    <p className="text-p text-color mb-2">You have 30 orders today!</p>
                    <p className="text-p fw-bold">Check Your Activity</p>
                  </div>
                  <div className="col-3">
                    <h6 className="text-secondary fw-bold px-4 rounded-pill text-center py-1 history-icon">
                      <i className="fas fa-clock-rotate-left me-2"></i>
                    </h6>
                  </div>
                </div>
                <Notification />
                <div className="row">
                  <p className="text-p fw-bold">Your Products</p>
                  <p className="text-size text-secondary">
                    <i className="fa-solid fa-fire-flame-curved"></i>&nbsp; In Progress
                  </p>
                  <div className="col-4 mt-3">
                    <p className="text-size text-secondary mb-0">Completed</p>
                    <h5 className="fw-bold">112</h5>
                  </div>
                  <div className="col-4 mt-3">
                    <p className="text-size text-secondary mb-0">In Progress</p>
                    <h5 className="fw-bold">24</h5>
                  </div>
                  <div className="col-4 mt-3">
                    <p className="text-size text-secondary mb-0">Members</p>
                    <div className="d-flex flex-row align-items-center">
                      <CircleImage imageUrl={"https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"} width={"20px"} height={"20px"} />
                      <CircleImage imageUrl={"https://www.adobe.com/express/create/media_11b1adffc91b8e6206e56adab00fa2bb4da3e694a.jpeg?width=400&format=jpeg&optimize=medium"} width={"20px"} height={"20px"} marginLeft={"-5px"} />
                      <CircleImage imageUrl={"https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"} width={"20px"} height={"20px"} marginLeft={"-5px"} />
                      <CircleImage
                        imageUrl={"https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ="}
                        width={"20px"}
                        height={"20px"}
                        marginLeft={"-5px"}
                      />
                    </div>
                  </div>
                </div>
                {/* History */}
                <hr className="my-4 hr-style" />
                <div className="row">
                  <p className="text-p fw-bold mb-4">History</p>
                  <div className="row">
                    <DashboardHistoryList />
                    <DashboardHistoryList />
                    <DashboardHistoryList />
                    <DashboardHistoryList />
                    <DashboardHistoryList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
