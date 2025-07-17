<template>
    <div class="services main-content">
        <!-- <the-header-banner></the-header-banner> -->
        <div class="d-flex justify-content-center" v-if="!option_data || !singleService">
            <page-loader></page-loader>
        </div>
        <div v-else>
            <top-quality :data="singleService"></top-quality>
            <visual-examples color="#fbfbfb" :data="singleService"></visual-examples>
            <benefit-with-us color="#fff" :data="option_data.benefit_of_partnering_with_us_group"></benefit-with-us>
            <happy-clients color="#fbfbfb" :data="option_data.happy_clients_group"></happy-clients>
            <get-started color="#fff" :data="option_data.get_started_with_our_services_for_free_group"></get-started>
            <portrait-skin color="#fbfbfb" :data="option_data.portrait_skin_smoothing_group"></portrait-skin>
            <how-it-works color="#fff" :data="option_data.how_it_works_group"></how-it-works>
            <common-questions color="#fbfbfb" :data="option_data.frquently_asked_questions_group"></common-questions>
        </div>
    </div>
</template>

<script>
// import TheHeaderBanner from '@/components/layout/TheHeaderBanner.vue';
import TopQuality from "@/components/pages/services/TopQuality.vue";
import PortraitSkin from "@/components/pages/services/PortraitSkin.vue";
import VisualExamples from "@/components/pages/services/VisualExamples.vue";
import BenefitWithUs from "@/components/layout/BenefitWithUs.vue";
import HappyClients from "@/components/layout/HappyClients.vue";
import GetStarted from "@/components/layout/GetStarted.vue";
import HowItWorks from "@/components/layout/HowItWorks.vue";
import CommonQuestions from "@/components/layout/CommonQuestions.vue";

export default {
    props: ["slug"],
    data() {
        return {
            currentSlug: this.slug,
            singleService: null,
        };
    },
    components: {
        TopQuality,
        VisualExamples,
        BenefitWithUs,
        HappyClients,
        GetStarted,
        HowItWorks,
        CommonQuestions,
        PortraitSkin,
    },
    computed: {
        option_data() {
            return this.$store.state.options;
        },
    },
    watch: {
        // Watch for store data changes
        option_data: {
            handler(newData) {
                if (newData) {
                    this.fetchServiceData();
                }
            },
            immediate: true, // This ensures the watcher runs immediately if data is already available
        },
        // Watch for slug changes
        currentSlug: {
            handler() {
                if (this.option_data) {
                    this.fetchServiceData();
                }
            },
        },
    },
    async beforeRouteUpdate(to, from, next) {
        this.currentSlug = to.params.slug;
        await this.fetchServiceData();
        next();
    },
    created() {
        this.currentSlug = this.slug;
        // Remove the direct call here since the watcher will handle it
        console.log("Component created with slug:", this.currentSlug);
        console.log("Option data available:", !!this.option_data);
    },
    mounted() {
        // Additional check in mounted
        if (this.option_data && !this.singleService) {
            this.fetchServiceData();
        }
    },
    methods: {
        async fetchServiceData() {
            try {
                console.log("Fetching service data for slug:", this.currentSlug);
                console.log("Option data available:", !!this.option_data);

                if (!this.option_data?.our_services_group?.add_services) {
                    console.log("Services data not available yet");
                    return;
                }

                const services = this.option_data.our_services_group.add_services;
                this.findService(services);
            } catch (error) {
                console.error("Error in fetchServiceData:", error);
            }
        },

        findService(services) {
            try {
                console.log("Searching for service with slug:", this.currentSlug);

                let foundSubService = null;
                let parentService = null;

                // Loop through each service
                for (const service of services) {
                    if (service.sub_service_group) {
                        // Loop through each sub-service in the current service
                        for (const subService of service.sub_service_group) {
                            if (subService.sub_service_slug === this.currentSlug) {
                                foundSubService = subService;
                                parentService = service;
                                break;
                            }
                        }
                        if (foundSubService) break; // Exit outer loop if found
                    }
                }

                if (foundSubService) {
                    console.log("Found sub-service:", foundSubService.sub_service_name);

                    // Use the found data
                    this.singleService = {
                        ...foundSubService,
                        parentServiceName: parentService.service_name,
                    };

                    console.log("Single service set:", this.singleService);
                } else {
                    console.log("Sub-service not found for slug:", this.currentSlug);
                    this.singleService = null;
                }
            } catch (error) {
                console.error("Error in findService:", error);
                this.singleService = null;
            }
        },
    },
};
</script>
