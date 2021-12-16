import React from "react";
import ReactDOM from "react-dom";
import "josa-complete";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { globalCss } from "#/stitches.config";
import { MeatIn } from "./page";

globalCss({
  "@import": [
    "/src/asset/font/nexon.css",
    "//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css",
  ],
  ":root": {
    fontSize: "8px",
    "@bp1": {
      // fontSize: "6px",
    },
  },
  body: {
    fontSize: "3rem",
    fontFamily: "NEXON Lv1 Gothic OTF",
    margin: "0px",
    overflow: "hidden",
  },
})();

const AnimatedRouter = () => {
  const location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} timeout={300} classNames="fade">
        <Routes location={location}>
          <Route path="/" element={<MeatIn />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <AnimatedRouter />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
