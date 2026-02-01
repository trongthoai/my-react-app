import { TextField, type TextFieldProps } from "@mui/material";
import { forwardRef } from "react";
import type { UISize, UIWidth } from "../../types/ui.types";
import { UI_SIZE } from "../../ui/ui.constants";

export type TextInputProps = Omit<TextFieldProps, "size"> & {
  label?: string;
  uiSize?: UISize;
  uiWidth?: UIWidth;
  required?: boolean;
  maxLength?: number;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      uiSize = "md",
      uiWidth = "full",
      required,
      maxLength,
      ...rest
    },
    ref
  ) => {
    return (
      <TextField
        {...rest}
        label={label}
        required={required}
        size="small"
        inputRef={ref}
        fullWidth={uiWidth === "full"}
        slotProps={{
          htmlInput: {
            maxLength,
          },
        }}
        sx={{
          width: uiWidth === "full" ? "100%" : UI_SIZE.width[uiWidth],
          "& .MuiInputBase-root": {
            height: UI_SIZE.height[uiSize],
          },
          ...rest.sx,
        }}
      />
    );
  }
);

TextInput.displayName = "TextInput";
export default TextInput;
