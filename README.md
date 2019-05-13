# simple-pem2jwk

Simple RSA key conversion from PEM-format to JWK-format with no dependencies on [Node.js](https://nodejs.org/) or [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API). Works in react-native.

## Example for private key;
````
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCA... ...e+BMRbC5SnJpMsfF0luZhvX
-----END RSA PRIVATE KEY-----`

pem2jwk(privateKey)

// Output:
// {
//     p: '...',
//     kty: 'RSA',
//     q: '...',
//     d: '...',
//     e: '...',
//     qi: '...',
//     dp: '...',
//     dq: '...',
//     n: '...'
// }

// It works the same way with public keys but the output only contains parameters n, e and kty
````

## What does the parameters mean?
Read [section 6.3 in rfc7518](https://tools.ietf.org/html/rfc7518#section-6.3).

## Why this lib?
The lib [react-native-rsa-native](https://github.com/amitaymolko/react-native-rsa-native) generates keys in PEM format but did not support exporting to JWK format. Hence this helper lib.
