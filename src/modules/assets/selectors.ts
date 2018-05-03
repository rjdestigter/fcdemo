import { compose } from 'redux'
import { Asset, isRegion } from '@farmersedge/model-assets'
import * as _ from 'lodash'

interface AssetsById { [id: string]: Asset }

export const assets$ = (state: any) => state.assets as { [id: string]: AssetsById }

export const regions$ = compose((assets: AssetsById) => _.filter(assets, isRegion), assets$)
