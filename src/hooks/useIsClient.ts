import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

const useIsClient = () => useSyncExternalStore(subscribe, () => true, () => false);

export default useIsClient;
