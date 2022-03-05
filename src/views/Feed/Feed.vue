<template>
    <section class="Feed container">
        <Photos :photos="photos" type="feed" />
    </section>
</template>

<script>
import Photos from '@/components/molecules/Photos/Photos'

export default ({
    name: 'Feed',
    components: {
        Photos
    },

    data() {
        return {
            photos: [
                {
                    id: 0,
                    path: require('@/assets/images/1.png'),
                    likes: 9,
                    liked: true,
                    comments: 2
                },
                {
                    id: 1,
                    path: require('@/assets/images/2.png'),
                    likes: 5,
                    liked: false,
                    comments: 7
                },
                {
                    id: 2,
                    path: require('@/assets/images/3.png'),
                    likes: 1,
                    liked: false,
                    comments: 21
                },
                {
                    id: 3,
                    path: require('@/assets/images/4.png'),
                    likes: 9,
                    liked: false,
                    comments: 2
                },
                {
                    id: 4,
                    path: require('@/assets/images/5.png'),
                    likes: 1,
                    liked: false,
                    comments: 21
                },
                {
                    id: 5,
                    path: require('@/assets/images/6.png'),
                    likes: 5,
                    liked: false,
                    comments: 7
                },
                {
                    id: 6,
                    path: require('@/assets/images/7.png'),
                    likes: 51,
                    liked: false,
                    comments: 73
                },
                {
                    id: 7,
                    path: require('@/assets/images/8.png'),
                    likes: 25,
                    liked: false,
                    comments: 17
                }
            ],
        }
    },
})
</script>

<style lang="sass" scoped>
.Feed
</style>