import Router from 'next/router';

type props = {
  route: string;
  text: string;
};
export function HeaderRouter({ route, text }: props) {
  return (
    <button
      className="text-xl font-semibold"
      onClick={() => Router.push(`${route}`)}
    >
      {text}
    </button>
  );
}
