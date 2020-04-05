import { shallowMount } from "@vue/test-utils"
import PageGlobal from "staking/PageGlobal"
import validators from "../../store/json/validators.js"

describe(`PageGlobal`, () => {
  let wrapper, $apollo, $store

  beforeEach(async () => {
    $apollo = {
      queries: {
        validators: {
          loading: false,
          error: false
        }
      }
    }

    $store = {
      state: {
        connection: {
          network: "awesomenet"
        }
      }
    }

    wrapper = shallowMount(PageGlobal, {
      mocks: {
        $apollo,
        $store
      }
    })

    wrapper.setData({ validators })
  })

  it(`shows a list of validators`, async () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it(`shows a message if still loading`, async () => {
    wrapper = shallowMount(PageGlobal, {
      mocks: {
        $apollo: {
          queries: {
            validators: {
              loading: true,
              error: false
            }
          }
        }
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it(`shows a message if there is nothing to display`, async () => {
    wrapper = shallowMount(PageGlobal, {
      mocks: {
        $apollo
      }
    })
    wrapper.setData({ validators: [] })

    expect(wrapper.element).toMatchSnapshot()
  })

  it(`shows a message if there is an error to display`, async () => {
    wrapper = shallowMount(PageGlobal, {
      mocks: {
        $apollo: {
          queries: {
            validators: {
              loading: false,
              error: true
            }
          }
        }
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
