import UserBannerImage from "../components/UserBannerImage";
import UserNavbar from "../components/UserNavbar";
import UserHomeContentImage from "../components/UserHomeContentImage";

const UserHomePage = () => {
  return (
    <>
      <UserNavbar />
      {/* Banner image */}
      <div className="container-fluid">
        <div className="row">
          <UserBannerImage imageUrl={"https://api-fashion.dior.com/couture/var/dior/storage/images/29895135/71-int-EN/cdc-dispatch12_1440_1200.jpg"} text={"DAFTAR SEKARANG"} />
          <UserBannerImage imageUrl={"https://api-fashion.dior.com/couture/var/dior/storage/images/29893608/119-int-EN/pcd-dispatch21_1440_1200.jpg"} text={"BELANJA SEKARANG"} />
        </div>
        <div className="row my-5">
          <h4 className="text-center fw-bold text-secondary">Temukan Gaya Terbaikmu</h4>
          <p className="text-center text-p">Mulai menjelajah fashion</p>
        </div>
      </div>
      {/* content image */}
      <div className="container">
        <div className="container">
          <UserHomeContentImage
            imageStyle={{ width: "100%", height: "700px", objectFit: "cover" }}
            titleStyle={{ top: " 20%", left: "50%" }}
            descriptionStyle={{ top: "79%", left: "50%" }}
            buttonStyle={{ top: "90%", left: "50%" }}
            title={"The Perfect Gift Idea"}
            description={"Bersama D-Fashion, si dia pun dapat memilih hal yang tepat"}
            imageUrl={"https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-winter-femme-22/kci780veas900/34351264-1-eng-GB/kci780veas900_1440_1200.jpg"}
            buttonStatus={true}
          />
          <UserHomeContentImage
            imageStyle={{ width: "100%", height: "700px", objectFit: "cover", filter: "brightness(90%)" }}
            titleStyle={{ top: " 69%", left: "50%" }}
            descriptionStyle={{ top: "79%", left: "50%" }}
            buttonStyle={{ top: "90%", left: "50%" }}
            title={"A new rhythm"}
            description={"Maksimalkan semangat mu dengan pakaian yang terinspirasi dari koleksi formalmu"}
            imageUrl={"https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-winter-22-men/folder-campagne2/023m550at099c185/37979160-1-eng-GB/023m550at099c185_1440_1200.jpg"}
            buttonStatus={true}
          />
          <UserHomeContentImage
            imageStyle={{ width: "100%", height: "700px", objectFit: "cover", filter: "brightness(90%)" }}
            titleStyle={{ top: " 69%", left: "50%" }}
            descriptionStyle={{ top: "79%", left: "50%" }}
            buttonStyle={{ top: "90%", left: "50%" }}
            title={"Kids Fashion"}
            description={"Buat anak-anak riang di musim ini! Ikuti saja senyumannya"}
            imageUrl={"https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-baby-pe-fw22/2wbs11shory900/35818906-1-eng-GB/2wbs11shory900_1440_1200.jpg"}
            buttonStatus={false}
          />
          <UserHomeContentImage
            imageStyle={{ width: "100%", height: "700px", objectFit: "cover", filter: "brightness(90%)" }}
            titleStyle={{ top: " 73%", left: "50%" }}
            descriptionStyle={{ top: "83%", left: "50%" }}
            buttonStyle={{ top: "90%", left: "50%" }}
            title={"Head-to-toe cuteness"}
            description={"Segera dapatkan barang-barang terlaris kami"}
            imageUrl={"https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-baby-fw21/folder-cannage/1wbp53kdocy353/24248303-1-eng-GB/1wbp53kdocy353_1440_1200.jpg"}
            buttonStatus={true}
          />
        </div>
      </div>
    </>
  );
};

export default UserHomePage;
