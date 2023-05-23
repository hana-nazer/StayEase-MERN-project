import React from "react";

function Images() {
  return (
    <>
     <div className="grid grid-cols-4 gap-1 h-80">
        <div className="col-span-1">
          <div className="mb-1 bg-red-500 h-1/2">Row 1</div>
          <div className="bg-green-500 h-1/2">Row 2</div>
        </div>
        <div className="col-span-1">
          <div className="mb-1 bg-yellow-500 h-1/2">Row 1</div>
          <div className="bg-blue-500 h-1/2">Row 2</div>
        </div>
        <div className="h-full col-span-2 bg-green-500">Column 3</div>
      </div>
    </>
  );
}

export default Images;
