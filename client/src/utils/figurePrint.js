
import FingerprintJS from '@fingerprintjs/fingerprintjs'

export const LOCAL_STORAGE_VISITOR_KEY = "LOCAL_STORAGE_VISITOR_KEY"

export const setVisitorIdToLocalstorage = async () => {
  const visitorId = window.localStorage.getItem(LOCAL_STORAGE_VISITOR_KEY)
  if (!visitorId) {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    const visitorId = result.visitorId;
    window.localStorage.setItem(LOCAL_STORAGE_VISITOR_KEY, visitorId)
  }
};
