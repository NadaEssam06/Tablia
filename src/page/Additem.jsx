import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
export default function Additem({ categories, handleAddItem }) {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemCat, setItemCat] = useState(1);
  const navigate = useNavigate();
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const itemAdded = {
      name: itemName,
      Price: itemPrice,
      category: itemCat,
      count: 0,
      isinCart: false,
    };
    const { data } = await axios.post("http://localhost:3000/menue", itemAdded);
    navigate("/admin");
    toast.success(`${itemName} is addes successfuly`);
    handleAddItem(data);
  };
  const handlName = (e) => {
    setItemName(e.target.value);
  };
  const handlePrice = (e) => {
    setItemPrice(e.target.value);
  };
  const handlCat = (e) => {
    setItemCat(e.target.value);
  };

  return (
    <div className="max-w-xl m-auto">
      {" "}
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={handlName}
          value={itemName}
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered w-full mt-3"
        />
        <input
          type="number"
          value={itemPrice}
          name="price"
          placeholder="Price"
          className="input input-bordered w-full mt-3"
          onChange={handlePrice}
        />
        <select
          name="category"
          id="cat"
          className="input input-bordered w-full mt-3"
          onChange={handlCat}
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <button type="submit" className="float-end text-green-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-9"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
