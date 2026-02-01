import { MenuItem, TextField, type TextFieldProps } from "@mui/material";
import type { UISize, UIWidth } from "../../types/ui.types";
import { forwardRef } from "react";
import { UI_SIZE } from "../../ui/ui.constants";


export type SelectOption<T = string | number> = {
  label: string;
  value: T;
};

export type SelectInputProps = Omit<TextFieldProps, "size" | "select"> & {
  label?: string;
  uiSize?: UISize;
  uiWidth?: UIWidth;
  required?: boolean;
  options: SelectOption[];
  readOnly?: boolean;
  disabled?: boolean;
};

const SelectInput = forwardRef<HTMLInputElement, SelectInputProps>(
  (
    {
      label,
      uiSize = "md",
      uiWidth = "full",
      required,
      readOnly = false,
      disabled = false,
      options,
      ...rest
    },
    ref
  ) => {
    return (
      <TextField
        {...rest}
        select
        label={label}
        required={required}
        size="small"
        inputRef={ref}
        fullWidth={uiWidth === "full"}
        sx={{
          width: uiWidth === "full" ? "100%" : UI_SIZE.width[uiWidth],
          "& .MuiInputBase-root": {
            height: UI_SIZE.height[uiSize],
          },
          ...rest.sx,
        }}
        slotProps={{
            htmlInput: {
                readOnly,
                disabled,
            }
        }}
      >
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </TextField>
    );
  }
);

SelectInput.displayName = "SelectInput";
export default SelectInput;
