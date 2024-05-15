<template>
    <div class="call-in-action">
        <div class="container">
            <page-loader v-if="!isLoading"></page-loader>
            <div class="row" v-else>
                <div class="col-md-4">
                    <h2 v-if="option_data.action_title">{{ option_data.action_title }}</h2>
                </div>
                <div class="col-md-3"></div>
                <div class="col-md-5">
                    <p v-if="option_data.action_details">{{ option_data.action_details }}</p>
                    <router-link :to="option_data.where_to_go">
                        <a class="btn btn-dark-default" v-if="option_data.action_button_text">{{ option_data.action_button_text }}</a>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PageLoader from '@/components/form/PageLoader.vue'
export default {
    computed : {
        option_data() {
            return this.$store.state.options;
        },
        isLoading() {
            return this.$store.state.isLoading; // Accessing isLoading directly from the state
        }
    },
    components : {
        PageLoader,
    },
    mounted() {
        this.$store.dispatch('getOptions');
    },
}
</script>
<style scoped>
.call-in-action h2, p {
    color : #09364b;
}

.call-in-action-btn {
    border : none;
    background-color : #2ebcd4;
    padding : 10px 50px;
    border-radius : 5px;
    color : #fff;
}
.call-in-action {
    padding: 70px;
    background-color: #2EBCD4;
    background-image: url("https://themeim.com/wp/cliper/wp-content/uploads/2021/11/3334703.png");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
}

@media ( max-width: 768px) { 
    
    .call-in-action  {
        text-align: center;
        padding : 50px 15px;
    }
    
    .call-in-action-btn {
        float : none;
    }
}

</style>

