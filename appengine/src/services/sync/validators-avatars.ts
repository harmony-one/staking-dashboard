import {requestPromise} from "../../utils/requestPromise";

const CACHE_EXP_MS = 1000 * 60 * 60
const LOOP_INTERVAL_MS = 1000 * 20 * 60

/* todo
    intelligent cache
    cache to fs
    process new validators right away
*/
export class ValidatorsAvatarCacheService {
    cache = {
        VALIDATORS: {},
        AVATAR_URLS: {},
    }
    isCaching: Boolean

    addValidatorsForCaching = async (validators = []) => {
        validators.forEach(v => {
            this.cache.VALIDATORS[v.address] = {
                ...v,
                expirationTime: Date.now() + CACHE_EXP_MS
            }
        })
    }

    isCached = validatorAddress => {
        const cache = this.cache.AVATAR_URLS[validatorAddress]
        return Boolean(cache && (cache.githubAvatar || cache.keyBaseAvatar))
    }

    isCachedKeyBase = validatorAddress => {
        const cache = this.cache.AVATAR_URLS[validatorAddress]
        return Boolean(cache && cache.keyBaseAvatar)
    }

    // todo invalidate avatas' cache
    loop = async () => {
        const validators = Object.values(this.cache.VALIDATORS) as any

        // console.log(`Caching validators' avatars start`)
        const now = Date.now()

        for (let v of validators) {
            const {expirationTime} = v
            if (now < expirationTime && this.isCachedKeyBase(v.address)) {
                continue
            }

            const cacheAvatar = async () => {
                try {
                    const githubAvatar = await this.fetchGithubAvatarByValidatorAddress(v.address)
                    const keyBaseAvatar = await this.fetchKeyBaseAvatarByValidatorIdentity(v.identity)
                    this.cache.AVATAR_URLS[v.address] = {githubAvatar, keyBaseAvatar}
                } catch (e) {
                }
            }

            // console.log('Caching avatar for', v.address)
            cacheAvatar().catch()
        }
        // console.log(`Caching validators' avatars end`, validators.length)

        setTimeout(this.loop, LOOP_INTERVAL_MS)
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
