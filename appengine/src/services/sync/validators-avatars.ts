import request from 'request'

const INTERVAL = 1000 * 60 * 60


export class ValidatorsAvatarCacheService {
    cache = {
        AVATAR_URLS: {},
    }
    timeoutId = null


    cacheAvatars = async (validators) => {
        if (this.timeoutId) {
            return
        }

        for (let v of validators) {
            try {
                const githubAvatar = await this.fetchGithubAvatarByValidatorAddress(v.address)
                const keyBaseAvatar = await this.fetchKeyBaseAvatarByValidatorIdentity(v.identity)
                this.cache.AVATAR_URLS[v.address] = {githubAvatar, keyBaseAvatar}
            } catch (e) {
            }
        }

        this.timeoutId = setTimeout(
            () => {
                clearTimeout(this.timeoutId)
                this.cacheAvatars(validators)
            },
            INTERVAL)
    }

    getValidatorCachedAvatarByValidatorAddress = (validatorAddress) => {
        const fallback = null
        const {githubAvatar, keyBaseAvatar} = this.cache.AVATAR_URLS[validatorAddress] || {}

        return keyBaseAvatar || githubAvatar || fallback
    }

    fetchGithubAvatarByValidatorAddress = async (validatorAddress) => {
        const url = `https://github.com/harmony-one/validator-logos/raw/master/validators/${validatorAddress}.jpg`

        return new Promise((resolve, reject) => {
            request.get(url, (err, res, body) => {
                if (err || res.statusCode >= 400) {
                    resolve(null)
                    return
                }

                resolve(body)
            })
        })
    }

    fetchKeyBaseAvatarByValidatorIdentity = async (validatorIdentity) => {
        const url = `https://keybase.io/_/api/1.0/user/lookup.json?key_fingerprint=${validatorIdentity}&fields=pictures`

        return new Promise((resolve, reject) => {
            request.get(url, (err, res, body) => {
                // todo parse response

                if (err || res.statusCode >= 400) {
                    resolve(null)
                    return
                }

                resolve(body)
            })
        })
    }
}