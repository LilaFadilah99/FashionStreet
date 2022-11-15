import CircleImage from "./CircleImage";

const Notification = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col ms-2 me-5 rounded-3" style={{ backgroundColor: "#05d7a1", boxShadow: "rgba(41 224 181 / 70%) 0px 2px 8px 0px" }}>
          <div className="row">
            <div className="d-flex flex-row align-items-center">
              <CircleImage imageUrl={"https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"} width={"30px"} height={"30px"} />
              <CircleImage
                imageUrl={"https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ="}
                width={"30px"}
                height={"30px"}
                marginLeft={"-5px"}
              />
              <CircleImage imageUrl={"https://www.adobe.com/express/create/media_11b1adffc91b8e6206e56adab00fa2bb4da3e694a.jpeg?width=400&format=jpeg&optimize=medium"} width={"30px"} height={"30px"} marginLeft={"-5px"} />

              <button type="button" className="btn btn-sm position-relative ms-5 me-2 mt-3">
                <h6>
                  <i className="fa-solid fa-bell"></i>
                </h6>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white text-dark"> 99+ </span>
              </button>
              <p className="ms-5 mt-3 text-white">
                <i className="fa-solid fa-ellipsis"></i>
              </p>
            </div>
          </div>
        </div>
        <hr className="my-5 hr-style" />
      </div>
    </>
  );
};

export default Notification;
