import { useEffect, useRef } from "react";
import Webcam from "react-webcam";

function WebcamCapture({ onScan }: { onScan: any }) {
  const webcamRef = useRef<Webcam>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      capture();
    }, 500);
    return () => clearInterval(timer);
  }, []);

  function capture() {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      onScan(imageSrc);
    }
  }

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          width: 500,
          height: 500,
          facingMode: "environment",
        }}
        onClick={() => capture()}
      ></Webcam>
    </div>
  );
}

export default WebcamCapture;
