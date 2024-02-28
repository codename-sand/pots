document.addEventListener("DOMContentLoaded", function() {
    var xOffset = 10;
    var yOffset = 30;
    
    document.querySelectorAll(".img_wrap").forEach(function(element) {
        element.addEventListener("mouseover", function(e) {
            var imgSrc = this.querySelector("img.preview_thumbnail").getAttribute("src");
            var previewHover = document.createElement("div");
            previewHover.className = "previewHover";
            previewHover.innerHTML = "<img src='" + imgSrc + "' width='500px' />";
            document.body.appendChild(previewHover);
            previewHover.style.top = (e.pageY - xOffset) + "px";
            previewHover.style.left = (e.pageX + yOffset) + "px";
            previewHover.style.display = "block";
        });

        element.addEventListener("mousemove", function(e) {
            var previewHover = document.querySelector(".previewHover");
            if (previewHover) {
                previewHover.style.top = (e.pageY - xOffset) + "px";
                previewHover.style.left = (e.pageX + yOffset) + "px";
            }
        });

        element.addEventListener("mouseout", function() {
            var previewHover = document.querySelector(".previewHover");
            if (previewHover) {
                previewHover.remove();
            }
        });
    });
});
