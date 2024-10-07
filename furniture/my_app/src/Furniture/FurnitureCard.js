import React from "react";

const FurnitureCard = (props) => {
  const { furniture } = props;
  console.log(furniture);

  return (
    <div className="border-2 border-stone-300 flex rounded-lg m-8 shadow-md overflow-clip">
      <img
        src={furniture.image}
        className=" w-48 h-48 object-cover border-r border-stone-300"
      />

      <div className="flex flex-col justify-between w-full bg-white px-6 py-4">
        <div className="text-4xl text-stone-600">{furniture.name}</div>
        <div className=" text-stone-500">{furniture.description}</div>
        <div className=" flex justify-end">
          <button className="align-self-end bg-rose-400 px-4 py-2 rounded-lg text-white "> Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCard;
