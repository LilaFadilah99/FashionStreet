import { useNavigate } from "react-router-dom";

const UserBannerImage = ({ imageUrl, text }) => {
  const navigate = useNavigate();

  const handleChangePage = () => {
    navigate("/products");
  };
  return (
    <>
      <div className="col-6 p-0 position-relative">
        <img src={imageUrl} alt="" className="img-fluid user-hero-image" />
        <h5 className="position-absolute text-center fw-bold fw-bold p-2" onClick={handleChangePage}>
          {text}
        </h5>
      </div>
    </>
  );
};

export default UserBannerImage;
