<template>
    <section class="contact-address">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="contact-info">
                        <p>Get in touch wiht us</p>
                        <h2 class="mb-3">We're looking forward to hearing from you!</h2>
                        <div class="divide-separator"></div>
                        <img src="@/assets/images/contact-us.svg" alt="" class="mt-5">
                    </div>
                </div>
                <div class="col-md-6">
                    <get-started-form is-home="true"></get-started-form>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="contact-box">
                        <i class="bi bi-envelope-open"></i>
                        <div class="contact-details">
                            <h5>Tab/click to Email</h5>
                            <p>contact@cutoutpartner.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="contact-box">
                        <i class="bi bi-whatsapp"></i>
                        <div class="contact-details">
                            <h5>Tab/click to Email</h5>
                            <p>+8801671133639</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="contact-box">
                        <i class="bi bi-telephone"></i>
                        <div class="contact-details">
                            <h5>Tab/click to Email</h5>
                            <p>+8801671133639</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="contact-box">
                        <i class="bi bi-skype"></i>
                        <div class="contact-details">
                            <h5>Tab/click to Email</h5>
                            <p>babuout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import GetStartedForm from '@/components/form/GetStartedForm.vue';

export default {
    components : {
        GetStartedForm, 
    }
}
</script>
<style scoped>
.contact-box {
    display: flex;
    align-items: center;
    margin-bottom : 40px;
    background-color: #fbfbfb;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 1px 1px 1px #ddd;
    margin-top : 100px;
    transition: all ease-in .3s;
    border-bottom: 7px solid #2ebcd4;
}

.contact-box:hover {
    cursor: pointer;
    transform: scale(1.06);
}

.contact-info {
    margin-right: 100px;
}

.contact-details {
    margin-left: 10px;
}

.contact-details p {
    margin-bottom : 0;
    color : #000;
}

.contact-box h5 {
    font-weight:  normal;
}

.contact-box i {
    color: #00bcd4;
    font-size: 30px;
}

@media ( max-width: 768px) { 
    .contact-box {
        margin-top : 15px; 
        margin-bottom : 15px;
    }

    .get-started-form {
        margin-top : 50px; 
        margin-bottom : 50px;
    }

    .contact-info {
        margin-right: 15px;
    }
}

</style>