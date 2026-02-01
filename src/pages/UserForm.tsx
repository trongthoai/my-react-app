import { type FieldValues, type UseFormReturn } from "react-hook-form";
import { FormActions, FormGrid, FormLayout, FormSection } from "../common/components/form";
import RHFTextInput from "../common/components/inputs/RHFTextInput";
import RHFSelectInput from "../common/components/inputs/RHFSelectInput";
import RHFDatePickerInput from "../common/components/inputs/RHFDatePickerInput";

export type UserFormValues = {
  name: string;
  status: "active" | "inactive";
  dob: Date | null;
  code: string;
};

interface UsersFormProps<T extends FieldValues> {
  mode?: "create" | "edit" | "view";
  methods: UseFormReturn<T>;
  onSubmit: (data: UserFormValues) => void;
  onCancel?: () => void;
}

export function UsersForm<T extends UserFormValues>({
  mode = "create",
  methods,
  onSubmit,
  onCancel,
}: UsersFormProps<T>) {
  return (
    <FormLayout
      methods={methods}
      mode={mode}
      onSubmit={onSubmit}
      noPaper
    >
      <FormSection title="Basic Information">
        <FormGrid columns={2}>
          <RHFTextInput
            name="name"
            label="Name"
            required
            maxLength={50}
          />

          <RHFSelectInput
            name="status"
            label="Status"
            required
            options={[
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
            ]}
          />

          <RHFDatePickerInput
            name="dob"
            label="Date of birth" />
        </FormGrid>
      </FormSection>

      <FormSection title="Additional Information">
        <FormGrid columns={1}>
          <RHFTextInput
            name="code"
            label="Code"
            maxLength={20}
          />
        </FormGrid>
      </FormSection>

      {mode !== "view" && <FormActions onCancel={onCancel} />}
    </FormLayout>
  );
}
