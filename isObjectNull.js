export default function isObjectNull(object) {
    if (!isNaN(object)) return object;
    if (object == null) return null;
    if (object.length == 0) return null;
    if (isEmpty(object)) return null;

    return object;
}

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) return false;
    }
    return true;
}