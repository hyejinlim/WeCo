import Router from 'next/router';
import { memo } from 'react';

type Props = {
  routeName: string;
  text: string;
};

function Menu({ routeName, text }: Props) {
  return (
    <button
      className="text-xl font-semibold"
      onClick={() => Router.push(`${routeName}`)}
    >
      {text}
    </button>
  );
}

export default memo(Menu);
