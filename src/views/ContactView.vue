<template>
    <div class="contact main-content">
        <the-header-banner title="Contact"></the-header-banner>
        <div class="d-flex justify-content-center" v-if="!option_data">
            <div class="spinner-grow" role="status">
                <span class="visually-hidden">{{ loadingText }}</span>
            </div>
        </div>
        <div v-else>
            <!-- <pre>{{ option_data }}</pre> -->
            <contact-address :data="option_data.contact_us_group"></contact-address>
            <common-questions :data="option_data.frquently_asked_questions_group"></common-questions>
            <contact-map :data="option_data.contact_us_group.contact_map"></contact-map>
        </div>
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
    computed : {
        option_data() {
            return this.$store.state.options;
        }
    }
}
</script>
<style scoped>
    
</style>