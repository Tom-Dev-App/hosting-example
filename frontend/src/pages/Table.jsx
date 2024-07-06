import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
// import "dotenv/config";

const Table = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(`${import.meta.env.VITE_APP_SERVER_URL}/file/photos`);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_SERVER_URL}/file/photos`)
      .then((response) => {
        setImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
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
              </tr>
            </thead>
            <tbody>
              {images.map((image, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{image}</td>
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
