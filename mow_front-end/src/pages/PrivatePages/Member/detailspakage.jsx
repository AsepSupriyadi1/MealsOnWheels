import { food, Member } from "../../../assets/images/Images";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";

const DetailpakageMember = () => {
    return (<>

        {/* page header */}
        <div className="container">
            <div class="page-header">
                <div class="row">
                    <div class="col-md-6 col-sm-6 d-none d-lg-block">
                        <h2 class="page-title">DETAIL PACKAGE</h2>
                    </div>
                    <div class="col-md-6 back-home">
                        <Link to="/member"><a className="btn primary-btn" style={{ marginRight: "10px" }}>View daily meals</a> </Link>
                        <Link to="/feedback"> <a className="btn primary-btn" >Feedback</a></Link>
                    </div>
                </div>
            </div>
            {/* end page header */}
        </div>

        <div className="container">
            <div className="box-content shadow rounded p-0">
                <div className="row">
                    <div className="col-md-6 p-5 text-dark">
                        <p className="text-success rounded"><FontAwesomeIcon icon={faStore}/> MoW Kitchen </p>
                        <h3 className="text-success">Oseng Pentil</h3>
                        <h5 className="border-top pt-2 text-success">Categories</h5>
                        <p>Food, danger</p>
                      
                        <h5 className="border-top pt-2 text-success">Descriptions</h5>
                        <p>This food is suitable for all ages and this food suitable for people who are allergic to peanuts</p>
                        <div className="btn-order">
                            <a href="#" className="btn btn-success rounded">Order Now</a>
                        </div>
                    </div>
                    <div className="col-md-6 p-5">
                        <img src={food.food1} className="rounded img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="cause-single">
                <div className="cause-image">
                    <img src={Member.membereat} alt="" />
                    <div class="cause-overlay hidden-xs">
                        <div class="overlay-inner">
                            <span class="meta-date"><i class="fa fa-calendar-o"></i>24 April 2014</span>
                            <span class="price">Name meal package <em>PACKAGE A</em></span>
                            <span class="price">List meal name <i>Greed salad,Fruit tard,Rouster duck,Miso soup,Teh poci</i></span>
                            <span class="desc">Description <p>this food is suitable for all ages and this food suitable for people who are allergic to peanuts</p></span>
                            <div class="text-center">
                                <a href="#" class="btn main-btn">Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}



    </>);
}

export default DetailpakageMember;