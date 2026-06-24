// import React, { useEffect, useState } from 'react'

// const CharacterCounter = () => {
//   var [text,setText]=useState("")
  
//   var charCount=text.length

//   var wordCount=text.trim()
//    ? text.trim().split(/\s+/).length
//     : 0;


//   useEffect(()=>{
//     document.title=`characters: ${charCount}`
//   },[charCount])
//   return (
//     <div style={{backgroundColor:"lightgreen",width:"385px"}}>
//       <h1>CharacterCounter</h1>
//       <textarea rows="2"
//       cols="25"
//       placeholder='Type something...'
//       value={text}
//       onChange={(e)=>{
//         setText(e.target.value)
//       }}></textarea>
//       <h3>Characters:{charCount}</h3>
//       <h3>characters:{wordCount}</h3>
//     </div>
//   )
// }

// export default CharacterCounter


import React, { useEffect, useState } from "react";
import "./CharacterCounter.css";

const CharacterCounter = () => {
  const [text, setText] = useState("");

  const charCount = text.length;

  const wordCount = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  useEffect(() => {
    document.title = `Characters: ${charCount}`;
  }, [charCount]);

  return (
    <div className="container">
      <div className="card">
        <h1>🎨 Character Counter 🎈</h1>

        <textarea
          rows="5"
          cols="30"
          placeholder="✍️ Type your magical story here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div className="stats">
          <div className="stat-box">
            <span>🔤 Characters</span>
            <h2>{charCount}</h2>
          </div>

          <div className="stat-box">
            <span>📚 Words</span>
            <h2>{wordCount}</h2>
          </div>
        </div>

        <p className="fun-text">
          🌟 Keep typing and watch your story grow! 🌟
        </p>
      </div>
    </div>
  );
};

export default CharacterCounter;