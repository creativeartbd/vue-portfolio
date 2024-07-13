<template>
    <div class="home-slider" v-if="data">
        <swiper :slides-per-view="1" :space-between="50" :autoplay="{
            delay: 2500,
        }" @swiper="onSwiper" @slideChange="onSlideChange" :modules="modules" :effect="'fade'">
            <swiper-slide v-for="(slider, index) in data.add_sliders" :key="index">
                <img v-if="slider.slider_image" :src="slider.slider_image" />
                <div class="container slider-container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="slider-content">
                                <h2 v-if="slider.slider_title">{{ slider.slider_title}}</h2>
                                <p v-if="slider.slider_content">{{ slider.slider_content }}</p>
                                <button class="order-btn" v-if="slider.slider_button_text">{{ slider.slider_button_text }}</button>
                            </div>
                        </div>
                        <div class="col-md-6"></div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

export default {
    props : ['data'],
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = (swiper) => {
            // Access the active slide and its styles
            const activeSlide = swiper.slides[swiper.activeIndex];
            
            // Dynamically change the background image
            activeSlide.style.setProperty('background-image', "url('../../../assets/images/slider-01.jpg')", 'important');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Autoplay, EffectFade],
        };
    },
};
</script>
<style scoped>
.slider-container {
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
}

.slider-content h2{
    line-height : 1.2;
    margin-bottom : 30px;
    font-weight: 700;
    font-size: 300%;
    color : #fff;
}

.slider-content p{
    color : #fff;
}

.swiper-wrapper {
    height : 100vh;
}

.swiper-wrapper img{
    width : auto;
    max-width : 100%;
    position: absolute;
    z-index: -1;
}

/* CSS */
.order-btn {
    background: #00bcd4;
    border-radius: 999px;
    box-shadow: #00bcd4 0 10px 20px -10px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    opacity: 1;
    outline: 0 solid transparent;
    padding: 18px 50px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: fit-content;
    word-break: break-word;
    border: 0;
}
</style>