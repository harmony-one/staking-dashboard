import {requestPromise} from "../../utils/requestPromise";
import {processPromisesBatch} from './helpers';

const CACHE_EXP_MS = 1000 * 60 * 60
const LOOP_INTERVAL_MS = 1000 * 10 * 60

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
            const expirationTime = this.cache.VALIDATORS[v.address]
                ? this.cache.VALIDATORS[v.address].expirationTime
                : Date.now() + CACHE_EXP_MS

            this.cache.VALIDATORS[v.address] = {
                ...v,
                expirationTime
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

    cacheAvatar = async (v) => {
        try {
            const githubAvatar = await this.fetchGithubAvatarByValidatorAddress(v.address)
            const keyBaseAvatar = await this.fetchKeyBaseAvatarByValidatorIdentity(v.identity)
            this.cache.AVATAR_URLS[v.address] = {githubAvatar, keyBaseAvatar}
            v.expirationTime = Date.now() + CACHE_EXP_MS
        } catch (e) {
            console.error(e)
        }
    }

    loop = async () => {
        try {
            const validators = (Object.values(this.cache.VALIDATORS) as any)

            // console.log(`Caching validators' avatars start`)
            const now = Date.now()
            const filteredValidators = validators.filter(v => !(now < v.expirationTime && this.isCachedKeyBase(v.address)))

            await processPromisesBatch(filteredValidators, 10, this.cacheAvatar)

            // console.log(`Caching validators' avatars end`, filteredValidators.length)
        } catch (e) {
            console.error(e)
        }

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
        // const reqParams = {
        //     rejectUnauthorized: false,
        //     requestCert: false,//add when working with https sites
        //     agent: false,//add when working with https sites
        //     strictSSL: false,
        // }

        try {
            const url = 'https://keybase.io/_/api/1.0/user/lookup.json'
            const qs = {
                key_fingerprint: validatorIdentity,
                fields: 'pictures',
            }
            const keyBaseData = (await requestPromise({url, qs})).toString() as any
            const keyBaseDataJson = JSON.parse(keyBaseData)
            
            // if the status code is not 0, then there is an error or it doesn't exist
            if (keyBaseDataJson.status.code !== 0) {
                return null
            }
            
            const imgUrl = keyBaseDataJson.them[0]?.pictures?.primary?.url
            
            return imgUrl ? await requestPromise({url: imgUrl}) : null
        } catch (e) {
            console.error(`Error when fetching keybase image for ${validatorIdentity}`, e)
            return null
        }
    }
}
