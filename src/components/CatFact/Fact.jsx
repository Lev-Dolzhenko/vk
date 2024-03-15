import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const Fact = () => {
  const [fact, setFact] = useState("");
  const inputRef = useRef(null);

  const handleRequest = async () => {
    try {
      axios.get("https://catfact.ninja/fact").then((response) => {
        setFact(response.data);
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (fact !== "") {
      const spaceIndex = fact.fact.search(`[.,:;~ ]`);

      inputRef.current.focus();
      inputRef.current.selectionStart = spaceIndex;
      inputRef.current.selectionEnd = spaceIndex;
    }
  }, [fact]);
  return (
    <div className="common__wrapper">
      <input
        ref={inputRef}
        className="common__input"
        type="text"
        value={fact.fact}
      />
      <button className="common__button" onClick={handleRequest}>
        Выполнить запрос
      </button>
    </div>
  );
};

export default Fact;
