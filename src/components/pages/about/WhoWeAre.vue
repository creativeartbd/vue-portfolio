<template>
    <div class="who-we-are">
        <div class="container">
            <div class="d-flex justify-content-center" v-if="!whoWeAreLoaded">
                <div class="spinner-grow" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div class="row" v-else>
                <div class="col-md-4 section-title">
                    <h2>{{ who_we_are.section_title }}</h2>
                    <p>{{ who_we_are.section_sub_title }}</p>
                    <div class="divide-separator"></div>
                </div>
                <div class="col-md-8">
                    <div class="section-content" v-html=" who_we_are.section_content"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            whoWeAreLoaded : false,
            who_we_are : '', 
            professional_approach : '',
        }
    },
    created() {
        // Assuming you have the menu location and endpoint set up on your WordPress site
        const siteUrl = 'https://cutoutpartner-api.com/';
        const restApiEndpoint = '/wp-json/wp/v2/pages/437'; // Replace with the desired REST API endpoint
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
            this.whoWeAreLoaded = true;
            this.who_we_are = data.acf.who_we_are;
        })
        .catch(error => {
            this.whoWeAreLoaded = true;
            console.error('Error fetching data:', error);
        });
    }
}
</script>
<style scoped>
.who-we-are {
    padding-top : 100px; 
    padding-bottom : 100px;
}

.about-us-logo {
    display : flex; 
    align-items : center; 
    justify-content : center;
    height : 100%;
}

.about-us-logo img {
    width : 300px;
    height : auto;
}
</style>