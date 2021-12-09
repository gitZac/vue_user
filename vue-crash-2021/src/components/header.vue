<template>
    <header>
        <h1>{{ title }}</h1>
        <Button bg_color="blue" text="Click Here" />
    </header>
</template>

<script>
import Button from './Button';

export default {
    name: 'Header',
    props: {
        title: {
            type: String,
            default: 'Title goes here'
        }
    },
    components: {
        Button, 
    },
}

</script>

<style scoped>

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

</style>
