<template>
    <div class="Profile__avatar is-flex is-justify-content-center is-align-items-center is-flex-direction-column mt-4">
        <figure class="image is-128x128">
            <b-image
                :src="image"
                :src-fallback="fallbackImage"
                ratio="1by1"
                rounded
            ></b-image>
        </figure>
        <p class="title is-3 mt-4">{{ name }}</p>
    </div>
</template>

<script>
export default ({
    name: 'Avatar',

    props: {
        name: {
            type: String,
            default: ''
        },
        
        image: {
            type: String,
            default: '',
            required: true 
        }
    },

    data() {
        return {
            fallbackImage: 'https://yt3.ggpht.com/ytc/AKedOLQf5MBcFSDzo2FeZIXSqafCvdRMGjW2C-0j8RpD=s900-c-k-c0x00ffffff-no-rj'
        }
    }
})
</script>
