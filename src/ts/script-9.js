// enum type yasab oldik.
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["White"] = "White";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
// Bu yerda biz colorni tallab olyapmiz.
var selectedColor = Color.Green;
console.log("Tanlangan rang: ", selectedColor);
