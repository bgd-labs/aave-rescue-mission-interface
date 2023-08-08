import { useRequest } from 'alova';
import React, { ReactNode, useEffect } from 'react';

import { useStore } from '../../store';
import { usersDataV1 } from '../../utils/usersMarkleTrees';
import { getUsersTrees } from '../../utils/usersTreesV2V3Request';
import { RocketLoader } from './RocketLoader';

interface GetUsersDataProps {
  children: ReactNode;
}
export function GetUsersData({ children }: GetUsersDataProps) {
  const store = useStore();

  const { loading, data, error } = useRequest(getUsersTrees);

  useEffect(() => {
    store.setUsersDataLoading(loading);
    if (!loading && !error) {
      if (!Object.keys(store.usersData).length) {
        store.setUsersData({ ...usersDataV1, ...data });
      }
    }
  }, [loading, error]);

  if (loading) return <RocketLoader />;

  return children;
}
