import { ProgressBar } from "react-loader-spinner";

export default function LoadingSpinner() {
  return (
    <ProgressBar
      height="150"
      width="150"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#F4442E"
      barColor="#51E5FF"
    />
  );
}
