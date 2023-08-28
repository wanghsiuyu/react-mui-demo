import React, { useState, ChangeEvent } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
export const MuiTextField = () => {
  //基本表單用法
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  //密碼可見與不可見
  const [viewer, setViewer] = useState(false);

  //圖片上傳轉base64
  const [imageBase64, setImageBase64] = useState<string>("");
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageBase64(reader.result as string);
        console.log("reader result", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Stack spacing={4}>
      <h2>基本表單用法</h2>
      <Stack spacing={2} direction="row">
        <TextField label="Outlined" variant="outlined" />
        <TextField label="Filled" variant="filled" />
        <TextField label="Standard" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="大小、focus外框顏色可更改"
          size="small"
          color="secondary"
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Form Input"
          required
          helperText={!value ? "必填" : "不要向任何人分享您的密碼"}
          type="password"
          error={!value}
          value={value}
          onChange={handleChange}
        />
        <TextField label="read only 不能修改" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="金額"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="重量"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
      <Stack spacing={2} direction="row">
        {/* 密碼可見與不可見 */}
        <TextField
          label="密碼"
          type={viewer ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={() => setViewer(!viewer)}
                style={{ cursor: "pointer" }}
              >
                {viewer ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </InputAdornment>
            ),
          }}
        />

        {/* 圖片上傳轉base64 */}
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {imageBase64 && <img src={imageBase64} alt="Uploaded" />}
      </Stack>
    </Stack>
  );
};
