import Head from "next/head";
import Image from "next/image";

import React, { useEffect, useMemo, useState } from "react";

import Item from "../components/Item";

export default function App() {
  // Default Value
  var defaultSports = [
    { name: "Table Tennis", category: "Indoor" },
    { name: "Football", category: "Outdoor" },
    { name: "Swimming", category: "Aquatics" },
    { name: "Chess", category: "Indoor" },
    { name: "BaseBall", category: "Outdoor" },
  ];
  const [sportList, setSportList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();

  // Add default value on page load
  useEffect(() => {
    setSportList(defaultSports);
  }, []);

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return sportList;
    }
    return sportList.filter((item) => item.category === selectedCategory);
  }

  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <>
      <Head>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
          crossorigin="anonymous"></script>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Sports List</h1>
            <div className="form-group mb-5">
              <label htmlFor="category">Category</label>
              <select className="form-control" id="category" onChange={handleCategoryChange}>
                <option value="">All</option>
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Aquatics">Aquatics</option>
              </select>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                {filteredList.map((item, index) => (
                  <Item key={index} name={item.name} category={item.category} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
