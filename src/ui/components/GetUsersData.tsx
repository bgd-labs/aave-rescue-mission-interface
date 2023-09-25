import { ReactNode, useEffect } from 'react';

import { useStore } from '../../store';
import { usersDataV1 } from '../../utils/usersMarkleTrees';
import { usersDataV2V3 } from '../../utils/usersMarkleTreesV2V3';

interface GetUsersDataProps {
  children: ReactNode;
}
export function GetUsersData({ children }: GetUsersDataProps) {
  const store = useStore();

  useEffect(() => {
    if (!Object.keys(store.usersData).length) {
      store.setUsersData({ ...usersDataV1, ...usersDataV2V3 });
    }
  }, []);

  return children;
}
