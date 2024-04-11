document.getElementById("file-upload").addEventListener("change", function() {
    var file = this.files[0];
    if (file) {
        var fileSize = file.size; // in bytes
        var maxSize = 1024 * 1024; // 1 MB
        if (fileSize > maxSize) {
            alert("File size exceeds the limit (1MB). Please choose a smaller file.");
            this.value = ""; 
            document.getElementById("upload-label").innerText = "Upload";
        } else {
            document.getElementById("upload-label").innerText = file.name;
        }
    }
});
