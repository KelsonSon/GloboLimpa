<template>
    <v-toolbar class="nav-bar" prominent>
    <v-toolbar-title  class="logo mx-0 d-flex justify-center">
    <v-img width="200" src="../../public/img/logo.png"></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-list class="d-flex bg-transparent mx-0">
    <a v-for="link in links" :key="link.title" :href="link.href" class="v-list-item mx-0 mx-md-2 text-white text-overline text-md-body-1" >
        {{ link.title }}
    </a>
    </v-list>
    <v-spacer ></v-spacer>
    <div class="mx-2 d-flex align-center text-branco">
        <v-icon>fas fa-clock</v-icon>
        <span class="mx-1">Seg - Sab</span>
    </div>
</v-toolbar>
</template>
<script>

export default {
    name: 'NavBar',
    setup(){
        const links = [
        {title: 'Home', href: '#home'},
        {title: 'Serviços', href: '#servicos'},
        {title:  'Contato', href: '#contato'}
        ]
        return{
            links
        }
    },
    
}
</script>

<style>
.nav-bar{
    background: linear-gradient(90deg, rgba(32,131,173,1) 0%, rgba(31,146,191,1) 44%);
}
</style>