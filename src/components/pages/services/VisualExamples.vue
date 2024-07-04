<template>
    <section class="visual-examples">
        <div class="container">
            <div class="row">
                <div class="col-md-12 section-title text-center">
                    <h2>Visaul Examples</h2>
                    <p>The clipping path service is a us based post product house.</p>
                    <div class="divide-separator divide-center"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="visual-examples-wrapper">
                        <div class="grid-wrapper">
                            <div class="before-after">
                                <ImgComparisonSlider class="coloured-slider">
                                    <!-- eslint-disable -->
                                    <figure slot="first" class="before">
                                        <img slot="first" style="object-fit: cover; width : 100%;" src="https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/04/2777-Before.jpg?w=800&ssl=1" />
                                        <figcaption>Before</figcaption>
                                    </figure>
                                    <figure slot="second" class="after">
                                        <img slot="second" style="object-fit: cover; width : 100%;" src="https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/04/2777-After.jpg?w=800&ssl=1" />
                                        <figcaption>After</figcaption>
                                    </figure>
                                    <div slot="handle">
                                        <div class="bf-circle">
                                            <i class="bi bi-caret-left-fill"></i>
                                            <i class="bi bi-caret-right-fill"></i>
                                        </div>
                                    </div>
                                    <!-- eslint-enable -->
                                </ImgComparisonSlider>
                            </div>
                            <div class="tall">
                                <ImgComparisonSlider class="coloured-slider">
                                    <!-- eslint-disable -->
                                    <figure slot="first" class="before">
                                        <img slot="first" style="object-fit: cover;" src="https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/04/81B9383____Before-1-1.jpg?w=800&ssl=1" />
                                        <figcaption>Before</figcaption>
                                    </figure>
                                    <figure slot="second" class="after">
                                        <img slot="second" style="object-fit: cover;" src="https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/04/81B9383____After-1-2.jpg?w=800&ssl=1" />
                                        <figcaption>After</figcaption>
                                    </figure>
                                    <div slot="handle">
                                        <div class="bf-circle">
                                            <i class="bi bi-caret-left-fill"></i>
                                            <i class="bi bi-caret-right-fill"></i>
                                        </div>
                                    </div>
                                    <!-- eslint-enable -->
                                </ImgComparisonSlider>
                            </div>
                            <div class="tall wide">
                                <ImgComparisonSlider class="coloured-slider">
                                    <!-- eslint-disable -->
                                    <figure slot="first" class="before">
                                        <img slot="first" style="width: 100%" src="https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/04/8105518___Before-1.jpg?w=800&ssl=1" />
                                        <figcaption>Before</figcaption>
                                    </figure>
                                    <figure slot="second" class="after">
                                        <img slot="second" style="width: 100%" src="https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/04/8105518___After-1-1.jpg?w=800&ssl=1" />
                                        <figcaption>After</figcaption>
                                    </figure>
                                    <div slot="handle">
                                        <div class="bf-circle">
                                            <i class="bi bi-caret-left-fill"></i>
                                            <i class="bi bi-caret-right-fill"></i>
                                        </div>
                                    </div>
                                    <!-- eslint-enable -->
                                </ImgComparisonSlider>
                            </div>
                            <div>
                                <ImgComparisonSlider class="coloured-slider">
                                    <!-- eslint-disable -->
                                    <figure slot="first" class="before">
                                        <img slot="first" style="width: 100%" src="https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/04/IMG_3926___Before-1.jpg?w=800&ssl=1" />
                                        <figcaption>Before</figcaption>
                                    </figure>
                                    <figure slot="second" class="after">
                                        <img slot="second" style="width: 100%" src="https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/04/IMG_3926___After-1.jpg?w=800&ssl=1" />
                                        <figcaption>After</figcaption>
                                    </figure>
                                    <div slot="handle">
                                        <div class="bf-circle">
                                            <i class="bi bi-caret-left-fill"></i>
                                            <i class="bi bi-caret-right-fill"></i>
                                        </div>
                                    </div>
                                    <!-- eslint-enable -->
                                </ImgComparisonSlider>
                            </div>
                            <div class="wide">
                                <ImgComparisonSlider class="coloured-slider">
                                    <!-- eslint-disable -->
                                    <figure slot="first" class="before">
                                        <img slot="first" style="width: 100%" :src.lazy="beforeImg" />
                                        <figcaption>Before</figcaption>
                                    </figure>
                                    <figure slot="second" class="after">
                                        <img slot="second" style="width: 100%" :src.lazy="afterImg" />
                                        <figcaption>After</figcaption>
                                    </figure>
                                    <div slot="handle">
                                        <div class="bf-circle">
                                            <i class="bi bi-caret-left-fill"></i>
                                            <i class="bi bi-caret-right-fill"></i>
                                        </div>
                                    </div>
                                    <!-- eslint-enable -->
                                </ImgComparisonSlider>
                            </div>
                            <div>
                                <ImgComparisonSlider class="coloured-slider">
                                    <!-- eslint-disable -->
                                    <figure slot="first" class="before">
                                        <img slot="first" style="width: 100%" :src.lazy="beforeImg" />
                                        <figcaption>Before</figcaption>
                                    </figure>
                                    <figure slot="second" class="after">
                                        <img slot="second" style="width: 100%" :src.lazy="afterImg" />
                                        <figcaption>After</figcaption>
                                    </figure>
                                    <div slot="handle">
                                        <div class="bf-circle">
                                            <i class="bi bi-caret-left-fill"></i>
                                            <i class="bi bi-caret-right-fill"></i>
                                        </div>
                                    </div>
                                    <!-- eslint-enable -->
                                </ImgComparisonSlider>
                            </div>
                            <div>
                                <ImgComparisonSlider class="coloured-slider">
                                    <!-- eslint-disable -->
                                    <figure slot="first" class="before">
                                        <img slot="first" style="width: 100%" :src.lazy="beforeImg" />
                                        <figcaption>Before</figcaption>
                                    </figure>
                                    <figure slot="second" class="after">
                                        <img slot="second" style="width: 100%" :src.lazy="afterImg" />
                                        <figcaption>After</figcaption>
                                    </figure>
                                    <div slot="handle">
                                        <div class="bf-circle">
                                            <i class="bi bi-caret-left-fill"></i>
                                            <i class="bi bi-caret-right-fill"></i>
                                        </div>
                                    </div>
                                    <!-- eslint-enable -->
                                </ImgComparisonSlider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import { ImgComparisonSlider } from '@img-comparison-slider/vue';
export default {
    components: {
        ImgComparisonSlider,
    },
    data() {
        return {
            beforeImg: `https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/04/IMG_3313-After.jpg?w=800&ssl=1`,
            afterImg: `https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/04/IMG_3313-Before.jpg?w=800&ssl=1`, 
        }
    },
}
</script>
<style scoped>

/* Main CSS */
.grid-wrapper > div {
	display: flex;
	justify-content: center;
	align-items: center;
    overflow: hidden
}
.grid-wrapper > div > img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 5px;
}

.grid-wrapper {
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(auto-fit, minmax(252px, 1fr));
	grid-auto-rows: 200px;
	grid-auto-flow: dense;
}
.grid-wrapper .wide {
	grid-column: span 2;
}
.grid-wrapper .tall {
	grid-row: span 2;
}
.grid-wrapper .big {
	grid-column: span 2;
	grid-row: span 2;
}
.bf-circle {
    border: 3px solid #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    box-shadow: 0 0 12px rgba(51, 51, 51, .5);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    outline-width: 3px;
    outline-color: transparent;
    background-color: #2ebcd4;
}
.bf-circle i {
    color: #fff;
}
</style>