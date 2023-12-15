import { Header } from '@components/header';
import { Project } from '@components/project';
import { clsx } from 'clsx';
import type { Metadata } from 'next';

type Project = {
  title: string;
  description: string;
  link: string;
};

const PROJECTS: { year: number; projects: Project[] }[] = [
  {
    year: 2023,
    projects: [
      {
        title: 'reeeeader',
        description: 'Chrome extension for readers',
        link: 'https://github.com/YenTingWu/reeeeader',
      },
      {
        title: 'chak-timmy',
        description: 'A date picker and calendar components.',
        link: 'https://646b21717bd2cb2ea0e03367-mxyxrkpztg.chromatic.com/?path=/docs/components-single-date-picker--docs',
      },
    ],
  },
  {
    year: 2022,
    projects: [
      {
        title: '420',
        description: 'Canvas playground',
        link: 'https://420.yenting.me/',
      },
    ],
  },
  {
    year: 2021,
    projects: [
      {
        title: 'Procrastination',
        description: 'An app that avoid you procrastinate',
        link: 'https://github.com/YenTingWu/procrastination',
      },
    ],
  },
  {
    year: 2020,
    projects: [
      {
        title: 'First Year',
        description: 'All my first year projects',
        link: 'https://github.com/YenTingWu/first_year',
      },
    ],
  },
];

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My portfolio of projects',
};

export default function Posts() {
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
        <div className={clsx('w-full', 'mt-5')}>
          <h1 className={clsx('text-4xl', 'font-bold')}>Projects</h1>
        </div>

        <ul className={clsx('w-full', 'mt-12', 'mb-12')}>
          {PROJECTS.map(({ year, projects }) => {
            return (
              <div
                key={year}
                className={clsx('w-full', '[&:not(:first-child)]:mt-9')}
              >
                <div>
                  <h2 className={clsx('text-2xl', 'font-bold')}>{year}</h2>
                  <div
                    className={clsx('h-[3px]', 'w-[60px]', 'bg-stone-500')}
                  />
                </div>
                <ul className={clsx('mt-10', 'w-full')}>
                  {projects.map((project) => (
                    <Project key={project.title} {...project} />
                  ))}
                </ul>
              </div>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
