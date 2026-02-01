import { CommonDialog } from './CommonDialog';

interface AlertDialogProps {
  open: boolean;
  title?: string;
  message: string;
  onClose: () => void;
}

export const AlertDialog = ({
  open,
  title = 'Alert',
  message,
}: AlertDialogProps) => {
  return (
    <CommonDialog
      open={open}
      title={title}
      children={message}
      confirmText="OK"
      hideCancelButton
    />
  );
};
