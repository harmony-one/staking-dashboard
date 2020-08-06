import request from 'request'
import {requestPromise} from "../../utils/requestPromise";

const CACHE_TIMEOUT_MS = 1000 * 60 * 60

/* todo
    intelligent cache
    cache to fs
    process new validators right away
*/
export class ValidatorsAvatarCacheService {
    cache = {
        AVATAR_URLS: {},
    }
    isCaching: Boolean

    cacheAvatars = async (validators = []) => {
        if (this.isCaching || !validators.length) {
            return
        }

        this.isCaching = true
        console.log(`Caching validators' avatars start`)
        for (let v of validators) {
            try {
                const githubAvatar = await this.fetchGithubAvatarByValidatorAddress(v.address)
                const keyBaseAvatar = await this.fetchKeyBaseAvatarByValidatorIdentity(v.identity)
                this.cache.AVATAR_URLS[v.address] = {githubAvatar, keyBaseAvatar}
            } catch (e) {
            }
        }
        console.log(`Caching validators' avatars end`)

        setTimeout(
            () => {
                this.isCaching = false
            },
            CACHE_TIMEOUT_MS)
    }

    hasValidatorCachedAvatar = (validatorAddress) => {
        return this.cache.AVATAR_URLS[validatorAddress]
            && (
                this.cache.AVATAR_URLS[validatorAddress].githubAvatar
                || this.cache.AVATAR_URLS[validatorAddress].keyBaseAvatar
            )
    }

    getValidatorCachedAvatarByValidatorAddress = (validatorAddress) => {
        const {githubAvatar, keyBaseAvatar} = this.cache.AVATAR_URLS[validatorAddress] || {}

        return keyBaseAvatar || githubAvatar || null
    }

    fetchGithubAvatarByValidatorAddress = async (validatorAddress) => {
        const url = `https://github.com/harmony-one/validator-logos/raw/master/validators/${validatorAddress}.jpg`

        try {
            return await requestPromise({url})
        } catch (e) {
            return null
        }
    }

    fetchKeyBaseAvatarByValidatorIdentity = async (validatorIdentity) => {
        const url = `https://keybase.io/_/api/1.0/user/lookup.json?key_fingerprint=${validatorIdentity}&fields=pictures`

        try {
            const keyBaseData = (await requestPromise({url})).toString() as any
            const imgUrl = JSON.parse(keyBaseData).them[0].pictures.primary.url

            return await requestPromise({url: imgUrl})
        } catch (e) {
            return null
        }
    }
}