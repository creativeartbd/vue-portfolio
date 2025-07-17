<template>
    <div class="get-started" :style="{ backgroundColor: color }">
        <div class="container">
            <div class="row">
                <div class="col-md-6 section-title" v-if="data">
                    <div class="get-started-details">
                        <h2 v-if="data.section_title">{{ data.section_title }}</h2>
                        <p v-if="data.section_sub_title">{{ data.section_sub_title }}</p>
                        <div class="divide-separator divide-center"></div>

                        <div v-if="data.section_description" v-html="data.section_description"></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <get-started-form is-home="true"></get-started-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import GetStartedForm from "@/components/form/GetStartedForm.vue";
export default {
    props: ["data", "color"],
    components: {
        GetStartedForm,
    },
    mounted() {},
};
</script>
<style>
.get-started {
    padding: 20px 10px 10px;
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #fbfbfb;
}

.get-started ul {
    padding-left: 0;
    margin-top: 20px;
}

.get-started ul li {
    position: relative; /* Needed for absolute positioning of the pseudo-element */
    margin-bottom: 10px; /* Optional: adds space between list items */
    list-style: circle;
    list-style-position: inside;
}

.get-started-details {
    padding-right: 50px;
}
</style>
