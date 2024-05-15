<template>
    <div class="free-trial main-content">
        <the-header-banner title="Free Trial"></the-header-banner>
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
import HowItWorks from '../components/layout/HowItWorks.vue';
import CommonQuestions from '../components/layout/CommonQuestions.vue';

export default {
    components : {
        TheHeaderBanner,
        GetStarted,
        BenefitWithUs,
        HappyClients,
        HowItWorks,
        CommonQuestions
    }
}
</script>
<style>
    
</style>