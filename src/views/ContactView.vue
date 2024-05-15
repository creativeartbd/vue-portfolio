<template>
    <div class="contact main-content">
        <the-header-banner title="Contact"></the-header-banner>
        <contact-address></contact-address>
        <common-questions></common-questions>
        <contact-map></contact-map>
    </div>
</template>
<script>
import TheHeaderBanner from '@/components/layout/TheHeaderBanner.vue';
import ContactAddress from '@/components/pages/contact/ContactAddress.vue';
import ContactMap from '@/components/pages/contact/ContactMap.vue'
import CommonQuestions from '@/components/layout/CommonQuestions.vue';
export default {
    components: {
        TheHeaderBanner,
        ContactAddress, 
        ContactMap, 
        CommonQuestions
    },
}
</script>
<style scoped>
    
</style>