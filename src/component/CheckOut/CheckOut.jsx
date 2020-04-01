import React from "react";
import "./CheckOut.css";
import Cart from "../Cart/Cart";

const CheckOut = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-5">
                    <h3>Edit Delivery Details</h3>
                    <hr />
                    <form action="" className="checkout-form">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                value="Deliver to door"
                            />
                            <br />
                            <input
                                className="form-control"
                                type="text"
                                value="107 Rd no 8"
                            />
                            <br />
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Flat, suite or floor"
                            />
                            <br />
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Business Name"
                            />
                            <br />
                            <textarea
                                className="form-control"
                                type="text"
                                placeholder="Add delivery instruction"
                            />
                            <br />
                            <br />
                            <input
                                className="form-control save-address"
                                type="submit"
                                value="Save and Continue"
                            />
                        </div>
                    </form>
                </div>
                <div className="offset-md-2 col-md-5">
                    <Cart />
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
