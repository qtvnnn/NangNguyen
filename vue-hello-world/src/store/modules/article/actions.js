import { get as getArticle } from '../../../data/article'

const getArticles = (context, payload) => {
  let Articles = []
  let itemsPerPage = payload && payload.pageSize ? payload.pageSize : 10
  let page = payload && payload.currentPage ? payload.currentPage : 1
  getArticle({filter: {}, limit: itemsPerPage, page: page})
    .then(res => {
      Articles = res && res.data ? res.data : []
      context.commit('getListArticle', Articles)
    })
}

export default {
  getArticles
}
