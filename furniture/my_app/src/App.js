import furnitures from "./furnitures";
import FurnitureCard from "./Furniture/FurnitureCard";

function App() {
  const furnitureItems = furnitures.map((furniture, idx) => (
    <FurnitureCard key={idx} furniture={furniture} />
  ));

  return (
    <div className="flex flex-col items-center py-64 bg-stone-100">
      <div className="border-4 border-black  mx-4 mb-10 text-4xl text-stone-600 ">
        Autumn's Fabulous Furniture
      </div>
      <div className="w-full max-w-2xl"> {furnitureItems}</div>
    </div>
  );
}

export default App;
