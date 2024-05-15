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
                            <div class="tall">
                                <img  alt="2" src="https://images.unsplash.com/photo-1588117472013-59bb13edafec?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60">
                            </div>
                            <div class="tall wide">
                                <img alt="3" src="https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/>
                            </div>
                            <div>
                                <img alt="1" src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" />
                            </div>
                            <div class="wide">
                                <img alt="3" src="https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/>
                            </div>
                            <div>
                                <img alt="1" src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" />
                            </div>
                            <div>
                                <img alt="1" src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" />
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
            beforeImg: `https://images.unsplash.com/photo-1588117472013-59bb13edafec?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60`,
            afterImg: `https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80`, 
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

</style>