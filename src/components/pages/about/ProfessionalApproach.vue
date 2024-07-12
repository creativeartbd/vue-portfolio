<template>
    <div class="pro-approach" v-if="data">
        <div class="container">
            <div class="row">
                <div class="col-md-6 section-title">
                    <h2 v-if="data.section_title">{{ data.section_title }}</h2>
                    <p v-if="data.section_sub_title">{{ data.section_sub_title }}</p>
                    <div class="divide-separator"></div>
                </div>
                <div class="col-md-6">
                    <div v-if="data.section_content" v-html="data.section_content"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props : ['data']
}
</script>
<style scoped>
.pro-approach {
    padding-top : 100px; 
    padding-bottom : 100px;
    background-color: #fbfbfb;
}
</style>