"use client";
import "./page.css";
import { useRecentTrespassers } from "./hooks/useApi";
import { useState } from "react";


export default function Home() {
  const { trespassers, error: trespassError } = useRecentTrespassers(2);
  const [trespasserImages, setTrespasserImages] = useState({}); // State for image data
  const [imageErrors, setImageErrors] = useState({}); // State for image loading errors

  if (trespassError) {
    return <p>Error: {trespassError.message}</p>; // Display error message
  }

  return (
    <main>
      <div className="speedometer">
        <div className="cir_1"></div>

        <div className="cir_2">
          <p className="indicator1">300</p>
          <p className="indicator2">Km/hr</p>
        </div>
      </div>

      <div className="section2">
        <div className="tab">
          <div>
            <h2 className="a">Latest Trespassers</h2>
            <ul>
              {Object.entries(trespassers).map(([key, trespasser]) => (
                <li key={key}>
                  <p>Speed: {trespasser.speed} kmph</p>
                  <p>Date: {trespasser.date}</p>
                  {trespasserImages[key] ? (
                    <img
                      src={`data:image/jpeg;base64,${setTrespasserImages(trespasserImages[key])}`} // Construct image URL
                      alt="Trespasser Image"
                      onError={() =>
                        setImageErrors({ ...imageErrors, [key]: true })
                      } // Handle image loading errors
                    />
                  ) : imageErrors[key] ? (
                    <p>Error loading image</p>
                  ) : (
                    <p>Loading image...</p>
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
