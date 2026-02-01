
import { CommonDialog } from './CommonDialog';
import type { ReactNode } from 'react';

interface FormDialogProps {
  open: boolean;
  title: string;
  children: ReactNode;
  onSubmit: () => void;
  onCancel: () => void;
  submitText?: string;
  maxWidth?: 'sm' | 'md' | 'lg';
}

export const FormDialog = ({
  open,
  title,
  children,
  onCancel,
  submitText = 'Save',
  maxWidth = 'md',
}: FormDialogProps) => {
  return (
    <CommonDialog
      open={open}
      title={title}
      children={children}
      confirmText={submitText}
      onCancel={onCancel}
      maxWidth={maxWidth}
    />
  );
};
