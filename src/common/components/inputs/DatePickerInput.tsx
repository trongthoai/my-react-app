import { forwardRef } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import type { UISize, UIWidth } from "../../types/ui.types";
import { UI_SIZE } from "../../ui/ui.constants";

export type DatePickerInputProps = Omit<
  DatePickerProps,
  "value" | "onChange"
> & {
  label?: string;
  value?: Dayjs | null;
  onChange?: (value: Dayjs | null) => void;
  uiSize?: UISize;
  uiWidth?: UIWidth;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
};

const DatePickerInput = forwardRef<HTMLInputElement, DatePickerInputProps>(
  (
    {
      label,
      value,
      onChange,
      uiSize = "md",
      uiWidth = "full",
      required,
      disabled = false,
      readOnly = false,
      ...rest
    },
    ref
  ) => {
    return (
      <DatePicker
        {...rest}
        value={value ?? null}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        slotProps={{
          textField: {
            label,
            required,
            size: "small",
            inputRef: ref,
            fullWidth: uiWidth === "full",
            sx: {
              width: uiWidth === "full" ? "100%" : UI_SIZE.width[uiWidth],
              "& .MuiInputBase-root": {
                height: UI_SIZE.height[uiSize],
              },
            },
          },
        }}
      />
    );
  }
);

DatePickerInput.displayName = "DatePickerInput";
export default DatePickerInput;
