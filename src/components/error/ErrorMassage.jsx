import React from "react";

const ErrorMassage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-center text-white my-2">Something went wrong...</h2>
      <h3 className="text-white">
        Try to choose another city or refresh this page.
      </h3>
    </div>
  );
};

export default ErrorMassage;
