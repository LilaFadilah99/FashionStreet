import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <div className="bg-white border-end" id="sidebar-wrapper">
        <div className="sidebar-heading pt-4 pb-0 fs-4">
          <div className="row">
            <div className="col">
              <div className="row align-items-center">
                <div className="col-4 rounded-full">
                  <img src="https://c0.wallpaperflare.com/preview/117/89/199/profile-photo-profile-red-portrait.jpg" className="rounded-full" style={{ height: "60px", width: "60px", objectFit: "cover" }} alt="" />
                </div>
                <div className="col-7 ms-1">
                  <p className="mb-0 text-size mt-3 fw-bold">William ganteng</p>
                  <p style={{ marginRight: "20px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", fontSize: "10px" }} className="text-center mt-2 rounded-pill px-3 py-1">
                    <i className="fa-solid fa-star me-2" style={{ color: "orange" }}></i>admin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-group list-group-flush my-3">
          <Link to="/admin" className="list-group-item list-group-item-action text-size bg-transparent active">
            <i className="fas fa-tachometer-alt me-2"></i>Dashboard
          </Link>
          <Link to="/admin/products" className="list-group-item list-group-item-action text-size bg-transparent">
            <i className="fas fa-solid fa-plane me-2"></i>Product List
          </Link>
          <Link to="/admin/add" className="list-group-item list-group-item-action text-size bg-transparent">
            <i className="fas fa-circle-plus me-2"></i>Add Product
          </Link>
          <Link to="#" className="list-group-item list-group-item-action text-size bg-transparent">
            <i className="fas fa-clock-rotate-left me-2"></i>Your History
          </Link>
          <Link to="#" className="list-group-item list-group-item-action text-size bg-transparent">
            <i className="fas fa-users me-2"></i>Members
          </Link>
          <p className="list-group-item list-group-item-action text-size bg-transparent m-0 fw-bold">Account</p>
          <Link to="#" className="list-group-item list-group-item-action text-size bg-transparent">
            <i className="fas fa-user me-2"></i>Profile
          </Link>
          <Link to="#" className="list-group-item list-group-item-action text-size bg-transparent">
            <i className="fa-solid fa-gear"></i>&nbsp; Settings
          </Link>
          <Link to="#" className="list-group-item list-group-item-action text-size bg-transparent text-danger">
            <i className="fas fa-power-off me-2"></i>Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
