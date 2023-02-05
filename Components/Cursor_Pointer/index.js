import React,{useContext} from "react";
import { useEffect } from "react";
import { useState } from "react";
import style from "./index.module.css";
import { CursorContext } from "@/context/CursorContext";

const Cursor_Pointer = () => {

  const context = useContext(CursorContext);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(10);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
    document.addEventListener("mouseenter", () => {
      setCursorSize(10);
    });
    document.addEventListener("mouseleave", () => {
      setCursorSize(10);
    });
  }, []);

  return (
    <div
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        width: context.cursorStyle.width,
        height: context.cursorStyle.height,
        backgroundColor: context.cursorStyle.color,
        opacity: context.cursorStyle.width == 50 && context.cursorStyle.height == 50 ? "0.6" : "1",
      }}
      className={style.cursor}
    />
  );
};

export default Cursor_Pointer;
