import React, { useState, useEffect, useRef } from "react";

import TagBox from "./TagBox";
import colors from "./colors.json";

export default function TagsInput() {
  const [newWord, setNewWord] = useState("");
  const [words, setWords] = useState([]);
  const [filteredColors, setFilteredColors] = useState(colors);
  const inputSearch = useRef(null);

  useEffect(() => {
    inputSearch.current.focus();
  }, []);

  useEffect(() => {
    setFilteredColors(
      colors.filter((color) => {
        return color.name.toLowerCase().startsWith(newWord.toLowerCase());
      })
    );
  }, [newWord]);

  const onEnter = (e) => {
    if (newWord === "") {
      return;
    }
    const isExactMatch = words.some(
      (word) => word.toLowerCase() === newWord.toLowerCase()
    );

    if (e.key === "Enter") {
      if (!isExactMatch) {
        setWords(words.concat(newWord));
        setNewWord("");
        inputSearch.current.focus();
      } else {
        alert("duplicated word");
      }
    }
  };

  const onClickDelete = (toBeDeletedTag) => {
    setWords(words.filter((tag) => tag !== toBeDeletedTag));
  };

  const addWord = (name) => {
    const isExactMatch = words.some(
      (word) => word.toLowerCase() === name.toLowerCase()
    );
    if (!isExactMatch) {
      setWords(words.concat(name));
      setNewWord("");
      inputSearch.current.focus();
    }
  };

  return (
    <>
      <div className="container">
        <ul className="container__tags">
          {words.map((word) => (
            <TagBox tag={word} key={word} onClickDelete={onClickDelete} />
          ))}
        </ul>
        <input
          className="container__input"
          type="text"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
          onKeyPress={onEnter}
          ref={inputSearch}
        />
      </div>
      {newWord !== "" && !!filteredColors.length && (
        <ul className="search-container">
          {filteredColors.map((color) => (
            <li key={color.name} onClick={() => addWord(color.name)}>
              {color.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
