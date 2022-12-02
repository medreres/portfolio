import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
// import styles from "./Background.module.css";
import "./Background.css";

interface BubbleProps {
  i: number;
}

const Container = () => {
  const bubbles = createBubles(50);
  return (
    <>
      {ReactDOM.createPortal(
        <>{bubbles.map((bubble) => bubble)},</>,
        document.querySelector("#backround")!
      )}
    </>
  );
};

const Bubble = ({ i }: BubbleProps) => {
  const style = {
    "--i": i,
    "--top": ` ${Math.ceil(Math.random()) + 30}vh`,
  } as React.CSSProperties;
  return <span style={style}></span>;
};

const createBubles = (n: number): React.ReactElement[] => {
  let bubbles: React.ReactElement[] = [];
  for (let i = 0; i < n; i++) {
    const bubble = <Bubble key={i} i={Math.floor(Math.random() * 10)} />;
    bubbles.push(bubble);
  }
  return bubbles;
};

export default Container;
