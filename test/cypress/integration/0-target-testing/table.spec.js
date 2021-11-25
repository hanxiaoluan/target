import {ORIGIN, PORT} from '../../../../config'
describe('测试表格', () => {
    beforeEach(() => {
        cy.visit(`${ORIGIN}:${PORT}`)
    })

    const expectedTableTitle = ['目标内容', '计划完成时间', '完成时间', '用户名']
    it(`表格包含了标题[${expectedTableTitle}]`, () => {
        cy.get('.n-data-table-th').should(($tableTh) => {
            expect($tableTh).to.have.length(expectedTableTitle.length)
            const titleName = $tableTh.map((i, el) => {
                return el.textContent
            })
            expect(titleName.get()).to.deep.eq(expectedTableTitle)
        })
    })
})