<template>
    <footer class="footer">
        <p class="footer__mention">
            Made by Nicolas Durocher - 2019
        </p>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
    margin: 10px 0 0;
    border-top:1px solid lightgrey;
    &__mention {
        font-size:12px;
        padding:10px 0;
        margin:0 auto;
    }
}

</style>