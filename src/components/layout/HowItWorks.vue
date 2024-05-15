<template>
    <div class="how-it-works" :style="{ backgroundColor: bgColor }"> 
        <div class="container">
            <div class="row">
                <div class="col-md-12 section-title text-center">
                    <h2>How it Works</h2>
                    <p>would like to give you a unique photography experience. There are many variation
and of passages</p>
<div class="divide-separator divide-center"></div>
                </div>
                <div class="col-md-6">
                    <div class="how-it-works-list">
                        <div class="how-it-works-number">
                            1
                        </div>
                        <div class="how-it-works-info">
                            <h3>01. Order your item</h3>
                            <p>would like to give you a unique photography experience</p>
                        </div>
                    </div>
                    <div class="how-it-works-list">
                        <div class="how-it-works-number how-it-works-bg-2">
                            1
                        </div>
                        <div class="how-it-works-info">
                            <h3>02. Order your item</h3>
                            <p>built to serve you best and capture your special moments.</p>
                        </div>
                    </div>
                
                    <div class="how-it-works-list">
                        <div class="how-it-works-number how-it-works-bg-3">
                            1
                        </div>
                        <div class="how-it-works-info">
                            <h3>03. Order your item</h3>
                            <p>would like to give you a unique photography experience moments.</p>
                        </div>
                    </div>   
                </div>
                <div class="col-md-6 justify-content-center align-items-center">
                    <div class="section-main-image">
                        <img src="@/assets/images/how-it-works.png" />
                    </div>
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
<style>

.how-it-works {
    padding-top : 100px;
    padding-bottom : 100px;
    background-color : #fff;
}

.section-main-image img {
    width : 80%;
}

.how-it-works .section-title {
    margin-bottom : 50px;
} 

.how-it-works-list {
    position : relative;
    margin-bottom : 50px;
    display: flex;
    align-items: center;
}

.how-it-works-info {
    width: 300px;
}

.how-it-works-info h3 {
    margin-bottom: 10px;
}

.how-it-works-number {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: #a0c747;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: 8px solid #fff;
    margin-bottom: 20px;
    font-size : 25px;
    box-shadow: 0px 6px 12px 0px rgb(160 199 71);
    margin-right: 20px;
}

.how-it-works-bg-2 {
    background-color : #6b67ff;
    border: 8px solid #fff;
    box-shadow: 0px 6px 12px 0px rgb(107 103 255);
}

.how-it-works-bg-3 {
    background-color : #f89847;
    border: 8px solid #fff;
    box-shadow: 0px 6px 12px 0px rgb(248 153 70);
}

</style>