import request from 'request'

const INTERVAL = 1000 * 60 * 60


export class ValidatorsAvatarCacheService {
    cache = {
        AVATAR_URLS: {},
        lastCachedDate: 0
    }
    timeoutId = null


    cacheAvatars = async (validators) => {
        // if cache has not expired
        if (this.cache.lastCachedDate && (Date.now() - this.cache.lastCachedDate < INTERVAL)) {
            clearTimeout(this.timeoutId)
            this.timeoutId = setTimeout(
                () => this.cacheAvatars(validators),
                INTERVAL - (Date.now() - this.cache.lastCachedDate))

            return
        }

        for (let v of validators) {
            // console.log({v})
            // await get image by url
            // cache image
            const githubAvatar = await this.getGithubAvatarByOperatorAddress(v.address)
            this.cache.AVATAR_URLS[v.address] = {githubAvatar}
        }

        this.cache.lastCachedDate = Date.now()
        this.timeoutId = setTimeout(
            () => this.cacheAvatars(validators),
            INTERVAL)
    }

    getValidatorCachedAvatarByValidatorAddress = (validatorAddress) => {
        const fallback = 'https://i01.fotocdn.net/s123/e1958e718063c678/user_xl/2804839805.jpg'
        const githubAvatar = this.cache.AVATAR_URLS[validatorAddress] ? this.cache.AVATAR_URLS[validatorAddress].githubAvatar : null

        console.log('serving avatar', !!githubAvatar)
        return githubAvatar || fallback
    }

    getGithubAvatarByOperatorAddress = async (validatorAddress) => {
        const url = `https://github.com/harmony-one/validator-logos/raw/master/validators/${validatorAddress}.jpg`

        return new Promise((resolve, reject) => {
            request.get(url, (err, res, body) => {
                if (err || res.statusCode >= 400) {
                    resolve(null)
                    return
                }

                console.log(res.statusCode, validatorAddress, typeof body )
                resolve(body)
            })
        })
    }
}

//one16way77arx9zseyhwa4sn3qkugxchqcjgkgduzp