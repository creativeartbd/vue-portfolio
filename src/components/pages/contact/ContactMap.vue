<template>
    <div class="map" v-if="data">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.264081123772!2d90.35643347522189!3d23.737960489254025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf666c8948d5%3A0x56905bebd9f2a9d7!2sJeet%20Kune%20Do%20Martial%20Art%20of%20Bangladesh!5e0!3m2!1sen!2sbd!4v1710251154041!5m2!1sen!2sbd" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>
<script>
export default {
    props : ['data'],
}
</script>