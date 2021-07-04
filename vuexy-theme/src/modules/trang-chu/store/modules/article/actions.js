import { get as getArticle } from '../../../api/article'

const getArticles = (context, payload) => {
  let Articles = []
  const itemsPerPage = payload && payload.pageSize ? payload.pageSize : 10
  const page = payload && payload.currentPage ? payload.currentPage : 1
  getArticle({ filter: {}, limit: itemsPerPage, page })
    .then(res => {
      Articles = res && res.data ? res.data : []
      context.commit('getListArticle', Articles)
    })
}

export default {
  getArticles,
}
