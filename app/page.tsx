import { Header } from '@components/header';
import { Footer } from '@components/footer';

export default function Home() {
  return (
    <div className="w-screen">
      <main className="flex flex-col max-w-[800px] mx-auto min-h-screen">
        <Header />
        <article className="w-full pt-[6rem]">
          <h2 className="text-4xl font-bold">Hi, I&apos;m Yen-Ting Wu</h2>
          <p className="text-xl mt-[1rem]">
            A inquiring learner and a software engineer
          </p>
        </article>
        <Footer />
      </main>
    </div>
  );
}
