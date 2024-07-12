<template>
    <div class="testimonial main-content">
        <the-header-banner title="Testimonial"></the-header-banner>
        <div class="d-flex justify-content-center" v-if="!option_data">
            <div class="spinner-grow" role="status">
                <span class="visually-hidden">{{ loadingText }}</span>
            </div>
        </div>
        <div v-else>
            <benefit-with-us :data="option_data.benefit_of_partnering_with_us_group"></benefit-with-us>
            <happy-clients :data="option_data.happy_clients_group"></happy-clients>
            <who-we-are :data="option_data.who_we_are_group"></who-we-are>
            <professional-approach :data="option_data.professional_approach_group"></professional-approach>
            <we-can-deliver :data="option_data.weve_accomplished_group"></we-can-deliver>
            <common-questions :data="option_data.frquently_asked_questions_group"></common-questions> 
        </div>
    </div>
</template>

<script>

import TheHeaderBanner from '@/components/layout/TheHeaderBanner.vue';
import BenefitWithUs from '../components/layout/BenefitWithUs.vue';
import HappyClients from '../components/layout/HappyClients.vue';
import WhoWeAre from '@/components/pages/about/WhoWeAre.vue';
import ProfessionalApproach from '@/components/pages/about/ProfessionalApproach.vue';
import WeCanDeliver from '@/components/pages/about/WeCanDeliver.vue';
import CommonQuestions from '../components/layout/CommonQuestions.vue';

export default {
    components: {
        TheHeaderBanner,
        BenefitWithUs,
        HappyClients,
        WhoWeAre,
        ProfessionalApproach,
        WeCanDeliver,
        CommonQuestions,
    },
    computed : {
        option_data() {
            return this.$store.state.options;
        }
    }
}
</script>
<style>
    
</style>