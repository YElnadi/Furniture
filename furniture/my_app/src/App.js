import furnitures from "./furnitures";
import FurnitureCard from "./Furniture/FurnitureCard";
import { useState } from "react";

const PAGE_SIZE = 5

function App() {
  const [pageIdx, setPageIdx] = useState(0)
  const furnitureItems = furnitures
  .slice(PAGE_SIZE * pageIdx, PAGE_SIZE * (pageIdx + 1))
  
  .map((furniture, idx) => (
    <FurnitureCard key={idx} furniture={furniture} />
  ));

  return (
    <div className="flex flex-col items-center py-64 bg-stone-100 min-h-screen">
      <div className=" mx-4 mb-10 text-4xl text-stone-600 ">
        Autumn's Fabulous Furniture
      </div>
      <div className="w-full max-w-2xl"> {furnitureItems}</div>
    </div>
  );
}

export default App;


//page 0 : items 0 to 5 (not inclusive)
//page 1 : items 5 to 10 
//page 2: items 10 to 15
// page 3 : items 15 to 20

// formula to slice and display items correctly
// page n : n * 5 to 5 * (n + 1)