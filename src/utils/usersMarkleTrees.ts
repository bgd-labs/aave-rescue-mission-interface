import usersMerkleTrees from './usersMerkleTrees.json';

export type UserData = {
  tokenAmount: string;
  tokenAmountInWei: string;
  proof: string[];
  index: number;
  distributionId: number;
  chainId: number;
};

export const usersDataV1: Record<string, UserData[]> = Object.entries(
  usersMerkleTrees,
).reduce(
  (a, v) => ({
    ...a,
    [v[0]]: v[1].map((d) => {
      return { ...d, chainId: 1 };
    }),
  }),
  {},
);
