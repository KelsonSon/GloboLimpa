<template>
    <v-row class="my-5"     
    >
        <v-col cols="1" >

        </v-col>
        <v-col cols="10" class="text-center">
            <div class="py-5">
                <h4 class="text-h3">Serviços</h4>
            </div>
            <v-spacer></v-spacer>
            <div class="w-100">
               <v-container class="ma-0">
                    <v-row class="">
                        <v-col v-for="(servico, index) in servicos" :key="index" cols="4" class="d-flex align-center py-10" >
                        
                            <v-avatar size="80" class="mx-2 avatar-class">
                                <v-icon size="60" :color="servico.cor">{{ servico.icon }}</v-icon>
                            </v-avatar>
                            
                            <div>
                                <span class="font-weight-bold">{{ servico.titulo }}</span> 
                                <p>
                                    {{ servico.descricao }}
                                </p>
                            </div>
                            
                        
                        </v-col>
                    </v-row>
               </v-container>
            </div>
        </v-col>
        <v-col cols="1" >

        </v-col>
        
        
    </v-row>
</template>

<script>
export default {
    name: 'ServicoSec',
    setup() {
        const servicos = [
            {icon: 'fas fa-home', cor: 'tertiary', titulo: 'Atendimento', descricao: 'Realizamos atendimento em casas e condomínios.'},

            {icon: 'fas fa-inbox', cor: 'tertiary', titulo: 'Limpeza de fossas', descricao: 'Realizamos limpeza de fossas em geral e fossas sépticas.'},

            {icon: 'fas fa-city', cor: 'tertiary', titulo: 'Regiões', descricao: 'Recife, Cabo de Santo Agostinho e Recife. '},

            {icon: 'fas fa-industry', cor: 'tertiary', titulo: 'Limpeza industrial', descricao: 'Fazemos limpeza de fossas em indústrias.'},

            {icon: 'fas fa-truck', cor: 'tertiary', titulo: 'Caminhões', descricao: 'Possuimos caminhões de 7m³ e 14m³ de acordo com sua necessidade.'},

            {icon: 'fas fa-clock', cor: 'tertiary', titulo: 'Horário', descricao: 'Segunda à Sexta 7h às 18h e Sábado 8h às 17h'},
        ]


        return{
            servicos
        }
    },
}
</script>

<style scoped>
.avatar-class:hover{
    transition: 0.3;
    transform: scale(1.1);
    cursor: pointer;
}
</style>