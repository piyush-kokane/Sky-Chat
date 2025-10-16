import { useState } from "react";
import "./styles/ToggleSwitch.css";



interface ToggleSwitchProps {
  defaultState?: boolean;
  onToggle?: (checked: boolean) => void;
}


function ToggleSwitch({ defaultState = false, onToggle } : ToggleSwitchProps ) {
  const [isChecked, setChecked] = useState(defaultState);

  const handleToggle = () => {
    setChecked(!isChecked);
    onToggle?.(!isChecked);
  };

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <span className="slider" />
    </label>
  );
};

export default ToggleSwitch;
