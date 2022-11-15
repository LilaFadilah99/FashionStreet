import React from "react";
import ListProducts from "./ListProducts";

const TableProducts = ({ products }) => {
  return (
    <>
      <div className="div mx-2" id="product-list">
        <div className="row mx-3 my-5">
          <div className="row rounded-card py-4 px-5 mx-2 bg-white custom-shadow-color-purple">
            <h4>Product List</h4>
            <p className="text-secondary text-p">Your entire collection</p>
            <br />
            <br />
            <br />
            {/* <!-- recent product --> */}
            <div className="row align-items-center mb-3">
              <div className="col-2">
                <p className="text-small fw-bold mb-0 text-secondary">Product</p>
              </div>
              <div className="col-4 ps-0">
                <p className="text-small fw-bold mb-0 text-secondary">Name</p>
              </div>
              <div className="col-2">
                <p className="text-small fw-bold mb-0 text-secondary">Status</p>
              </div>
              <div className="col-2">
                <p className="text-small fw-bold mb-0 text-secondary">Category</p>
              </div>
              <div className="col-2">
                <p className="text-small fw-bold mb-0 text-secondary">Action</p>
              </div>
            </div>
            <hr className="hr-color" />
            {products &&
              products.map((el) => {
                return <ListProducts key={el.id} imageUrl={el.mainImg} status={el.status} category={el.Category.name} price={el.price} name={el.name} id={el.id} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TableProducts;
