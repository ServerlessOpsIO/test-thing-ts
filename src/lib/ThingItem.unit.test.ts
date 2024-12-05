import { createKeys, getKeysFromId, getIdFromKeys } from './ThingItem.js'
import { v4 as uuid } from 'uuid'

jest.mock('uuid', () => {
    return {
        v4: jest.fn(() => '1234-5678'),
    }
})

describe('ThingItem', () => {
    describe('createKeys()', () => {
        describe('succeeds', () => {
            test('creating keys', () => {
                const mockUuid = uuid()
                const keys = createKeys()

                expect(keys).toEqual({ pk: `thing#${mockUuid}`, sk: `thing#${mockUuid}` })
            })
        })
    })

    describe('getKeysFromId()', () => {
        describe('succeeds', () => {
            test('getting keys', () => {
                const id = 'test-id'
                const expectedKeys = {
                    pk: `thing#${id}`,
                    sk: `thing#${id}`
                }
                const keys = getKeysFromId(id)

                expect(keys).toEqual(expectedKeys)
            })
        })
    })

    describe('getIdFromKeys()', () => {
        describe('succeeds', () => {
            test('getting keys', () => {
                const expectedId = 'test-id'
                const keys = {
                    pk: `thing#${expectedId}`,
                    sk: `thing#${expectedId}`
                }
                const id = getIdFromKeys(keys)

                expect(id).toEqual(expectedId)
            })
        })
    })
})
