const UserTotalShopping = () => {
  return (
    <>
      <div className="col-4">
        <div className="col border">
          <p className="fw-bold text-p text-center my-3 mx-3">TOTAL TAS BELANJA</p>
          <hr style={{ height: "0.2px" }} className="mb-4" />
          <div className="mx-3 d-flex font-prize justify-content-between">
            <p>SUBTOTAL</p>
            <p>Rp.1.456.900</p>
          </div>
          <div className="mx-3 mb-2 d-flex font-prize justify-content-between bg-grey">
            <p className="mb-0">PAJAK</p>
            <p className="mb-0">Rp.15.000</p>
          </div>
          <div className="mx-3 d-flex font-prize justify-content-between">
            <p>JUMLAH PESANAN</p>
            <p>Rp.471.900</p>
          </div>
          <hr style={{ height: "0.2px" }} />
          <div className="mx-3 my-4 font-prize justify-content-center">
            <button type="button" className="btn bg-dark text-white rounded-0 font-prize" style={{ padding: "6px 80px" }}>
              LANJUT KE PEMBAYARAN
            </button>
            <div className="row mt-3">
              <p className="mini-text">Prices and delivery costs are not confirmed until you've reached the checkout.</p>
              <p className="font-prize text-center">
                Beli produk pilihan mu dan nikmati kemudahan transaksi bersama kami &nbsp;<i className="fa-solid fa-circle-check text-warning"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTotalShopping;
