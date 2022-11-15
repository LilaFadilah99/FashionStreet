import UserNavbar from "../components/UserNavbar";
import UserDetailImage from "../components/UserDetailImage";
import { get_product_by_id, handle_add_shopping_bag } from "../store/actions/product";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const UserDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(get_product_by_id(id));
  }, []);

  const { product } = useSelector((store) => store.product);

  const addToShoppingBag = (id) => {
    axios({
      method: "post",
      url: `http://localhost:3000/shoppingBag/${id}`,
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then(() => {
        navigate("/shopping_bag");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message, {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <>
      <UserNavbar />
      <hr />
      {/* image */}
      <div className="container">
        <div className="row">
          {/* left */}
          <div className="col-8">
            <div className="row">
              <UserDetailImage imageUrl={product.mainImg} />
              <UserDetailImage imageUrl={"https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/7dd0180d2607fafde1b3c7199bfdf3daf6ecf346_xxl-1.jpg"} />
            </div>
            <div className="row my-5 pb-5">
              <div className="text-center">
                <p className="text-p">TOP SELLER</p>
                <p className="mini-text text-secondary">Produk baru</p>
                <p>{product.description}</p>
                <p className="mt-5 text-p">
                  DAPATKAN SEKARANG! &nbsp;<span className="font-prize text-secondary">Stok terbatas</span>
                </p>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-4 position-fixed-description-buy">
            <div className="mt-5">
              <h5>{product.name}</h5>
              <h5>Rp.{new Intl.NumberFormat(["ban", "id"]).format(product.price)}</h5>
              <p className="mt-3" style={{ fontSize: "12px" }}>
                Pastikan membaca deskripsi produk dan pengiriman sebelum melakukan pemesanan.
              </p>
              <div className="d-flex mt-5">
                <p className="font-prize text-center me-3">Jumlah barang:</p>
                <nav aria-label="...">
                  <ul className="pagination pagination-sm justify-content-center">
                    <li className="page-item" aria-current="page">
                      <span className="page-link text-dark">+</span>
                    </li>
                    <li className="page-item">
                      <p className="page-link text-dark">0</p>
                    </li>
                    <li className="page-item">
                      <p className="page-link text-dark">-</p>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="d-grid">
                <button className="btn bg-dark text-white border px-5 font-prize text-center py-2" type="button" onClick={() => addToShoppingBag(id)}>
                  <span>
                    <i className="fa-solid fa-bag-shopping fs-6"></i>
                  </span>
                  &nbsp; Tambahkan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* scrolling */}
      <div className="container-fluid position-fixed-detail bg-white pt-3 pb-3" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
        <div className="d-flex justify-content-center">
          {/* <!-- detail --> */}
          <button className="btn p-0 font-prize fw-bold me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            DETAIL
          </button>

          <div className="offcanvas offcanvas-end" data-bs-scroll="false" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header justify-content-center">
              <p className="offcanvas-title text-p fw-bold" id="offcanvasScrollingLabel">
                DETAIL
              </p>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <p>Try scrolling the rest of the page to see this option in action.</p>
            </div>
          </div>
          {/* <!-- detail --> */}
          {/* <!-- pembayaran --> */}
          <button className="btn p-0 font-prize fw-bold" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            PENGIRIMAN DAN PEMBAYARAN
          </button>

          <div className="offcanvas offcanvas-end" data-bs-scroll="false" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                Offcanvas with body scrolling
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <p>Try scrolling the rest of the page to see this option in action.</p>
            </div>
          </div>
        </div>
        <ToastContainer position="bottom-right" autoClose={450} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover theme="light" />
      </div>
    </>
  );
};

export default UserDetailPage;
