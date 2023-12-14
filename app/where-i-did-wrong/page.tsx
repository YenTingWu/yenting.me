import NextImage from 'next/image';
import { Header } from '@components/header';
import { clsx } from 'clsx';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My portfolio of projects',
};

export default function WhereIDiDWrong() {
  return (
    <div
      className={clsx(
        'w-screen',
        'flex',
        'justify-center',
        'items-center',
        'flex-col',
        'scroll-scroll'
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
        <article className={clsx('w-full', 'mt-[5vh]')}>
          <h2 className={clsx('sm:text-5xl', 'text-5xl', 'font-bold')}>
            Where I did wrong
          </h2>
          <div
            className={clsx(
              'mt-8',
              'mb-[2rem]',
              '[&_p]:mt-[1.2rem]',
              '[&_p]:text-lg',
              '[&_a]:underline',
              'mb-[10rem]'
            )}
          >
            <NextImage
              className={clsx('mb-10')}
              src="/learn-from-mistakes.png"
              priority={false}
              width={680}
              height={480}
              alt="Picture of learning from mistakes"
            />
            <p>
              When I was a student, I always learned from textbooks and
              practiced exercises inside. To be honest, I did pretty well and
              always got a good grade, but I couldn&apos;t understand why I
              should learn those things and how I can apply them in real life. I
              just learned them for the sake of getting a good grade.
            </p>
            <p>
              When the grade went worst, I felt like I was a loser because the
              only thing I cared was the grade. I didn&apos;t care about the
              knowledge and where I could learn from mistakes.
            </p>
            <p>
              From my perspective, this is a down-to-top mindset. The education
              forced us not to get into the society or start to do anything
              before we learned enough from theories, which are what they think
              we are supposed to learn. Just like building a house, we had to do
              the foundation and mix concrete first. Then we could start to
              build the house. But the problem is a human being is not a house.
              We should not be engineered.
            </p>
            <p>
              Not until I started to do outdoor activities(since 2017) did I
              learned the mindset was so wrong. When I went outside to do
              mountain climbing, river tracing, or pack-rafting, I found players
              did not have to learn a lot of theories or knowledge to start
              those activities. Their mindset was top-to-down instead of
              down-to-top.
            </p>
            <p>
              The mindset is so simple. Always start from an intention. Where
              I&apos;d like to go? What I&apos;d like to play? What I&apos;d
              like to see? Who I&apos;d like to talk to? Then they will start to
              think what to learn or prepare next. After all are done, they just
              tried it out. If anything went wrong, they did not blame
              themselves. They just learned from mistakes and kept trying again
              until they succeeded. That really shocked me. I just did not
              understand how they can embrace failures so gracefully. So I asked
              one of them: &quot;Why you guys can be so persistent and patient
              to a goal?&quot; He acted like hearing a non-sense question and
              said: &quot;Why not?&quot;
            </p>
            <p>
              That&apos;s I learned from those weird but great people in the
              nature. So I decided to start a project called{' '}
              <a
                href="https://verbena-patient-a60.notion.site/Where-I-did-wrong-45631cc8f3ad4bd28a47e8670a6ad2b9"
                target="_blank"
              >
                where I did wrong
              </a>
              . I record my mistakes and failures of my software
              implementations(for now) in this project, no matter how silly or
              non-sense they are. I just want to learn from mistakes and try to
              be a better person.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
