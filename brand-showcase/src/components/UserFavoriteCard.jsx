const UserFavoriteCard = ({ name, price, imageUrl, category, id, handleDetailProduct, handleGetFavorite, handleDeleteFavorite, handleAddToFavorite, productId }) => {
  return (
    <>
      <div className="col border mb-3">
        <div className="d-flex">
          <img src={imageUrl} alt="" className="img-fluid" style={{ width: "180px", height: "230px", objectFit: "cover" }} />
          <div className="mt-2 mb-4 ms-3">
            <h5 className="text-end" onClick={() => handleDeleteFavorite(productId)}>
              <i className="fa-solid fa-xmark"></i>
            </h5>
            <p className="mini-text mb-0 ">TOP SALES</p>
            <p className="text-p fw-bold">{name}</p>
            <p className="text-p">Rp.{new Intl.NumberFormat(["ban", "id"]).format(price)}</p>
            <div className="d-flex">
              <p className="mini-text text-secondary me-5">Beli produk kesukaan mu sekarang</p>
              <p className="mini-text text-secondary">Category: {category}</p>
            </div>
            {handleDetailProduct || handleGetFavorite ? (
              <div className="d-flex">
                <button type="button" className="btn btn-outline-dark rounded-0 px-5 font-prize" onClick={() => handleDetailProduct(id)}>
                  Detail
                </button>
                <button type="button" className="btn bg-dark text-white rounded-0 font-prize ms-2" style={{ padding: "0px 40px", fontSize: "13px" }} onClick={() => handleGetFavorite(productId)}>
                  <i className="fa-solid fa-bag-shopping"></i>&nbsp; Pindahkan ke tas belanja
                </button>
              </div>
            ) : (
              <div className="d-flex">
                <button type="button" className="btn  px-5 font-prize  btn-outline-dark rounded-0  rounded-0" onClick={() => handleAddToFavorite(productId)}>
                  <i className="fa-solid fa-heart-circle-bolt"></i>&nbsp; Pindahkan ke favorite
                </button>
                <button type="button" className="btn btn-outline-dark rounded-0  font-prize ms-2" style={{ padding: "0px 40px", fontSize: "13px" }}>
                  2
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFavoriteCard;
