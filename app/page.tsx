import LoginForm from '@/components/LoginForm';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full h-screen pt-48">
      <section className="w-full">
        <LoginForm />
      </section>
    </main>
  );
}
