<template>
    <v-row class="my-5 pb-10"     
    >
        
        <v-col cols="12" class="text-center">
            <div class="py-5">
                <h4 class="text-h3">Serviços</h4>
            </div>
            <v-spacer></v-spacer>
            <div class="w-100">
               <v-container>
                    <v-row>
                        <v-col v-for="(servico, index) in servicos" :key="index" cols="12" class="d-flex align-center justify-center px-10 py-5" >
                        
                            <v-avatar size="85" class="mx-2 avatar-class align-self-start">
                                <v-icon size="60" :color="servico.cor">{{ servico.icon }}</v-icon>
                            </v-avatar>
                            
                            <div>
                                <span class="font-weight-bold">{{ servico.titulo }}</span> 
                                <p>
                                    {{ servico.descricao }}
                                </p>
                            </div>
                        
                        </v-col>
                        <v-spacer></v-spacer>
                    </v-row>
               </v-container>
            </div>
        </v-col>
        
        
    </v-row>
</template>

<script>
export default {
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