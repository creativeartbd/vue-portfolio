<template>
    <div class="order main-content">
        <the-header-banner title="Order"></the-header-banner>
        <div class="d-flex justify-content-center" v-if="!option_data">
            <div class="spinner-grow" role="status">
                <span class="visually-hidden">{{ loadingText }}</span>
            </div>
        </div>
        <div v-else>
            <get-started color="#fff" :data="option_data.get_started_with_our_services_for_free_group"></get-started>
            <common-questions color="#fbfbfb" :data="option_data.frquently_asked_questions_group"></common-questions>
            <how-it-works color="#fff" :data="option_data.how_it_works_group"></how-it-works>
        </div>
    </div>
</template>
<script>
import TheHeaderBanner from "@/components/layout/TheHeaderBanner.vue";
import GetStarted from "../components/layout/GetStarted.vue";
import HowItWorks from "../components/layout/HowItWorks.vue";
import CommonQuestions from "../components/layout/CommonQuestions.vue";

export default {
    components: {
        TheHeaderBanner,
        GetStarted,
        HowItWorks,
        CommonQuestions,
    },
    computed: {
        option_data() {
            return this.$store.state.options;
        },
    },
};
</script>
<style></style>
