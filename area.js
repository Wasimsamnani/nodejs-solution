module.exports = {
    areacir: function (radius) {
        pi = 3.14;
        var result;
        result = pi * radius * radius;
        console.log("area of circle=" + result);
    },
arearect: function(width, length) {
        var result;
        result = width * length;
        console.log("area of reactriangle=" + result);
},
areatriangle: function (base, height) {
        var result;
        result = base * height / 2;
        console.log("area of triangle=" + result);
    }
}
