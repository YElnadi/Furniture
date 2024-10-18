import furnitures from "./furnitures";
import FurnitureCard from "./Furniture/FurnitureCard";
import { useState } from "react";
import clsx from "clsx";
import WordItem from "./WordFilter/WordItem";
import words from "./WordFilter/words";

const PAGE_SIZE = 5;

const App = () => {
  const [text, setText] = useState("");
  const [filteredText, setFilteredText] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [pageIdx, setPageIdx] = useState(0);
  const [messages, setMessages] = useState([
    "hello",
    "yasmine",
    "Good morning!",
  ]);

  const messageItems = messages.map((message, idx) => (
    <div
      key={idx}
      className="border border-gray-300 px-6 py-3 m-2 rounded-full text-gray-600"
    >
      {message}
    </div>
  ));

  const wordItems = words
    .filter((word) => word.includes(filteredText))
    .map((word, idx) => <WordItem word={word} key={idx} />);

  const furnitureItems = furnitures
    .slice(PAGE_SIZE * pageIdx, PAGE_SIZE * (pageIdx + 1))
    .map((furniture, idx) => <FurnitureCard key={idx} furniture={furniture} />);

  const numPages = Math.ceil(furnitures.length / PAGE_SIZE);

  const pageButtons = [];
  for (let i = 0; i < numPages; i += 1) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => setPageIdx(i)}
        className={clsx(
          "mx-1 w-4  text-sm rounded-sm",
          pageIdx === i
            ? "bg-rose-200 text-rose-600 border border-rose-500"
            : "bg-stone-300 text-stone-600"
        )}
      >
        {i + 1}{" "}
      </button>
    );
  }
  return (
    ///************* furniture */
    // <div className="flex flex-col items-center py-64 bg-stone-100 min-h-screen">
    //   <div className=" mx-4 mb-10 text-4xl text-stone-600 ">
    //     Autumn's Fabulous Furniture
    //   </div>
    //   <div className="w-full max-w-2xl">
    //     <div className="flex justify-end border-b border-stone-300 px-8 py-2 ">
    //       {pageButtons}
    //     </div>

    //     {furnitureItems}
    //   </div>
    // </div>

    /////********************controlled input */
    // <div className="bg-gray-600 h-screen flex flex-col justify-center items-center">
    //   <div className="text-3xl m-2">{text}</div>
    //   <input
    //   type="text"
    //   value={text}
    //   className="text-center p-2 rounded-lg"
    //   onChange={(e)=>setText(e.target.value)}
    //   />
    // </div>

    ///////**********Input Form */
    // <div className="flex justify-center p-20">
    //   <form
    //   className="border-2 border-neutral-400 flex flex-col shadow-lg rounded-lg p-4"
    //   onSubmit={(e)=>{
    //     e.preventDefault()
    //     console.log('form was submitted!')
    //   }}
    //   >
    //     <div className=" text-2xl mb-4 text-neutral-600">Sign-in</div>
    //     <input
    //       type="text"
    //       className="border border-neutral-400 my-4 p-2 rounded-lg"
    //       value={userName}
    //       placeholder="enter username"
    //       onChange={(e) => setUserName(e.target.value)}
    //     />

    //     <input
    //       type="password"
    //       className="border border-neutral-400 my-4 p-2 rounded-lg"
    //       value={password}
    //       placeholder="enter password"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button className="border border-neutral-200 bg-red-400 p-2 rounded-md text-white ">
    //       Submit
    //     </button>
    //   </form>
    // </div>

    /////*************WORD FILTER */
    // <div className="flex flex-col items-center">
    //   <form className="m-8 flex"
    //   onSubmit={(e) =>{
    //     e.preventDefault()
    //     setFilteredText(text)
    //   }}
    //   >
    //     <input
    //       className="bg-neutral-200 p-2 rounded-l-lg"
    //       type="text"
    //       value={text}
    //       onChange={(e) => setText(e.target.value)}
    //     />
    //     <button className="bg-emerald-400 text-white rounded-r-lg px-4 hover:bg-emerald-600">
    //       {" "}
    //       Filter
    //     </button>
    //   </form>
    //   <div className="flex flex-wrap justify-center w-full max-w-lg">
    //     {wordItems}
    //   </div>
    // </div>

    /////****************Message Project//////
    <div className="flex flex-col items-center">
      <form
        className="m-8 flex"
        onSubmit={(e) => {
          e.preventDefault();
          setMessages([...messages, text]);
          setText("")
        }}
      >
        <input
          className=" bg-white rounded-lg px-6 py-4 w-80 border border-neutral-300 foucs:outline-purple-600"
          type="text"
          value={text}
          placeholder="send a message"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="ml-4 bg-purple-200 text-purple-800 px-6 py-4 rounded-lg">
          Submit
        </button>
      </form>
      <div className="flex flex-col max-w-md w-full">{messageItems}</div>
    </div>
  );
};

export default App;

//page 0 : items 0 to 5 (not inclusive)
//page 1 : items 5 to 10
//page 2: items 10 to 15
// page 3 : items 15 to 20

