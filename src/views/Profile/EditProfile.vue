<template>
    <section class="EditProfile container">
        <div class="EditProfile__card box">
            <b-field class="file is-primary is-justify-content-center">
            <b-upload v-model="file" @input="handleUpdatePhoto" class="file-label">
                <Avatar :image="user.profilePhoto"/>
            </b-upload>
        </b-field>

        <form class="EditProfile__infos is-flex is-justify-content-center is-flex-direction-column mt-4" @submit.prevent>
            <b-field label="Nome" label-position="on-border">
                <b-input v-model="user.name" @keyup.enter.native="save"></b-input>
            </b-field>

            <b-button type="submit is-primary" @click="save">Salvar</b-button>
        </form>
        </div>
    </section>
</template>

<script>
import Avatar from '@/components/molecules/Avatar/Avatar'

export default ({
    name: 'EditProfile',
    components: {
        Avatar
    },

    data() {
        return {
            file: {}
        }
    },

    computed: {
        user() {
            return JSON.parse(localStorage.getItem('user'))
        }
    },

    methods: {
        save() {
            const user = { ...this.user }
            localStorage.setItem('user',  JSON.stringify(user))
            this.$buefy.toast.open({
                    message: 'Informações salvas!',
                    type: 'is-success'
                })
            this.$router.push('/profile')
        },

        handleUpdatePhoto(e) {
            const reader = new FileReader()

            reader.readAsDataURL(e)

            reader.onload = () => {
                const user = { ...this.user, profilePhoto: reader.result }
                localStorage.setItem('user',  JSON.stringify(user))
            }
        },
    }
})
</script>

<style lang="sass" scoped>
$width: 400px
.EditProfile
    &__card
        max-width: $width
        margin: 2rem auto 
    &__infos
        max-width: $width
        margin: 0 auto
</style>