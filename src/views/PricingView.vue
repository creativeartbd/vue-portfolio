<template>
    <div class="services main-content">
        <the-header-banner title="Pricing"></the-header-banner>
        <div class="d-flex justify-content-center" v-if="!option_data">
            <div class="spinner-grow" role="status">
                <span class="visually-hidden">{{ loadingText }}</span>
            </div>
        </div>
        <div v-else>
            <price-table :data="option_data.pricing_group"></price-table>
        </div>
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
    computed : {
        option_data() {
            return this.$store.state.options;
        }
    }
}
</script>