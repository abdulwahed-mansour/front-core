import React from "react";

const Products = (props) => {
  const search = (s) => {
    props.setFilters({
      ...props.filters,
      s,
      page: 1,
    });
  };

  const sort = (sort) => {
    props.setFilters({
      ...props.filters,
      sort,
      page: 1,
    });
  };

  const loadMore = () => {
    props.setFilters({
      ...props.filters,
      page: props.filters.page + 1,
    });
  };

  let button;

  if (props.filters.page !== props.lastPage) {
    button = (
      <div className="flex justify-center item-center mt-4">
        <button
          className="px-4 py-2 inline-block border border-transparent bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={loadMore}>
          Load More
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="input-group">
            <select className="form-select" aria-label="Default select example" onChange={(e) => sort(e.target.value)}>
              <option value="">Sort by</option>
              <option value="asc">Price Ascending</option>
              <option value="desc">Price Descending</option>
            </select>

            <input
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={(e) => setFilters({ ...filters, s: e.target.value })}
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          {props.products.map((product) => (
            <div className="col-md-3" key={product.id}>
              <div className="card">
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
