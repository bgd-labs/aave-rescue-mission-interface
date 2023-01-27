import usersMerkleTrees from './usersMerkleTrees.json';

export type UserData = {
  tokenAmount: string;
  tokenAmountInWei: string;
  proof: string[];
  index: number;
  distributionId: number;
};

export const usersData: Record<string, UserData[]> = usersMerkleTrees;
