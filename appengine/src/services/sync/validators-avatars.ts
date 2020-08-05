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
            // await get image by url
            // cache image
        }

        this.cache.lastCachedDate = Date.now()
        this.timeoutId = setTimeout(
            () => this.cacheAvatars(validators),
            INTERVAL)
    }

    getValidatorCachedAvatarByValidatorAddress = (validatorAddress) => {
        const imageUrl = 'https://i01.fotocdn.net/s123/e1958e718063c678/user_xl/2804839805.jpg'
        return imageUrl
    }
}