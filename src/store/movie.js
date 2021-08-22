// 영화 정보를 관리
export default {
  // module, movie.js가 하나의 스토어에서 모듈화 되서 사용이 될 수 있다.
  namespaced: true,

  // data, 취급해야 하는 각각의 data
  state: () => ({
    movies: []
  }),

  // computed, state 데이터의 계산된 데이터 (=computed)
  getters: {
    movieIds(state) {
      return state.movies.map(m => m.imdbID)
    }
  },

  //methods와 유사
  //변이, mutation안에서만 데이터를 변경시켜줄수 있음( 데이터들을 변경시켜줄수 있는 함수)
  mutations: {
    resetMovies(state) {
      state.movies = []
    }
  },
  // 비동기, async await를 붙이지 않아도 비동기 함수
  actions: {
    searchMovies() {

    }
  }
}