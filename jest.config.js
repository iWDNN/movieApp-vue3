module.exports = {
  moduleFileExtensions: [ // 파일확장자를 지정하지 않은 경우, jest가 확인할 파일확장자들 목록입니다.
    'js',
    'vue'
  ],
  moduleNameMapper: { // src아래 모든 파일 경로 검사 <rootDir>을 토큰처럼 사용가능
    '^~/(.*)$': '<rootDir>/src/$1'
  },
  modulePathIgnorePatterns: [ // 검사 무시할 파일들
    '<rootDir>/node_modules',
    '<rootDir>/dist',
    '<rootDir>/cypress'
  ],
  // jsdom 환경에 대한 URL을 지정합니다
  testURL: 'http://localhost',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest'
  },
}
