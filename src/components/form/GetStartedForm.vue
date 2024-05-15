<template>
    <div class="get-started-form">
        <div class="container">
            <form>
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <label for="yourName" class="form-label" v-if="!isHome">Your name</label>
                        <input type="text" class="form-control" id="yourName" placeholder="Enter your name">
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <label for="yourPhone" class="form-label" v-if="!isHome">Your phone number</label>
                        <input type="tel" class="form-control" id="yourPhone" placeholder="Enter your phone number">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-sm-12 col-md-6">
                        <label for="yourEmail" class="form-label" v-if="!isHome">Your email id</label>
                        <input type="email" class="form-control" id="yourEmail" placeholder="Enter your email">
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <label for="yourWebsite" class="form-label" v-if="!isHome">Your website URL</label>
                        <input type="url" class="form-control" id="yourWebsite" placeholder="Enter your website URL">
                    </div>
                </div>
                <div class="mt-3">
                    <label for="selectServices" class="form-label" v-if="!isHome">Select services</label>
                    <select id="selectServices" class="form-select">
                        <option selected>Choose...</option>
                        <option value="1">Service 1</option>
                        <option value="2">Service 2</option>
                        <option value="3">Service 3</option>
                    </select>
                </div>
                <div class="mt-3">
                    <label for="yourMessage" class="form-label" v-if="!isHome">Your message</label>
                    <textarea class="form-control" id="yourMessage" rows="2" placeholder="Your message"></textarea>
                </div>
                <div class="mt-3">
                    <div class="drag-area form-control" @dragover.prevent="dragOverHandler" @drop.prevent="dropHandler">
                        <p>Drag and drop files here Or <b>Browse files</b></p>
                        <input type="file" id="fileInput" multiple style="display: none;" @change="fileInputHandler" ref="fileInput">
                        <button type="button" class="btn btn-primary btn-sm" @click="browseFiles">Browse</button>
                    </div>
                    <small>If the size is more than 25 MB, share your image via cloud (Google Drive, Dropshare or WeTransfer)</small>
                </div>
                <div class="mt-3">
                    <label for="pasteLink" class="form-label" v-if="!isHome">Paste the link here</label>
                    <input type="url" class="form-control" id="pasteLink" placeholder="Paste the link here">
                </div>
                <div class="mt-3">
                    <button type="submit" class="btn btn-default">Send Message</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    props : ['isHome'],
    methods: {
        dragOverHandler() {
        // Handle the drag over event
        },
        dropHandler(event) {
            const files = event.dataTransfer.files;
            this.handleFiles(files);
        },
        browseFiles() {
            this.$refs.fileInput.click();
        },
        fileInputHandler(event) {
            const files = event.target.files;
            this.handleFiles(files);
        },
        handleFiles(files) {
            for (let i = 0; i < files.length; i++) {
                console.log(`... file[${i}].name = ${files[i].name}`);
                // Process files here (e.g., uploading to a server)
            }
        }
    }
}
</script>
<style scoped>
.drag-area {
    border: 2px dashed #ddd;
    border-radius: 5px;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    text-align : center;
}

.drag-area:hover {
    background-color: #f8f9fa;
}

.get-started-form {
    padding: 25px 10px 10px 10px;
    background-color : #fff;
    border-radius: 10px;
    box-shadow: 8px 9px 24px #ececec;
    border: 1px solid #ebebeb;
}

/* Chrome, Safari, Opera 15+ */
::-webkit-input-placeholder {
    color: #909090;
    font-size : 12px;
}

/* Firefox 19+ */
::-moz-placeholder {
    color: #909090;
    font-size : 12px;
    opacity: 1; /* Firefox lowers the opacity of the placeholder by default */
}

/* Internet Explorer and Edge */
:-ms-input-placeholder {
    color: #909090;
    font-size : 12px;
}

/* Standard syntax */
::placeholder {
    color: #909090;
    font-size : 12px;
}

input::placeholder, textarea::placeholder {
    color: #909090; /* Placeholder text color */
    font-size : 14px;
}

.btn-default {
    width : 100%;
    margin-top : 30px;
    margin-bottom : 10px;
}

.btn-primary {
    background-color: #333;
    border: none;
}

small {
    color : #7d7777;
}

/* .btn-default {
    background-color : #09364b;
    color : #fff;
    width : 100%;
    border : none;
    margin-top : 20px;
} 

.btn-default:hover {
    background-color : #09364b;
    color : #fff;
    width : 100%;
    border : none;
    margin-top : 20px;
} */
</style>

