import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function AdminHome() {
  return (
    <div className="home-body">
      <div className="container">
        <div className="box">
          <div className="d-flex justify-content-between">
            <div className="col-xl-4 col-lg-4 border-r cursor-pointer">
              <Link to="/admin/products">
                <div className="d-flex align-items-center justify-content-center gap-20">
                  <i className="fa-solid fa-basket-shopping admin-icons"></i>
                  <div className="texts">
                    <h3 className="admin-text">Products</h3>
                    <h2 className="products-count">30</h2>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-xl-4 col-lg-4 border-r cursor-pointer">
              <Link to="/admin/users">
                <div className="d-flex align-items-center justify-content-center gap-20">
                  <i className="fa-regular fa-user admin-icons"></i>
                  <div className="texts">
                    <h3 className="admin-text">Users</h3>
                    <h2 className="products-count">30</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xl-4 col-lg-4 cursor-pointer">
              <Link to="/admin/comments">
                <div className="d-flex align-items-center justify-content-center gap-20">
                  <i className="fa-regular fa-comment admin-icons"></i>
                  <div className="texts">
                    <h3 className="admin-text">Comments</h3>
                    <h2 className="products-count">30</h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
