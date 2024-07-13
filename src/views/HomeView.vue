<template>
    <div class="home main-content">
        <div class="d-flex justify-content-center" v-if="!option_data">
            <div class="spinner-grow" role="status">
                <span class="visually-hidden">{{ loadingText }}</span>
            </div>
        </div>
        <div v-else>
            <home-slider :data="option_data.home_slider_group"></home-slider>
            <our-passion :data="option_data.we_are_passionate_group"></our-passion>
            <editing-services :data="option_data.our_editing_services_group"></editing-services>
            <benefit-with-us :data="option_data.benefit_of_partnering_with_us_group"></benefit-with-us>
            <happy-clients :data="option_data.happy_clients_group"></happy-clients>
            <get-started :data="option_data.get_started_with_our_services_for_free_group"></get-started>
            <how-it-works color="#fbfbfb" :data="option_data.how_it_works_group"></how-it-works>
            <common-questions color="#fff" :data="option_data.frquently_asked_questions_group"></common-questions>
        </div>
    </div>
</template>

<script>
import HomeSlider from '../components/pages/home/HomeSlider.vue';
import OurPassion from '../components/pages/home/OurPassion.vue';
import EditingServices from '../components/pages/home/EditingServices.vue';
import BenefitWithUs from '../components/layout/BenefitWithUs.vue';
import HappyClients from '../components/layout/HappyClients.vue';
import GetStarted from '../components/layout/GetStarted.vue';
import HowItWorks from '../components/layout/HowItWorks.vue';
import CommonQuestions from '../components/layout/CommonQuestions.vue';

export default {
    components : {
        HomeSlider, 
        OurPassion, 
        EditingServices,
        BenefitWithUs,
        HappyClients, 
        GetStarted, 
        HowItWorks,
        CommonQuestions, 
    },
    computed : {
        option_data() {
            return this.$store.state.options;
        }
    }
}
</script>

<style></style>