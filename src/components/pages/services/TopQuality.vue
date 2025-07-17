<template>
    <section class="top-quality-services" v-if="data">
        <div class="container">
            <div class="banner-wrapper">
                <div class="banner-text">
                    <h2 class="mb-3" v-if="data.banner_title">{{ data.banner_title }}</h2>
                    <p v-if="data.banner_sub_title">{{ data.banner_sub_title }}</p>
                    <div class="button-group">
                        <router-link
                            :to="data.free_trial_button_location ? data.free_trial_button_location : null"
                            v-if="data.free_trial_button_text"
                            class="btn btn-default free-trial"
                        >
                            {{ data.free_trial_button_text }}
                        </router-link>

                        <router-link
                            :to="data.get_started_button_location ? data.get_started_button_location : null"
                            v-if="data.get_started_button_text"
                            class="btn btn-default get-started"
                        >
                            {{ data.get_started_button_text }}
                        </router-link>
                    </div>
                </div>
                <div class="banner-image" v-if="data.banner_image">
                    <img :src="data.banner_image" width="100%" />
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ["data"],
};
</script>
<style scoped>
.banner-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.banner-wrapper .banner-text {
    width: 50%;
}

.banner-wrapper .banner-image {
    width: 40%;
}
.top-quality-services {
    position: relative;
    background: rgb(0, 107, 212);
    background-image: linear-gradient(90deg, #c3f6ff 0%, #dfddff 100%);
}

.top-quality-services img {
    width: 400px;
    float: right;
}
.top-quality-services h2,
p {
    color: #292f34;
}

.top-quality-services .free-trial,
.get-started {
    background-color: #fff;
    color: #027dd4;
    border: none;
}

.top-quality-services .free-trial {
    margin-right: 10px;
    color: #27b4ca;
}

.top-quality-services .get-started {
    margin-right: 10px;
    color: #fff;
    background-color: #00364b;
}

.top-quality-services .button-group {
    margin-top: 30px;
    display: flex;
}
</style>
