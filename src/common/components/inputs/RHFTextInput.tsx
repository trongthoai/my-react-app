import { forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextInput from "./TextInput";
import type { BaseFieldProps } from "../../../sidebar/types";

interface RHFTextInputProps extends BaseFieldProps {
  maxLength?: number;
}

const RHFTextInput = forwardRef<HTMLInputElement, RHFTextInputProps>(
  ({ name, label, required, maxLength, disabled, readOnly, ...props }, ref) => {
    const methods = useFormContext();

    if (!methods) {
      throw new Error("RHFTextInput must be used inside FormProvider");
    }

    const formMode = document.querySelector('form')?.getAttribute('data-form-mode') ?? "create";

    const isReadOnly = readOnly || formMode === 'view';

    const { control } = methods;

    return (
      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? `${label} is required` : false,
          maxLength: maxLength
            ? { value: maxLength, message: `Max ${maxLength} characters` }
            : undefined,
        }}
        render={({ field, fieldState }) => (
          <TextInput
            {...props}
            {...field}
            ref={ref}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            label={label}
            required={required}
            maxLength={maxLength}
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
  }
);

RHFTextInput.displayName = "RHFTextInput";
export default RHFTextInput;
