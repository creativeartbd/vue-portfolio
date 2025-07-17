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
                    <div class="divide-separator divide-center"></div>
                </div>
                <div class="col-12" v-if="hasValidData">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation" v-for="(tabItem, index) in validTabs" :key="index">
                            <button
                                class="nav-link"
                                :class="{ active: index === 0 }"
                                :id="`tab-${index}`"
                                data-bs-toggle="tab"
                                :data-bs-target="`#content-${index}`"
                                type="button"
                                role="tab"
                                :aria-controls="`content-${index}`"
                                :aria-selected="index === 0"
                            >
                                {{ tabItem.service_name }}
                            </button>
                        </li>
                    </ul>

                    <div class="tab-content" id="myTabContent">
                        <div
                            class="tab-pane fade"
                            :class="{ 'show active': index === 0 }"
                            :id="`content-${index}`"
                            role="tabpanel"
                            :aria-labelledby="`tab-${index}`"
                            v-for="(tabItem, index) in validTabsWithImages"
                            :key="`content-${index}`"
                        >
                            <div class="row">
                                <div class="col-md-8">
                                    <div
                                        class="ods-mini-wrapper"
                                        v-for="(mini_image, mini_index) in tabItem.services_images"
                                        :key="mini_index"
                                    >
                                        <div class="ods-mini-img">
                                            <img :src="mini_image.thumb_image" @click="handleClick(mini_image)" />
                                            <h6 @click="handleClick(mini_image)">
                                                {{ mini_image.thumb__image_title || "Image " + (mini_index + 1) }}
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="before-after" v-if="beforeImg && afterImg">
                                        <ImgComparisonSlider class="coloured-slider">
                                            <!-- eslint-disable -->
                                            <div class="overlay"></div>
                                            <figure slot="first" class="before">
                                                <div class="overlay"></div>
                                                <img
                                                    slot="first"
                                                    style="width: 100%"
                                                    :src="beforeImg"
                                                    @load="imageLoaded"
                                                />
                                                <figcaption>Before</figcaption>
                                            </figure>
                                            <figure slot="second" class="after">
                                                <div class="overlay"></div>
                                                <img
                                                    slot="second"
                                                    style="width: 100%"
                                                    :src="afterImg"
                                                    @load="imageLoaded"
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
                                        <div v-if="isLoading" class="loading-indicator">
                                            <div class="spinner-border" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="before-after-message" v-else>
                                        <p>Click on an image to view before/after comparison (if available)</p>
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
                <div class="col-12" v-else>
                    <div class="alert alert-info">No editing services data available at the moment.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ImgComparisonSlider } from "@img-comparison-slider/vue";

// Sample data structure for fallback
const SAMPLE_DATA = {
    our_editing_services_group: {
        add_services: [
            {
                service_name: "Our Editing Service",
                services_images: [
                    {
                        thumb_image: "https://api.cutoutpartner.com/wp-content/uploads/2025/03/2-1.jpg",
                        thumb__image_title: "Title 1",
                        before_image: "https://api.cutoutpartner.com/wp-content/uploads/2025/03/2-Before-1.jpg",
                        after_image: "https://api.cutoutpartner.com/wp-content/uploads/2025/03/2-After-1.jpg",
                    },
                    {
                        thumb_image: "https://api.cutoutpartner.com/wp-content/uploads/2025/03/OVO10179.jpg",
                        thumb__image_title: "",
                        before_image: false,
                        after_image: false,
                    },
                ],
            },
        ],
    },
};

export default {
    components: {
        ImgComparisonSlider,
    },
    data() {
        return {
            isDataLoaded: true,
            images: null,
            sectionTitle: "Our Editing Services",
            sectionSubtitle: null,
            beforeImg: null,
            afterImg: null,
            localData: null,
            isLoading: false, // Add this
        };
    },
    computed: {
        // Get data either from store or local fallback
        option_data() {
            const storeData = this.$store?.state?.options;

            // Use store data if available and valid, otherwise use local data
            if (storeData && storeData.our_editing_services_group) {
                return storeData;
            }

            return this.localData || { our_editing_services_group: { add_services: [] } };
        },

        // Check if we have valid data to display
        hasValidData() {
            return (
                this.option_data &&
                this.option_data.our_editing_services_group &&
                Array.isArray(this.option_data.our_editing_services_group.add_services) &&
                this.option_data.our_editing_services_group.add_services.length > 0
            );
        },

        // Filter tabs that have service names
        validTabs() {
            if (!this.hasValidData) {
                return [];
            }

            return this.option_data.our_editing_services_group.add_services.filter((tab) => tab && tab.service_name);
        },

        // Filter tabs that have both service names and images
        validTabsWithImages() {
            if (!this.hasValidData) {
                return [];
            }

            return this.option_data.our_editing_services_group.add_services.filter(
                (tab) => tab && tab.service_name && tab.services_images && Array.isArray(tab.services_images)
            );
        },
    },
    created() {
        // Initialize with fallback data
        this.localData = SAMPLE_DATA;

        // Set initial image
        this.$nextTick(() => {
            this.setInitialImage();
        });
    },
    mounted() {
        this.preloadImages();
    },
    methods: {
        preloadImages() {
            if (!this.hasValidData) return;

            this.validTabsWithImages.forEach((tab) => {
                tab.services_images.forEach((image) => {
                    if (image.before_image) {
                        this.preloadImage(image.before_image);
                    }
                    if (image.after_image) {
                        this.preloadImage(image.after_image);
                    }
                });
            });
        },
        preloadImage(url) {
            const img = new Image();
            img.src = url;
        },
        handleClick(mini_image) {
            if (!mini_image) return;

            this.isLoading = true; // Show loading indicator

            if (mini_image.before_image && mini_image.after_image) {
                this.beforeImg = mini_image.before_image;
                this.afterImg = mini_image.after_image;
            } else {
                this.beforeImg = null;
                this.afterImg = null;
            }
        },
        imageLoaded() {
            this.isLoading = false; // Hide loading indicator when images are loaded
        },
        setInitialImage() {
            if (!this.hasValidData) return;

            // Find first service with images
            const firstService = this.validTabsWithImages[0];

            if (firstService && firstService.services_images) {
                // Find first image with before/after
                const firstImageWithComparison = firstService.services_images.find(
                    (img) => img && img.before_image && img.after_image
                );

                if (firstImageWithComparison) {
                    this.handleClick(firstImageWithComparison);
                }
            }
        },
    },
};
</script>

<style scoped>
.loading-indicator {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
}
:host(:focus) {
    outline: none !important;
}

.editing-services {
    padding-top: 100px;
    padding-bottom: 50px;
    background-color: #fff;
    background-image: url("../../../assets/images/background.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-color: #f5feff;
    background-color: transparent;
    background-image: linear-gradient(90deg, #c3f6ff 0%, #dfddff 100%);
}

.editing-services .nav-item button {
    color: #000;
}

.editing-services .ods-mini-img {
    box-shadow: 0px 0px 30px 0px rgba(43.00000000000019, 27, 154, 0.08);
    border-radius: 3px;
    margin-bottom: 15px;
    background-color: #fff;
    padding: 3px;
}

.editing-services .ods-mini-img img {
    transition: transform 0.4s ease-in-out;
    margin-bottom: 10px;
    object-fit: cover;
    width: 100%;
    height: 156px;
    cursor: pointer;
}

.editing-services .ods-mini-img img:hover {
    transform: scale(1.06);
}

.editing-services .ods-mini-img:hover h6 {
    color: #00bcd4;
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
    top: 50%;
    transform: translateY(-50%);
    line-height: 100%;
    display: none;
}

.before figcaption {
    left: 12px;
}

.after figcaption {
    right: 12px;
}

.before-after:hover figcaption {
    display: block;
}

.before-after {
    box-shadow: 0px 13px 38px 0px rgba(59.000000000000014, 190, 255, 0.16);
    padding: 0;
    cursor: pointer;
    background: #d5e7ff;
    position: relative;
}

.before-after-message {
    text-align: center;
    padding: 30px;
    background: #f5f5f5;
    color: #666;
    border-radius: 4px;
    margin-bottom: 20px;
}

.coloured-slider {
    --divider-color: rgba(255, 255, 255, 1);
    --default-handle-color: rgba(255, 255, 255, 1);
    --divider-width: 3px;
    position: relative;
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
    padding: 0;
    display: inline-block;
}

.alert {
    padding: 20px;
    border-radius: 5px;
}
</style>
