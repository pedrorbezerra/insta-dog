<template>
    <div class="Photos is-flex container is-flex-wrap-wrap	is-justify-content-center">
        <figure v-for="photo in photos" 
            :key="photo.id" class="image Photos__photo"  :class="{'Photos__photo--feed': type === 'feed'}"
            @mouseover="handlerPhotoHover(true, photo.id)" 
            @mouseleave="handlerPhotoHover(false, photo.id)"
        >
            <b-image
                :src="photo.path"
                ratio="1by1"
                @click.native="openImage(photo.path)"
            ></b-image>

            <div v-if="photoHover[photo.id] && type !== 'feed'" class="Photos__backdrop">
                <div class="Photos__action-icons">
                    <span><b-icon pack="fas" icon="heart" type="is-white" /> {{ photo.likes }}</span>
                    <span><b-icon pack="fas" icon="comment" type="is-white" /> {{ photo.comments }}</span>
                </div>
            </div>

            <div v-if="type === 'feed'">
                <div class="is-flex">
                    <span>Tereza</span>
                    <div class="Photos__action-icons">
                        <span><b-icon pack="fas" icon="heart" :type="photo.liked ? 'is-danger' : 'is-dark'" @click.native="teste(photo)" /> {{ photo.likes }}</span>
                        <span><b-icon pack="fas" icon="comment" type="is-dark" /> {{ photo.comments }}</span>
                    </div>
                </div>
            </div>
        </figure>

        <b-modal v-model="modal">
            <b-image
                class="Photos__modal"
                :src="photo"
                ratio="1by1"
            ></b-image>
        </b-modal>
    </div>        
</template>

<script>
export default({
    name: 'Photos',

    props: {
        photos: {
            type: Array,
            default: () => []
        },

        type: {
            type: String,
            default: 'profile',
            validator: (value) => ['profile', 'feed'].includes(value.toLowerCase())
        }
    },

    data() {
        return {
            photoHover: {},
            photo: null,
            modal: false
        }
    },

    methods: {
        handlerPhotoHover(event, id) {
            this.$set(this.photoHover, id, false)
            this.photoHover[id] = event
        },

        openImage(image) {
            setTimeout(() => {
                this.photo = image
                this.modal = true
            }, 500)
        },

        teste(photo) {
            console.log(photo)
            photo.liked = !photo.liked 
        }
    }
})
</script>

<style lang="sass" scoped>
.Photos
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

        &--feed
            width: 100%
            height: 100%
            max-width: 768px
            max-height: 768px
            margin-bottom: 30px
            
            @media (max-width: 768px) 
                width: 100%
                height: 100%  

    &__backdrop
        width: 293px
        height: 293px
        position: absolute
        top: 0
        left: 0
        background: rgba(0, 0, 0, 0.3)

        @media (max-width: 768px) 
            width: 125px
            height: 125px
    
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
