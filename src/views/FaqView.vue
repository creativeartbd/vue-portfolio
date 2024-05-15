<template>
    <div class="faq">
        <the-header-banner title="Faq"></the-header-banner>
        <common-questions></common-questions>
        <how-it-works></how-it-works>
        <happy-clients></happy-clients>
        <benefit-with-us></benefit-with-us>
    </div>
</template>
<script>

import TheHeaderBanner from '@/components/layout/TheHeaderBanner.vue';
import BenefitWithUs from '../components/layout/BenefitWithUs.vue';
import HappyClients from '../components/layout/HappyClients.vue';
import CommonQuestions from '../components/layout/CommonQuestions.vue';
import HowItWorks from '../components/layout/HowItWorks.vue';

export default {
    components : {
        TheHeaderBanner,
        BenefitWithUs,
        HappyClients,
        CommonQuestions,
        HowItWorks
    }
}
</script>
<style>
    
</style>