<template>
    <div class="fill-height pt-10">
      <div class="text-end py-2 px-2 btn-principal bg-white w-100 d-flex">
        <v-icon>fas fa-clock</v-icon>
        <span class="mx-2">Seg - Sab</span>
        <v-spacer></v-spacer>
        <v-btn size="small" href="https://api.whatsapp.com/send/?phone=5581997979013&text=Gostaria+de+solicitar+um+or%C3%A7amento.&type=phone_number&app_absent=0" color="primary">Solicitar orçamento<v-icon size="25" class="mx-1 mb-1 text-green">fab fa-whatsapp</v-icon></v-btn>
      </div>
      <v-tabs v-model="tab" color="primary" class="navbar-mobile bg-white w-100 d-flex justify-center">
        <v-spacer></v-spacer>
        <v-tab class="text-body-1" :value="0">
          <v-icon size="small" start>
            fas fa-home
          </v-icon>
          Home
        </v-tab>
        <v-tab class="text-body-1" :value="1">
          <v-icon size="small" start>
            fas fa-truck
          </v-icon>
          Serviços
        </v-tab>
        <v-tab class="text-body-1" :value="2">
          <v-icon size="small" start>
            fas fa-phone
          </v-icon>
          Contato
        </v-tab>
        <v-spacer></v-spacer>
      </v-tabs>
  
      <v-window v-model="tab" class="h-100">
        <v-window-item :value="0">
          <!-- Conteúdo da primeira guia -->
          <MainMobile />
        </v-window-item>
        <v-window-item :value="1">
          <!-- Conteúdo da segunda guia -->
          <ServicoMobile />
        </v-window-item>
        <v-window-item :value="2">
          <!-- Conteúdo da terceira guia -->
          <ContatoMobile />
        </v-window-item>
      </v-window>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import MainMobile from './MainMobile.vue';
  import ServicoMobile from './ServicoMobile.vue';
  import ContatoMobile from './ContatoMobile.vue'
  export default {
    components:{
      MainMobile,
      ServicoMobile,
      ContatoMobile
    },
    setup() {
      const tab = ref(0);
  
      return {
        tab
      };
    }
  };
  </script>
  
  <style scoped>
  .navbar-mobile {
    position: fixed;
    bottom: 0;
    z-index: 999;
  }

  .btn-principal{
    position: fixed;
    top: 0;
    z-index: 99;
  }
  </style>
  