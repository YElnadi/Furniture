import React from "react";

const WordItem = (props) => {
  const { word } = props;
  return (
    <div className="px-2 m-1 text-sm text-yellow-600 bg-yellow-200 border border-yellow-300">
      {word}{" "}
    </div>
  );
};

export default WordItem;
