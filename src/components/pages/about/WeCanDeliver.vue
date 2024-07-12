<template>
    <div class="we-can-deliver" v-if="data">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title text-center">
                        <h2 v-if="data.section_title">{{ data.section_title }}</h2>
                        <p v-if="data.section_sub_title">{{ data.section_sub_title }}</p>
                        <div class="divide-separator divide-center"></div>
                    </div>
                </div>
            </div>
            <div class="row" v-if="data.section_options">
                <div class="col-md-3" v-for="(box, index) in data.section_options" :key="index">
                    <div class="deliver-item">
                        <h3 v-if="box.number">{{ box.number }}</h3>
                        <h5 v-if="box.title">{{ box.title }}</h5>
                        <p v-if="box.content">{{ box.content }}</p>
                    </div>
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
.we-can-deliver {
    padding-top : 100px;
    padding-bottom : 100px;
    background-color: #fbfbfb;

    background-image: url(https://themeim.com/wp/cliper/wp-content/uploads/2021/11/counter_bg.png);

    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.we-can-deliver .section-title {
    margin-bottom: 70px;
}

.deliver-item {
    text-align: center;
    background: #fff;
    padding: 45px 20px;
    max-height: 245px;
    display: block;
    position: relative;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgb(121 215 229 / 43%), 0 3px 6px rgba(0, 0, 0, 0.06);
    border-left: 6px solid #1e6570;
}

.deliver-item h3 {
    font-size : 40px;
    font-weight : normal;
    margin-bottom: 20px;
    color: #00364b;
}

.deliver-item h5 {
    margin-bottom: 20px;
    font-size: 16px;
    color : #00364b;
}
</style>