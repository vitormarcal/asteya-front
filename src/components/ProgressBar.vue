<template>
    <div id="progressContainerBar">

        <ul class="progressbar">
            <li class="active"></li>
            <li></li>
            <li></li>
        </ul>

    </div>

</template>
<script>
    export default {
        name: 'ProgressBar',
    }

</script>

<style scoped lang="scss">
    @import "~@/stylesheets/var";

    #progressContainerBar {
        width: 600px;
        margin: 100px  auto;

        .progressbar {
            counter-reset: step;

            li {
                list-style-type: none;
                width: 33.33%;
                float: left;
                font-size: 12px;
                position: relative;
                text-align: center;
                text-transform: uppercase;
            }

            li:before {
                width: 30px;
                height: 30px;
                content: counter(step);
                counter-increment: step;
                line-height: 30px;
                border: 2px solid $cinza-claro;
                display: block;
                text-align: center;
                margin: 0 auto 10px auto;
                border-radius: 50%;
                background-color: white;
            }

            li:after {
                width: 100%;
                height: 2px;
                content: '';
                position: absolute;
                background-color: $cinza-claro;
                top: 15px;
                left: -50%;
                z-index: -1;
            }

            li:first-child:after {
                content: none;
            }

            li.active {
                color: $ciano-escuro;
            }

            li.active:before {
                border-color: $ciano-escuro;
            }

            li.active + li:after {
                background-color: $ciano-escuro;
            }

        }

    }


</style>