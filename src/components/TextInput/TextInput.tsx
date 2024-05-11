import { useState } from 'react';

const TextInput = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <input
        aria-label="Text Input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Entered Text: {text}</p>
    </div>
  );
};

export default TextInput;
