import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Spinner } from '../../src/components/ui/Spinner';

const RedirectFromEn = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      router.replace(router.asPath.replace('/en', ''));
    }
  }, [router]);

  return <Spinner />;
};

export default RedirectFromEn;
