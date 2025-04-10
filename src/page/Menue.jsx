import button from "daisyui/components/button";
import React from "react";

export default function Menue(props) {
  // console.log(props.selectedCat);
  // console.log(props.categ);
  let pages = []; //to array to be iterable
  for (let index = 1; index <= props.nofPage; index++) {
    pages.push(index);
  }
  return (
    <>
      <div className="flex justify-center">
        {" "}
        {props.categ && (
          <ul className="menu menu-horizontal bg-base-200 rounded-box">
            {props.categ.map((cat) => (
              <li key={cat.id}>
                <a onClick={() => props.filterCat(cat.id)}>{cat.name}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>item</th>
              <th>price </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.food.map((food) => (
              <tr key={food.id}>
                <td>{food.name}</td>
                <td>{food.Price} LE</td>
                <td>
                  <button
                    onClick={() => props.addToCart(food.id)}
                    className="cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={food.isinCart ? "white" : "none"}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        {" "}
        <div className="join">
          {pages.length > 1 &&
            pages.map((p) => (
              <button
                key={p}
                className={`join-item btn btn-sm ${
                  props.currentPage == p && "btn-active"
                }`}
                onClick={() => props.currenPageH(p)}
              >
                {p}
              </button>
            ))}

          {/* <button className="join-item btn btn-sm btn-active">2</button> */}
        </div>
      </div>
    </>
  );
}
