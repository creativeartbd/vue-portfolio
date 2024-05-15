<template>
    <div class="about main-content">
        <the-header-banner title="About"></the-header-banner>
        <who-we-are></who-we-are>
        <professional-approach></professional-approach>
        <benefit-with-us></benefit-with-us>
        <happy-clients></happy-clients>
        <professional-approach></professional-approach>
        <we-can-deliver></we-can-deliver>
    </div>
</template>

<script>
import TheHeaderBanner from '@/components/layout/TheHeaderBanner.vue';
import WhoWeAre from '@/components/pages/about/WhoWeAre.vue';
import WeCanDeliver from '@/components/pages/about/WeCanDeliver.vue';
import ProfessionalApproach from '@/components/pages/about/ProfessionalApproach.vue';
import BenefitWithUs from '../components/layout/BenefitWithUs.vue';
import HappyClients from '../components/layout/HappyClients.vue';

export default {
    components: {
        TheHeaderBanner,
        WhoWeAre,
        ProfessionalApproach,
        BenefitWithUs,
        HappyClients,
        WeCanDeliver
    },
}
</script>