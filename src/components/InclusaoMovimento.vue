<template>
    <div class="container">
        <div class="card">
        <h1>Inclusão de Movimentação</h1>
            <span v-if="step===4">sucesso</span>
            <span v-else-if="step===5">insucesso</span>
            <informacao-movimento v-if="step === 1" :step="step" @interface="step = $event"/>
            <valoracao-movimento v-else-if="step ===2" :step="step" @interface="step = $event"/>
            <detalhamento-movimento v-else-if="step === 3" :step="step" @interface="step = $event"/>
            <br/>
            <progress-bar :step="step" @interface="step = $event" />
            <a class="button" @click="save" >Eitr</a>
        </div>
    </div>
</template>

<script>

    import MovimentoService from '@/services/MovimentoService'
    import InformacaoMovimento from "./InformacaoMovimento";
    import ValoracaoMovimento from "./ValoracaoMovimento";
    import DetalhamentoMovimento from "./DetalhamentoMovimento";
    import ProgressBar from "./ProgressBar";
    export default {
        components: {ProgressBar, DetalhamentoMovimento, ValoracaoMovimento, InformacaoMovimento},
        data: () => ({
            step: 1,
            movimento: {}
        }),
        methods: {
            async save () {
                const response = await MovimentoService.create(this.movimento);
                if (response.status >= 200 && response.status < 300) {
                    this.step = 4;
                } else {
                    this.step = 5;
                }
            }
        }
    }


</script>

<style scoped>

    .container {
        padding: 0 10rem 0 10rem;
    }

    .card {
        /* Add shadows to create the "card" effect */
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border: 1px solid #d3d3d3;
        border-radius: 2rem;
        padding-bottom: 2rem;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

</style>