
export const createRequestOptions = function (reqType, body) {
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

export const getRequest = async function (url) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const promise = await fetch(url, requestOptions)
    return await promise.json()
}
