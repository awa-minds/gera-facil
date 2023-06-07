'use client'

import React, { useState } from "react";

export const QRCodeValidator: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedText, setScannedText] = useState("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const response = await fetch("http://api.qrserver.com/v1/read-qr-code/", {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      const result = data[0]?.symbol[0]?.data;
      
      if (result) {
        setScannedText(result);
        setIsScanning(true);
      } else {
        setIsScanning(false);
      }
    } catch (error) {
      console.error("Couldn't scan QR Code", error);
      setIsScanning(false);
    }
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(scannedText);
  };

  const handleOpenFileInput = () => {
    if (!isScanning) {
      const fileInput = document.getElementById("fileInput");
      fileInput?.click();
    }
  };

  const handleCloseScanner = () => {
    setIsScanning(false);
  };

  return (
        <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-1">
        <form
          action="#"
          className={`flex h-44 cursor-pointer select-none text-center rounded-lg bg-white ${isScanning ? "active" : ""} transition-height duration-200 ease-in-out items-center justify-center`}
        >
          <input
            type="file"
            id="fileInput"
            hidden
            onChange={handleFileChange}
          />
          <img
            src="#"
            alt="qr-code"
            className={`${isScanning ? "block" : "hidden"} max-w-48`}
          />
          <div className={`content ${isScanning ? "hidden" : ""}`}>
            <i className="fas fa-cloud-upload text-blue-500 text-6xl"></i>
            <p className="text-blue-500 mt-3 text-xl">
              Upload QR Code to Read
            </p>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};
