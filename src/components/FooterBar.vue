<template>
    <footer class="w-100 d-flex align-center my-0">
        <div>
            <v-img width="150" src="../../public/img/logo3.png"></v-img>
        </div>
        <v-spacer></v-spacer>
        <div>
            ©Copyright 
            <span class="text-branco">2023 Limpa Fossas Globo </span>
            Por 
            <a class=" portfolio" href="https://kelsonson.github.io/Portfolio/">KelsonSon</a>
        </div>
        <v-spacer></v-spacer>
        <div>
            <a href="#nav" class="mx-2">
                <v-icon size="40" color="white" class="btn">fas fa-arrow-alt-circle-up</v-icon>
            </a>
        </div>
    </footer>
</template>

<script>
export default {
    setup() {
        
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