<template>
    <div class="header" id="navbar">
        <div class="container">
            <nav class="navbar navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret">
                <div class="container-fluid">
                    <router-link class="navbar-brand" to="/">
                        <div v-if="!isHomePage">
                            <img src="@/assets/images/logo-black.png" alt="" height="24" class="logo" />
                        </div>
                        <div v-else>
                            <img src="@/assets/images/logo-black.png" alt="" height="24" class="logo" v-if="isSticky" />
                            <img
                                src="@/assets/images/CutoutPartner-Logo-PNG4.png"
                                alt=""
                                height="24"
                                class="logo"
                                v-else
                            />
                        </div>
                    </router-link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0" v-if="option_data">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about" class="nav-link" aria-current="page">About</router-link>
                            </li>
                            <!-- {{ option_data.our_services_group }} -->
                            <li class="nav-item dropdown">
                                <router-link to="/services" class="nav-link dropdown-toggle">Services</router-link>
                                <ul class="dropdown-menu service-dropdown" aria-labelledby="servicesDropdown">
                                    <div class="dropdown-container" v-if="option_data.our_services_group.add_services">
                                        <div
                                            class="dropdown-items"
                                            v-for="(service, index) in option_data.our_services_group.add_services"
                                            :key="index"
                                        >
                                            <li class="title">
                                                <b>{{ service.service_name }}</b>
                                            </li>
                                            <li>
                                                <router-link to="/single-service" class="nav-link" aria-current="page"
                                                    >Ecommmerce photo editing services</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/single-service" class="nav-link" aria-current="page"
                                                    >Ecommmerce photo editing services</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/single-service" class="nav-link" aria-current="page"
                                                    >Ecommmerce photo editing services</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/single-service" class="nav-link" aria-current="page"
                                                    >Ecommmerce photo editing services</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/single-service" class="nav-link" aria-current="page"
                                                    >Ecommmerce photo editing services</router-link
                                                >
                                            </li>
                                        </div>
                                        <div class="dropdown-items">
                                            <li class="title"><b>Background Removal</b></li>
                                            <li>
                                                <router-link to="/single-service" class="nav-link" aria-current="page"
                                                    >Ecommmerce photo editing services</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/single-service" class="nav-link" aria-current="page"
                                                    >Ecommmerce photo editing services</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/single-service" class="nav-link" aria-current="page"
                                                    >Ecommmerce photo editing services</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/single-service" class="nav-link" aria-current="page"
                                                    >Ecommmerce photo editing services</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/single-service" class="nav-link" aria-current="page"
                                                    >Ecommmerce photo editing services</router-link
                                                >
                                            </li>
                                        </div>
                                        <div class="dropdown-items">
                                            <li class="title"><b>Image Retouching</b></li>
                                            <li>
                                                <router-link to="/single-service" class="nav-link" aria-current="page"
                                                    >Ecommmerce photo editing services</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/single-service" class="nav-link" aria-current="page"
                                                    >Ecommmerce photo editing services</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/single-service" class="nav-link" aria-current="page"
                                                    >Ecommmerce photo editing services</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/single-service" class="nav-link" aria-current="page"
                                                    >Ecommmerce photo editing services</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/single-service" class="nav-link" aria-current="page"
                                                    >Ecommmerce photo editing services</router-link
                                                >
                                            </li>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <router-link to="/sample" class="nav-link" aria-current="page">Sample</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/pricing" class="nav-link" aria-current="page">Pricing</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/contact" class="nav-link" aria-current="page">Contact</router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Help
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                                    <div class="dropdown-container">
                                        <div class="dropdown-items">
                                            <li>
                                                <router-link to="/quotation" class="dropdown-item" aria-current="page"
                                                    >Get Quotation</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/free-trial" class="dropdown-item" aria-current="page"
                                                    >Free Trial</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/upload" class="dropdown-item" aria-current="page"
                                                    >Upload</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/faq" class="dropdown-item" aria-current="page"
                                                    >Faq</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/testimonial" class="dropdown-item" aria-current="page"
                                                    >Testimonail</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/order" class="dropdown-item" aria-current="page"
                                                    >Order</router-link
                                                >
                                            </li>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSticky: false,
        };
    },
    computed: {
        isHomePage() {
            return this.$route.path === "/"; // Assuming '/' is your home page route
        },
        option_data() {
            return this.$store.state.options;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        this.$store.dispatch("getOptions");
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            const navbar = document.getElementById("navbar");
            if (window.scrollY > 150) {
                // Adjust 50 to the desired scroll distance
                navbar.classList.add("fixed-top-scroll");
                this.isSticky = true;
            } else {
                navbar.classList.remove("fixed-top-scroll");
                this.isSticky = false;
            }
        },
    },
};
</script>

<style scoped>
img.logo {
    height: 35px;
}

.navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1.5rem;
}

.navbar-nav li a {
    text-transform: uppercase;
    font-size: 14px;
    color: #000;
    font-weight: 500;
    line-height: 24px;
}

.other-page li a {
    color: #000;
}

.navbar-nav li a:hover {
    color: #00bcd4;
    background-color: transparent;
}

.fixed-top-scroll .navbar-nav li a:hover {
    color: #00bcd4 !important;
}

.fixed-top-scroll {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1030;
    /* Adjust as necessary */
    margin-right: auto;
    margin-left: auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03), 0 3px 6px rgba(0, 0, 0, 0.06);
    background-color: #fff;
}

.fixed-top-scroll .navbar-nav li a {
    color: #515151;
}

.navbar-nav .nav-link.active,
.navbar-nav .nav-link.show {
    color: #00bcd4;
}

.fixed-top-scroll .navbar-nav .nav-link.active,
.navbar-nav .nav-link.show {
    color: #00bcd4 !important;
}

.dropdown-menu {
    border-top: 3px solid #00bcd4;
    margin-top: 13px;
}

.dropdown-menu.service-dropdown {
    left: -125%;
}

.bsb-navbar {
    padding: 0 !important;
}

.dropdown-menu li a {
    color: #515151 !important;
    text-transform: capitalize;
    font-size: 14px;
    font-weight: normal;
}

.dropdown-menu .dropdown-items {
    border-right: 1px solid #ddd;
    margin-left: 15px;
    width: max-content;
}

.dropdown-menu .dropdown-items li {
    padding: 5px 0;
}

.dropdown-menu .dropdown-items li a {
    padding: 0;
}

.dropdown-menu .dropdown-items li a:hover {
    color: #00bcd4 !important;
}

.dropdown-menu .dropdown-items:last-child {
    border-right: none;
}

.dropdown-menu .dropdown-items .title {
    font-size: 15px;
    color: #000 !important;
}

.dropdown-menu .dropdown-items .title a:hover {
    color: #000 !important;
}

.dropdown-toggle::after {
    margin-left: 0.655em;
}
</style>
