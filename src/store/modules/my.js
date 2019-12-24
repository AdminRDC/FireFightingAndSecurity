import { get } from '../../http/axios'

export default {
    namespaced: true,
    state: {
    },
    mutations: {
    },
    actions: {
        async test(context, data) {
            let response = await get('/Business/findAll')
            return response;
        },
    }
}