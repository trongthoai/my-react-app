import RHFTextInput from '../common/components/inputs/RHFTextInput';
import RHFSelectInput from '../common/components/inputs/RHFSelectInput';
import { FormActions, FormGrid, FormLayout, FormSection } from '../common/components/form';
import { useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  status: string;
  code?: string;
};
const Dashboard = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      name: "",
      status: "",
      code: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <FormLayout methods={methods} onSubmit={onSubmit}>
      <FormSection title="Basic Information">
        <FormGrid columns={2}>
          <RHFTextInput name="name" label="Name" required />
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
    </FormLayout>
  );
};

export default Dashboard;