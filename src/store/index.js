import { createStore } from 'vuex'

export default createStore({
    state: {
        options: null,
        isLoading: false, // Add a loading state
    },
    getters: {
    },
    mutations: {
        setOptions(state, data) {
            state.options = data;
            state.isLoading = false; // Set loading to false when data is set
        },
        setLoading(state, isLoading) {
            state.isLoading = isLoading; // Mutation to update the loading state
        },
    },
    actions: {
        getOptions(context) {

            context.commit('setLoading', false); // Set loading to true when starting to fetch
            // Assuming you have the menu location and endpoint set up on your WordPress site
            const siteUrl = 'https://cutoutpartner-api.com/';
            const restApiEndpoint = '/wp-json/wp/v2/theme-options'; // Replace with the desired REST API endpoint
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
                context.commit('setOptions', data);
                context.commit('setLoading', true); // Ensure loading is set to false on error
            })
            .catch(error => {
                context.commit('setLoading', false); // Ensure loading is set to false on error
                console.error('Error fetching data:', error);
            });
        }
    },
    modules: {
    }
})