import * as asn from 'asn1js'
import { Base64 } from 'js-base64'
import { Buffer } from 'buffer'

function str2ab(str) {
  const buf = new ArrayBuffer(str.length)
  const bufView = new Uint8Array(buf)
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i)
  }
  return buf
}

const buffer2base64uri = buff => buff.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')

const pem2jwk = (pem) => {
  // fetch the part of the PEM string between header and footer
  const pemHeader = '-----BEGIN PRIVATE RSA KEY-----'
  const pemFooter = '-----END PRIVATE RSA KEY-----'
  const pemContents = pem.substring(pemHeader.length, pem.length - pemFooter.length)

  // base64 decode the string to get the binary data
  const binaryDerString = Base64.atob(pemContents)

  // convert from a binary string to an ArrayBuffer
  const binaryDer = str2ab(binaryDerString)
  const sequence = asn.fromBER(binaryDer)

  const fieldNames = [ 'n', 'e', 'd', 'p', 'q', 'dp', 'dq', 'qi' ]

  const fields = sequence.result.valueBlock.value
    .slice(1)
    .map(x => x.valueBlock.valueHex)
    .map((val, i) => i === 1 || i === 2 ? val : val.slice(1))
    .map(x => Buffer.from(x))
    .map(b => buffer2base64uri(b))
    .map((b64, i) => ({ [fieldNames[i]]: b64 }))

  return Object.assign({}, ...fields, { kty: 'RSA' })
}

export default pem2jwk
