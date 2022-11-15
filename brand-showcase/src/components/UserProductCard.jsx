import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProductCard = ({ imageUrl, name, price, handleGetDetailProduct, id, handleGetIdFavorite, productId }) => {
  return (
    <>
      <div className="col-3">
        <div className="col position-relative">
          <img src={imageUrl} alt="" className="img-fluid" style={{ width: "240px", height: "320px", objectFit: "cover" }} onClick={() => handleGetDetailProduct(id)} />
          <div className="col-2 rounded-full icon-love-style position-absolute-love-icon">
            <p className="text-danger" style={{ marginLeft: " 7.3px", marginTop: "5px", fontSize: "18px" }}>
              <i className="fa-regular fa-heart" onClick={() => handleGetIdFavorite(id)}></i>
            </p>
          </div>
        </div>
        <p className="font-prize text-center mb-0 mt-3 text-success">TOP SALE</p>
        <p className="font-prize text-center mb-0">{name}</p>
        <p className="font-prize text-center">Rp.{new Intl.NumberFormat(["ban", "id"]).format(price)}</p>
        <ToastContainer position="bottom-right" autoClose={450} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover theme="light" />
      </div>
    </>
  );
};

export default UserProductCard;
