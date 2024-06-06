import { useState } from "react";
import { Button } from "./ui/button";

interface ButtonOption {
  value: string;
  label: string;
}

interface ButtonGroupProps {
  options: ButtonOption[];
  defaultValue: string;
  onChange: (value: string) => void;
}

export function ButtonGroup({ options, defaultValue, onChange }: ButtonGroupProps) {

  const [value, setValue] = useState<string>(defaultValue);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    onChange(newValue);
  };
  return (
    <div className="flex items-center justify-center">
      {options.map((option, index) => (
        <Button
          key={option.value}
          className={`inline-flex items-center rounded-none justify-center px-4 py-2 text-sm font-semibold transition-colors focus:outline-none border-slate-300 border-t-2 border-b-2 text-slate-900
          ${
            value === option.value
              ? 'bg-slate-300  hover:bg-slate-400 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-300'
              : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600'
          } ${
            index === 0
              ? 'rounded-l-md border-l-2'
              : index === options.length - 1
              ? 'rounded-r-md border-r-2 border-l-2'
              : ''
          }`}
          onClick={() => handleChange(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  )
}