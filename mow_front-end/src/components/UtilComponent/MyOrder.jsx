import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { food } from "../../assets/images/Images";
import { faCartShopping, faEye, faStore, faTruck } from "@fortawesome/free-solid-svg-icons";

function MyOrder () {
    return (
        <>
        <div className="box-content rounded shadow">
        <h4 className="widget-title text-success">
                    <span><FontAwesomeIcon icon={faCartShopping}/> My Order</span>
                </h4>
                <div className="box-content p-2 bg-light border">
                    <div className="order-head d-flex justify-content-between">
                        <p className="m-0 p-2"><FontAwesomeIcon icon={faStore}/> MoW Restaurant</p>
                        <p className="m-0 p-2 text-success">Order has Arrived <FontAwesomeIcon icon={faTruck}/></p>
                    </div>
                    <div className="main-content border-top p-3">
                        <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-3">
                            <img src={food.food2} className="card-image rounded" />
                        </div>
                        <div className="col-md-9 d-flex justify-content-between align-items-center">
                            <div className="name-detail">
                            <h4>Oseng Pentil</h4>
                            <p>Details : Makanan ringan, Desert Food, Drink</p>
                            </div>
                            
                            <a href="/detail-order" className="btn btn-outline-secondary rounded"><FontAwesomeIcon icon={faEye}/> Detail</a>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default MyOrder;