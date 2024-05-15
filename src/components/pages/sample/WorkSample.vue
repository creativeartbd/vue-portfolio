<template>
    <section class="sample">
        <div class="container">
            <div class="row">
                <div class="col-md-12 section-title text-center">
                    <h2>Our Sample Work</h2>
                    <p>Click on each image to see the full view of ”Before & After”!! <br/>We showcase our recent photo processing project that we did for professional photographers & e-commerce companies.</p>
                    <div class="divide-separator divide-center"></div>
                </div>
                <div class="col-md-12">
                    <div class="d-flex align-items-start sample-work">
                        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">All</button>
                            <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Cliping Path & Cutout</button>
                            <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Shadow Making</button>
                            <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Background Removal</button>
                        </div>
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="single-sample">
                                            <img class="active-image" src="https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/09/JOF_8294__After-600x413-2.jpg?w=800&amp;ssl=1" alt="">
                                            <img class="hover-image" src="https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/09/JOF_8294__Before-600x413-2.jpg?w=800&ssl=1" alt="">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="single-sample">
                                            <img class="active-image" src="https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/09/Vdara_Feb18-059-3.jpg?w=800&ssl=1" alt="">
                                            <img class="hover-image" src="https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/09/Vdara_Feb18-059-4.jpg?w=800&ssl=1" alt="">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="single-sample">
                                            <img class="active-image" src="https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/09/shutterstock_445313647-3.jpg?w=800&ssl=1" alt="">
                                            <img class="hover-image"  src="https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/09/shutterstock_445313647-4.jpg?w=800&ssl=1" alt="">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="single-sample">
                                            <img class="active-image" src="https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/09/Vdara_Feb18-059-3.jpg?w=800&ssl=1" alt="">
                                            <img class="hover-image" src="https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/09/Vdara_Feb18-059-4.jpg?w=800&ssl=1" alt="">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="single-sample">
                                            <img class="active-image" src="https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/09/Vdara_Feb18-059-3.jpg?w=800&ssl=1" alt="">
                                            <img class="hover-image" src="https://i0.wp.com/cutoutpartner.com/wp-content/uploads/2021/09/Vdara_Feb18-059-4.jpg?w=800&ssl=1" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"></div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
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
<style>

.sample-work .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    background-color: #00bcd4;
    background-image: linear-gradient(90deg, #00bcd4 0%, #0dd1ff 100%);
}

.sample-work .nav-link {
    color : #000;
    text-align: left;
}

.sample-work .nav button {
    width : 250px;
}

.single-sample {
    box-shadow: 1px 1px 1px #ddd;
    margin-bottom: 15px;
}

.single-sample img {
    width : 100%;
}

.single-sample .hover-image {
    display : none;
    transition: all ease-in .3s;
}

.single-sample:hover .hover-image {
    display : block;
}

.single-sample:hover .active-image {
    display : none;
}
</style>