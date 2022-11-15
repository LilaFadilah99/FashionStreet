const DashboardListProduct = ({ image, name, price, createdAt }) => {
  return (
    <>
      <div className="row align-items-center mb-3">
        <div className="col-2 pe-0">
          <img src={image} alt="" className="img-fluid" style={{ height: "50px", width: "50px", objectFit: "cover", borderRadius: "13px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }} />
        </div>
        <div className="col-7 ps-0" style={{ marginLeft: "-30px" }}>
          <p className="text-small fw-bold mb-0">{name}</p>
          <p className="text-small mb-0 text-secondary">Rp.{new Intl.NumberFormat(["ban", "id"]).format(price)}</p>
        </div>
        <div className="col-3">
          <p className="text-small fw-bold mb-0">Created</p>
          <p className="text-small mb-0 text-secondary">{createdAt}</p>
        </div>
      </div>
    </>
  );
};

export default DashboardListProduct;
