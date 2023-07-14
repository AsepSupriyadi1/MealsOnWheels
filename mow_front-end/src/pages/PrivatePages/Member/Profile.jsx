import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyOrder from "../../../components/UtilComponent/MyOrder";
import MyProfile from "../../../components/UtilComponent/MyProfile";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";



const Profile = () => {
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
                    <div className="box-content p-2 rounded shadow ">
                        <a href="/myprofile" className="p-2 d-block"><FontAwesomeIcon icon={faUser}/> My Profile</a>
                        <a href="/myorder" className="p-2 d-block border-top"><FontAwesomeIcon icon={faCartShopping}/> My Order</a>
                    </div>
                </div>
                <div className="col-lg-9">
                    <MyProfile/>
                    <MyOrder/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Profile;