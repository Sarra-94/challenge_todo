import React from "react";
import "./ListItems.css";
const ListItems = ({ list, handleDelete }) => {
  return (
    <div>
      <h2>List of Items</h2>
      {list.map((el, i) => (
        <ul class="paragraph-ul" key={el.id}>
          <li>
            {el.item}
            <button className="removeBtn" onClick={() => handleDelete(el.id)}>
              Delete
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ListItems;
