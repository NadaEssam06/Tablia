import { useEffect, useState } from "react";
import CartItem from "./components/CartItem";
import Menue from "./page/Menue";
import Navbar from "./components/Navbar";
import { Routes, Route, data } from "react-router-dom";
import axios from "axios";
import Admin from "./page/Admin";
import Additem from "./page/Additem";
import React from "react";
import Login from "./page/Login";
import { ToastContainer, toast } from "react-toastify";
import Edititem from "./page/Edititem";

function App() {
  let nofPage;
  const [item, setItem] = useState([]);
  const [loading, setLoaindg] = useState(false);
  const [categories, setcategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  let selectedItems = [];
  const pageSize = 4;
  useEffect(() => {
    setLoaindg(true);

    const food = async () => {
      const { data } = await axios.get("http://localhost:3000/menue");
      const { data: categoriesData } = await axios.get(
        "http://localhost:3000/categories"
      );
      setcategories([{ id: 0, name: "All" }, ...categoriesData]);
      setItem(data);
      setLoaindg(false);
      console.log("in use effect");
    };

    food();
  }, []);

  const addToCart = async (id) => {
    const newSelected = item.map((itm) => ({
      ...itm,
      isinCart: itm.id == id ? !itm.isinCart : itm.isinCart,
    }));
    setItem(newSelected);

    console.log("inaddToCart");
  };
  const filterCat = (id) => {
    setCurrentPage(1);
    setSelectedCat(id);
  };

  // console.log(item);// ==============> why 2 times? StrictMode
  const addItem = (id) => {
    const newItems = item.map((itm) => ({
      ...itm,
      count: itm.id == id ? itm.count + 1 : itm.count,
    }));
    setItem(newItems);
    console.log(" in add Item");
  };

  const decreItem = (id) => {
    const newItems = item.map((itm) => ({
      ...itm,
      count: itm.id === id ? (itm.count == 0 ? 0 : itm.count - 1) : itm.count,
    }));
    setItem(newItems);
  };

  const deletItem = (id) => {
    const newItems = item.filter((item) => {
      return item.id != id;
    });
    setItem(newItems);
  };

  const resetItem = () => {
    const newItems = item.map((itm) => ({ ...itm, count: 0 }));
    setItem(newItems);
    console.log(" in reset");
  };

  //to make sure that u get selected items
  selectedItems =
    selectedCat == 0 ? item : item.filter((itm) => itm.category == selectedCat);
  nofPage = Math.ceil(selectedItems.length / pageSize);
  const currenPageH = (pg) => setCurrentPage(pg);
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  selectedItems = selectedItems.slice(start, end);

  const searchforItem = (itemName) => {
    const searched = item.filter((itm) =>
      itm.name.toLowerCase().includes(itemName.toLowerCase())
    );
    selectedItems = searched;
    console.log(searched);
    console.log(selectedItems);
  };

  const handleAddItem = (product) => {
    newItems = [...item, product];
    setItem(newItems);
  };
  return (
    <>
      <ToastContainer position="top-right" reverseOrder={false} />
      <Navbar
        itemNum={item.filter((itm) => itm.isinCart == true).length}
      ></Navbar>
      <Routes>
        {/*Navbar dosent work y? rong path */}
        <Route path="/" element={<Menue food={selectedItems} />}></Route>
        <Route
          path="/cart"
          element={
            <>
              <CartItem
                item={item.filter((itm) => itm.isinCart)}
                decreItem={decreItem}
                addItem={addItem}
                deletItem={deletItem}
                resetItem={resetItem}
              />
            </>
          }
        />

        <Route
          path="/menue"
          element={
            <Menue
              categ={categories}
              food={selectedItems}
              addToCart={addToCart}
              filterCat={filterCat}
              selectedCat={selectedCat}
              nofPage={nofPage}
              currentPage={currentPage}
              currenPageH={currenPageH}
            ></Menue>
          }
        ></Route>
        <Route
          path="/additem"
          element={
            <Additem
              categories={categories.slice(1)}
              handleAddItem={handleAddItem}
            />
          }
        ></Route>
        <Route
          path="/admin"
          element={<Admin item={item} categories={categories.slice(1)} />}
        />

        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/edit/:id"
          element={
            <Edititem item={item} categories={categories.slice(1)}>
              {" "}
            </Edititem>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
