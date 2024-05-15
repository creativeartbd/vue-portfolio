<template>
    <div class="order main-content">
        <the-header-banner title="Order"></the-header-banner>
        <get-started></get-started>
        <common-questions color="#fff"></common-questions>
        <how-it-works color="#fbfbfb"></how-it-works>
    </div>
</template>
<script>

import TheHeaderBanner from '@/components/layout/TheHeaderBanner.vue';
import GetStarted from '../components/layout/GetStarted.vue';
import HowItWorks from '../components/layout/HowItWorks.vue';
import CommonQuestions from '../components/layout/CommonQuestions.vue';

export default {
    components : {
        TheHeaderBanner,
        GetStarted, 
        HowItWorks,
        CommonQuestions, 
    }
}
</script>
<style>
    
</style>