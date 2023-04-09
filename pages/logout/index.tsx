import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebaseClient';
import { useRouter } from 'next/router';
import { memo, useEffect } from 'react';

function Logout() {
  const router = useRouter();

  const handleLogout = () => {
    signOut(auth)
      .then(() => router.push('/'))
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => handleLogout(), []);

  return <></>;
}
export default memo(Logout);
