import UserFavoriteCard from "../components/UserFavoriteCard";
import UserNavbar from "../components/UserNavbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import UserTotalShopping from "../components/UserTotalShopping";

const UserShoppingBagPage = () => {
  const [shoppingData, setShoppingData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    handleGetShoppingData();
  }, []);

  const handleGetShoppingData = () => {
    axios
      .get("http://localhost:3000/shoppingBag", {headers: {access_token: localStorage.getItem('access_token')}})
      .then(({ data }) => {
        setShoppingData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const handleAddToFavorite = (id) => {
    // handleDeleteFavorite(id);
    axios({
      method: 'post',
      url: `http://localhost:3000/favorite/${id}`,
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
      .delete(`http://localhost:3000/shoppingBag/${id}`, {headers: {access_token: localStorage.getItem('access_token')}})
      .then(() => {
        console.log("berhasil delete data");
        handleGetShoppingData();
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
        <h4 className="text-center">TAS BELANJA</h4>
        <div className="row justify-content-center my-3">
          <div className="col-7">
            {shoppingData &&
              shoppingData.map((el) => {
                return <UserFavoriteCard key={el.id} name={el.Product.name} price={el.Product.price} imageUrl={el.Product.mainImg} category={el.Product.Category.name} id={el.id} productId={el.Product.id} handleAddToFavorite={handleAddToFavorite} handleDeleteFavorite={handleDeleteFavorite} />;
              })}
          </div>
          <UserTotalShopping />
        </div>
      </div>
    </>
  );
};

export default UserShoppingBagPage;
