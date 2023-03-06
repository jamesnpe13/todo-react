import { useEffect, useState } from "react";

export default function ProgressBar({ listItems }) {
   const [progressPercentage, setProgressPercentage] = useState(0);
   useEffect(() => {
      listItems.length > 0 ? calculatePercentage() : setProgressPercentage(0);
   }, [listItems]);

   function calculatePercentage() {
      let numCompleted = listItems.filter((item) => item.completed === true).length;
      let totalItems = listItems.length;
      let percentage = ((numCompleted / totalItems) * 100).toFixed(0);
      console.log(totalItems > 0);

      setProgressPercentage(totalItems > 0 ? percentage : 0);
   }

   return (
      <div className={`ProgressBar ${listItems.length === 0 ? "Hidden" : ""}`}>
         <p>{progressPercentage}%</p>
         <div className="OuterBar">
            <div className="InnerBar" style={{ width: `${progressPercentage}%` }}></div>
         </div>
      </div>
   );
}
