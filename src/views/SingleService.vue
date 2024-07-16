<template>
    <div class="services main-content">
        <!-- <the-header-banner></the-header-banner> -->
        <div class="d-flex justify-content-center" v-if="!option_data">
            <page-loader></page-loader>
        </div>
        <div v-else>
            <top-quality :data="option_data.single_services_banner_group"></top-quality>
            <visual-examples></visual-examples>
            <benefit-with-us color="#fbfbfb" :data="option_data.benefit_of_partnering_with_us_group"></benefit-with-us>
            <happy-clients :data="option_data.happy_clients_group"></happy-clients>
            <get-started :data="option_data.get_started_with_our_services_for_free_group"></get-started>
            <how-it-works color="#fff" :data="option_data.how_it_works_group"></how-it-works>
            <portrait-skin :data="option_data.portrait_skin_smoothing_group"></portrait-skin>
            <how-it-works color="#fbfbfb" :data="option_data.how_it_works_group"></how-it-works>
            <common-questions color="#fbfbfb" :data="option_data.frquently_asked_questions_group"></common-questions>
        </div>
    </div>
</template>

<script>
// import TheHeaderBanner from '@/components/layout/TheHeaderBanner.vue';
import TopQuality from '@/components/pages/services/TopQuality.vue';
import PortraitSkin from '@/components/pages/services/PortraitSkin.vue';
import VisualExamples from '@/components/pages/services/VisualExamples.vue';
import BenefitWithUs from '@/components/layout/BenefitWithUs.vue';
import HappyClients from '@/components/layout/HappyClients.vue';
import GetStarted from '@/components/layout/GetStarted.vue';
import HowItWorks from '@/components/layout/HowItWorks.vue';
import CommonQuestions from '@/components/layout/CommonQuestions.vue';

export default {
    components: {
        // TheHeaderBanner,
        TopQuality,
        VisualExamples, 
        BenefitWithUs,
        HappyClients, 
        GetStarted, 
        HowItWorks, 
        CommonQuestions, 
        PortraitSkin
    },
    computed : {
        option_data() {
            return this.$store.state.options;
        }
    }
}
</script>