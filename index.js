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

const pem2jwk = (pem, opts) => {
  let kind = undefined
  // fetch the part of the PEM string between header and footer
  const lines = pem.split('\n')
  const pemHeader = lines[0]
  const pemFooter = lines[lines.length - 1]

  if (pemHeader === '-----BEGIN RSA PRIVATE KEY-----' && pemFooter === '-----END RSA PRIVATE KEY-----') {
    kind = 'private'
  } else if (pemHeader === '-----BEGIN RSA PUBLIC KEY-----' && pemFooter === '-----END RSA PUBLIC KEY-----') {
    kind = 'public'
  } else {
    throw Error(`Headers not supported: ${pemHeader}\n ${pemFooter}`)
  }

  const pemContents = pem.substring(pemHeader.length, pem.length - pemFooter.length)

  // base64 decode the string to get the binary data
  const binaryDerString = Base64.atob(pemContents)

  // convert from a binary string to an ArrayBuffer
  const binaryDer = str2ab(binaryDerString)
  const sequence = asn.fromBER(binaryDer)

  const fieldNames = {
    private: [ 'n', 'e', 'd', 'p', 'q', 'dp', 'dq', 'qi' ],
    public: [ 'n', 'e' ]
  }

  const fieldValues = kind === 'private'
    ? sequence.result.valueBlock.value.slice(1)
    : sequence.result.valueBlock.value

  const fields = fieldValues
    .map(x => x.valueBlock.valueHex)
    .map((val , i) => i === 1 || val.byteLength % 2 === 0 ? val : val.slice(1))
    .map(x => Buffer.from(x))
    .map(b => buffer2base64uri(b))
    .map((b64, i) => ({ [fieldNames[kind][i]]: b64 }))

  const jwk = Object.assign({}, ...fields, { kty: 'RSA' })

  jwk.use = opts && opts.use
  jwk.kid = opts && opts.kid

  return jwk
}

export default pem2jwk
