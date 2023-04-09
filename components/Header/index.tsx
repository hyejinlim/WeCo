import { useAuth } from 'context/authProvider';
import Image from 'next/image';
import Router from 'next/router';
import { memo } from 'react';
import Menu from './Menu';

function Header() {
  const user = useAuth();
  return (
    <nav className="m-auto max-w-7xl flex justify-between items-center h-20 py-0 px-2.5">
      <div className="cursor-pointer">
        <Image
          src="/img/weco.png"
          width="150"
          height="150"
          onClick={() => Router.push('/')}
        />
      </div>
      <div className="flex gap-8 items-center">
        <Menu
          routeName={!!user ? '/post' : 'login'}
          text="새글쓰기"
          modal={!user}
        />
        {!!user ? (
          <Menu routeName="/logout" text="로그아웃" />
        ) : (
          <Menu routeName="login" text="로그인" modal />
        )}
        <Menu
          routeName={!!user ? '/mypage' : 'login'}
          text="MY"
          modal={!user}
        />
      </div>
    </nav>
  );
}

export default memo(Header);
