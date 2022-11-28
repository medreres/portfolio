import React, { ReactNode } from "react";
// import styles from "./Background.module.css";
import "./Background.css";

interface ContainerProps {
  children?: ReactNode;
  height: number;
}
interface BubbleProps {
  i: number;
  height: number;
}

const Container = ({ height }: ContainerProps) => {
  const style = { "--height": `${height}vh` } as React.CSSProperties;
  const bubbles = createBubles(50, height);
  return (
    <div className="container" style={style}>
      {bubbles.map((bubble) => bubble)}
    </div>
  );
};

const Bubble = ({ i, height }: BubbleProps) => {
  const style = { "--i": i, "--top": ` ${Math.ceil(Math.random() * height) + 30}vh`} as React.CSSProperties;
  return <span style={style}></span>;
};

const createBubles = (n: number, height: number): React.ReactElement[] => {
  let bubbles: React.ReactElement[] = [];
  for (let i = 0; i < n; i++) {
    const bubble = (
      <Bubble
        key={i}
        i={Math.floor(Math.random() * 10)}
        height={height}
      />
    );
    bubbles.push(bubble);
  }
  return bubbles;
};

export default Container;
