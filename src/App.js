import { useEffect, useState } from "react";
import "./App.scss";
import ListItem from "./components/ListItem";
import ProgressBar from "./components/ProgressBar";
import data from "./data.json";

function App() {
   const [listItems, setListItems] = useState([]);
   useEffect(() => {
      setListItems(data);

      if (listItems.length > 0) {
         console.log(listItems[0].title);
      }
   }, []);

   function addItemClickHandler() {
      const currentItems = [...listItems];
      const newItem = {
         id: crypto.randomUUID(),
         title: prompt("New to-do item"),
         complete: false,
      };
      currentItems.push(newItem);
      setListItems(currentItems);
      console.log(listItems);
   }

   function removeItem(item) {
      const currentItems = [...listItems];
      const itemToRemove = currentItems.find((x) => x.id === item);
      currentItems.splice(currentItems.indexOf(itemToRemove), 1);
      setListItems(currentItems);
      console.log(listItems);
   }

   function changeStatus(item) {
      const currentItems = [...listItems];
      const itemToChange = currentItems.find((x) => x.id === item);
      itemToChange.completed = itemToChange.completed === true ? false : true;
      setListItems(currentItems);
      console.log(listItems);
   }

   useEffect(() => {
      console.log("CHANGE");
   }, [listItems]);

   return (
      <div className="App">
         <div className="TodoContainer">
            <h1>To-do List</h1>
            <div className="ListContainer">
               <ProgressBar listItems={listItems} />
               {listItems.map((item) => {
                  return <ListItem changeStatus={changeStatus} removeItem={removeItem} id={item.id} key={item.id} itemData={item} />;
               })}
               <button onClick={addItemClickHandler} className="AddItemButton">
                  Add Item
               </button>
            </div>
         </div>
      </div>
   );
}

export default App;
