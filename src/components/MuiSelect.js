import { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

export const MuiSelect = () => {
  // const [countries, setCountries] = useState<string[]>([]);
  // console.log({ countries });
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   console.log({ value });
  //   setCountries(typeof value === "string" ? value.split(",") : value);
  // };
  const [countries, setCountries] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    console.log({ value });
    setCountries(value);
  };
  return (
    <Box width="50%">
      <TextField
        fullWidth
        label="請選擇國家"
        select
        size="small"
        color="secondary"
        helperText={countries ? "" : "請選擇國家"}
        value={countries}
        onChange={handleChange}
        SelectProps={{ multiple: true }}
      >
        <MenuItem value="TW">Taiwan</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="JP">Japan</MenuItem>
      </TextField>
    </Box>
  );
};
