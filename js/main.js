// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     } 
//   });
// }

var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        var content = this.querySelector('.collapsible-content');
        if (content == null) return;
        if (content.style.display == 'block') {
            content.style.display = 'none';
            content.style.maxHeight = null;
        } else {
            content.style.display = 'block';
            content.style.maxHeight = content.scrollHeight + "px";
        }
        // if (content.style.maxHeight) {
        //     content.style.maxHeight = null;
        //     content.diplay = 'none';
        // } else {
        //     content.style.maxHeight = content.scrollHeight + "px";
        //     content.diplay = null;
        // }
    });
}
