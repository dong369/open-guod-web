window.onload = function () {
    /* 输入框 */
    var OsearchInput = document.getElementsByClassName("search_input")[0];
    /* 搜索按钮 */
    var OsearchBtn = document.getElementsByClassName("search_btn")[0];
    var searchShow = document.getElementsByClassName("search_show")[0];
    var imgShow = document.getElementsByClassName("imgShow")[0];
    OsearchInput.onmouseover = function () {
        OsearchInput.classList.add("search_hover")
        searchShow.style.display="inline";
        imgShow.style.display="inline";
    }
    OsearchInput.onmouseout = function () {
        OsearchInput.classList.remove("search_hover")
        searchShow.style.display="none";
        imgShow.style.display="none";
    }

    OsearchBtn.onclick = function (e) {
        console.log(this + e);
    }
}