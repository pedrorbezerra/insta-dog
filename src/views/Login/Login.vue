<template>
    <div class="Login">
        <div class="Login__image" />

        <form class="Login__form">
            <span class="Login__title">Login</span>
            <b-field label="Email" label-position="on-border">
                <b-input v-model="email"></b-input>
            </b-field>
            <b-field label="Senha" label-position="on-border">
                <b-input v-model="password" type="password" password-reveal></b-input>
            </b-field>

            <b-button type="is-primary" class="Login__button" @click="login">Entrar</b-button>

            <router-link to="/forgot-password" class="Login__forgotPassword is-size-6 mt-6">Esqueceu a senha?</router-link>

            <span class="Login__SignIn mt-5 mb-3">Cadastre-se</span>
            <router-link to="/signin" class="is-size-6">Ainda não possui conta? Cadastre-se aqui, é fácil e rápido</router-link>
        </form>
    </div>
</template>

<script>

export default ({
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        login() {
            this.setUserInfos()
            this.$router.push('/profile') 
        },

        setUserInfos() {
            const infos = {
                name: 'Tereza da Silva Sauro',
                profilePhoto: 'https://uploads.metropoles.com/wp-content/uploads/2021/06/09110407/cachorro-fofo-usando-oculos_23-2148917262-1-600x380.jpg',
                following: 14,
                photos: 5
            }

            localStorage.setItem('user',  JSON.stringify(infos))
        }
    }
})
</script>

<style scoped lang="sass">
.Login
    width: 100%
    height: calc(100vh - 52px)
    display: flex
    &__image
        width: 50%
        background-image: url('https://i.insider.com/5de577b479d75715806e67e7')
        background-size: cover
        background-position: center

        @media (max-width: 768px) 
            display: none
        

    &__title
        font-size: 3rem
        margin-bottom: 1.5rem
        position: relative
        display: inline-block

        &:after
            content: ""
            display: block
            width: 1.5rem
            height: 1.5rem
            background: #9c84dd
            position: absolute
            bottom: 11px
            left: -5px
            border-radius: 0.2rem
            z-index: -1

    &__form 
        width: 500px
        align-self: center
        padding: 2rem

    &__button
        width: 218px

    &__forgotPassword
        width: 100%
        display: inline-block

    &__SignIn
        font-size: 1.5rem
        position: relative
        width: 100%
        display: inline-block

        &:after
            content: ""
            display: block
            width: 4.5rem
            height: 0.3rem
            background: #9c84dd
            position: absolute
            bottom: 0px
            left: 0
            border-radius: 0.2rem
            z-index: -1
</style>

