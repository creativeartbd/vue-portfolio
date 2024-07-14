<template>
    <div class="about main-content">
        <the-header-banner title="About"></the-header-banner>
        <div class="d-flex justify-content-center" v-if="!option_data">
            <div class="loader"></div>
        </div>
        <div v-else>
            <who-we-are :data="option_data.who_we_are_group"></who-we-are>
            <professional-approach :data="option_data.professional_approach_group"></professional-approach>
            <benefit-with-us :data="option_data.benefit_of_partnering_with_us_group"></benefit-with-us>
            <happy-clients :data="option_data.happy_clients_group"></happy-clients>
            <professional-approach :data="option_data.professional_approach_group"></professional-approach>
            <we-can-deliver :data="option_data.weve_accomplished_group"></we-can-deliver>
        </div>
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
    computed : {
        option_data() {
            return this.$store.state.options;
        }
    }
}
</script>