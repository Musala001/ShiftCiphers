export function encrypt(text, key) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
  
    text = text.toUpperCase();
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const index = alphabet.indexOf(char);
  
      if (index === -1) {
        result += char; // keep spaces/punctuation
      } else {
        const shifted = (index + key) % 26;
        result += alphabet[shifted];
      }
    }
  
    return result;
  }
  
  export function decrypt(text, key) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
  
    text = text.toUpperCase();
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const index = alphabet.indexOf(char);
  
      if (index === -1) {
        result += char;
      } else {
        let shifted = index - key;
        if (shifted < 0) shifted += 26;
        result += alphabet[shifted];
      }
    }
  
    return result;
  }
  