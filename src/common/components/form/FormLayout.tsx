import { Box, Paper } from "@mui/material";
import type { ReactNode } from "react";
import {
  FormProvider,
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form";

export type FormMode = "create" | "edit" | "view";

export interface FormLayoutProps<T extends FieldValues> {
  methods: UseFormReturn<T>;
  children: ReactNode;
  onSubmit: (data: T) => void;
  mode?: FormMode;
  noPaper?: boolean;
}

export function FormLayout<T extends FieldValues>({
  methods,
  children,
  onSubmit,
  mode = "create",
  noPaper = false,
}: FormLayoutProps<T>) {
  const content = (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
      component="form"
      onSubmit={methods.handleSubmit(onSubmit)}
      noValidate
      data-form-mode={mode}
    >
      {children}
    </Box>
  );

  return (
    <FormProvider {...methods}>
      {noPaper ? (
        content
      ) : (
        <Paper elevation={1} sx={{ p: 3 }}>
          {content}
        </Paper>
      )}
    </FormProvider>
  );
}
