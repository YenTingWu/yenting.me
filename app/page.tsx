import { ContactInfos } from '@components/contact-infos';
import { clsx } from 'clsx';
import { increaseView } from './db/mutations';

export default function Home() {
  if (process.env.NODE_ENV === 'production') {
    increaseView('HOME_PAGE');
  }

  return (
    <div
      className={clsx(
        'w-screen',
        'flex',
        'justify-center',
        'items-center',
        'flex-col',
        'h-full'
      )}
    >
      <main
        className={clsx(
          'flex',
          'flex-col',
          'items-center',
          'mx-auto',
          'min-h-screen',
          'h-full',
          'max-w-[760px]',
          'w-full',
          'px-5'
        )}
      >
        <article
          className={clsx(
            'w-full',
            'h-full',
            'flex',
            'flex-col',
            'justify-center',
            'items-center'
          )}
        >
          <div className="flex flex-col max-w-[500px] flex-start">
            <h2 className={clsx('sm:text-4xl', 'text-3xl', 'font-bold')}>
              Hi, I&apos;m Yen-Ting Wu
            </h2>
            <ContactInfos className="mt-2" />
          </div>
        </article>
      </main>
    </div>
  );
}
