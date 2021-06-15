/* eslint no-console: 1 */

export const getters = {
    displayOrder: (state, getters, rootState) => {
        if (rootState.multi_dept) {
            const finalArray = [];

            const topArray = Object.values(state.deptList).filter(item => item.parent == 0 && item.id != 82).sort((a, b) => a.name.localeCompare(b.name))

            for (const value of topArray) {
                const tempArray = [value, ...Object.values(state.deptList).filter(item => item.parent == value.id).sort((a, b) => a.name.localeCompare(b.name))]

                finalArray.push(tempArray)
            }

            return finalArray.flat().map(dept => dept.id)
        }
        else {
            const returnArray = Object.values(state.deptList)
            returnArray.sort((a, b) => a.name.localeCompare(b.name))
            return returnArray.map(item => item.id)
        }
    },
    getDept: (state) => (id) => {
        return state.deptList[id]
    },
}