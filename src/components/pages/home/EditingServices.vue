<template>
    <div class="editing-services">
        <div class="container">
            <div class="d-flex justify-content-center" v-if="!isDataLoaded">
                <div class="spinner-grow" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div class="row" v-else>
                <div class="col-12 text-center section-title">
                    <h2>{{ sectionTitle }}</h2>
                    <p>I would like to give you a unique photography experience.</p>
                    <span class="divider-separator"></span>
                </div>
                <div class="col-12">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation" v-for="(tabItem, index) in images" :key="index">
                            <button class="nav-link" :class="{ 'active': index === 0 }" :id="`tab-${index}`"
                                data-bs-toggle="tab" :data-bs-target="`#content-${index}`" type="button" role="tab"
                                :aria-controls="`content-${index}`" aria-selected="index === 0">
                                {{ tabItem.tab_name }}
                            </button>
                        </li>
                    </ul>

                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade" :class="{ 'show active': index === 0 }" :id="`content-${index}`"
                            role="tabpanel" :aria-labelledby="`tab-${index}`" v-for="(tabItem, index) in images"
                            :key="`content-${index}`">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="ods-mini-wrapper" v-for="(mini_image, mini_index) in tabItem.tab_images"
                                        :key="mini_index">
                                        <div class="ods-mini-img">
                                            <img :src="mini_image.mini_image" @click="handleClick(mini_image)" />
                                            <h6 @click="handleClick(mini_image)">Portrait</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="before-after">
                                       
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

                                    <div class="before-after-bottom">
                                        <a href="#">Discover this service</a>
                                        <a href="#">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';
export default {
    components: {
        ImgComparisonSlider,
    },
    data() {
        return {
            isDataLoaded: false,
            images: null,
            sectionTitle: null,
            sectionSubtitle: null,
            beforeImg: null,
            afterImg: null, 
        }
    },
    created() {
        // Assuming you have the menu location and endpoint set up on your WordPress site
        const siteUrl = 'https://cutoutpartner-api.com/';
        const restApiEndpoint = 'wp-json/wp/v2/pages/531?acf_format=standard'; // Replace with the desired REST API endpoint
        const username = 'dsa_clippingpathland';

        // Replace with your generated application password
        const applicationPassword = 'NZeL v7Ey s8vx mXig Z4FC lyHc';

        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(username + ':' + applicationPassword),
        });

        // Make a GET request to the WordPress REST API
        fetch(`${siteUrl}${restApiEndpoint}`, {
            method: 'GET',
            headers: headers,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            this.isDataLoaded = true;
            this.sectionTitle = data.acf.section_title;
            this.images = data.acf.tab_name.tab_repeater;
            this.handleClick(this.images[0].tab_images[0]);
        })
        .catch(error => {
            this.isDataLoaded = false;
            console.error('Error fetching data:', error);
        });
    },
    methods: {
        handleClick(mini_image) {
            this.beforeImg = mini_image.before_image;
            this.afterImg = mini_image.after_image;
        }
    }
}
</script>

<style scoped>

:host(:focus) {
    outline: none !important;
}

.editing-services {
    padding-top: 100px;
    padding-bottom: 50px;
    background-color: #fff;
    background-image: url('../../../assets/images/background.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-color: #f5feff;
    background-color: transparent;
    background-image: linear-gradient(90deg, #c3f6ff 0%, #DFDDFF 100%);
}

.editing-services .nav-item button {
    color: #000;
}

.editing-services .ods-mini-img {
    box-shadow: 0px 0px 30px 0px rgba(43.00000000000019, 27, 154, 0.08);
    border-radius: 3px;
    margin-bottom: 15px;
    background-color: #fff;
    padding : 3px;
}

.editing-services .ods-mini-img img {
    transition: transform 0.4s ease-in-out;
    margin-bottom: 10px;
    object-fit: cover;
    width : 100%;
    height : 156px;
}

.editing-services .ods-mini-img img:hover {
    transform: scale(1.06);
}

.editing-services .ods-mini-img:hover h6 {
    color : #00bcd4;
    cursor: pointer;
}

.before,
.after {
    margin: 0;
}

.before figcaption,
.after figcaption {
    background: #5e5e5eb5;
    border: none;
    color: #fff;
    opacity: 0.8;
    padding: 12px;
    position: absolute;
    top: 10%;
    transform: translateY(-50%);
    line-height: 100%;
}

.before figcaption {
    left: 12px;
}

.after figcaption {
    right: 12px;
}

.before-after{
    box-shadow: 0px 13px 38px 0px rgba(59.000000000000014, 190, 255, 0.16);
    padding: 0;
    cursor: pointer;
    background: #d5e7ff;
}

.coloured-slider {
    --divider-color: rgba(255, 255, 255, 1);
    --default-handle-color: rgba(255, 255, 255, 1);
    --divider-width : 3px;
}

.bf-circle {
    border: 3px solid #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    box-shadow: 0 0 12px rgba(51,51,51,.5);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    outline-width: 3px;
    outline-color: transparent;
    background-color: #2ebcd4;
}

.bf-circle i {
    color : #fff;
}

.before-after-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}

.before-after-bottom a {
    text-decoration: none;
    color: #000;
}

.before-after-bottom a:hover {
    font-style: normal;
    color: #2ebcd4;
}

.ods-mini-wrapper {
    width: 156px;
    margin-right: 15px;
    padding : 0;
    display: inline-block;
}

</style>