import * as React from 'react';

interface BilingualTextProps {
  textList: {
    main: string;
    sub: string;
  }[];
}

export const BilingualText = ({ textList }: BilingualTextProps) => {
  return (
    <ruby>
      {textList.map((item) => (
        <React.Fragment key={item.main + item.sub}>
          {item.main}
          <rp>(</rp>
          <rt>{item.sub}</rt>
          <rp>)</rp>
        </React.Fragment>
      ))}
    </ruby>
  );
};
