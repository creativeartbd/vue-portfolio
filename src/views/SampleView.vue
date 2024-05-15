<template>
    <div class="sample">
        <the-header-banner title="Sample"></the-header-banner>
        <work-sample></work-sample>
    </div>
</template>
<script>

import TheHeaderBanner from '@/components/layout/TheHeaderBanner.vue';
import WorkSample from '@/components/pages/sample/WorkSample.vue';
export default {
    components : {
        TheHeaderBanner,
        WorkSample
    }
}
</script>
<style>
    
</style>