<template>
    <div class="happy-clients">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="happy-clients-details">
                        <h6 class="section-top-sub">Clients Testimonial</h6>
                        <h2>Some Of Our Respected Happy Client Says</h2>

                        <swiper :pagination="{ clickable: true }" :slides-per-view="1" :space-between="50" :autoplay="{
                            delay: 2500,
                        }" @swiper="onSwiper" @slideChange="onSlideChange" :modules="modules">
                            <swiper-slide>
                                <div class="happy-client">
                                    <img src="@/assets/images/quote.png" class="quote"/>
                                    <p>"Welcome our digital agency. We specilize in helping besiness most like yours succeed online. From website design and development to digital marketing agency.""</p>
                                    <div class="said-by-wrapper">
                                        <div class="said-by-image">
                                            <img src="https://placehold.co/50x50" class="rounded-circle"/>
                                        </div>
                                        <div class="said-by-info">
                                            <h6>Shibbir Ahmed</h6>
                                            <small>From Canada</small>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="happy-client">
                                    <img src="@/assets/images/quote.png" class="quote"/>
                                    <p>"Photo retouching is an important part of the photo-editing process. It can be used to fix common problems"."</p>
                                    <div class="said-by-wrapper">
                                        <div class="said-by-image">
                                            <img src="https://placehold.co/50x50" class="rounded-circle"/>
                                        </div>
                                        <div class="said-by-info">
                                            <h6>John Doe</h6>
                                            <small>From UK</small>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="happy-client">
                                    <img src="@/assets/images/quote.png" class="quote"/>
                                    <p>"Photo retouching is an important part of the photo-editing process. It can be used to fix common problems.""</p>
                                    <div class="said-by-wrapper">
                                        <div class="said-by-image">
                                            <img src="https://placehold.co/50x50" class="rounded-circle"/>
                                        </div>
                                        <div class="said-by-info">
                                            <h6>John Doe</h6>
                                            <small>From UK</small>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
                <div class="col-md-6">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/MVLKrgDyMFo?si=-l2NsAGTMllbPC3n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default {
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Autoplay, EffectFade, Pagination],
        };
    },
    components: {
        Swiper,
        SwiperSlide,
    },
}
</script>
<style scoped>
.happy-clients {
    padding-top : 150px;
    padding-bottom : 150px;
    /* background-color : #fff; */
    background-image: url(https://themeim.com/wp/cliper/wp-content/uploads/2021/11/Group-5762.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
.happy-clients .happy-client {
    /* background-color : #fff; */
    height : 100%;
    position: relative;
    margin-top : 30px;
}
.said-by-wrapper {
    display: flex;
}
.said-by-wrapper .said-by-image {
    margin-right : 20px;
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
    margin-bottom : 20px;
}
</style>