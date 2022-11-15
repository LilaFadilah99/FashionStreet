import { useState } from "react";
import "../App.css";
import { add_data_product, get_product_by_id } from "../store/actions/product";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const FormAddProduct = () => {
  const { id } = useParams();

  const [input, setInput] = useState({
    name: "",
    mainImg: "",
    price: "",
    description: "",
    CategoryId: "",
  });

  useEffect(() => {
    if (id) {
      // dispatch(get_product_by_id(id)).then((data) => {
      //   setInput((state) => {
      //     return { ...data.payload };
      //   });
      // });
      axios
        .get(`http://localhost:3000/product/${id}`, { headers: { access_token: localStorage.getItem("access_token") } })
        .then(({ data }) => {
          setInput(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  // const { product } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleInput = (event, key) => {
    let newVal = { ...input };
    newVal[key] = event;
    setInput(newVal);
  };

  // if (!id) {
  //   const handleAddProduct = (event) => {
  //     event.preventDefault();
  //     dispatch(add_data_product(input));
  //     navigation("/admin/products");
  //   };
  // }
  const handleAddProduct = (event) => {
    event.preventDefault();
    if (!id) {
      dispatch(add_data_product(input));
      navigation("/admin/products");
    } else {
      axios({
        method: "put",
        url: `http://localhost:3000/product/${id}`,
        data: input,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          console.log("berhasil add", data);
          navigation("/admin/products");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h6 className="custom-margin-end text-secondary">Add Your New Product</h6>
        <div className="row justify-content-center bg-white margin-custom rounded-half py-5 custom-shadow-color-purple">
          <div className="col-8">
            <form action="" className="text-p" onSubmit={handleAddProduct}>
              {/* <!-- name --> */}
              <div className="mb-3">
                <label htmlhtmlhtmlhtmlfor="name" className="form-label">
                  Product name:
                </label>
                <input type="text" className="form-control rounded-pill border" id="name" value={input.name} onChange={(event) => handleInput(event.target.value, "name")} />
              </div>
              {/* <!-- Price --> */}
              <div className="mb-3">
                <label htmlhtmlhtmlhtmlfor="Price" className="form-label">
                  Price:
                </label>
                <input type="number" className="form-control rounded-pill border" id="Price" value={input.price} onChange={(event) => handleInput(event.target.value, "price")} />
              </div>
              {/* <!-- imageUrl --> */}
              <div className="mb-3">
                <label htmlhtmlhtmlhtmlfor="imageUrl" className="form-label">
                  Image Url:
                </label>
                <input type="text" className="form-control rounded-pill border" id="imageUrl" value={input.mainImg} onChange={(event) => handleInput(event.target.value, "mainImg")} />
              </div>
              {/* <!-- description --> */}
              <div className="mb-3">
                <label htmlhtmlhtmlhtmlfor="description" className="form-label">
                  Description:
                </label>
                <input type="text" className="form-control rounded-pill border" id="imageUrl" value={input.description} onChange={(event) => handleInput(event.target.value, "description")} />
              </div>
              {/* <!-- category --> */}
              {/* <div className="mb-3">
                <label htmlhtmlhtmlhtmlfor="description" className="form-label">
                  Category:
                </label>
                <input type="text" className="form-control rounded-pill border" id="imageUrl" value={input.category} onChange={(event) => handleInput(event.target.value, "category")} />
              </div> */}
              <div className="mb-3 text-p">
                <label htmlhtmlhtmlhtmlfor="category" className="form-label">
                  Category:
                </label>
                <select className="form-select text-p rounded-pill" aria-label="Default select example" value={input.CategoryId} onChange={(e) => handleInput(e.target.options[e.target.options.selectedIndex].value, "CategoryId")}>
                  <option value="">Open this select menu</option>
                  <option value="1">Wanita</option>
                  <option value="2">Pria</option>
                  <option value="3">Anak-anak</option>
                  <option value="4">Bayi</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary rounded-pill px-5 text-p mt-2 purple-bg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAddProduct;
