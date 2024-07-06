import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Table = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(`${import.meta.env.VITE_APP_SERVER_URL}/file/photos`);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_SERVER_URL}/file/photos`
        );
        console.log(response.data); // Log the response to the console
        setImages(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <Navbar />
      <div className="px-5 mt-5">
        <h1>Halaman Table Data</h1>
        {images.length === 0 ? (
          <div>Data not found</div>
        ) : (
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Gambar</th>
                <th scope="col">Filename</th>
                <th scope="col">User Filename</th>
                <th scope="col">Created At</th>
              </tr>
            </thead>
            <tbody>
              {images.map((image, index) => (
                <tr key={image.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={image.fileurl}
                      alt={image.userFilename}
                      width="100"
                    />
                  </td>
                  <td>{image.filename}</td>
                  <td>{image.userFilename}</td>
                  <td>{new Date(image.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default Table;
