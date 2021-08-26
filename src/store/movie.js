// 영화 정보를 관리
import axios from 'axios';

export default {
  // module, movie.js가 하나의 스토어에서 모듈화 되서 사용이 될 수 있다.
  namespaced: true,

  // data, 취급해야 하는 각각의 data
  state: () => ({
    movies: [],
    message: '',
    loading: false
  }),

  // computed, state 데이터의 계산된 데이터 (=computed)
  getters: {
  },

  //methods와 유사
  //변이, mutation안에서만 데이터를 변경시켜줄수 있음( 데이터들을 변경시켜줄수 있는 함수)
  mutations: {
    updateState(state, payload) {
      //Object keys 사용시 바뀌는 객체에서 배열 - >  ['movies', 'message', 'loading']
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]// state.movies = payload.movies state['movies'] = payload['movies']

      }) // 속성의 이름들만 가지고 객체데이터를 배열로 만들어줌
    },
    resetMovies(state) {
      state.movies = []
    }
  },
  // 비동기, async await를 붙이지 않아도 비동기 함수
  actions: {
    async searchMovies({ commit }, payload) { // c는 state,getters,mutation를 활용 가능 p는 이함수를 사용할때 인수로 들어온 특정 데이터를 가져올수 있음
      const { title, type, number, year } = payload
      const OMDB_API_KEY = '7035c60c'
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
      const { Search, totalResults } = res.data
      commit('updateState', {
        movies: Search,
        message: 'AXIOS',
        loading: true
      })
    }
  }
}