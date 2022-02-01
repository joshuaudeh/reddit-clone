import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WorkData } from "./workReformSlice";
import "./Links.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function WorkReform() {
  const work = useSelector((state) => state.work.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(WorkData());
  }, [dispatch]);
  console.log(work);
  return (
    <div className="flex-left">
      {work.map((work) => {
        return (
          <div key={work.id} className="card">
            <h2>{work.title}</h2>
            <div style={{ display: "flex" }}>
              <div className="Bots">
                <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                <span>{work.ups}</span>
                <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
              </div>
              <img src={work.url} alt="" className="images-result" />
            </div>
            <hr />
            <div className="author-container">
              <p style={{ color: "blue" }}>{work.author}</p>
              <div>
                <FontAwesomeIcon
                  icon={faComment}
                  style={{ marginRight: "5px" }}
                ></FontAwesomeIcon>
                {work.num_comments}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WorkReform;
