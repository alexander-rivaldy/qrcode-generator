import React, { useState } from 'react';

import QRCode from 'qrcode';

import './App.css';

const App: React.FunctionComponent = () => {
  const [error, setError] = useState(false);
  const [qrcodeValue, setQrcodeValue] = useState('');
  const [qrcodeImage, setQrcodeImage] = useState('');

  const generateQRCode = async (text: string) => {
    const url = await QRCode.toDataURL(text, { margin: 1, scale: 10 });
    console.log(text);
    console.log(url);
    return url;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="input-container">
          {error && <p className="error-message">Put in a value!!!</p>}
          <label>Enter the website url (or any text at all!) here:</label>
          <input
            type="text"
            id="qrcodeValue"
            value={qrcodeValue}
            onChange={(e) => setQrcodeValue(e.target.value)}
          ></input>

          <button
            onClick={async (e: any) => {
              const qrcodeValueElement: any = document.getElementById(
                'qrcodeValue'
              );
              const value: string = qrcodeValueElement.value;
              if (value) {
                setQrcodeImage(await generateQRCode(qrcodeValueElement.value));
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
