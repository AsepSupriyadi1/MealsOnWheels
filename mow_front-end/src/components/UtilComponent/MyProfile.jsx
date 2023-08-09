import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { anjay } from "../../assets/images/Images";
import { faUpload, faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import { getUserLoginAPI, updateProfile } from "../../api/auth";
import Swal from "sweetalert2";

function MyProfile() {
  const { currentUser } = useContext(AuthContext);
  const userCtx = useContext(AuthContext);

  const [formValue, setformValue] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });

    setStatusSubmit(true);
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [statusSubmit, setStatusSubmit] = useState(false);

  // Membuat objek Blob kosong
  const emptyBlob = new Blob([], { type: "application/octet-stream" });
  const [file, setFile] = useState(emptyBlob);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", formValue.fullName);
    formData.append("phoneNumber", formValue.phoneNumber);
    formData.append("picture", file);
    formData.append("address", formValue.address);

    updateProfile(userCtx.token, formData)
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Success",
          text: "Profile updated successfully",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          getUserLoginAPI(userCtx.token)
            .then((res) => {
              setformValue({
                fullName: res.data.fullname,
                email: res.data.email,
                phoneNumber: res.data.phoneNumber,
                address: res.data.address,
              });
            })
            .catch((err) => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setFile(file);
      console.log(file);
    }
    setStatusSubmit(true);
  };

  useEffect(() => {
    getUserLoginAPI(userCtx.token)
      .then((res) => {
        setformValue({
          fullName: res.data.fullname,
          email: res.data.email,
          phoneNumber: res.data.phoneNumber,
          address: res.data.address,
        });
      })
      .catch((err) => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      });
  }, []);

  return (
    <>
      {console.log(currentUser)}
      <div className="box-content shadow rounded">
        <h4 className="widget-title text-success">
          <span>
            <FontAwesomeIcon icon={faUser} /> My Profile
          </span>
        </h4>

        <form onSubmit={handleSubmit}>
          <div className="row d-flex align-items-center pb-4">
            <div className="col-md-3 text-center">
              {currentUser.pictureData == null ? (
                <div className="bg-light d-flex justify-content-center align-items-center" style={{ width: "100%", height: "180px" }}>
                  {selectedImage != null ? (
                    <img src={selectedImage} alt="Selected" className="rounded" style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                  ) : (
                    <FontAwesomeIcon icon={faUser} className="text-dark bg-light" style={{ fontSize: "5em" }} />
                  )}
                </div>
              ) : (
                <>
                  {selectedImage != null ? (
                    <img src={selectedImage} alt="Selected" className="rounded" style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                  ) : (
                    <img src={`data:image/png;base64,${currentUser.pictureData}`} alt="profile" className="rounded" style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                  )}
                </>
              )}

              <input type="file" accept="image/*" className="form-control mt-3" onChange={handleImageChange} />
            </div>

            <div className="col-md">
              <small className="fw-bold d-block mb-3 text-dark">User Information : </small>
              <div className="d-flex mb-1">
                <small className="w-25">Name </small>: <input className="bg-light w-100" type="text" name="fullName" value={formValue.fullName} onChange={handleChange} />
              </div>
              <div className="d-flex mb-1">
                <small className="w-25">Email </small>:<input className="bg-light w-100" type="text" value={formValue.email} disabled />
              </div>
              <div className="d-flex mb-1">
                <small className="w-25">Phone </small>:<input className="bg-light w-100" type="text" name="phoneNumber" value={formValue.phoneNumber} onChange={handleChange} />
              </div>
              <div className="d-flex mb-1">
                <small className=" w-25">Address </small>:<input className="bg-light w-100" type="text" name="address" value={formValue.address} onChange={handleChange} />
              </div>
            </div>
          </div>

          {statusSubmit === true && (
            <div className="col-md col-xs-4 mt-3">
              <button className="w-100 btn btn-outline-success" type="submit">
                Save
              </button>
            </div>
          )}
        </form>

        {/* <div className="row">
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
        </div> */}
      </div>
    </>
  );
}

export default MyProfile;
