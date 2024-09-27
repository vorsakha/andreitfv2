'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface CVRendererProps {
  url: string;
}

const CVRenderer = ({ url }: CVRendererProps) => {
  const router = useRouter();

  useEffect(() => {
    router.push(url);
  }, [router, url]);

  return null;
};

export default CVRenderer;
