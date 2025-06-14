import React, { FC, useState, useEffect } from "react";
import { Input } from "@/components/ui";
import { RangeSlider } from "@/components/shared/range-slider";

const presetRange: [number, number] = [0, 500];

export interface IPriceFilterProps {
  min?: number;
  max?: number;
  step?: number;
  defaultRange?: [number, number];
  onChange?: (value: [number, number]) => void;
}

export const PriceFilter: FC<IPriceFilterProps> = ({
  min = 0,
  max = 10000,
  step = 10,
  defaultRange = presetRange,
  onChange,
}) => {
  const [range, setRange] = useState<[number, number]>(defaultRange);

  const [inputValues, setInputValues] = useState<[string, string]>([
    String(defaultRange[0]),
    String(defaultRange[1]),
  ]);

  const [fromEdited, setFromEdited] = useState(false);

  useEffect(() => {
    setRange(defaultRange);
    setInputValues([String(defaultRange[0]), String(defaultRange[1])]);
    setFromEdited(false);
  }, [defaultRange]);

  const handleInputChange = (index: 0 | 1, value: string) => {
    if (index === 0 && !fromEdited && value !== "0") {
      setFromEdited(true);
      value = value.replace(/^0+/, "");
    }
    if (index === 0 && value === "") {
      setInputValues(["", inputValues[1]]);
      return;
    }
    const newInputs: [string, string] = [...inputValues] as [string, string];
    newInputs[index] = value;
    setInputValues(newInputs);
    const num = Number(value);
    if (!isNaN(num) && value !== "") {
      const newRange: [number, number] = [...range];
      newRange[index] = num;
      if (index === 0) {
        newRange[0] = Math.max(min, Math.min(newRange[0], newRange[1], max));
      } else {
        newRange[1] = Math.min(max, Math.max(newRange[1], newRange[0], min));
      }
      setRange(newRange);
      onChange?.(newRange);
    }
  };

  const handleInputBlur = (index: 0 | 1) => {
    let num = Number(inputValues[index]);
    if (isNaN(num) || inputValues[index] === "") num = index === 0 ? min : max;
    const newRange: [number, number] = [...range];
    newRange[index] = num;
    if (index === 0) {
      newRange[0] = Math.max(min, Math.min(newRange[0], newRange[1], max));
    } else {
      newRange[1] = Math.min(max, Math.max(newRange[1], newRange[0], min));
    }
    setRange(newRange);
    setInputValues([String(newRange[0]), String(newRange[1])]);
    onChange?.(newRange);
    if (index === 0 && inputValues[0] === "") {
      setFromEdited(false);
    }
  };

  const handleSliderChange = (values: number[]) => {
    setRange([values[0], values[1]]);
    setInputValues([String(values[0]), String(values[1])]);
    if (values[0] === 0) {
      setFromEdited(false);
    }
    onChange?.([values[0], values[1]]);
  };

  return (
    <div className="mt-5  border-y border-y-neutral-100 py-6 pb-7">
      <p className="font-bold mb-3">Цена:</p>
      <div className="flex gap-3 mb-5">
        <Input
          className="w-1/2 px-4 py-2 border border-neutral-200 rounded-lg"
          type="number"
          placeholder="от"
          min={min}
          max={range[1]}
          value={inputValues[0]}
          onChange={(e) => handleInputChange(0, e.target.value)}
          onBlur={() => handleInputBlur(0)}
        />
        <Input
          className="w-1/2 px-4 py-2 border border-neutral-200 rounded-lg"
          type="number"
          placeholder="до"
          min={range[0]}
          max={max}
          value={inputValues[1]}
          onChange={(e) => handleInputChange(1, e.target.value)}
          onBlur={() => handleInputBlur(1)}
        />
      </div>
      <RangeSlider
        min={min}
        max={max}
        step={step}
        value={range}
        onValueChange={handleSliderChange}
      />
    </div>
  );
};
