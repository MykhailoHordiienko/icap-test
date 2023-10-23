import HomeTitle from '@/components/HomeTitle';
import LoginForm from '@/components/LoginForm';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full h-screen">
      <section className="flex justify-center items-center py-48">
        <HomeTitle />
      </section>
      <section className="w-full">
        <LoginForm />
      </section>
    </main>
  );
}
