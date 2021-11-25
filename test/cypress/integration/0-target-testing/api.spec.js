import {TARGET_LIST} from '../../../../constants/api.ts'
import {ORIGIN, PORT} from '../../../../config'

describe('测试API', () => {
    const API = `${ORIGIN}:${PORT}${TARGET_LIST}`
    it(`${API} 可以访问`, () => {
        cy.request(API).its('headers').its('content-type').should('include', 'application/json')
    })
})