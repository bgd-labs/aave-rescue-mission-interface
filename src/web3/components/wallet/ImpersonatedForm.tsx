import { Field, Form } from 'react-final-form';

import { useStore } from '../../../store';
import { BackButton, Button, Flex, Input } from '../../../ui';
import { InputWrapper } from '../../../ui/components/InputWrapper';
import {
  addressValidator,
  composeValidators,
  required,
} from '../../../ui/utils/inputValidation';

interface ImpersonatedFormProps {
  closeClick: (value: boolean) => void;
}

export function ImpersonatedForm({ closeClick }: ImpersonatedFormProps) {
  const setImpersonatedAddress = useStore(
    (state) => state.setImpersonatedAddress,
  );
  const connectWallet = useStore((state) => state.connectWallet);

  const handleFormSubmit = async ({
    impersonatedAddress,
  }: {
    impersonatedAddress: string;
  }) => {
    setImpersonatedAddress(impersonatedAddress);
    await connectWallet('Impersonated');
  };

  return (
    <Flex css={{ width: '100%', flex: 1, flexDirection: 'column' }}>
      <BackButton onClick={() => closeClick(false)} css={{ mb: 40 }} />
      <Flex css={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Form<{ impersonatedAddress: string }> onSubmit={handleFormSubmit}>
          {({ handleSubmit, values }) => (
            <Flex
              as="form"
              onSubmit={handleSubmit}
              css={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}>
              <Field
                name="impersonatedAddress"
                validate={composeValidators(required, addressValidator)}>
                {(props) => (
                  <InputWrapper
                    isError={props.meta.error && props.meta.touched}
                    error={props.meta.error}>
                    <Input type="text" placeholder="0x0..." {...props.input} />
                  </InputWrapper>
                )}
              </Field>

              <Button type="submit" css={{ mt: 24 }}>
                Connect
              </Button>
            </Flex>
          )}
        </Form>
      </Flex>
    </Flex>
  );
}
