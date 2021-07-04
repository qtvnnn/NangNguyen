// eslint-disable-next-line import/no-cycle
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const result = []

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 10; i++) {
  result.push({
    id: i,
    title: `Hồ sơ ${i}`,
    description: `Mô tả hồ sơ ${i}`,
  })
}

const state = {
  hoSoId: 1,
  hoSoDangCapNhat: {},
  danhSachHoSo: result,
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
