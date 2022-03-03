<template>
    <section class="Profile container">
        <Avatar :name="user.name" :image="user.profilePhoto"/>

        <div class="Profile__infos container is-flex is-justify-content-center">
            <span class="Profile__item"><strong>{{ user.following }}</strong> Seguindo</span>

            <span class="Profile__item"><strong>{{ user.photos }}</strong> Fotos</span>

            <b-button class="Profile__editButton" @click="editProfile">Editar Perfil</b-button>
        </div>
        

        <div class="Profile__photos is-flex container is-flex-wrap-wrap	is-justify-content-center">
            <figure v-for="photo in photos" 
                :key="photo.id" class="image Profile__photo" 
                @mouseover="handlerPhotoHover(true, photo.id)" 
                @mouseleave="handlerPhotoHover(false, photo.id)"
                @click="openImage(photo.path)"
            >
                <b-image
                    :src="photo.path"
                    ratio="1by1"
                ></b-image>

                <div v-if="photoHover[photo.id]" class="Profile__backdrop">
                   <div class="Profile__action-icons">
                       <span><b-icon pack="fas" icon="heart" type="is-white" /> {{ photo.likes }}</span>
                       <span><b-icon pack="fas" icon="comment" type="is-white" /> {{ photo.comments }}</span>
                   </div>
                </div>
            </figure>
        </div>

        <b-modal v-model="photo">
            <b-image
                class="Profile__modal"
                :src="photo"
                ratio="1by1"
            ></b-image>
        </b-modal>
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
            photoHover: {},
            photo: null
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

        handlerPhotoHover(event, id) {
            this.$set(this.photoHover, id, false)
            this.photoHover[id] = event
        },

        openImage(image) {
            this.photo = image
        }
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

    &__photos
        @media (max-width: 768px)
            justify-content: flex-start !important 

    &__photo
        width: 293px
        height: 293px
        margin: 15px
        position: relative
        cursor: pointer

        @media (max-width: 768px) 
            width: 125px
            height: 125px
            margin: 2px

    &__backdrop
        width: 293px
        height: 293px
        position: absolute
        top: 0
        left: 0
        background: rgba(0, 0, 0, 0.3)
    
    &__action-icons
        height: 100%
        display: flex
        align-items: center
        justify-content: center

        > span 
            color: white
            display: flex
            justify-content: space-around
            margin: 0 10px

    &__modal
        height: 85vh
        background-size: cover
        object-fit: cover
        background-position: center

        @media (max-width: 768px) 
            height: 75vh
</style>