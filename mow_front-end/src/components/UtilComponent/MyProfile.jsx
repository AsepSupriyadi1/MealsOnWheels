import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { anjay } from "../../assets/images/Images";
import { faUpload, faUser } from "@fortawesome/free-solid-svg-icons";

function MyProfile() {
  return (
    <>
      <div className="box-content shadow rounded">
        <h4 className="widget-title text-success">
          <span>
            <FontAwesomeIcon icon={faUser} /> My Profile
          </span>
        </h4>

        <div className="row d-flex align-items-center pb-4">
          <div className="col-md-3 text-center">
            <img src={anjay.rahman} className=" rounded" alt="" style={{ width: "100%", height: "100%" }} />
            <button className="btn btn-outline-secondary my-3">
              Upload Image <FontAwesomeIcon icon={faUpload} className="ps-2" />
            </button>
          </div>
          <div className="col-md">
            <small className="fw-bold d-block mb-3 text-dark">User Information : </small>
            <div className="d-flex mb-1">
              <small className="w-25">Name </small>: <input className="bg-light w-100" type="text" value="Member Udin" />
            </div>
            <div className="d-flex mb-1">
              <small className="w-25">Email </small>:<input className="bg-light w-100" type="text" value="member@gmail.com" disabled />
            </div>
            <div className="d-flex mb-1">
              <small className="w-25">Phone </small>:<input className="bg-light w-100" type="text" value="+123 456 7890" disabled />
            </div>
            <div className="d-flex mb-1">
              <small className=" w-25">Address </small>:<input className="bg-light w-100" type="text" value="Bandung, Indonesia" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md">
            <small className="fw-bold d-block mb-3  bg-secondary p-2 text-light">Partner Details : </small>
            <div className="d-flex mb-1">
              <small className="w-25">Name </small>:<input className="bg-light w-100" type="text" value="Member Udin" />
            </div>
            <div className="d-flex mb-1">
              <small className="w-25">Email </small>:<input className="bg-light w-100" type="text" value="member@gmail.com" disabled />
            </div>
            <div className="d-flex mb-1">
              <small className="w-25">Phone </small>:<input className="bg-light w-100" type="text" value="+123 456 7890" disabled />
            </div>
            <div className="d-flex mb-1">
              <small className="w-25">Address </small>:<input className="bg-light w-100" type="text" value="Bandung, Indonesia" />
            </div>
          </div>
        </div>

        <div className="col-md col-xs-4 mt-3">
          <button className="w-100 btn btn-outline-success">Save</button>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
