import { GET_DATA_PRODUCT, DELETE_DATA, GET_PRODUCT_BY_ID, GET_FAVORTE_PRODUCTS } from "../types/user";
import axios from "axios";
import { toast } from "react-toastify";

export const get_data_product =
  (url = "http://localhost:3000/product") =>
  (dispatch, getState) => {
    axios
      .get(url)
      .then(({ data }) => {
        dispatch({
          type: GET_DATA_PRODUCT,
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const delete_data_product = (id) => (dispatch, getState) => {
  axios
    .delete(`http://localhost:3000/product/${id}`, { headers: { access_token: localStorage.getItem("access_token") } })
    .then(() => {
      dispatch(get_data_product());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const add_data_product = (input) => (dispatch, getState) => {
  // console.log(input);
  return axios({
    method: "post",
    url: "http://localhost:3000/product",
    data: input,
    headers: {
      access_token: localStorage.getItem("access_token"),
    },
  })
    .then(({ data }) => {
      console.log("berhasil add", data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_product_by_id = (id) => (dispatch, getState) => {
  return axios
    .get(`http://localhost:3000/product/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
    .then(({ data }) => {
      // console.log(data);
      return dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: data,
      });
      // return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const add_favorite_products = (id) => (dispatch, getState) => {
  axios({
    method: "post",
    url: `http://localhost:3000/favorite/${id}`,
    headers: {
      access_token: localStorage.getItem("access_token"),
    },
  })
    .then(() => {
      console.log("success add to favorite");
      toast("success add favorite", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
    .catch((err) => {
      // console.log(err.response.data.message);
      toast.error(err.response.data.message, {
        position: "bottom-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
};

export const get_favorite_product =
  (url = "http://localhost:3000/favorite") =>
  (dispatch, getState) => {
    axios
      .get(url, { headers: { access_token: localStorage.getItem("access_token") } })
      .then(({ data }) => {
        dispatch({
          type: GET_FAVORTE_PRODUCTS,
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const handleDelete = (id, url, handleGet) => (dispatch, getState) => {
  axios
    .delete(`${url}${id}`)
    .then(() => {
      dispatch(handleGet());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const handle_add_shopping_bag = (id) => (dispatch, getState) => {
  axios({
    method: "post",
    url: `http://localhost:3000/shoppingBag/${id}`,
    headers: {
      access_token: localStorage.getItem("access_token"),
    },
  })
    .then(() => {
      console.log("success add to shopping bag");
    })
    .catch((err) => {
      console.log(err);
    });
};
