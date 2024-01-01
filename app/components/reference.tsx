import { clsx } from 'clsx';

interface ReferenceProps {
  resources: string[];
}

export const Reference = ({ resources }: ReferenceProps) => (
  <div className={clsx('mt-20')}>
    <h3>References</h3>
    <ul>
      {resources.map((r) => (
        <li key={`${r}`}>
          <a className={clsx('break-all')} href={r} target="_blank">
            {r}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
