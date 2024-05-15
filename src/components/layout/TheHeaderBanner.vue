<template>
    <div class="header-banner">
        <div class="header-content">
            <h3>{{ title }}</h3>
            <p><router-link to="/">Home</router-link> / {{ title }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props : {
        title : {
            type : String,
            default : 'Page title'
        }
    }, 
}
</script>
<style scoped>

.header-banner {
    position: relative;
    background-image: url('../../assets/images/top-bg.svg');
    /* background-attachment: fixed; */
    background-repeat: no-repeat;
    background-size: cover;
    height : 300px;
    background-size: cover;
    background-position: center center;
}


.header-banner .header-content {
    position : absolute;
    top : 50%;
    left : 50%; 
    transform : translate(-50%, -50%);
    z-index : 2;
    text-align: center;
}

.header-banner .header-content h3  {
    font-size:  30px;
    margin-bottom: 15px;
}

.header-banner .header-content h3, p {
    color : #fff;
}

.header-banner img {
    object-fit: cover;
    height: 300px;
    width: 100%;
    object-position: center center;
}

.header-banner-overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: #000;
    opacity: .5;
}

.header-content a {
    color: #fff;
}
</style>