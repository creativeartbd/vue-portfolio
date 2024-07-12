<template>
    <div class="sample">
        <the-header-banner title="Sample"></the-header-banner>
        <div class="d-flex justify-content-center" v-if="!option_data">
            <div class="spinner-grow" role="status">
                <span class="visually-hidden">{{ loadingText }}</span>
            </div>
        </div>
        <div v-else>
            <pre>
                {{ option_data }}
            </pre>
            <!-- <work-sample></work-sample> -->
        </div>
    </div>
</template>
<script>

import TheHeaderBanner from '@/components/layout/TheHeaderBanner.vue';
// import WorkSample from '@/components/pages/sample/WorkSample.vue';
export default {
    components : {
        TheHeaderBanner,
        // WorkSample
    }, 
    computed : {
        option_data() {
            return this.$store.state.options;
        }
    }
}
</script>
<style>
</style>