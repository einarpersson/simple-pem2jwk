import pem2jwk from './index'

const privateKey = {
  pem: `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAm0J0vh6lhop4IAbEyS5uvBuPPN38hAah9EcYNEC6TYnzu9fm
lmxjf3xZAKXPPQbn3S31T+OgnrSB1hZvUySOdxK3NlmKTZn9Okdc8N+46ITKZBhJ
2cyfVTWO+N91IWSZERKwcFc+A7s+p7BdzCOhKdCRWxSJi/OV6Qbd2C/JbS9v/Aic
8dN9fr2mRUm9sgR2WZOeWt8U58AsU8+Wh3BHHMJE2C1IJCERmFG0C9vSiRTgz8hE
Wb6IJz50kH1vCg9Fx9RoVcZOPVaFQ3rK9bCnsuYaWvzYm2QlIqF339u0M/uJpCBO
6MEDkSkqsov78MpPho09J9k0hBL0Zlo6+KQV9QIDAQABAoIBAAwTC0K03fEcaDKv
bBLsSELbTtSwO+Dlpic59zUrGoIIujqP1Bg7NjK2MDLHclo/5PzTw+nyXS2ygo1s
gbxg0a6Ld1Gj/YhC80lavuzhrT7yAs5tgCLO0c5d47BRqomOCgRkpHGcK0+9emYu
pmDHnZNDq+Y+LuNCLpSoisyzDLJvuLAgI/FKSjXPucEc6aDQbz1c8Wt0rLxB63Ok
4QsKCicDsCKQ8cgY1dHYIht6iWFIUtsbroXCQGlTf5FMBeaAOj6cun+ujdpiKazg
ylhRDehclfjx7kH5knjSlO/j/ZKpZbaE56FlDVcI06rhd08WDEPqBLpCOCtixfj9
bf/iFBECgYEA08xG2LFoPsLsIGRoKQoa2SjLWccna+gxiQPImKQLpJnWMy7O+6T4
LheyWGcUh7coD3xiI4OMPDf2h/fSPdrW80/WGtM2fxOwPak0xJ3/jiIGMZvd8/pJ
mOkxHA4lJw6FRXF0qYqS2zoDxVG8jtDCRoFVxsQBHizcUW+yEtqgNrECgYEAu6mB
fxDhATlqwMQ0gfjjv0fNfW2AbL2TJeCXnTdB3gqiRsPY3OztZc9oWR00pVpIumZr
woLnj60I3kEEItsOcdgeZJglBca8sOdc4UGb6t7d26+K0rPfWBSRm/MEmFbs8viD
VJYJjfwzIsPqhwClYdaNlX4Nok76mJQDiODlbIUCgYBu14d0PFQsFGLzCNkiMTGf
2KOjloBhDqFt7Vb7205klEXvf12/gLSJmskxTrEF3arPf+70WxH3KeqRefbDfFXl
/DA21ba9hpZDjtwY0f8+aTwIlmPwHVqK9e9HmXeEGytQDnJZkDYPGSuEBqTBsSsb
LvCvF0Dmg9/Bls0A5P3X4QKBgCJgMYV6LQ1RXDnFdyzbz7RJTd4NAfppW5wToRI+
fgVTg1hdJcuKZw5ASQgR7oPfnvTuMA0od4x9EOPNmxlbcTDvetnIePeu6P+q0fu9
TfdfLdrBNDfWlTIISof7ozrYqXz0gvIqrcNhkGhs5Pgn6SOb7sGUnqC9wO/UJTWc
pMoVAoGBAM/FjHznsXwjqsPhKQTgD2x33qwcfYP/Ox2U9goStfVBkuRNO3MSEr2b
2QUjKVAqgrCnTJagrAGRJSHXYUEXKsauAyzPSJl6Uhg62fhXH5IR9oN5ftEjdsy+
+wxWknakgLQvr8Rqpi6orsyZRClr0e+BMRbC5SnJpMsfF0luZhvX
-----END RSA PRIVATE KEY-----`,
  jwk: {
    p: '08xG2LFoPsLsIGRoKQoa2SjLWccna-gxiQPImKQLpJnWMy7O-6T4LheyWGcUh7coD3xiI4OMPDf2h_fSPdrW80_WGtM2fxOwPak0xJ3_jiIGMZvd8_pJmOkxHA4lJw6FRXF0qYqS2zoDxVG8jtDCRoFVxsQBHizcUW-yEtqgNrE',
    kty: 'RSA',
    q: 'u6mBfxDhATlqwMQ0gfjjv0fNfW2AbL2TJeCXnTdB3gqiRsPY3OztZc9oWR00pVpIumZrwoLnj60I3kEEItsOcdgeZJglBca8sOdc4UGb6t7d26-K0rPfWBSRm_MEmFbs8viDVJYJjfwzIsPqhwClYdaNlX4Nok76mJQDiODlbIU',
    d: 'DBMLQrTd8RxoMq9sEuxIQttO1LA74OWmJzn3NSsaggi6Oo_UGDs2MrYwMsdyWj_k_NPD6fJdLbKCjWyBvGDRrot3UaP9iELzSVq-7OGtPvICzm2AIs7Rzl3jsFGqiY4KBGSkcZwrT716Zi6mYMedk0Or5j4u40IulKiKzLMMsm-4sCAj8UpKNc-5wRzpoNBvPVzxa3SsvEHrc6ThCwoKJwOwIpDxyBjV0dgiG3qJYUhS2xuuhcJAaVN_kUwF5oA6Ppy6f66N2mIprODKWFEN6FyV-PHuQfmSeNKU7-P9kqlltoTnoWUNVwjTquF3TxYMQ-oEukI4K2LF-P1t_-IUEQ',
    e: 'AQAB',
    qi: 'z8WMfOexfCOqw-EpBOAPbHferBx9g_87HZT2ChK19UGS5E07cxISvZvZBSMpUCqCsKdMlqCsAZElIddhQRcqxq4DLM9ImXpSGDrZ-FcfkhH2g3l-0SN2zL77DFaSdqSAtC-vxGqmLqiuzJlEKWvR74ExFsLlKcmkyx8XSW5mG9c',
    dp: 'bteHdDxULBRi8wjZIjExn9ijo5aAYQ6hbe1W-9tOZJRF739dv4C0iZrJMU6xBd2qz3_u9FsR9ynqkXn2w3xV5fwwNtW2vYaWQ47cGNH_Pmk8CJZj8B1aivXvR5l3hBsrUA5yWZA2DxkrhAakwbErGy7wrxdA5oPfwZbNAOT91-E',
    dq: 'ImAxhXotDVFcOcV3LNvPtElN3g0B-mlbnBOhEj5-BVODWF0ly4pnDkBJCBHug9-e9O4wDSh3jH0Q482bGVtxMO962ch4967o_6rR-71N918t2sE0N9aVMghKh_ujOtipfPSC8iqtw2GQaGzk-CfpI5vuwZSeoL3A79QlNZykyhU',
    n: 'm0J0vh6lhop4IAbEyS5uvBuPPN38hAah9EcYNEC6TYnzu9fmlmxjf3xZAKXPPQbn3S31T-OgnrSB1hZvUySOdxK3NlmKTZn9Okdc8N-46ITKZBhJ2cyfVTWO-N91IWSZERKwcFc-A7s-p7BdzCOhKdCRWxSJi_OV6Qbd2C_JbS9v_Aic8dN9fr2mRUm9sgR2WZOeWt8U58AsU8-Wh3BHHMJE2C1IJCERmFG0C9vSiRTgz8hEWb6IJz50kH1vCg9Fx9RoVcZOPVaFQ3rK9bCnsuYaWvzYm2QlIqF339u0M_uJpCBO6MEDkSkqsov78MpPho09J9k0hBL0Zlo6-KQV9Q'
  }
}

const publicKey = {
  pem: `-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEAm0J0vh6lhop4IAbEyS5uvBuPPN38hAah9EcYNEC6TYnzu9fmlmxj
f3xZAKXPPQbn3S31T+OgnrSB1hZvUySOdxK3NlmKTZn9Okdc8N+46ITKZBhJ2cyf
VTWO+N91IWSZERKwcFc+A7s+p7BdzCOhKdCRWxSJi/OV6Qbd2C/JbS9v/Aic8dN9
fr2mRUm9sgR2WZOeWt8U58AsU8+Wh3BHHMJE2C1IJCERmFG0C9vSiRTgz8hEWb6I
Jz50kH1vCg9Fx9RoVcZOPVaFQ3rK9bCnsuYaWvzYm2QlIqF339u0M/uJpCBO6MED
kSkqsov78MpPho09J9k0hBL0Zlo6+KQV9QIDAQAB
-----END RSA PUBLIC KEY-----`,
  jwk: {
    kty: 'RSA',
    e: 'AQAB',
    n: 'm0J0vh6lhop4IAbEyS5uvBuPPN38hAah9EcYNEC6TYnzu9fmlmxjf3xZAKXPPQbn3S31T-OgnrSB1hZvUySOdxK3NlmKTZn9Okdc8N-46ITKZBhJ2cyfVTWO-N91IWSZERKwcFc-A7s-p7BdzCOhKdCRWxSJi_OV6Qbd2C_JbS9v_Aic8dN9fr2mRUm9sgR2WZOeWt8U58AsU8-Wh3BHHMJE2C1IJCERmFG0C9vSiRTgz8hEWb6IJz50kH1vCg9Fx9RoVcZOPVaFQ3rK9bCnsuYaWvzYm2QlIqF339u0M_uJpCBO6MEDkSkqsov78MpPho09J9k0hBL0Zlo6-KQV9Q'
  }
}

describe('pem2jwk', () => {
  it('works for private key', () => {
    const jwk = pem2jwk(privateKey.pem)

    expect(jwk).toEqual(privateKey.jwk)
  })

  it('works for public key', () => {
    const jwk = pem2jwk(publicKey.pem)

    expect(jwk).toEqual(publicKey.jwk)
  })

  it('can add options to jwk object', () => {
    const jwk = pem2jwk(publicKey.pem, {
      use: 'sig',
      kid: 'foo'
    })

    const expected = { ...publicKey.jwk, use: 'sig', kid: 'foo' }

    expect(jwk).toEqual(expected)
  })

  it('throws if "use" is invalid', () => {
    expect(() => pem2jwk(publicKey.pem, { use: 'something-else' })).toThrow()
  })

  it('does not throw if "use" is valid', () => {
    expect(() => pem2jwk(publicKey.pem, { use: 'enc' })).not.toThrow()
  })
})