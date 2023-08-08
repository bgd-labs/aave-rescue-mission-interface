import { createAlova } from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import ReactHook from 'alova/react';

import { UserData } from './usersMarkleTrees';

const alovaInstance = createAlova({
  baseURL:
    'https://raw.githubusercontent.com/bgd-labs/rescue-mission-phase-2-3/main/js-scripts/maps',
  statesHook: ReactHook,
  requestAdapter: GlobalFetch(),
  responded: {
    onSuccess: async (response) => {
      const data = await response.json();
      return !!data ? data : undefined;
    },
  },
});

export const getUsersTrees = alovaInstance.Get<Record<string, UserData[]>>(
  '/usersMerkleTrees.json',
);
