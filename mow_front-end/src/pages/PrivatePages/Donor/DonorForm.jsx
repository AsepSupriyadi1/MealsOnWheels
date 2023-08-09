import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/auth-context";
import { slides } from "../../../assets/images/Images";
import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import CurrencyInput from "react-currency-input-field";
import { Alert } from "react-bootstrap";
import { saveFunds } from "../../../api/donor";
import Swal from "sweetalert2";

const DonorForm = () => {
  const [donorAmount, setDonorAmount] = useState(0);
  const [alert, setAlert] = useState(false);
  const userCtx = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("donorAmount", donorAmount);

    saveFunds(userCtx.token, data).then((response) => {
      Swal.fire("Success !", "Donation sends successfully", "success").then(() => {
        window.location.reload();
      });
    });
  };

  // const createOrder = (data, actions) => {
  //   return actions.order.create({
  //     purchase_units: [
  //       {
  //         amount: {
  //           value: "2.00",
  //         },
  //       },
  //     ],
  //   });
  // };

  // const onApprove = async (data) => {
  //   const response = await fetch("/my-server/capture-paypal-order", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       orderID: data.orderID,
  //     }),
  //   });
  //   const orderData = await response.json();
  //   const name = orderData.payer.name.given_name;
  //   alert(`Transaction completed by ${name}`);
  // };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="box-content shadow ">
              <h4 className="widget-title">
                <span>Donate</span>
              </h4>
              <form onSubmit={handleSubmit}>
                {alert === true && <Alert variant="danger">Please enter your donation amount !</Alert>}

                <label htmlFor="donorAmount" className="my-3">
                  Donation Amount:
                </label>
                <CurrencyInput
                  id="input-example"
                  className="form-control"
                  name="input-name"
                  placeholder="Please enter a number"
                  defaultValue={donorAmount}
                  decimalsLimit={2}
                  onValueChange={(value) => setDonorAmount(value)}
                  style={{ minHeight: "50px" }}
                />

                <button className="btn w-100 my-3 btn-outline-primary" type="submit">
                  Submit
                </button>
              </form>
              <label htmlFor="donorAmount" className="my-3">
                Or Donate With :
              </label>
              <PayPalScriptProvider options={{ "client-id": "ASEN8REnqJZClRemwTgF7i-AyfChxvKWzzwipeyW6HApqkZNtFmGWx-ovLbB9ajN0TrHlAx6d5sHv2bt" }}>
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: "10.0",
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then(function (details) {
                      alert("berhasil");
                    });
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </div>
          <div className="col-md-5">
            <div className="box-content p-1 shadow">
              <div className="shadow rounded" id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel ">
                <div class="carousel-inner rounded">
                  <div class="carousel-item active" data-bs-interval="2000">
                    <img src={slides.slide1} className="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src={slides.slide2} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={slides.slide3} class="d-block w-100" alt="..." />
                  </div>
                </div>
                <div class="carousel-controls">
                  <button class="carousel-control-prev pull-button" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next pull-button" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="py-3 px-2 text-center">
                <blockquote className="m-0">"The only way to true happiness is by making others happy." - Robert Green Ingersoll</blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonorForm;
