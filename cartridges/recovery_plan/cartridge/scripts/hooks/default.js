importPackage(dw.system);

exports.beforeGET = function(category, doc) {
    var a = category;
    var b = doc;
    return new Status(Status.OK);
}

exports.modifyGETResponse = function(category, doc) {
    return new Status(Status.OK);
}