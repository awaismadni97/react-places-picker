import { useEffect} from "react";
import { ProgressBar } from "./ProgressBar.jsx";

const Timer = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  
  useEffect(() => {
    console.log("TIMER_SET");
    const timer = setTimeout(() => {
      onConfirm();
    }, Timer);

    return () => {
      console.log("Clearing up the timer");
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={Timer} />
    </div>
  );
}
