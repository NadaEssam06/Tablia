import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
export default function Edititem({ item, categories }) {
  const { id } = useParams();
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemCat, setItemCat] = useState(1);
  useEffect(() => {
    const food = async () => {
      const { data } = await axios.get("http://localhost:3000/menue/" + id);

      setItemName(data.name);
      setItemCat(data.category);
      setItemPrice(data.Price);
    };
    food();
  }, []);

  const handlePrice = (e) => {
    setItemPrice(e.target.value);
  };
  const handlCat = (e) => {
    setItemCat(e.target.value);
  };
  const handleEdit = async (e) => {
    const itm = item.find((itm) => itm.id == id);
    e.preventDefault();
    console.log(itemPrice);
    const data = await axios.put(`http://localhost:3000/menue/${id}`, {
      ...itm,
      Price: itemPrice,
    });
  };

  return (
    <div>
      <div className="max-w-xl m-auto">
        <form onSubmit={handleEdit}>
          <input
            readOnly
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
            value={itemCat}
            className="input input-bordered w-full mt-3"
            onChange={handlCat}
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <button type="submit" className="float-end bg-green-900 btn mt-3">
            Done
          </button>
        </form>
      </div>
    </div>
  );
  // return<h2>Edit</h2>
}
