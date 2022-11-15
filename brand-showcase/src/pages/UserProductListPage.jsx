import UserDropdownFilter from "../components/UserDropdownFilter";
import UserProductCard from "../components/UserProductCard";
import UserNavbar from "../components/UserNavbar";
import { get_data_product, add_favorite_products, get_product_by_id } from "../store/actions/product";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import swal from "sweetalert";

const UserProductListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // untuk menampung hasil filter
  const [filter, setFilter] = useState("");

  // untuk menampung state yg akan digunakan untuk menampilkan hasil filter
  const [dataFilter, setDataFilter] = useState([]);
  const { products } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(get_data_product());
  }, []);

  // untuk menampung data payload untuk filter
  useEffect(() => {
    setDataFilter(products);
  }, [products]);

  // untuk memfilter data & akan berjalan jika filter terisi
  useEffect(() => {
    let filterState = filter ? products.filter((el) => el.Category.name.toLowerCase() === filter.toLowerCase()) : products;
    setDataFilter(filterState);
  }, [filter]);

  const handleGetDetailProduct = (id) => {
    navigate(`/products/detail/${id}`);
  };

  const handleGetIdFavorite = (id) => {
    dispatch(get_product_by_id(id)).then((product) => {
      handleAddFavoriteProduct(product.payload);
    });
  };

  const handleAddFavoriteProduct = (data) => {
    dispatch(add_favorite_products(data.id, data));
  };

  return (
    <>
      <UserNavbar />
      <hr />
      {/* content */}
      <div className="container my-3">
        <h5>NEW FASHION COLLECTION</h5>
        <p className="text-secondary text-p">Temukan Produk Favorite Anda</p>
        <div className="d-flex flex-row my-5 text-p">
          <UserDropdownFilter filter={filter} setFilter={setFilter} />
          <p className="text-p fw-bold ms-auto">{`${dataFilter.length} item`}</p>
        </div>
        {/* product card */}
        <div className="row">
          {dataFilter &&
            dataFilter.map((el) => {
              return <UserProductCard key={el.id} imageUrl={el.mainImg} name={el.name} price={el.price} handleGetDetailProduct={handleGetDetailProduct} id={el.id} handleGetIdFavorite={handleGetIdFavorite} />;
            })}
        </div>
      </div>
    </>
  );
};

export default UserProductListPage;
