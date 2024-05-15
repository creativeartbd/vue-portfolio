<template>
    <div class="get-started">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="get-started-details">
                        <div class="section-title">
                            <h2>Get Started with <br/> Our Services for Free</h2>
                            <p> would like to give you a unique photography experience, built to serve you best and capture your special moments for you and your families creatively and beautifully.</p>
                        </div>
                        <ul>
                            <li>Greater Efficiency</li>
                            <li>Cost-Effectiveness</li>
                            <li>Repaid Turnaround Times</li>
                        </ul>
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
import GetStartedForm from '@/components/form/GetStartedForm.vue';
export default {
    components : {
        GetStartedForm
    }
}
</script>
<style>
.get-started {
    padding: 20px 10px 10px;
    padding-top : 100px;
    padding-bottom : 100px;
    background-color: #fbfbfb;
}

.get-started ul {
    padding-left : 0;
    margin-top : 20px;
}

.get-started ul li {
    position: relative; /* Needed for absolute positioning of the pseudo-element */
    margin-bottom: 10px; /* Optional: adds space between list items */
    list-style: circle;
    list-style-position: inside;
}

.get-started-details {
    padding-right : 50px;
}
</style>