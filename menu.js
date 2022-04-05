function scrollTest() {
    var item1 = getOffset(document.getElementsByTagName("section")[0]).top;
    console.log(item1);
    var item2 = document.getElementsByTagName("li")[1];
    var item3 = document.getElementsByTagName("li")[2];
    var item4 = document.getElementsByTagName("li")[3];
    var item5 = document.getElementsByTagName("li")[4];

};

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}