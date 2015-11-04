(function(exports){
    "use strict";

    var worker = new Worker('worker.js');

    exports.calculate = function() {
        var value = document.getElementById('original').value;
        worker.postMessage(value);
    }

    worker.addEventListener('message', function(e) {
    var data = e.data.split(" ");
    /*
    var value, type;
    for (var i = 0; i < data.Length/2; i++) {
        for (var j = 0; j < 2; j++) {
            value[j] = data[i][j];
            console.log("value : "+ value);
            type[j+1] = data[i][j+1];
            console.log("type : "+ type);
        }
    document.getElementById('converted').innerHTML = value[i]+" "+type[i];
    document.getElementById('converted2').innerHTML = value[j]+" "+type[j];
    }
    */
    document.getElementById('converted').innerHTML = data[0]+" "+data[1];
    document.getElementById('converted2').innerHTML = data[2]+" "+data[3];

    }, false);

})(this);
