import Swal from "sweetalert2";

export const errorAlert = (errTitle, errMsg) => {
  Swal.fire({
    icon: "error",
    title: `${errTitle}`,
    text: `${errMsg}`,
  });
};

export const successConfAlert = (title, msg) => {
  Swal.fire(`${title}`, `${msg}`, "success");
  Swal.fire({
    title: `${title}`,
    text: `${msg}`,
    icon: "success",
    confirmButtonText: "Ok",
  });
};
