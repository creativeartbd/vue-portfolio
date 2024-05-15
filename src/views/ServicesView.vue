<template>
    <div class="services main-content">
        <the-header-banner title="Services"></the-header-banner>
        <editing-services></editing-services>
    </div>
</template>

<script>
import TheHeaderBanner from '@/components/layout/TheHeaderBanner.vue';
import EditingServices from '../components/pages/home/EditingServices.vue';

export default {
    components : {
        EditingServices,
        TheHeaderBanner
    }
}
</script>
<style></style>