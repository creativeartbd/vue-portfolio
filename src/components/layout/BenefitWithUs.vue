<template>
    <div class="benefit-with-us" :style="{ backgroundColor: bgColor }">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center section-title">
                    <h2>Benefit Of Partnering With Us</h2>
                    <p>Explore our suite of powerful software solutions.</p>
                    <div class="divide-separator divide-center"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 text-center">
                    <img src="@/assets/images/Edited-by-hand.png" alt="">
                    <h3 class="mt-3">Edited by hand</h3>
                    <p>Photo retouching is an important part of the photo-editing process. It can be used to fix common problems</p>
                </div>
                <div class="col-md-4 text-center">
                    <img src="@/assets/images/Pixel-Perfect.png" alt="">
                    <h3 class="mt-3">Pixel Perfect Design</h3>
                    <p>Photo retouching is an important part of the photo-editing process. It can be used to fix common problems</p>
                </div>
                <div class="col-md-4 text-center">
                    <img src="@/assets/images/24x7-Support.png" alt="">
                    <h3 class="mt-3">Edited by hand</h3>
                    <p>Photo retouching is an important part of the photo-editing process. It can be used to fix common problems</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props : ['color'],
    data() {
        return {
            bgColor : this.color
        }
    }
}
</script>
<style scoped>
.benefit-with-us {
    padding-top : 100px;
    padding-bottom : 100px;
    position : relative;
    background-color: #fff;
}

.benefit-with-us img {
    margin-bottom: 15px;
    width : 150px;
    height : 150px;
}

.benefit-with-us h3 {
    margin-bottom: 15px;
}
</style>