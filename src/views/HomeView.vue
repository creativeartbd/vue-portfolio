<template>
    <div class="home main-content">
        <home-slider></home-slider>
        <our-passion></our-passion>
        <editing-services></editing-services>
        <benefit-with-us></benefit-with-us>
        <happy-clients></happy-clients>
        <get-started></get-started>
        <how-it-works></how-it-works>
        <common-questions></common-questions>
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
    }
}
</script>

<style></style>