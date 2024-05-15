<template>
    <section class="pricing-table">
        <div class="container">
            <div class="row">
                <div class="col-md-12 section-title text-center">
                    <h2>Our Photo Retouching Pricing</h2>
                    <p>Whether you need touch ups for portraits or make studio & product photos more appealing, Ephotovn can give
you fast turnaround at the best photo retouching price.</p>
                    <div class="divide-separator divide-center"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <nav class="pricing-tab">
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All</button>
                            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Background Removaal</button>
                            <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Photo Retouch</button>
                        </div>
                    </nav>
                    <div class="tab-content pricing-tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div class="row">
                                <div class="col-md-6 col-lg-3">
                                    <div class="price-table">
                                        <img src="https://ephotovn.com/wp-content/uploads/2020/03/pricing1.jpg"/>
                                        <h3 class="price-title">Product</h3>
                                        <div class="price-start-from">
                                            <p>Start from</p>
                                            <h2>USD 0.6</h2>
                                            <p>1 Image</p>
                                        </div>
                                        <button class="btn btn-dark-default free-trial">Free Trial</button>
                                        <!-- <div class="price-options">
                                            <ul>
                                                <li>Simple items removal</li>
                                                <li>Background removal</li>
                                                <li>Backdrop color changing</li>
                                                <li>Shadow effect creation</li>
                                                <li>-</li>
                                                <li>-</li>
                                            </ul>
                                        </div> -->
                                        <button class="btn btn-default order-now">Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div class="row">
                                <div class="col-md-6 col-lg-3">
                                    <div class="price-table">
                                        <img src="https://ephotovn.com/wp-content/uploads/2020/03/pricing1.jpg"/>
                                        <h3 class="price-title">Product</h3>
                                        <div class="price-start-from">
                                            <p>Start from</p>
                                            <h2>USD 0.6</h2>
                                            <p>1 Image</p>
                                        </div>
                                        <button class="btn btn-dark-default free-trial">Free Trial</button>
                                        <!-- <div class="price-options">
                                            <ul>
                                                <li>Simple items removal</li>
                                                <li>Background removal</li>
                                                <li>Backdrop color changing</li>
                                                <li>Shadow effect creation</li>
                                                <li>-</li>
                                                <li>-</li>
                                            </ul>
                                        </div> -->
                                        <button class="btn btn-default order-now">Order Now</button>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <div class="price-table">
                                        <img src="https://ephotovn.com/wp-content/uploads/2020/03/pricing1.jpg"/>
                                        <h3 class="price-title">Product</h3>
                                        <div class="price-start-from">
                                            <p>Start from</p>
                                            <h2>USD 0.6</h2>
                                            <p>1 Image</p>
                                        </div>
                                        <button class="btn btn-dark-default free-trial">Free Trial</button>
                                        <!-- <div class="price-options">
                                            <ul>
                                                <li>Simple items removal</li>
                                                <li>Background removal</li>
                                                <li>Backdrop color changing</li>
                                                <li>Shadow effect creation</li>
                                                <li>-</li>
                                                <li>-</li>
                                            </ul>
                                        </div> -->
                                        <button class="btn btn-default order-now">Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">

                        </div>
                    </div>
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
.pricing-table .section-title {
    padding-left : 10%;
    padding-right : 10%;
}
.pricing-table .price-table {
    text-align : center;
    border: 1px solid #ddd;
    padding-bottom: 30px;
    margin-bottom : 50px;
    transition: all .5s ease-in;
}

.pricing-table .free-trial {
    margin : 20px 0;
    box-shadow: none;
}

.pricing-table .price-options ul li {
    list-style : none;
    margin-bottom : 15px;
    color : #484848;
}

.pricing-table .price-table img {
    margin-bottom : 25px;
}

.pricing-table .price-table .price-start-from h2 {
    margin-bottom: 0;
}

.pricing-table .price-table .price-start-from p {
    margin-bottom: 0;
}

.pricing-table .order-now {
    width: calc(100% - 17%);
    margin: 0 auto;
    display: block;
}

.pricing-table .price-table:hover {
    -webkit-box-shadow: 0px 2px 101px -38px #c7c7c7;
    -moz-box-shadow: 0px 2px 101px -38px #c7c7c7;
    box-shadow: 0px 2px 101px -38px #c7c7c7;
    cursor : pointer;
    transition : all ease 1s;
    border : none;
    transform: scale(1.01)
}

.pricing-table .price-table.best-price {
    -webkit-box-shadow: 0px 2px 101px -38px #c7c7c7;
    -moz-box-shadow: 0px 2px 101px -38px #c7c7c7;
    box-shadow: 0px 2px 101px -38px #c7c7c7;
    cursor : pointer;
    transition : all ease 1s;
    border : none;
}

.pricing-tab {
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #c7c7c7;
}

.pricing-tab .nav-link {
    color : #000;
}

.pricing-tab .nav-link.active {
    color: #fff;
    background-color: #00bcd4;
    background-image: linear-gradient(90deg, #00bcd4 0%, #0dd1ff 100%);
}
</style>