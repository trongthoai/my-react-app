import { Box, Divider, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface FormSectionProps {
  title?: string;
  children: ReactNode;
}

export const FormSection = ({ title, children }: FormSectionProps) => {
  return (
    <Box>
      {title && (
        <>
          <Typography variant="h6" fontWeight={600} mb={1}>
            {title}
          </Typography>
          <Divider sx={{ mb: 2 }} />
        </>
      )}

      <Box display="flex" flexDirection="column" gap={2}>
        {children}
      </Box>
    </Box>
  );
};
