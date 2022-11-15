import UserFavoriteCard from "../components/UserFavoriteCard";
import UserNavbar from "../components/UserNavbar";
import { useSelector, useDispatch } from "react-redux";
import { get_favorite_product } from "../store/actions/product";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserFavoritePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataFavorite, setDataFavorite] = useState({});

  useEffect(() => {
    dispatch(get_favorite_product());
  }, []);
  const { favorites } = useSelector((state) => state.product);
  const { products } = useSelector((state) => state.product);

  const handleDetailProduct = (id) => {
    navigate(`/products/detail/${id}`);
  };

  // const handleGetFavorite = (id) => {
  //   // console.log(id);
  //   axios
  //     .get(`http://localhost:3000/favorite/${id}`, {headers: {access_token: localStorage.getItem('access_token')}})
  //     .then(({ data }) => {
  //       setDataFavorite(data);
  //       handleAddToShoppingBag(data, id);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const handleAddToShoppingBag = (id) => {
    axios ({
      method: 'post',
      url: `http://localhost:3000/shoppingBag/${id}`,
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(() => {
        console.log("succes add data");
        handleDeleteFavorite(id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteFavorite = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:3000/favorite/${id}`,{headers: {access_token: localStorage.getItem('access_token')}})
      .then(() => {
        console.log("berhasil delete data");
        dispatch(get_favorite_product());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <UserNavbar />
      <hr />
      <div className="container my-5">
        <h4 className="text-center">FAVORITE</h4>
        <div className="row justify-content-center my-3">
          <div className="col-7">
            {/* <!-- card products --> */}
            {favorites &&
              favorites.map((el) => {
                return <UserFavoriteCard key={el.id} name={el.Product.name} price={el.Product.price} imageUrl={el.Product.mainImg} category={el.Product.Category.name} id={el.id} productId={el.Product.id} handleDetailProduct={handleDetailProduct} handleGetFavorite={handleAddToShoppingBag} handleDeleteFavorite={handleDeleteFavorite} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFavoritePage;
