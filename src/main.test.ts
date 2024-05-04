import assert  from 'node:assert'
import { describe, it } from 'node:test'
import doesDomainExists from './main'

describe('Domain check utility', () => {
    it('does exists [https://google.com]', (t, done) => {
        doesDomainExists('https://google.com').then(v => {
            assert.strictEqual(v, true)
            done()
        })
    })



    it('does not exists [https://google85878ss.com]', (t, done) => {
        doesDomainExists('https://google85878ss.com').then(v => {
            assert.strictEqual(v, false)
            done()
        })
    })



    it('if passed without protocol [google.com]', (t, done) => {
        doesDomainExists('google.com').then(v => {
            assert.strictEqual(v, true)
            done()
        })
    })


    it('if passed url instance [new URL(google.com)]', (t, done) => {
        doesDomainExists(new URL('https://google.com')).then(v => {
            assert.strictEqual(v, true)
            done()
        })
    })

    
})
