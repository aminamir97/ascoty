import axios from "axios";
import { useState } from "react";

function test() {
  const [file, setFile] = useState();
  const [uploadedFile, setUploadedFile] = useState();

  const selectedFile = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    setUploadedFile("Uploading the file to AWS S3");

    let { data } = await axios.post("/api/s3", {
      name: file.name,
      type: file.type,
    });

    const url = data.url;

    await axios.put(url, file, {
      headers: {
        "Content-Type": file.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    setFile(null);
  };
  return (
    <div>
      <main>
        <input
          type="file"
          onChange={(e) => {
            selectedFile(e);
          }}
        />
      </main>
    </div>
  );
}

export default test;
