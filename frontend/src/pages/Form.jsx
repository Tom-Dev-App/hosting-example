import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Form = () => {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create FormData object and append image file
    const formData = new FormData();
    formData.append("photo", image);

    try {
      // Send POST request to upload image
      const response = await axios.post(
        `${import.meta.env.VITE_APP_SERVER_URL}/file/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle successful upload
      setMessage("Image uploaded successfully!");
    } catch (error) {
      // Handle upload error
      console.error("Error uploading image:", error);
      setMessage("Error uploading image: " + error.message);
    }
  };

  return (
    <section>
      <Navbar />
      <div className="px-5 mt-5">
        <h1>Halaman Form Data</h1>
        <form className="form-group" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="formFile" className="form-label mt-4">
              Image
            </label>
            <input
              className="form-control"
              type="file"
              name="photo"
              id="photo"
              onChange={handleFileChange}
            />
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </section>
  );
};

export default Form;
