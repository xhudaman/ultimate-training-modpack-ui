import Slider from "@mui/material/Slider";

const Range = ({ label, min, max, step, defaultValue, value, setValue }) => {
  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <div className="w-80">
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        getAriaLabel={() => label}
        valueLabelDisplay="auto"
        getAriaValueText={(num) => num.toString()}
      />
    </div>
  );
};

export default Range;
