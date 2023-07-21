<template>
    <v-container class="fill-height h-100 main-page">
        <v-row>
        
        <v-col cols="12" 
        >  
            <div class="bg-primary">
                <v-img class="img-logo" width="200" src="../../public/img/logo.png"></v-img>
            </div>
          <div class="bg-primary pa-5"
          >
            <p class="text-body-1 text-justify ">
              Bem-vindo à Limpa fossas Globo, sua solução confiável e eficiente para serviços especializados em limpeza de fossas.
            </p>
            <p class="text-body-1 text-justify ">
              Equipe altamente qualificada e experiente. Identificamos e resolvemos de forma rápida e eficaz com serviço de qualidade visando a satisfação total do cliente.
            </p>
            <p class="text-body-1  text-justify ">
              Utilizamos equipamentos modernos e seguros, garantindo um padrão de qualidade e com respeito ao meio ambiente. Nossos caminhões são de 7m³ e 14m³.
            </p>
            <p class="text-body-1  text-justify ">
              Entendemos a importância de uma fossa funcionando adequadamente para o bom funcionamento do seu sistema de esgoto. Portanto, estamos disponíveis de segunda a sábado para sua satisfação. Conheça nossos serviços.
            </p>
          </div>
          
        </v-col>
        <v-col cols="12">
          <div class="mt-5">
            <h5  class="ma-5 mt-0  text-h5 text-justify pt-0 text-uppercase">
              Para sua maior comodidade e segurança, contrate quem entende do assunto. Limpeza de fossas é com a <span class="font-weight-bold text-primary text-uppercase">Limpa Fossas Globo.</span>
            </h5>     
          </div>
          
        </v-col>
        <v-col cols="12">
          <v-carousel
          cycle
          hide-delimiters
          >
            <v-carousel-item
            v-for="(imagem, index) in imagens"
            :key="index"
              :src="imagem.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
    </v-row>
    </v-container>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const imagens = ref([
          {src: './img/truck1.png'},
          {src: './img/truck2.png'}
        ])

        return{
            imagens
        }
    },
}
</script>

<style scoped>

.main-page{
    height: 100vh;
    margin: 0;
}
.img-logo{
    margin: 0 auto;
}

</style>

