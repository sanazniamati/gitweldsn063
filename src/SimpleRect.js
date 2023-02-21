import { useEffect, useRef } from "react";
function SimpleRect() {
  const canvasRef = useRef();

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.strokeRect(400, 100, 150, 150);
      ctx.arc(400, 375, 50, 0, 2 * Math.PI);
      ctx.stroke();
      // Tangential lines
      ctx.beginPath();
      ctx.strokeStyle = "gray";
      ctx.moveTo(200, 20);
      ctx.lineTo(200, 130);
      ctx.lineTo(50, 20);
      ctx.stroke();

      // Arc
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = 5;
      ctx.moveTo(200, 20);
      ctx.arcTo(200, 130, 50, 20, 40);
      ctx.stroke();

      // Start point
      ctx.beginPath();
      ctx.fillStyle = "blue";
      ctx.arc(200, 20, 5, 0, 2 * Math.PI);
      ctx.fill();

      // Control points
      ctx.beginPath();
      ctx.fillStyle = "red";
      ctx.arc(200, 130, 5, 0, 2 * Math.PI); // Control point one
      ctx.arc(50, 20, 5, 0, 2 * Math.PI); // Control point two
      ctx.fill();
      ctx.lineWidth = 10;
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(20, 220);
      ctx.lineTo(190, 200);
      ctx.lineTo(280, 120);
      ctx.lineTo(280, 250);
      ctx.stroke();
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{ border: "5px solid black" }}
    />
  );
}

export default SimpleRect;
