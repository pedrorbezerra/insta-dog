<template>
    <b-navbar class="TheHeader" wrapper-class="TheHeader__nav container" shadow transparent fixed-top>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/login' }">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/12/12638.png"
                    alt="Cachorro"
                >
            </b-navbar-item>
        </template>

        <!-- <template #start>
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
        </template> -->

        <template #end>
            <b-navbar-item href="/login">
                Login
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<style scoped lang="sass">
.TheHeader
    place-content: center
    
    ::v-deep .TheHeader__nav
        display: flex
</style>