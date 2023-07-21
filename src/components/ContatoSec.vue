<template>
    <div class="bg-white">
        <div class="text-center pt-3">
                <h3 class="text-h3">Contato</h3>
        </div>
        <v-row class="py-5 d-flex align-center">

            <v-col cols="12" class="px-5">
                
                <div>
                    <v-container >
                        <v-row>
                            <v-col v-for="(contato, index) in contatos" :key="index" cols="6" class="d-flex align-center my-5">
                                <v-avatar size="70" class="mx-1">
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