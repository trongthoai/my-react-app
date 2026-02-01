import RHFTextInput from '../common/components/inputs/RHFTextInput';
import RHFSelectInput from '../common/components/inputs/RHFSelectInput';
import { FormActions, FormGrid, FormLayout, FormSection } from '../common/components/form';
import { useForm } from 'react-hook-form';
import { CommonDialog, useDialog } from '../common/components/dialog';
import { Button, Stack } from '@mui/material';
import { useState } from 'react';
import { UsersForm, type UserFormValues } from './UserForm';

type FormValues = {
  name: string;
  status: string;
  code?: string;
};
const Dashboard = () => {
  const [openUserDialog, setOpenUserDialog] = useState(false);
  const methods = useForm<UserFormValues>({
    defaultValues: {
      name: "",
      status: "active",
      dob: null,
      code: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  
  const dialog = useDialog();

  return (
    <FormLayout methods={methods} onSubmit={onSubmit} mode="create">
      <FormSection title="Basic Information">
        <FormGrid columns={2}>
          <RHFTextInput 
            name="name" 
            label="Name"
            required
            />
          <RHFSelectInput
            name="status"
            label="Status"
            options={[
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
            ]}
          />
        </FormGrid>
      </FormSection>

      <FormSection title="Additional Information">
        <FormGrid>
          <RHFTextInput name="code" label="Code" />
        </FormGrid>
      </FormSection>

      <FormActions />

      <Button color="error" onClick={dialog.show}>
        Delete
      </Button>

      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          onClick={() => setOpenUserDialog(true)}
        >
          Create User
        </Button>
      </Stack>

      <CommonDialog
        open={openUserDialog}
        title="Create User"
        onCancel={() => setOpenUserDialog(false)}
        hideCancelButton
      >
        <UsersForm
          methods={methods}
          onSubmit={() => {
            console.log('submit user');
            setOpenUserDialog(false);
          }}
          onCancel={() => setOpenUserDialog(false)}
        />
      </CommonDialog>
    </FormLayout>
  );
};

export default Dashboard;