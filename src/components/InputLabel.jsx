import React from "react";

export const InputLabel = ({
  name,
  maxLength,
  minLength,
  placeholder,
  label,
  value,
  onChange,
}) => {
  return (
    <label
      htmlFor={name}
      className="flex flex-col gap-1 text-nSmokeyGrey font-[700]"
    >
      {label}
      <input
        className="w-32 ring-2 ring-nOffWhite rounded-md px-4 py-2 text-nOffBlack text-2xl outline-none focus:ring-purple transition duration-200"
        type="number"
        name={name}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        pattern="[0-9]*"
        onInput={(e) => {
          e.target.value.length > e.target.maxLength
            ? (e.target.value = e.target.value.slice(0, e.target.maxLength))
            : e.target.value;
        }}
        onChange={onChange}
        value={value}
        required
      />
    </label>
  );
};
