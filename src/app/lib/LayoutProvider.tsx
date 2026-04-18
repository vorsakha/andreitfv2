'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@lib/queryClient';
import { SecretTerminalProvider } from '@components/SecretTerminal';

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SecretTerminalProvider>{children}</SecretTerminalProvider>
    </QueryClientProvider>
  );
};

export default LayoutProvider;
