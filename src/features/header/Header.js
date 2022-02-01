import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faReddit } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "./headerSlice";

const Header = () => {
  const inputValue = useSelector((state) => state.header.value);
  const dispatch = useDispatch();

  return (
    <header className="container grid">
      <div className="logo">
        <FontAwesomeIcon
          className="logo-icon"
          icon={faReddit}
        ></FontAwesomeIcon>
        <p>
          Reddit<span style={{ color: "black" }}>Minimal</span>
        </p>
      </div>
      <input
        type="text"
        name="text"
        placeholder="Search"
        value={inputValue}
        onChange={(event) => {
          dispatch(setSearchTerm(event.currentTarget.value));
        }}
      />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </button>
    </header>
  );
};

export default Header;
