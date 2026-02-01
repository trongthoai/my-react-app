import { Box, Button } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface FormActionsProps {
    submitLabel?: string;
    cancelLabel?: string;
    onCancel?: () => void;
}

export const FormActions = ({
    submitLabel = "Save",
    cancelLabel = "Cancel",
    onCancel,
}: FormActionsProps) => {
    const {
        formState: { isSubmitting, isDirty },
    } = useFormContext();

    const formMode = document.querySelector('form')?.getAttribute('data-form-mode') ?? "create";

    if (formMode === "view") return null;

    return (
        <Box
            mt={3}
            display="flex"
            justifyContent="flex-end"
            gap={1}
        >
            {onCancel && (
                <Button
                    variant="outlined"
                    onClick={onCancel}
                    disabled={isSubmitting}
                >
                    {cancelLabel}
                </Button>
            )}

            <Button
                type="submit"
                variant="contained"
                disabled={!isDirty || isSubmitting}
            >
                {submitLabel}
            </Button>
        </Box>
    );
};
