import pem2jwk from '../src/index'

const keyPairs = [
  {
    privateKey: {
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
    },
    publicKey: {
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
  },
  {
    privateKey: {
      pem: `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA4aOc6ck9Wh0+PfG4gCsMSaZT9nE+NXxQ8iSbocelFf+ViJE4
vCcEk/1iU4+bEahtem6mBSN+rCUHACg0fWH1GzTmpmUTZFsbLXAWkMuJk+FXAy5d
fXPFUQhE6cZbcrqYke5T5tbXExnu39OR/F+c6hvXahPsfDpIPF9BJ7GA6c3brMCh
1jTYiuk5xAmOLobsC/McgsEhWgHEwv1f85fs5Sn0CHi6OGISpntG0TA7oAnnktfA
xIb+f3ZnaHfPBq6z4/jJjXt0wM/4sxqjvzirI6Wewk0jxQsCsEhE4v251OHectui
HWnG48xpxqHrKEa9LE79x4a2XBLt3RV2NNLpRwIDAQABAoIBAAxMUp0bbtCej2no
5tl1fzH0ctcXzQA1SmQoQqNKsmDEkW3kHGeE6Ob4BIfxZ85Kk8z8guf8y0aurfcA
OfwrfqSA+aFQGQJ7RLvxRAmYTmNVAN0Xhdj0mmiUPs1PFmTmbrJlfwUx6H8OBssE
SQysWW0ZH2CUvWr38j/4ISD8t74GdCJbrKA7R0txaNbSyZCD/9j/MGEPqq6KGMPb
OrAPWY8sNRbAypEPhqi5tsViw6eI2fJR92X4KYNgrlyf8fSh5V85ZESviwcXkW3C
8RUcN+hi+CYpIMsnqjaB4Rd7pZASKIfmG8ANOmMDLUbOpuZJX88pbRwqS2Rtx447
9aeJFaECgYEA9S4smD5aWbbh5gtYxY6yrp0dglwCFBJcgzLS1OWn5PMYBZZlQDPU
0pVTpE6GECXqBv3sYA0N3gG2hXL17dx+8aDFnlO/sCOMFf/ddxbkg+yDwlKlNmBN
OX5JesFoWBztOJUcaOdnXDJJi1VM70GH/VtXP5UsuDyMBLiRYD/sC3UCgYEA65it
6TSrzS6RMnNXmajj+yPLeE5N1YHI2oHVN/hKgQcoRfSqLDJFB0maVy38XunkJJU2
XP6ZjuTLgvntxVDl8J+Y+XtlNoWSZZ1s2F8iMuz20lJS3Cw70xK9vkeog5D86xgK
EhGIHmu8waISWm/Bdz/SdLGtclFTBhiCqQ6BlksCgYEA4Fx0qozEmTxl0+GmRoKi
uG9GRbh0nnF+/wBPNktCLJzX6qUJ2oqTwnCrrbu9qqFHW0aaO/s2KWZf5BajPht8
fxikPpJc445j7u3Jd+UXEDIrEHQYg330rRwHmbHLDnbKDfFFoim/x/qsmjhgwsCw
9QPU/3Y/Cgk+CEPtpKpaEtECgYEAtPGYcEnRwU6ImbTYjN2X62R8ezO4t8hsGNYq
ikgaAKsclU3p/PPG7GftMBPThpogbLBlBltMWOEEJN4LbcZKM9p/xOyuuYcw/vY/
iJbYT0CL+NDdbthSQjRcom2q0RFkDrNx2Jq6bpLUb+soKWk3r3zHCHUF/4zSNRZS
E8Feaa0CgYBLkLeNvUqdvf5oq1lmbLL0lNfgQU4VwsAF0Cyg8HPt3mTXgAA29sgN
CBwEuU85YlBWpDdvdbsYv9Pa4uhn0FNJvbM42vKQH//cgxHDMLHTLmqG7DnTIgTy
pRPSlnhfkr82agPZ22QN9mMUHT173+S0kEOwvrk6pDArArUEVBTXKg==
-----END RSA PRIVATE KEY-----`,
      jwk: {
        p: '9S4smD5aWbbh5gtYxY6yrp0dglwCFBJcgzLS1OWn5PMYBZZlQDPU0pVTpE6GECXqBv3sYA0N3gG2hXL17dx-8aDFnlO_sCOMFf_ddxbkg-yDwlKlNmBNOX5JesFoWBztOJUcaOdnXDJJi1VM70GH_VtXP5UsuDyMBLiRYD_sC3U',
        kty: 'RSA',
        q: '65it6TSrzS6RMnNXmajj-yPLeE5N1YHI2oHVN_hKgQcoRfSqLDJFB0maVy38XunkJJU2XP6ZjuTLgvntxVDl8J-Y-XtlNoWSZZ1s2F8iMuz20lJS3Cw70xK9vkeog5D86xgKEhGIHmu8waISWm_Bdz_SdLGtclFTBhiCqQ6Blks',
        d: 'DExSnRtu0J6Paejm2XV_MfRy1xfNADVKZChCo0qyYMSRbeQcZ4To5vgEh_FnzkqTzPyC5_zLRq6t9wA5_Ct-pID5oVAZAntEu_FECZhOY1UA3ReF2PSaaJQ-zU8WZOZusmV_BTHofw4GywRJDKxZbRkfYJS9avfyP_ghIPy3vgZ0IlusoDtHS3Fo1tLJkIP_2P8wYQ-qrooYw9s6sA9Zjyw1FsDKkQ-GqLm2xWLDp4jZ8lH3Zfgpg2CuXJ_x9KHlXzlkRK-LBxeRbcLxFRw36GL4JikgyyeqNoHhF3ulkBIoh-YbwA06YwMtRs6m5klfzyltHCpLZG3Hjjv1p4kVoQ',
        e: 'AQAB',
        qi: 'S5C3jb1Knb3-aKtZZmyy9JTX4EFOFcLABdAsoPBz7d5k14AANvbIDQgcBLlPOWJQVqQ3b3W7GL_T2uLoZ9BTSb2zONrykB__3IMRwzCx0y5qhuw50yIE8qUT0pZ4X5K_NmoD2dtkDfZjFB09e9_ktJBDsL65OqQwKwK1BFQU1yo',
        dp: '4Fx0qozEmTxl0-GmRoKiuG9GRbh0nnF-_wBPNktCLJzX6qUJ2oqTwnCrrbu9qqFHW0aaO_s2KWZf5BajPht8fxikPpJc445j7u3Jd-UXEDIrEHQYg330rRwHmbHLDnbKDfFFoim_x_qsmjhgwsCw9QPU_3Y_Cgk-CEPtpKpaEtE',
        dq: 'tPGYcEnRwU6ImbTYjN2X62R8ezO4t8hsGNYqikgaAKsclU3p_PPG7GftMBPThpogbLBlBltMWOEEJN4LbcZKM9p_xOyuuYcw_vY_iJbYT0CL-NDdbthSQjRcom2q0RFkDrNx2Jq6bpLUb-soKWk3r3zHCHUF_4zSNRZSE8Feaa0',
        n: '4aOc6ck9Wh0-PfG4gCsMSaZT9nE-NXxQ8iSbocelFf-ViJE4vCcEk_1iU4-bEahtem6mBSN-rCUHACg0fWH1GzTmpmUTZFsbLXAWkMuJk-FXAy5dfXPFUQhE6cZbcrqYke5T5tbXExnu39OR_F-c6hvXahPsfDpIPF9BJ7GA6c3brMCh1jTYiuk5xAmOLobsC_McgsEhWgHEwv1f85fs5Sn0CHi6OGISpntG0TA7oAnnktfAxIb-f3ZnaHfPBq6z4_jJjXt0wM_4sxqjvzirI6Wewk0jxQsCsEhE4v251OHectuiHWnG48xpxqHrKEa9LE79x4a2XBLt3RV2NNLpRw'
      }
    },
    publicKey: {
      pem: `-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEA4aOc6ck9Wh0+PfG4gCsMSaZT9nE+NXxQ8iSbocelFf+ViJE4vCcE
k/1iU4+bEahtem6mBSN+rCUHACg0fWH1GzTmpmUTZFsbLXAWkMuJk+FXAy5dfXPF
UQhE6cZbcrqYke5T5tbXExnu39OR/F+c6hvXahPsfDpIPF9BJ7GA6c3brMCh1jTY
iuk5xAmOLobsC/McgsEhWgHEwv1f85fs5Sn0CHi6OGISpntG0TA7oAnnktfAxIb+
f3ZnaHfPBq6z4/jJjXt0wM/4sxqjvzirI6Wewk0jxQsCsEhE4v251OHectuiHWnG
48xpxqHrKEa9LE79x4a2XBLt3RV2NNLpRwIDAQAB
-----END RSA PUBLIC KEY-----`,
      jwk: {
        kty: 'RSA',
        e: 'AQAB',
        n: '4aOc6ck9Wh0-PfG4gCsMSaZT9nE-NXxQ8iSbocelFf-ViJE4vCcEk_1iU4-bEahtem6mBSN-rCUHACg0fWH1GzTmpmUTZFsbLXAWkMuJk-FXAy5dfXPFUQhE6cZbcrqYke5T5tbXExnu39OR_F-c6hvXahPsfDpIPF9BJ7GA6c3brMCh1jTYiuk5xAmOLobsC_McgsEhWgHEwv1f85fs5Sn0CHi6OGISpntG0TA7oAnnktfAxIb-f3ZnaHfPBq6z4_jJjXt0wM_4sxqjvzirI6Wewk0jxQsCsEhE4v251OHectuiHWnG48xpxqHrKEa9LE79x4a2XBLt3RV2NNLpRw'
      }
    }
  },
  {
    privateKey: {
      pem: `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQDEJNZcY9UAPhpzSjjJXmo+TAR61dGH9rzRI8FhVRlxHWHN+U9d
Rjd4ML2fL09G5QhkdKCNC0LGXETT1z4s4NdobKwyK0vZY/2WuzgCXqVp7JdVDj25
icX3i1Ff4mwW5DdBDlyMtcFu6vkKRPS2MUbaWHHxuj7EQBqySP5pAomZvwIDAQAB
AoGAN5xOHnG7kU8KRsezY/xd2P3Kg10eBBODozQk/siW5wgyk6hsxQBEd9Ix4PET
5ADJqVmbr4GS1BSS+xDasvSofZa9a1jJHS0L+go6OiljGMuGSYAmyaYYsbYMkA2O
N4r8iACEvymc3u91D7DatomH5vLQ3pKzNfka2GMVm2hg6RkCQQDmP8m7aC6+Pjob
pvP6lW8+oPZkzdUp1Ss6IKZCC2MMDwRBlGFUDuRWZ0afIvDsEjRKUXJkx7kuqf8I
rF4cSRqNAkEA2hSWwRZv8HJ0W/FiG72dXqFctpOsz8ghKaGd3PewXp/sRQkX78VM
ewajCZq5WXPacPEY7negW191LzyHcsc4ewJAeYU/Fm8VBIlZJ9EEwcNu1DIl+Ov9
zjdYujQTK5ZQ70NZrrb+a1v0vXmCd2j8mMu+116HLpOOtAc6uDwo62rV3QJBAK0B
PmNpwF34/pReFx24vBpxWpLA7oxb0Oss+oZsvK8koZRW1XVyiOzkY/zfkQEE5ptI
uSWdI0q5nMZfd3i30PcCQGOfbi/5Hnyp/bkYtTApP5o2+5GEaLNtmJQbd1NYfeUi
xv12VGtXh/cXjnVYbi0aBswrqXSkG05zQlQrvh8dR6k=
-----END RSA PRIVATE KEY-----`,
      jwk: {
        p: '5j_Ju2guvj46G6bz-pVvPqD2ZM3VKdUrOiCmQgtjDA8EQZRhVA7kVmdGnyLw7BI0SlFyZMe5Lqn_CKxeHEkajQ',
        kty: 'RSA',
        q: '2hSWwRZv8HJ0W_FiG72dXqFctpOsz8ghKaGd3PewXp_sRQkX78VMewajCZq5WXPacPEY7negW191LzyHcsc4ew',
        d: 'N5xOHnG7kU8KRsezY_xd2P3Kg10eBBODozQk_siW5wgyk6hsxQBEd9Ix4PET5ADJqVmbr4GS1BSS-xDasvSofZa9a1jJHS0L-go6OiljGMuGSYAmyaYYsbYMkA2ON4r8iACEvymc3u91D7DatomH5vLQ3pKzNfka2GMVm2hg6Rk',
        e: 'AQAB',
        qi: 'Y59uL_kefKn9uRi1MCk_mjb7kYRos22YlBt3U1h95SLG_XZUa1eH9xeOdVhuLRoGzCupdKQbTnNCVCu-Hx1HqQ',
        dp: 'eYU_Fm8VBIlZJ9EEwcNu1DIl-Ov9zjdYujQTK5ZQ70NZrrb-a1v0vXmCd2j8mMu-116HLpOOtAc6uDwo62rV3Q',
        dq: 'rQE-Y2nAXfj-lF4XHbi8GnFaksDujFvQ6yz6hmy8ryShlFbVdXKI7ORj_N-RAQTmm0i5JZ0jSrmcxl93eLfQ9w',
        n: 'xCTWXGPVAD4ac0o4yV5qPkwEetXRh_a80SPBYVUZcR1hzflPXUY3eDC9ny9PRuUIZHSgjQtCxlxE09c-LODXaGysMitL2WP9lrs4Al6laeyXVQ49uYnF94tRX-JsFuQ3QQ5cjLXBbur5CkT0tjFG2lhx8bo-xEAaskj-aQKJmb8'
      }
    },
    publicKey: {
      pem: `-----BEGIN RSA PUBLIC KEY-----
MIGJAoGBAMQk1lxj1QA+GnNKOMleaj5MBHrV0Yf2vNEjwWFVGXEdYc35T11GN3gw
vZ8vT0blCGR0oI0LQsZcRNPXPizg12hsrDIrS9lj/Za7OAJepWnsl1UOPbmJxfeL
UV/ibBbkN0EOXIy1wW7q+QpE9LYxRtpYcfG6PsRAGrJI/mkCiZm/AgMBAAE=
-----END RSA PUBLIC KEY-----`,
      jwk: {
        kty: 'RSA',
        e: 'AQAB',
        n: 'xCTWXGPVAD4ac0o4yV5qPkwEetXRh_a80SPBYVUZcR1hzflPXUY3eDC9ny9PRuUIZHSgjQtCxlxE09c-LODXaGysMitL2WP9lrs4Al6laeyXVQ49uYnF94tRX-JsFuQ3QQ5cjLXBbur5CkT0tjFG2lhx8bo-xEAaskj-aQKJmb8'
      }
    }
  }
]

describe('pem2jwk', () => {
  it('works for private key', () => {
    keyPairs.forEach(({ privateKey}) => {
      expect(pem2jwk(privateKey.pem)).toEqual(privateKey.jwk)
    })
  })

  it('works for public key', () => {
    keyPairs.forEach(({ publicKey }) => {
      expect(pem2jwk(publicKey.pem)).toEqual(publicKey.jwk)
    })
  })

  it('can add options to jwk object', () => {
    const jwk = pem2jwk(keyPairs[0].publicKey.pem, {
      use: 'sig',
      kid: 'foo'
    })

    const expected = { ...keyPairs[0].publicKey.jwk, use: 'sig', kid: 'foo' }

    expect(jwk).toEqual(expected)
  })

  it('throws if "use" is invalid', () => {
    expect(() => pem2jwk(keyPairs[0].publicKey.pem, { use: 'something-else' })).toThrow()
  })

  it('does not throw if "use" is valid', () => {
    expect(() => pem2jwk(keyPairs[0].publicKey.pem, { use: 'enc' })).not.toThrow()
  })

  it('handles when input has additional whitespace', () => {
    const privateKey = `
-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQDEJNZcY9UAPhpzSjjJXmo+TAR61dGH9rzRI8FhVRlxHWHN+U9d
Rjd4ML2fL09G5QhkdKCNC0LGXETT1z4s4NdobKwyK0vZY/2WuzgCXqVp7JdVDj25
icX3i1Ff4mwW5DdBDlyMtcFu6vkKRPS2MUbaWHHxuj7EQBqySP5pAomZvwIDAQAB
AoGAN5xOHnG7kU8KRsezY/xd2P3Kg10eBBODozQk/siW5wgyk6hsxQBEd9Ix4PET
5ADJqVmbr4GS1BSS+xDasvSofZa9a1jJHS0L+go6OiljGMuGSYAmyaYYsbYMkA2O
N4r8iACEvymc3u91D7DatomH5vLQ3pKzNfka2GMVm2hg6RkCQQDmP8m7aC6+Pjob
pvP6lW8+oPZkzdUp1Ss6IKZCC2MMDwRBlGFUDuRWZ0afIvDsEjRKUXJkx7kuqf8I
rF4cSRqNAkEA2hSWwRZv8HJ0W/FiG72dXqFctpOsz8ghKaGd3PewXp/sRQkX78VM
ewajCZq5WXPacPEY7negW191LzyHcsc4ewJAeYU/Fm8VBIlZJ9EEwcNu1DIl+Ov9
zjdYujQTK5ZQ70NZrrb+a1v0vXmCd2j8mMu+116HLpOOtAc6uDwo62rV3QJBAK0B
PmNpwF34/pReFx24vBpxWpLA7oxb0Oss+oZsvK8koZRW1XVyiOzkY/zfkQEE5ptI
uSWdI0q5nMZfd3i30PcCQGOfbi/5Hnyp/bkYtTApP5o2+5GEaLNtmJQbd1NYfeUi
xv12VGtXh/cXjnVYbi0aBswrqXSkG05zQlQrvh8dR6k=
-----END RSA PRIVATE KEY-----
`
    expect(pem2jwk(privateKey)).toEqual({
      p: '5j_Ju2guvj46G6bz-pVvPqD2ZM3VKdUrOiCmQgtjDA8EQZRhVA7kVmdGnyLw7BI0SlFyZMe5Lqn_CKxeHEkajQ',
      kty: 'RSA',
      q: '2hSWwRZv8HJ0W_FiG72dXqFctpOsz8ghKaGd3PewXp_sRQkX78VMewajCZq5WXPacPEY7negW191LzyHcsc4ew',
      d: 'N5xOHnG7kU8KRsezY_xd2P3Kg10eBBODozQk_siW5wgyk6hsxQBEd9Ix4PET5ADJqVmbr4GS1BSS-xDasvSofZa9a1jJHS0L-go6OiljGMuGSYAmyaYYsbYMkA2ON4r8iACEvymc3u91D7DatomH5vLQ3pKzNfka2GMVm2hg6Rk',
      e: 'AQAB',
      qi: 'Y59uL_kefKn9uRi1MCk_mjb7kYRos22YlBt3U1h95SLG_XZUa1eH9xeOdVhuLRoGzCupdKQbTnNCVCu-Hx1HqQ',
      dp: 'eYU_Fm8VBIlZJ9EEwcNu1DIl-Ov9zjdYujQTK5ZQ70NZrrb-a1v0vXmCd2j8mMu-116HLpOOtAc6uDwo62rV3Q',
      dq: 'rQE-Y2nAXfj-lF4XHbi8GnFaksDujFvQ6yz6hmy8ryShlFbVdXKI7ORj_N-RAQTmm0i5JZ0jSrmcxl93eLfQ9w',
      n: 'xCTWXGPVAD4ac0o4yV5qPkwEetXRh_a80SPBYVUZcR1hzflPXUY3eDC9ny9PRuUIZHSgjQtCxlxE09c-LODXaGysMitL2WP9lrs4Al6laeyXVQ49uYnF94tRX-JsFuQ3QQ5cjLXBbur5CkT0tjFG2lhx8bo-xEAaskj-aQKJmb8'
    })
  })
})