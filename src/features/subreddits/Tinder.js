import React, { useEffect } from "react";
import "./Links.css";
import { TinderData } from "./TinderSlice";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Tinder() {
  const Tinder = useSelector((state) => state.tinder.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TinderData());
  }, [dispatch]);
  console.log(Tinder);
  return (
    <div className="flex-left">
      {Tinder.map((Tinder) => {
        return (
          <div key={Tinder.id} className="card">
            <h1>{Tinder.title}</h1>
            <div style={{ display: "flex" }}>
              <div className="Bots">
                <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                <span>{Tinder.ups}</span>
                <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
              </div>
              <img src={Tinder.url} alt="" className="images-result" />
            </div>
            <hr />
            <div className="author-container">
              <p style={{ color: "blue" }}>{Tinder.author}</p>
              <div>
                <FontAwesomeIcon
                  icon={faComment}
                  style={{ marginRight: "5px" }}
                ></FontAwesomeIcon>
                {Tinder.num_comments}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Tinder;
