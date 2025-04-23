"use client"
import { CSSProperties, useEffect, useRef } from "react";
import { cursorTrail } from "@/utility/cursorTrail";

export type CursorTrailCanvasProps = {
  color: string;
  className?: string;
  style?: CSSProperties;
};

export function CursorTrailCanvas(props: CursorTrailCanvasProps) {
  const refCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const { cleanUp, renderTrailCursor } = cursorTrail({
      ref: refCanvas,
      color: props.color,
    });
    renderTrailCursor();

    return () => {
      cleanUp();
    };
  }, [props.color]);

  return (
    <canvas
      ref={refCanvas}
      className={props.className}
      style={props.style}
    ></canvas>
  );
}