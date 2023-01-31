import { ethers } from 'ethers';

export const required = (value: any) => (value ? undefined : 'Required field');

export const addressValidator = (value: any) =>
  ethers.utils.isAddress(value)
    ? undefined
    : `Wrong address, please enter correct`;

export const composeValidators =
  (...validators: any) =>
  (value: any) =>
    validators.reduce(
      (error: any, validator: any) => error || validator(value),
      undefined,
    );
