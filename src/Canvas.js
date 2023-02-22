import useCanvas from "./useCanvas";
function Canvas({ draw }) {
  const canvasRef = useCanvas(draw);
  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}

export default Canvas;
