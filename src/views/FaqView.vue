<template>
    <div class="faq">
        <the-header-banner title="Faq"></the-header-banner>
        <div class="d-flex justify-content-center" v-if="!option_data">
            <div class="spinner-grow" role="status">
                <span class="visually-hidden">{{ loadingText }}</span>
            </div>
        </div>
        <div v-else>
            <common-questions :data="option_data.frquently_asked_questions_group"></common-questions>
            <how-it-works :data="option_data.how_it_works_group"></how-it-works>
            <happy-clients :data="option_data.happy_clients_group"></happy-clients>
            <benefit-with-us :data="option_data.benefit_of_partnering_with_us_group"></benefit-with-us>
        </div>
    </div>
</template>
<script>
import TheHeaderBanner from "@/components/layout/TheHeaderBanner.vue";
import BenefitWithUs from "../components/layout/BenefitWithUs.vue";
import HappyClients from "../components/layout/HappyClients.vue";
import CommonQuestions from "../components/layout/CommonQuestions.vue";
import HowItWorks from "../components/layout/HowItWorks.vue";

export default {
    components: {
        TheHeaderBanner,
        BenefitWithUs,
        HappyClients,
        CommonQuestions,
        HowItWorks,
    },
    computed: {
        option_data() {
            return this.$store.state.options;
        },
    },
};
</script>
<style></style>
