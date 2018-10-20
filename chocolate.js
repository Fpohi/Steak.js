function GeoOk () {
    "use strict";
    var UseOk = NaN;
    if (window.navigator.geolocation) {
        UseOk = true;
    } else {
        UseOk = false;
    }
}
function getId (id) {
    "use strict";
document.getElementById(id);
}
function ajaxStart (type, load, async) {
    "use strict";
    var ajax = new XMLHttpRequest();
    ajax.onload = reqListener;
ajax.open(type, load, async);
ajax.send();
}
function getClass (className) {
    "use strict";
    document.getElementsByClassName(className);
}
function hideElement (element) {
    "use strict";
   var setting = document.getElementById(element);
   if (setting.style.display === "none") {
       setting.style.display = "block";
   } else {
       setting.style.display = "none";
   }
}