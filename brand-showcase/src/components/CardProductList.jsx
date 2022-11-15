const CardProductList = ({ icon, title, detail }) => {
  return (
    <>
      <div className="col me-3 custom-shadow-color-purple rounded-card py-3 bg-white bg-purple">
        <div className="div ms-2">
          <h3>
            <i className={`${icon}`}></i>
          </h3>
          <p className="text-p mb-2 text-secondary">{title}</p>
          <p className="text-p fw-bold">{detail}</p>
        </div>
      </div>
    </>
  );
};

export default CardProductList;
