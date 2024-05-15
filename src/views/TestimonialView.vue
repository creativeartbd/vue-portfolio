<template>
    <div class="testimonial main-content">
        <the-header-banner title="Testimonial"></the-header-banner>
        <benefit-with-us></benefit-with-us>
        <happy-clients></happy-clients>
        <who-we-are></who-we-are>
        <professional-approach></professional-approach>
        <we-can-deliver></we-can-deliver>
        <common-questions></common-questions> 
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
}
</script>
<style>
    
</style>