const DashboardCard = ({ title, data, icon, backgroundStyle }) => {
  return (
    <>
      <div className={`row  py-3 rounded-card ${backgroundStyle}`}>
        <div className="col-2">
          <h5>
            <i className={`py-3 px-4 ${icon}`} style={{ backgroundColor: "#ececf0", borderRadius: "10px" }}></i>
          </h5>
        </div>
        <div className="col ms-5 text-white">
          <p className="text-small">{title}</p>
          <h6 className="fw-bold">{data}</h6>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
