<template>
    <section class="Profile container">
        <Avatar :name="user.name" :image="user.profilePhoto"/>

        <div class="Profile__infos container is-flex is-justify-content-center mt-4">
            <span class="Profile__item"><strong>{{ user.following }}</strong> Seguindo</span>

            <span class="Profile__item"><strong>{{ user.photos }}</strong> Fotos</span>

            <b-button class="Profile__editButton" @click="editProfile">Editar Perfil</b-button>
        </div>
    </section>
</template>

<script>
import Avatar from '@/components/molecules/Avatar/Avatar'

export default ({
    name: 'Profile',
    components: {
        Avatar
    },

    data() {
        return {}
    },

    computed: {
        user() {
            return JSON.parse(localStorage.getItem('user'))
        }
    },

    methods: {
        editProfile() {
            this.$router.push('profile/edit')
        }
    }
})
</script>

<style lang="sass" scoped>
.Profile
    &__item
        padding: 10px
        min-width: 100px
        text-align: center
</style>