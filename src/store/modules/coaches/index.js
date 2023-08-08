import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            coaches: [{
                id: 'c1',
                firstName: 'Max',
                lastName: 'Schw',
                areas: ['frontend', 'backend', 'career'],
                description: 'I am Max',
                hourlyRate: 30,
            },
            {
                id: 'c2',
                firstName: 'Joe',
                lastName: 'Shmoe',
                areas: ['bikini', 'area 51', 'strawberry fields'],
                description: 'I\'m mister Joe, I solve problems',
                hourlyRate: 140,
            },
        ]
        };
    },
    mutations,
    actions,
    getters
};