'use client'

import React, { useState } from "react";

import "./styles.css";

export const QRCodeGenerator = () => {
  const [qrValue, setQrValue] = useState("");
  const [preValue, setPreValue] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleGenerateQRCode = () => {
    const trimmedValue = qrValue.trim();
    if (!trimmedValue || preValue === trimmedValue) return;
    setPreValue(trimmedValue);
    setIsActive(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQrValue(value);
    if (!value.trim()) {
      setIsActive(false);
      setPreValue("");
    }
  };

  return (
    <div>
      <div className="">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center">
            <div className={`wrapper ${isActive ? "active" : ""}`}>
              <header>
                <p>Cole uma url ou digite um texto para criar o QR Code</p>
              </header>
              <div className="form">
                <input
                  type="text"
                  spellCheck="false"
                  placeholder="Digite um texto ou URL"
                  value={qrValue}
                  onChange={handleInputChange}
                />
                <button
                  className="rounded-md bg-awa-100 px-6 py-2 text-white transition-colors hover:bg-awa-300"
                  onClick={handleGenerateQRCode}
                >
                  Gerar QR Code
                </button>
              </div>
              <div className="qr-code">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`}
                  alt="qr-code"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
