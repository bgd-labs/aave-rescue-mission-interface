// TODO: need fix styles

import { ethers } from 'ethers';
import React from 'react';
import { Field, Form } from 'react-final-form';

import { useStore } from '../../store';
import { Box } from '../primitives/Box';
import { Flex } from '../primitives/Flex';
import { Input } from '../primitives/Input';
import { Typography } from '../primitives/Typography';
import { Button } from './Button';

export function GetUserDataForm() {
  const { getUserData, activeWallet, setAppView } = useStore();

  const handleFormSubmit = ({ address }: { address: string }) => {
    setAppView('info');
    getUserData(address);
  };

  const required = (value: any) => (value ? undefined : 'Required field');

  const addressValidator = (value: any) =>
    ethers.utils.isAddress(value)
      ? undefined
      : `Wrong address, please enter correct`;

  const composeValidators =
    (...validators: any) =>
    (value: any) =>
      validators.reduce(
        (error: any, validator: any) => error || validator(value),
        undefined,
      );

  return (
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
                <Box>
                  <Input type="text" placeholder="0x0..." {...props.input} />
                  {props.meta.error && props.meta.touched && (
                    <Typography
                      variant="descriptor"
                      css={{ color: '$error', mt: 2 }}>
                      {props.meta.error}
                    </Typography>
                  )}
                </Box>
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
              {activeWallet && (
                <>
                  <Typography>or</Typography>
                  <Button
                    type="button"
                    onClick={() =>
                      handleFormSubmit({ address: activeWallet.accounts[0] })
                    }>
                    use wallet address
                  </Button>
                </>
              )}
            </Flex>
          </Flex>
        );
      }}
    </Form>
  );
}
