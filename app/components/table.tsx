import { clsx } from 'clsx';

type TableCeilType = {
  content: string;
  isHeader: boolean;
};

interface TableProps {
  colTitles: string[];
  rowTitles?: string[];
  rows: string[][];
}

export const Table = ({ colTitles, rowTitles, rows }: TableProps) => {
  const newColTitles: TableCeilType[] = (
    rowTitles ? [''].concat(colTitles) : colTitles
  ).map((title) => ({ content: title, isHeader: true }));

  const newRows = rowTitles
    ? rows.map((row, i) => {
        const title = { content: rowTitles[i], isHeader: true };
        const newRow = row.map((content) => ({ content, isHeader: false }));

        return [title, ...newRow];
      })
    : rows.map((row) =>
        row.map((cell) => ({ content: cell, isHeader: false }))
      );

  return (
    <table
      className={clsx(
        'w-full',
        'max-w-full',
        'min-w-0',
        'table-auto',
        'w-full',
        'text-sm',
        '[&_th]:bg-slate-600',
        '[&_th]:text-white',
        '[&_tr:not(:first-child)]:border-t-[1px]',
        '[&_tr:not(:first-child)]:border-gray-200',
        'rounded-lg',
        'overflow-hidden'
      )}
    >
      <thead>
        <tr>
          {newColTitles.map(({ isHeader, content }) => (
            <th
              key={`${content}_${isHeader}`}
              className={clsx('text-left', 'py-4', 'px-3')}
            >
              {content}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={clsx('bg-slate-100')}>
        {newRows.map((row, i) => {
          return (
            <tr key={JSON.stringify(row)}>
              {row.map(({ content, isHeader }) =>
                isHeader ? (
                  <th key={`${content}_${isHeader}`}>{content}</th>
                ) : (
                  <td
                    key={`${content}_${isHeader}`}
                    className={clsx('py-4', 'px-3')}
                  >
                    {content}
                  </td>
                )
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
