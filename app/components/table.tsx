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
    <div className={clsx('w-full', 'overflow-auto', 'table-container')}>
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
          {newRows.map((row, rowIndex) => {
            return (
              <tr key={JSON.stringify(row)}>
                {row.map(({ content, isHeader }, itemIndex) => {
                  const key = `${colTitles[itemIndex - 1]}_${content}_${
                    rowTitles?.[rowIndex] ?? ''
                  }`;

                  return isHeader ? (
                    <th
                      className={clsx('px-2', 'max-w-[330px]', 'w-[330px]')}
                      key={key}
                    >
                      {content}
                    </th>
                  ) : (
                    <td key={key} className={clsx('py-4', 'px-3')}>
                      {content}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
