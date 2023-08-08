<template>
    <sector>
        FILTER
    </sector>
    <sector>
        <div class="controls">
            <button>Refresh</button>
            <router-link to="/register">Registre as Coach</router-link>
        </div>
        <ul v-if="hasCoaches">
            <li v-for="coach in filteredCoaches" :key="coach.id">
                {{coach.firstName}}
            </li>
        </ul>
        <h3 v-else>No coaches found.</h3>
    </sector>
</template>

<script>
export default ({
    computed: {
        filteredCoaches() {
            return this.$store.getters['coaches/coaches'];
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        }
    }
})
</script>
