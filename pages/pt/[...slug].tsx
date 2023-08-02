import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Spinner } from '@ui/Spinner';

const RedirectFromPt = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      router.replace(router.asPath.replace('/pt', ''));
    }
  }, [router]);

  return <Spinner />;
};

export default RedirectFromPt;
