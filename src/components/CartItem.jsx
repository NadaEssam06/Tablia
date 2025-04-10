import React from "react";
export default function CartItem(props) {
  return (
    <>
      {props.item.map((food) => (
        <div key={food.id} className=" grid grid-cols-6 content-center gap-4 ">
          <div className="pt-5 pl-5  text-2xl ">{food.name} </div>
          <div className="pt-5 pl-5  text-2xl "> {food.count}</div>
          <button
            className="pt-5 pl-5 m-0.5  text-2xl text-green-700   w-full btn btn-square btn-ghost"
            onClick={() => props.addItem(food.id)}
          >
            +
          </button>
          <button
            className="pt-5 pl-5 m-0.5  text-2xl text-yellow-700   w-full btn btn-square btn-ghost"
            onClick={() => props.decreItem(food.id)}
          >
            -
          </button>{" "}
          <button
            className="pt-5 pl-5 m-0.5  text-2xl t text-red-500   w-full btn btn-square btn-ghost"
            onClick={() => props.deletItem(food.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      ))}
      <div className="flex-l text-right m-3">
        {props.item.length > 0 && (
          <button
            className=" btn btn-square btn-ghost "
            onClick={props.resetItem}
          >
            Reset
          </button>
        )}
      </div>
    </>
  );
}
