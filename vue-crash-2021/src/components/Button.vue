<template>
    <button @click="onClick()" :style="{background: bg_color}" class="btn">{{text}}</button>
</template>

<script>

export default {
    name: 'Button',
    props: {
        text: String,
        bg_color: String
    },
    methods: {
        onClick(){
            console.log("Clicked");
        }
    }
}
</script>
