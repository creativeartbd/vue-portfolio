<template>
    <div class="common-questions" :style="{ backgroundColor: bgColor }" v-if="data">
        <div class="container">
            <div class="row">
                <div class="col-md-6 section-title">
                    <h2 v-if="data.section_title">{{ data.section_title }}</h2>
                    <p v-if="data.section_sub_title">{{ data.section_sub_title }}</p>
                    <div class="divide-separator divide-center"></div>
                    <img v-if="data.section_image" :src="data.section_image" />
                </div>
                <div class="col-md-6">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item" v-for="(question, index) in data.add_questions" :key="index">
                            <h2 class="accordion-header" :id="'heading' + index">
                                <button
                                    class="accordion-button"
                                    :class="{ collapsed: index !== 0 }"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    :data-bs-target="'#collapse' + index"
                                    :aria-expanded="index === 0"
                                    :aria-controls="'collapse' + index"
                                >
                                    {{ question.question_title }}
                                </button>
                            </h2>
                            <div
                                :id="'collapse' + index"
                                class="accordion-collapse collapse"
                                :class="{ show: index === 0 }"
                                :aria-labelledby="'heading' + index"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body" v-html="question.question_description"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["color", "data"],
    data() {
        return {
            bgColor: this.color,
        };
    },
};
</script>

<style scoped>
.common-questions {
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #fbfbfb;
}

.common-questions .accordion-header button {
    background-color: #00bcd4;
    color: #fff;
}

.common-questions .accordion-body {
    color: #999;
}

.common-questions img {
    width: 50%;
    margin: 35px auto 0 auto;
    display: block;
}
</style>
