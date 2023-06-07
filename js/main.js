document.getElementById("switchButton").onclick = function() {
    //khi button được click thì tìm đến thẻ body có id là myBody
    // dùng classlist để gọi thuộc tính class của thẻ body
    //Sử dụng toggle() để thêm hoặc xóa 1 class của thẻ html. Nếu thẻ body không có class dark thì toggle sẽ thêm class dark vào body. Ngược lại, nếu thẻ body đang có class dark thì toogle sẽ xóa class dark đi.
    document.getElementById("myBody").classList.toggle("dark");
};


// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").classList.add("scroll");
    } else {
        document.getElementById("header").classList.remove("scroll");
    }
}

//backtotop
var offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
    offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    scrollDuration = 700;