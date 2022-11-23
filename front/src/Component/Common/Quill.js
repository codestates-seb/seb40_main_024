import { useQuill } from 'react-quilljs';
// or const { useQuill } = require('react-quilljs');

import 'quill/dist/quill.snow.css'; // Add css for snow theme
import './Quill.css';
import { useEffect } from 'react';
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

function Quill({ setBody }) {
  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        const text = quill.getText();
        setBody(text);
      });
    }
  });

  // console.log(quill); // undefined > Quill Object
  // console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }
  return (
    <div>
      <div ref={quillRef}></div>
    </div>
  );
}

export default Quill;
