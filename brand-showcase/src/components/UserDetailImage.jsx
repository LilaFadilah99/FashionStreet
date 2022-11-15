const UserDetailImage = ({ imageUrl }) => {
  return (
    <>
      <div className="col-6">
        <img src={imageUrl} alt="" className="img-fluid" style={{ width: "360px", height: "550px", objectFit: "cover" }} />
      </div>
    </>
  );
};

export default UserDetailImage;
