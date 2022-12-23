import { useRouter } from 'next/router';
import { useEffect } from 'react';

const RedirectFromEn = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      router.replace('/');
    }
  }, [router]);

  return null;
};

export default RedirectFromEn;
