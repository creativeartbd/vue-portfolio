<template>
    <div class="quotation main-content">
        <the-header-banner title="Quotation"></the-header-banner>
        <div class="d-flex justify-content-center" v-if="!option_data">
            <div class="spinner-grow" role="status">
                <span class="visually-hidden">{{ loadingText }}</span>
            </div>
        </div>
        <div v-else>
            <get-started :data="option_data.get_started_with_our_services_for_free_group"></get-started>
            <benefit-with-us :data="option_data.benefit_of_partnering_with_us_group"></benefit-with-us>
            <happy-clients :data="option_data.happy_clients_group"></happy-clients>
            <common-questions :data="option_data.frquently_asked_questions_group"></common-questions>
            <how-it-works :data="option_data.how_it_works_group"></how-it-works>
        </div>
    </div>
</template>

<script>    

import TheHeaderBanner from '@/components/layout/TheHeaderBanner.vue';
import GetStarted from '../components/layout/GetStarted.vue';
import BenefitWithUs from '../components/layout/BenefitWithUs.vue';
import HappyClients from '../components/layout/HappyClients.vue';
import CommonQuestions from '../components/layout/CommonQuestions.vue';
import HowItWorks from '../components/layout/HowItWorks.vue';

export default {
    components : {
        TheHeaderBanner,
        GetStarted,
        BenefitWithUs,
        HappyClients,
        CommonQuestions,
        HowItWorks
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