import { forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";;
import dayjs, { Dayjs } from "dayjs";
import DatePickerInput, { type DatePickerInputProps } from "./DatePickerInput";

export type RHFDatePickerInputProps = DatePickerInputProps & {
  name: string;
};

const RHFDatePickerInput = forwardRef<
  HTMLInputElement,
  RHFDatePickerInputProps
>(({ name, ...props }, ref) => {
  const methods = useFormContext();

  if (!methods) {
    throw new Error("RHFDatePickerInput must be used inside FormProvider");
  }

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
        />
      )}
    />
  );
});

RHFDatePickerInput.displayName = "RHFDatePickerInput";
export default RHFDatePickerInput;
