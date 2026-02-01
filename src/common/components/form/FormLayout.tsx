import { Box, Paper } from "@mui/material";
import type { ReactNode } from "react";
import { FormProvider,  type FieldValues, type UseFormReturn } from "react-hook-form";

interface FormLayoutProps<T extends FieldValues> {
    methods: UseFormReturn<T>;
    children: ReactNode;
    onSubmit: (data: T) => void;
}

export function FormLayout<T extends FieldValues>({ methods, children, onSubmit }: FormLayoutProps<T>) {
  return (
    <FormProvider {...methods}>
        <Paper elevation={1} sx={{ p: 3 }}>
            <Box display="flex" flexDirection="column" gap={3} component="form" onSubmit={methods.handleSubmit(onSubmit)} noValidate>
                {children}
            </Box>
        </Paper>
    </FormProvider>
  );
};
