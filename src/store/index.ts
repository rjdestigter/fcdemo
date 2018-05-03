import createStore from '@farmersedge/store'

import reducer from './reducer'

export default createStore<any>({
    reducer,
    logger: { enabled: true},
    middleware: []
})