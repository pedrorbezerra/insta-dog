<template>
    <section class="Profile container">
        <Avatar :name="user.name" :image="user.profilePhoto"/>

        <div class="Profile__infos container is-flex is-justify-content-center">
            <span class="Profile__item"><strong>{{ user.following }}</strong> Seguindo</span>

            <span class="Profile__item"><strong>{{ user.photos }}</strong> Fotos</span>

            <b-button class="Profile__editButton" @click="editProfile">Editar Perfil</b-button>
        </div>
        
        <Photos :photos="photos" />
    </section>
</template>

<script>
import Avatar from '@/components/molecules/Avatar/Avatar'
import Photos from '@/components/molecules/Photos/Photos'

export default ({
    name: 'Profile',
    components: {
        Avatar,
        Photos
    },

    data() {
        return {
            photos: [
                {
                    id: 0,
                    path: require('@/assets/images/1.png'),
                    likes: 9,
                    comments: 2
                },
                {
                    id: 1,
                    path: require('@/assets/images/2.png'),
                    likes: 5,
                    comments: 7
                },
                {
                    id: 2,
                    path: require('@/assets/images/3.png'),
                    likes: 1,
                    comments: 21
                },
                {
                    id: 3,
                    path: require('@/assets/images/4.png'),
                    likes: 9,
                    comments: 2
                },
                {
                    id: 4,
                    path: require('@/assets/images/5.png'),
                    likes: 1,
                    comments: 21
                },
                {
                    id: 5,
                    path: require('@/assets/images/6.png'),
                    likes: 5,
                    comments: 7
                },
                {
                    id: 6,
                    path: require('@/assets/images/7.png'),
                    likes: 51,
                    comments: 73
                },
                {
                    id: 7,
                    path: require('@/assets/images/8.png'),
                    likes: 25,
                    comments: 17
                }
            ],
            // photoHover: {},
            // photo: null
        }
    },

    computed: {
        user() {
            return JSON.parse(localStorage.getItem('user'))
        }
    },

    methods: {
        editProfile() {
            this.$router.push({ name: 'editProfile'})
        },

        
    }
})
</script>

<style lang="sass" scoped>
.Profile
    &__infos
        margin: 1rem 0

    &__item
        padding: 10px
        min-width: 100px
        text-align: center
</style>