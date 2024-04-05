"use client";
import "./page.css";
import { useRecentTrespassers } from "./hooks/useApi";
import { useState } from "react";


export default function Home() {
  const { trespassers, error: trespassError } = useRecentTrespassers(2);
  const [imageErrors, setImageErrors] = useState({}); // State for image loading errors

  const handleImageError = (key) => {
    setImageErrors((prevErrors) => ({
      ...prevErrors,
      [key]: true
    }));
  };



  return (
    <main>
      <div className="speedometer">
        <div className="cir_1"></div>

        <div className="cir_2">
          <p className="indicator3">Speed Limit:</p>
          <p className="indicator1">40</p>
          <p className="indicator2">Km/hr</p>
        </div>
      </div>

      <div className="section2">
            <h2 className="a">Latest Trespassers</h2>
        <div className="tab">
          <div>
            <ul>
              <p className="err">{trespassError && `Error: ${trespassError.message}, please try again later.`}</p>
              {Object.entries(trespassers).map(([key, trespasser]) => (
                <li key={key}>
                  <p className="details">Speed: {trespasser.speed} kmph</p>
                  <p className="details">Date: {trespasser.date}</p>
                  {trespasser.ImageBytes ? (
                    <img
                    src={`data:image/jpeg;base64,${trespasser.ImageBytes}`} // Construct image URL
                      alt="Trespasser Image"
                      onError={() => handleImageError(key)}// Handle image loading errors
                    />
                  ) : imageErrors[key] ? (
                    <p className="details">Error loading image</p>
                  ) : (
                    <p className="details">Loading image...</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
