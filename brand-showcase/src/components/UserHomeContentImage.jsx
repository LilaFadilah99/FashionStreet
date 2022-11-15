const UserHomeContentImage = ({ imageStyle, titleStyle, descriptionStyle, buttonStyle, title, description, imageUrl, buttonStatus }) => {
  return (
    <>
      <div className="row my-5 justify-content-center">
        <div className="col-10 position-relative">
          <img src={imageUrl} alt="" className="img-fluid text-center" style={imageStyle} />
          <h2 className="position-absolute-content text-center fw-bold" style={titleStyle}>
            {title}
          </h2>
          <h5 className="position-absolute-content text-center" style={descriptionStyle}>
            {description}
          </h5>
          {buttonStatus === true ? (
            <p className="position-absolute-content text-center text-dark py-2 px-3 text-p buy-now-btn rounded" style={buttonStyle}>
              Belanja Sekarang
            </p>
          ) : (
            <div className="d-flex flex-row">
              <p className="position-absolute-content text-center text-dark py-2 px-3 text-p buy-now-btn rounded" style={{ top: "90%", left: "40%" }}>
                Cek Koleksi Anak
              </p>
              <p className="position-absolute-content text-center text-dark py-2 px-3 text-p buy-now-btn rounded" style={{ top: "90%", left: "60%" }}>
                Belanja Sekarang
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserHomeContentImage;
