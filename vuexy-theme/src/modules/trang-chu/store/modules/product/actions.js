import { get as getProduct } from '../../../api/product'

const getProducts = (context, payload) => {
  let products = []
  const itemsPerPage = payload && payload.pageSize ? payload.pageSize : 10
  const page = payload && payload.currentPage ? payload.currentPage : 1
  getProduct({ filter: {}, limit: itemsPerPage, page })
    .then(res => {
      products = res && res.data ? res.data : []
      context.commit('getListProduct', products)
    })
}

export default {
  getProducts,
}
