import React, { useState } from 'react';

import QRCode from 'qrcode';

import './App.css';

const App: React.FunctionComponent = () => {
  const [error, setError] = useState(false);
  const [qrcodeColor, setQrcodeColor] = useState('');
  const [qrcodeValue, setQrcodeValue] = useState('');
  const [qrcodeImage, setQrcodeImage] = useState('');

  const generateQRCode = async (text: string) =>
    await QRCode.toDataURL(text, {
      margin: 1,
      scale: 10,
      color: { dark: qrcodeColor },
    });

  return (
    <div className="App">
      <header className="App-header">
        <div className="input-container">
          {error && <p className="error-message">Put in a value!!!</p>}
          <label>Enter the website url (or any text at all!) here:</label>
          <div className="input-fields-container">
            <input
              type="text"
              id="qrcodeValue"
              value={qrcodeValue}
              onChange={(e) => setQrcodeValue(e.target.value)}
            />
            <input
              type="color"
              id="qrcodeColor"
              value={qrcodeColor}
              onChange={(e) => setQrcodeColor(e.target.value)}
            />
          </div>

          <button
            onClick={async () => {
              if (qrcodeValue) {
                setQrcodeImage(await generateQRCode(qrcodeValue));
                setError(false);
              } else {
                setError(true);
              }
            }}
          >
            GENERATE!!!
          </button>
        </div>
        <div className="qrcode-container">
          <img src={qrcodeImage}></img>
        </div>
      </header>
    </div>
  );
};

export default App;
