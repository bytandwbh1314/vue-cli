import tld from 'tldjs'
const HOST = window.location.host
const DOMAINS = {
  'prod': {
    origin: 'http://pgybg.yuns1.net/'
  },
  'test': {
    origin: 'http://218.2.176.114:10901/'
  },
  'dev': {
    origin: 'http://218.2.176.114:10901/'
  }
}

function createDomain (host) {
  let DOMAIN = {}
  let topDomain = tld.getDomain(host)
  switch (topDomain) {
    case 'yuns1.net':
      DOMAIN = DOMAINS['prod']
      break
    case 'lingxiu.top':
      DOMAIN = DOMAINS['test']
      break
    default:
      DOMAIN = DOMAINS['dev']
  }
  DOMAIN.tld = topDomain || 'dev'
  return DOMAIN
}

export const DOMAIN = createDomain(HOST)
