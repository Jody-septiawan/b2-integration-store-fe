import React from "react";

export const useFoodFilter = ({ foods }) => {
  const [value, setValue] = React.useState("");

  const handleOnChange = (event) => {
    const valueFilter = event.target.value;
    setValue(valueFilter);
  };

  const foodFiltereds = React.useMemo(() => {
    if (!foods) return [];

    return foods.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
  }, [foods, value]);

  return { foodFiltereds, handleOnChange, value };
};
