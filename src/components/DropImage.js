import React, { useState, useRef } from "react";
import "./DragImage.css";

const DragImage = (props) => {
    const {name, onDrag, ...otherProps} = props;

  const [files, setFiles] = useState(null);

  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  // send files to the server // learn from my other video
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);

    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }
    // )
  };

  if (files)
    return (
      <div className="uploads">
        <ul>
          {Array.from(files).map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
        </ul>
        <div className="actions">
          <button onClick={() => setFiles(null)}>Cancel</button>
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>
    );

    function func1(event) {
       setFiles(event.target.files);
    }


  return (
    <>
      {!files && (
        <div
          className="dropzone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h1>
            ჩააგდე ან ატვირთე <br /> ლეპტოპის ფოტო
          </h1>
          <input
            type="file"
            multiple
            onChange={(e) => {func1(e)}}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
          <button onClick={() => inputRef.current.click()}>ატვირთე</button>
        </div>
      )}
    </>
  );
};

export default DragImage;
