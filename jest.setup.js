// jest.setup.js
import '@testing-library/jest-dom/extend-expect';

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    ALCHEMY_KEY: 'whatever-you-want-here',
    DEFAULT_L2_RPC: 'sadsds',
  },
}));

var localStorageMock = (function () {
  var store = {};
  return {
    getItem: function (key) {
      return store[key];
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
    removeItem: function (key) {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

jest.mock('./src/web3/store/web3Slice.ts');
jest.mock('./src/web3/services/l2VotingDataService.ts');
