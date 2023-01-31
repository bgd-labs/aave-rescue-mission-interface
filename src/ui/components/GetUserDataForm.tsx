import React from 'react';
import { Field, Form } from 'react-final-form';

import { useStore } from '../../store';
import { Box } from '../primitives/Box';
import { Flex } from '../primitives/Flex';
import { Input } from '../primitives/Input';
import { Typography } from '../primitives/Typography';
import {
  addressValidator,
  composeValidators,
  required,
} from '../utils/inputValidation';
import { Button } from './Button';
import { ContentWrapper } from './ContentWrapper';
import { InputWrapper } from './InputWrapper';

export function GetUserDataForm() {
  const {
    getUserData,
    activeWallet,
    setAppView,
    setCheckedAddress,
    checkedAddress,
  } = useStore();

  const handleFormSubmit = ({ address }: { address: string }) => {
    setAppView('info');
    getUserData(address);
    setCheckedAddress(address);
  };

  return (
    <Form<{
      address: string;
    }>
      onSubmit={handleFormSubmit}
      initialValues={{ address: checkedAddress }}>
      {({ handleSubmit }) => {
        return (
          <Flex
            as="form"
            onSubmit={handleSubmit}
            css={{ width: '100%', flex: 1 }}>
            <ContentWrapper
              topBlock={
                <Typography variant="h1">Enter Wallet Address</Typography>
              }
              bottomBlock={<Button type="submit">Check</Button>}>
              <Field
                name="address"
                validate={composeValidators(required, addressValidator)}>
                {(props) => (
                  <>
                    <InputWrapper
                      onCrossClick={
                        props.input.value !== ''
                          ? () => {
                              props.input.onChange('');
                              setCheckedAddress('');
                            }
                          : undefined
                      }
                      isError={props.meta.error && props.meta.touched}
                      error={props.meta.error}>
                      <Input
                        type="text"
                        placeholder="0x0..."
                        {...props.input}
                        onChange={(e) => {
                          props.input.onChange(e);
                          setCheckedAddress(e.target.value);
                        }}
                      />
                    </InputWrapper>

                    <Box
                      css={{
                        width: '100%',
                        textAlign: 'center',
                        opacity:
                          activeWallet &&
                          props.input.value !== activeWallet.accounts[0]
                            ? 1
                            : 0,
                        zIndex:
                          activeWallet &&
                          props.input.value !== activeWallet.accounts[0]
                            ? 1
                            : -1,
                        mt: 15,
                      }}>
                      <Typography
                        as="button"
                        type="button"
                        css={{
                          color: '$textSecondary',
                          textDecoration: 'underline',
                          transition: 'all 0.2s ease',
                          hover: { color: '$text' },
                        }}
                        onClick={() =>
                          props.input.onChange(activeWallet?.accounts[0] || '')
                        }>
                        use address from wallet
                      </Typography>
                    </Box>
                  </>
                )}
              </Field>
            </ContentWrapper>
          </Flex>
        );
      }}
    </Form>
  );
}
