<template>
    <div class="quotation main-content">
        <the-header-banner title="Quotation"></the-header-banner>
        <get-started></get-started>
        <benefit-with-us></benefit-with-us>
        <happy-clients></happy-clients>
        <common-questions></common-questions>
        <how-it-works></how-it-works>
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
    }
}
</script>
<style>
    
</style>