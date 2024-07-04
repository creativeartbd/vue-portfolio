<template>
    <div class="sample">
        <the-header-banner title="Sample"></the-header-banner>
        <div class="d-flex justify-content-center mt-2 mb-2" v-if="!dataLoading">
            <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
       <work-sample v-else :acf-data="acfData"></work-sample>
    </div>
</template>
<script>

import TheHeaderBanner from '@/components/layout/TheHeaderBanner.vue';
import WorkSample from '@/components/pages/sample/WorkSample.vue';
export default {
    data() {
        return {
            dataLoading : false,
            acfData : null, 
        }
    },  
    components : {
        TheHeaderBanner,
        WorkSample
    }, 
    created() {
        // Assuming you have the menu location and endpoint set up on your WordPress site
        const siteUrl = 'https://cutoutpartner-api.com/';
        const restApiEndpoint = '/wp-json/wp/v2/pages/11247?acf_format=standard'; // Replace with the desired REST API endpoint
        const username = 'dsa_clippingpathland';

        // Replace with your generated application password
        const applicationPassword = 'NZeL v7Ey s8vx mXig Z4FC lyHc';

        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(username + ':' + applicationPassword),
        });

        // Make a GET request to the WordPress REST API
        fetch(`${siteUrl}${restApiEndpoint}`, {
            method: 'GET',
            headers: headers,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            this.dataLoading = true;
            if(data.acf) {
                this.acfData = data.acf;
            }
        })
        .catch(error => {
            this.dataLoading = true;
            console.error('Error fetching data:', error);
        });
    }
}
</script>
<style>
    
</style>