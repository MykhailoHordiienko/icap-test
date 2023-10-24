'use client';

import { useAppSelector } from '@/hooks/reduxHooks';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {};

const Table = (props: Props) => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const username = useAppSelector(state => state.auth.username);
  console.log(username);

  if (!isLoggedIn) {
    redirect('/');
  }
  return <div>Table</div>;
};

export default Table;
