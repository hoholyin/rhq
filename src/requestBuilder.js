
exports.createRequestOptions = function (reqType) {
    if (reqType !== 'GET' && reqType !== 'POST') {
        return null
    }
    return {
        method: reqType,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: reqType + ' request' })
    }
}

exports.createRequestOptions = function (reqType, body) {
    if (reqType !== 'GET' && reqType !== 'POST') {
        return null
    }
    return {
        method: reqType,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    }
}