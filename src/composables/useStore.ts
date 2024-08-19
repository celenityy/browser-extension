import { Ref } from 'vue';

import type { HistoryEntriesMap } from './useProxyHistory/HistoryEntries.types';
import { Country } from './useListProxies';

import { ProxyDetails, ProxyInfoMap, ProxyInfo, ProxyDetailsMap } from '@/helpers/socksProxy.types';
import useBrowserStorageLocal from '@/composables/useBrowserStorageLocal';

export type Store = {
  excludedHosts: Ref<string[]>;
  hostProxies: Ref<ProxyInfoMap>;
  hostProxiesDetails: Ref<ProxyDetailsMap>;
  globalProxy: Ref<ProxyInfo>;
  globalProxyDetails: Ref<ProxyDetails>;
  historyEntries: Ref<HistoryEntriesMap>;
  proxiesList: Ref<Country[]>;
  webRTCStatus: Ref<boolean>;
};

const useStore = (): Store => {
  const excludedHosts = useBrowserStorageLocal('excludedHosts', []);
  const globalProxy = useBrowserStorageLocal('globalProxy', {} as ProxyInfo);
  const globalProxyDetails = useBrowserStorageLocal('globalProxyDetails', {} as ProxyDetails);
  const hostProxies = useBrowserStorageLocal('hostProxies', {});
  const hostProxiesDetails = useBrowserStorageLocal('hostProxiesDetails', {});
  const historyEntries = useBrowserStorageLocal('historyEntries', {});
  const proxiesList = useBrowserStorageLocal('proxiesList', [] as Country[]);
  const webRTCStatus = useBrowserStorageLocal('webRTCStatus', true);
  return {
    excludedHosts,
    globalProxy,
    globalProxyDetails,
    hostProxies,
    hostProxiesDetails,
    historyEntries,

    proxiesList,
    webRTCStatus,
  };
};

export default useStore;
