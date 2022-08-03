import React from "react";

export default function Product() {
  return (
    <>
      <div className="container mt-3 bg-light text-dark">
        <div className="row">
          <div className="col-sm-4 p-3 ">
            <select className="form-select" id="category">
              <option value="">All</option>
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Aquatics">Aquatics</option>
            </select>
          </div>
          <div className="col-sm-8 p-3 ">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search" />
              <button className="btn btn-secondary" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-4 p-3">
            <div className="card bg-light text-dark">
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
                <p className="card-text">product category.</p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 p-3">
            <div className="card bg-light text-dark">
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
                <p className="card-text">product category.</p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 p-3">
            <div className="card bg-light text-dark">
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
                <p className="card-text">product category.</p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
