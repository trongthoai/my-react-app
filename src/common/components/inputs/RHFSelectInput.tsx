import { forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { SelectInputProps } from "./SelectInput";
import SelectInput from "./SelectInput";

export type RHFSelectInputProps = SelectInputProps & {
  name: string;
};

const RHFSelectInput = forwardRef<HTMLInputElement, RHFSelectInputProps>(
  ({ name, disabled, readOnly, ...props }, ref) => {
    const methods = useFormContext();

    if (!methods) {
      throw new Error("RHFSelectInput must be used inside FormProvider");
    }

    const formMode = document.querySelector('form')?.getAttribute('data-form-mode') ?? "create";

    const isReadOnly = readOnly || formMode === 'view';

    const { control } = methods;

    return (
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <SelectInput
            {...props}
            {...field}
            ref={ref}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            disabled= {disabled}
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
  }
);

RHFSelectInput.displayName = "RHFSelectInput";
export default RHFSelectInput;
