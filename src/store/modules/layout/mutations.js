import Vue from 'vue'

export function addPanel(state, {type, parent, settings}) {
	const id = state.nextId++
	Vue.set(state.panels, id, {type, parent, settings})
}

export function removePanel(state, {id}) {
	Vue.delete(state.panels, id)
}

export function setSetting(state, {id, key, value}) {
	Vue.set(state.panels[id].settings, key, value)
}

export function resetLayout(state) {
	state.nextId = 3
	state.panels = {
		1: {
			type: 'Grid',
			parent: null,
			settings: {
				direction: 'row',
				weights: [0.772991643454039, 1.2270083565459609]
			}
		},
		2: {
			type: 'Scenes',
			parent: 1,
			settings: {
				perRow: 2
			}
		},
		3: {
			type: 'Grid',
			parent: 1,
			settings: {
				direction: 'column',
				weights: [
					0.6164332814699562,
					1.2770461412986167,
					1.106520577231427
				]
			}
		},
		4: {
			type: 'Stream',
			parent: '3',
			settings: {}
		},
		5: {
			type: 'Sources',
			parent: '3',
			settings: {}
		},
		12: {
			type: 'Transitions',
			parent: '3',
			settings: {}
		}
	}
	state.tabs = [
		{
			id: 1,
			name: 'Home',
			root: 1
		}
	]
}
