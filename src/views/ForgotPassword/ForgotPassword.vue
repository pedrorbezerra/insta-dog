<template>
    <div class="Login">
        <div class="Login__image" />

        <section class="Login__form">
            <span class="Login__title">Esqueceu a senha?</span>
            <b-field label="Usuário" label-position="on-border">
                <b-input v-model="email"></b-input>
            </b-field>

            <b-button type="is-primary" class="Login__button">Recuperar Senha</b-button>
        </section>
        
    </div>
</template>

<script>

export default ({
    name: 'ForgotPassword',
    data() {
        return {
            email: ''
        }
    },
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
</style>

