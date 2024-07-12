<template>
    <section class="pricing-table" v-if="data">
        <div class="container">
            <div class="row">
                <div class="col-md-12 section-title text-center">
                    <h2 v-if="data.section_title">{{ data.section_title }}</h2>
                    <p v-if="data.section_sub_title">{{ data.section_sub_title }}</p>
                    <div class="divide-separator divide-center"></div>
                </div>
            </div>
            <div class="row" v-if="data.add_pricing">
                <div class="col-md-12">
                    <nav class="pricing-tab">
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">

                            <button class="nav-link" :class="{ active: activeTab === 'All' }" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" @click="setActiveTab('All')">All</button>

                            <button class="nav-link" :class="{ active: activeTab === category.category_name }" :id="'nav-tab-' + index" data-bs-toggle="tab" :data-bs-target="'#nav-' + index" type="button" role="tab" :aria-controls="'nav-' + index" :aria-selected="activeTab === category.category_name" v-for="(category, index) in data.add_pricing" :key="index" @click="setActiveTab( category.category_name )">{{ category.category_name }}</button>

                        </div>
                    </nav>
                    <div class="tab-content pricing-tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show" :class="{ 'show active': activeTab === 'All' }" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div class="row">
                                <div class="col-md-6 col-lg-3" v-for="( pricing, pricing_index ) in allPricing" :key="pricing_index">
                                    <div class="price-table">
                                        <img v-if="pricing.pricing_image" :src="pricing.pricing_image"/>
                                        <div v-if="pricing.pricing_details" v-html="pricing.pricing_details"></div>
                                        <router-link :to="pricing.free_trial_button_location" class="btn btn-dark-default free-trial">{{ pricing.free_tiral_button_text }}</router-link>
                                        <router-link :to="pricing.order_now_button_location" class="btn btn-default order-now">{{ pricing.order_now_button_text }}</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" :class="{ 'show active': activeTab === pricing.category_name }" :id="'nav-' + pricing_index" role="tabpanel" :aria-labelledby="'nav-tab-' + pricing_index" v-for="( pricing, pricing_index ) in data.add_pricing" :key="pricing_index">
                            <div class="row">
                                <div class="col-md-6 col-lg-3" v-for="(innerPricing, innerIndex) in pricing.category_pricings" :key="innerIndex">
                                    <div class="price-table">
                                        <img v-if="innerPricing.pricing_image" :src="innerPricing.pricing_image"/>
                                        <div v-if="innerPricing.pricing_details" v-html="innerPricing.pricing_details"></div>

                                        <router-link :to="innerPricing.free_trial_button_location ? innerPricing.free_trial_button_location : ''" class="btn btn-dark-default free-trial">{{ innerPricing.free_tiral_button_text }}</router-link>

                                        <router-link :to="innerPricing.order_now_button_location ? innerPricing.order_now_button_location : ''" class="btn btn-default order-now">{{ innerPricing.order_now_button_text }}</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props : ['data'],
    data() {
        return {
            activeTab: 'All',
            allPricing : []
        }
    }, 
    methods: {
        setActiveTab(tabTitle) {
            this.activeTab = tabTitle;
        }
    }, 
    mounted() {
        let uniqueIndex = 0; // Initialize a counter for unique indices
        if ( this.data && this.data.add_pricing && Array.isArray(this.data.add_pricing)) {
            this.data.add_pricing.forEach(tab => {
                tab.category_pricings.forEach(pricing => {
                    pricing.key = uniqueIndex++;
                    this.allPricing.push(pricing);
                });
            });
        }
    }
}
</script>
<style scoped>
.pricing-table .section-title {
    padding-left : 10%;
    padding-right : 10%;
}
.pricing-table .price-table {
    text-align : center;
    padding-bottom: 30px;
    margin-bottom : 50px;
    transition: all .5s ease-in;
}

.pricing-table .free-trial {
    margin : 20px 0;
    box-shadow: none;
}

.pricing-table .price-options ul li {
    list-style : none;
    margin-bottom : 15px;
    color : #484848;
}

.pricing-table .price-table img {
    margin-bottom : 25px;
}

.pricing-table .price-table .price-start-from h2 {
    margin-bottom: 0;
}

.pricing-table .price-table .price-start-from p {
    margin-bottom: 0;
}

.pricing-table .order-now {
    width: calc(100% - 17%);
    margin: 0 auto;
    display: block;
}

.pricing-table .price-table:hover {
    -webkit-box-shadow: 0px 2px 101px -38px #c7c7c7;
    -moz-box-shadow: 0px 2px 101px -38px #c7c7c7;
    box-shadow: 0px 8px 13px 0px #0000000f !important;
    transform: scale(1.02, 1.02);
    cursor : pointer;
    transition : all ease-in .3s;
}

.pricing-table .price-table.best-price {
    -webkit-box-shadow: 0px 2px 101px -38px #c7c7c7;
    -moz-box-shadow: 0px 2px 101px -38px #c7c7c7;
    box-shadow: 0px 2px 101px -38px #c7c7c7;
    cursor : pointer;
    transition : all ease-in .3s;
}

.pricing-tab {
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #c7c7c7;
}

.pricing-tab .nav-link {
    color : #000;
    border : none;
}

.pricing-tab .nav-link.active {
    color: #fff;
    background-color: #00bcd4;
    background-image: linear-gradient(90deg, #00bcd4 0%, #0dd1ff 100%);
}

</style>