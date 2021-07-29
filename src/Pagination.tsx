import React, { useRef, useState } from "react";
import "./Pagination.css";
import { makeArray } from "./utils";

// Arbitrary last page
const lastPage = 22;

// pages length
const length = 5;

const Pagination: React.FC = () => {
  const startPage = useRef(1);
  const [pages, setPages] = useState(makeArray(1, 5));
  const [activeIndex, setActiveIndex] = useState(0);

  const pageClick = (index: number) => () => {
    setActiveIndex(index);
  };

  const nextButtonClick = () => {
    setActiveIndex(0);
    startPage.current += length;
    if (startPage.current + 5 >= lastPage) {
      setPages(makeArray(startPage.current, lastPage - startPage.current + 1));
    } else {
      setPages(makeArray(startPage.current, length));
    }
  };

  const prevButtnClick = () => {
    setActiveIndex(length - 1);
    startPage.current -= length;
    setPages(makeArray(startPage.current, length));
  };

  return (
    <ul className="container">
      <button
        className="item"
        onClick={prevButtnClick}
        disabled={startPage.current === 1}
      >
        Prev
      </button>
      {pages.map((p, i) => (
        <li key={i}>
          <button
            className={`item ${activeIndex === i && "active"}`}
            onClick={pageClick(i)}
          >
            {p}
          </button>
        </li>
      ))}
      <button
        className="item"
        onClick={nextButtonClick}
        disabled={startPage.current + 5 >= lastPage}
      >
        Next
      </button>
    </ul>
  );
};

export default Pagination;
