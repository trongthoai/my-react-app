import { forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";;
import dayjs, { Dayjs } from "dayjs";
import DatePickerInput, { type DatePickerInputProps } from "./DatePickerInput";

export type RHFDatePickerInputProps = DatePickerInputProps & {
  name: string;
  disabled?: boolean;
  readOnly?: boolean;
};

const RHFDatePickerInput = forwardRef<
  HTMLInputElement,
  RHFDatePickerInputProps
>(({ name, disabled = false, readOnly = false, ...props }, ref) => {
  const methods = useFormContext();

  if (!methods) {
    throw new Error("RHFDatePickerInput must be used inside FormProvider");
  }

  const formMode = document.querySelector('form')?.getAttribute('data-form-mode') ?? "create";

  const isReadOnly = readOnly || formMode === 'view';

  const { control } = methods;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <DatePickerInput
          {...props}
          value={field.value ? dayjs(field.value) : null}
          onChange={(val: Dayjs | null) =>
            field.onChange(val ? val.toISOString() : null)
          }
          ref={ref}
          slotProps={{
            textField: {
              error: !!fieldState.error,
              helperText: fieldState.error?.message,
            },
          }}
          disabled={disabled}
          readOnly={isReadOnly}
          sx={{
            ...(isReadOnly && {
              pointerEvents: "none", // chặn focus chuột
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(0,0,0,0.12)", // ❌ bỏ viền cam
                  borderWidth: 1,
                },
              },
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "rgba(0,0,0,0.87)", // text không bị mờ
              },
            }),
          }}
        />
      )}
    />
  );
});

RHFDatePickerInput.displayName = "RHFDatePickerInput";
export default RHFDatePickerInput;
