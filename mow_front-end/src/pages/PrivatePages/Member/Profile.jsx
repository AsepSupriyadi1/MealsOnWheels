import { anjay } from "../../../assets/images/Images";


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
            <div className="row">
                <div className="col-md-4">
                    <div className="box-content shadow text-center rounded-1">
                        <img src={anjay.rahman} alt="" className="profile-image rounded-circle" />
                        <div className="border-container my-3">
                            <div className="border  border-bottom border-secondary width-small"></div>
                        </div>
                        <h4 className="fw-bold text-success mt-3 text-center">
                            Member Memberudin
                        </h4>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="box-content shadow rounded-1">
                        <h4 className="widget-title text-success">
                            <span>My Profile</span>
                        </h4>
                        <div className="row">
                            <div className="col-md-9 col-xs-6"><div className="container">
                                <div className="row">
                                    <div className="col-md-3 col-xs-4">
                                        <p className="text-dark fw-bold">Name</p>
                                    </div>
                                    <div className="col-md-9 col-xs-8">
                                        <p className="text-secondary">: Member Memberudin</p>
                                    </div>
                                    <div className="col-md-3 col-xs-4">
                                        <p className="text-dark fw-bold">Email</p>
                                    </div>
                                    <div className="col-md-9 col-xs-8">
                                        <p className="text-secondary">: member@gmail.com</p>
                                    </div>
                                    <div className="col-md-3 col-xs-4">
                                        <p className="text-dark fw-bold">Phone</p>
                                    </div>
                                    <div className="col-md-9 col-xs-8">
                                        <p className="text-secondary">: +123 456 7890</p>
                                    </div>
                                    <div className="col-md-3 col-xs-4">
                                        <p className="text-dark fw-bold">Address</p>
                                    </div>
                                    <div className="col-md-9 col-xs-8">
                                        <p className="text-secondary">: Bandung, Indonesia</p>
                                    </div>
                                    <div className="col-md-3 col-xs-4">
                                        <p className="text-dark fw-bold">Kecacatan</p>
                                    </div>
                                    <div className="col-md-9 col-xs-8">
                                        <p className="text-secondary">: Keram Rambut</p>
                                    </div>
                                </div>


                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile;