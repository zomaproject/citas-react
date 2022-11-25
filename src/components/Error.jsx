import React from "react";

function Error({children}) {
  return (
    <div className="text-center font-bold mb-3 text-white rounded-md bg-rose-800 p-3 uppercase ">
      {children}
    </div>
  );
}

export default Error;
