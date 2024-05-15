<template>
    <div class="services main-content">
        <the-header-banner title="Pricing"></the-header-banner>
        <price-table></price-table>
    </div>
</template>

<script>
import TheHeaderBanner from '@/components/layout/TheHeaderBanner.vue';
import PriceTable from '@/components/pages/pricing/PriceTable.vue';

export default {
    components: {
        TheHeaderBanner,
        PriceTable
    },
}
</script>