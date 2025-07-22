import { useState } from "react";
import { encrypt, decrypt } from "./utils/caesarCipher";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [key, setKey] = useState(3);
  const [output, setOutput] = useState("");

  const handleEncrypt = () => {
    setOutput(encrypt(message, parseInt(key)));
  };

  const handleDecrypt = () => {
    setOutput(decrypt(message, parseInt(key)));
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">Caesar Cipher</h1>
        <p className="intro">
          I'm currently taking a module called <strong>Coding & Cryptography III</strong> and recently learned
          about the Caesar Cipher. After building it in Java, I missed the South Africa 🇿🇦 vs
          Nigeria 🇳🇬 match... and wrote this web version instead, powered by React & JavaScript —
          built while listening to Linkin Park, and yes — it was raining 🌧️.
        </p>

        <h3 className="section-header">Message</h3>
        <textarea
          className="textarea"
          placeholder="Enter your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
        />

        <h3 className="section-header">Key (Shift)</h3>
        <input
          className="input"
          type="number"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />

        <div className="button-group">
          <button className="button encrypt" onClick={handleEncrypt}>
            Encrypt
          </button>
          <button className="button decrypt" onClick={handleDecrypt}>
            Decrypt
          </button>
        </div>

        <h3 className="section-header">Output</h3>
        <div className="output-box">{output || <span className="muted">Your result will appear here</span>}</div>
      </div>
    </div>
  );
}

export default App;
