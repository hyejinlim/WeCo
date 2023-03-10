import Image from 'next/image';
import Router from 'next/router';
import { memo } from 'react';
import Menu from './Menu';

function Header() {
  return (
    <nav className="m-auto max-w-7xl flex justify-between items-center h-20 py-0 px-2.5">
      <Image
        src="/img/weco.png"
        width="150"
        height="150"
        onClick={() => Router.push('/')}
      />
      <div className="flex gap-8 items-center">
        <Menu routeName="post" text="새글쓰기" />
        <Menu routeName="login" text="로그인" modal />
        <Menu routeName="mypage" text="MY" />
      </div>
    </nav>
  );
}

export default memo(Header);
