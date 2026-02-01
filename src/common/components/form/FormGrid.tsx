import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface FormGridProps {
    children: ReactNode;
    columns?: number; // số cột (mặc định 2)
}

export const FormGrid = ({ children, columns = 1 }: FormGridProps) => {

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    md: `repeat(${columns}, minmax(0, 1fr))`,
                },
                gap: 2,
                width: '100%',
            }}>
            {Array.isArray(children)
                ? children.map((child, index) => (
                    <Box key={index} sx={{ gridColumn: 'span 1' }}>
                        {child}
                    </Box>
                ))
                : children}
        </Box>
    );
};
