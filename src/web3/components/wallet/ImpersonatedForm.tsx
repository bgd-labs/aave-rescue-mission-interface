// TODO: need fix styles

import React from 'react';
import { Field, Form } from 'react-final-form';

import { useStore } from '../../../store';
import { BackButton, Button, Flex, Input } from '../../../ui';

interface ImpersonatedFormProps {
  closeClick: (value: boolean) => void;
}

export function ImpersonatedForm({ closeClick }: ImpersonatedFormProps) {
  const impersonatedAddress = useStore((state) => state._impersonatedAddress);
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
      <BackButton onClick={() => closeClick(false)} css={{ mt: 40 }} />
      <Flex css={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Form<{ impersonatedAddress: string }>
          onSubmit={handleFormSubmit}
          initialValues={{
            impersonatedAddress: impersonatedAddress,
          }}>
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
              <Field name="impersonatedAddress">
                {(props) => (
                  <Input
                    type="text"
                    placeholder="Account address"
                    {...props.input}
                  />
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
