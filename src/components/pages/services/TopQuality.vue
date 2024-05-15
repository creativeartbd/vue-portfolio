<template>
    <section class="top-quality-services">
        <div class="container">
            <div class="banner-wrapper">  
                <div class="banner-text">
                    <h2 class="mb-3">Top Quality Photo Processing Services</h2>
                    <p>The clipping path service is a us based post product house. When it comes to solving any type of photo editing complication, We're Game!</p>
                    <div class="button-group">
                        <button class="btn btn-default free-trial">Free Trial</button>
                        <button class="btn btn-default get-started">Get Started</button>
                    </div>
                </div>
                <div class="banner-image">
                    <img src="https://cutoutpartner.com/wp-content/uploads/2021/09/012921-64903.png" width="100%" />
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.banner-wrapper {
    display : flex;
    justify-content: space-between;
    align-items: center;
}

.banner-wrapper .banner-text {
    width : 50%;
}

.banner-wrapper .banner-image {
    width : 40%;
}
.top-quality-services {
    position : relative;
    background: rgb(0,107,212);
    background-image: linear-gradient(90deg, #c3f6ff 0%, #DFDDFF 100%);
}

.top-quality-services img {
    width : 400px;
    float: right;
}
.top-quality-services h2, p {
    color : #46465a;
}

.top-quality-services .free-trial, .get-started {
    background-color : #fff;
    color : #027dd4;
    border : none;
}

.top-quality-services .free-trial {
    margin-right : 10px;
    color : #27b4ca;
}

.top-quality-services .get-started {
    margin-right : 10px;
    color : #fff;
    background-color : #00364b;
}

.top-quality-services .button-group {
    margin-top : 30px;
    display: flex;
}
</style>