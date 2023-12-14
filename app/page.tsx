import Link from 'next/link';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { clsx } from 'clsx';

export default function Home() {
  return (
    <div
      className={clsx(
        'w-screen',
        'flex',
        'justify-center',
        'items-center',
        'flex-col'
      )}
    >
      <main
        className={clsx(
          'flex',
          'items-center',
          'flex-col',
          'mx-auto',
          'min-h-screen',
          'max-w-[760px]',
          'w-full',
          'px-5'
        )}
      >
        <Header />
        <article className={clsx('w-full', 'mt-[16vh]')}>
          <h2 className={clsx('sm:text-5xl', 'text-5xl', 'font-bold')}>
            Hi, I&apos;m Yen-Ting Wu
          </h2>
          <div
            className={clsx(
              'mt-[3rem]',
              'mb-[2rem]',
              '[&_p]:mt-[.5rem]',
              '[&_p]:text-lg',
              '[&_a]:underline'
            )}
          >
            <p>A inquiring learner and a software engineer.</p>
            <p>
              I built small <Link href="/projects">side projects</Link> that are
              either things I need but can&apos;t find somewhere else, or I was
              trying to compose what I learned together into a project.
            </p>
            <p>
              And also{' '}
              <a
                href="https://verbena-patient-a60.notion.site/Where-I-did-wrong-45631cc8f3ad4bd28a47e8670a6ad2b9"
                target="_blank"
              >
                where I did wrong
              </a>{' '}
              is the place reminding me of the failures and mistakes I made.{' '}
              <Link href="/where-i-did-wrong">Here</Link> is the reason I
              started this project.
            </p>
            <p>
              Currently learning algorithms with a slow pace from the course{' '}
              <a href="https://www.algorithmsilluminated.org/" target="_blank">
                Algorithms Illuminated
              </a>
              . Check out my note on{' '}
              <a
                href="https://app.heptabase.com/w/f1dac5f931087ce6c3f53244d3daf79fcfbe470542ca8002789d63bb73e7d54b?id=3eede30d-f134-4a26-b34f-9a98fd6c6985"
                target="_blank"
              >
                heptabase
              </a>{' '}
              and{' '}
              <a
                href="https://github.com/YenTingWu/algorithms-illuminated"
                target="_blank"
              >
                github
              </a>
              .
            </p>
          </div>
        </article>
        <Footer />
      </main>
    </div>
  );
}
