<template>
    <section class="portrait-skin">
        <div class="container">
            <div class="row">
                <div class="col-md-8">

                    <div class="section-title">
                        <h2>Portrait Skin Smoothing</h2>
                        <p>With our portrain skin smothing service, we can  even out skin tone and texture for a flawless finish.</p>
                        <div class="divide-separator"></div>
                    </div>
                
                    <ul>
                        <li>Color correction.</li>
                        <li>Make-up improvement.</li>
                        <li>Face beautiy retouching.</li>
                        <li>Hair retouching</li>
                        <li>Color correction.</li>
                        <li>Make-up improvement.</li>
                        <li>Face beautiy retouching.</li>
                        <li>Hair retouching</li>
                    </ul>

                    <div class="portrait-comments">
                        Top motch customer servie, retourching done to suit your personal taste. Say something about having a fast turnaround because clietns like that
                    </div>

                </div>
                <div class="col-md-4">
                    <div class="portrait-skin-image">
                        <ImgComparisonSlider>
                            <!-- eslint-disable -->
                            <img
                            slot="first"
                            style="width: 100%"
                            :src="beforeImg"
                            />
                            <img
                            slot="second"
                            style="width: 100%"
                            :src="afterImg"
                            />
                            <!-- eslint-enable -->
                        </ImgComparisonSlider>

                        <div class="button-group">
                            <button class="btn btn-dark-default place-order">Place an order</button>
                            <button class="btn btn-default free-trial">Have a free trial</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';
export default {
    data() {
        return {
            beforeImg : 'https://ephotovn.com/wp-content/uploads/2023/02/Richland_Unretouched-09-2022_0471.jpg', 
            afterImg : 'https://ephotovn.com/wp-content/uploads/2023/02/Richland_Unretouched-09-2022_047.jpg'
        }
    }, 
    components: {
        ImgComparisonSlider,
    },
}
</script>
<style scoped>
.portrait-skin-image img {
    height : 550px;
    width : 100%;
    object-fit: cover;
}

.portrait-comments {
    background-color: #00bcd4;
    padding: 50px;
    border-radius: 20px;
    color: #fff;
    box-shadow: rgba(0, 188, 212, 0.4) 5px 5px, rgba(0, 188, 212, 0.3) 10px 10px, rgba(0, 188, 212, 0.2) 15px 15px, rgba(0, 188, 212, 0.1) 20px 20px, rgba(0, 188, 212, 0.05) 25px 25px;
    font-style: italic;
    margin-top: 50px;
    width: 600px;
    max-width: 100%;
    font-size: 20px;
}

.portrait-skin ul {
    padding: 0;
}

.portrait-skin ul li {
    list-style-position: inside;
    list-style-type: square;
    line-height: 200%;
}

.portrait-skin .button-group {
    display : flex;
    justify-content: space-between;
    margin-top: 15px;
}

.portrait-skin .button-group .place-order { 
    width : calc(50% - 10px);
}

.portrait-skin .button-group .free-trial {
    width : calc(50% - 10px);
}

</style>