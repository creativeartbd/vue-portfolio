<template>
    <div class="benefit-with-us" :style="{ backgroundColor: bgColor }">
        <div class="container" v-if="data">
            <div class="row">
                <div class="col-12 text-center section-title">
                    <h2 v-if="data.section_title">{{ data.section_title }}</h2>
                    <p v-if="data.section_sub_title">{{ data.section_sub_title}}</p>
                    <div class="divide-separator divide-center"></div>
                </div>
            </div>
            <div class="row" v-if="data.section_options">
                <div class="col-md-4 text-center" v-for="(data, index) in data.section_options" :key="index">
                    <img :src="data.image" alt="">
                    <h3 class="mt-3">{{ data.title }}</h3>
                    <div v-html="data.description"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props : ['color', 'data'],
    data() {
        return {
            bgColor : this.color
        }
    }
}
</script>
<style scoped>
.benefit-with-us {
    padding-top : 100px;
    padding-bottom : 100px;
    position : relative;
    background-color: #fff;
}

.benefit-with-us img {
    margin-bottom: 15px;
    width : 150px;
    height : 150px;
}

.benefit-with-us h3 {
    margin-bottom: 15px;
}
</style>