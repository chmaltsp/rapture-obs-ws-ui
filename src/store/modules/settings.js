export default {
	state: {
		defaultHost: 'clubrapture.ddns.net',
		defaultPort: 8020,
		hasEdited: false,
		theme: 'default',
		version: 1
	},
	mutations: {
		set(state, {key, value}) {
			state[key] = value
		}
	},
	namespaced: true
}
