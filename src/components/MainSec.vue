<template>
    <v-row max-height="100vh"  class="pb-0 bg-white"
      >
        
        <v-col cols="7"  class="px-md-3  pb-0"
        >
          
          <v-img cover :src="imagem" width="auto" class="img-class w-100 ma-0 pa-0 fill-height ">
              
          </v-img>
        </v-col>
        <v-col cols="5">
          <div  class="px-5 pa-lg-10 mt-5">
            <h5  class="ma-10  text-h5 text-justify pt-5 text-uppercase">
              Para sua maior comodidade e segurança, contrate quem entende do assunto. Limpeza de fossas é com a <span class="font-weight-bold text-primary text-uppercase">Limpa Fossas Globo.</span>
            </h5>     
          </div>
          <div class="d-flex justify-center pb-5"
          >
            <v-btn size="large" href="https://api.whatsapp.com/send/?phone=5581997979013&text=Gostaria+de+solicitar+um+or%C3%A7amento.&type=phone_number&app_absent=0" target="_blank" color="primary">Solicitar orçamento <v-icon size="25" class="mx-2 text-green">fab fa-whatsapp</v-icon></v-btn>
          </div>
        </v-col>
        <v-col cols="12" class="d-flex justify-center w-100  pa-0 px-2">
          <div class="bg-primary pa-15  caixa w-100"
          >
            <p class="text-body-2 text-md-body-1 text-justify ">
              Bem-vindo à Limpa fossas Globo, sua solução confiável e eficiente para serviços especializados em limpeza de fossas.
            </p>
            <p class="text-body-2 text-md-body-1 text-justify ">
              Equipe altamente qualificada e experiente. Identificamos e resolvemos de forma rápida e eficaz com serviço de qualidade visando a satisfação total do cliente.
            </p>
            <p class="text-body-2 text-md-body-1 text-justify ">
              Utilizamos equipamentos modernos e seguros, garantindo um padrão de qualidade e com respeito ao meio ambiente. Nossos caminhões são de 7m³ e 14m³.
            </p>
            <p class="text-body-2 text-md-body-1 text-justify ">
              Entendemos a importância de uma fossa funcionando adequadamente para o bom funcionamento do seu sistema de esgoto. Portanto, estamos disponíveis de segunda a sábado para sua satisfação. Conheça nossos serviços.
            </p>
          </div>
        </v-col>
    </v-row>
</template>

<script>
import {ref} from 'vue'
export default{
    name: 'MainSec',
    setup(){
        const imagem = ref('./img/truck2.png')



        return{
            imagem
        }
    }
}
</script>
<style>
.img-class{
  size: cover;
  width: 100%;
  height: auto;
}


.borda{
  border: 1px solid red;
}


@media (min-width: 960px) and (max-width: 1400px){
  
}
</style>