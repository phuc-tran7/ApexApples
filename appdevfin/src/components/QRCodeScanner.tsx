import { useState } from "react";
import jsQr, { QRCode } from "jsqr";
import WebcamCapture from "./WebcamCapture";

function QRCodeScanner() {
  const [qrCode, setQrCode] = useState("");

  const handleScan = (imageSrc: any) => {
    if (imageSrc) {
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(image, 0, 0, canvas.width, canvas.height);
        const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
        let code;
        if (imageData && imageData.data) {
          code = jsQr(imageData?.data, imageData?.width, imageData?.height, {
            inversionAttempts: "dontInvert",
          });
        }
        if (code) {
          setQrCode(code.data);
          console.log("code: ", code);
        }
      };
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <WebcamCapture onScan={handleScan}></WebcamCapture>
    </div>
  );
}

export default QRCodeScanner;
