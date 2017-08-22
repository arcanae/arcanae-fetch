let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetch(url, obj) {
    return new Promise((resolve, reject) => {
        xhr = new XMLHttpRequest();
        xhr.open(obj.method, url, true);
        xhr.onload = function() {
            if (xhr.status = 200) {
                resolve(xhr.response);
            } else {
                reject(xhr.status);
            }
        }
        xhr.onerror = function(error) {
            reject(error);
        }
        xhr.send()
    });
}

module.exports = fetch;