'use client';
import HomeTitle from '@/components/HomeTitle';
import LoginForm from '@/components/LoginForm';
import { useAppSelector } from '@/hooks/reduxHooks';
import { redirect } from 'next/navigation';

export default function Home() {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  if (isLoggedIn) {
    redirect('/table');
  }

  return (
    <>
      <section className="flex justify-center items-center py-48">
        <HomeTitle />
      </section>
      <section className="w-full">
        <LoginForm />
      </section>
    </>
  );
}
