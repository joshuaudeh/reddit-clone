import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Links.css";
import { PicsData } from "./PicsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Pics() {
  const pictures = useSelector((state) => state.pics.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PicsData());
  }, [dispatch]);
  console.log(pictures);
  return (
    <div className="flex-left">
      {pictures.map((picture) => {
        return (
          <div key={picture.id} className="card">
            <h2>{picture.title}</h2>
            <div style={{ display: "flex" }}>
              <div className="Bots">
                <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                <span>{picture.ups}</span>
                <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
              </div>
              <img src={picture.url} alt="" className="images-result" />
            </div>
            <hr />
            <div className="author-container">
              <p style={{ color: "blue" }}>{picture.author}</p>
              <div>
                <FontAwesomeIcon
                  icon={faComment}
                  style={{ marginRight: "5px" }}
                ></FontAwesomeIcon>
                {picture.num_comments}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Pics;
