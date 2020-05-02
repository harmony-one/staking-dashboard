export default () => {
    const state = {
        loading: true,
        loaded: false,
        delegationList: [],
        amount:0,
        total: 0,
        totalActive: 0,
        totalFound: 0
    }

    const actions = {
       
    }

    const mutations = {
        resetQue(state, validators){
            state.delegationList = validators
            state.amount= 0
            state.total=0
        },
        setDelegationQue(state, validators) {
            state.delegationList.push(validators)
        },
        setDelegationFee(state, fee) {
            state.delegationList = state.delegationList.filter(validator=> {
                validator.estimatedFee = fee
                return validator
            })
        },
        setAmount(state, val) {
            state.amount=val
        },
        removeDelegationQue(state, address) {
            state.delegationList = state.delegationList.filter(item => {
                if (item.address === address)
                    return false
                else return true
            })
        }
    }

    return {
        state,
        mutations,
        actions
    }
}
