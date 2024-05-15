<template>
    <div class="services main-content">
        <!-- <the-header-banner></the-header-banner> -->
        <top-quality></top-quality>
        <visual-examples></visual-examples>
        <benefit-with-us color="#fbfbfb"></benefit-with-us>
        <happy-clients></happy-clients>
        <get-started></get-started>
        <how-it-works></how-it-works>
        <common-questions></common-questions>
        <portrait-skin></portrait-skin>
        <how-it-works color="#fbfbfb"></how-it-works>
    </div>
</template>

<script>
// import TheHeaderBanner from '@/components/layout/TheHeaderBanner.vue';
import TopQuality from '@/components/pages/services/TopQuality.vue';
import PortraitSkin from '@/components/pages/services/PortraitSkin.vue';
import VisualExamples from '@/components/pages/services/VisualExamples.vue';
import BenefitWithUs from '@/components/layout/BenefitWithUs.vue';
import HappyClients from '@/components/layout/HappyClients.vue';
import GetStarted from '@/components/layout/GetStarted.vue';
import HowItWorks from '@/components/layout/HowItWorks.vue';
import CommonQuestions from '@/components/layout/CommonQuestions.vue';

export default {
    components: {
        // TheHeaderBanner,
        TopQuality,
        VisualExamples, 
        BenefitWithUs,
        HappyClients, 
        GetStarted, 
        HowItWorks, 
        CommonQuestions, 
        PortraitSkin
    },
}
</script>