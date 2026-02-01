import { CommonDialog } from "./CommonDialog";

interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDialog = ({
  open,
  title = 'Confirm',
  message,
  onCancel,
}: ConfirmDialogProps) => {
  return (
    <CommonDialog
      open={open}
      title={title}
      children={message}
      confirmText="Yes"
      cancelText="No"
      onCancel={onCancel}
    />
  );
};
