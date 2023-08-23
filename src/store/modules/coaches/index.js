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
                areas: ['frontend', 'backend'],
                description: 'I\'m mister Joe, I solve problems',
                hourlyRate: 140,
            },
            {
                id: 'c3',
                firstName: 'Jack',
                lastName: 'White',
                areas: ['frontend', 'career'],
                description: 'I\'m mister Jack, I solve problems',
                hourlyRate: 140,
            },
            {
                id: 'c4',
                firstName: 'Shish',
                lastName: 'Kebab',
                areas: ['career', 'backend', 'vuejs'],
                description: 'I\'m mister Shish, I solve problems',
                hourlyRate: 140,
            },
        ]
        };
    },
    mutations,
    actions,
    getters
};