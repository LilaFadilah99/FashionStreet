const UserDropdownFilter = ({ filter, setFilter }) => {
  return (
    <>
      <div className="col-2 me-3">
        <select className="form-select text-size border-0 fw-bold" aria-label="Default select example" value={filter} onChange={(e) => setFilter(e.target.options[e.target.options.selectedIndex].value)}>
          <option value="">Kategori</option>
          <option value="wanita">Wanita</option>
          <option value="pria">Pria</option>
          <option value="anak-anak">Anak-anak</option>
          <option value="bayi">Bayi</option>
        </select>
      </div>
      <div className="dropdown me-4" style={{ display: "none" }}>
        <a className="dropdown-toggle text-size fw-bold text-decoration-none text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Sortir Dengan
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item text-size" href="#">
              Produk terbaru
            </a>
          </li>
          <li>
            <a className="dropdown-item text-size" href="#">
              Harga Terendah
            </a>
          </li>
          <li>
            <a className="dropdown-item text-size" href="#">
              Harga Tertinggi
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown" style={{ display: "none" }}>
        <a className="dropdown-toggle text-size fw-bold text-decoration-none text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Kategori
        </a>
        <ul className="dropdown-menu px-3">
          <li>
            <a className="dropdown-item text-size" href="#">
              Wanita
            </a>
          </li>
          <li>
            <a className="dropdown-item text-size" href="#">
              Pria
            </a>
          </li>
          <li>
            <a className="dropdown-item text-size" href="#">
              Anak-anak
            </a>
          </li>
          <li>
            <a className="dropdown-item text-size" href="#">
              Bayi
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserDropdownFilter;
