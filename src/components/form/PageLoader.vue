<template>
    <div class="d-flex justify-content-center">
        <div class="spinner-grow" role="status">
            <span class="visually-hidden">{{ loadingText }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props : ['loadingText']
}
</script>