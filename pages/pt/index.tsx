import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Spinner } from '../../src/components/ui/Spinner';

const RedirectFromPt = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      router.replace('/');
    }
  }, [router]);

  return <Spinner />;
};

export default RedirectFromPt;
