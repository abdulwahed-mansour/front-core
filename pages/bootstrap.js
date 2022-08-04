import React from "react";

export default function bootstrap() {
  return (
    <div>
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
    </div>
  );
}
