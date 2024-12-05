import { v4 as uuid } from 'uuid'

const COLLECTION_NAME = 'thing'

/**
 * ThingData interface - entity data with optional id
 *
 * @param id - optional id value
 * @param key - optional key value
 */
export interface ThingData {
    id?: string
    [key: string]: any
}

/**
 * ThingItemKeys interface - primary keys for DDB item
 *
 * @param pk - primary key value
 * @param sk - sort key value
 */
export interface ThingItemKeys {
    pk: string
    sk: string
}

/**
 * ThingItem interface - DDB item
 */
export interface ThingItem extends ThingItemKeys, ThingData {
    id: string
}

/**
 * Create a new ThingItemKeys object with the same value for pk and sk. Key values are a uuid or the
 * optional id parameter if provided
 *
 * @param id - optional string to use as the key value
 *
 * @returns ThingItemKeys
 */
export function createKeys(): ThingItemKeys {
    const key = `${COLLECTION_NAME}#${uuid()}`
    return {
        pk: key,
        sk: key
    }
}

/**
 * Create a new ThingItemKeys object with the same value for pk and sk
 *
 * @param id - string to use as the key value
 *
 * @returns ThingItemKeys
 */
export function getKeysFromId(id: string): ThingItemKeys {
    const key = `${COLLECTION_NAME}#${id}`
    return {
        pk: key,
        sk: key
    }
}

/**
 * Get the id value from the passed keys
 *
 * @param keys - ThingItemKeys object
 *
 * @returns string
 */
export function getIdFromKeys(keys: ThingItemKeys): string {
    return keys.pk.split('#')[1]
}
