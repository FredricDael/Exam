import axios from "axios";

const state = {
    items: []
}

const getters = {
    getItem: state => state.items,
    getNewID: state => Math.max.apply( null, state.items.map( i => +i.ID ) ) + 1
}

const mutations = {
    storeItems: (state, data) => {
        state.items = data
    },
    addItem: (state, data) => {
        state.items.push(data)
    }
}

const actions = {
    async getJsonData({ commit }) {
        await axios.get('data.json')
            .then(res => {
                commit('storeItems', res.data)
            })
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}