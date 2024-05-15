<template>
    <div class="our-passion">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center section-title">
                    <h2>We're Passionate</h2>
                    <p>Explore our suite of powerful software solutions.</p>
                    <span class="divider-separator"></span>
                </div>
                <div class="col-md-4">
                    <div class="out-passion-image">
                        <h3>Check this image</h3>
                        <img src="@/assets/images/Pilot_Lifestyle_09_2.jpg" alt="">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="our-passion-box">
                        <h3 class="mb-4">Our Specialties</h3>
                        <p>I would like to give you a unique photography experience, built to serve you best and capture your special moments for you and your families creatively and beautifully.</p>
                        <button class="btn btn-default mt-2">See All</button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="out-passion-image">
                        <h3>Download Image</h3>
                        <img src="@/assets/images/our-model-2.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.our-passion {
    position :relative;
    overflow: hidden;
    background-color: #f6f9ff;
    padding-top: 100px;
    padding-bottom : 120px;
}

.our-passion .our-passion-box {
    background-color: #fff;
    padding: 20px;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    -webkit-box-shadow: -11px 6px 78px -11px rgba(0,0,0,0.18);
    -moz-box-shadow: -11px 6px 78px -11px rgba(0,0,0,0.18);
    box-shadow: -11px 6px 78px -11px rgba(0,0,0,0.18);
}

.out-passion-image {
    position : relative;
}

.out-passion-image img {
    height : 570px;
    object-fit: cover;
}

.out-passion-image h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #2ebcd4;
    color: #000;
    padding: 15px 30px;
    width: 90%;
    text-align: center;
    cursor: pointer;
    font-weight: normal;
    font-size : 16px;
    border-radius: 25px;
    background-color: #f6f9ffb0;
}

.out-passion-image h3:hover {
    border : 1px solid #fff;
    background-color : transparent;
    color: #000;
}
</style>