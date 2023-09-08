import { Footer } from '@components/footer';

export default function Home() {
  return (
    <div className="w-screen flex justify-center items-center">
      <main className="flex justify-center items-center flex-col mx-auto min-h-screen px-3">
        <article className="w-full">
          <h2 className="sm:text-4xl text-3xl font-bold">
            Hi, I&apos;m Yen-Ting Wu
          </h2>
          <p className="sm:text-base text-sm mt-[.875rem]">
            A inquiring learner and a software engineer
          </p>
          <p className="sm:text-base text-sm">
            formal fullstack developer of{' '}
            <a
              href="https://insgreat.com"
              className="underline"
              target="_blank"
            >
              Insgreat
            </a>
          </p>
        </article>
        <Footer />
      </main>
    </div>
  );
}
