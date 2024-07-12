<template>
    <div class="who-we-are" v-if="data">
        <div class="container">
            <div class="row">
                <div class="col-md-4 section-title">
                    <h2 v-if="data.section_title">{{ data.section_title }}</h2>
                    <p v-if="data.section_sub_title">{{ data.section_sub_title }}</p>
                    <div class="divide-separator"></div>
                </div>
                <div class="col-md-8" v-if="data.section_content">
                    <div class="section-content" v-html=" data.section_content"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props : ['data'],
}
</script>
<style scoped>
.who-we-are {
    padding-top : 100px; 
    padding-bottom : 100px;
}

.about-us-logo {
    display : flex; 
    align-items : center; 
    justify-content : center;
    height : 100%;
}

.about-us-logo img {
    width : 300px;
    height : auto;
}
</style>