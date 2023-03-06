export default function ListItem({ itemData, removeItem, changeStatus, id }) {
   return (
      <div className={`ListItem ${itemData.completed === true ? "Complete" : ""}` }>
         <p className="ListItemTitle">{itemData.title}</p>
         {/* <p>{itemData.completed === true ? "Completed" : "Incomplete"}</p> */}
         <button
            onClick={function () {
               changeStatus(id);
            }}>
            {itemData.completed === true ? "Complete" : "Incomplete"}
         </button>
         <button
            onClick={function () {
               removeItem(id);
            }}>
            Remove
         </button>
      </div>
   );
}
