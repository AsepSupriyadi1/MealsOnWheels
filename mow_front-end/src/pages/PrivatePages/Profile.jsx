import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyOrder from "../../components/UtilComponent/MyOrder";
import MyProfile from "../../components/UtilComponent/MyProfile";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Profile = () => {
  const [tab, setTab] = useState(0);

  const handleChangeTab = (index, element) => {
    // Memeriksa apakah elemen adalah tombol
    if (element.nodeName === "BUTTON") {
      const activeButton = document.querySelector(".tab-profile.btn-success");
      console.log(activeButton);
      if (activeButton) {
        activeButton.classList.remove("btn-success");
      }

      element.classList.add("btn-success");

      setTab(index);
    }
  };

  return (
    <div className="container">
      <div className="page-header">
        <div className="row">
          <div className="col-md-6 col-xs-6">
            <h2 className="page-title d-none d-lg-block">Member's Profile</h2>
          </div>
          <div className="col-md-6 col-xs-6 hidden-xs back-home">
            <a href="/member">&larr; Go back to Dashboard</a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="box-content p-3 rounded shadow ">
              <button href="/myprofile" className="tab-profile btn-success btn d-block w-100 text-start py-2" onClick={(e) => handleChangeTab(0, e.target)}>
                <FontAwesomeIcon icon={faUser} /> My Profile
              </button>
              <button className="tab-profile btn d-block w-100 text-start py-2" onClick={(e) => handleChangeTab(1, e.target)}>
                <FontAwesomeIcon icon={faCartShopping} /> My Order
              </button>
            </div>
          </div>

          {tab === 0 && (
            <>
              <div className="col-lg-9">
                <MyProfile />
              </div>
            </>
          )}
          {tab === 1 && (
            <>
              <div className="col-lg-9">
                <MyOrder />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
