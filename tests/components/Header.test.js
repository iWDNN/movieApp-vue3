import { shallowMount } from '@vue/test-utils'
import store from '~/store'
import router from '~/routes'
import Header from '~/components/Header'

describe('components/Header.vue', () => {
  let wrapper
  beforeEach(async () => {
    window.scrollTo = jest.fn()
    router.push('/movie/tt1234567')
    await router.isReady()
    wrapper = shallowMount(Header, {
      global: {
        plugins: [
          store,
          router
        ]
      }
    })
  })
  test('경로 정규표현식이 없는 경우 일치하지 않습니다', () => {
    const regexp = undefined
    expect(wrapper.vm.isMatch(regexp)).toBe(false)
  })

  test('경로 정규표현식과 일치해야 합니다', () => {
    const regexp = /^\/movie/
    expect(wrapper.vm.isMatch(regexp)).toBe(true)
  })
  test('경로 정규표현식과 일치하지 않아야 합니다.', () => {
    const regexp = /^\/heropy/
    expect(wrapper.vm.isMatch(regexp)).toBe(false)
  })
})  