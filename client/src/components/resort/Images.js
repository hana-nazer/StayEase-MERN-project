import React from "react";
import { useSelector } from "react-redux";

function Images() {
  const resortData = useSelector((state) => state.verifyResort.resortData);

  return (
    <>
      {resortData.images && resortData.images.length > 0 ? (
        <>
          <div className="grid grid-cols-4 gap-1 mb-8 h-800">
            <div className="col-span-1">
              <div className="mb-1">
                <img
                  src={resortData.images[0]}
                  alt="Resort Image"
                  style={{ width: "300px", height: "200px" }}
                />
              </div>

              <div className="mb-1">
                <img
                  src={resortData.images[1]}
                  alt="Resort Image"
                  style={{ width: "300px", height: "200px" }}
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="mb-1">
                <img
                  src={resortData.images[2]}
                  alt="Resort Image"
                  style={{ width: "300px", height: "200px" }}
                />
              </div>

              <div className="mb-1">
                <img
                  src={resortData.images[3]}
                  alt="Resort Image"
                  style={{ width: "300px", height: "200px" }}
                />
              </div>
            </div>
            <div className="h-full col-span-2">
              <div className="w-full mb-1">
                <img
                  src={resortData.images[4]}
                  alt="Resort Image"
                  style={{ width: "100%", height: "404px" }}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <span>No images available</span>
      )}
    </>
  );
}

export default Images;
