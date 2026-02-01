import { forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { TextInputProps } from "./TextInput";
import TextInput from "./TextInput";

export type RHFTextInputProps = TextInputProps & {
  name: string;
  label: string;
  required?: boolean;
  maxLength?: number;
};

const RHFTextInput = forwardRef<HTMLInputElement, RHFTextInputProps>(
  ({ name, label, required, maxLength, ...props }, ref) => {
    const methods = useFormContext();

    if (!methods) {
      throw new Error("RHFTextInput must be used inside FormProvider");
    }

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
          />
        )}
      />
    );
  }
);

RHFTextInput.displayName = "RHFTextInput";
export default RHFTextInput;
