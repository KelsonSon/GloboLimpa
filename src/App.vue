<template>
  <v-app>
  <div class="d-none d-md-block">
    <NavBar id="nav"/>

    <v-container fluid class="pa-0 "
    >
      <MainSec id="home"/>
      <ServicoSec id="servicos" />
      <ContatoSec id="contato" />
    </v-container>
    <FooterBar />
  </div>
  <div class="d-md-none fill-height h-100">
    <NavMobile  />
  </div>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import MainSec from './components/MainSec.vue';
import ServicoSec from './components/ServicoSec.vue';
import ContatoSec from './components/ContatoSec.vue';
import FooterBar from './components/FooterBar.vue';
import NavMobile from './components/NavMobile.vue';

export default defineComponent({
  name: 'App',

  components: {
    NavBar,
    MainSec,
    ServicoSec,
    ContatoSec,
    FooterBar,
    NavMobile
  },
  setup(){
    
    
  
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*{
  font-family: 'Montserrat', sans-serif;
}
body{
background: linear-gradient(90deg, rgba(30,133,174,1) 0%, rgba(28,141,166,1) 44%);
}

.logo{
  max-width: 150px;
}
.mensagem {
  background: rgba(242, 242, 242, 0.25);
  padding: 5px;
  margin-top: 20px;
}



</style>
