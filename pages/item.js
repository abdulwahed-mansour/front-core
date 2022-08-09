import { useEffect, useState } from "react";
import Link from "next/link";

const items = [
  {
    name: "Shannon Rodriguez",
    country: "Ukraine",
    region: "South Island",
    numberrange: 9,
  },
  {
    name: "Alma Watkins",
    country: "New Zealand",
    region: "Stockholms län",
    numberrange: 3,
  },
  {
    name: "Hanae Delgado",
    country: "India",
    region: "Luxemburg",
    numberrange: 3,
  },
  {
    name: "Brody Mcdowell",
    country: "Costa Rica",
    region: "Leningrad Oblast",
    numberrange: 5,
  },
  {
    name: "Colin Dillon",
    country: "Costa Rica",
    region: "Liguria",
    numberrange: 7,
  },
];

export default function Item() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const filteredItems = items.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  const filteredItemsByCategory = filteredItems.filter((item) => {
    return item.country.toLowerCase().includes(category.toLowerCase());
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Search</label>
                    <input type="text" className="form-control" placeholder="Search" onChange={handleChange} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Category</label>
                    <select className="form-control" onChange={handleCategory} value={category}>
                      <option value="">All</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="India">India</option>
                      <option value="Costa Rica">Costa Rica</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Region</th>
                        <th>Number range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredItemsByCategory.map((item) => {
                        return (
                          <tr key={item.name}>
                            <td>
                              <Link href="/item/[id]" as={`/item/${item.name}`}>
                                <a>{item.name}</a>
                              </Link>
                            </td>
                            <td>{item.country}</td>
                            <td>{item.region}</td>
                            <td>{item.numberrange}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
