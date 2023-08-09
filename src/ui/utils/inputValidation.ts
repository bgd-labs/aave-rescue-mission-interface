import { ethers } from 'ethers';

export const required = (value: never) =>
  value ? undefined : 'Required field';

export const addressValidator = (value: never) =>
  ethers.utils.isAddress(value)
    ? undefined
    : `Wrong address, please enter correct`;

export const composeValidators =
  (...validators: any) =>
  (value: never) =>
    validators.reduce(
      (error: never, validator: any) => error || validator(value),
      undefined,
    );
