// IO
import IO from '@farmersedge/io'

// Reducers
import ctrl from '@farmersedge/ctrl-assets'

// Sagas
import main, { regions } from './sagas'

// Exports
export const ioRegions = IO.saga(regions)

export default IO.combine([
    IO.saga(main),
    IO.reducer('assets', ctrl.reducer as any)
])