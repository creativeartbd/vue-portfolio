<template>
    <div>
        <call-in-action :cta-data="ctaData" v-if="whichPage !== '/quotation'"></call-in-action>
        <div class="footer" v-if="option_data">
            <!-- <page-loader v-if="!isLoading"></page-loader> -->
            <div class="container" v-if="option_data">
                <div class="footer-top">
                    <div class="row">
                        <div class="col-md-3">
                            <img
                                :src="option_data.footer_group.footer_logo"
                                alt=""
                                class="logo"
                                v-if="option_data.footer_group.footer_logo"
                            />
                            <div
                                v-if="option_data.footer_group.footer_about_us"
                                v-html="option_data.footer_group.footer_about_us"
                            ></div>
                        </div>
                        <div
                            class="col-md-3"
                            v-for="(link, index) in option_data.footer_group.footer_links"
                            :key="index"
                        >
                            <h3>{{ link.link_title }}</h3>
                            <div class="footer-link" v-if="link.is_link == 0">
                                <ul>
                                    <li
                                        v-for="(footer_menu, footer_menu_index) in link.link_content"
                                        :key="footer_menu_index"
                                    >
                                        <router-link v-if="footer_menu.link_location" :to="footer_menu.link_location">{{
                                            footer_menu.link_text
                                        }}</router-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="footer-link" v-else>
                                <div v-if="link.link_content_full" v-html="link.link_content_full"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="footer-bottom-content">
                                <div
                                    v-if="option_data.footer_group.footer_bottom_left_text"
                                    v-html="option_data.footer_group.footer_bottom_left_text"
                                ></div>

                                <div class="footer-social" v-if="option_data.footer_group.footer_social">
                                    <router-link
                                        :to="social.location"
                                        v-for="(social, index) in option_data.footer_group.footer_social"
                                        :key="index"
                                    >
                                        <i :class="social.social_icon"></i>
                                    </router-link>
                                </div>

                                <p
                                    class="copyright"
                                    v-if="option_data.footer_group.footer_bottom_right_text"
                                    v-html="option_data.footer_group.footer_bottom_right_text"
                                ></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import PageLoader from '@/components/form/PageLoader.vue'
import CallInAction from "@/components/layout/CallInAction.vue";
export default {
    data() {
        return {};
    },
    components: {
        // PageLoader,
        CallInAction,
    },
    computed: {
        whichPage() {
            return this.$route.path; // Assuming '/' is your home page route
        },
        option_data() {
            return this.$store.state.options;
        },
        isLoading() {
            return this.$store.state.isLoading; // Accessing isLoading directly from the state
        },
    },
    mounted() {
        // this.$store.dispatch('getOptions');
    },
};
</script>

<style>
.footer {
    padding-top: 100px;
    padding-bottom: 50px;
    background-color: #171b26;
}

.footer-top img.logo {
    width: 200px;
    margin-bottom: 20px;
    max-width: 100%;
}

.footer a,
p {
    color: #797d88;
}

.footer a:hover {
    color: #07b8d0;
}

.footer h3 {
    color: #fff;
    margin-bottom: 30px;
    font-weight: normal;
}

.footer-link ul li {
    margin-bottom: 12px;
    line-height: 20px;
}

.footer-link ul li a {
    font-size: 16px;
}

.footer-link i {
    color: #00bcd4;
    margin-right: 10px;
    font-size: 18px;
}

.footer-bottom {
    margin: 30px 0 0 0;
    border-top: 1px solid #404040;
    padding-top: 50px;
}

.footer-bottom-content {
    display: flex;
    justify-content: space-between;
}

.footer-bottom p {
    font-size: 14px;
}

.footer-bottom .footer-social i {
    color: #07b8d0;
    margin-right: 15px;
    font-size: 22px;
    cursor: pointer;
}

@media (max-width: 768px) {
    .footer h3 {
        margin-top: 30px;
    }

    .footer-bottom-content {
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .footer-bottom .footer-social {
        margin-bottom: 15px;
    }
}
</style>
