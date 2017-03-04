var StrUtil;
(function (StrUtil) {
    function connect(str1, str2) {
        return str1 + str2;
    }
    StrUtil.connect = connect;
})(StrUtil || (StrUtil = {}));
var NumUtil;
(function (NumUtil) {
    function add(num1, num2) {
        return num1 + num2;
    }
    NumUtil.add = add;
})(NumUtil || (NumUtil = {}));
/// <reference path="namespace1.ts"/>
/// <reference path="namespace2.ts"/>
console.log(StrUtil.connect("Lorem", "Ipsum"));
console.log(NumUtil.add(25, 25));
