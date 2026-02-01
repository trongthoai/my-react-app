import { forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { SelectInputProps } from "./SelectInput";
import SelectInput from "./SelectInput";

export type RHFSelectInputProps = SelectInputProps & {
  name: string;
};

const RHFSelectInput = forwardRef<HTMLInputElement, RHFSelectInputProps>(
  ({ name, ...props }, ref) => {
    const methods = useFormContext();

    if (!methods) {
      throw new Error("RHFSelectInput must be used inside FormProvider");
    }

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
          />
        )}
      />
    );
  }
);

RHFSelectInput.displayName = "RHFSelectInput";
export default RHFSelectInput;
