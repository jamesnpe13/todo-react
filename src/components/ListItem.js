export default function ListItem({ itemData, removeItem, changeStatus, id }) {
   return (
      <div className="ListItem">
         <p className="ListItemTitle">{itemData.title}</p>
         <p>{itemData.completed === true ? "Completed" : "Incomplete"}</p>
         <button
            onClick={function () {
               changeStatus(id);
            }}>
            {itemData.completed === true ? "Incomplete" : "Complete"}
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
