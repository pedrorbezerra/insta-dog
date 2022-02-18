<template>
    <section class="Profile container">
        <Avatar name="Tereza da Silva Sauro" image="https://uploads.metropoles.com/wp-content/uploads/2021/06/09110407/cachorro-fofo-usando-oculos_23-2148917262-1-600x380.jpg"/>
    </section>
</template>

<script>
import Avatar from '@/components/molecules/Avatar/Avatar'

export default ({
    name: 'Profile',
    components: {
        Avatar
    }
})
</script>