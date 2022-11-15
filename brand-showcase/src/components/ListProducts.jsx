// panggil action
import { get_data_product, delete_data_product } from "../store/actions/product";
// panggil selector dan dispatch
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ListProducts = ({ imageUrl, name, price, status, category, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ambil data dari store
  const { payload } = useSelector((store) => store.product);
  const handleDeleteProduct = (id) => {
    dispatch(delete_data_product(id));
  };

  const handleEdit = (id) => {
    console.log(id);
    navigate(`/admin/edit/${id}`);
  };
  return (
    <>
      <div className="row align-items-center mb-3 py-2 rounded-card custom-shadow-01">
        <div className="col-2 pe-0">
          <img src={imageUrl} alt="" className="img-fluid" style={{ height: "50px", width: "50px", objectFit: "cover", borderRadius: "13px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }} />
        </div>
        <div className="col-4 ps-0">
          <p className="mini-text mb-0 fw-bold">{name}</p>
          <p className="text-small mb-0">Rp.{new Intl.NumberFormat(["ban", "id"]).format(price)}</p>
        </div>
        <div className="col-2">
          <p className="text-small mb-0">new</p>
        </div>
        <div className="col-2">
          <p className="text-small mb-0">{category}</p>
        </div>
        <div className="col-2 d-flex flex-row">
          <p className="mb-0 me-3" onClick={() => handleEdit(id)}>
            <i className="fa-solid fa-pen"></i>
          </p>
          <p className="mb-0" onClick={() => handleDeleteProduct(id)}>
            <i className="fa-solid fa-trash-can me-3"></i>
          </p>
        </div>
      </div>
    </>
  );
};

export default ListProducts;
