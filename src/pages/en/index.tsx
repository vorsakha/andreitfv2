import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Spinner } from '@ui/Spinner';

const RedirectFromEn = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      router.replace('/');
    }
  }, [router]);

  return <Spinner />;
};

export default RedirectFromEn;
