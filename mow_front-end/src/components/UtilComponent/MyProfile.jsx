import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { anjay } from "../../assets/images/Images";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function MyProfile() {
    return (
        <>
            <div className="box-content shadow rounded">
                <h4 className="widget-title text-success">
                    <span><FontAwesomeIcon icon={faUser}/> My Profile</span>
                </h4>
                <div className="row p-0">
                <div className="col-md-8">
                    <div className="row">
                        <div className="d-flex mb-1">
                            <p className="text-dark w-25">Name </p>:<input className="bg-light w-100" type="text" value="Member Udin" />
                        </div>
                        <div className="d-flex mb-1">
                            <p className="text-dark w-25">Email </p>:<input className="bg-light w-100" type="text" value="member@gmail.com" disabled/>
                        </div>
                        <div className="d-flex mb-1">
                            <p className="text-dark w-25">Phone </p>:<input className="bg-light w-100" type="text" value="+123 456 7890" disabled/>
                        </div>
                        <div className="d-flex mb-1">
                            <p className="text-dark w-25">Address </p>:<input className="bg-light w-100" type="text" value="Bandung, Indonesia" />
                        </div>
                        <div className="col-md-3 col-xs-4">
                            <button className="btn btn-secondary">Save</button>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 px-5  mt-5 mt-lg-0">
                    <img src={anjay.rahman} className="card-image rounded" alt="" />
                </div>
                </div>
                
            </div>
            
        </>
    )
}

export default MyProfile;