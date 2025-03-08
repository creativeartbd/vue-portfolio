<template>
    <div class="how-it-works" :style="{ backgroundColor: bgColor }" v-if="data">
        <div class="container">
            <div class="row">
                <div class="col-md-12 section-title text-center">
                    <h2 v-if="data.section_title">{{ data.section_title }}</h2>
                    <p v-if="data.section_sub_title">{{ data.section_sub_title }}</p>
                    <div class="divide-separator divide-center"></div>
                </div>
                <div class="col-md-6" v-if="data.section_options">
                    <div class="how-it-works-list" v-for="(option, index) in data.section_options" :key="index">
                        <div class="how-it-works-number">
                            {{ index + 1 }}
                        </div>
                        <div class="how-it-works-info">
                            <h3>{{ option.title }}</h3>
                            <p>{{ option.description }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 justify-content-center align-items-center" v-if="data.section_image">
                    <div class="section-main-image">
                        <img :src="data.section_image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["color", "data"],
    data() {
        return {
            bgColor: this.color,
        };
    },
};
</script>
<style>
.how-it-works {
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #fff;
}

.section-main-image img {
    width: 80%;
}

.how-it-works .section-title {
    margin-bottom: 50px;
}

.how-it-works-list {
    position: relative;
    margin-bottom: 50px;
    display: flex;
}

.how-it-works-info {
    width: 300px;
}

.how-it-works-info h3 {
    margin-bottom: 10px;
}

.how-it-works-list:nth-child(1) .how-it-works-number {
    background-color: #a0c747;
    box-shadow: 0px 6px 12px 0px rgb(210 250 255);
}

.how-it-works-list:nth-child(2) .how-it-works-number {
    background-color: #00bcd4;
    box-shadow: 0px 6px 12px 0px rgb(210 250 255);
}

.how-it-works-list:nth-child(3) .how-it-works-number {
    background-color: #f89748;
    box-shadow: 0px 6px 12px 0px rgb(210 250 255);
}

.how-it-works-number {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: 8px solid #fff;
    margin-bottom: 20px;
    font-size: 25px;
    box-shadow: 0px 6px 12px 0px rgb(210 250 255);
    margin-right: 20px;
}

.how-it-works-bg-2 {
    background-color: #6b67ff;
    border: 8px solid #fff;
    box-shadow: 0px 6px 12px 0px rgb(107 103 255);
}

.how-it-works-bg-3 {
    background-color: #f89847;
    border: 8px solid #fff;
    box-shadow: 0px 6px 12px 0px rgb(248 153 70);
}
</style>
