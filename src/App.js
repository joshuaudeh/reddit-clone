import React from "react";
import "./App.css";
import Header from "./features/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Memes from "./features/subreddits/Memes";
import Home from "./features/subreddits/Home";
import Pics from "./features/subreddits/Pics";
import Tinder from "./features/subreddits/Tinder";
import WorkReform from "./features/subreddits/WorkReform";
// import classnames from 'classnames';
// import styles from "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }} /* className="flex-container" */
        >
          <Header />

          <div
            // className={classnames(styles.styleProp)}
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              marginTop: "15px",
            }} /* className="flex-container" */
          >
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pics" element={<Pics />} />
                <Route path="/memes" element={<Memes />} />
                <Route path="/tinder" element={<Tinder />} />
                <Route path="/workreform" element={<WorkReform />} />
              </Routes>
            </Router>
            <div className="flex-right">
              <h2>Subreddits</h2>
              <ul>
                <a href="/">
                  <li
                    className="list-flex"
                    id={window.location.pathname === "/" ? "active" : ""}
                  >
                    <img
                      src="	https://b.thumbs.redditmedia.com/EndDxMGB-FTZ2MGtjepQ06cQEkZw_YQAsOUudpb9nSQ.png"
                      className="list-images"
                      alt=""
                    />
                    Home
                  </li>
                </a>

                <a href="/memes">
                  <li
                    className="list-flex"
                    id={window.location.pathname === "/memes" ? "active" : ""}
                  >
                    <img
                      src="https://b.thumbs.redditmedia.com/0PgZl68jAxA6T1BH6uvUQ5Bz1F1GrrJLCL8oi2Gz0Ak.png"
                      className="list-images"
                      alt=""
                    />
                    memes
                  </li>
                </a>
                <a href="/pics">
                  <li
                    className="list-flex"
                    id={window.location.pathname === "/pics" ? "active" : ""}
                  >
                    <img
                      src="https://b.thumbs.redditmedia.com/rh43sQqJjMMYfm-pvm1-T-KS1d4Lzll8daZsJCwob5Y.png"
                      className="list-images"
                      alt=""
                    />
                    pics
                  </li>
                </a>
                <a href="/tinder">
                  <li
                    className="list-flex"
                    id={window.location.pathname === "/tinder" ? "active" : ""}
                  >
                    <img
                      src="https://a.thumbs.redditmedia.com/ZaSYxoONdAREm1_u_sid_fjcgvBTNeFQV--8tz6fZC0.png"
                      className="list-images"
                      alt=""
                    />
                    Tinder
                  </li>
                </a>
                <a href="/workreform">
                  <li
                    className="list-flex"
                    id={
                      window.location.pathname === "/workreform" ? "active" : ""
                    }
                  >
                    <img
                      src="https://b.thumbs.redditmedia.com/B7IpR8P1mEsQIjdizK5x79s5aGfJUtKk3u2ksGZ9n2Q.png"
                      className="list-images"
                      alt=""
                    />
                    WorkReform
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
