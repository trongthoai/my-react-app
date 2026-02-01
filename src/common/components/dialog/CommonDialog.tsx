import { Dialog, DialogContent, DialogTitle } from "@mui/material";

export interface CommonDialogProps {
  open: boolean;
  title?: string;
  children?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  hideCancelButton?: boolean;
  onCancel?: () => void;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const CommonDialog = ({
  open,
  title,
  children,
  onCancel,
  maxWidth = 'sm',
}: CommonDialogProps) => {
  return (
    <Dialog open={open} onClose={onCancel} maxWidth={maxWidth} fullWidth>
      {title && <DialogTitle>{title}</DialogTitle>}

      <DialogContent dividers>
        {children}
      </DialogContent>
    </Dialog>
  );
};