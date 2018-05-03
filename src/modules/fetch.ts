import createGetUrl from '@farmersedge/util-url'
import createFetch from '@farmersedge/fetch'

const getUrl = createGetUrl({
    SERVER: 'dev.granduke.net',
    PROTOCOL: 'https',
})

const fetch = createFetch({getUrl})

export default fetch.__get