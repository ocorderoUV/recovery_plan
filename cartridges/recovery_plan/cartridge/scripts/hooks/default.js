importPackage(dw.system);

exports.beforeGET = function(categoryId) {
    var a = categoryId;
    return new Status(Status.ERROR, 'YOU CAN NOT ACCESSS');
}