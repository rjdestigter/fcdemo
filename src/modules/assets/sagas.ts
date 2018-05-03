import { call, fork } from 'redux-saga/effects'

import ctrl from '@farmersedge/ctrl-assets'

import fetch from './fetch'

export default function* main() {
    const fetchWithToken = ((request: any) => fetch({...request, token: 'c52d9422a07bd348accefca704686e3ac34cd7e5'}))
    yield fork(ctrl.initialize, fetchWithToken as any)
}

export function* regions() {
    yield call(ctrl.read, {
        queryParams: {
            category: 'Region'
        }
    })
}