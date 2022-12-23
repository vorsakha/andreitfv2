import { useRouter } from 'next/router';
import { useEffect } from 'react';

const RedirectFromPt = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      router.replace(router.asPath.replace('/pt', ''));
    }
  }, [router]);

  return null;
};

export default RedirectFromPt;