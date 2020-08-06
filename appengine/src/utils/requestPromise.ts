import request from 'request'

export const requestPromise = async (params) => {
    return new Promise((resolve, reject) => {
        request({
            encoding: null,
            method: 'GET',
            ...params
        }, (err, res, body) => {
            if (err || res.statusCode >= 400) {
                reject(err)
                return
            }

            resolve(body)
        })
    })
}