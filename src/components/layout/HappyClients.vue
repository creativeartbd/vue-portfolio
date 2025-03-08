<template>
    <div class="happy-clients" v-if="data">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="happy-clients-details">
                        <h6 class="section-top-sub" v-if="data.section_top_title">{{ data.section_top_title }}</h6>
                        <h2 v-if="data.section_title">{{ data.section_title }}</h2>

                        <swiper
                            :pagination="{ clickable: true }"
                            :slides-per-view="1"
                            :space-between="50"
                            :autoplay="{
                                delay: 2500,
                            }"
                            @swiper="onSwiper"
                            @slideChange="onSlideChange"
                            :modules="modules"
                            v-if="data.client_reviews"
                        >
                            <swiper-slide v-for="(review, index) in data.client_reviews" :key="index">
                                <div class="happy-client">
                                    <img src="@/assets/images/quote.png" class="quote" />
                                    <p v-if="review.review_content">{{ review.review_content }}</p>
                                    <div class="said-by-wrapper">
                                        <div class="said-by-image" v-if="data.reviewer_image">
                                            <img :src="data.reviewer_image" class="rounded-circle" />
                                        </div>
                                        <div class="said-by-info">
                                            <h6 v-if="review.review_by">{{ review.review_by }}</h6>
                                            <small v-if="review.reviewer_country">{{ review.reviewer_country }}</small>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
                <div class="col-md-6" v-if="data.video_url">
                    <iframe
                        width="100%"
                        height="315"
                        :src="data.video_url"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default {
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log("slide change");
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Autoplay, EffectFade, Pagination],
        };
    },
    props: ["data"],
    components: {
        Swiper,
        SwiperSlide,
    },
};
</script>
<style scoped>
.happy-clients {
    padding-top: 150px;
    padding-bottom: 150px;
    /* background-color : #fff; */
    background-image: url(https://themeim.com/wp/cliper/wp-content/uploads/2021/11/Group-5762.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
.happy-clients .happy-client {
    /* background-color : #fff; */
    height: 100%;
    position: relative;
    margin-top: 30px;
}
.said-by-wrapper {
    display: flex;
}
.said-by-wrapper .said-by-image {
    margin-right: 20px;
}
.said-by-wrapper .said-by-info h6 {
    margin-bottom: 0;
}
.happy-clients-details {
    padding-right: 50px;
    /* background: #fff; */
}
quote::after {
    content: open-quote;
    font-size: 50px;
}

img.quote {
    width: 50px;
    margin-bottom: 20px;
}
</style>
