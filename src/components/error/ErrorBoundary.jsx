import { useSelector } from "react-redux";

import ErrorMassage from "./ErrorMassage";

const ErrorBoundary = ({ children }) => {
  const { weatherLoadingStatus } = useSelector((state) => state.weather);

  if (weatherLoadingStatus === "error") {
    return <ErrorMassage />;
  }

  return children;
};

export default ErrorBoundary;
