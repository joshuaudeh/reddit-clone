import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Links.css";
import { loadData } from "./MemesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Memes() {
  const value = useSelector((state) => state.memes.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);
  console.log(value);

  return (
    <div className="flex-left">
      {value.map((post) => {
        return (
          <div key={post.id} className="card">
            <h1>{post.title}</h1>
            <div style={{ display: "flex" }}>
              <div className="Bots">
                <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                <span>{post.ups}</span>
                <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
              </div>
              <img src={post.url} alt="" className="images-result" />
            </div>
            <hr />
            <div className="author-container">
              <p style={{ color: "blue" }}>{post.author}</p>
              <div>
                <FontAwesomeIcon
                  icon={faComment}
                  style={{ marginRight: "5px" }}
                ></FontAwesomeIcon>
                {post.num_comments}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Memes;
