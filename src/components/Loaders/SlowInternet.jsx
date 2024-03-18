import "../../styles/loading/suspense.css";
import Navbar from "../Common/Navbar";

export default function Loading() {
  return (
    <div className="loader-container">
      <Navbar />
      <div className="loading-text">
        <h1>Your Webpage is loading</h1>
        <p>This would take a few seconds</p>
      </div>
    </div>
  );
}
