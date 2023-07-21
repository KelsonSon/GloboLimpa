<template>
    <div class="mt-0">
        <footer class="w-100 py-5  d-flex flex-column">
            <div class="px-5 my-2 text-center">
                ©Copyright 
                <span class="text-branco">2023 Limpa Fossas Globo </span>
                 
            </div>   
            <div class="px-5 pb-3 text-center my-0">
                Desenvolvido Por
                <a class=" portfolio" target="_blank" href="https://kelsonson.neocities.org">KelsonSon</a>
            </div>
        </footer>
        <div class="text-center pt-3">
                <h3 class="text-h3">Contato</h3>
        </div>
        
        <v-row class="py-5 d-flex align-center">

            <v-col cols="12" class="px-5">
                
                <div>
                    <v-container >
                        <v-row>
                            <v-col v-for="(contato, index) in contatos" :key="index" cols="12" class="d-flex align-center my-5">
                                <v-avatar size="75" class="mx-2">
                                    <v-icon size="60" :color="contato.cor">{{ contato.icon }}</v-icon>
                                </v-avatar>
                                <div>
                                    <h3>{{ contato.titulo }}</h3>
                                    <p>
                                        {{ contato.numero }}
                                    </p>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
            </v-col>
        </v-row>
        
       
        
    </div>
</template>

<script>
export default {
    setup() {
        const contatos = [
            {titulo: 'WhatsApp', icon: 'fab fa-whatsapp', cor: 'green', numero: '(81) 99779-9013'},

            {titulo: 'Telefone', icon: 'fas fa-phone', cor: 'black', numero: '(81) 3479-4840'},

            {titulo: 'Email', icon: 'fas fa-envelope', cor: 'blue', numero: 'limpafossasglobo@gmail.com'},

            {titulo: 'Endereço', icon: 'fas fa-home', cor: 'blue', numero: 'Rua Pajuçara, 78 - Pontezinha - Cabo de Santo Agostinho - PE'},

        ]

        return{
            contatos
        }
    },
}
</script>

<style scoped>

footer{

    background: linear-gradient(90deg, rgba(32,131,173,1) 0%, rgba(31,146,191,1) 44%);
}
.btn{
    cursor: pointer;
    transition: ease-in .5;
}
.btn:hover{
    transform: scale(1.1);
}
.portfolio{
    text-decoration: none;
    transition: .5s;
    color: #f2f2f2;
}
.portfolio:hover{
    color: #ffffff;
}

</style>