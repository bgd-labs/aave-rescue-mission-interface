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
import { InputWrapper } from './InputWrapper';

export function GetUserDataForm() {
  const { getUserData, activeWallet, setAppView, setCheckedAddress } =
    useStore();

  const handleFormSubmit = ({ address }: { address: string }) => {
    setAppView('info');
    getUserData(address);
    setCheckedAddress(address);
  };

  return (
    <Box css={{ width: '100%' }}>
      <Typography variant="h1" css={{ mb: 44, textAlign: 'center' }}>
        Enter Wallet Address
      </Typography>

      <Form<{
        address: string;
      }>
        onSubmit={handleFormSubmit}>
        {({ handleSubmit }) => {
          return (
            <Flex
              as="form"
              onSubmit={handleSubmit}
              css={{
                width: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Field
                name="address"
                validate={composeValidators(required, addressValidator)}>
                {(props) => (
                  <InputWrapper
                    isError={props.meta.error && props.meta.touched}
                    error={props.meta.error}>
                    <Input type="text" placeholder="0x0..." {...props.input} />
                  </InputWrapper>
                )}
              </Field>

              <Flex
                css={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  mt: 40,
                }}>
                <Button type="submit">Check</Button>
                <Box
                  css={{
                    width: '100%',
                    textAlign: 'center',
                    opacity: activeWallet ? 1 : 0,
                    zIndex: activeWallet ? 1 : -1,
                  }}>
                  <Typography
                    variant="descriptor"
                    css={{ color: '$textSecondary', my: 10 }}>
                    or
                  </Typography>
                  <Typography
                    as="button"
                    css={{
                      color: '$textSecondary',
                      textDecoration: 'underline',
                      transition: 'all 0.2s ease',
                      hover: { color: '$text' },
                    }}
                    onClick={() =>
                      handleFormSubmit({
                        address: activeWallet?.accounts[0] || '',
                      })
                    }>
                    check wallet address
                  </Typography>
                </Box>
              </Flex>
            </Flex>
          );
        }}
      </Form>
    </Box>
  );
}
