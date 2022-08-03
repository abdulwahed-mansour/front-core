import React from "react";

const Item = ({ name, category }) => (
  <tr>
    <th scope="row">1</th>
    <td>{name}</td>
    <td>{category}</td>
    <td>@mdo</td>
  </tr>
);

export default Item;
