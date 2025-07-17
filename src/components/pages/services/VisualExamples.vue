<template>
    <section class="visual-examples" v-if="data">
        <!-- <pre>{{ data }}</pre> -->
        <div class="container">
            <div class="row">
                <div class="col-md-12 section-title text-center">
                    <h2>Visaul Examples</h2>
                    <p>The clipping path service is a us based post product house.</p>
                    <div class="divide-separator divide-center"></div>
                </div>
            </div>
            <div class="row" v-if="data.add_visual_example && data.add_visual_example.length">
                <div class="col-md-12">
                    <div class="visual-examples-wrapper">
                        <div class="grid-wrapper">
                            <div
                                v-for="(example, exampleKey) in data.add_visual_example"
                                :key="exampleKey"
                                :class="example.class_name"
                            >
                                <ImgComparisonSlider class="coloured-slider">
                                    <!-- eslint-disable -->
                                    <figure slot="first" class="before">
                                        <img
                                            slot="first"
                                            style="object-fit: cover; width: 100%"
                                            :src="example.before_image"
                                        />
                                        <figcaption>Before</figcaption>
                                    </figure>
                                    <figure slot="second" class="after">
                                        <img
                                            slot="second"
                                            style="object-fit: cover; width: 100%"
                                            :src="example.after_image"
                                        />
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
import { ImgComparisonSlider } from "@img-comparison-slider/vue";
export default {
    props: ["data"],
    components: {
        ImgComparisonSlider,
    },
    data() {
        return {
            beforeImg: `https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/04/IMG_3313-After.jpg?w=800&ssl=1`,
            afterImg: `https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/04/IMG_3313-Before.jpg?w=800&ssl=1`,
        };
    },
};
</script>
<style scoped>
/* Main CSS */
.visual-examples {
    background-color: #effdff;
}
.grid-wrapper > div {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.grid-wrapper img {
    width: 100%;
}
.grid-wrapper > div > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}
.grid-wrapper {
    display: grid;
    grid-gap: 0px;
    grid-template-columns: repeat(auto-fit, minmax(252px, 1fr));
    grid-auto-rows: auto;
    grid-auto-flow: dense;
    cursor: pointer;
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
    box-shadow: 0 0 12px rgba(51, 51, 51, 0.5);
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

.before figcaption,
.after figcaption {
    display: none;
}

.grid-wrapper .ve-1:hover .before figcaption {
    display: block;
}

.grid-wrapper .ve-1:hover .after figcaption {
    display: block;
}

.grid-wrapper .ve-2:hover .before figcaption {
    display: block;
}

.grid-wrapper .ve-2:hover .after figcaption {
    display: block;
}

.grid-wrapper .ve-3:hover .before figcaption {
    display: block;
}

.grid-wrapper .ve-3:hover .after figcaption {
    display: block;
}

.grid-wrapper .ve-4:hover .before figcaption {
    display: block;
}

.grid-wrapper .ve-4:hover .after figcaption {
    display: block;
}

.grid-wrapper .ve-5:hover .before figcaption {
    display: block;
}

.grid-wrapper .ve-5:hover .after figcaption {
    display: block;
}

.grid-wrapper .ve-6:hover .before figcaption {
    display: block;
}

.grid-wrapper .ve-6:hover .after figcaption {
    display: block;
}

.grid-wrapper .ve-7:hover .before figcaption {
    display: block;
}

.grid-wrapper .ve-7:hover .after figcaption {
    display: block;
}

.grid-wrapper .ve-8:hover .before figcaption {
    display: block;
}

.grid-wrapper .ve-8:hover .after figcaption {
    display: block;
}

.before figcaption {
    background: #5e5e5eb5;
    border: none;
    color: #fff;
    opacity: 0.8;
    padding: 12px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    line-height: 100%;
}

.after figcaption {
    background: #5e5e5eb5;
    border: none;
    color: #fff;
    opacity: 0.8;
    padding: 12px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    line-height: 100%;
}

.before figcaption {
    left: 12px;
}

.after figcaption {
    right: 13px;
}

.before-after {
    padding: 0;
    cursor: pointer;
}
figure {
    margin: 0;
}

.coloured-slider {
    outline: none;
    position: relative;
}

.same-size .coloured-slider {
    /* width : 265px; */
    height: 303px;
}

.same-size figure {
    /* width : 265px; */
    height: 303px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.second-size .coloured-slider {
    /* width : 265px; */
    height: 608px;
}

.second-size figure {
    /* width : 265px; */
    height: 608px;
}

.third-size .coloured-slider {
    /* width : 5442px; */
    height: 608px;
}

.third-size figure {
    /* width : 542px; */
    height: 608px;
}

.visual-examples-wrapper {
    max-width: 1140px;
    margin: 0 auto;
}
</style>
