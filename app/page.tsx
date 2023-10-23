import LoginForm from '@/components/LoginForm';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full h-screen pt-48 bg-green-300">
      <section className="w-full bg-green-500">
        <LoginForm />
      </section>
    </main>
  );
}
