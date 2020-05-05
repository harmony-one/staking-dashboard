// hmy_getSuperCommittees
const _ = require('lodash')
var obj = JSON.parse(`{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "previous": {
            "quorum-deciders": {
                "shard-0": {
                    "policy": "SuperMajorityStake",
                    "count": 106,
                    "external-validator-slot-count": 76,
                    "committee-members": [
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1d02tffmrxp6m392uxayxlpyaekdl6k5znnr7tw",
                            "bls-public-key": "2eb44f4d5cfed5190b2935b6bbfa0b17b78c1aa1e236bc3795db3640a15249e062291aa0bbce9e4ea1002bbe3cb61500",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "47076109568739000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one10zw75ytwku6ek5hlxu8mnet49uwvd6zu5mukdf",
                            "bls-public-key": "80f6efd3d3f539434a994727b4e35410e0e3666d3d865e431d5d03e18a67c5a0f02142e8a8a24257e3bdf318a1d4ff14",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ekup98s5tqxtr5hdzsz664cfy579jpq6w5smrr",
                            "bls-public-key": "718b9ead7b9aaa9cb70570450c6256937c86f08978c8a48b536c2a849f61ff52f1b78b39014064cefc5f223efd45a080",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "14359214388330000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1jm28f73rmg7lnca7duuyuqrhkp4ahfzdvzzdsf",
                            "bls-public-key": "becd65dfdcb41486187b5e9c4e1b0758ff30c302b0bfb29b57e92278c4c55a869c3d9d176b9b4339787b1e961e306c14",
                            "voting-power-unnormalized": "0.011000254172879951",
                            "voting-power-%": "0.003520081335321584",
                            "effective-stake": "10044673148036000000000000.000000000000000000",
                            "raw-stake": "10044673148036000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one14e5ffwdejnt7njgq54d9w8gltwrggdusyw7y5p",
                            "bls-public-key": "d69c70aa8e43853487760533ad1cbeb9f8e91d409ede23f5db9e0038528bd9914ecd8710afe187bb303cc345a52f0b93",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1ux7ll2z008k7z8we84qvvsxkkedvuvuzprm9z7",
                            "bls-public-key": "ce387d71bce300b4c5dd352b8ba03558a36a97b83728e5b64e70b9b0d0555bc22d7a76d4f382165ba15e4ce03d855492",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1zjlwqjty6kzefgt8lqgmsx4zzsafzdqxlejsvg",
                            "bls-public-key": "7a889a816230d7cd4db499ab1eed84e2ae5c115f5cd8a89e48831f29bade2b805f255b836ddb7bdaf02c6299b5ff3188",
                            "voting-power-unnormalized": "0.012798212891826922",
                            "voting-power-%": "0.004095428125384615",
                            "effective-stake": "11686445000000000000000000.000000000000000000",
                            "raw-stake": "11686445000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1n7puxkjd7mr6gr09ascyrd5z30mj23exwr3ypa",
                            "bls-public-key": "d13e1d260791bda54201d77ff44bab65e628e82a8d96e3804bb2852dc1459ecb59cd788c04a3f1fd3e2c6a5fc3242b84",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one10rr5n6qvjxlyhrhnkzxtjslzffrp4trl3wtsuh",
                            "bls-public-key": "2b1f282e9684d3a4d3bb77970deacf989e538524f704d92f7eed6fddd743abae23f0a4ef461baca47f33514f1963838c",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "14351610943107000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1rg25sq00gqzu38vhm4z4j7ty5j9mpq72et9zv5",
                            "bls-public-key": "4fceb39b832522462839dd3bd805e8784705a77d73ad4191f2d6bd7f44803796d7060007008078b0ab3fd6f806a0d014",
                            "voting-power-unnormalized": "0.011444055087809006",
                            "voting-power-%": "0.003662097628098882",
                            "effective-stake": "10449921523501000000000000.000000000000000000",
                            "raw-stake": "10449921523501000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1yd8hywc5rhas63l2mn9a49hg8znfnha2zntunc",
                            "bls-public-key": "a2b1b534c94bf19a92551f1d32d62b802be6996458f65b0baeb081c9972b34d72310e675fc7797b9c860d8cc223cee8f",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one190rdr2khdhn9jecmjex4m54gafn0y2ktyy9cxr",
                            "bls-public-key": "527a78e9a3b6f5a389cb9965121268603e735145b2e03c8ed5ef561dc423fac1684666e60fef903ba9a12bd8231bb698",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "22964391942388000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1xwp3sf6vetnl4hdlzp2wa7f4kn2lqrpdxzppzg",
                            "bls-public-key": "64c7572f1c7889d4d3954139835dca43998bd603d4ae7232f55dff82d166f42a65832423c03b85488905b14cdc68c994",
                            "voting-power-unnormalized": "0.014126571896263787",
                            "voting-power-%": "0.004520503006804412",
                            "effective-stake": "12899410792710000000000000.000000000000000000",
                            "raw-stake": "12899410792710000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one12zlfzd2tyfngcghslrmv57xmn7ec4cqct32sks",
                            "bls-public-key": "8c95e04a4826d4d80ef16183f13aa5d14eb3c96d2755407e15c440bb4edd6e4636a82e47975385c6223ba24759561103",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "778fedb1699a7741eae03dbdcbc376c983b1a23aa9da2548c1706442acc3431747a957cf7aee2ae0fa028bc0c83a1684",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one16ykp3hk3648dcu8rggrvwppfnkwytvs9ke583g",
                            "bls-public-key": "72e41c1af140e33d13e145e658c67657cc273a823fc96ba5a0d054c6b6187af759b59151412fcdec84b559aaea0df994",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1n9at5vm0wwkh2zj6ldtgp5aqe0tsnx7ymnglp6",
                            "bls-public-key": "476efad0d6d8a5c90a71b08903be7574ca6689d4c8c1e489db1ce24a204f5c7b236e969a5029a9c2368bfa1c5db25484",
                            "voting-power-unnormalized": "0.011821085847487868",
                            "voting-power-%": "0.003782747471196118",
                            "effective-stake": "10794199999999000000000000.000000000000000000",
                            "raw-stake": "10794199999999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1leh5rmuclw5u68gw07d86kqxjd69zuny3h23c3",
                            "bls-public-key": "8305a3c41781663d2ba7509382925365400941409da98260f26d3132f91196fb8cdc423906663eef36334556652eb504",
                            "voting-power-unnormalized": "0.010967315089800297",
                            "voting-power-%": "0.003509540828736095",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9203573349999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1uckk7fce9dfx0ma3hnz8q8n24dfdjjhdup8r7h",
                            "bls-public-key": "7fe6236649f37e199b8e3a033cb24ca27ad5a8fc7d168f87a82c7ba2731e0957a0b516c6b0370983be4f739dcaef1f90",
                            "voting-power-unnormalized": "0.010967315089800297",
                            "voting-power-%": "0.003509540828736095",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9919590000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one17hlq693v48gy9snnhvd7cuvl8g9nkakgaf3pya",
                            "bls-public-key": "ba27796a04c1e4d2cb2d946ac520c2b41589517cb9ae22e64718086c1b13bec1c3d1d78c274d4ffafd78e1b66705e496",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1njyvqvw3jq2klrl77udzuj4xlh8tslgj434urs",
                            "bls-public-key": "63efb4491b04f94d63944e0541c8d0c2afb3edd22c7f32c5c90698cfc4b2fc974145ee68cae14d12ec9c5373fc423d8c",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "15514334647999396829228846.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1dcmp24uqgwszcvmm8n6r5dvhqhuukdj86pkg6n",
                            "bls-public-key": "5e5ccd77a8d7d630f52d9572d8d63694ccfd18e7013729294365df154493cf481b6aa5ae18ba21bba345bfaf1d641e10",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "14866762121246200000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ps7d865t4k6gf457p9rst6alkkczdr9z9fapkk",
                            "bls-public-key": "d31e38437cac604b54bb6b5380f9767679f569801b3747674409fab22f00874aed5f437d1476764efa06876ef6cd198c",
                            "voting-power-unnormalized": "0.013224674847264989",
                            "voting-power-%": "0.004231895951124796",
                            "effective-stake": "12075860633959500000000000.000000000000000000",
                            "raw-stake": "12075860633959500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1dpm37ppsgvepjfyvsamas25md280ctgmcfjlfx",
                            "bls-public-key": "8a211eb5e9334341fd2498fb5d6b922b4a0984d6a4ea0b5631c1904de5fe21fd6889c9c032d862546ca50a5c41294b0c",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1jn5ak4qhh57feptrkqf4yzwtsc9azwx24r7p0w",
                            "bls-public-key": "547a324c91b2a3ae8535071ad2da9c7bf3c3574214b0b9ee390664a3c5ee37884d87e895aa175b590b449349daf65c8c",
                            "voting-power-unnormalized": "0.012355682020043332",
                            "voting-power-%": "0.003953818246413866",
                            "effective-stake": "11282356340308800000000000.000000000000000000",
                            "raw-stake": "11282356340308800000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u3stkh6x9ev6z2p2dkk30d26jglz4zykvlf0ga",
                            "bls-public-key": "43f5f449906028f00b68b31e1fee7a41f3ba692f0252ee929d6bf9b24fddf30f128d849e92b44bc6510023cac3a8e918",
                            "voting-power-unnormalized": "0.010967315089800297",
                            "voting-power-%": "0.003509540828736095",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "6005000000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1gzf2cmv607r64nths76ur3z5rkdl9n2ucnaw66",
                            "bls-public-key": "1833721b78797a16b1987734d05b08b9444e24075fda50ff2acc7b8a6d8e0aef0829bcb11e3b9df7466cf8a39e4e4101",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1q98lxvxcxl228y4dt6xqjrzkha206usucfx02r",
                            "bls-public-key": "58f36f139ce7d0d06b304fc75ab3fbb24fa57c40b0d8db47adb77aa5d23ffded9330afaf22a3564f6a0abd17e1bf9d88",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "15643364930663500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1d4lgd6skvqh24hxac0h7s4jpf7newr73wv4plq",
                            "bls-public-key": "922b2874d6fe9308634095ebdb74847f7851503987b7b352454c975a0ac8861adad693ae8f9ba5fe1e0060c6e06fd604",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "14715774307544000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1r55rwumsrm6w3d20uhaa3hm4rxr442k0qx9gj8",
                            "bls-public-key": "f64d27b412859b15cbe055d86e313b52f7a851b01782ff213855ef89c1ee57b1a5d25f8159c013006f104a8206b04900",
                            "voting-power-unnormalized": "0.012830188486545989",
                            "voting-power-%": "0.004105660315694716",
                            "effective-stake": "11715642906941000000000000.000000000000000000",
                            "raw-stake": "11715642906941000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1uehsyxsr36d8ntskrln0jwvmskk2x44kqycj9z",
                            "bls-public-key": "24e75a6611e25fe4d1abe5495ee80ac88351010756912993b5f327ff762b342c862df28eb083205afa0f4b672c56ce94",
                            "voting-power-unnormalized": "0.012469497736652635",
                            "voting-power-%": "0.003990239275728843",
                            "effective-stake": "11386285000000000000000000.000000000000000000",
                            "raw-stake": "11386285000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1gxezhtvlt7yt2rj6jqegtlkvqgzs5jyfzx7qlh",
                            "bls-public-key": "68c6e7ef3d891a155c9ca41d041addd012eee40571bbde3e2f719b06e2abefd4115195ac6100b39b57263e9a7b507588",
                            "voting-power-unnormalized": "0.011999373518271363",
                            "voting-power-%": "0.003839799525846836",
                            "effective-stake": "10956999999999000000000000.000000000000000000",
                            "raw-stake": "10956999999999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1mehlyz3vvd8jx3l7lt66wm7m8cn6xmre96utvw",
                            "bls-public-key": "cbc21b59a384f1a16e74ec97e7b63cd03451dd96f665fc0e92deadbefee1cfe579303dbb37bda6edc1bf9d6be8f9dd00",
                            "voting-power-unnormalized": "0.011243804058654822",
                            "voting-power-%": "0.003598017298769543",
                            "effective-stake": "10267066099999000000000000.000000000000000000",
                            "raw-stake": "10267066099999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1t8n4gyt6ta64k3js3vy8vffw53njahq2yzjlxw",
                            "bls-public-key": "583f72670f72e4546fa9000ab73b1b48e51780b93fed48cbf8507500d3b0a5e7e626331f6c41730b5483b14941dde000",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "18321466032276500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one14e55qn02ux59x3musrvwrpfgv67u6cvq6sf69a",
                            "bls-public-key": "23b45d2c58eefa44ff0563c815eec8a9efbd9064cf08c8392356b31f058ce4265edc23dbd0722f6c12a36086552c6688",
                            "voting-power-unnormalized": "0.012348586279921283",
                            "voting-power-%": "0.003951547609574811",
                            "effective-stake": "11275877000000000000000000.000000000000000000",
                            "raw-stake": "11275877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1fcm35f8e9xc3f7c4tu3sm7ygkh338f2v2sxzyl",
                            "bls-public-key": "24044191bcc50e6f43dc21d052c88885aadc0c693675d9a418d00d1afd98286658812f17b612658fc433e8eb619b5c00",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1hzck9h2lrhqnc5zcaf08ka4cx02z4yaucfy6hk",
                            "bls-public-key": "d24b31a4fd2791ebb3e83c8afc84b5011fb95c66a6aa241a3826048ed0e2fd6356c461ce3b50df3354afbdd3b26f0d90",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "14999999415000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1lu0dr894pf8enqzcza4ytm4wcx9eyzkx0f7ha7",
                            "bls-public-key": "0ebde7d86adf404a903f0856f169931cc0a3e4f78eafadaf575d839511abf15838e7af6baeada9ab2f13dc7d6291bd08",
                            "voting-power-unnormalized": "0.011129055901570772",
                            "voting-power-%": "0.003561297888502647",
                            "effective-stake": "10162286000000000000000000.000000000000000000",
                            "raw-stake": "10162286000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1taefmq49nv5k0rkr2kj4xv8n3a75m4vm6pvzg2",
                            "bls-public-key": "f248bd21d67f0b2cd0dd2c06446c557fc35737873857c000698ae391b607ca8ed8df00a79d9dcace1b0ce05492fc9789",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1vy5k5l58pa09hhz37vjw704zwdydak86wg6vdj",
                            "bls-public-key": "42c100b423e14387862fa419d81b430c9c6068d665e8a21737e293f49e41739795567176ab18070066a216eadb808808",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1mrm8xffrt9ruq40czu8k78tka03p5mteqzx29g",
                            "bls-public-key": "06e268d186891b0a7e7c116267d0ab02d13055da47ed697c8f42a382588497629638c75a169c34a4df647cf915582e00",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "15365619079644800000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1n7f0h0jaq0lz80daqppd8yl5nq026jfjw23zlg",
                            "bls-public-key": "02c3c1f6968adff78e07aa70cee4f3e9790e8d2213fe9f56c7ff41bd476fa67d4eb6274215bf7486b7d53aef96725400",
                            "voting-power-unnormalized": "0.014153401022814196",
                            "voting-power-%": "0.004529088327300543",
                            "effective-stake": "12923909300000000000000000.000000000000000000",
                            "raw-stake": "12923909300000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1drrv46y50uqym5nn7pxrj5sx4qzn6qesewqk3q",
                            "bls-public-key": "e6c33ada02e808fa7c2dd98734648cbb03c30d39e5c5deb5baae89c4b89e3b2356aff11cb94c35d7d955e14e131b4a18",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one10lld3hn55sg7s7ra0kqrpgj44km5uaytlq7ny4",
                            "bls-public-key": "ed73e02999b85033833f88341ebddb5cf70309d7aeed8e70084e88c93e03be9c838e7a2fa617ae806017b580f5566594",
                            "voting-power-unnormalized": "0.013497677477422109",
                            "voting-power-%": "0.004319256792775075",
                            "effective-stake": "12325147800000000000000000.000000000000000000",
                            "raw-stake": "12325147800000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1znu9dyea02l968hncspjpp8xxrzsyu26xkrjuu",
                            "bls-public-key": "32454cd8cfe11e9137ea05a259fd44c65e4a76764504186815c69ed745a226939642a8a16ccb79f4d990c6aaa19f9e10",
                            "voting-power-unnormalized": "0.010967315089800297",
                            "voting-power-%": "0.003509540828736095",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9809324327000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1yc06ghr2p8xnl2380kpfayweguuhxdtupkhqzw",
                            "bls-public-key": "e7f54994bc5c02edeeb178ce2d34db276a893bab5c59ac3d7eb9f077c893f9e31171de6236ba0e21be415d8631e45b91",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one147r29htvd2fy3l82arvsuqc8szqy6py35aedex",
                            "bls-public-key": "ead2f549dd09e8486b2b4095a67dddf4473b06fa003ccc6404afae5f5d56b632ccf2f8aae134c8156691e4953ea57c00",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1hgukx4hwsqu5h5j6yr963u83hrgwzdnrull69q",
                            "bls-public-key": "a8a8e45413f6134373652c3901265da161804551434f89e427a0f51f8a47bcc6b8537d8ede28178796e4a1abc5a1da19",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one135yfjuu5xhm7p3trj39tmg6v8pu067hgul38dy",
                            "bls-public-key": "b16e9a5492989618ef7c5723b4360b554ef44a0dd7c4624ab660d23431b2ae00b5d00e32c26bc75b50bacc68b7d50908",
                            "voting-power-unnormalized": "0.011618680060159615",
                            "voting-power-%": "0.003717977619251077",
                            "effective-stake": "10609377000000000000000000.000000000000000000",
                            "raw-stake": "10609377000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1rr93xyelu3r86spc2wv6pe79xuvj6z8hdjlktg",
                            "bls-public-key": "b54a2260f9b8c8903d39af9957685752a5bd4e48329f1a4b476dd871e99aa7e9c05682e44a3f739dbb1713bc824d3799",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1sn4c3zjj9s83ezfplc72sgvelalwp45yxltzv8",
                            "bls-public-key": "866da1ce28c6370f53b40c243d630044a1c24a5d8e9101525205e807710a7f242465ef020cb416f4f46bb1e9aab57b18",
                            "voting-power-unnormalized": "0.012902723635059173",
                            "voting-power-%": "0.004128871563218935",
                            "effective-stake": "11781877000000000000000000.000000000000000000",
                            "raw-stake": "11781877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one10muk9x4cuztjtxh097ghcftxhrscv4ranlm6eg",
                            "bls-public-key": "8e8b42296aef2ba1aed7e6a64b8734a0bd12a55c2c32d1a893129d0b3c0d04b2c2d778d5929cd8b460bc987141080a83",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1566p89a2hmwkxle67nvqq7pvncgy3h5jukdcnk",
                            "bls-public-key": "178604c4f3757bd6266a4b24651ef82d371db8dc3a1dcfeface2e15c00522a263bebc833e34f545a927ebea1e98c3880",
                            "voting-power-unnormalized": "0.012870396399603733",
                            "voting-power-%": "0.004118526847873195",
                            "effective-stake": "11752357999000000000000000.000000000000000000",
                            "raw-stake": "11752357999000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ykwud6atcdvpurn5lyrhfmu3kpf4quvzgtqsmu",
                            "bls-public-key": "0c0ae256b9ee46eddb1993308a42fbada95619282420cb36cb496718c8e24af6df3b25ad4a22e97ad3dd04631709b014",
                            "voting-power-unnormalized": "0.012604219658618521",
                            "voting-power-%": "0.004033350290757927",
                            "effective-stake": "11509303763999000000000000.000000000000000000",
                            "raw-stake": "11509303763999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1dzjvumwsmflf89m5r0w579lhn6p40xc487ry04",
                            "bls-public-key": "81891c77159f2880152e3ce5b978398782697eb16b0c656e35e3660f0185fe84fff28cf687e684f2f87873167a58f618",
                            "voting-power-unnormalized": "0.011811220888407773",
                            "voting-power-%": "0.003779590684290487",
                            "effective-stake": "10785192000000000000000000.000000000000000000",
                            "raw-stake": "10785192000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one155rynlqtatfupkpv9qftvnh8m0mcy6a8yrwwwk",
                            "bls-public-key": "581d2a6ea0872d64ea5664d49e2057aca47bd987e69315606eb87c69163c3a0e2b0e99899c641e8959606ea7e2fbf108",
                            "voting-power-unnormalized": "0.011684564742072378",
                            "voting-power-%": "0.003739060717463161",
                            "effective-stake": "10669538345808500000000000.000000000000000000",
                            "raw-stake": "10669538345808500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1re7ccpvjq09jagrfxmulzwkw9jy6y6g62u3xrm",
                            "bls-public-key": "d8135f6e42a8009fa68d2410e37c357b39704228e698a014554a7fc0a95bc87a7da6877b18b96f9f34a5be0bd35f3a18",
                            "voting-power-unnormalized": "0.014160915826235058",
                            "voting-power-%": "0.004531493064395219",
                            "effective-stake": "12930771300000000000000000.000000000000000000",
                            "raw-stake": "12930771300000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1ynftpycaceu06hz9c7v0hydu7qezx0vs8tvgmp",
                            "bls-public-key": "0a21f76b002c3d2ebdf9e9a761c8a26774f306d2e0eed329cd9c814efe0cda9cbd10d9b5cf04f30bbf0030d359c5a705",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one13nnamdlwxyqhdlscq9qfe5npedhamv7wj388d2",
                            "bls-public-key": "e27e4452d716fac92c46c4e0636ab05e1389a79c17555e2ba4e896ee9696be5e213b3b1ae9e2980eafd4425af3730d8f",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one169lk4c9qt57luh7zws5ap5swhz68kp0n9xvk6r",
                            "bls-public-key": "f3a65597fefc025493b00dbff904182b4e1da1c88f2743eb0690bc9db7bbabc3cf283cf7e98f4695e967d5418fd1ce94",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "62937063063c3c8390c86fd406b3155158fe8ecf1e82b0116e1e27cd8fb021c61c39469658d212cb89168ada8ab89a08",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "dfca9b0bb41a358023b75136f51882e2b5396806f4287a0200f772c2b7b8a5981730fbc7558b086da8217969518d3498",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1z3jh7jh6wy8aptw7qeyx9l2w4xer5wg6t9tgtu",
                            "bls-public-key": "bc43e8a52a584d12ae9a1571effc42d269b633d38a0ce2eb5b73032db9919ba02a07a2124b55bc63ebe87271bd67e184",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "16352137000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1a8avzz3hcvhfrh2tp7rdprpvwt838y9um9c2q7",
                            "bls-public-key": "d0356c9cf2a8a737167219729f35d7e8486ad104e839b62ca051e72e45ea49cf54041cfdf21ac7244d4de0890c76f40c",
                            "voting-power-unnormalized": "0.011366485556529851",
                            "voting-power-%": "0.003637275378089552",
                            "effective-stake": "10379090379447400000000000.000000000000000000",
                            "raw-stake": "10379090379447400000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1qlcc76thenzwgzy8x780dehygjdq6sef3czmxn",
                            "bls-public-key": "ee855bbeca8885cc9c335196af420eb7224e22c8647ca8b418c2b67d25c86cbd4a7435bf3905614ca21fd28bae28e408",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1j7x8ha4frwlgfnp9et8cncy4ptjy2sygpyv23z",
                            "bls-public-key": "bf22387e4ce19adfdd8df61754022c14f4a31d690404ec2eef81740da2787628fce0d28165db021e00cee34058156002",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1tpmtxkvv9ryn3ruy7evqkpslp83erutywhvwf9",
                            "bls-public-key": "eeab83dfea9753a4c00cec1d2a08722c544fb7cae7914fc09e84d6fef1e6a4c5fd8a1f1dcb9a028f509776423f074801",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1gx48chqc44kuacely55jm0glcwkqvsy7k2jj3s",
                            "bls-public-key": "9e4263a599be82dc0c61e6c117af02b1f4b46e5fe6f654a8b325586d11cca7a44fdd3f1c2c4004c02e04bd7f46183d04",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "35739520569606000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1l8pyucgwcjlrchkcdw05jqfsz58pnkk53kdle7",
                            "bls-public-key": "ca75abb7b6e16bd8a434a1f38b05b4b148ac575fca4ae060ddd176a5240854c1586579ea5a9d5c0771c80978aca39e98",
                            "voting-power-unnormalized": "0.011827437619543904",
                            "voting-power-%": "0.003784780038254049",
                            "effective-stake": "10800000000000000000000000.000000000000000000",
                            "raw-stake": "10800000000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1hzqu37h6mnfw3kk29w3r65xgjj2zz5evepuu8u",
                            "bls-public-key": "03406acec541e0e0d7cbcb7c0502b4901d09b4f563fe0db4cf3e3d18038373f71eb3f720d9d9c66244364bfd7ef09217",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17es0cg3xsl49r0kfnhsvpju8kgsn6kc57ae7nz",
                            "bls-public-key": "bfff42cdcce61c05045d061553b3debe3b5c9d53874c19fb372506f90ff6decdda60a162481c896d7552b17511e28c84",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "24999748641221000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1fllr7w9m3vwxv5evwvnaflk2qy0uauyarvl7hh",
                            "bls-public-key": "cbfa86225cfa21641ce914bf3d4ef8e6e736830589530f79eed434f8bebb939c18a695cf7f007ad5d367c4491ad49a08",
                            "voting-power-unnormalized": "0.014530322989926102",
                            "voting-power-%": "0.004649703356776353",
                            "effective-stake": "13268088434632000000000000.000000000000000000",
                            "raw-stake": "13268088434632000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ux8hw7ue7gs8k0vgspgsnx5neqxp34heawragg",
                            "bls-public-key": "28d6bdcbc569b7d4275aed117ed83334ef5c11c0e27ec849628b5e55c80e34df8e6b88f41727ad4e03ca7e0e8342168c",
                            "voting-power-unnormalized": "0.013123661931357999",
                            "voting-power-%": "0.004199571818034560",
                            "effective-stake": "11983622608540300000000000.000000000000000000",
                            "raw-stake": "11983622608540300000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1x9a8cl3aryhp9c3nyr0hzxzrhmlasgv4g47tya",
                            "bls-public-key": "ed393a3426af7bc5d8c7325e3a8d8451ea95696f9d3e32429979af7f84114b2a29130c65a59c1976dadc4a2ca126e408",
                            "voting-power-unnormalized": "0.012097187522519199",
                            "voting-power-%": "0.003871100007206144",
                            "effective-stake": "11046317000000000000000000.000000000000000000",
                            "raw-stake": "11046317000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1puj38zamhlu89enzcdjw6rlhlqtyp2c675hjg5",
                            "bls-public-key": "99d0835797ca0683fb7b1d14a882879652ddcdcfe0d52385ffddf8012ee804d92e5c05a56c9d7fc663678e36a158a28c",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1hwe68yprkhp5sqq5u7sm9uqu8jxz87fd7ffex7",
                            "bls-public-key": "15dad6a28f96880c1462e9afa7745a9e65fdc971c981813847a0e4d00849b476c18c1ae9b1d75126b158eeeb21f08910",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "283974908324705500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "356b0732524bdd3a2ac6f2a09aa29da9a71b73167f42c64e5ba2b3322d82f79ade31b56efe61782f25c354c1dec28f88",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1hwn68w7m5g8daltvrjkmq23qn58nrvr3yz6ryt",
                            "bls-public-key": "48ad00d97fb657f3476b5a8466798f33a23b16615091ebcd3587c14c9aad9e2e28c28fd12a7e9c887e621eb2f7860d00",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "16233173207520000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ae46extxed94jxfqthtl6j2tt5mn684zdh7gu2",
                            "bls-public-key": "faea76b6eccf17a61ba36a6a20b4dc9542eea9e5a8f83b48732247abb871f0f95ef4d23a8c13577050ef38a7817d4518",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "15186010900000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ygchq3eve4u2majguwh8e55k3ys8l4t5nex224",
                            "bls-public-key": "1599542a6a047d65c8900075e6a92aa03492e0373019e15a729cde20253983dff723fae4be6e0a55e922d923897bc680",
                            "voting-power-unnormalized": "0.011801955734388515",
                            "voting-power-%": "0.003776625835004325",
                            "effective-stake": "10776731700599000000000000.000000000000000000",
                            "raw-stake": "10776731700599000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1996e8rujj8xq7v23ztldwm2cpfwz7kqxzq7shq",
                            "bls-public-key": "6f59fc2dafbe524349122e1ce72b9abe4adf0690cf04cda59358b467965cbd22c9728e381e3c68d5e3d073b5ed2cfb00",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "14035462378809000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1536umpe5vvqdl3gp2lugukvk78rrn3jmmld9x7",
                            "bls-public-key": "c8a405b15961bb09a1829cd6d71a1feb983b24175e24e5a7b32587cfdbc7ad7c77ff78f953a9ad8523234c44d6077588",
                            "voting-power-unnormalized": "0.012938863149454846",
                            "voting-power-%": "0.004140436207825551",
                            "effective-stake": "11814877111100000000000000.000000000000000000",
                            "raw-stake": "11814877111100000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one14rujvdv383r90s2qer05jf5zwk5n4slr5h5syr",
                            "bls-public-key": "cc29030fd7888a9f2aa1176ae972787a87295aae79149e83e2113e4d71f49d473fa3bd89e8db968b8a42141d4673e918",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1xnzpe9aqgm7aqd9f4sgzm5ycqgmw7uga43f2gd",
                            "bls-public-key": "f97888cfd9c3be5b469bb7c2a8cd5f94f547e343610e89db418083c7ec2e9a22ad2598884a0737e62faf1f2539a15504",
                            "voting-power-unnormalized": "0.011667547089924364",
                            "voting-power-%": "0.003733615068775796",
                            "effective-stake": "10653999000000000000000000.000000000000000000",
                            "raw-stake": "10653999000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1gd0d2vdtuygksd0n9nxxrn0xthxl584ls6q0ra",
                            "bls-public-key": "c80ded184edb79de84f0e9f236c8abec76ce49494baf727fa888ef24768a206066a73ee8edf5b79145205e2076ff1f08",
                            "voting-power-unnormalized": "0.010967315089800297",
                            "voting-power-%": "0.003509540828736076",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "4199999000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1cts9rdxhd25hcwt6ulstnp50suwuzzdtsxr6pg",
                            "bls-public-key": "266e262c3a6c3e1a0ac3eb0f83e6745328953177e63762814dddfe7ed4fc0dc966cac7b4966936a8d16bba76dc088698",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "19316265617397700000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1a8v9d2mcuzkv73zuc2c5ssht9sh5wjejx32mpg",
                            "bls-public-key": "1b5e942f91a4c74f72223488820e5101c18d305a7a1bc1c50dea3557b68c05c983e8946bfc24cf198f2fc437053a9b14",
                            "voting-power-unnormalized": "0.013712255172699225",
                            "voting-power-%": "0.004387921655263752",
                            "effective-stake": "12521085346537000000000000.000000000000000000",
                            "raw-stake": "12521085346537000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1sus3s4pe9cjv42r2ddfpwly4kr5g67nyquzh9u",
                            "bls-public-key": "3fcf948144eee7fc7534a76eeb3b98d85ec4a306d621a382a93971d170c4e81c11dba276e4a84367a466344a1ce7a20c",
                            "voting-power-unnormalized": "0.012789588598919378",
                            "voting-power-%": "0.004092668351654201",
                            "effective-stake": "11678569890750000000000000.000000000000000000",
                            "raw-stake": "11678569890750000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ce9rr00xr4pjfhp7k20j339emqhsegm8063vr9",
                            "bls-public-key": "c0f93557b237f799d4086d931649a9023a0807893dc3c8265033a482fa128fdfa39efadff5fb9411f873aba255272488",
                            "voting-power-unnormalized": "0.012361029182350288",
                            "voting-power-%": "0.003955529338352092",
                            "effective-stake": "11287239000000000000000000.000000000000000000",
                            "raw-stake": "11287239000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1gle0elf9ckg5j5v9qkn7xv2w2e7vhv38fe93fq",
                            "bls-public-key": "e3bfe63510fc86c638c1cea8fc553e1b9a35812f767c35f8c174d563b228f9d76955fa35c171741ae6e99e780235ac98",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "15083875297925000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one135f4zp70a6dsv759rx72f7t49ev8hmqn67e4ta",
                            "bls-public-key": "d16ccb8b0b805d31066da270396cb8ed20db45a5c7741c709285d4064ee00040234506d03ed61c6d434321d8d07a7a8c",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "14538863208172000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one13pe96vgege60pjhzuaw3fkw9veq032a4yupjvs",
                            "bls-public-key": "d6915141cc262b09f2cea56ffec2d32cae724f7062e580d576dec9256d865a19bbb0bac13f5f9a63309ea9a38fad5708",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "17559494094743000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one10ehr5wca4gpt298ppklwuypnzqg6r44hl7ffgs",
                            "bls-public-key": "7b2b06915b1416abe6edd51d9bde4699b83c35749e569cf530902aa10a349b7f9c918bc5572b650e283e80445ecf8704",
                            "voting-power-unnormalized": "0.011786030677667714",
                            "voting-power-%": "0.003771529816853668",
                            "effective-stake": "10762190037551000000000000.000000000000000000",
                            "raw-stake": "10762190037551000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1j9gr0maryak7mmgkgw67gsgz3wxhmnv6cpvnqy",
                            "bls-public-key": "8a742d8c2419c862bea4de4cbae81b1223b2c369d688dc2bbcc04c2717bd71eeceae05b7ed84200abae634c01a494918",
                            "voting-power-unnormalized": "0.011086224278717932",
                            "voting-power-%": "0.003547591769189738",
                            "effective-stake": "10123175117179000000000000.000000000000000000",
                            "raw-stake": "10123175117179000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ss2xx6agknad0k3m0v5m7sr4xz97vzsk0rk4a6",
                            "bls-public-key": "c2fa456fc54960829ab205014e8eb2c359b4f8b0ce3759756031bf2a57ee4b5d69c8ef94716ae8a33cb47ada9be5c884",
                            "voting-power-unnormalized": "0.012902723635059173",
                            "voting-power-%": "0.004128871563218935",
                            "effective-stake": "11781877000000000000000000.000000000000000000",
                            "raw-stake": "11781877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1gstn0y39xlman2z5xmhszmgcltwdtyha8zvcet",
                            "bls-public-key": "2658879e6dd8dbaf5b3f4d4c6efbf077df88b7a2cfa9ff80e392c56b178dafa68a78d073183dd0921e07294865c2d399",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1h8gvhr650aydxdlzdlwz64gu4knps3fxmchxa6",
                            "bls-public-key": "5b3ef6640ca195940bb9d3bc2a2d39401f2eba94185c6900e420a3cd6add8d6fd1a4d117d1e3640343e61bca12504218",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1kudknr8x9t9hp9znl5n0guy239mhn2a4wpektc",
                            "bls-public-key": "a24ef25fd8139314d898bea9ddf3ec5c38a198a35e79bd130f9e0f948144a94bc9312f559c6901fc7a0d8ee1a762d088",
                            "voting-power-unnormalized": "0.014449176435678119",
                            "voting-power-%": "0.004623736459416998",
                            "effective-stake": "13193991000000000000000000.000000000000000000",
                            "raw-stake": "13193991000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1fxpzt6wrhtgavt2wuyxv0vys2n73888ef8llg8",
                            "bls-public-key": "5816b0c90cb81bed2a1a465f76df18420583e211c5aae899756bc2a1e7716983babdb0e8e41f6c9b474cdf40c1db4090",
                            "voting-power-unnormalized": "0.013360452035803908",
                            "voting-power-%": "0.004275344651457251",
                            "effective-stake": "12199842994584866772700000.000000000000000000",
                            "raw-stake": "12199842994584866772700000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1lsvf8fms0emzvw45eazx855cdjh6x467fa4ad8",
                            "bls-public-key": "2d848e108d36985cc4b355fefb700eebf59ff56b57c69e5e93bf4efbce21dd6769674a12f1ce7ba5cfccbaae13ea218c",
                            "voting-power-unnormalized": "0.012542083810469248",
                            "voting-power-%": "0.004013466819350159",
                            "effective-stake": "11452565594532500000000000.000000000000000000",
                            "raw-stake": "11452565594532500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1v0fguw8l5l0gk7fvjq2h9pqgxcekrvy273pfsy",
                            "bls-public-key": "0c3fd89575cd27f81d910ae0e25fa28bd0973fc16e5669c5460eb6717ce3fd00ab55c05ef7b2dfc3f1b74a1674f08788",
                            "voting-power-unnormalized": "0.010967315089800297",
                            "voting-power-%": "0.003509540828736095",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "7274041718057000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one18tflcxt67uar3wtvvlwuae3jux3m62vq92wkam",
                            "bls-public-key": "c412add5d19b3e40491808d6cef958eb9e4a1e7770cc5b8046870f6aab078c9aa4d3f8ed8396e4d18af83faf0e5bc70c",
                            "voting-power-unnormalized": "0.014838132180318049",
                            "voting-power-%": "0.004748202297701776",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "98089542452727300000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1fzalye006mpjkss2thhd2rtplemvu6wkjxxzmx",
                            "bls-public-key": "e52d7ee43f9a9a44d5329adfe7bfd70547f6894d52de3114de73f213205b72f5809cf97975a0f18006573e209ca37f94",
                            "voting-power-unnormalized": "0.012226727446614968",
                            "voting-power-%": "0.003912552782916790",
                            "effective-stake": "11164603921076000000000000.000000000000000000",
                            "raw-stake": "11164603921076000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1tcdagh2wwlcnw5c2dwenz9k0t9ckssyrwy6c37",
                            "bls-public-key": "74772987f4d907c7222687305f3d2f318abddc8d51f910bf5726c4e0dfe9e2e66cf985c416d8a03f98a3155c1f2cb310",
                            "voting-power-unnormalized": "0.010967315089800297",
                            "voting-power-%": "0.003509540828736095",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9754613000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1a8mnuqpq5ge9z492zzqqrgjhlccgrl04aumd89",
                            "bls-public-key": "f2fff44529c72145644db258b61385258011b7a56540241f41bd2fe1fc4f5764fc0285662412b2e9e7e8dec29f613b0c",
                            "voting-power-unnormalized": "0.010967315089800297",
                            "voting-power-%": "0.003509540828736095",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9605057000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u3stkh6x9ev6z2p2dkk30d26jglz4zykvlf0ga",
                            "bls-public-key": "dd7d66b75f5f9d3122b246641699d1a19960f41ca2002e489cd71b0707f07d6bc42864b2bd5ab9420951ffd80e52d018",
                            "voting-power-unnormalized": "0.010967315089800297",
                            "voting-power-%": "0.003509540828736095",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "6005000000000000000000000.000000000000000000"
                        }
                    ],
                    "hmy-voting-power": "0.680000000000000010",
                    "staked-voting-power": "0.319999999999999990",
                    "total-raw-staked": "913131004990789866772700000.000000000000000000"
                },
                "shard-1": {
                    "policy": "SuperMajorityStake",
                    "count": 116,
                    "external-validator-slot-count": 86,
                    "committee-members": [
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1qe9wp88t048y6r9hlzf42jqv6v8cfnk5enl94c",
                            "bls-public-key": "2c0ba52118e3f3ad5130b189a2040a3f47b608ce698e4eefaef6acd97b0ba5aa8c2ff0d28189faf9c7f094ccca6e6c09",
                            "voting-power-unnormalized": "0.010804363487288527",
                            "voting-power-%": "0.003457396315932329",
                            "effective-stake": "10672115074961200000000000.000000000000000000",
                            "raw-stake": "10672115074961200000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one16c5uajv6et2mauy4rlqwne4wfu8cpzzuwsujsw",
                            "bls-public-key": "640bcc532b507981a832d3dce3d2f86d66b314a9d6cf4e6644629ce83786c6deaf9ec52ed15f9e08df695d6417a0ad8a",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one18wdjw3yxhr7958f54s223mc7m303fd6vexlves",
                            "bls-public-key": "61a79903bd1660e847a9cb3ae42229471d8bfbda5e937b17f0ec01105dd04447848b23f81948d23215a0d4c3a6d43a95",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1pwx3vtwaxdetlx5kzcqhuc26hfc4fc9cp0stgx",
                            "bls-public-key": "851194219e2df66dc33203dcb3344b88ab6ff248236bf67422b5c9b5478e5c2f0a424050b4c5901d6bcb72ee03219c05",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1d5adetdwd6zkhu8l48q9fq4j4pmwckpu3eng67",
                            "bls-public-key": "0c0bc237d97290e31a9282f6162ecfca5c5532e59298ed3fedbbf8fa9642e9a35a67df277b9c70c5a7886eea3c54cd0d",
                            "voting-power-unnormalized": "0.011927877536589184",
                            "voting-power-%": "0.003816920811708539",
                            "effective-stake": "11781877000000000000000000.000000000000000000",
                            "raw-stake": "11781877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "2992b4fa2d94d3ba42a43c6cafc0436c6bc33aeff346014e637af676c16f1514c8daa7ab5edf7b431acda813332f4505",
                            "voting-power-unnormalized": "0.013717059167077562",
                            "voting-power-%": "0.004389458933464820",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1hq70696u36wfhpfzjggsm9zw3vz7l49403ndtx",
                            "bls-public-key": "832672b827e9d07ba1aad1e3550e38b869d14d771cc20d10b66263e2fc5e3383cedccc5d06b64ced3b75b78e70556c09",
                            "voting-power-unnormalized": "0.010707682004098947",
                            "voting-power-%": "0.003426458241311663",
                            "effective-stake": "10576617000000000000000000.000000000000000000",
                            "raw-stake": "10576617000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1rhpfn58kvmmdmqfnw4uuzgedkvcfk7h67zsrc8",
                            "bls-public-key": "c9e3840c651df5ea559f5c9e12f816a28a706627acaeaa73affd0c7bba049f6fb0457d616f07978c2ec8f8c5f46cc011",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "10004334000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ka8trua6hsqmszqzthr30cj0rxz33lklq307zl",
                            "bls-public-key": "f69cb2dbba98a4fbbded60ad8a8e599762afaf4c9031cd0a5b2e1aa339abb8dd91d17a938cc96b4d9ca62eee39976995",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9689422000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one19lj3xq29rvhwepwg0zk4j3nl46wp9df9wpmpk7",
                            "bls-public-key": "eac7fa740a4ff3d51ecd9e268404312c80bb0f7b72172d89c73c50be2e00b0d711405fefe34622b2f78d72865c35dc05",
                            "voting-power-unnormalized": "0.013717059167077562",
                            "voting-power-%": "0.004389458933464820",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "26921511573999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1z8l2gca5rw5ws3pss0p76fyla9ge9zer3hne9d",
                            "bls-public-key": "144d3664a430c34f35ccffcc8c8d704cdfa44dea81597a6c85af5ece395516fafbf7ad01774bea15413da8a0773acd81",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9673378000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1v23gu2vl237uzqgcnwnnm8nqv4ckr6zehfkm0f",
                            "bls-public-key": "65927ba35be03f040053369745fe7867bac95424b8a6ddd0819fe30a309ece9afd148e7883020f26b10bf93b8cbb210d",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9295497000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1js0e3rw0qpy3r2x26n8xp9ja7qwgxj6ht064v2",
                            "bls-public-key": "90404f04db155afc0444210b83a1f6acb29e0c479a31222afe7827b643067754817af06fbda99600d5afcc0dfd510c89",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1jw462yf0ltq82rvlnjaxazqupja86rpkz3pvqz",
                            "bls-public-key": "dec11a8d74b5ce864016644013c985647624555c12e1c19d6a5f32134b26e08c3d33d969d409aa6396138e35ed5f0099",
                            "voting-power-unnormalized": "0.012209391384334796",
                            "voting-power-%": "0.003907005242987135",
                            "effective-stake": "12059945039998000000000000.000000000000000000",
                            "raw-stake": "12059945039998000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1awswe9xrx5rcjxvtdd6lwta9py2t09g6cet05h",
                            "bls-public-key": "2dd420cd3ca4279ebd5be60c153c6e0cc82cc3d0784ac2eef64fc64e0eec7fb22da3617018f8c91e9ab2aa7cb1ac1091",
                            "voting-power-unnormalized": "0.011542608496446240",
                            "voting-power-%": "0.003693634718862797",
                            "effective-stake": "11401323760000000000000000.000000000000000000",
                            "raw-stake": "11401323760000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1t73da8de332nfx7x6hj9pnas2aa3e8pcrvryw0",
                            "bls-public-key": "842698605a26e28aef1ff006292389e5c2716233bcf91c54adf4562d772e7c07e8aee292fa698027c113188df7b95999",
                            "voting-power-unnormalized": "0.010847855769955536",
                            "voting-power-%": "0.003471313846385772",
                            "effective-stake": "10715074999999000000000000.000000000000000000",
                            "raw-stake": "10715074999999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1es8mknwyq4zr45qvey82pa578q3th062sk6lzj",
                            "bls-public-key": "a4955e29ea83ff526211afc8bec440bed5058833bf5b2160404c46538e331a6a394d02a6c8c984a92de10393f7e6f009",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9271877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1q6vjpxdx2wvaysahjxm0qkt03uq8xyjgkdskfe",
                            "bls-public-key": "6ed606f323da02b0e18d64a87a1b42641d847c15e9e11596e77d87d34f26679785fb4e76d270dc9d14bb539f02157501",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one19pv470fqeujmgckqm5h7q3ykhfsyarj2u5rlp3",
                            "bls-public-key": "3a3d6481bb95279254ad74649e65e31a18818c56da38c3623af86e5527cc7bce62f84187f10c9b6c30fd485196501518",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one158lxgxleyvm70a0tjlcc39um3yuf0jejlr3qlg",
                            "bls-public-key": "fb5c286f0ad78e1c029b874d96ee251c6761facf4279e95fe566af08221a1d05e1da580b9babe4f8a2f38ff0c5543c8f",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one14c9sgmh2lgpc3lk9t4frs3vs9cf7zy3rkrwyzx",
                            "bls-public-key": "4ac7a265e7ddc0cc71cb14cd10ccb87b241e84a5a7acc7bae3ebc1f1164dafca754a54ca92672c5e11967bc04c000299",
                            "voting-power-unnormalized": "0.010574912350741435",
                            "voting-power-%": "0.003383971952237259",
                            "effective-stake": "10445472484105000000000000.000000000000000000",
                            "raw-stake": "10445472484105000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1cpyxfht07yj3sug3mk7ymk4rd6e5u9w62f8y74",
                            "bls-public-key": "0ac6418533bf747db097810ae93245d1ac1b4fd55cbcdf08669721f182edc4ed37d73690d8764a801c29bd1f54267381",
                            "voting-power-unnormalized": "0.013717059167077562",
                            "voting-power-%": "0.004389458933464820",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "188222937068390700000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1yjfg8kua4tvs8gjtdjed90gse3cmvd0yy6wcwu",
                            "bls-public-key": "81b038da89b005335e677f61935d552e866e281a57fa03fe95c5154ecc5f8cf3d5a5b83486acaba38bc90d69b1738881",
                            "voting-power-unnormalized": "0.013282582596496041",
                            "voting-power-%": "0.004250426430878733",
                            "effective-stake": "13120000093412000000000000.000000000000000000",
                            "raw-stake": "13120000093412000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1rd6wgcpcq8jn40md379ftlew8ukewu8ztl4n4x",
                            "bls-public-key": "59045a780785e3d5cebc2532be7ebd1ee4f236594e8484bff36dd1d0c59b1f94c344507eede9c9ad0fd283a11c452515",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9289717000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one149h38k3rt8m8gfaxxfn3zn43lqt6mzlvthcy5e",
                            "bls-public-key": "85dde30f23ffd30b511582550a20d675e96beaf348af5c1401eaef69e8485ac867cd78e9d4e59f42d9c65b8ae4466981",
                            "voting-power-unnormalized": "0.013717059167077562",
                            "voting-power-%": "0.004389458933464820",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "74999999999999950000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one14nt6nwd3p9v5dk7er3rkvg6y0nh8v9k7j3nuqq",
                            "bls-public-key": "6094253b1c87ac6d65077588a9452f983a348a7439feea9607ea90cf257acac37ae5f8be18fdf60e3bd7b20fb0f8b509",
                            "voting-power-unnormalized": "0.013717059167077562",
                            "voting-power-%": "0.004389458933464820",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "20558389039903000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1237cvlujddq9f68s94344rptsuwx0h7ek5lcnc",
                            "bls-public-key": "c7c333c66d3c88440b8595306d5cdd733294f3d35b6da5f37e94f0241c620f0af4766a4a4dcc44704a18f2aff7be2785",
                            "voting-power-unnormalized": "0.011255494440584622",
                            "voting-power-%": "0.003601758220987079",
                            "effective-stake": "11117724059990000000000000.000000000000000000",
                            "raw-stake": "11117724059990000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one12eq6zag7tjsgm6s68ms9es4xd97eyjgkmf7et0",
                            "bls-public-key": "4a349cca1e4f67db7a9a188642286c17439d30b76f60d389adc74bec7ffdef49744fccc99d1861a7c6a0294f392c5b09",
                            "voting-power-unnormalized": "0.011937687614671781",
                            "voting-power-%": "0.003820060036694970",
                            "effective-stake": "11791567000000000000000000.000000000000000000",
                            "raw-stake": "11791567000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one148gj6aajacau3j0sgpafa3e6grxngy3gjfhw40",
                            "bls-public-key": "365cfdec86227f8fab1bdc9d5bbcb91a4396f462ec2bc638701e1a0a9c46705b67d4540408fcb33aeaec2ea3b2247195",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9688971900000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1452w86hryya3ktnjxuevsttqlc835svje6sqym",
                            "bls-public-key": "d9c0750bf91ef22ece0fad07c6bd11a6f3c65615835a65c480c308560994485d4b27c2a62cdf90d0fb2d4f436845c914",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1x2ge0efu3mv56mpndzsrwtd62d24qtshkmsp56",
                            "bls-public-key": "cf8e8ac33008ba6f286a276e07a08cb75683499795cf05078c176b51b1b8aae43276e39b5175ddf898c595e890146011",
                            "voting-power-unnormalized": "0.013717059167077562",
                            "voting-power-%": "0.004389458933464820",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "95158633699998000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17n0g9ccvaz3j2tx6hx5aq94czf54ha3h5e376e",
                            "bls-public-key": "cbe242f24fe0ce3076c243d352710c0a444da5c9dcd08b72c5113e9d84bb278fbce6d0d7b42977e57670f505ceebec91",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "10008773399999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one120lxth0nlgk3nhusnhcaht83p8346m5uku235n",
                            "bls-public-key": "3a6c844cd65fa07dbbd6b256a6c04be4f9031aa0043b37e5897a5bbfa35ad32dac3e308e04b17962dff07685e2c2180c",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1zc9t45u2uege2rr0fu5jn323vw6zknmme2szhw",
                            "bls-public-key": "38de540c3df944e2982dda39f9a8d4ed69d0a23852580f7d818654d6ef9b0e1defdcfca3b33d36dcf04789659cc2878a",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1yr22qm5su0s3tpl0dzytj07ru6ywrxrpg4caz7",
                            "bls-public-key": "a2ef59759bc200f4d9b471ddd201e9e0c7f5fbe696180b98ca2294c800afc550c877ea7c9c70191fb7192fd897161b95",
                            "voting-power-unnormalized": "0.012887486416011710",
                            "voting-power-%": "0.004123995653123747",
                            "effective-stake": "12729740000000000000000000.000000000000000000",
                            "raw-stake": "12729740000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one13zw4cvg2jnuq494r79agr2pq5nr3rlmp9lh3e8",
                            "bls-public-key": "e0bf10df5e9b77753ae384350492945498bbe73399a60452bc73785a50fcf4dc742f32d7fa8b04e144c542e0c6183f99",
                            "voting-power-unnormalized": "0.010164873881799944",
                            "voting-power-%": "0.003252759642175982",
                            "effective-stake": "10040453000000000000000000.000000000000000000",
                            "raw-stake": "10040453000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1080c4h7uev7u68s330vnxsfw7h6t86ufer8923",
                            "bls-public-key": "6435387ff7654d16d6eb77029c18157a2056cb15bb9391ab7926bdb955b64e7a472228ad60d5e6889c2883b15837a915",
                            "voting-power-unnormalized": "0.011035985530519467",
                            "voting-power-%": "0.003531515369766229",
                            "effective-stake": "10900902000000000000000000.000000000000000000",
                            "raw-stake": "10900902000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1g520fddr2y4skj7crgp607uzzammlyy6tqgrln",
                            "bls-public-key": "b1a2f231ab6718d6454c4fbaba10d9a919bc1c236b4ec8b0b78746fca58bcdabe8de4b8c423749c21a10de3d408ebe89",
                            "voting-power-unnormalized": "0.011007051710317585",
                            "voting-power-%": "0.003522256547301627",
                            "effective-stake": "10872322337800000000000000.000000000000000000",
                            "raw-stake": "10872322337800000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1jg8yescd779juu89rcg9cjcwedsu9ptacdyqrl",
                            "bls-public-key": "0501e4924bb1200a5cf4334c9a5476cf6b0e4b8930671d240284844c9c96ccddb57b4b9cce6db94dde1c606dcf044181",
                            "voting-power-unnormalized": "0.013717059167077562",
                            "voting-power-%": "0.004389458933464820",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "18659188142549400000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1yc64ch2fthece9ngplvxjnywqnguacp0e39s3h",
                            "bls-public-key": "6c56ef94ebb523ebb48e25f4d1665756885c6b8d6dde7d413d2a540a815dcef60671ec2a8bc03691677eb176a65fd799",
                            "voting-power-unnormalized": "0.013717059167077562",
                            "voting-power-%": "0.004389458933464820",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "13923517000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ur06pgutfdqcnah5qh6czecrz65el4vh4x2lws",
                            "bls-public-key": "1dd099f60af6cda418180e663c527e0175ed11c42a3920683d1a1e33a8500ba69cd3b5ebb7d6801ac2dbce6b1611a185",
                            "voting-power-unnormalized": "0.012779870578243916",
                            "voting-power-%": "0.004089558585038053",
                            "effective-stake": "12623441410000000000000000.000000000000000000",
                            "raw-stake": "12623441410000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one13aydpznlr2wlhu62etn6kf3eya0fgazm0ynyez",
                            "bls-public-key": "fd0225712ef2178f00a2b8e2f0ef7ec1781c69228310cdad48eaf78e2fcee8d7bb222b08ebd8b0d483fe7738b3ac0701",
                            "voting-power-unnormalized": "0.011301465020610383",
                            "voting-power-%": "0.003616468806595323",
                            "effective-stake": "11163131947338000000000000.000000000000000000",
                            "raw-stake": "11163131947338000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one19e8qg44vd26u7pp7nyp7ewgr8nqewwz57kwd2u",
                            "bls-public-key": "941a8b18993f238f84282fd2cfaeae92349f20c0c077f7e6ea1e239f5b7512c937a48656e0113aa93ed4f9b9dfa91d89",
                            "voting-power-unnormalized": "0.013717059167077562",
                            "voting-power-%": "0.004389458933464820",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "100000000000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1p9xya88j2344kgslgxxkugqg38ua59s4uc5ru6",
                            "bls-public-key": "9f63ff2423cfb6adeac732b73163b8cca684cfa907b31dadbd9e40b342984304ffbdc777ac715dc96235138051cdca19",
                            "voting-power-unnormalized": "0.013677228761846040",
                            "voting-power-%": "0.004376713203790733",
                            "effective-stake": "13509815680000000000000000.000000000000000000",
                            "raw-stake": "13509815680000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one148ghmpck56hkmprx7p0yuf0cgrpkl7lj47tyea",
                            "bls-public-key": "7e40362268e44a5cc1de9cd9e6341b9a558cfc3bc34a152b5450b40c1aff67543b1462ede1d0b2066838acdfcae6d001",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9536546714320000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1yyayy87jcrdr8669cg7lsqtn4j94zu5fca25yp",
                            "bls-public-key": "2cad967813e89ea39e89fa849f50cd7bd57eb6e019ec32c9e977d6fc73f24bea4e16b5cfbce2cbad3efe5b9acfa35581",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9271877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1cra2m6atas4wtda25vd37rvc7x0x8cwqnwrnxs",
                            "bls-public-key": "721fb6c6e35dae99dd6fa6e058376fb4e85d3879d29d5f46a07c9dbfe064cecb4852be7a0b914e626fc8e75e30253215",
                            "voting-power-unnormalized": "0.012147221720367803",
                            "voting-power-%": "0.003887110950517697",
                            "effective-stake": "11998536349999000000000000.000000000000000000",
                            "raw-stake": "11998536349999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1wnkg99y40gq9thp9h2velmefxsncm24rq65l8z",
                            "bls-public-key": "4cf88358365733859717ccabc63c73a6ec01a03f07fef266342bfec2f1d57c14b543b9995c3a66b8a737db3a9b60920a",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one17p07x854ztdm5w029ksluq8l4wv3hagpwl5zxh",
                            "bls-public-key": "adaa3dd1e0dbf11b0b365c214cde3ca4296639f5229cf66ab6fa917d4861b0c94b342000cee62b142cf04fcd37c15909",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1vfqqagdzz352mtvdl69v0hw953hm993n6v26yl",
                            "bls-public-key": "e8c0e8bbdc60a12496b16c5153acc68c28c2a51b616fe094fa3e230aff3911ffc08061323efab4ccba2a4835236b1495",
                            "voting-power-unnormalized": "0.013717059167077562",
                            "voting-power-%": "0.004389458933464820",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "20941148411331100000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1fsyyst59aez33e5566xpfu44reh8g856qfqup7",
                            "bls-public-key": "0a775e4b828b40f6415859f9fbc2a569ee3e5a62e485dba5781d5df3731c90c8fe865a365ae531575f91f5cbc7350e05",
                            "voting-power-unnormalized": "0.013717059167077562",
                            "voting-power-%": "0.004389458933464820",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "14961000000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1k3r0xmuw2zhwvww88nx337h0ee7g2h3edgl66l",
                            "bls-public-key": "5c99f48ccc1377faf79f6d36f46222e6c124083a58e9a47f7bc9e37a0bf529215671f71ff1bc4c3f8c5548b484c31e85",
                            "voting-power-unnormalized": "0.012095772619067803",
                            "voting-power-%": "0.003870647238101697",
                            "effective-stake": "11947717000000000000000000.000000000000000000",
                            "raw-stake": "11947717000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1zax7yd82fpl986prn9gcsygvlq6p877hawq364",
                            "bls-public-key": "947bf4e754b28c1b4b393e42215a904747514351df7013d7a6dce706323cbf4593ec283468c8257b3a827dcd04502195",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9446656692058000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1mrprl7pxuqpzp0a84d5kd2zenpt578rr4d68ru",
                            "bls-public-key": "2e9aa982036860eccb0880702c5d71665761f8d4e6ab5f3d8c3aee25b3e68a2c7eaa3cd85972c7f9a3c19d3fed3d5d01",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1x0dhlrhjvz06w49uw3mtmje2hymnlfla7pgszv",
                            "bls-public-key": "b5b179083e949a56db6a33f107bca5069fbc91f2de054e181b5cf5d792ccf52460b996e6626f3908c6093c4dd823810b",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1tmxc9n45jnwrm2rlyjpy7g7gwuxayf06t934ef",
                            "bls-public-key": "97cdc70b67de97170e13ecb83b4b892107766f4b66d17cc292008253ecc755d1b4cfbd71f8daae8eaff1bb235c77b203",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1syp0s8wvss25rusyf4v8y709vdadfrym4kk9uk",
                            "bls-public-key": "c74ebd61d4503cc23f794d0c4af3f1388ed4c3c2a3bd02283df9d03a7389b106a58cbfce102d7d489260995ba9e12d91",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1j987tf0cvwhr3vy2sly655alw9tn6z44s770ww",
                            "bls-public-key": "1d0a25f0bd77dde3cf1771f47eb6fe7d2fd0adc49db119c2f237b5241428c90482fff18c698d98f07e69163dc6f13f15",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one14yk0psfzn8tv2wrgw93huyllrq8te9s44d97zd",
                            "bls-public-key": "db913f9c7d7dc3c32b4fe84632f99e203ce91bedf72eb7bf2527df3ab81e8f223a39a514ae05362c31e56bb4f5028785",
                            "voting-power-unnormalized": "0.011213877983593096",
                            "voting-power-%": "0.003588440954749791",
                            "effective-stake": "11076617000000000000000000.000000000000000000",
                            "raw-stake": "11076617000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1cvdmwpnwdcke9sg8srlncxd0rmyac395q2qrwa",
                            "bls-public-key": "1a0f8186ff37146c49706036ae839530d5b007bf1d42770e44d4c1e751e416f2a1353631189ef17e972d506f3e970e81",
                            "voting-power-unnormalized": "0.010581152770069230",
                            "voting-power-%": "0.003385968886422154",
                            "effective-stake": "10451636518965600000000000.000000000000000000",
                            "raw-stake": "10451636518965600000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1la07f5wduc3379ffzlpqrl4rcvlchyvtwf3uyj",
                            "bls-public-key": "26f5128639f480843e52a8328bb37d9c0b74e4dab75e8945dbcb4977c5995b3cc29807181a5a64d2c433ac4ed81e7d81",
                            "voting-power-unnormalized": "0.013717059167077562",
                            "voting-power-%": "0.004389458933464820",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "20718631054079000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1zk24v0nmh662f3u0jz5wsu65y4pjtjuc2kskdf",
                            "bls-public-key": "285021b00e21f75364d92ebcbc204e73f268e50163347cbd97a5401c800f6348252c2c23fc6ba9e099f3a6380726ac85",
                            "voting-power-unnormalized": "0.013148228351824383",
                            "voting-power-%": "0.004207433072583803",
                            "effective-stake": "12987290382041000000000000.000000000000000000",
                            "raw-stake": "12987290382041000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1pzsehc47gl6euwnqe0lfmsdh83l3t2a7lygrzt",
                            "bls-public-key": "c41182d63481d03875ccad187f9be6e3b97cc17fadc6fc67ca2be7a0ebb07e06d1442f0613ce165c9bf25c20c1a08991",
                            "voting-power-unnormalized": "0.011057220446378157",
                            "voting-power-%": "0.003538310542841010",
                            "effective-stake": "10921876994586000000000000.000000000000000000",
                            "raw-stake": "10921876994586000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "2864f5f1cd848f2c7302faf6bdfc7456984365226c3d53c7cd63cd1dd316fee75a7ae48560ba5658ab47497b952eea99",
                            "voting-power-unnormalized": "0.013717059167077562",
                            "voting-power-%": "0.004389458933464820",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1m3w07gke5ekxg8yyj66v5eky5wx2e5kvqh3fkc",
                            "bls-public-key": "e1049c214ef21c3954d5ef0ca0132256fce020b8096ead11debab5aa5f05e09bdb3aaf2a2816536373ccc0c05623b215",
                            "voting-power-unnormalized": "0.012139781297525025",
                            "voting-power-%": "0.003884730015208008",
                            "effective-stake": "11991187000000000000000000.000000000000000000",
                            "raw-stake": "11991187000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1uahjhhl8ajwshuxlxyzhqa6m565mek6kg6hqc3",
                            "bls-public-key": "6a5851aa43c99baeba79b2996194025d9994360a329d82486befc70e90199480cf1114bc08dde1675595f215f8ad6d89",
                            "voting-power-unnormalized": "0.010698187792307554",
                            "voting-power-%": "0.003423420093538417",
                            "effective-stake": "10567239000000000000000000.000000000000000000",
                            "raw-stake": "10567239000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1cf3fckv4u3kvjvqczyydl9jpy6pfa0fs8cauac",
                            "bls-public-key": "87237e610109682036dda3e7edb27982d342ccf4e5a3d81ae5fbe7cf433ad3261eaee15b30fd3c24859522f5950cfe01",
                            "voting-power-unnormalized": "0.010640340728162922",
                            "voting-power-%": "0.003404909033012135",
                            "effective-stake": "10510100000000000000000000.000000000000000000",
                            "raw-stake": "10510100000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1yzp3yw8x848jazrz7w5a24zulum2nsjqnd9n67",
                            "bls-public-key": "df69d69cfba54c0e579eaa43f75846ff05b9bcadf09b502f7c5eb5410e5a5c7bab0e68bfd9b079aa981bc136c84c5495",
                            "voting-power-unnormalized": "0.010449557488275495",
                            "voting-power-%": "0.003343858396248158",
                            "effective-stake": "10321652000000000000000000.000000000000000000",
                            "raw-stake": "10321652000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1fllqjv6hq8vfvz5kwyhaknw0f2emvfqmq0s2tu",
                            "bls-public-key": "b599ab0a5b37542f80b61274249aa0d095a90b32498f766d940f5af64d441ae84bf2189a7030f5e9ad06fb024a04d699",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9267240000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one127rxx6l0234y5ke8daffgvjrfa3zxcyajq36j5",
                            "bls-public-key": "021926136495a0adcdda5af0602cb4b4ce6d6529cfd451b844728a0e4e424f2a78879a8b5d5e4b3e42127f95f2e2858b",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one17vetq77teeeczufa68fkpx8vc0wc2tzfmfnh5e",
                            "bls-public-key": "796743dcc97e1d08ba9d76fa68137931d694d19e1de8cf2b0dfe53118e8d1078c62fd72498536432d13186a808e29a80",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1lxzmu83x2lrekvutjjsdk06539mx45e8n8y5pn",
                            "bls-public-key": "04dd842a98503c32b7008a65ce3bee3923d9dde459566d1c415bee6ea179fc836275bad656fa65aae7ce04d5ef649981",
                            "voting-power-unnormalized": "0.013717059167077562",
                            "voting-power-%": "0.004389458933464820",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "21013333851777000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1zzz5hanvsmtvl86zuur6nwx8tarcdh0g94vj9l",
                            "bls-public-key": "95d54d59d5d9937d0a4227235e4755f5ca2329bbbf9973fcc7104cb6a9a125e840c4e8a9aaa974e31da1b35f22117a99",
                            "voting-power-unnormalized": "0.010731354765275970",
                            "voting-power-%": "0.003434033524888310",
                            "effective-stake": "10600000000000000000000000.000000000000000000",
                            "raw-stake": "10600000000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1xsf70cu7uuu5k6f0kpxp9at8r4dmg0sttzx40t",
                            "bls-public-key": "577bac828dacca2acf29f8d38365a5af015b88298482c38f09ccde44f3c1a2d7011f710c4a7fe450d8b5d4e7a6950a05",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "8651010000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1x40tck8cu3l8k4erztfgerx99taywpn7xcfvgv",
                            "bls-public-key": "e73156109914a4e05be1ada2912b0788957b37270e0dd9bfe214f93c85c826ecbc37bc9bc78f879361f432c0a62c7095",
                            "voting-power-unnormalized": "0.013717059167077562",
                            "voting-power-%": "0.004389458933464820",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "14004507994682000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1wy9dkhsy8m7u0z5rzypmxsyyawmu6a7v9dwh2p",
                            "bls-public-key": "1c4a0caa22867ae484aa4034b6546d843c7476b514ad5844a89b4de69e6ea8f87ae240f41b5ffcb100ae6dcf50feec15",
                            "voting-power-unnormalized": "0.013717059167077562",
                            "voting-power-%": "0.004389458933464820",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "13990119000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1hv558esjr6jc57ahlvu7ape0p975hyq3t26sms",
                            "bls-public-key": "687610ae21d8a707eb77c4fcc089cae8f8dcde89a925744ded3ab89460aace710a6396f87a012eee3d3153e240f69785",
                            "voting-power-unnormalized": "0.010315339624312621",
                            "voting-power-%": "0.003300908679780039",
                            "effective-stake": "10189077000000000000000000.000000000000000000",
                            "raw-stake": "10189077000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1c9h3u72czs6sk755tjyse7x5t70m38ppnkx922",
                            "bls-public-key": "e6791a7fd6ad130035dc16cb9a463bc6932f782d3599b7317873b76e137df0d4b23903d93655efec4067442e8f532c09",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "10000000000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1560f54xsnyntxrrxrunjx5q4r2pxp264zs3n60",
                            "bls-public-key": "867ae6f88a5edecd6d89df05d94e08785971b4611ccda62944a7773f5cdcd6f2d86af8364fc7670d38a18109b2416413",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1nv6q6y9t7tpketgrwp3z6kmq5v505nwp0ph4ez",
                            "bls-public-key": "fa24d37d68d349ada82e5d5ee226bd2e23b3783b613d8fbae2d29409848501c2c8e43bfb24374aaafb454772a17d8101",
                            "voting-power-unnormalized": "0.012107870431604024",
                            "voting-power-%": "0.003874518538113288",
                            "effective-stake": "11959666731948000000000000.000000000000000000",
                            "raw-stake": "11959666731948000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1gjt4latm8qepeg7f98hz9s38vg8keavl85qcdk",
                            "bls-public-key": "c214a0ca0ec4524ece2926775b311a67f65734dd7a1a4d147e07f4774c31721ce5943f47b7e826fcb3a25c08523d7b85",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9794162994000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1xk5p89nzd89044wf770ppqwv4rsz4wn78jgqzl",
                            "bls-public-key": "d8e2d426c4977cd5805115f152c26b7450171d453952cc27bd319dd4e7b5a3268b559790dfee9f14c7280e0e6df06c91",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "5281876863274500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1ta3p2h0hqc42dglgyzey9xua8kkds7y8n3h573",
                            "bls-public-key": "e99c10f7969f3845cb467e23f0a5095d372198c834bb2efa1c0bb220d67bacc85d2637486e52f8acd5dccff36580de0f",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one16xt3gl6l7q8afksksgwdmdahd5s75trgy6ut3k",
                            "bls-public-key": "c91f5cde7343af440026bf7b97d6e7bc5bc45ecd7d14201cb0250361aaccc5cb94610d0b9ecefba9b28f205c0aebf385",
                            "voting-power-unnormalized": "0.013717059167077562",
                            "voting-power-%": "0.004389458933464820",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "14138721244629000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1z28zsvjvevexnnyyy2t5qv57vsx0ct7fvnnhl5",
                            "bls-public-key": "c49f2e8c28f7c187b68f24f846550bcc5fe60c2719754eca1b55305d2591c3ec2b6e5291cba1c8f887fbe926e7ee5805",
                            "voting-power-unnormalized": "0.011224275164620937",
                            "voting-power-%": "0.003591768052678700",
                            "effective-stake": "11086886916642000000000000.000000000000000000",
                            "raw-stake": "11086886916642000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one12c8tpmtaezelshv4r4yuwnvsurxhslw8jsgpeu",
                            "bls-public-key": "71f79aa6548a3277a574ec5cbf31d1424484e204032c914505662cb4963cb4e29bb22219715a64a67f9c4fa7076e1a15",
                            "voting-power-unnormalized": "0.011143125331464225",
                            "voting-power-%": "0.003565800106068552",
                            "effective-stake": "11006730380000000000000000.000000000000000000",
                            "raw-stake": "11006730380000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1gqnfh2kkfn6wsgwtx7tnqkw86wpcqsk807kkcr",
                            "bls-public-key": "523bbc459ef6d0d5130df5ac7bfa5f8709171689219849b343db9213be6db5630ba134c448b49883ac3efbb67dc6f819",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9586877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1yu60r73fzhhadnj3hj3ndhpyk32lmlj53hkag8",
                            "bls-public-key": "bc55cd376184cb98e32b80aedcb1fe913fc96de7b881ef75f7119b23674291a1bd50f8c3a4d4739c9a3d1d55e6386b18",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1vjeljc4p3kr9va9ckfjsjfxsz6aenl7a0hnz2d",
                            "bls-public-key": "fff0e3c33a7ace777780577f0241c9943938f73ef73c6d38249454e0703b4977aa0ff2e2d1e0e4fddfa121a24f0d7b99",
                            "voting-power-unnormalized": "0.013717059167077562",
                            "voting-power-%": "0.004389458933464820",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "99999999650055000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "9f68854a0d27f0af2bfc447cd0cc724857ee90b10fe668e8bbadbbd81a6051f593813f15533004a76c2a0ccb25306911",
                            "voting-power-unnormalized": "0.013717059167077562",
                            "voting-power-%": "0.004389458933464820",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "d72a260c8325571aa5cda49b44d7f5fefe86b22a2d93bcd2dd3958a2ccc391f38babcf9a8a4571517df3307c65378091",
                            "voting-power-unnormalized": "0.013717059167077562",
                            "voting-power-%": "0.004389458933464820",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1x6meu5tqzuz0dyseju80zd2c2ftumnm0l06h4t",
                            "bls-public-key": "f441b75470919983ba18a0525b1c101af42cae052c6d50f74d1553eebbe78ef226849c5e5a7fb2ba563eec6b20380c00",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one10eqee99zcxmx2kxux92tqkjpmc04wk9ugr79p6",
                            "bls-public-key": "b5498a248bf1ef9f03497ec3fe27f8e6c984e052e8ded27a728e5c6526eed506b879f5eafcfaef2785c3fcab468e0489",
                            "voting-power-unnormalized": "0.012613559785082922",
                            "voting-power-%": "0.004036339131226535",
                            "effective-stake": "12459166307176000000000000.000000000000000000",
                            "raw-stake": "12459166307176000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one19cuygr776f7j9ep97hjm0np9ay6nus9w5msy0n",
                            "bls-public-key": "be205ec86841a3b96249f80e364c416a63b938617ade36b6798b377188d99bf27b5e85189116f4a4ba1b7a0c060cb115",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9507403000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1xk5p89nzd89044wf770ppqwv4rsz4wn78jgqzl",
                            "bls-public-key": "baea58a081d297ac3e5b8b07f628e6a3cabffa81aa8ae01889fe5f9ff54a323403fc5933ecb78e7a55ea46e76ed26b01",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952243",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "5281876863274500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1tn99d8rgsnum67vhekdf8a7p7fgfwkufm7d85f",
                            "bls-public-key": "3e5225758b977065903eae1e655a5f83a36c0b10c8fd5902bb9e6b1c51e6c3a6b846a21b43b2d6ef2df4e59fb2433009",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one18dvfm36hq69rfqhzmys7fvmh8qgmqw5z6m28kg",
                            "bls-public-key": "ae8cc5cb7818994b98d72c1f8d5415e3e315f4a975a58121344dea8a8fc79c0942609f2e502fe67ab2742176a886548d",
                            "voting-power-unnormalized": "0.011478515216888720",
                            "voting-power-%": "0.003673124869404390",
                            "effective-stake": "11338015000000000000000000.000000000000000000",
                            "raw-stake": "11338015000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ryuvxq3mgcvj0a2ukpa5dkuxmlc2gdf7pcc775",
                            "bls-public-key": "764d50e4781440ac44e78f9001f6f8d7770bdea0d9d3647e578d28d34fcb9a7392f20912e8a6f9b9d08c4e07ec6f1609",
                            "voting-power-unnormalized": "0.010243218478950177",
                            "voting-power-%": "0.003277829913264057",
                            "effective-stake": "10117838637504000000000000.000000000000000000",
                            "raw-stake": "10117838637504000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one10nay2vc33vx088ecvqfu9yk96get0j43qzp8qp",
                            "bls-public-key": "2113771d0a9636607c6fe8bab2887f430854fff8f3856babe17a31399b1a3cc240f6f3edca0de7b43c80f7c4650fed91",
                            "voting-power-unnormalized": "0.010201734060634749",
                            "voting-power-%": "0.003264554899403120",
                            "effective-stake": "10076862000000000000000000.000000000000000000",
                            "raw-stake": "10076862000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17tj2jjehdlg8xfgp48xpeyqur2qf6nvs88jvyu",
                            "bls-public-key": "89778b500d0fd1710a34d161673b57a149d462340446743f6f5f4631eb856667525368ded0841b8f5034b4ff4f839e01",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9271867000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1rc9t0anqzzwl7yepmyvlu3eafx94927aw4umwt",
                            "bls-public-key": "81ce2082507783d0882a0e816a7063a2c5ae2aaf186dfa157038262b911d55c2916bb113d7bcaf59426059ac9fc8cb91",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1ae378sq38g2nhdaa5lupsxk2ady3yp5desqqf9",
                            "bls-public-key": "4cca9a46d70dfe380b41dcb2251303949e5cd38f6b567beb890cc05a36d2d9e7292f34743d2e0fb86fec134f6619bd88",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1hyqgueh0fv7mwwtt82f74wq9guzmw8ytf74qhn",
                            "bls-public-key": "4c0d79ddeea979f76b086eb314781807c4c0ce4665b84a9084a7816e9019447981700c0c1a8e83d34e82bbf1502fc101",
                            "voting-power-unnormalized": "0.013583698718112594",
                            "voting-power-%": "0.004346783589796030",
                            "effective-stake": "13417430470000000000000000.000000000000000000",
                            "raw-stake": "13417430470000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1p2jts72rfcn0a0jqk29ymecdz2krjzgsr5vqvd",
                            "bls-public-key": "ed6e3417442ec8f82146a5cdc730763184e5b132c6b1f936cfa1387394b7cb66a19aba68835a00c4a7ca415e20ad8c8d",
                            "voting-power-unnormalized": "0.011939023877298770",
                            "voting-power-%": "0.003820487640735606",
                            "effective-stake": "11792886906401000000000000.000000000000000000",
                            "raw-stake": "11792886906401000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1lpzdnqz47xnpand6k33zw6zlwx3fxc0veftt3r",
                            "bls-public-key": "a35e9bae77e2accedfb32363a04f18daea638c8e53e945a40b4fbcdac28891b3594dff5299587d1291d9934967d8ba19",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9055159751655000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1ct89upkpkpv5scmj3rvfw8sucqkygve2e9tg8h",
                            "bls-public-key": "74c363ec65b03997fb38382a270ee1498556c229f48f6300b6bea3f7d6a515b57805922f40ade8c98ada9eb084e52e0f",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one106fd5vadl0tnk74ccggdtn6m3xkju40ewj23cc",
                            "bls-public-key": "085175d5724be15f0159cdd4da275d5efdabc3696641c5b5c70fe5d1ac8afebcfc8508b7cf5f8030dc1988a42ae5c109",
                            "voting-power-unnormalized": "0.012007069872797126",
                            "voting-power-%": "0.003842262359295080",
                            "effective-stake": "11860100000000000000000000.000000000000000000",
                            "raw-stake": "11860100000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1z9pa5m7xrng7y4drwkwaau9m8ey77mkx6tl96a",
                            "bls-public-key": "289df32bc0f08f35b539bf0f6bd434b8638868497a55c2c76a578dfe83539a784f2a7c650df61a90143bdbd7ac72dc95",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9271877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one10cf8n0w52fzk2a2spwwms452j4aqx3cmg80ftg",
                            "bls-public-key": "80b44e97b102cc424ff7eb6f7a4f199bbfb2bc2c53f7c754fe2d69378fec74e0e3330e494b644ba960024ae1d78d2f0d",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9207240994213000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1wh4p0kuc7unxez2z8f82zfnhsg4ty6dupqyjt2",
                            "bls-public-key": "4bf54264c1bfa68ca201f756e882f49e1e8aaa5ddf42deaf4690bc3977497e245af40f3ad4003d7a6121614f13033b0b",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1shfeyla0stmwrhf37yqck9wt3p49c3l7vcsqr0",
                            "bls-public-key": "174c95f97ff6b98e4f840bd84d05f735cc195d5d1caffc79a1335c9deaf85bee3b01184b0f741c32f22daa004c140401",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one125s9c4ukzrk7jwg5t6xk7h0hfyhzy2qte4w6rl",
                            "bls-public-key": "77eda15c99154cb2db50e744de82ed1a4ffeedf4849b0039d3ccbf35f080171f2b3cf4364da177448edbffc52741a313",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1stl2wdvm273xck38wdp5ecfj0nap4ctx8wycs9",
                            "bls-public-key": "f1d9ead27405f680502a1f74fa0961158c9c1b9caba8d6f9066db66a6cf9bd35aa588a0d397bfc2c3ae9765133f45c19",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9688842000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1t79hk65dkn3ef4n6xhg5xdjhq58nk7ld4h2x2v",
                            "bls-public-key": "56e3bb8b8edbf2633cc7b2b61306c8ea3b1cad6eb36a52ba98c2d3e5c29a743233ffeb428b418f46af3bef0c66903f01",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9510653499000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1zcntyvm3a8xl5umwwdhcn5k5wnqklaetp0gyug",
                            "bls-public-key": "c9993defc6410169380b3708060308faef5a5e11e575b50dc2a0ca7b39e7fea916cce5c6536368f1aa22355970c13495",
                            "voting-power-unnormalized": "0.012348178994657345",
                            "voting-power-%": "0.003951417278290350",
                            "effective-stake": "12197033851392000000000000.000000000000000000",
                            "raw-stake": "12197033851392000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one18qwdyxz8g5x96ynn3a7uk94pe9dt4euhz2strt",
                            "bls-public-key": "4b0c4441f134b30cbff349cb660d85009c1b0871bf7fb6d0a1ec87b439fa1f217fb9fdf262cd92c2fe03032426058e19",
                            "voting-power-unnormalized": "0.010138695906100806",
                            "voting-power-%": "0.003244382689952258",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9853212874188000000000000.000000000000000000"
                        }
                    ],
                    "hmy-voting-power": "0.680000000000000010",
                    "staked-voting-power": "0.319999999999999990",
                    "total-raw-staked": "987759722034257800000000000.000000000000000000"
                },
                "shard-2": {
                    "policy": "SuperMajorityStake",
                    "count": 105,
                    "external-validator-slot-count": 75,
                    "committee-members": [
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1km7xg8e3xjys7azp9f4xp8hkw79vm2h3f2lade",
                            "bls-public-key": "95b7f81b4ad71a93e866c918a122a8754cf6db02c0f3df93d00e6651b77323d527ac39fc3e990f9c2f6e1e3ea9d15112",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "23581006033520300000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1hxqssk08xz96du0etpy727zxejqgs0yj0tjde7",
                            "bls-public-key": "73885355d436261e22de0529e198f0ff2f1d740926893a4a0d43478d6a21fd73f828013e85e93e20fcb69852affe990a",
                            "voting-power-unnormalized": "0.013975365511340490",
                            "voting-power-%": "0.004472116963628957",
                            "effective-stake": "12848814000000000000000000.000000000000000000",
                            "raw-stake": "12848814000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1expja5cuma5pdu4m3nnlesvnjpapkqr4maguhf",
                            "bls-public-key": "6dc4f4b5a35f500960aa1daf66425e1fdf9f811327b32db6c9fe0d634554da9b258bd920a78135d8a65f36545e80e70e",
                            "voting-power-unnormalized": "0.011725901665743833",
                            "voting-power-%": "0.003752288533038027",
                            "effective-stake": "10780679000000000000000000.000000000000000000",
                            "raw-stake": "10780679000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1frjlthpzmft0ufhlh5xjqw52xddxy3fyk7s02k",
                            "bls-public-key": "0c199a6a45e4388d92c6be4a7047dc09ba6a74ace4ea46c014f0239ae6943d3c1d07486ad77de0bba628e7f76ec69691",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1zhe0t4knr3asa7hvjv4zu5u64cjvj7uznp0vvz",
                            "bls-public-key": "a3a2287134bf0ab203f16bdf49ec04748b4ac7696803de6eadfc04ed901aa722afe57995bf8abb24644ccafb0bce7796",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "15015355961518000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1he2kv2hv44krughkavnd5p9njannd50ckjfags",
                            "bls-public-key": "81109ca97ea1f1885bc84cc884f62b6a4322fa651f3dab1e67791b565a7229f44a07514b61222f3386450e6554ef9b86",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "27963813269999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1dkyjjf8s94nvml9rvksexlt4a78lu9u63ul8lf",
                            "bls-public-key": "477607bcaddd8f43378515e39917e9786ae5414769c811ab6bcdf1ac2a0e3dea313a3d88673468c2aa0600c7cb0d1b92",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "19359629444774000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1fs84nmfph4scmj3t8cduwqf7vpvs88279whxha",
                            "bls-public-key": "9522b29970238da7add130f96ceb7555c29f2e0e1529aee9186118e9bab6057a8ea190f9d310339d0960503c59d0e10a",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "14653027788460000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1cr8qrjl6khac9d5auyslvxln864vmqd5xll2zh",
                            "bls-public-key": "42fa89ee6e6296133ac05bbfd8c95976540ef369683864f0aaa3c7f0f5390046d077a3f4156e51654ba8c14234654c12",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "14121217920071000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1csh9mh0w0589aszjt05nx4grxleq28xyugv357",
                            "bls-public-key": "fc72bc2ec7505ea90b70a309e8b93bf4c0ef5e44bc14023fcb766f2e083f37f03ce94dd83728a918a0685a199c1d8214",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "a0301ee493e3a78516929e7a89b6779e828962b8516a4dd41b1374e21a179f00fa6c3b75387c357138d5d1eca6c2d312",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1dgtd73aumt2vx2el35g8wqkjsj4yzxkjg7sx9d",
                            "bls-public-key": "83ea04ae5efe9c1ccbacf9a0cea9206a5d38090d5fddd19f2919bef04a89e82c4f662e991c9e9d06b593cccb4340e496",
                            "voting-power-unnormalized": "0.012307396651588409",
                            "voting-power-%": "0.003938366928508291",
                            "effective-stake": "11315299787484000000000000.000000000000000000",
                            "raw-stake": "11315299787484000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one12s96xcv0d3vj7u3js84j6v4322t23996mqenwj",
                            "bls-public-key": "713c04a3b0a5e4f72238a86fffee54748f18f1a0130af73ed5ba67301ec9e282a438348fcf2a7ba66b60a7642439810a",
                            "voting-power-unnormalized": "0.014092480965447501",
                            "voting-power-%": "0.004509593908943200",
                            "effective-stake": "12956488799999000000000000.000000000000000000",
                            "raw-stake": "12956488799999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1z5je797487dw9qpgkqtrka3ws4m73unasdfj2c",
                            "bls-public-key": "959c14a7daf951b6fbfb0fe84158bd7441daa232575b46d28418ceb7c8d66a2df57886c70fafea6c87317e1ae5821092",
                            "voting-power-unnormalized": "0.011511611987087242",
                            "voting-power-%": "0.003683715835867917",
                            "effective-stake": "10583663170901000000000000.000000000000000000",
                            "raw-stake": "10583663170901000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1krus0q388f6yg6peea0mjwm4x42gvyyd5urn48",
                            "bls-public-key": "a4a75bfc607dd1bee6d60454309bb5fb4c9a48805bc514f29e56c5766e391545bc8d750011c6d1f4b12218adc7c15e95",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1f470xd0f6yjtlvv0ml02cw0fhe6t7fp5r74ec8",
                            "bls-public-key": "385bf46c56a29f434ea17d38a9c4565881fa5463084782b8821734df4cbb6cbf6eab19fdb3f7bfb1f8429b2d3dd55a0a",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "19753928887233000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1nzkhudzmyczmy0ukvjewlx4zyqjmc8ujhfhq90",
                            "bls-public-key": "dc735a503388d93a86ad56ab8d2f0c79dbec64b9331812beeab068553959650e848e6fbb3fc280081e90abb50074bd16",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "14139237610171000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1rx9qnp855d6atv36gkxwn9evt0j4amzp0fvck5",
                            "bls-public-key": "8c5d7d0ee1c4b24584880c908ac5c31eae07d6c5a5fe1dfc5778b34342237dcfc76716c060901d7e8d208396e4236786",
                            "voting-power-unnormalized": "0.014675453278676883",
                            "voting-power-%": "0.004696145049176603",
                            "effective-stake": "13492467827793000000000000.000000000000000000",
                            "raw-stake": "13492467827793000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "1f8ab84a6a98cb00399aa14938c0ca3ffbf3b83555c21559254e5a96047394cda67d2c97037a2ae1d44d6c32b3666002",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1l8n75pj8zmka0nxtqjneexf3p8l442g8xrxplx",
                            "bls-public-key": "e7b01b2bb0d947112dc90c256264cb4f584d80218cbb63a1bd2a4a684d6782e26fb53110a30ade33b40505de2c7a6f12",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "99378375202361000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1exusucsg5aw3kt4amh6quc786futqf0ycmfyrg",
                            "bls-public-key": "ccf101c81ffc71d686a9f92113fbf6a56c7c4db09cdc3a2bcd9526b1a24706d161634dbc4a50b14d987d371a59699806",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "17122239499999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1dgccuj65y4ujn6lsvyx0zndmnskyrwatn6j02v",
                            "bls-public-key": "294a0bc5af28548abaf809a8f6d9e18c8e01215333d3e760a296e4463bb8030e46c99e4e679840e4e6dc452cb0b31196",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "16666665999999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1f5fae6ly754d3nsa25s99h0t6psdx2wg6yy33c",
                            "bls-public-key": "9e0af2d661d1362a95b909248c507092f8cc1c1dff653a9af8b6245f42898dfe570cce0a92d9931a793803cc3eae400a",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "15544501589999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one10n3vn6rz05zvkwus4ey0ll890qxpsxpzphttck",
                            "bls-public-key": "a76550cfd535db4f3ef3d51fa354e12d6efce90d3f1025357d1028a9c06fc9148d16f0fc24683ff7dbc6262c4ae61116",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "13614146000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1shzkj8tty2wu230wsjc7lp9xqkwhch2ea7sjhc",
                            "bls-public-key": "e212c4c5cd8e078aedd34c300ae500c5bd5fd036231d1c9dcc8400337919a59ebd47523faa209fc0d873ead492621f88",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1npfgsk4qs0gg2x7tgsjazt72wxsw9q9k0y0568",
                            "bls-public-key": "f29d10d3700dc200a9b5cc063e19d9f8c57785304dc18dda170a09ff4b47772b0fa28f54e415f809d0bf2ba0c1fc2982",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "99899890347999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1gvvve6xfnlytdgfngqx3sfe5pmywnc9ykaudn8",
                            "bls-public-key": "9d29878d00d093f9bb88042724b12d6ff6192ba9db78fb8fac62f633387797266f16ff43dd7ff88b3e615315550a1106",
                            "voting-power-unnormalized": "0.011746915812010734",
                            "voting-power-%": "0.003759013059843435",
                            "effective-stake": "10799999200000000000000000.000000000000000000",
                            "raw-stake": "10799999200000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1esvnhtvek2ggz3e8fq6znejtpzgr7uqjaf8h45",
                            "bls-public-key": "200dd9daa86dcf89b18bd468e6e8dd2c59f0b50ef4194f463f7b02a86a381dd4cfe589ccebe43bba3144f04489f2d98a",
                            "voting-power-unnormalized": "0.011499265574233638",
                            "voting-power-%": "0.003679764983754764",
                            "effective-stake": "10572312000000000000000000.000000000000000000",
                            "raw-stake": "10572312000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ndzkyjg9aesmr5pl3vhpqufugvgs4mxme96j2f",
                            "bls-public-key": "84bcc8102ca3fb925d9672254e26029a9f0d6b4418037aad081bb9e2c8b0462b9812ae4c5f39f70998ef934c0f10fd02",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "15499998250688000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1vusgu2vytafhfczp7kqj6jvquvgx7nequ2zcjz",
                            "bls-public-key": "516ed79377753aafeb17a06b219375ccb1a3fdbb6cf1659b055d5946f4432ec35deec920a11c83d8c5045f60fde81082",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "15136029900000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1dt4md3nh3apdsmm8t0p2lsul2my5c2t93ky06k",
                            "bls-public-key": "e51276b7d84c593298cb0331559ce2790d9d2343364ea6f0a8e4a00c84952d59b0bc0569b028aaaaefd317772a7eda86",
                            "voting-power-unnormalized": "0.010892649847834781",
                            "voting-power-%": "0.003485647951307130",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9275240000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1wqq9xrca6g5vfaqwm47gc953kgy6kqxm2pffuj",
                            "bls-public-key": "045e3d2dbc7624a3ba1f3aa253b8663d587a51c4490c071d44bfb88ac9b243e680b806b742630d2320cd9f1d99d4e58a",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "14899781907755000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one15wgxmsrzuh7qedcha0ry907nddn7y4mj9y4ja9",
                            "bls-public-key": "edd60bdf97109cb71cbe69d387a55b2d6d9cc61bb753b76dc179235b3a40f83931bc4e71960ed30b75309924bab1338b",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1lq4dln5lhvfnp6z8m4cmnmqrrxugkefrnsj8at",
                            "bls-public-key": "76fb43d2f9963f4cca0e08aa7f5f6ab0cc6232f6f26a7e2a20c2e1184ef9d88543f22e5ef57d66afa4391d95e15c3796",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "99999066533522000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1n0t2sxc02ss8jmvcxyrptruu69a62xj35a75jc",
                            "bls-public-key": "a36ba9f8e5226c0342d8b8a1bd782dc3daf39c69bad85693bdae2bbf99e77af17875951ac11bd19cbf0d1d3937ceaf12",
                            "voting-power-unnormalized": "0.012710624599220506",
                            "voting-power-%": "0.004067399871750562",
                            "effective-stake": "11686023608232900000000000.000000000000000000",
                            "raw-stake": "11686023608232900000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ym5k67rqeuchrsgy2eztwhkkt3r5kkp3ed2w6n",
                            "bls-public-key": "5155e59612c78a878f5c3e62f060bd12d16e42102129db81f39ba32fc4b4d0ba78b5623636b1da498961fdcf9c03370a",
                            "voting-power-unnormalized": "0.011390024687476970",
                            "voting-power-%": "0.003644807899992630",
                            "effective-stake": "10471877000000000000000000.000000000000000000",
                            "raw-stake": "10471877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ryjmd93fadj280e6p6mjs8sl2gx49mvd8wzjxd",
                            "bls-public-key": "c4c90fd9a2d52d62569cab936ed3e7a758263fbc78c47983a96f8c9ff90bcdb32fdebaf1d06319b01334d44cf5246712",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "13669021117998000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ge9k4ryucjqmrpnv3nn0f5gy696qy0r8djawee",
                            "bls-public-key": "e55c39c0b3a05360dea4736aa05e1e0ddff8fb3f3de3d6a33d30017c5742d46d4420ba3e45b6acd6d1eeb4ced2e4ba86",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "13966808690000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one132vlefu93my3zvug2nsr9xk9n0a34ktc5q0nj0",
                            "bls-public-key": "a9f21c11d1fe66a6e85c90c9143bd0e060d48eeff9942e0d248c4367ad6449f36f57ac6157db17ea0ffa1c71912b2e05",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one183427xs6t55drhcupj02lulspy0j62zuhjrwl2",
                            "bls-public-key": "8d8c423024d8d6dcd3c50a5c1d6dd9336699513c6cf688ac19c7078aaedc36d124be4b49fed421b6ec08819e68d3510f",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1gjsxmewzws9mt3fn65jmdhr3e4hel9xza8wd6t",
                            "bls-public-key": "a689b39bb1de4f1591e29094b91d00596b0f371ea16fadf8b4143c680a1f9aff3e805e167eda2c583827ed0e7c8c9882",
                            "voting-power-unnormalized": "0.014683645852690453",
                            "voting-power-%": "0.004698766672860945",
                            "effective-stake": "13499999999999600000000000.000000000000000000",
                            "raw-stake": "13499999999999600000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one19a5t994apfnv68yqxmdnx8jf8qdy0pqzwdl96k",
                            "bls-public-key": "7b57317d3b209b58bceccf54237ed72b03471fc24e2604468ea6afb9edea720869f311863f8fab4984c161f457e8c206",
                            "voting-power-unnormalized": "0.012586469905103635",
                            "voting-power-%": "0.004027670369633163",
                            "effective-stake": "11571877000000000000000000.000000000000000000",
                            "raw-stake": "11571877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1qrgn3tlf58zsdp87s7pg0rhtjd5q8r56lthyrn",
                            "bls-public-key": "ca565e3b6879fcc151d645c699d9bfd2427b5382ee3457b519bf019d836d9f892cc6e32fdc1044fa3d88da1a2a70858a",
                            "voting-power-unnormalized": "0.010892649847834781",
                            "voting-power-%": "0.003485647951307130",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9999148692774000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1mg5sc0lc0ps9qmal5fprk3788f09rwdqxehsnq",
                            "bls-public-key": "2c6281268374475e94f9e8dd8a078c21d6a3bf1be2b3e2dc4b1b497f89d881ac7cce008b18810adfa432fc4c617fd505",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1mcc9plwyqpeyhk4tv2a9wka6tzckc37wsn36az",
                            "bls-public-key": "ebeb24316d8dd38485eee5ce3849d8c6b19d7cd35dbcd0456792bdbf1ae415f8d78c3f28f63ae42de21e3b3b4dceb48e",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "20319897835502000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1mwr4d2awwcx7f2n3c90lykt6r6sjv4agfn8k7m",
                            "bls-public-key": "1bf1ca37df49190578391d3c34cdb62cc9b2c88ebf5bbbe72a41db8da5236576fdb4513973045f23633a6ddd5a52488a",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1pgtnlatpnwl8laww7tc2f5qss6rjhzunwtrq5p",
                            "bls-public-key": "88bd80eaf033660d58d585da0dfec589815f5564b663dd216a4f8a920f3e86466add2b51b6252fabd919ec4b31a7b50e",
                            "voting-power-unnormalized": "0.013148768093318521",
                            "voting-power-%": "0.004207605789861927",
                            "effective-stake": "12088848439999000000000000.000000000000000000",
                            "raw-stake": "12088848439999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one19fwj7f3e2kgz48cqe6vs43d6q08f5tpt3zhlu5",
                            "bls-public-key": "19092afa662abb802651b96eb8b20cf248edfa0d26bd0dccefa9d93fc7f9628224d3545cd1b710381a920b0b71d8ab12",
                            "voting-power-unnormalized": "0.010892649847834781",
                            "voting-power-%": "0.003485647951307113",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "4929048630834500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17j706lucfndyf5celgpwru45cf0qn2yyqgsf6q",
                            "bls-public-key": "a9199bc02cdc1a6c268959f89d7aa5c0abcad899a8b98bc50cd1824bed0668ff34c53344e9be0f39b92df2f6eff26e0e",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "13863253405036000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one14shlkfq00yfmf3r4gglt0hqfcxrgx7ysmsz832",
                            "bls-public-key": "b46870f3b41be0b72f256ad2dae48529bd5e314d26ece4c2b0ed42cb7c772a1e6c1eac487adc8ca1172b23540ce9578e",
                            "voting-power-unnormalized": "0.011420612353304331",
                            "voting-power-%": "0.003654595953057386",
                            "effective-stake": "10499999000000000000000000.000000000000000000",
                            "raw-stake": "10499999000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1z0udzslh8pn082pnfhg9jx6ekwsem88v24k2v5",
                            "bls-public-key": "9f5f8c5dbe12d14ae8468828754c4db3f2129c69de88baee4e361e38000aed54da204591bbcdeeeb571ffff81e9ade02",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1ny4hhenxk84qw7st4w5kdrk5jhc569cns04s9q",
                            "bls-public-key": "d610c0b5788fbe3678a4a707836782bfb4dc613c73f8c2597fbd195e20c19dcff32d1131b7d298bddf89fabb74526901",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1ka7t672qv8ndpjq2gqns27wu3j3gtlt7w0vkhz",
                            "bls-public-key": "62ad52f6050101549fdb9f2288d670b83d0fbf38682df561b13ee3358b2a49d822d956ac79ec2567920cdf814c534485",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1jw7nlk68v6u4nw6ssrzy2nvrea4dxg4tea8u5j",
                            "bls-public-key": "31ba4affb8331bce3dd89b50ad7461064f8ffa33d8d681d17911efa9c1dae98948beb62c91d678806830d951251aed12",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "16709045170903500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1y6t8yy8xmfxg9ztrsgyhjtddxd70wwhwhr5fp4",
                            "bls-public-key": "eaac5d8c859a2d65cea6a0af223aa2bca77cbaa9d91902defe170e3212e57157ef187853b664993702944e460e53a40d",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one14h2358zxau3ptqmsfyrm65hr7emd5v6q2fvgum",
                            "bls-public-key": "b23aedbf896bf55b2787828c0488721ac8e8012eebcb3ca31ea0cb33596e98121eba8912904bdebe71ac77f7db6f1491",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1uq442dvnqlk07cl2mtddxhd2mmuhlejxz2k5nx",
                            "bls-public-key": "0e1b7c7e68ff780fab2ffaf9fe3875e69673be3664b49b95d96ada91477435c401b03b8471dfb277d643884b33593c82",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1snuv9rgy4edcwaraf6tfk9wng3l29frpca8lk2",
                            "bls-public-key": "bbfa74d121b05e38c962af9c241336311d282abde49b7cda6826a53e1a44e62a75689ee71b68136af2b9e0425c16d903",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1373zh2mwd8gvm7kmgqkwzcgtnz59uf0s07xrq4",
                            "bls-public-key": "ec8c1a764c774312d5bf8013db6374a88872ea5b5cf44e73474716504b2e088a18f37c8e1bc759debb1a85622359760a",
                            "voting-power-unnormalized": "0.010892649847834781",
                            "voting-power-%": "0.003485647951307130",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9351877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1l4gjj04y99uwjsw2xpe9mv2t6ffyup0da29ltu",
                            "bls-public-key": "3a1c468d71ab8986b74eaaffa48e28a9f94a95487ddb37418bb97ebfc1db93f2bdf0e3a555f1bd598629e9adecee3a86",
                            "voting-power-unnormalized": "0.012726256038266311",
                            "voting-power-%": "0.004072401932245220",
                            "effective-stake": "11700395000000000000000000.000000000000000000",
                            "raw-stake": "11700395000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one17mqrkzczel7zct0wkjkanlurupzmsazezsmglk",
                            "bls-public-key": "b3c646cc7658407f1af0583a009ed26fcc623fc06753eb7d064aaae8ab8aa65a1bccb806afe65230d543b1982f4ec18a",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one14nxnrgag980uuw9qwknmpak77gaxh3sghdfmwm",
                            "bls-public-key": "21611319be72794797d131cb0b0943931167c4bc30626c04c5ccde60ce106a06f3e3a0fdcf7d074eae6b4b4bf9263c0a",
                            "voting-power-unnormalized": "0.012050582092128652",
                            "voting-power-%": "0.003856186269481169",
                            "effective-stake": "11079187000000000000000000.000000000000000000",
                            "raw-stake": "11079187000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one14dx72ctzdfsxvsckjfwcqrl8uwdukddd877hqq",
                            "bls-public-key": "5df3a0f8666bb655371434054ce54cbaffce74f362a246b329970435099972aba9ee26a1c524d30cd379cb2795c7eb8a",
                            "voting-power-unnormalized": "0.010892649847834781",
                            "voting-power-%": "0.003485647951307130",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9421204480545800000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1wl3kppn0s8vn2shvjg6swyhyq5sc23cmq9u0sr",
                            "bls-public-key": "3d3e99618f79f96144d33e80b1517a46a65af719bfd9d06079105d1e28de197fac16195886d1967acf98046632753182",
                            "voting-power-unnormalized": "0.013002651973527842",
                            "voting-power-%": "0.004160848631528909",
                            "effective-stake": "11954510712369000000000000.000000000000000000",
                            "raw-stake": "11954510712369000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1wje75aedczmj4dwjs08l2xcg7vx0dy23lcajk0",
                            "bls-public-key": "cbf0fa521218cfa09d7c997ad9efa8107f19a215a4792cd593da8be61b14b268cb8eae74f878a4b90279883b3f720092",
                            "voting-power-unnormalized": "0.011740463491719821",
                            "voting-power-%": "0.003756948317350343",
                            "effective-stake": "10794067000000000000000000.000000000000000000",
                            "raw-stake": "10794067000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ma4dd2kqk4lvf8e9ddgl76gcdun3t9gydjdjwt",
                            "bls-public-key": "02e60595c0ae5a1766c5ac23b02f6220b237fd4e0f81144dc368a7681cdf56813017c8b1723122efad5bcfa9a78cc68e",
                            "voting-power-unnormalized": "0.010892649847834781",
                            "voting-power-%": "0.003485647951307130",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9524356054649000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1h3ugwlrl825dchuaw7nrdtjqazl5yr7r3nv93s",
                            "bls-public-key": "d7dc5b3e803dff45b1ffa22ff9268dc25991afc3ddedd3b5aa7a7c10810fddd30ceaf7fafe0b24befa6aed398d8e6706",
                            "voting-power-unnormalized": "0.013701159845653841",
                            "voting-power-%": "0.004384371150609229",
                            "effective-stake": "12596711999999000000000000.000000000000000000",
                            "raw-stake": "12596711999999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1c4keaqwlj8ljhdy6yzur5en40vnf3nzxv7qkda",
                            "bls-public-key": "0b4a1b26d04bd69f050620bc8902465ee1eb5ccb57ae4ee4bed5c75bb17fa71759eed179e39fe22f26f3db8234805596",
                            "voting-power-unnormalized": "0.010892649847834781",
                            "voting-power-%": "0.003485647951307130",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9594440000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one16pavfhark2j7h7235hgrfrx3lwlj7xnkslesa7",
                            "bls-public-key": "324ed2e36044dda94d7f4495134f6c838aefc194766cbcdb969537098936040976320808a68a8cb34eaa10e01d7f9092",
                            "voting-power-unnormalized": "0.010892649847834781",
                            "voting-power-%": "0.003485647951307130",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9286790000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one13mle5wuyn90cjhtkphyg5pdw5s4hy2fx9vnvsu",
                            "bls-public-key": "d0abf60762faaa469575bad17fe1c5bba858efe1196fc85d97f5cb6462dcffee2c731f7f22ee2f822fe2c7ef1e613402",
                            "voting-power-unnormalized": "0.010892649847834781",
                            "voting-power-%": "0.003485647951307130",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9267240000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1maygq3glp3t4d0u54hxpxpv8f8z4ss5hj0d2jz",
                            "bls-public-key": "8ff6bd3176fc9f1b7b01642e3b1895e559b8cc449436d6e6490e7f4c0f75477859887bc227c0bac22882e185fbe3bc8e",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one18cmx6dd52d5l42jtjyufvetv3s8lpl8rqhatwm",
                            "bls-public-key": "5099821a4a20c9450bc778c638214d429f1dd66993f22761c669d9fe1e67caa11f45113bcebab971c32baa8000938a94",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1nv2kkpmppsl3u4f3artyy24c9ptykkmmc643v6",
                            "bls-public-key": "351f04e4329c8e3a49ea956b8d85307a8eaf56849f20c0006e7b59346922c3e038a1fee4bd7cbf1b34551a0270b40710",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1jtq979pugs6484mpyz5ahvjgzcvv02sdclhg2n",
                            "bls-public-key": "3996a371b6790103534e5b9163d58f304b8cbd993e507cdb2894ae1c1356aab5c21bbb5335b3eb726f1d4aed6b8ca002",
                            "voting-power-unnormalized": "0.014218586942298320",
                            "voting-power-%": "0.004549947821535462",
                            "effective-stake": "13072429398442000000000000.000000000000000000",
                            "raw-stake": "13072429398442000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one156l87txy4262muvmq3qcndwwlzt5tlk58uqvmy",
                            "bls-public-key": "ff6eae041955e6ce5f6e9ece59c7aa3f5d0c66ea8023cbf4afa1354565424d353718f1281d2b758ee3aff0b769e0c285",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "6302b0a03e573ffc8fd6a51ee48f0d1d66d9320a67d40f807469bc6677d678510c8d72fda9cbb170e06a22efe2dc890a",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1cr5q35dwd2svwutwm3wg4tf6xpqn0xkt0qqh78",
                            "bls-public-key": "e3bf914f3a52dc1201710486f7914d9568061bec9e0d38fd6b518f34f5aef58c7c3f488c8901905ea6642c55501f1816",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "26065647918590000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1j8p97zd3f6qsa03xjd89xgg35naca865dkj70r",
                            "bls-public-key": "cdd12b97dc34764007e5fba0e97f7edd26ee3501efaf37ba79a84b08b856b9c2ac83ba99814ea9e7bae32e4693a23b86",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "14643953274843000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1qrs6mmvll5h7mfhr3f8rxwlf627hhpfetheau5",
                            "bls-public-key": "1e083cc85229ffcb9fc6743bb91ead11b64be410e15b3af13c80b3c9bd51c99bb2ad48acd9ee4ca2c2fe3c07d8307b8d",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1ccwx2ru35zevvve6we8q5amy4hvggpj4n97f8f",
                            "bls-public-key": "9fd7463748f72c1a219ccd8e0e3388e7c5f8c426260d78baabd8c5ca172950661410d7a84ed25669edf9419ffa657618",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17ylqmsyzehvwwf2kx5kfg6ff0pydpeufgphvhp",
                            "bls-public-key": "946a2bd4fcbaea197a78fa72acb42233e2f3972871813f41fe2d19375ea276f38b84530b72afbada958d0b9b9b0d5f0e",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "95681941193606000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1p0fecz3s2ldn53829fpj99m92cr4vfcc5hmj32",
                            "bls-public-key": "1d806a18353315437848dcf16a6297a51974b81a2fbfbd4e9b6611af77af3f32061d07128328634ad24ba28af9ddee82",
                            "voting-power-unnormalized": "0.014555866205109097",
                            "voting-power-%": "0.004657877185634911",
                            "effective-stake": "13382520645100000000000000.000000000000000000",
                            "raw-stake": "13382520645100000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one17u39z7sus7ntng6mxmart9t9w7lr956qu02gjc",
                            "bls-public-key": "68b97efd30c635af5053e4fddf88f2c00f437ed3d24d88f4b369ec6761a3b315a9e01c80116bef5c854583784a7eec89",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1cpjqcv99r42m03xxvrflr549lqq6ktx7rddzkx",
                            "bls-public-key": "2d24f086b9cf9a7f3e934a9bf4bd9355a0aaf3b21c03d74725fe8253d01888bfa839eaafe5a99a41678d1d4750f2eb92",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1zwk07x6wlervgf3e4r7k0u7mlahnts5659f2q0",
                            "bls-public-key": "6d8faf3a0ff828bfc59702755c8e84d1e4dbd434d798c56bfa4772aa22254ae4643d6b4a9d385941780b848e1aed6007",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1s2k8p76yedjzdu9wqkj3pwrf72n453zhyssjhp",
                            "bls-public-key": "73b31b932c2d747e72ed74a033819fcfeb19328785835c44155a8fc49ef4d85dbadafbaebe132ce93a0baa5fcb588d82",
                            "voting-power-unnormalized": "0.010998485814653703",
                            "voting-power-%": "0.003519515460689185",
                            "effective-stake": "10111900000000000000000000.000000000000000000",
                            "raw-stake": "10111900000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1f8hrk0l4a36hxsl8g6kqtg5ghqvzwg35s9y0sk",
                            "bls-public-key": "3774ee37c4f629346260edac71fc1ef45692accaffe60f02d6090b9ef91712f3bc8cdd355b1dcd06c4d2193d06e7f086",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "18326812779202400000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1wxlm29z9u08udhwuulgssnnh902vh9wfnt5tyh",
                            "bls-public-key": "20026c7ecc0c7b2bb5fd217d3a16cae4dff30b8c610d476da1a41f467db43f4d3fff706a6ebef4983564c67fc164f80a",
                            "voting-power-unnormalized": "0.012127602709174633",
                            "voting-power-%": "0.003880832866935883",
                            "effective-stake": "11149999000000000000000000.000000000000000000",
                            "raw-stake": "11149999000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1dsy63tatz7avdrl24y5clramvgur9hsarglcdl",
                            "bls-public-key": "8f77c124107705daa9f07c547be2512571d98365af80a76ca692d2bfbd343170eb1c542fa69def1ff3fdf58925c24396",
                            "voting-power-unnormalized": "0.011732516920119838",
                            "voting-power-%": "0.003754405414438348",
                            "effective-stake": "10786761000000000000000000.000000000000000000",
                            "raw-stake": "10786761000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1svtmmvm0nxcqz0nj83ceq54cplu3vdf73l076z",
                            "bls-public-key": "86823f71815aae6d443eee2d448d0742b086af84659054eb161858a5f7b5dec190012c3163fd4b703e95469336c84016",
                            "voting-power-unnormalized": "0.011322831236377586",
                            "voting-power-%": "0.003623305995640828",
                            "effective-stake": "10410100000000000000000000.000000000000000000",
                            "raw-stake": "10410100000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one12s2t8sexugpk9emwkuh37ncrensha47ec689jh",
                            "bls-public-key": "3c77583eb6e18b74f739a8ddd0406afd06475e601a74611fd726249344cfb9c59264605060f6c530ce847048b099be0a",
                            "voting-power-unnormalized": "0.010892649847834781",
                            "voting-power-%": "0.003485647951307130",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "6285950000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one18ppxuzlyke23r22x5n46cjrf22fx58gl7ezy8e",
                            "bls-public-key": "402bd06197d11e1c9095f0f545b77614dca1c6a27fbcb03ffe95943746e6f475dec37fa50e6c1c5633dff91a4d349b09",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1920vfl67pucex2pfw059pylsfr8hpleal925pc",
                            "bls-public-key": "1c308f3dc327fdd3a22117789cb4c19203387b0e74d7f32e0cb4609e4afe8b72772c9963f7279290fb6c966a14bf090e",
                            "voting-power-unnormalized": "0.013627357666244364",
                            "voting-power-%": "0.004360754453198196",
                            "effective-stake": "12528859000000000000000000.000000000000000000",
                            "raw-stake": "12528859000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1age7nde9wkcv99z2u9cej4szmq73aa2c5tcsjm",
                            "bls-public-key": "cd6d4e6c4307851d4eeeb2c17fb6104207b53542f0bf9c533f0078a5c74863c23d151de9627d09098ad6c5c3cf594682",
                            "voting-power-unnormalized": "0.011976392699538564",
                            "voting-power-%": "0.003832445663852340",
                            "effective-stake": "11010978000000000000000000.000000000000000000",
                            "raw-stake": "11010978000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one13uqaxe8wr2j3azj7sytv59ua0ff322auh270mc",
                            "bls-public-key": "b9486167ab9087ab818dc4ce026edb5bf216863364c32e42df2af03c5ced1ad181e7d12f0e6dd5307a73b62247608611",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1qtxatr7lr87xyvah39vdc77j4agyd8323ucuq5",
                            "bls-public-key": "6986635b77c398241c9fc037ee38d49dc1a19d81c62d126aa26f66bd4e231c79f6ac53aeaaf949c69931da740c86b082",
                            "voting-power-unnormalized": "0.010892649847834781",
                            "voting-power-%": "0.003485647951307130",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9708792112800000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "804f4659bbd2c3615bb749bdd363395c6ffea3a3bb95364073295585477c17ccb9fdc4b0fb0dc7620a90c71fc4056012",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one15a45k4a76lhsj7z9p242ey33f2g9x6k3uhdhd6",
                            "bls-public-key": "51dcd37346474c3ac0a33f23a3fc1791d40ad1ea718dc4351a8d735a38c7591adae5093d6dba0231645b877abd9b0a16",
                            "voting-power-unnormalized": "0.014737114500011762",
                            "voting-power-%": "0.004715876640003764",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "17695121928702000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one18cgh0khhkrkxm537lkr8tymfvkd9xwfm58da6h",
                            "bls-public-key": "ecbd8b1059ee6f83aaf54e1ba32a07a900e2a9c66b32038c4ea73edd9be7533aa7a950004dfc49bfe1e8bb6dfc813703",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1sv0s66ua6l82ng2t62fa5tlnk884n2gnrfnq23",
                            "bls-public-key": "2ff603b16c08f4c2f13ecec4f8184de176a0725cb71ca7d4915d94206115c8a614ae9c0df8b5fe0cb6ba3fa814764a02",
                            "voting-power-unnormalized": "0.014485353327237509",
                            "voting-power-%": "0.004635313064716003",
                            "effective-stake": "13317691796678000000000000.000000000000000000",
                            "raw-stake": "13317691796678000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one15hvt2vq2hhh5parkgel5dcamhwcn2dlnu2kaec",
                            "bls-public-key": "73916ee014b31e12c48d45996e1dfac993264d5e99949eeab7a93ef74aaddaf8073d1a37fbb6f0ad1d86efb9567cd90e",
                            "voting-power-unnormalized": "0.013840496757144398",
                            "voting-power-%": "0.004428958962286207",
                            "effective-stake": "12724816989999000000000000.000000000000000000",
                            "raw-stake": "12724816989999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1l4dp4ksy85fzchlr5pgdp5we0lpc8dsyzga6y5",
                            "bls-public-key": "bb058f47d3d66e21d67d7a0b0ab0dcd87e037e590ce47ae9470afef8f682a5ac79fcf3f79b89ecb0769cc1ae62ac9290",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1x08eyghh8uhldsg2vkmss6dzul4zamkmmkqeeh",
                            "bls-public-key": "c562f92121a31e899053fd8633f9253e87062f862c29251e6c648c7191285ca5b4da0b7a059c8b4f5505d9fe46610912",
                            "voting-power-unnormalized": "0.010892649847834781",
                            "voting-power-%": "0.003485647951307130",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9714191000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1gjsxmewzws9mt3fn65jmdhr3e4hel9xza8wd6t",
                            "bls-public-key": "842d27a14584d18fdf53951f0c24cc3a6a55ae0b4e639cbf9db15e675a6aa0f87819b78fb5d51ccf3b8bc2aefb47e186",
                            "voting-power-unnormalized": "0.014683645852690453",
                            "voting-power-%": "0.004698766672860945",
                            "effective-stake": "13499999999999600000000000.000000000000000000",
                            "raw-stake": "13499999999999600000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1xf6nzwlhq4a4sz4du24hc0a4mtzr560f0jy9e6",
                            "bls-public-key": "eae9004dc0045b8928e231306ae73dc5045628195c3f5b95b78c31426237e21b52a10601d42cc8a873ff0af135e8fa92",
                            "voting-power-unnormalized": "0.013435751316478169",
                            "voting-power-%": "0.004299440421273014",
                            "effective-stake": "12352698001036000000000000.000000000000000000",
                            "raw-stake": "12352698001036000000000000.000000000000000000"
                        }
                    ],
                    "hmy-voting-power": "0.680000000000000010",
                    "staked-voting-power": "0.319999999999999990",
                    "total-raw-staked": "919390193378031100000000000.000000000000000000"
                },
                "shard-3": {
                    "policy": "SuperMajorityStake",
                    "count": 113,
                    "external-validator-slot-count": 83,
                    "committee-members": [
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1egemh5e9xjy3x8d3cq0kq7mw4sw4jjwgkc7axs",
                            "bls-public-key": "d90b4af4db279822edc6b4aa6a2b083512d0b6a873d8e71c814b7994e0f32b97f6a6d81d21344d7fa85e76f76af5e783",
                            "voting-power-unnormalized": "0.011788006359984446",
                            "voting-power-%": "0.003772162035195023",
                            "effective-stake": "11497504397180000000000000.000000000000000000",
                            "raw-stake": "11497504397180000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1lrye4mmkld3a625ygvl8ulsmha3qzarmxny5pv",
                            "bls-public-key": "e7fb4c8bc46f4f317a0ed3b68c9692b64138b637f1da08d7b3b6d46203b07023aa6e647c19a36e331bd477b95e67b017",
                            "voting-power-unnormalized": "0.011574015399824371",
                            "voting-power-%": "0.003703684927943799",
                            "effective-stake": "11288787000000000000000000.000000000000000000",
                            "raw-stake": "11288787000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one13yp54e9kynzw57g42878vhtrzu2hfw3nn8gy83",
                            "bls-public-key": "88b4da322731de51da65e6d2faba85782fa517002f6177c19932c10767cc6cef922ee17f7e46ff00424b8ffe4afeb291",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1yl4kcfqn6e58srfzf29uhss3u7arrmvtxy8tuf",
                            "bls-public-key": "415afe0102e4b3a1162eae6f6ba430b3f57fc3ce3d460ae35205ec3446eb4b3b2d23393a7a934d1e6163f6a63415e597",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "99895762545293624198796066.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1xg9tvmlgnhphfcn0j7t46eswyl6hucshg8th8a",
                            "bls-public-key": "35088a568fad16adc7b96e0f5923c3dc6793d9090f0640b9bf5abb7b8f1bd5294dd8552518cac466ca85211c7d71120e",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1z5uz7d80leehn85yz77yucmr3sk9kdz56vcpg6",
                            "bls-public-key": "aad331aa5cfe5a58235cade19dde712b9375a06d20ccdfe7901a5618db6a21d75d6838781a32b6ecc62c814146a28f13",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "20004798671280000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1fn554v95gw2htufxpyrk6r2wejr46gx0ewwpqn",
                            "bls-public-key": "5986458048a5839d14c93a248de63e121df1cbc2b2b93282156566870d5d3f7cb5f90cd6a41a7b8ca34101c62951060b",
                            "voting-power-unnormalized": "0.010383343584906932",
                            "voting-power-%": "0.003322669947170218",
                            "effective-stake": "10127457933018600000000000.000000000000000000",
                            "raw-stake": "10127457933018600000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1seu070y2jpfuvz76vqpqry837jf8t6pm504f8j",
                            "bls-public-key": "72817a31165e7339410f85165ace34706005d22570646b77831f496fb9399fa9e8ef02a0535f2c6aba3a289e14b43b07",
                            "voting-power-unnormalized": "0.012088729946786053",
                            "voting-power-%": "0.003868393582971537",
                            "effective-stake": "11790816994408000000000000.000000000000000000",
                            "raw-stake": "11790816994408000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1pul5cd3hewakyfcewdn2m2xhuk7w0ese9u733s",
                            "bls-public-key": "24b8ea2a66cde6a6e405426117c556f133131cb628fb0a4938a59f52fa69181cb58674de1f3064c76b8883d66eb83f13",
                            "voting-power-unnormalized": "0.010656607017918728",
                            "voting-power-%": "0.003410114245733993",
                            "effective-stake": "10393987100606000000000000.000000000000000000",
                            "raw-stake": "10393987100606000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one18nnc68jyhjpr7w8kh9arq5j2026zhwt69pjvde",
                            "bls-public-key": "3074c2c46a0396d6720b4612a0641e29b13263eb4237ddfaa2317db99b8c0fd7e37a6b035c996265e82dd5c8286eb708",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "00d69ce5ccd22318af8d0eaee58b04aadd6f55cd7c728b1a45b1620aa6044b22f29d809a17554d0fde4e6bcdefe49e97",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one12a9taz0rphrfvde06af0w9hklt5efn79jk70jg",
                            "bls-public-key": "5b2456a10ed7538205aed36254eec816ceed1862eaaaa2771dbf4086ca907e6f99d9d21074391f2e4bfc3633b38c7b82",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1s5jcy0alpduv4ng4pz7u6yzxajk8usvxphkp3u",
                            "bls-public-key": "2f4b3a50a9996ca5fddb383ee01cbfe4824e2bcca4fe0dc1b8d2328203fb39d7cd04015bd9b97f70c15d4e9781d58593",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "38394302047376000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1jpwryfv7z2dpedrlchg8z66gryhymwy6gwdk03",
                            "bls-public-key": "cfc6181d5b23b3b6fecc395c1b727ee12d0d35026cdc648942b427fbf28b12f5ed90776687fbcad5b9fdbcd8d4dad983",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "15543213888256000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1k6w6v432ztk8g360lwapd95q4fzjjm9wczyua0",
                            "bls-public-key": "6c34e759f76fa9c600202adf282aecc035c194ffbb7805c8322cf3fc074c1d3dfab9b1153b6901dd2c38503a04a46387",
                            "voting-power-unnormalized": "0.010267629459330845",
                            "voting-power-%": "0.003285641426985870",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "6632312472111500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1upjqy8au5rfa70xwq52gvqsdjdcem5t44f8gtq",
                            "bls-public-key": "6c26de1193ce6a62b2683593a61c3c4b2d46cd383570dd289d8040dd705cc5fa6fbf608a9c0329e29016f78d84661b83",
                            "voting-power-unnormalized": "0.010843852344683209",
                            "voting-power-%": "0.003470032750298627",
                            "effective-stake": "10576617980000000000000000.000000000000000000",
                            "raw-stake": "10576617980000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17zp5fnhea4fs8pyhv8xjkd70trql0lf5snva42",
                            "bls-public-key": "95ab15bead323bcf24a02f05b0f715b37944e1385679c9f2de8c108809933706e92f312bcd54a43571cf2f64a227558b",
                            "voting-power-unnormalized": "0.010267629459330845",
                            "voting-power-%": "0.003285641426985870",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9936274366000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1vjywuur8ckddmc4dsyx6qdgf590eu07ag9fg4a",
                            "bls-public-key": "b7aec767534872af7c905da7318cddf2248b0834ec1d64944ad725878cca0833f14cd3b2f7f01b6f041d573fe67ec299",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1xuxwzhaf7tmp850dckr2pxqjffh3m6gm24h59g",
                            "bls-public-key": "62c430b232e99d9e1a45e4653f9849096184487d327570e9173a990f122a0f757131e864cf822ce68eee431e4f86d509",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1j3nn4wdfpju0d6zynx9cesjqmzrfwru0fwrmdu",
                            "bls-public-key": "f8ce1446daba5d62121c05eb87395b974996ca09a08b7c10ebe0ac5baf1c6c419b14d16badc2886d8789803230d7400b",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "18374284153314000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1y5n7p8a845v96xyx2gh75wn5eyhtw5002lah27",
                            "bls-public-key": "f882f6c609eb79a351150874afd5d08a0dcb8a1b510ee5875b0dd51ffe5b569c9d9d733b870dd0a9408d7957bb207513",
                            "voting-power-unnormalized": "0.010267629459330845",
                            "voting-power-%": "0.003285641426985870",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9993117994000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1le0asa2lmwg44p0h8sfyq9d3pwgwtpx7xvmnxn",
                            "bls-public-key": "01d4cb04100f31ee36cd95de3e2961d4611916438f5fa514e15ca139313b4196c02757af613b763b001f9402df853493",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "99969772112039000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1dusx2pe9urxj5am753c2szwt3p0mna8rj7adxr",
                            "bls-public-key": "c6e983e80e8a0614aac1ac21effa5f43020881041a71654cb77aa7cdae94422b4deedd84203ed9a52c07a10e4c013717",
                            "voting-power-unnormalized": "0.010843759065934919",
                            "voting-power-%": "0.003470002901099174",
                            "effective-stake": "10576527000000000000000000.000000000000000000",
                            "raw-stake": "10576527000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1k6ejnhwrlydzlua745avv9u0xmygerpl4xsr7v",
                            "bls-public-key": "0e0039fe4362333113f6a18fafdb7625dcfe708ae7ae7257bf2f8ec8ac775dd86636d83d66be617f939dcb6480ec288f",
                            "voting-power-unnormalized": "0.011233256690345437",
                            "voting-power-%": "0.003594642140910540",
                            "effective-stake": "10956425900000000000000000.000000000000000000",
                            "raw-stake": "10956425900000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1syx0rmtttr8jehlxvnkpyx4hvrlevmcx3tcghy",
                            "bls-public-key": "02760cadc6ef3d3c1f8b66adbe182ebc252b451178efc168e856870311c8a7005c7060d28ea72c6c7adfab606989f413",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "22340355779391000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1yryvqzef37wyn4z8fsmux38t6mgaqyk5hvlqj5",
                            "bls-public-key": "33f2b540ead4c53b1d998539e6364558cb0aea657234c6dc6d04f07decda418488fa90116dbfbdd8950ece48ca278b17",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "13611518047196000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one10zad8mkynw0wsxzqkv4xfjrk2qe7vvfywardkd",
                            "bls-public-key": "e51a0049025c2598b3465dffaca6cf613f7c0024fe1bd9c50063919a7ed3cb24a864dc3336030ffc87c3f3bf38b81e8b",
                            "voting-power-unnormalized": "0.012998941066579347",
                            "voting-power-%": "0.004159661141305391",
                            "effective-stake": "12678597000000000000000000.000000000000000000",
                            "raw-stake": "12678597000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1q3z4tgr42ylegju6tcvxmg30n234d347kuh8n0",
                            "bls-public-key": "2f9d9b9b9d906b22a3ee0071d9a0762dcf4cdad9103ab3c1c7a637386c04a7209cb1faa1e74334a0e1280c3d0ec91183",
                            "voting-power-unnormalized": "0.012711087237496143",
                            "voting-power-%": "0.004067547915998766",
                            "effective-stake": "12397837000000000000000000.000000000000000000",
                            "raw-stake": "12397837000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ssm0ea54n5f39p59ne22rlq3nzgw6uqckusscj",
                            "bls-public-key": "fcb6388c0cfcd6a89578b71c8257a4618c74cf834bc1a7c280727f6fdcdff1cfb047b1f2db3f8e0a0da6119d881a9293",
                            "voting-power-unnormalized": "0.012677027883591940",
                            "voting-power-%": "0.004056648922749421",
                            "effective-stake": "12364617000000000000000000.000000000000000000",
                            "raw-stake": "12364617000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one18k6qtls8wwhw0v2kjl9lsyktrx9myyx26ey28j",
                            "bls-public-key": "ec43375dd33603472c859011e46b532070369c01b32db32ecd4184f53e7ac299b13f1743d8cd37d24ed8efd0b53b8993",
                            "voting-power-unnormalized": "0.010267629459330845",
                            "voting-power-%": "0.003285641426985870",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9999325200000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one18ms0urj0j4xv3vpxn0cp00wn70fddl64v8dqdp",
                            "bls-public-key": "7b565c693aadb0e7d0fb3431b1d9a1dac4b4fcc7da6c4d6e35a4ae7317efd27fdcc443a5d5f73dda541713d3d21da40f",
                            "voting-power-unnormalized": "0.013222272760349436",
                            "voting-power-%": "0.004231127283311820",
                            "effective-stake": "12896424939071000000000000.000000000000000000",
                            "raw-stake": "12896424939071000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1c0w53749uf70lfzdehhl0t23qdjvha0sf2ug5r",
                            "bls-public-key": "e552fbc280760d89e9f09cce27fb15223a9e45071f40cc03eb56a17613988214b7b6b0c8603237c55cddf47f11820187",
                            "voting-power-unnormalized": "0.011386655860770368",
                            "voting-power-%": "0.003643729875446518",
                            "effective-stake": "11106044722948000000000000.000000000000000000",
                            "raw-stake": "11106044722948000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1dk3ul0r8l32600al7zql8jvemumj93myuaptkf",
                            "bls-public-key": "fdc88e22bdd90da5724d6ec8ad281bbe3c2891d09b6325b4cfbaa14666263393fd94b7df075832a3c431fd8ca6a6a78f",
                            "voting-power-unnormalized": "0.010572162242192833",
                            "voting-power-%": "0.003383091917501707",
                            "effective-stake": "10311623369999000000000000.000000000000000000",
                            "raw-stake": "10311623369999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one15nr9mha7fz5w2kx2dd7rfnpyd2j68h5dsexrt9",
                            "bls-public-key": "fdd56e007ee3c4add8c737424387445423f5574da2961e5eec51c89c82f40a5b360f7e3883b40bf012c84ef4a2b7648f",
                            "voting-power-unnormalized": "0.010267629459330845",
                            "voting-power-%": "0.003285641426985870",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "4365685998925000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1x48lqucxl5pn3956p7fx5vphszg6tylp9ty766",
                            "bls-public-key": "d975f041ebb45e2ebc6b04d2dab55a9c8d8cebf51ffa107015d9b3d58bdc6b421ca4a455ca6b6dcc4b159e13ddd2ea11",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17e50tsfnd0fcnyandw4vtknkehlq7gukkzd0r4",
                            "bls-public-key": "4d2b4a92b35454c3eb7f12a3724e668dad7c0094f209aecce21b2dce821ddcf7c6381ef44e853874eac1546f7154f983",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "82117228419762400000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1fv77qz6ngvuvzhqzg9m0mqjx6d32dqwzqf6e9r",
                            "bls-public-key": "ae7a9cd8613dda5c3a385c471fe1908246d39228bfef1b1a7092b3798fb833acbb4fb0c31576e5d9e3156e48e6be5b0f",
                            "voting-power-unnormalized": "0.011570315212941762",
                            "voting-power-%": "0.003702500868141364",
                            "effective-stake": "11285178000000000000000000.000000000000000000",
                            "raw-stake": "11285178000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1c8p90nmarr90j8vevhq9588a4pxh0tqctfmxeq",
                            "bls-public-key": "c47e65a0100104f29fdb034feeaa78e266092ae778a5be066c24682c351e994c7f8958a9fe3ce5feaaa64227fdeb120e",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1pgna2zyqmwr4u9qwwfvpce40v3z6amylzhxe0s",
                            "bls-public-key": "3d37406a97787c13abf762398387f71ac8bd8d7dacb8c3412e442d85c8b6e49ebbe1469dc079713897545dc03864f897",
                            "voting-power-unnormalized": "0.013101459890937433",
                            "voting-power-%": "0.004192467165099979",
                            "effective-stake": "12778589364939000000000000.000000000000000000",
                            "raw-stake": "12778589364939000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1na892u23tfx43xfp0gep0fxkut0hswjka7r79y",
                            "bls-public-key": "c2cae6e2f2ebe3a445bf1190402955a3f3f0aa79bd981110565d5a863a28c93c43fbb700ab1091fe5593f3c08805468b",
                            "voting-power-unnormalized": "0.012189866343444274",
                            "voting-power-%": "0.003900757229902168",
                            "effective-stake": "11889461000000000000000000.000000000000000000",
                            "raw-stake": "11889461000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one159c8eq2a3282nhq2ufvwv72f82ja7qyl2snvh3",
                            "bls-public-key": "b1a7b73f93cb461f560d1f6dfe1149084746a20f38beb91045574df610661fb95b806039ad310a262a620f1235dee093",
                            "voting-power-unnormalized": "0.010364047112345589",
                            "voting-power-%": "0.003316495075950588",
                            "effective-stake": "10108637000000000000000000.000000000000000000",
                            "raw-stake": "10108637000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one14ahhzt6zkcuwlkevgqa8j08axreakrqassnhyr",
                            "bls-public-key": "ec4bd019cf23b921ea4f96a2916f072168b2a7cc8ce87673dd2623b87177944a3f0c5ba6ae0802eec6f4b7f195e91417",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17c6r80qvp9xthqq38e98gzq6qjma9svj63y927",
                            "bls-public-key": "a78144701f6cdb7f526ed4e0a1c8fd5adcb90ad4340fca1607b6fd3144080f2bc2bb05eadc82d1ce6b6b235bb2e5038f",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "13673488102600000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one12lh0hgsken9x7c6h6rwlmwk7j3fpl8rm9ws5pu",
                            "bls-public-key": "425240abe5de3d1878bed335d91e2ffc4e41606c45fb5a6edd4ede1b3f255fc4cf23f530a7160ac027ad42fb0f200e89",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1y3rrv8s2f6jyjvtyr6c5u37074z90gwnjadfuf",
                            "bls-public-key": "17759b3d922b64a8beac8b15acf05eb83ad587c7f7fd006ac9c5a187e0f40c0ad5155bc5af385cf72b0643931be39011",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "84ad0dc35bdb6ab51c70d7f65a38b1e5230fe451fa895938749c1732c109f6fac7e4107ae44961ef1280c96dedcc3e13",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "db66379230ed5b875d7f71b98c922a43c1d2a93a65013badaa2cca1a35ace401d37cf81ee54db02be961593ca535b507",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1c04stvq5q9xcuq9ucrlxrg9n6hu68n6ansu6vf",
                            "bls-public-key": "b8c18bcf8126343a4a97b24f49f6f6f61e27417c175941f59a46a0b89313863dc341a7d55f8621b7c563f06f9ade0003",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "21475956361454824000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1w5m99xs7dn3nfdxmsc8f5vjl8hg65dc2e5kp2x",
                            "bls-public-key": "1819d0789eb593764b7fe3f7f1a36aa113c0f1ffec14f146581e6451feeede5ff9e23d2a56c2edb7bd4f870e2b186c83",
                            "voting-power-unnormalized": "0.011315500809239371",
                            "voting-power-%": "0.003620960258956599",
                            "effective-stake": "11036643206451000000000000.000000000000000000",
                            "raw-stake": "11036643206451000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1hg4fnfu0g4v9fhk4nryluy7ylvf03dash5tufz",
                            "bls-public-key": "3a3efa9fce3b6a826b94a0abdc0f161d962c0c0dd40d9375e4306d017c76d3c0cbc367d387233883b1f872cf6f906193",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1keh8p8dw84jx5srnyvft3peckmgaurvuljhxzc",
                            "bls-public-key": "f52d35cc78db3eff64392b7746445af76680550c54c23c2ab59bca348b967ca6ad4e6419f67e9cdd3e6496e6e9dd0718",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one14pkx9aqrpeygamrtxegx8hm4jwvf904422f000",
                            "bls-public-key": "11e234fff630d4d86f8b2fb2597a7b307ef81962224421874b34a8089ad90d49e83d02e28c3a4f5430fe7be6a3138187",
                            "voting-power-unnormalized": "0.010267629459330845",
                            "voting-power-%": "0.003285641426985870",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9919590000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1xdnyc4c85vkh69am2wdd7rmcyzprmem5tnm9ck",
                            "bls-public-key": "30c41b92a7253f78050010ce4a24ad9ee0821420c12b1586ac56d20f14486b9167e2e400ff24251aac9cc309e69a938f",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "13884982968566000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1qdmxqgru6vqv5v2u0jhjvgyl4n7c4a550mjtmz",
                            "bls-public-key": "7ceb83d3af19a92cf74eef4ecfac8e3b9699789499eada1c2622f7497a6f082f83d0a5d6baf4e73274320409b505f18b",
                            "voting-power-unnormalized": "0.012610778236654495",
                            "voting-power-%": "0.004035449035729438",
                            "effective-stake": "12299999999999000000000000.000000000000000000",
                            "raw-stake": "12299999999999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one18syyn5nsuu9yz6nz0uuuns6587cwqnqex58v39",
                            "bls-public-key": "e5ac12e3545eba42d11d7440796745a52d3af8f3f4aa1f657ac4153f3ec00ea055fbe6f65f1d17f481dc4881e6e03197",
                            "voting-power-unnormalized": "0.010580207470476674",
                            "voting-power-%": "0.003385666390552536",
                            "effective-stake": "10319470332814000000000000.000000000000000000",
                            "raw-stake": "10319470332814000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one103frfx3zmeymel7uyrkd3t48gup2hkalknmj9j",
                            "bls-public-key": "072de8125621916a6f02fcd6a0a451ecbb3379b050c6b4098b2b0014f0afd7a4ad14112b3b4b221e16c31d6cb7665b11",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one149h38k3rt8m8gfaxxfn3zn43lqt6mzlvthcy5e",
                            "bls-public-key": "ab08be98ef02d0d0000eb21314121854ff9db7445aae41a7872be40d4fbdb1596bd70fbb16c96a582dae008370365f17",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "74999999999999950000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17s02lunsym6neywxrf7c76f2k489kxg4v77e5j",
                            "bls-public-key": "bcc8e0cfd8c5a9b93d7596be630d320493830d8c381ed357fdaa54e554a945ca562e4980be13adb9b5c3570173542a8b",
                            "voting-power-unnormalized": "0.012003427777780341",
                            "voting-power-%": "0.003841096888889709",
                            "effective-stake": "11707617000000000000000000.000000000000000000",
                            "raw-stake": "11707617000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1mhxpn2m2w22nuwr5gj7a3dv80p93kwnynrfepl",
                            "bls-public-key": "23abacb45b6c6566c4b2973709d7f514754811f7f82196a5aa1d5a904275ea722a59907c1b19c1278c692125d31d070b",
                            "voting-power-unnormalized": "0.010267629459330845",
                            "voting-power-%": "0.003285641426985861",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "3473149195000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1rmsztmw3727yjuszwd484z8mvf9v6fkkze4r5s",
                            "bls-public-key": "bac85ed94cf9a029d6ea8497d345a3668a14b796bba4b7269d4d3026ff37800f931766e0de187c1d6275013671bf2103",
                            "voting-power-unnormalized": "0.010997746818342038",
                            "voting-power-%": "0.003519278981869452",
                            "effective-stake": "10726719899999000000000000.000000000000000000",
                            "raw-stake": "10726719899999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1gm8xwupd9e77ja46eaxv8tk4ea7re5zknaauvq",
                            "bls-public-key": "8184ae3b4c83756ae70e31db625fafc021d07b189140391152ad19df11841e920b93ee3ed71f8d498f3fdc570f415f93",
                            "voting-power-unnormalized": "0.010843851339922016",
                            "voting-power-%": "0.003470032428775045",
                            "effective-stake": "10576617000000000000000000.000000000000000000",
                            "raw-stake": "10576617000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one172alesnh6vana3ndwkhgu4nfazl9e5cwvnxtwl",
                            "bls-public-key": "5f7a2faeaa55f46a2b07164bc33a2d2569e05316b8c5f8d4757545342aeae8cde5cf30970aad748aa424871940b5818c",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1yjtrsq78t02qgjcwn56x96kwkduwhmc8wnenfw",
                            "bls-public-key": "82c920ddfafe709488c6ccabd9087fe20a9cfe6f3003ae1595884ab3d47c99c2075d8068d2642cd3be3a361ba169b207",
                            "voting-power-unnormalized": "0.013128184626607431",
                            "voting-power-%": "0.004201019080514378",
                            "effective-stake": "12804655500000000000000000.000000000000000000",
                            "raw-stake": "12804655500000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1n7twgx0x38najm8jvay5muglh0wxmv3j4ps93g",
                            "bls-public-key": "d276072c1f99a349c28b2b9a2e4184d9bc8df8912e0be9e6527749934fceef755d1ce15ba7eb0de8a80d9c9256189d87",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "99163187467985000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1fxtdau23qk0fl63e40g3h4nfwsj0k8uutx59qx",
                            "bls-public-key": "59b98b2f2ee7a192fc68c05c4af99028a4fbc8532ea56eacd47711fd193d55195826d1a247a054e41904a48b3176cd93",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "15685080193576500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1c3l67kwzd2pzre55mqxs5pmpx8l3utas8cpq0p",
                            "bls-public-key": "0c5cdcef8f96df89bb8dc3db0fb243644bf142ea845cf062a4bbe833eeadbf159c12b52b2b77b71559a9874ef834418f",
                            "voting-power-unnormalized": "0.011800622357891932",
                            "voting-power-%": "0.003776199154525418",
                            "effective-stake": "11509809488218000000000000.000000000000000000",
                            "raw-stake": "11509809488218000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one12lggt2syf9u6zy40kx5x74upwe9s766tmn8av7",
                            "bls-public-key": "70099d329cbdacfed3ffd7b4717386490e4dccdc9016bffe8bae5c469973a06e1c5c9fa900d09185f18f1e4f25ccb293",
                            "voting-power-unnormalized": "0.010267629459330845",
                            "voting-power-%": "0.003285641426985870",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9952777000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1v8hcjxmstels4q02fxd7as8jszal9t69zchntf",
                            "bls-public-key": "15e5b5b1b455d8814d8986f9fd00bd64e897506c8e958bbbfd6f43e2302837ab625096f19f05b751fceac5caf387f483",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one10cwk8hfq5nr4u20jht35flukvtceunxcu8mw7y",
                            "bls-public-key": "b72bb57bb2e03beba80a03ec24ef3ebd9c91bdcef202ab0eb8c82119273c73e294330c6e1ba2ccb7d5fc6923f7784687",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1xpezw8k5e76t0jntvlgtug0t9wdzletvnl7r9f",
                            "bls-public-key": "b59da657b3f0acb84214bdafb4a493c37659a2dc4a2d43aa3316c31b763297608d3b1b37adcd326a5cc5a1a845e46b0b",
                            "voting-power-unnormalized": "0.010267629459330845",
                            "voting-power-%": "0.003285641426985870",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9355258362237400000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1twuxldpnwcafdu025jd7aa5r7we4j29ndtafuk",
                            "bls-public-key": "d5cf9cb52b9afb4f97997cb4830ec83e8471206d773d090ac2423bedb2175756ac315f32832822db9cbf74dff93ff10f",
                            "voting-power-unnormalized": "0.012062263963423348",
                            "voting-power-%": "0.003859924468295471",
                            "effective-stake": "11765003234999000000000000.000000000000000000",
                            "raw-stake": "11765003234999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one123qhn8m0amf7ap80gplf68eae5923lu2ltpupe",
                            "bls-public-key": "4077687225674df0113810e1a5d9d374e792c37884a255aeceafd0d721fa3e62dce471ac1464463fc3f0958451515093",
                            "voting-power-unnormalized": "0.010970350774100474",
                            "voting-power-%": "0.003510512247712152",
                            "effective-stake": "10699999000000000000000000.000000000000000000",
                            "raw-stake": "10699999000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17xz463re6h6hfpj28s6xgrx7eacec3yppfgu3u",
                            "bls-public-key": "f92c5631824378205ea2423fbe0a820ab3345a4af120a87236e6228c0a75287ac33ca1156e05abbed3169af8f49c1383",
                            "voting-power-unnormalized": "0.011273201409409904",
                            "voting-power-%": "0.003607424451011169",
                            "effective-stake": "10995386227053000000000000.000000000000000000",
                            "raw-stake": "10995386227053000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1920ku8c9uerwyavk9hnxgpdshak7w7dn9gm632",
                            "bls-public-key": "2e19dd61de8d74a9e4e571af05a9c597949a146da8cdffb1e53a836522fabd6fb8ab733f164763efe17a2b94db7a1193",
                            "voting-power-unnormalized": "0.010938476851639401",
                            "voting-power-%": "0.003500312592524608",
                            "effective-stake": "10668910573979500000000000.000000000000000000",
                            "raw-stake": "10668910573979500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1td5wvcfwv6zp4vmttl7657jkun30z3dhl5d222",
                            "bls-public-key": "61bb7372fb38bf661b382b8a6bc0c29009cfe7612bd886458f03d12097c24bb18198a6dc61a73005096839706ebf0c8f",
                            "voting-power-unnormalized": "0.010267629459330845",
                            "voting-power-%": "0.003285641426985870",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "8572740000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one12s2t8sexugpk9emwkuh37ncrensha47ec689jh",
                            "bls-public-key": "f0de93bf5daa8b0cdc22d6940c9cbe684c89e05def5a18296e954f8b94f862f86cf04cde96fbf3ca4b7be8dc0d67ff13",
                            "voting-power-unnormalized": "0.010267629459330845",
                            "voting-power-%": "0.003285641426985870",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "6285950000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1p5jp6psqfy4hg3arswsxpyfxnrmrj64te3tuxu",
                            "bls-public-key": "8f657775630e2f58fe7fc679fd5827705eb19ad1ea47c78d3d5ac544ddc8d2fa0aa542bafd350d4eb7e9c822a89e3006",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ywrd5hrwf54dt7p6j3xjcas69xjeflxy2ejvv4",
                            "bls-public-key": "850b0487a61a00362f35129ff9883c54b9ab9e1a8088fa5b446c3680f44ad608cd17d6de700fc79312ede3a95b32dc8b",
                            "voting-power-unnormalized": "0.012315327182634624",
                            "voting-power-%": "0.003940904698443080",
                            "effective-stake": "12011830000000000000000000.000000000000000000",
                            "raw-stake": "12011830000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1r6thhh5qzpyk58ddcguv5jhq6k6jh4lqhmwnqk",
                            "bls-public-key": "e2b812729d73a3e4538ec19cc2a8ba694660dc6eca53531026b6e6a3d119de7de43ed994771457211f581600c7488c05",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1k6w6v432ztk8g360lwapd95q4fzjjm9wczyua0",
                            "bls-public-key": "abf2689fcb4593ce9786d22e0858dc816498e4d5124b207445a6d3ccfb7b1621e81e7395fa1a400f35040ec2d9fc8383",
                            "voting-power-unnormalized": "0.010267629459330845",
                            "voting-power-%": "0.003285641426985870",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "6632312472111500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one14k260sxkghzm7k8lnj46lvvk45fdcw667h39mp",
                            "bls-public-key": "78fa7956131032aea66a9485479f3cfd03248bc78d8883a9a02efb647eb5a6f1386588548eba06d4014ccda22309b087",
                            "voting-power-unnormalized": "0.010348134975903890",
                            "voting-power-%": "0.003311403192289245",
                            "effective-stake": "10093117000000000000000000.000000000000000000",
                            "raw-stake": "10093117000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one197tkyzudh4swfnfwj249s3qy2jfjh7nu3slvr9",
                            "bls-public-key": "f43a6eb6ea542bde832eab829e42d733c4685793d844b4be5bffec10ebe74c3ca680f0efaef6c9f57f7fe589505ada05",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one10ld9ej7vmuf82wxc4ep4tjcx0m75h5fhkntm78",
                            "bls-public-key": "8c0b30de71543d83f77ebf2e68e980aa53c79879be6da479b1f0f0badc0bbc58dc0f24accca0b59adf01d703e6d6cc13",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "30072300670168000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1t7p6nre40hq7z97anrf5cqug3n3776tn3as5ds",
                            "bls-public-key": "51d79e77275847d3d22c37172a86eb5810367caf35cff5b26d7ed56db0e4a92a12b13c347e4353a79a1111f8649eb887",
                            "voting-power-unnormalized": "0.011745072224598632",
                            "voting-power-%": "0.003758423111871562",
                            "effective-stake": "11455628324559000000000000.000000000000000000",
                            "raw-stake": "11455628324559000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one19fwj7f3e2kgz48cqe6vs43d6q08f5tpt3zhlu5",
                            "bls-public-key": "b3f88974af22ec352fee49aae74eb5d6910e301aee5724d56b4a344b6ca2a379401ac3ca91ea076e509019421a211a0f",
                            "voting-power-unnormalized": "0.010267629459330845",
                            "voting-power-%": "0.003285641426985870",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "4929048630834500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1gf2akkuad0sgmwwgta5d0q82g848z4rrmgm6ar",
                            "bls-public-key": "60011df3157bf63ae57646acca376f1f9898d80b80102f998aa241af7444e958651ecf29d143f3dd9107a5cc213eda10",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one19usg0jpgp0rkkexxw57zdwf20c32mrmhdcdj53",
                            "bls-public-key": "6aec97cccb934f6c50c60737be830c92f480f2fd1106c0f9c910dfee0cfa458dded98e6618a500bc4f9b833c1ab20e95",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1znscqahk3rtpsudkdgrude0s4hlm2lwg2c8hw5",
                            "bls-public-key": "0d429fea2807ba838dfe01fabeca994b87ea89a6bdfa47847896e986fdeb441bb56232353db853bc0610ac56d12b018f",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "16666436626854000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one12f484m9f8d9yhh8va3sc09r8lwkcufu2flya2h",
                            "bls-public-key": "2c6cb2778d6c3459b75dc5a8fd7c23bfae25eaeaaef4d037ad19968b08c6f08b29fb9111fff3c627ef701f8a8e28b907",
                            "voting-power-unnormalized": "0.012225064357215316",
                            "voting-power-%": "0.003912020594308901",
                            "effective-stake": "11923791598894000000000000.000000000000000000",
                            "raw-stake": "11923791598894000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one140tj68zjnmdyhf6d9pst7m3gxgxn6kvknrfhwn",
                            "bls-public-key": "55ee5b8742f2e35a7b0f02d9ee644d18046ab988c2e82810f39fed22ba02bc5db9a72c8a2a0a0d6e9f89a3ea09e1440e",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ykgt7kz96emc7avsv6ca6czva9guvcg807eray",
                            "bls-public-key": "df8323b00d08177c7cbacbb1d633ced7962a82759b4828781cc132fcf97d9e45d9377fddc64da65802c2f6c79c3ecf97",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "25482741896829000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1khyz6zyz3gzk8c5f9j76d5ng0rnkw6n75nwe0l",
                            "bls-public-key": "b5ddf57e56226de7d472e59071bd97a9c9c39e41f852d2f9cfbac9c540392465d7e4bfcdf38be777eed6199acbaaea87",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "16355537000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one14xn25dqus5wgs9nkeuzm7uyf3rjqr5s7w72rv8",
                            "bls-public-key": "e92333fd7866a3802e902b18b72f97df92627869a8222d3dde533e07948e43ea3d9bd969ee7967b872bf6c0327e6ba80",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "2fb1832b89450c8f6cf78ea4075aea489059f43a5b4cee418d8e30675238235ef6aab40219e7933bf827cbe14d18230b",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1cy54nt7chpmgpya0sjn6g6avtuhypuz88dn3ys",
                            "bls-public-key": "b87fa42b3c10fa896f5efcb3df29a2ebb341e51c79c06623c8315fe49503b6646b95fb137bf0dc969f1fb37308f2ac87",
                            "voting-power-unnormalized": "0.012008247248124391",
                            "voting-power-%": "0.003842639119399805",
                            "effective-stake": "11712317699998000000000000.000000000000000000",
                            "raw-stake": "11712317699998000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ng4agl0mz8a58v86ap77qd3d5kc0q2kprptldk",
                            "bls-public-key": "af8cda6748c00cde2ecea66566adf9ccae811458a83ba33aedd9799f62ee5b092596919f32f36576b02f810d13102417",
                            "voting-power-unnormalized": "0.010380053054522571",
                            "voting-power-%": "0.003321616977447223",
                            "effective-stake": "10124248494000000000000000.000000000000000000",
                            "raw-stake": "10124248494000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1sy8vg3lxqez80c83ed845hf39mjjm8yhv0vdzh",
                            "bls-public-key": "c68ca2df8c1c386b57368df035efd4eed561e760e0556665bb04da2cd41219db5a27b5f6dea0294a91eab93ae03d8302",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one15cazch6k02clu4eqzw92mgk6l639sh9qpcx3ma",
                            "bls-public-key": "db6c36c33142c4f7684c2a56d8e970a5681951112a13fe8c41df278ad58e5aa7d384673c434e8e3d3ee269f4aed9d417",
                            "voting-power-unnormalized": "0.010634218883286846",
                            "voting-power-%": "0.003402950042651791",
                            "effective-stake": "10372150696000000000000000.000000000000000000",
                            "raw-stake": "10372150696000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ma0aqp3evkn802s7eqw2qtpppvsxpfnw8mpuc8",
                            "bls-public-key": "420a7db834d090761b099a80cb2061220e06eb6ebca2962e00d1e1e0e66de64ed01a80d8673164f3736de2fb1416b493",
                            "voting-power-unnormalized": "0.010267629459330845",
                            "voting-power-%": "0.003285641426985870",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "8826825406052600000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1mmnz9gyuuasz529mmtzc32cs7vpvadd05tp7uj",
                            "bls-public-key": "3434351415d20b3b4a5014b9aca44703dfef332e50e008a59ca8d1f9bb41b0ea695fb74a0f9e346138a429d08c24c793",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one173kc6tzq8mjafpjzme4u4rdhf3pn3j8cwesl2m",
                            "bls-public-key": "c2f66a6948be4f2747f5938091898357f96839a8a6766c1be80f989fd1e85fb7eb9b744aad6d6597445bc09d5ef7a916",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ecp9htmq8csm9wzhgshy24rz3f8facpzdw7zw8",
                            "bls-public-key": "a716b28f9da3cb58ef662199cc408fab6ea31a4f96c31ac63a2236d8986359209cbfda2e7b32ea2b00b03c19f7c8df13",
                            "voting-power-unnormalized": "0.012102980075645169",
                            "voting-power-%": "0.003872953624206454",
                            "effective-stake": "11804715945105400000000000.000000000000000000",
                            "raw-stake": "11804715945105400000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ffw8maa9ff4ahjp3j6uy7qd2j4y8q2x8xrdk85",
                            "bls-public-key": "4f328a1326eaf8445eb588a86679ac4907d45e710e07dfff67fb36dd33e3f0023434c39248d249559fdd15466ac8938b",
                            "voting-power-unnormalized": "0.011182855715852922",
                            "voting-power-%": "0.003578513829072935",
                            "effective-stake": "10907267000000000000000000.000000000000000000",
                            "raw-stake": "10907267000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1tmp0rda39a4fv0ajal0c2ahtf2pt3mz5vgsn59",
                            "bls-public-key": "2ac1cd49ebc0cb1c8a49cd90c41a555a7413f13252255ad68065d6f55cd16129876f4af22febf95b1a5f6766dbe90883",
                            "voting-power-unnormalized": "0.010267629459330845",
                            "voting-power-%": "0.003285641426985870",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "4609479000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one184u853scm64f6fhaka93p4eqk25dr292gvdzx4",
                            "bls-public-key": "14d6fe69da4f7c85d15f06b6b93fe456a6a68cdfdabac18d395520444295bb616eda8c63d32df7ee17815b276e8c0b00",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1j6hg78slrsvq93n7xa0w7t857pu4vw4lmalnv9",
                            "bls-public-key": "10cb9229e88524b0fdd9659467e15528ae79330f06d0ae541827b77dca49f2a81bac0f849b07b78b4fac5142a0aee083",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1n4zfs2hhfsffekg3cwvkm2s0qs8d44z7nlxkwu",
                            "bls-public-key": "44ed7b6a7c29731e7b753feef367f08da97966ea56c3a8efe13b6b67a5c200132cbe4fb4946615de62ab52e14ef4e487",
                            "voting-power-unnormalized": "0.010267629459330845",
                            "voting-power-%": "0.003285641426985870",
                            "effective-stake": "10014595450000000000000000.000000000000000000",
                            "raw-stake": "9545872610000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1s5jcy0alpduv4ng4pz7u6yzxajk8usvxphkp3u",
                            "bls-public-key": "c58d8a8b3396b7f7ab6e6e7311a182a9d3a411cdc08e7eae35b9ecd46501a729d0d601afab024bd7dd5223ae098bfe97",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "38394302047376000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1el3arlc0dczjpr8crhufgszurt6hcmlm66evwa",
                            "bls-public-key": "8c0ec55728c48aa43c1a9836f988e847b48284ad6baf37683efa957b763cea5102b1feb7409bf404f970da27fa750997",
                            "voting-power-unnormalized": "0.012004964652298775",
                            "voting-power-%": "0.003841588688735608",
                            "effective-stake": "11709116000000000000000000.000000000000000000",
                            "raw-stake": "11709116000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1l9gddgsctsvv73ayuzns8czwdgxgy6ytv00j4j",
                            "bls-public-key": "7b2fa986cc6261cabb001c3f1a52ed55af814c7a44f08b01165d23c6bc75bc950beeca2da490c8262843269605b90b97",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "14019899131960800000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1jv4n6rxsg8puxzaelvsymkryupyuezt05rk36c",
                            "bls-public-key": "24968b953506079535cb6bb95f4a1438870ad72d9be1d7ccb29fec672cfb63587b282a4e70759c41fde136aae3e5068f",
                            "voting-power-unnormalized": "0.010862026137052972",
                            "voting-power-%": "0.003475848363856951",
                            "effective-stake": "10594343899999000000000000.000000000000000000",
                            "raw-stake": "10594343899999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1t9ummhthtnfez6m0523tyu86psmr78v733smfx",
                            "bls-public-key": "ab7df3e38a8423c31f8dd40d2952667bff711c9d00f717e528ffc661d1d26c3b431f403eb1c360a767fc8ad7fe2b3991",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one102xvs5la4wfe9qut4nz76mxm7c3xx3jn4u95xx",
                            "bls-public-key": "5011e24ce96c2ecd77fc46bad5bb025eca84e24b92c263bfb10360264a53f4aee63ea33b7d5ecb7513616084f9fb650f",
                            "voting-power-unnormalized": "0.013891498680271143",
                            "voting-power-%": "0.004445279577686766",
                            "effective-stake": "13549158550000000000000000.000000000000000000",
                            "raw-stake": "16880692586445000000000000.000000000000000000"
                        }
                    ],
                    "hmy-voting-power": "0.680000000000000010",
                    "staked-voting-power": "0.319999999999999990",
                    "total-raw-staked": "975356141324237500000000000.000000000000000000"
                }
            },
            "external-slot-count": 320,
            "epos-median-stake": "11792226953200500000000000.000000000000000000"
        },
        "current": {
            "quorum-deciders": {
                "shard-0": {
                    "policy": "SuperMajorityStake",
                    "count": 105,
                    "external-validator-slot-count": 75,
                    "committee-members": [
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1puj38zamhlu89enzcdjw6rlhlqtyp2c675hjg5",
                            "bls-public-key": "99d0835797ca0683fb7b1d14a882879652ddcdcfe0d52385ffddf8012ee804d92e5c05a56c9d7fc663678e36a158a28c",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1d02tffmrxp6m392uxayxlpyaekdl6k5znnr7tw",
                            "bls-public-key": "2eb44f4d5cfed5190b2935b6bbfa0b17b78c1aa1e236bc3795db3640a15249e062291aa0bbce9e4ea1002bbe3cb61500",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "47026109568739000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1l8pyucgwcjlrchkcdw05jqfsz58pnkk53kdle7",
                            "bls-public-key": "ca75abb7b6e16bd8a434a1f38b05b4b148ac575fca4ae060ddd176a5240854c1586579ea5a9d5c0771c80978aca39e98",
                            "voting-power-unnormalized": "0.011961729308592148",
                            "voting-power-%": "0.003827753378749487",
                            "effective-stake": "10800000000000000000000000.000000000000000000",
                            "raw-stake": "10800000000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one10muk9x4cuztjtxh097ghcftxhrscv4ranlm6eg",
                            "bls-public-key": "8e8b42296aef2ba1aed7e6a64b8734a0bd12a55c2c32d1a893129d0b3c0d04b2c2d778d5929cd8b460bc987141080a83",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1566p89a2hmwkxle67nvqq7pvncgy3h5jukdcnk",
                            "bls-public-key": "178604c4f3757bd6266a4b24651ef82d371db8dc3a1dcfeface2e15c00522a263bebc833e34f545a927ebea1e98c3880",
                            "voting-power-unnormalized": "0.013016530103861636",
                            "voting-power-%": "0.004165289633235724",
                            "effective-stake": "11752357999000000000000000.000000000000000000",
                            "raw-stake": "11752357999000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one18tflcxt67uar3wtvvlwuae3jux3m62vq92wkam",
                            "bls-public-key": "c412add5d19b3e40491808d6cef958eb9e4a1e7770cc5b8046870f6aab078c9aa4d3f8ed8396e4d18af83faf0e5bc70c",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "98089542452727300000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1cts9rdxhd25hcwt6ulstnp50suwuzzdtsxr6pg",
                            "bls-public-key": "266e262c3a6c3e1a0ac3eb0f83e6745328953177e63762814dddfe7ed4fc0dc966cac7b4966936a8d16bba76dc088698",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "19316265617397700000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1dcmp24uqgwszcvmm8n6r5dvhqhuukdj86pkg6n",
                            "bls-public-key": "5e5ccd77a8d7d630f52d9572d8d63694ccfd18e7013729294365df154493cf481b6aa5ae18ba21bba345bfaf1d641e10",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "15166762121246200000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1leh5rmuclw5u68gw07d86kqxjd69zuny3h23c3",
                            "bls-public-key": "8305a3c41781663d2ba7509382925365400941409da98260f26d3132f91196fb8cdc423906663eef36334556652eb504",
                            "voting-power-unnormalized": "0.011101584513492445",
                            "voting-power-%": "0.003552507044317582",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9203573349999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "778fedb1699a7741eae03dbdcbc376c983b1a23aa9da2548c1706442acc3431747a957cf7aee2ae0fa028bc0c83a1684",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1z3jh7jh6wy8aptw7qeyx9l2w4xer5wg6t9tgtu",
                            "bls-public-key": "bc43e8a52a584d12ae9a1571effc42d269b633d38a0ce2eb5b73032db9919ba02a07a2124b55bc63ebe87271bd67e184",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "16352137000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1hzck9h2lrhqnc5zcaf08ka4cx02z4yaucfy6hk",
                            "bls-public-key": "d24b31a4fd2791ebb3e83c8afc84b5011fb95c66a6aa241a3826048ed0e2fd6356c461ce3b50df3354afbdd3b26f0d90",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "14999999415000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one10rr5n6qvjxlyhrhnkzxtjslzffrp4trl3wtsuh",
                            "bls-public-key": "2b1f282e9684d3a4d3bb77970deacf989e538524f704d92f7eed6fddd743abae23f0a4ef461baca47f33514f1963838c",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "14351610943107000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1gxezhtvlt7yt2rj6jqegtlkvqgzs5jyfzx7qlh",
                            "bls-public-key": "68c6e7ef3d891a155c9ca41d041addd012eee40571bbde3e2f719b06e2abefd4115195ac6100b39b57263e9a7b507588",
                            "voting-power-unnormalized": "0.012805363495105359",
                            "voting-power-%": "0.004097716318433715",
                            "effective-stake": "11561699999999000000000000.000000000000000000",
                            "raw-stake": "11561699999999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one135yfjuu5xhm7p3trj39tmg6v8pu067hgul38dy",
                            "bls-public-key": "b16e9a5492989618ef7c5723b4360b554ef44a0dd7c4624ab660d23431b2ae00b5d00e32c26bc75b50bacc68b7d50908",
                            "voting-power-unnormalized": "0.011750601463592911",
                            "voting-power-%": "0.003760192468349732",
                            "effective-stake": "10609377000000000000000000.000000000000000000",
                            "raw-stake": "10609377000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1wzjrn34aarr54vpln9n7ry2vqy9zjedmp7tqq7",
                            "bls-public-key": "1b5727ef751f06e790bd2e5581cf9161d87dedc687cbf4f74998607dd372e07b891f0b9de13cb3e63c892d72edf8c288",
                            "voting-power-unnormalized": "0.011101584513492445",
                            "voting-power-%": "0.003552507044317582",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9271867000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1q98lxvxcxl228y4dt6xqjrzkha206usucfx02r",
                            "bls-public-key": "58f36f139ce7d0d06b304fc75ab3fbb24fa57c40b0d8db47adb77aa5d23ffded9330afaf22a3564f6a0abd17e1bf9d88",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "15644441930663500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1996e8rujj8xq7v23ztldwm2cpfwz7kqxzq7shq",
                            "bls-public-key": "6f59fc2dafbe524349122e1ce72b9abe4adf0690cf04cda59358b467965cbd22c9728e381e3c68d5e3d073b5ed2cfb00",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "14035462378809000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1a8v9d2mcuzkv73zuc2c5ssht9sh5wjejx32mpg",
                            "bls-public-key": "1b5e942f91a4c74f72223488820e5101c18d305a7a1bc1c50dea3557b68c05c983e8946bfc24cf198f2fc437053a9b14",
                            "voting-power-unnormalized": "0.013867947552319936",
                            "voting-power-%": "0.004437743216742380",
                            "effective-stake": "12521085346537000000000000.000000000000000000",
                            "raw-stake": "12521085346537000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1mehlyz3vvd8jx3l7lt66wm7m8cn6xmre96utvw",
                            "bls-public-key": "cbc21b59a384f1a16e74ec97e7b63cd03451dd96f665fc0e92deadbefee1cfe579303dbb37bda6edc1bf9d6be8f9dd00",
                            "voting-power-unnormalized": "0.011371469026075085",
                            "voting-power-%": "0.003638870088344027",
                            "effective-stake": "10267066099999000000000000.000000000000000000",
                            "raw-stake": "10267066099999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one13pe96vgege60pjhzuaw3fkw9veq032a4yupjvs",
                            "bls-public-key": "d6915141cc262b09f2cea56ffec2d32cae724f7062e580d576dec9256d865a19bbb0bac13f5f9a63309ea9a38fad5708",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "17559494094743000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1hwn68w7m5g8daltvrjkmq23qn58nrvr3yz6ryt",
                            "bls-public-key": "48ad00d97fb657f3476b5a8466798f33a23b16615091ebcd3587c14c9aad9e2e28c28fd12a7e9c887e621eb2f7860d00",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "16233173207520000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1gx48chqc44kuacely55jm0glcwkqvsy7k2jj3s",
                            "bls-public-key": "9e4263a599be82dc0c61e6c117af02b1f4b46e5fe6f654a8b325586d11cca7a44fdd3f1c2c4004c02e04bd7f46183d04",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "34337820569606000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "356b0732524bdd3a2ac6f2a09aa29da9a71b73167f42c64e5ba2b3322d82f79ade31b56efe61782f25c354c1dec28f88",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1t8n4gyt6ta64k3js3vy8vffw53njahq2yzjlxw",
                            "bls-public-key": "583f72670f72e4546fa9000ab73b1b48e51780b93fed48cbf8507500d3b0a5e7e626331f6c41730b5483b14941dde000",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "18321466032276500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ekup98s5tqxtr5hdzsz664cfy579jpq6w5smrr",
                            "bls-public-key": "718b9ead7b9aaa9cb70570450c6256937c86f08978c8a48b536c2a849f61ff52f1b78b39014064cefc5f223efd45a080",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "14359214388330000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1fzalye006mpjkss2thhd2rtplemvu6wkjxxzmx",
                            "bls-public-key": "e52d7ee43f9a9a44d5329adfe7bfd70547f6894d52de3114de73f213205b72f5809cf97975a0f18006573e209ca37f94",
                            "voting-power-unnormalized": "0.012365552772366445",
                            "voting-power-%": "0.003956976887157262",
                            "effective-stake": "11164603921076000000000000.000000000000000000",
                            "raw-stake": "11164603921076000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1rg25sq00gqzu38vhm4z4j7ty5j9mpq72et9zv5",
                            "bls-public-key": "4fceb39b832522462839dd3bd805e8784705a77d73ad4191f2d6bd7f44803796d7060007008078b0ab3fd6f806a0d014",
                            "voting-power-unnormalized": "0.011573993755569428",
                            "voting-power-%": "0.003703678001782217",
                            "effective-stake": "10449921523501000000000000.000000000000000000",
                            "raw-stake": "10449921523501000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1dpm37ppsgvepjfyvsamas25md280ctgmcfjlfx",
                            "bls-public-key": "8a211eb5e9334341fd2498fb5d6b922b4a0984d6a4ea0b5631c1904de5fe21fd6889c9c032d862546ca50a5c41294b0c",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one14e5ffwdejnt7njgq54d9w8gltwrggdusyw7y5p",
                            "bls-public-key": "d69c70aa8e43853487760533ad1cbeb9f8e91d409ede23f5db9e0038528bd9914ecd8710afe187bb303cc345a52f0b93",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1a8mnuqpq5ge9z492zzqqrgjhlccgrl04aumd89",
                            "bls-public-key": "f2fff44529c72145644db258b61385258011b7a56540241f41bd2fe1fc4f5764fc0285662412b2e9e7e8dec29f613b0c",
                            "voting-power-unnormalized": "0.011101584513492445",
                            "voting-power-%": "0.003552507044317582",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9605057000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1zjlwqjty6kzefgt8lqgmsx4zzsafzdqxlejsvg",
                            "bls-public-key": "7a889a816230d7cd4db499ab1eed84e2ae5c115f5cd8a89e48831f29bade2b805f255b836ddb7bdaf02c6299b5ff3188",
                            "voting-power-unnormalized": "0.012943527006458349",
                            "voting-power-%": "0.004141928642066672",
                            "effective-stake": "11686445000000000000000000.000000000000000000",
                            "raw-stake": "11686445000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1a8avzz3hcvhfrh2tp7rdprpvwt838y9um9c2q7",
                            "bls-public-key": "d0356c9cf2a8a737167219729f35d7e8486ad104e839b62ca051e72e45ea49cf54041cfdf21ac7244d4de0890c76f40c",
                            "voting-power-unnormalized": "0.011495543480403960",
                            "voting-power-%": "0.003678573913729267",
                            "effective-stake": "10379090379447400000000000.000000000000000000",
                            "raw-stake": "10379090379447400000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1mrm8xffrt9ruq40czu8k78tka03p5mteqzx29g",
                            "bls-public-key": "06e268d186891b0a7e7c116267d0ab02d13055da47ed697c8f42a382588497629638c75a169c34a4df647cf915582e00",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "15365619079644800000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one10ehr5wca4gpt298ppklwuypnzqg6r44hl7ffgs",
                            "bls-public-key": "7b2b06915b1416abe6edd51d9bde4699b83c35749e569cf530902aa10a349b7f9c918bc5572b650e283e80445ecf8704",
                            "voting-power-unnormalized": "0.011919852221927058",
                            "voting-power-%": "0.003814352711016659",
                            "effective-stake": "10762190037551000000000000.000000000000000000",
                            "raw-stake": "10762190037551000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1hwe68yprkhp5sqq5u7sm9uqu8jxz87fd7ffex7",
                            "bls-public-key": "15dad6a28f96880c1462e9afa7745a9e65fdc971c981813847a0e4d00849b476c18c1ae9b1d75126b158eeeb21f08910",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "283699908324705500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one190rdr2khdhn9jecmjex4m54gafn0y2ktyy9cxr",
                            "bls-public-key": "527a78e9a3b6f5a389cb9965121268603e735145b2e03c8ed5ef561dc423fac1684666e60fef903ba9a12bd8231bb698",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "22964391942388000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1rr93xyelu3r86spc2wv6pe79xuvj6z8hdjlktg",
                            "bls-public-key": "b54a2260f9b8c8903d39af9957685752a5bd4e48329f1a4b476dd871e99aa7e9c05682e44a3f739dbb1713bc824d3799",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1sus3s4pe9cjv42r2ddfpwly4kr5g67nyquzh9u",
                            "bls-public-key": "3fcf948144eee7fc7534a76eeb3b98d85ec4a306d621a382a93971d170c4e81c11dba276e4a84367a466344a1ce7a20c",
                            "voting-power-unnormalized": "0.012934804791169081",
                            "voting-power-%": "0.004139137533174106",
                            "effective-stake": "11678569890750000000000000.000000000000000000",
                            "raw-stake": "11678569890750000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1lsvf8fms0emzvw45eazx855cdjh6x467fa4ad8",
                            "bls-public-key": "2d848e108d36985cc4b355fefb700eebf59ff56b57c69e5e93bf4efbce21dd6769674a12f1ce7ba5cfccbaae13ea218c",
                            "voting-power-unnormalized": "0.012684489771360506",
                            "voting-power-%": "0.004059036726835362",
                            "effective-stake": "11452565594532500000000000.000000000000000000",
                            "raw-stake": "11452565594532500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1j9gr0maryak7mmgkgw67gsgz3wxhmnv6cpvnqy",
                            "bls-public-key": "8a742d8c2419c862bea4de4cbae81b1223b2c369d688dc2bbcc04c2717bd71eeceae05b7ed84200abae634c01a494918",
                            "voting-power-unnormalized": "0.011212100045849148",
                            "voting-power-%": "0.003587872014671727",
                            "effective-stake": "10123175117179000000000000.000000000000000000",
                            "raw-stake": "10123175117179000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1uckk7fce9dfx0ma3hnz8q8n24dfdjjhdup8r7h",
                            "bls-public-key": "7fe6236649f37e199b8e3a033cb24ca27ad5a8fc7d168f87a82c7ba2731e0957a0b516c6b0370983be4f739dcaef1f90",
                            "voting-power-unnormalized": "0.011101584513492445",
                            "voting-power-%": "0.003552507044317582",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9919590000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1g9wwqlg32zkfp5pv2ekqeusksv9lj4ck47f4dt",
                            "bls-public-key": "aa8d1fce11dec63607b579ad94850cd7b893fb119b6b2ed3f32ef0d383a8574e5a9c2bfa661fab987f72fdcf7b77c184",
                            "voting-power-unnormalized": "0.011101584513492445",
                            "voting-power-%": "0.003552507044317572",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "3358997000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1drrv46y50uqym5nn7pxrj5sx4qzn6qesewqk3q",
                            "bls-public-key": "e6c33ada02e808fa7c2dd98734648cbb03c30d39e5c5deb5baae89c4b89e3b2356aff11cb94c35d7d955e14e131b4a18",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one10zw75ytwku6ek5hlxu8mnet49uwvd6zu5mukdf",
                            "bls-public-key": "80f6efd3d3f539434a994727b4e35410e0e3666d3d865e431d5d03e18a67c5a0f02142e8a8a24257e3bdf318a1d4ff14",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1vy5k5l58pa09hhz37vjw704zwdydak86wg6vdj",
                            "bls-public-key": "42c100b423e14387862fa419d81b430c9c6068d665e8a21737e293f49e41739795567176ab18070066a216eadb808808",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1gle0elf9ckg5j5v9qkn7xv2w2e7vhv38fe93fq",
                            "bls-public-key": "e3bfe63510fc86c638c1cea8fc553e1b9a35812f767c35f8c174d563b228f9d76955fa35c171741ae6e99e780235ac98",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "15083875297925000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1uehsyxsr36d8ntskrln0jwvmskk2x44kqycj9z",
                            "bls-public-key": "24e75a6611e25fe4d1abe5495ee80ac88351010756912993b5f327ff762b342c862df28eb083205afa0f4b672c56ce94",
                            "voting-power-unnormalized": "0.012611079537081773",
                            "voting-power-%": "0.004035545451866167",
                            "effective-stake": "11386285000000000000000000.000000000000000000",
                            "raw-stake": "11386285000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1x9a8cl3aryhp9c3nyr0hzxzrhmlasgv4g47tya",
                            "bls-public-key": "ed393a3426af7bc5d8c7325e3a8d8451ea95696f9d3e32429979af7f84114b2a29130c65a59c1976dadc4a2ca126e408",
                            "voting-power-unnormalized": "0.012234542019527749",
                            "voting-power-%": "0.003915053446248880",
                            "effective-stake": "11046317000000000000000000.000000000000000000",
                            "raw-stake": "11046317000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1znu9dyea02l968hncspjpp8xxrzsyu26xkrjuu",
                            "bls-public-key": "32454cd8cfe11e9137ea05a259fd44c65e4a76764504186815c69ed745a226939642a8a16ccb79f4d990c6aaa19f9e10",
                            "voting-power-unnormalized": "0.011101584513492445",
                            "voting-power-%": "0.003552507044317582",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9809324327000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1lu0dr894pf8enqzcza4ytm4wcx9eyzkx0f7ha7",
                            "bls-public-key": "0ebde7d86adf404a903f0856f169931cc0a3e4f78eafadaf575d839511abf15838e7af6baeada9ab2f13dc7d6291bd08",
                            "voting-power-unnormalized": "0.011255417989675525",
                            "voting-power-%": "0.003601733756696168",
                            "effective-stake": "10162286000000000000000000.000000000000000000",
                            "raw-stake": "10162286000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1qlcc76thenzwgzy8x780dehygjdq6sef3czmxn",
                            "bls-public-key": "ee855bbeca8885cc9c335196af420eb7224e22c8647ca8b418c2b67d25c86cbd4a7435bf3905614ca21fd28bae28e408",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1fcm35f8e9xc3f7c4tu3sm7ygkh338f2v2sxzyl",
                            "bls-public-key": "24044191bcc50e6f43dc21d052c88885aadc0c693675d9a418d00d1afd98286658812f17b612658fc433e8eb619b5c00",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1hzqu37h6mnfw3kk29w3r65xgjj2zz5evepuu8u",
                            "bls-public-key": "03406acec541e0e0d7cbcb7c0502b4901d09b4f563fe0db4cf3e3d18038373f71eb3f720d9d9c66244364bfd7ef09217",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1gstn0y39xlman2z5xmhszmgcltwdtyha8zvcet",
                            "bls-public-key": "2658879e6dd8dbaf5b3f4d4c6efbf077df88b7a2cfa9ff80e392c56b178dafa68a78d073183dd0921e07294865c2d399",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17es0cg3xsl49r0kfnhsvpju8kgsn6kc57ae7nz",
                            "bls-public-key": "bfff42cdcce61c05045d061553b3debe3b5c9d53874c19fb372506f90ff6decdda60a162481c896d7552b17511e28c84",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "24999748641221000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1fllr7w9m3vwxv5evwvnaflk2qy0uauyarvl7hh",
                            "bls-public-key": "cbfa86225cfa21641ce914bf3d4ef8e6e736830589530f79eed434f8bebb939c18a695cf7f007ad5d367c4491ad49a08",
                            "voting-power-unnormalized": "0.014695303916437973",
                            "voting-power-%": "0.004702497253260151",
                            "effective-stake": "13268088434632000000000000.000000000000000000",
                            "raw-stake": "13268088434632000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1kudknr8x9t9hp9znl5n0guy239mhn2a4wpektc",
                            "bls-public-key": "a24ef25fd8139314d898bea9ddf3ec5c38a198a35e79bd130f9e0f948144a94bc9312f559c6901fc7a0d8ee1a762d088",
                            "voting-power-unnormalized": "0.014613236003888984",
                            "voting-power-%": "0.004676235521244475",
                            "effective-stake": "13193991000000000000000000.000000000000000000",
                            "raw-stake": "13193991000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1gzf2cmv607r64nths76ur3z5rkdl9n2ucnaw66",
                            "bls-public-key": "1833721b78797a16b1987734d05b08b9444e24075fda50ff2acc7b8a6d8e0aef0829bcb11e3b9df7466cf8a39e4e4101",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1tpmtxkvv9ryn3ruy7evqkpslp83erutywhvwf9",
                            "bls-public-key": "eeab83dfea9753a4c00cec1d2a08722c544fb7cae7914fc09e84d6fef1e6a4c5fd8a1f1dcb9a028f509776423f074801",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1jm28f73rmg7lnca7duuyuqrhkp4ahfzdvzzdsf",
                            "bls-public-key": "becd65dfdcb41486187b5e9c4e1b0758ff30c302b0bfb29b57e92278c4c55a869c3d9d176b9b4339787b1e961e306c14",
                            "voting-power-unnormalized": "0.011125153813897294",
                            "voting-power-%": "0.003560049220447134",
                            "effective-stake": "10044673148036000000000000.000000000000000000",
                            "raw-stake": "10044673148036000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1gd0d2vdtuygksd0n9nxxrn0xthxl584ls6q0ra",
                            "bls-public-key": "c80ded184edb79de84f0e9f236c8abec76ce49494baf727fa888ef24768a206066a73ee8edf5b79145205e2076ff1f08",
                            "voting-power-unnormalized": "0.011101584513492445",
                            "voting-power-%": "0.003552507044317582",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "4199999000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ss2xx6agknad0k3m0v5m7sr4xz97vzsk0rk4a6",
                            "bls-public-key": "c2fa456fc54960829ab205014e8eb2c359b4f8b0ce3759756031bf2a57ee4b5d69c8ef94716ae8a33cb47ada9be5c884",
                            "voting-power-unnormalized": "0.013049224390845160",
                            "voting-power-%": "0.004175751805070451",
                            "effective-stake": "11781877000000000000000000.000000000000000000",
                            "raw-stake": "11781877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one12zlfzd2tyfngcghslrmv57xmn7ec4cqct32sks",
                            "bls-public-key": "8c95e04a4826d4d80ef16183f13aa5d14eb3c96d2755407e15c440bb4edd6e4636a82e47975385c6223ba24759561103",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1ynftpycaceu06hz9c7v0hydu7qezx0vs8tvgmp",
                            "bls-public-key": "0a21f76b002c3d2ebdf9e9a761c8a26774f306d2e0eed329cd9c814efe0cda9cbd10d9b5cf04f30bbf0030d359c5a705",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1n7f0h0jaq0lz80daqppd8yl5nq026jfjw23zlg",
                            "bls-public-key": "02c3c1f6968adff78e07aa70cee4f3e9790e8d2213fe9f56c7ff41bd476fa67d4eb6274215bf7486b7d53aef96725400",
                            "voting-power-unnormalized": "0.014314102282907096",
                            "voting-power-%": "0.004580512730530271",
                            "effective-stake": "12923909300000000000000000.000000000000000000",
                            "raw-stake": "12923909300000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ykwud6atcdvpurn5lyrhfmu3kpf4quvzgtqsmu",
                            "bls-public-key": "0c0ae256b9ee46eddb1993308a42fbada95619282420cb36cb496718c8e24af6df3b25ad4a22e97ad3dd04631709b014",
                            "voting-power-unnormalized": "0.012891842106350429",
                            "voting-power-%": "0.004125389474032137",
                            "effective-stake": "11639779763999000000000000.000000000000000000",
                            "raw-stake": "11639779763999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one14e55qn02ux59x3musrvwrpfgv67u6cvq6sf69a",
                            "bls-public-key": "23b45d2c58eefa44ff0563c815eec8a9efbd9064cf08c8392356b31f058ce4265edc23dbd0722f6c12a36086552c6688",
                            "voting-power-unnormalized": "0.012488795221387047",
                            "voting-power-%": "0.003996414470843855",
                            "effective-stake": "11275877000000000000000000.000000000000000000",
                            "raw-stake": "11275877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one10lld3hn55sg7s7ra0kqrpgj44km5uaytlq7ny4",
                            "bls-public-key": "ed73e02999b85033833f88341ebddb5cf70309d7aeed8e70084e88c93e03be9c838e7a2fa617ae806017b580f5566594",
                            "voting-power-unnormalized": "0.013650933488147225",
                            "voting-power-%": "0.004368298716207112",
                            "effective-stake": "12325147800000000000000000.000000000000000000",
                            "raw-stake": "12325147800000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1tcdagh2wwlcnw5c2dwenz9k0t9ckssyrwy6c37",
                            "bls-public-key": "74772987f4d907c7222687305f3d2f318abddc8d51f910bf5726c4e0dfe9e2e66cf985c416d8a03f98a3155c1f2cb310",
                            "voting-power-unnormalized": "0.011101584513492445",
                            "voting-power-%": "0.003552507044317582",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9754613000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1v0fguw8l5l0gk7fvjq2h9pqgxcekrvy273pfsy",
                            "bls-public-key": "0c3fd89575cd27f81d910ae0e25fa28bd0973fc16e5669c5460eb6717ce3fd00ab55c05ef7b2dfc3f1b74a1674f08788",
                            "voting-power-unnormalized": "0.011101584513492445",
                            "voting-power-%": "0.003552507044317582",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "7274041718057000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1h8gvhr650aydxdlzdlwz64gu4knps3fxmchxa6",
                            "bls-public-key": "5b3ef6640ca195940bb9d3bc2a2d39401f2eba94185c6900e420a3cd6add8d6fd1a4d117d1e3640343e61bca12504218",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "62937063063c3c8390c86fd406b3155158fe8ecf1e82b0116e1e27cd8fb021c61c39469658d212cb89168ada8ab89a08",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1yc06ghr2p8xnl2380kpfayweguuhxdtupkhqzw",
                            "bls-public-key": "e7f54994bc5c02edeeb178ce2d34db276a893bab5c59ac3d7eb9f077c893f9e31171de6236ba0e21be415d8631e45b91",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1ux7ll2z008k7z8we84qvvsxkkedvuvuzprm9z7",
                            "bls-public-key": "ce387d71bce300b4c5dd352b8ba03558a36a97b83728e5b64e70b9b0d0555bc22d7a76d4f382165ba15e4ce03d855492",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ygchq3eve4u2majguwh8e55k3ys8l4t5nex224",
                            "bls-public-key": "1599542a6a047d65c8900075e6a92aa03492e0373019e15a729cde20253983dff723fae4be6e0a55e922d923897bc680",
                            "voting-power-unnormalized": "0.011935958095730478",
                            "voting-power-%": "0.003819506590633753",
                            "effective-stake": "10776731700599000000000000.000000000000000000",
                            "raw-stake": "10776731700599000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1taefmq49nv5k0rkr2kj4xv8n3a75m4vm6pvzg2",
                            "bls-public-key": "f248bd21d67f0b2cd0dd2c06446c557fc35737873857c000698ae391b607ca8ed8df00a79d9dcace1b0ce05492fc9789",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one17hlq693v48gy9snnhvd7cuvl8g9nkakgaf3pya",
                            "bls-public-key": "ba27796a04c1e4d2cb2d946ac520c2b41589517cb9ae22e64718086c1b13bec1c3d1d78c274d4ffafd78e1b66705e496",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one13nnamdlwxyqhdlscq9qfe5npedhamv7wj388d2",
                            "bls-public-key": "e27e4452d716fac92c46c4e0636ab05e1389a79c17555e2ba4e896ee9696be5e213b3b1ae9e2980eafd4425af3730d8f",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ux8hw7ue7gs8k0vgspgsnx5neqxp34heawragg",
                            "bls-public-key": "28d6bdcbc569b7d4275aed117ed83334ef5c11c0e27ec849628b5e55c80e34df8e6b88f41727ad4e03ca7e0e8342168c",
                            "voting-power-unnormalized": "0.013272671275896666",
                            "voting-power-%": "0.004247254808286933",
                            "effective-stake": "11983622608540300000000000.000000000000000000",
                            "raw-stake": "11983622608540300000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one155rynlqtatfupkpv9qftvnh8m0mcy6a8yrwwwk",
                            "bls-public-key": "581d2a6ea0872d64ea5664d49e2057aca47bd987e69315606eb87c69163c3a0e2b0e99899c641e8959606ea7e2fbf108",
                            "voting-power-unnormalized": "0.011817234216685678",
                            "voting-power-%": "0.003781514949339417",
                            "effective-stake": "10669538345808500000000000.000000000000000000",
                            "raw-stake": "10669538345808500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1n7puxkjd7mr6gr09ascyrd5z30mj23exwr3ypa",
                            "bls-public-key": "d13e1d260791bda54201d77ff44bab65e628e82a8d96e3804bb2852dc1459ecb59cd788c04a3f1fd3e2c6a5fc3242b84",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ae46extxed94jxfqthtl6j2tt5mn684zdh7gu2",
                            "bls-public-key": "faea76b6eccf17a61ba36a6a20b4dc9542eea9e5a8f83b48732247abb871f0f95ef4d23a8c13577050ef38a7817d4518",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "15186010900000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one16ykp3hk3648dcu8rggrvwppfnkwytvs9ke583g",
                            "bls-public-key": "72e41c1af140e33d13e145e658c67657cc273a823fc96ba5a0d054c6b6187af759b59151412fcdec84b559aaea0df994",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1n9at5vm0wwkh2zj6ldtgp5aqe0tsnx7ymnglp6",
                            "bls-public-key": "476efad0d6d8a5c90a71b08903be7574ca6689d4c8c1e489db1ce24a204f5c7b236e969a5029a9c2368bfa1c5db25484",
                            "voting-power-unnormalized": "0.011955305416925315",
                            "voting-power-%": "0.003825697733416101",
                            "effective-stake": "10794199999999000000000000.000000000000000000",
                            "raw-stake": "10794199999999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1xnzpe9aqgm7aqd9f4sgzm5ycqgmw7uga43f2gd",
                            "bls-public-key": "f97888cfd9c3be5b469bb7c2a8cd5f94f547e343610e89db418083c7ec2e9a22ad2598884a0737e62faf1f2539a15504",
                            "voting-power-unnormalized": "0.011800023341852911",
                            "voting-power-%": "0.003776007469392932",
                            "effective-stake": "10653999000000000000000000.000000000000000000",
                            "raw-stake": "10653999000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1yd8hywc5rhas63l2mn9a49hg8znfnha2zntunc",
                            "bls-public-key": "a2b1b534c94bf19a92551f1d32d62b802be6996458f65b0baeb081c9972b34d72310e675fc7797b9c860d8cc223cee8f",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one147r29htvd2fy3l82arvsuqc8szqy6py35aedex",
                            "bls-public-key": "ead2f549dd09e8486b2b4095a67dddf4473b06fa003ccc6404afae5f5d56b632ccf2f8aae134c8156691e4953ea57c00",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one14rujvdv383r90s2qer05jf5zwk5n4slr5h5syr",
                            "bls-public-key": "cc29030fd7888a9f2aa1176ae972787a87295aae79149e83e2113e4d71f49d473fa3bd89e8db968b8a42141d4673e918",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1njyvqvw3jq2klrl77udzuj4xlh8tslgj434urs",
                            "bls-public-key": "63efb4491b04f94d63944e0541c8d0c2afb3edd22c7f32c5c90698cfc4b2fc974145ee68cae14d12ec9c5373fc423d8c",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "15514334647999396829228846.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one169lk4c9qt57luh7zws5ap5swhz68kp0n9xvk6r",
                            "bls-public-key": "f3a65597fefc025493b00dbff904182b4e1da1c88f2743eb0690bc9db7bbabc3cf283cf7e98f4695e967d5418fd1ce94",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1536umpe5vvqdl3gp2lugukvk78rrn3jmmld9x7",
                            "bls-public-key": "c8a405b15961bb09a1829cd6d71a1feb983b24175e24e5a7b32587cfdbc7ad7c77ff78f953a9ad8523234c44d6077588",
                            "voting-power-unnormalized": "0.013085774242338833",
                            "voting-power-%": "0.004187447757548427",
                            "effective-stake": "11814877111100000000000000.000000000000000000",
                            "raw-stake": "11814877111100000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1dzjvumwsmflf89m5r0w579lhn6p40xc487ry04",
                            "bls-public-key": "81891c77159f2880152e3ce5b978398782697eb16b0c656e35e3660f0185fe84fff28cf687e684f2f87873167a58f618",
                            "voting-power-unnormalized": "0.011945328448629034",
                            "voting-power-%": "0.003822505103561291",
                            "effective-stake": "10785192000000000000000000.000000000000000000",
                            "raw-stake": "10785192000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1re7ccpvjq09jagrfxmulzwkw9jy6y6g62u3xrm",
                            "bls-public-key": "d8135f6e42a8009fa68d2410e37c357b39704228e698a014554a7fc0a95bc87a7da6877b18b96f9f34a5be0bd35f3a18",
                            "voting-power-unnormalized": "0.014321702411288166",
                            "voting-power-%": "0.004582944771612213",
                            "effective-stake": "12930771300000000000000000.000000000000000000",
                            "raw-stake": "12930771300000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1fxpzt6wrhtgavt2wuyxv0vys2n73888ef8llg8",
                            "bls-public-key": "5816b0c90cb81bed2a1a465f76df18420583e211c5aae899756bc2a1e7716983babdb0e8e41f6c9b474cdf40c1db4090",
                            "voting-power-unnormalized": "0.013512149954495222",
                            "voting-power-%": "0.004323887985438471",
                            "effective-stake": "12199842994584866772700000.000000000000000000",
                            "raw-stake": "12199842994584866772700000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "dfca9b0bb41a358023b75136f51882e2b5396806f4287a0200f772c2b7b8a5981730fbc7558b086da8217969518d3498",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1d4lgd6skvqh24hxac0h7s4jpf7newr73wv4plq",
                            "bls-public-key": "922b2874d6fe9308634095ebdb74847f7851503987b7b352454c975a0ac8861adad693ae8f9ba5fe1e0060c6e06fd604",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "14715774307544000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ps7d865t4k6gf457p9rst6alkkczdr9z9fapkk",
                            "bls-public-key": "d31e38437cac604b54bb6b5380f9767679f569801b3747674409fab22f00874aed5f437d1476764efa06876ef6cd198c",
                            "voting-power-unnormalized": "0.013374831117750695",
                            "voting-power-%": "0.004279945957680222",
                            "effective-stake": "12075860633959500000000000.000000000000000000",
                            "raw-stake": "12075860633959500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1hgukx4hwsqu5h5j6yr963u83hrgwzdnrull69q",
                            "bls-public-key": "a8a8e45413f6134373652c3901265da161804551434f89e427a0f51f8a47bcc6b8537d8ede28178796e4a1abc5a1da19",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one135f4zp70a6dsv759rx72f7t49ev8hmqn67e4ta",
                            "bls-public-key": "d16ccb8b0b805d31066da270396cb8ed20db45a5c7741c709285d4064ee00040234506d03ed61c6d434321d8d07a7a8c",
                            "voting-power-unnormalized": "0.015019790812372131",
                            "voting-power-%": "0.004806333059959082",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "14625962208172000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1sn4c3zjj9s83ezfplc72sgvelalwp45yxltzv8",
                            "bls-public-key": "866da1ce28c6370f53b40c243d630044a1c24a5d8e9101525205e807710a7f242465ef020cb416f4f46bb1e9aab57b18",
                            "voting-power-unnormalized": "0.013049224390845160",
                            "voting-power-%": "0.004175751805070451",
                            "effective-stake": "11781877000000000000000000.000000000000000000",
                            "raw-stake": "11781877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1jn5ak4qhh57feptrkqf4yzwtsc9azwx24r7p0w",
                            "bls-public-key": "547a324c91b2a3ae8535071ad2da9c7bf3c3574214b0b9ee390664a3c5ee37884d87e895aa175b590b449349daf65c8c",
                            "voting-power-unnormalized": "0.012385214775462315",
                            "voting-power-%": "0.003963268728147941",
                            "effective-stake": "11182356340308800000000000.000000000000000000",
                            "raw-stake": "11182356340308800000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1j7x8ha4frwlgfnp9et8cncy4ptjy2sygpyv23z",
                            "bls-public-key": "bf22387e4ce19adfdd8df61754022c14f4a31d690404ec2eef81740da2787628fce0d28165db021e00cee34058156002",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1xwp3sf6vetnl4hdlzp2wa7f4kn2lqrpdxzppzg",
                            "bls-public-key": "64c7572f1c7889d4d3954139835dca43998bd603d4ae7232f55dff82d166f42a65832423c03b85488905b14cdc68c994",
                            "voting-power-unnormalized": "0.014286968531734174",
                            "voting-power-%": "0.004571829930154936",
                            "effective-stake": "12899410792710000000000000.000000000000000000",
                            "raw-stake": "12899410792710000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1r55rwumsrm6w3d20uhaa3hm4rxr442k0qx9gj8",
                            "bls-public-key": "f64d27b412859b15cbe055d86e313b52f7a851b01782ff213855ef89c1ee57b1a5d25f8159c013006f104a8206b04900",
                            "voting-power-unnormalized": "0.012975865660088507",
                            "voting-power-%": "0.004152277011228322",
                            "effective-stake": "11715642906941000000000000.000000000000000000",
                            "raw-stake": "11715642906941000000000000.000000000000000000"
                        }
                    ],
                    "hmy-voting-power": "0.680000000000000010",
                    "staked-voting-power": "0.319999999999999990",
                    "total-raw-staked": "902879485179649216772700000.000000000000000000"
                },
                "shard-1": {
                    "policy": "SuperMajorityStake",
                    "count": 116,
                    "external-validator-slot-count": 86,
                    "committee-members": [
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1tmxc9n45jnwrm2rlyjpy7g7gwuxayf06t934ef",
                            "bls-public-key": "97cdc70b67de97170e13ecb83b4b892107766f4b66d17cc292008253ecc755d1b4cfbd71f8daae8eaff1bb235c77b203",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1x40tck8cu3l8k4erztfgerx99taywpn7xcfvgv",
                            "bls-public-key": "e73156109914a4e05be1ada2912b0788957b37270e0dd9bfe214f93c85c826ecbc37bc9bc78f879361f432c0a62c7095",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "15309247994682000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1cf3fckv4u3kvjvqczyydl9jpy6pfa0fs8cauac",
                            "bls-public-key": "87237e610109682036dda3e7edb27982d342ccf4e5a3d81ae5fbe7cf433ad3261eaee15b30fd3c24859522f5950cfe01",
                            "voting-power-unnormalized": "0.010600635437091709",
                            "voting-power-%": "0.003392203339869347",
                            "effective-stake": "10510100000000000000000000.000000000000000000",
                            "raw-stake": "10510100000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one148ghmpck56hkmprx7p0yuf0cgrpkl7lj47tyea",
                            "bls-public-key": "7e40362268e44a5cc1de9cd9e6341b9a558cfc3bc34a152b5450b40c1aff67543b1462ede1d0b2066838acdfcae6d001",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9536546714320000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1p2jts72rfcn0a0jqk29ymecdz2krjzgsr5vqvd",
                            "bls-public-key": "ed6e3417442ec8f82146a5cdc730763184e5b132c6b1f936cfa1387394b7cb66a19aba68835a00c4a7ca415e20ad8c8d",
                            "voting-power-unnormalized": "0.011894472445134609",
                            "voting-power-%": "0.003806231182443075",
                            "effective-stake": "11792886906401000000000000.000000000000000000",
                            "raw-stake": "11792886906401000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ka8trua6hsqmszqzthr30cj0rxz33lklq307zl",
                            "bls-public-key": "f69cb2dbba98a4fbbded60ad8a8e599762afaf4c9031cd0a5b2e1aa339abb8dd91d17a938cc96b4d9ca62eee39976995",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9689422000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1yyayy87jcrdr8669cg7lsqtn4j94zu5fca25yp",
                            "bls-public-key": "2cad967813e89ea39e89fa849f50cd7bd57eb6e019ec32c9e977d6fc73f24bea4e16b5cfbce2cbad3efe5b9acfa35581",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9271877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17tj2jjehdlg8xfgp48xpeyqur2qf6nvs88jvyu",
                            "bls-public-key": "89778b500d0fd1710a34d161673b57a149d462340446743f6f5f4631eb856667525368ded0841b8f5034b4ff4f839e01",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9271867000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1q6vjpxdx2wvaysahjxm0qkt03uq8xyjgkdskfe",
                            "bls-public-key": "6ed606f323da02b0e18d64a87a1b42641d847c15e9e11596e77d87d34f26679785fb4e76d270dc9d14bb539f02157501",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "2864f5f1cd848f2c7302faf6bdfc7456984365226c3d53c7cd63cd1dd316fee75a7ae48560ba5658ab47497b952eea99",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1237cvlujddq9f68s94344rptsuwx0h7ek5lcnc",
                            "bls-public-key": "c7c333c66d3c88440b8595306d5cdd733294f3d35b6da5f37e94f0241c620f0af4766a4a4dcc44704a18f2aff7be2785",
                            "voting-power-unnormalized": "0.011213493653736606",
                            "voting-power-%": "0.003588317969195714",
                            "effective-stake": "11117724059990000000000000.000000000000000000",
                            "raw-stake": "11117724059990000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1t79hk65dkn3ef4n6xhg5xdjhq58nk7ld4h2x2v",
                            "bls-public-key": "56e3bb8b8edbf2633cc7b2b61306c8ea3b1cad6eb36a52ba98c2d3e5c29a743233ffeb428b418f46af3bef0c66903f01",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9510653499000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one18wdjw3yxhr7958f54s223mc7m303fd6vexlves",
                            "bls-public-key": "61a79903bd1660e847a9cb3ae42229471d8bfbda5e937b17f0ec01105dd04447848b23f81948d23215a0d4c3a6d43a95",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1shfeyla0stmwrhf37yqck9wt3p49c3l7vcsqr0",
                            "bls-public-key": "174c95f97ff6b98e4f840bd84d05f735cc195d5d1caffc79a1335c9deaf85bee3b01184b0f741c32f22daa004c140401",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one19lj3xq29rvhwepwg0zk4j3nl46wp9df9wpmpk7",
                            "bls-public-key": "eac7fa740a4ff3d51ecd9e268404312c80bb0f7b72172d89c73c50be2e00b0d711405fefe34622b2f78d72865c35dc05",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "26921511573999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one12eq6zag7tjsgm6s68ms9es4xd97eyjgkmf7et0",
                            "bls-public-key": "4a349cca1e4f67db7a9a188642286c17439d30b76f60d389adc74bec7ffdef49744fccc99d1861a7c6a0294f392c5b09",
                            "voting-power-unnormalized": "0.011893141168879570",
                            "voting-power-%": "0.003805805174041462",
                            "effective-stake": "11791567000000000000000000.000000000000000000",
                            "raw-stake": "11791567000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one158lxgxleyvm70a0tjlcc39um3yuf0jejlr3qlg",
                            "bls-public-key": "fb5c286f0ad78e1c029b874d96ee251c6761facf4279e95fe566af08221a1d05e1da580b9babe4f8a2f38ff0c5543c8f",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1la07f5wduc3379ffzlpqrl4rcvlchyvtwf3uyj",
                            "bls-public-key": "26f5128639f480843e52a8328bb37d9c0b74e4dab75e8945dbcb4977c5995b3cc29807181a5a64d2c433ac4ed81e7d81",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "20719631054079000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1yr22qm5su0s3tpl0dzytj07ru6ywrxrpg4caz7",
                            "bls-public-key": "a2ef59759bc200f4d9b471ddd201e9e0c7f5fbe696180b98ca2294c800afc550c877ea7c9c70191fb7192fd897161b95",
                            "voting-power-unnormalized": "0.012839395719257077",
                            "voting-power-%": "0.004108606630162265",
                            "effective-stake": "12729740000000000000000000.000000000000000000",
                            "raw-stake": "12729740000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1zcntyvm3a8xl5umwwdhcn5k5wnqklaetp0gyug",
                            "bls-public-key": "c9993defc6410169380b3708060308faef5a5e11e575b50dc2a0ca7b39e7fea916cce5c6536368f1aa22355970c13495",
                            "voting-power-unnormalized": "0.012302100767116697",
                            "voting-power-%": "0.003936672245477343",
                            "effective-stake": "12197033851392000000000000.000000000000000000",
                            "raw-stake": "12197033851392000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1hv558esjr6jc57ahlvu7ape0p975hyq3t26sms",
                            "bls-public-key": "687610ae21d8a707eb77c4fcc089cae8f8dcde89a925744ded3ab89460aace710a6396f87a012eee3d3153e240f69785",
                            "voting-power-unnormalized": "0.010276847101117599",
                            "voting-power-%": "0.003288591072357632",
                            "effective-stake": "10189077000000000000000000.000000000000000000",
                            "raw-stake": "10189077000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1j987tf0cvwhr3vy2sly655alw9tn6z44s770ww",
                            "bls-public-key": "1d0a25f0bd77dde3cf1771f47eb6fe7d2fd0adc49db119c2f237b5241428c90482fff18c698d98f07e69163dc6f13f15",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1vjeljc4p3kr9va9ckfjsjfxsz6aenl7a0hnz2d",
                            "bls-public-key": "fff0e3c33a7ace777780577f0241c9943938f73ef73c6d38249454e0703b4977aa0ff2e2d1e0e4fddfa121a24f0d7b99",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "99999999650055000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1fsyyst59aez33e5566xpfu44reh8g856qfqup7",
                            "bls-public-key": "0a775e4b828b40f6415859f9fbc2a569ee3e5a62e485dba5781d5df3731c90c8fe865a365ae531575f91f5cbc7350e05",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "14961000000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1awswe9xrx5rcjxvtdd6lwta9py2t09g6cet05h",
                            "bls-public-key": "2dd420cd3ca4279ebd5be60c153c6e0cc82cc3d0784ac2eef64fc64e0eec7fb22da3617018f8c91e9ab2aa7cb1ac1091",
                            "voting-power-unnormalized": "0.011499536320302536",
                            "voting-power-%": "0.003679851622496812",
                            "effective-stake": "11401323760000000000000000.000000000000000000",
                            "raw-stake": "11401323760000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1hyqgueh0fv7mwwtt82f74wq9guzmw8ytf74qhn",
                            "bls-public-key": "4c0d79ddeea979f76b086eb314781807c4c0ce4665b84a9084a7816e9019447981700c0c1a8e83d34e82bbf1502fc101",
                            "voting-power-unnormalized": "0.013533010048904964",
                            "voting-power-%": "0.004330563215649588",
                            "effective-stake": "13417430470000000000000000.000000000000000000",
                            "raw-stake": "13417430470000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one19cuygr776f7j9ep97hjm0np9ay6nus9w5msy0n",
                            "bls-public-key": "be205ec86841a3b96249f80e364c416a63b938617ade36b6798b377188d99bf27b5e85189116f4a4ba1b7a0c060cb115",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9507403000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1v23gu2vl237uzqgcnwnnm8nqv4ckr6zehfkm0f",
                            "bls-public-key": "65927ba35be03f040053369745fe7867bac95424b8a6ddd0819fe30a309ece9afd148e7883020f26b10bf93b8cbb210d",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9295497000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1h2d5l42krpdah38znp8gh25p5x7vcx68vxtuqr",
                            "bls-public-key": "bb69ad83d02a67be8a7b655637932075d1e88d2afcaf3faa01d0c0c0f283d4e138d3bc1a4b534bab0ddca1d302b46c81",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505921",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "4630620497286000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one120lxth0nlgk3nhusnhcaht83p8346m5uku235n",
                            "bls-public-key": "3a6c844cd65fa07dbbd6b256a6c04be4f9031aa0043b37e5897a5bbfa35ad32dac3e308e04b17962dff07685e2c2180c",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "2992b4fa2d94d3ba42a43c6cafc0436c6bc33aeff346014e637af676c16f1514c8daa7ab5edf7b431acda813332f4505",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1cra2m6atas4wtda25vd37rvc7x0x8cwqnwrnxs",
                            "bls-public-key": "721fb6c6e35dae99dd6fa6e058376fb4e85d3879d29d5f46a07c9dbfe064cecb4852be7a0b914e626fc8e75e30253215",
                            "voting-power-unnormalized": "0.012101893381131712",
                            "voting-power-%": "0.003872605881962148",
                            "effective-stake": "11998536349999000000000000.000000000000000000",
                            "raw-stake": "11998536349999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1es8mknwyq4zr45qvey82pa578q3th062sk6lzj",
                            "bls-public-key": "a4955e29ea83ff526211afc8bec440bed5058833bf5b2160404c46538e331a6a394d02a6c8c984a92de10393f7e6f009",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9276064000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1t73da8de332nfx7x6hj9pnas2aa3e8pcrvryw0",
                            "bls-public-key": "842698605a26e28aef1ff006292389e5c2716233bcf91c54adf4562d772e7c07e8aee292fa698027c113188df7b95999",
                            "voting-power-unnormalized": "0.010807376119740520",
                            "voting-power-%": "0.003458360358316966",
                            "effective-stake": "10715074999999000000000000.000000000000000000",
                            "raw-stake": "10715074999999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1cvdmwpnwdcke9sg8srlncxd0rmyac395q2qrwa",
                            "bls-public-key": "1a0f8186ff37146c49706036ae839530d5b007bf1d42770e44d4c1e751e416f2a1353631189ef17e972d506f3e970e81",
                            "voting-power-unnormalized": "0.010541668343645500",
                            "voting-power-%": "0.003373333869966560",
                            "effective-stake": "10451636518965600000000000.000000000000000000",
                            "raw-stake": "10451636518965600000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1rd6wgcpcq8jn40md379ftlew8ukewu8ztl4n4x",
                            "bls-public-key": "59045a780785e3d5cebc2532be7ebd1ee4f236594e8484bff36dd1d0c59b1f94c344507eede9c9ad0fd283a11c452515",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9289717000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1zax7yd82fpl986prn9gcsygvlq6p877hawq364",
                            "bls-public-key": "947bf4e754b28c1b4b393e42215a904747514351df7013d7a6dce706323cbf4593ec283468c8257b3a827dcd04502195",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9446656692058000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1tn99d8rgsnum67vhekdf8a7p7fgfwkufm7d85f",
                            "bls-public-key": "3e5225758b977065903eae1e655a5f83a36c0b10c8fd5902bb9e6b1c51e6c3a6b846a21b43b2d6ef2df4e59fb2433009",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1vfqqagdzz352mtvdl69v0hw953hm993n6v26yl",
                            "bls-public-key": "e8c0e8bbdc60a12496b16c5153acc68c28c2a51b616fe094fa3e230aff3911ffc08061323efab4ccba2a4835236b1495",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "20941148411331100000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one12c8tpmtaezelshv4r4yuwnvsurxhslw8jsgpeu",
                            "bls-public-key": "71f79aa6548a3277a574ec5cbf31d1424484e204032c914505662cb4963cb4e29bb22219715a64a67f9c4fa7076e1a15",
                            "voting-power-unnormalized": "0.011101543859025308",
                            "voting-power-%": "0.003552494034888099",
                            "effective-stake": "11006730380000000000000000.000000000000000000",
                            "raw-stake": "11006730380000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ryuvxq3mgcvj0a2ukpa5dkuxmlc2gdf7pcc775",
                            "bls-public-key": "764d50e4781440ac44e78f9001f6f8d7770bdea0d9d3647e578d28d34fcb9a7392f20912e8a6f9b9d08c4e07ec6f1609",
                            "voting-power-unnormalized": "0.010204995081635816",
                            "voting-power-%": "0.003265598426123461",
                            "effective-stake": "10117838637504000000000000.000000000000000000",
                            "raw-stake": "10117838637504000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1jg8yescd779juu89rcg9cjcwedsu9ptacdyqrl",
                            "bls-public-key": "0501e4924bb1200a5cf4334c9a5476cf6b0e4b8930671d240284844c9c96ccddb57b4b9cce6db94dde1c606dcf044181",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "18659188142549400000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1d5adetdwd6zkhu8l48q9fq4j4pmwckpu3eng67",
                            "bls-public-key": "0c0bc237d97290e31a9282f6162ecfca5c5532e59298ed3fedbbf8fa9642e9a35a67df277b9c70c5a7886eea3c54cd0d",
                            "voting-power-unnormalized": "0.011883367697895905",
                            "voting-power-%": "0.003802677663326690",
                            "effective-stake": "11781877000000000000000000.000000000000000000",
                            "raw-stake": "11781877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1c9h3u72czs6sk755tjyse7x5t70m38ppnkx922",
                            "bls-public-key": "e6791a7fd6ad130035dc16cb9a463bc6932f782d3599b7317873b76e137df0d4b23903d93655efec4067442e8f532c09",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "10000000000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1560f54xsnyntxrrxrunjx5q4r2pxp264zs3n60",
                            "bls-public-key": "867ae6f88a5edecd6d89df05d94e08785971b4611ccda62944a7773f5cdcd6f2d86af8364fc7670d38a18109b2416413",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1jw462yf0ltq82rvlnjaxazqupja86rpkz3pvqz",
                            "bls-public-key": "dec11a8d74b5ce864016644013c985647624555c12e1c19d6a5f32134b26e08c3d33d969d409aa6396138e35ed5f0099",
                            "voting-power-unnormalized": "0.012163831053974861",
                            "voting-power-%": "0.003892425937271956",
                            "effective-stake": "12059945039998000000000000.000000000000000000",
                            "raw-stake": "12059945039998000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one127rxx6l0234y5ke8daffgvjrfa3zxcyajq36j5",
                            "bls-public-key": "021926136495a0adcdda5af0602cb4b4ce6d6529cfd451b844728a0e4e424f2a78879a8b5d5e4b3e42127f95f2e2858b",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one19e8qg44vd26u7pp7nyp7ewgr8nqewwz57kwd2u",
                            "bls-public-key": "941a8b18993f238f84282fd2cfaeae92349f20c0c077f7e6ea1e239f5b7512c937a48656e0113aa93ed4f9b9dfa91d89",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "100000000000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1z28zsvjvevexnnyyy2t5qv57vsx0ct7fvnnhl5",
                            "bls-public-key": "c49f2e8c28f7c187b68f24f846550bcc5fe60c2719754eca1b55305d2591c3ec2b6e5291cba1c8f887fbe926e7ee5805",
                            "voting-power-unnormalized": "0.011182390875023417",
                            "voting-power-%": "0.003578365080007493",
                            "effective-stake": "11086886916642000000000000.000000000000000000",
                            "raw-stake": "11086886916642000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one17vetq77teeeczufa68fkpx8vc0wc2tzfmfnh5e",
                            "bls-public-key": "796743dcc97e1d08ba9d76fa68137931d694d19e1de8cf2b0dfe53118e8d1078c62fd72498536432d13186a808e29a80",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1uahjhhl8ajwshuxlxyzhqa6m565mek6kg6hqc3",
                            "bls-public-key": "6a5851aa43c99baeba79b2996194025d9994360a329d82486befc70e90199480cf1114bc08dde1675595f215f8ad6d89",
                            "voting-power-unnormalized": "0.010658266640242962",
                            "voting-power-%": "0.003410645324877748",
                            "effective-stake": "10567239000000000000000000.000000000000000000",
                            "raw-stake": "10567239000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one10nay2vc33vx088ecvqfu9yk96get0j43qzp8qp",
                            "bls-public-key": "2113771d0a9636607c6fe8bab2887f430854fff8f3856babe17a31399b1a3cc240f6f3edca0de7b43c80f7c4650fed91",
                            "voting-power-unnormalized": "0.010163665465778901",
                            "voting-power-%": "0.003252372949049248",
                            "effective-stake": "10076862000000000000000000.000000000000000000",
                            "raw-stake": "10076862000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17n0g9ccvaz3j2tx6hx5aq94czf54ha3h5e376e",
                            "bls-public-key": "cbe242f24fe0ce3076c243d352710c0a444da5c9dcd08b72c5113e9d84bb278fbce6d0d7b42977e57670f505ceebec91",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "10008773399999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1rhpfn58kvmmdmqfnw4uuzgedkvcfk7h67zsrc8",
                            "bls-public-key": "c9e3840c651df5ea559f5c9e12f816a28a706627acaeaa73affd0c7bba049f6fb0457d616f07978c2ec8f8c5f46cc011",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "10004334000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1rc9t0anqzzwl7yepmyvlu3eafx94927aw4umwt",
                            "bls-public-key": "81ce2082507783d0882a0e816a7063a2c5ae2aaf186dfa157038262b911d55c2916bb113d7bcaf59426059ac9fc8cb91",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1x2ge0efu3mv56mpndzsrwtd62d24qtshkmsp56",
                            "bls-public-key": "cf8e8ac33008ba6f286a276e07a08cb75683499795cf05078c176b51b1b8aae43276e39b5175ddf898c595e890146011",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "95158633699998000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1zk24v0nmh662f3u0jz5wsu65y4pjtjuc2kskdf",
                            "bls-public-key": "285021b00e21f75364d92ebcbc204e73f268e50163347cbd97a5401c800f6348252c2c23fc6ba9e099f3a6380726ac85",
                            "voting-power-unnormalized": "0.013099164675470656",
                            "voting-power-%": "0.004191732696150610",
                            "effective-stake": "12987290382041000000000000.000000000000000000",
                            "raw-stake": "12987290382041000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1pzsehc47gl6euwnqe0lfmsdh83l3t2a7lygrzt",
                            "bls-public-key": "c41182d63481d03875ccad187f9be6e3b97cc17fadc6fc67ca2be7a0ebb07e06d1442f0613ce165c9bf25c20c1a08991",
                            "voting-power-unnormalized": "0.011015959534958282",
                            "voting-power-%": "0.003525107051186650",
                            "effective-stake": "10921876994586000000000000.000000000000000000",
                            "raw-stake": "10921876994586000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1akmt04f8xm8m0d7gq97nhxh0hzcemf2826nhxx",
                            "bls-public-key": "ead674dc644b6d7e5549299f8823492c7c15789b09cca63379543d1dabe8f0c93fbf733c0419e8e000b780fdca23b711",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "25561143241836000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one18dvfm36hq69rfqhzmys7fvmh8qgmqw5z6m28kg",
                            "bls-public-key": "ae8cc5cb7818994b98d72c1f8d5415e3e315f4a975a58121344dea8a8fc79c0942609f2e502fe67ab2742176a886548d",
                            "voting-power-unnormalized": "0.011435682209995847",
                            "voting-power-%": "0.003659418307198671",
                            "effective-stake": "11338015000000000000000000.000000000000000000",
                            "raw-stake": "11338015000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1x0dhlrhjvz06w49uw3mtmje2hymnlfla7pgszv",
                            "bls-public-key": "b5b179083e949a56db6a33f107bca5069fbc91f2de054e181b5cf5d792ccf52460b996e6626f3908c6093c4dd823810b",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1ae378sq38g2nhdaa5lupsxk2ady3yp5desqqf9",
                            "bls-public-key": "4cca9a46d70dfe380b41dcb2251303949e5cd38f6b567beb890cc05a36d2d9e7292f34743d2e0fb86fec134f6619bd88",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1syp0s8wvss25rusyf4v8y709vdadfrym4kk9uk",
                            "bls-public-key": "c74ebd61d4503cc23f794d0c4af3f1388ed4c3c2a3bd02283df9d03a7389b106a58cbfce102d7d489260995ba9e12d91",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1cpyxfht07yj3sug3mk7ymk4rd6e5u9w62f8y74",
                            "bls-public-key": "0ac6418533bf747db097810ae93245d1ac1b4fd55cbcdf08669721f182edc4ed37d73690d8764a801c29bd1f54267381",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "190222936068390700000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1452w86hryya3ktnjxuevsttqlc835svje6sqym",
                            "bls-public-key": "d9c0750bf91ef22ece0fad07c6bd11a6f3c65615835a65c480c308560994485d4b27c2a62cdf90d0fb2d4f436845c914",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one149h38k3rt8m8gfaxxfn3zn43lqt6mzlvthcy5e",
                            "bls-public-key": "85dde30f23ffd30b511582550a20d675e96beaf348af5c1401eaef69e8485ac867cd78e9d4e59f42d9c65b8ae4466981",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "74347608499999950000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1gqnfh2kkfn6wsgwtx7tnqkw86wpcqsk807kkcr",
                            "bls-public-key": "523bbc459ef6d0d5130df5ac7bfa5f8709171689219849b343db9213be6db5630ba134c448b49883ac3efbb67dc6f819",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9586877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one10cf8n0w52fzk2a2spwwms452j4aqx3cmg80ftg",
                            "bls-public-key": "80b44e97b102cc424ff7eb6f7a4f199bbfb2bc2c53f7c754fe2d69378fec74e0e3330e494b644ba960024ae1d78d2f0d",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9207240994213000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1lxzmu83x2lrekvutjjsdk06539mx45e8n8y5pn",
                            "bls-public-key": "04dd842a98503c32b7008a65ce3bee3923d9dde459566d1c415bee6ea179fc836275bad656fa65aae7ce04d5ef649981",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "21013333851777000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1wy9dkhsy8m7u0z5rzypmxsyyawmu6a7v9dwh2p",
                            "bls-public-key": "1c4a0caa22867ae484aa4034b6546d843c7476b514ad5844a89b4de69e6ea8f87ae240f41b5ffcb100ae6dcf50feec15",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "13990119000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "9f68854a0d27f0af2bfc447cd0cc724857ee90b10fe668e8bbadbbd81a6051f593813f15533004a76c2a0ccb25306911",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one14yk0psfzn8tv2wrgw93huyllrq8te9s44d97zd",
                            "bls-public-key": "db913f9c7d7dc3c32b4fe84632f99e203ce91bedf72eb7bf2527df3ab81e8f223a39a514ae05362c31e56bb4f5028785",
                            "voting-power-unnormalized": "0.011172032491916580",
                            "voting-power-%": "0.003575050397413306",
                            "effective-stake": "11076617000000000000000000.000000000000000000",
                            "raw-stake": "11076617000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one18qwdyxz8g5x96ynn3a7uk94pe9dt4euhz2strt",
                            "bls-public-key": "4b0c4441f134b30cbff349cb660d85009c1b0871bf7fb6d0a1ec87b439fa1f217fb9fdf262cd92c2fe03032426058e19",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9853212874188000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1z9pa5m7xrng7y4drwkwaau9m8ey77mkx6tl96a",
                            "bls-public-key": "289df32bc0f08f35b539bf0f6bd434b8638868497a55c2c76a578dfe83539a784f2a7c650df61a90143bdbd7ac72dc95",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9271877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one16c5uajv6et2mauy4rlqwne4wfu8cpzzuwsujsw",
                            "bls-public-key": "640bcc532b507981a832d3dce3d2f86d66b314a9d6cf4e6644629ce83786c6deaf9ec52ed15f9e08df695d6417a0ad8a",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "d72a260c8325571aa5cda49b44d7f5fefe86b22a2d93bcd2dd3958a2ccc391f38babcf9a8a4571517df3307c65378091",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1yjfg8kua4tvs8gjtdjed90gse3cmvd0yy6wcwu",
                            "bls-public-key": "81b038da89b005335e677f61935d552e866e281a57fa03fe95c5154ecc5f8cf3d5a5b83486acaba38bc90d69b1738881",
                            "voting-power-unnormalized": "0.013233017566423704",
                            "voting-power-%": "0.004234565621255585",
                            "effective-stake": "13120000093412000000000000.000000000000000000",
                            "raw-stake": "13120000093412000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one14c9sgmh2lgpc3lk9t4frs3vs9cf7zy3rkrwyzx",
                            "bls-public-key": "4ac7a265e7ddc0cc71cb14cd10ccb87b241e84a5a7acc7bae3ebc1f1164dafca754a54ca92672c5e11967bc04c000299",
                            "voting-power-unnormalized": "0.010535451210946596",
                            "voting-power-%": "0.003371344387502911",
                            "effective-stake": "10445472484105000000000000.000000000000000000",
                            "raw-stake": "10445472484105000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1qe9wp88t048y6r9hlzf42jqv6v8cfnk5enl94c",
                            "bls-public-key": "2c0ba52118e3f3ad5130b189a2040a3f47b608ce698e4eefaef6acd97b0ba5aa8c2ff0d28189faf9c7f094ccca6e6c09",
                            "voting-power-unnormalized": "0.010764046132040069",
                            "voting-power-%": "0.003444494762252822",
                            "effective-stake": "10672115074961200000000000.000000000000000000",
                            "raw-stake": "10672115074961200000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1080c4h7uev7u68s330vnxsfw7h6t86ufer8923",
                            "bls-public-key": "6435387ff7654d16d6eb77029c18157a2056cb15bb9391ab7926bdb955b64e7a472228ad60d5e6889c2883b15837a915",
                            "voting-power-unnormalized": "0.010687438786915877",
                            "voting-power-%": "0.003419980411813081",
                            "effective-stake": "10596162000000000000000000.000000000000000000",
                            "raw-stake": "10596162000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1stl2wdvm273xck38wdp5ecfj0nap4ctx8wycs9",
                            "bls-public-key": "f1d9ead27405f680502a1f74fa0961158c9c1b9caba8d6f9066db66a6cf9bd35aa588a0d397bfc2c3ae9765133f45c19",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9688842000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1fllqjv6hq8vfvz5kwyhaknw0f2emvfqmq0s2tu",
                            "bls-public-key": "b599ab0a5b37542f80b61274249aa0d095a90b32498f766d940f5af64d441ae84bf2189a7030f5e9ad06fb024a04d699",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9267240000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1x6meu5tqzuz0dyseju80zd2c2ftumnm0l06h4t",
                            "bls-public-key": "f441b75470919983ba18a0525b1c101af42cae052c6d50f74d1553eebbe78ef226849c5e5a7fb2ba563eec6b20380c00",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1ct89upkpkpv5scmj3rvfw8sucqkygve2e9tg8h",
                            "bls-public-key": "74c363ec65b03997fb38382a270ee1498556c229f48f6300b6bea3f7d6a515b57805922f40ade8c98ada9eb084e52e0f",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ur06pgutfdqcnah5qh6czecrz65el4vh4x2lws",
                            "bls-public-key": "1dd099f60af6cda418180e663c527e0175ed11c42a3920683d1a1e33a8500ba69cd3b5ebb7d6801ac2dbce6b1611a185",
                            "voting-power-unnormalized": "0.012732181458682308",
                            "voting-power-%": "0.004074298066778339",
                            "effective-stake": "12623441410000000000000000.000000000000000000",
                            "raw-stake": "12623441410000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1hq70696u36wfhpfzjggsm9zw3vz7l49403ndtx",
                            "bls-public-key": "832672b827e9d07ba1aad1e3550e38b869d14d771cc20d10b66263e2fc5e3383cedccc5d06b64ced3b75b78e70556c09",
                            "voting-power-unnormalized": "0.010667725423616007",
                            "voting-power-%": "0.003413672135557122",
                            "effective-stake": "10576617000000000000000000.000000000000000000",
                            "raw-stake": "10576617000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1z8l2gca5rw5ws3pss0p76fyla9ge9zer3hne9d",
                            "bls-public-key": "144d3664a430c34f35ccffcc8c8d704cdfa44dea81597a6c85af5ece395516fafbf7ad01774bea15413da8a0773acd81",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9673378000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1mrprl7pxuqpzp0a84d5kd2zenpt578rr4d68ru",
                            "bls-public-key": "2e9aa982036860eccb0880702c5d71665761f8d4e6ab5f3d8c3aee25b3e68a2c7eaa3cd85972c7f9a3c19d3fed3d5d01",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one19pv470fqeujmgckqm5h7q3ykhfsyarj2u5rlp3",
                            "bls-public-key": "3a3d6481bb95279254ad74649e65e31a18818c56da38c3623af86e5527cc7bce62f84187f10c9b6c30fd485196501518",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one13aydpznlr2wlhu62etn6kf3eya0fgazm0ynyez",
                            "bls-public-key": "fd0225712ef2178f00a2b8e2f0ef7ec1781c69228310cdad48eaf78e2fcee8d7bb222b08ebd8b0d483fe7738b3ac0701",
                            "voting-power-unnormalized": "0.011259292690828991",
                            "voting-power-%": "0.003602973661065277",
                            "effective-stake": "11163131947338000000000000.000000000000000000",
                            "raw-stake": "11163131947338000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one13zw4cvg2jnuq494r79agr2pq5nr3rlmp9lh3e8",
                            "bls-public-key": "e0bf10df5e9b77753ae384350492945498bbe73399a60452bc73785a50fcf4dc742f32d7fa8b04e144c542e0c6183f99",
                            "voting-power-unnormalized": "0.010126942833679390",
                            "voting-power-%": "0.003240621706777405",
                            "effective-stake": "10040453000000000000000000.000000000000000000",
                            "raw-stake": "10040453000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1ta3p2h0hqc42dglgyzey9xua8kkds7y8n3h573",
                            "bls-public-key": "e99c10f7969f3845cb467e23f0a5095d372198c834bb2efa1c0bb220d67bacc85d2637486e52f8acd5dccff36580de0f",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1m3w07gke5ekxg8yyj66v5eky5wx2e5kvqh3fkc",
                            "bls-public-key": "e1049c214ef21c3954d5ef0ca0132256fce020b8096ead11debab5aa5f05e09bdb3aaf2a2816536373ccc0c05623b215",
                            "voting-power-unnormalized": "0.012094480722827891",
                            "voting-power-%": "0.003870233831304925",
                            "effective-stake": "11991187000000000000000000.000000000000000000",
                            "raw-stake": "11991187000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one106fd5vadl0tnk74ccggdtn6m3xkju40ewj23cc",
                            "bls-public-key": "085175d5724be15f0159cdd4da275d5efdabc3696641c5b5c70fe5d1ac8afebcfc8508b7cf5f8030dc1988a42ae5c109",
                            "voting-power-unnormalized": "0.011962264521503256",
                            "voting-power-%": "0.003827924646881042",
                            "effective-stake": "11860100000000000000000000.000000000000000000",
                            "raw-stake": "11860100000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1lpzdnqz47xnpand6k33zw6zlwx3fxc0veftt3r",
                            "bls-public-key": "a35e9bae77e2accedfb32363a04f18daea638c8e53e945a40b4fbcdac28891b3594dff5299587d1291d9934967d8ba19",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9055159751655000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one16xt3gl6l7q8afksksgwdmdahd5s75trgy6ut3k",
                            "bls-public-key": "c91f5cde7343af440026bf7b97d6e7bc5bc45ecd7d14201cb0250361aaccc5cb94610d0b9ecefba9b28f205c0aebf385",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "14138721244629000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1js0e3rw0qpy3r2x26n8xp9ja7qwgxj6ht064v2",
                            "bls-public-key": "90404f04db155afc0444210b83a1f6acb29e0c479a31222afe7827b643067754817af06fbda99600d5afcc0dfd510c89",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1pwx3vtwaxdetlx5kzcqhuc26hfc4fc9cp0stgx",
                            "bls-public-key": "851194219e2df66dc33203dcb3344b88ab6ff248236bf67422b5c9b5478e5c2f0a424050b4c5901d6bcb72ee03219c05",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1gjt4latm8qepeg7f98hz9s38vg8keavl85qcdk",
                            "bls-public-key": "c214a0ca0ec4524ece2926775b311a67f65734dd7a1a4d147e07f4774c31721ce5943f47b7e826fcb3a25c08523d7b85",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9794162994000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1yu60r73fzhhadnj3hj3ndhpyk32lmlj53hkag8",
                            "bls-public-key": "bc55cd376184cb98e32b80aedcb1fe913fc96de7b881ef75f7119b23674291a1bd50f8c3a4d4739c9a3d1d55e6386b18",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1k3r0xmuw2zhwvww88nx337h0ee7g2h3edgl66l",
                            "bls-public-key": "5c99f48ccc1377faf79f6d36f46222e6c124083a58e9a47f7bc9e37a0bf529215671f71ff1bc4c3f8c5548b484c31e85",
                            "voting-power-unnormalized": "0.012050636266309839",
                            "voting-power-%": "0.003856203605219148",
                            "effective-stake": "11947717000000000000000000.000000000000000000",
                            "raw-stake": "11947717000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one10eqee99zcxmx2kxux92tqkjpmc04wk9ugr79p6",
                            "bls-public-key": "b5498a248bf1ef9f03497ec3fe27f8e6c984e052e8ded27a728e5c6526eed506b879f5eafcfaef2785c3fcab468e0489",
                            "voting-power-unnormalized": "0.012566491267682415",
                            "voting-power-%": "0.004021277205658373",
                            "effective-stake": "12459166307176000000000000.000000000000000000",
                            "raw-stake": "12459166307176000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1nv6q6y9t7tpketgrwp3z6kmq5v505nwp0ph4ez",
                            "bls-public-key": "fa24d37d68d349ada82e5d5ee226bd2e23b3783b613d8fbae2d29409848501c2c8e43bfb24374aaafb454772a17d8101",
                            "voting-power-unnormalized": "0.012062688934881186",
                            "voting-power-%": "0.003860060459161980",
                            "effective-stake": "11959666731948000000000000.000000000000000000",
                            "raw-stake": "11959666731948000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1zzz5hanvsmtvl86zuur6nwx8tarcdh0g94vj9l",
                            "bls-public-key": "95d54d59d5d9937d0a4227235e4755f5ca2329bbbf9973fcc7104cb6a9a125e840c4e8a9aaa974e31da1b35f22117a99",
                            "voting-power-unnormalized": "0.010691309847972152",
                            "voting-power-%": "0.003421219151351089",
                            "effective-stake": "10600000000000000000000000.000000000000000000",
                            "raw-stake": "10600000000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1yzp3yw8x848jazrz7w5a24zulum2nsjqnd9n67",
                            "bls-public-key": "df69d69cfba54c0e579eaa43f75846ff05b9bcadf09b502f7c5eb5410e5a5c7bab0e68bfd9b079aa981bc136c84c5495",
                            "voting-power-unnormalized": "0.010410564120277496",
                            "voting-power-%": "0.003331380518488799",
                            "effective-stake": "10321652000000000000000000.000000000000000000",
                            "raw-stake": "10321652000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1xsf70cu7uuu5k6f0kpxp9at8r4dmg0sttzx40t",
                            "bls-public-key": "577bac828dacca2acf29f8d38365a5af015b88298482c38f09ccde44f3c1a2d7011f710c4a7fe450d8b5d4e7a6950a05",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "8651010000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1wh4p0kuc7unxez2z8f82zfnhsg4ty6dupqyjt2",
                            "bls-public-key": "4bf54264c1bfa68ca201f756e882f49e1e8aaa5ddf42deaf4690bc3977497e245af40f3ad4003d7a6121614f13033b0b",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1zc9t45u2uege2rr0fu5jn323vw6zknmme2szhw",
                            "bls-public-key": "38de540c3df944e2982dda39f9a8d4ed69d0a23852580f7d818654d6ef9b0e1defdcfca3b33d36dcf04789659cc2878a",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one14nt6nwd3p9v5dk7er3rkvg6y0nh8v9k7j3nuqq",
                            "bls-public-key": "6094253b1c87ac6d65077588a9452f983a348a7439feea9607ea90cf257acac37ae5f8be18fdf60e3bd7b20fb0f8b509",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "20558389039903000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1yc64ch2fthece9ngplvxjnywqnguacp0e39s3h",
                            "bls-public-key": "6c56ef94ebb523ebb48e25f4d1665756885c6b8d6dde7d413d2a540a815dcef60671ec2a8bc03691677eb176a65fd799",
                            "voting-power-unnormalized": "0.013677877828058153",
                            "voting-power-%": "0.004376920904978609",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "13923517000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1g520fddr2y4skj7crgp607uzzammlyy6tqgrln",
                            "bls-public-key": "b1a2f231ab6718d6454c4fbaba10d9a919bc1c236b4ec8b0b78746fca58bcdabe8de4b8c423749c21a10de3d408ebe89",
                            "voting-power-unnormalized": "0.010965978007589504",
                            "voting-power-%": "0.003509112962428641",
                            "effective-stake": "10872322337800000000000000.000000000000000000",
                            "raw-stake": "10872322337800000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one148gj6aajacau3j0sgpafa3e6grxngy3gjfhw40",
                            "bls-public-key": "365cfdec86227f8fab1bdc9d5bbcb91a4396f462ec2bc638701e1a0a9c46705b67d4540408fcb33aeaec2ea3b2247195",
                            "voting-power-unnormalized": "0.010109735785956026",
                            "voting-power-%": "0.003235115451505928",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9688971900000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1wnkg99y40gq9thp9h2velmefxsncm24rq65l8z",
                            "bls-public-key": "4cf88358365733859717ccabc63c73a6ec01a03f07fef266342bfec2f1d57c14b543b9995c3a66b8a737db3a9b60920a",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one125s9c4ukzrk7jwg5t6xk7h0hfyhzy2qte4w6rl",
                            "bls-public-key": "77eda15c99154cb2db50e744de82ed1a4ffeedf4849b0039d3ccbf35f080171f2b3cf4364da177448edbffc52741a313",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one17p07x854ztdm5w029ksluq8l4wv3hagpwl5zxh",
                            "bls-public-key": "adaa3dd1e0dbf11b0b365c214cde3ca4296639f5229cf66ab6fa917d4861b0c94b342000cee62b142cf04fcd37c15909",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1p9xya88j2344kgslgxxkugqg38ua59s4uc5ru6",
                            "bls-public-key": "9f63ff2423cfb6adeac732b73163b8cca684cfa907b31dadbd9e40b342984304ffbdc777ac715dc96235138051cdca19",
                            "voting-power-unnormalized": "0.013626191077723829",
                            "voting-power-%": "0.004360381144871625",
                            "effective-stake": "13509815680000000000000000.000000000000000000",
                            "raw-stake": "13509815680000000000000000.000000000000000000"
                        }
                    ],
                    "hmy-voting-power": "0.680000000000000010",
                    "staked-voting-power": "0.319999999999999990",
                    "total-raw-staked": "991459433009560500000000000.000000000000000000"
                },
                "shard-2": {
                    "policy": "SuperMajorityStake",
                    "count": 105,
                    "external-validator-slot-count": 75,
                    "committee-members": [
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one132vlefu93my3zvug2nsr9xk9n0a34ktc5q0nj0",
                            "bls-public-key": "a9f21c11d1fe66a6e85c90c9143bd0e060d48eeff9942e0d248c4367ad6449f36f57ac6157db17ea0ffa1c71912b2e05",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "6302b0a03e573ffc8fd6a51ee48f0d1d66d9320a67d40f807469bc6677d678510c8d72fda9cbb170e06a22efe2dc890a",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1wje75aedczmj4dwjs08l2xcg7vx0dy23lcajk0",
                            "bls-public-key": "cbf0fa521218cfa09d7c997ad9efa8107f19a215a4792cd593da8be61b14b268cb8eae74f878a4b90279883b3f720092",
                            "voting-power-unnormalized": "0.013050848822250629",
                            "voting-power-%": "0.004176271623120201",
                            "effective-stake": "12098807000000000000000000.000000000000000000",
                            "raw-stake": "12098807000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1ka7t672qv8ndpjq2gqns27wu3j3gtlt7w0vkhz",
                            "bls-public-key": "62ad52f6050101549fdb9f2288d670b83d0fbf38682df561b13ee3358b2a49d822d956ac79ec2567920cdf814c534485",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1zwk07x6wlervgf3e4r7k0u7mlahnts5659f2q0",
                            "bls-public-key": "6d8faf3a0ff828bfc59702755c8e84d1e4dbd434d798c56bfa4772aa22254ae4643d6b4a9d385941780b848e1aed6007",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1gvvve6xfnlytdgfngqx3sfe5pmywnc9ykaudn8",
                            "bls-public-key": "9d29878d00d093f9bb88042724b12d6ff6192ba9db78fb8fac62f633387797266f16ff43dd7ff88b3e615315550a1106",
                            "voting-power-unnormalized": "0.011649839264286780",
                            "voting-power-%": "0.003727948564571770",
                            "effective-stake": "10799999200000000000000000.000000000000000000",
                            "raw-stake": "10799999200000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1x08eyghh8uhldsg2vkmss6dzul4zamkmmkqeeh",
                            "bls-public-key": "c562f92121a31e899053fd8633f9253e87062f862c29251e6c648c7191285ca5b4da0b7a059c8b4f5505d9fe46610912",
                            "voting-power-unnormalized": "0.010812122679310906",
                            "voting-power-%": "0.003459879257379490",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9714191000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1shzkj8tty2wu230wsjc7lp9xqkwhch2ea7sjhc",
                            "bls-public-key": "e212c4c5cd8e078aedd34c300ae500c5bd5fd036231d1c9dcc8400337919a59ebd47523faa209fc0d873ead492621f88",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one17mqrkzczel7zct0wkjkanlurupzmsazezsmglk",
                            "bls-public-key": "b3c646cc7658407f1af0583a009ed26fcc623fc06753eb7d064aaae8ab8aa65a1bccb806afe65230d543b1982f4ec18a",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1age7nde9wkcv99z2u9cej4szmq73aa2c5tcsjm",
                            "bls-public-key": "cd6d4e6c4307851d4eeeb2c17fb6104207b53542f0bf9c533f0078a5c74863c23d151de9627d09098ad6c5c3cf594682",
                            "voting-power-unnormalized": "0.013284828310383898",
                            "voting-power-%": "0.004251145059322847",
                            "effective-stake": "12315718000000000000000000.000000000000000000",
                            "raw-stake": "12315718000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1y6t8yy8xmfxg9ztrsgyhjtddxd70wwhwhr5fp4",
                            "bls-public-key": "eaac5d8c859a2d65cea6a0af223aa2bca77cbaa9d91902defe170e3212e57157ef187853b664993702944e460e53a40d",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1nzkhudzmyczmy0ukvjewlx4zyqjmc8ujhfhq90",
                            "bls-public-key": "dc735a503388d93a86ad56ab8d2f0c79dbec64b9331812beeab068553959650e848e6fbb3fc280081e90abb50074bd16",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "15443977610171000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1l4dp4ksy85fzchlr5pgdp5we0lpc8dsyzga6y5",
                            "bls-public-key": "bb058f47d3d66e21d67d7a0b0ab0dcd87e037e590ce47ae9470afef8f682a5ac79fcf3f79b89ecb0769cc1ae62ac9290",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1j8p97zd3f6qsa03xjd89xgg35naca865dkj70r",
                            "bls-public-key": "cdd12b97dc34764007e5fba0e97f7edd26ee3501efaf37ba79a84b08b856b9c2ac83ba99814ea9e7bae32e4693a23b86",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "14643953274843000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one19a5t994apfnv68yqxmdnx8jf8qdy0pqzwdl96k",
                            "bls-public-key": "7b57317d3b209b58bceccf54237ed72b03471fc24e2604468ea6afb9edea720869f311863f8fab4984c161f457e8c206",
                            "voting-power-unnormalized": "0.012482455279820494",
                            "voting-power-%": "0.003994385689542558",
                            "effective-stake": "11571877000000000000000000.000000000000000000",
                            "raw-stake": "11571877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1mcc9plwyqpeyhk4tv2a9wka6tzckc37wsn36az",
                            "bls-public-key": "ebeb24316d8dd38485eee5ce3849d8c6b19d7cd35dbcd0456792bdbf1ae415f8d78c3f28f63ae42de21e3b3b4dceb48e",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "20319897835502000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1dgccuj65y4ujn6lsvyx0zndmnskyrwatn6j02v",
                            "bls-public-key": "294a0bc5af28548abaf809a8f6d9e18c8e01215333d3e760a296e4463bb8030e46c99e4e679840e4e6dc452cb0b31196",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "16666665999999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1p0fecz3s2ldn53829fpj99m92cr4vfcc5hmj32",
                            "bls-public-key": "1d806a18353315437848dcf16a6297a51974b81a2fbfbd4e9b6611af77af3f32061d07128328634ad24ba28af9ddee82",
                            "voting-power-unnormalized": "0.014435576482858853",
                            "voting-power-%": "0.004619384474514833",
                            "effective-stake": "13382520645100000000000000.000000000000000000",
                            "raw-stake": "13382520645100000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1dgtd73aumt2vx2el35g8wqkjsj4yzxkjg7sx9d",
                            "bls-public-key": "83ea04ae5efe9c1ccbacf9a0cea9206a5d38090d5fddd19f2919bef04a89e82c4f662e991c9e9d06b593cccb4340e496",
                            "voting-power-unnormalized": "0.012205688288514591",
                            "voting-power-%": "0.003905820252324669",
                            "effective-stake": "11315299787484000000000000.000000000000000000",
                            "raw-stake": "11315299787484000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one17u39z7sus7ntng6mxmart9t9w7lr956qu02gjc",
                            "bls-public-key": "68b97efd30c635af5053e4fddf88f2c00f437ed3d24d88f4b369ec6761a3b315a9e01c80116bef5c854583784a7eec89",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one15wgxmsrzuh7qedcha0ry907nddn7y4mj9y4ja9",
                            "bls-public-key": "edd60bdf97109cb71cbe69d387a55b2d6d9cc61bb753b76dc179235b3a40f83931bc4e71960ed30b75309924bab1338b",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "a0301ee493e3a78516929e7a89b6779e828962b8516a4dd41b1374e21a179f00fa6c3b75387c357138d5d1eca6c2d312",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one18cgh0khhkrkxm537lkr8tymfvkd9xwfm58da6h",
                            "bls-public-key": "ecbd8b1059ee6f83aaf54e1ba32a07a900e2a9c66b32038c4ea73edd9be7533aa7a950004dfc49bfe1e8bb6dfc813703",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1csh9mh0w0589aszjt05nx4grxleq28xyugv357",
                            "bls-public-key": "fc72bc2ec7505ea90b70a309e8b93bf4c0ef5e44bc14023fcb766f2e083f37f03ce94dd83728a918a0685a199c1d8214",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1cr8qrjl6khac9d5auyslvxln864vmqd5xll2zh",
                            "bls-public-key": "42fa89ee6e6296133ac05bbfd8c95976540ef369683864f0aaa3c7f0f5390046d077a3f4156e51654ba8c14234654c12",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "14121217920071000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1qrgn3tlf58zsdp87s7pg0rhtjd5q8r56lthyrn",
                            "bls-public-key": "ca565e3b6879fcc151d645c699d9bfd2427b5382ee3457b519bf019d836d9f892cc6e32fdc1044fa3d88da1a2a70858a",
                            "voting-power-unnormalized": "0.010812122679310906",
                            "voting-power-%": "0.003459879257379490",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9999148692774000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one14shlkfq00yfmf3r4gglt0hqfcxrgx7ysmsz832",
                            "bls-public-key": "b46870f3b41be0b72f256ad2dae48529bd5e314d26ece4c2b0ed42cb7c772a1e6c1eac487adc8ca1172b23540ce9578e",
                            "voting-power-unnormalized": "0.011326232378347947",
                            "voting-power-%": "0.003624394361071343",
                            "effective-stake": "10499999000000000000000000.000000000000000000",
                            "raw-stake": "10499999000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1dt4md3nh3apdsmm8t0p2lsul2my5c2t93ky06k",
                            "bls-public-key": "e51276b7d84c593298cb0331559ce2790d9d2343364ea6f0a8e4a00c84952d59b0bc0569b028aaaaefd317772a7eda86",
                            "voting-power-unnormalized": "0.010812122679310906",
                            "voting-power-%": "0.003459879257379490",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9275240000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1l4gjj04y99uwjsw2xpe9mv2t6ffyup0da29ltu",
                            "bls-public-key": "3a1c468d71ab8986b74eaaffa48e28a9f94a95487ddb37418bb97ebfc1db93f2bdf0e3a555f1bd598629e9adecee3a86",
                            "voting-power-unnormalized": "0.012621086219956823",
                            "voting-power-%": "0.004038747590386183",
                            "effective-stake": "11700395000000000000000000.000000000000000000",
                            "raw-stake": "11700395000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1wxlm29z9u08udhwuulgssnnh902vh9wfnt5tyh",
                            "bls-public-key": "20026c7ecc0c7b2bb5fd217d3a16cae4dff30b8c610d476da1a41f467db43f4d3fff706a6ebef4983564c67fc164f80a",
                            "voting-power-unnormalized": "0.012135249053850579",
                            "voting-power-%": "0.003883279697232185",
                            "effective-stake": "11249999000000000000000000.000000000000000000",
                            "raw-stake": "11249999000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1z5je797487dw9qpgkqtrka3ws4m73unasdfj2c",
                            "bls-public-key": "959c14a7daf951b6fbfb0fe84158bd7441daa232575b46d28418ceb7c8d66a2df57886c70fafea6c87317e1ae5821092",
                            "voting-power-unnormalized": "0.011416479990882628",
                            "voting-power-%": "0.003653273597082441",
                            "effective-stake": "10583663170901000000000000.000000000000000000",
                            "raw-stake": "10583663170901000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one18cmx6dd52d5l42jtjyufvetv3s8lpl8rqhatwm",
                            "bls-public-key": "5099821a4a20c9450bc778c638214d429f1dd66993f22761c669d9fe1e67caa11f45113bcebab971c32baa8000938a94",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one15a45k4a76lhsj7z9p242ey33f2g9x6k3uhdhd6",
                            "bls-public-key": "51dcd37346474c3ac0a33f23a3fc1791d40ad1ea718dc4351a8d735a38c7591adae5093d6dba0231645b877abd9b0a16",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "17695121928702000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1h3ugwlrl825dchuaw7nrdtjqazl5yr7r3nv93s",
                            "bls-public-key": "d7dc5b3e803dff45b1ffa22ff9268dc25991afc3ddedd3b5aa7a7c10810fddd30ceaf7fafe0b24befa6aed398d8e6706",
                            "voting-power-unnormalized": "0.013843018534501516",
                            "voting-power-%": "0.004429765931040485",
                            "effective-stake": "12833188999999000000000000.000000000000000000",
                            "raw-stake": "12833188999999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one183427xs6t55drhcupj02lulspy0j62zuhjrwl2",
                            "bls-public-key": "8d8c423024d8d6dcd3c50a5c1d6dd9336699513c6cf688ac19c7078aaedc36d124be4b49fed421b6ec08819e68d3510f",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1lq4dln5lhvfnp6z8m4cmnmqrrxugkefrnsj8at",
                            "bls-public-key": "76fb43d2f9963f4cca0e08aa7f5f6ab0cc6232f6f26a7e2a20c2e1184ef9d88543f22e5ef57d66afa4391d95e15c3796",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "99999066533522000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one16pavfhark2j7h7235hgrfrx3lwlj7xnkslesa7",
                            "bls-public-key": "324ed2e36044dda94d7f4495134f6c838aefc194766cbcdb969537098936040976320808a68a8cb34eaa10e01d7f9092",
                            "voting-power-unnormalized": "0.010812122679310906",
                            "voting-power-%": "0.003459879257379490",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9289390000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1vusgu2vytafhfczp7kqj6jvquvgx7nequ2zcjz",
                            "bls-public-key": "516ed79377753aafeb17a06b219375ccb1a3fdbb6cf1659b055d5946f4432ec35deec920a11c83d8c5045f60fde81082",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "16440769900000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1wqq9xrca6g5vfaqwm47gc953kgy6kqxm2pffuj",
                            "bls-public-key": "045e3d2dbc7624a3ba1f3aa253b8663d587a51c4490c071d44bfb88ac9b243e680b806b742630d2320cd9f1d99d4e58a",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "14899781907755000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1expja5cuma5pdu4m3nnlesvnjpapkqr4maguhf",
                            "bls-public-key": "6dc4f4b5a35f500960aa1daf66425e1fdf9f811327b32db6c9fe0d634554da9b258bd920a78135d8a65f36545e80e70e",
                            "voting-power-unnormalized": "0.011628998778988052",
                            "voting-power-%": "0.003721279609276177",
                            "effective-stake": "10780679000000000000000000.000000000000000000",
                            "raw-stake": "10780679000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1svtmmvm0nxcqz0nj83ceq54cplu3vdf73l076z",
                            "bls-public-key": "86823f71815aae6d443eee2d448d0742b086af84659054eb161858a5f7b5dec190012c3163fd4b703e95469336c84016",
                            "voting-power-unnormalized": "0.011229259324866599",
                            "voting-power-%": "0.003593362983957312",
                            "effective-stake": "10410100000000000000000000.000000000000000000",
                            "raw-stake": "10410100000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1km7xg8e3xjys7azp9f4xp8hkw79vm2h3f2lade",
                            "bls-public-key": "95b7f81b4ad71a93e866c918a122a8754cf6db02c0f3df93d00e6651b77323d527ac39fc3e990f9c2f6e1e3ea9d15112",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "21681008033520300000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1ccwx2ru35zevvve6we8q5amy4hvggpj4n97f8f",
                            "bls-public-key": "9fd7463748f72c1a219ccd8e0e3388e7c5f8c426260d78baabd8c5ca172950661410d7a84ed25669edf9419ffa657618",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1maygq3glp3t4d0u54hxpxpv8f8z4ss5hj0d2jz",
                            "bls-public-key": "8ff6bd3176fc9f1b7b01642e3b1895e559b8cc449436d6e6490e7f4c0f75477859887bc227c0bac22882e185fbe3bc8e",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1xf6nzwlhq4a4sz4du24hc0a4mtzr560f0jy9e6",
                            "bls-public-key": "eae9004dc0045b8928e231306ae73dc5045628195c3f5b95b78c31426237e21b52a10601d42cc8a873ff0af135e8fa92",
                            "voting-power-unnormalized": "0.013324718227048203",
                            "voting-power-%": "0.004263909832655425",
                            "effective-stake": "12352698001036000000000000.000000000000000000",
                            "raw-stake": "12352698001036000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1ny4hhenxk84qw7st4w5kdrk5jhc569cns04s9q",
                            "bls-public-key": "d610c0b5788fbe3678a4a707836782bfb4dc613c73f8c2597fbd195e20c19dcff32d1131b7d298bddf89fabb74526901",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one10n3vn6rz05zvkwus4ey0ll890qxpsxpzphttck",
                            "bls-public-key": "a76550cfd535db4f3ef3d51fa354e12d6efce90d3f1025357d1028a9c06fc9148d16f0fc24683ff7dbc6262c4ae61116",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "13614146000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ym5k67rqeuchrsgy2eztwhkkt3r5kkp3ed2w6n",
                            "bls-public-key": "5155e59612c78a878f5c3e62f060bd12d16e42102129db81f39ba32fc4b4d0ba78b5623636b1da498961fdcf9c03370a",
                            "voting-power-unnormalized": "0.011295897489083300",
                            "voting-power-%": "0.003614687196506656",
                            "effective-stake": "10471877000000000000000000.000000000000000000",
                            "raw-stake": "10471877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1gjsxmewzws9mt3fn65jmdhr3e4hel9xza8wd6t",
                            "bls-public-key": "a689b39bb1de4f1591e29094b91d00596b0f371ea16fadf8b4143c680a1f9aff3e805e167eda2c583827ed0e7c8c9882",
                            "voting-power-unnormalized": "0.014562300159046944",
                            "voting-power-%": "0.004659936050895022",
                            "effective-stake": "13499999999999600000000000.000000000000000000",
                            "raw-stake": "13499999999999600000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1s2k8p76yedjzdu9wqkj3pwrf72n453zhyssjhp",
                            "bls-public-key": "73b31b932c2d747e72ed74a033819fcfeb19328785835c44155a8fc49ef4d85dbadafbaebe132ce93a0baa5fcb588d82",
                            "voting-power-unnormalized": "0.010907594294686752",
                            "voting-power-%": "0.003490430174299761",
                            "effective-stake": "10111900000000000000000000.000000000000000000",
                            "raw-stake": "10111900000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one13uqaxe8wr2j3azj7sytv59ua0ff322auh270mc",
                            "bls-public-key": "b9486167ab9087ab818dc4ce026edb5bf216863364c32e42df2af03c5ced1ad181e7d12f0e6dd5307a73b62247608611",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1mwr4d2awwcx7f2n3c90lykt6r6sjv4agfn8k7m",
                            "bls-public-key": "1bf1ca37df49190578391d3c34cdb62cc9b2c88ebf5bbbe72a41db8da5236576fdb4513973045f23633a6ddd5a52488a",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ge9k4ryucjqmrpnv3nn0f5gy696qy0r8djawee",
                            "bls-public-key": "e55c39c0b3a05360dea4736aa05e1e0ddff8fb3f3de3d6a33d30017c5742d46d4420ba3e45b6acd6d1eeb4ced2e4ba86",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "13966808690000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17j706lucfndyf5celgpwru45cf0qn2yyqgsf6q",
                            "bls-public-key": "a9199bc02cdc1a6c268959f89d7aa5c0abcad899a8b98bc50cd1824bed0668ff34c53344e9be0f39b92df2f6eff26e0e",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "13863253405036000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one18ppxuzlyke23r22x5n46cjrf22fx58gl7ezy8e",
                            "bls-public-key": "402bd06197d11e1c9095f0f545b77614dca1c6a27fbcb03ffe95943746e6f475dec37fa50e6c1c5633dff91a4d349b09",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "804f4659bbd2c3615bb749bdd363395c6ffea3a3bb95364073295585477c17ccb9fdc4b0fb0dc7620a90c71fc4056012",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ryjmd93fadj280e6p6mjs8sl2gx49mvd8wzjxd",
                            "bls-public-key": "c4c90fd9a2d52d62569cab936ed3e7a758263fbc78c47983a96f8c9ff90bcdb32fdebaf1d06319b01334d44cf5246712",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "13669021117998000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1dsy63tatz7avdrl24y5clramvgur9hsarglcdl",
                            "bls-public-key": "8f77c124107705daa9f07c547be2512571d98365af80a76ca692d2bfbd343170eb1c542fa69def1ff3fdf58925c24396",
                            "voting-power-unnormalized": "0.013253592715887192",
                            "voting-power-%": "0.004241149669083901",
                            "effective-stake": "12286761000000000000000000.000000000000000000",
                            "raw-stake": "12286761000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1z0udzslh8pn082pnfhg9jx6ekwsem88v24k2v5",
                            "bls-public-key": "9f5f8c5dbe12d14ae8468828754c4db3f2129c69de88baee4e361e38000aed54da204591bbcdeeeb571ffff81e9ade02",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one15hvt2vq2hhh5parkgel5dcamhwcn2dlnu2kaec",
                            "bls-public-key": "73916ee014b31e12c48d45996e1dfac993264d5e99949eeab7a93ef74aaddaf8073d1a37fbb6f0ad1d86efb9567cd90e",
                            "voting-power-unnormalized": "0.013726118850171199",
                            "voting-power-%": "0.004392358032054784",
                            "effective-stake": "12724816989999000000000000.000000000000000000",
                            "raw-stake": "12724816989999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1esvnhtvek2ggz3e8fq6znejtpzgr7uqjaf8h45",
                            "bls-public-key": "200dd9daa86dcf89b18bd468e6e8dd2c59f0b50ef4194f463f7b02a86a381dd4cfe589ccebe43bba3144f04489f2d98a",
                            "voting-power-unnormalized": "0.011404235608822109",
                            "voting-power-%": "0.003649355394823075",
                            "effective-stake": "10572312000000000000000000.000000000000000000",
                            "raw-stake": "10572312000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1dkyjjf8s94nvml9rvksexlt4a78lu9u63ul8lf",
                            "bls-public-key": "477607bcaddd8f43378515e39917e9786ae5414769c811ab6bcdf1ac2a0e3dea313a3d88673468c2aa0600c7cb0d1b92",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "19359629444774000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ndzkyjg9aesmr5pl3vhpqufugvgs4mxme96j2f",
                            "bls-public-key": "84bcc8102ca3fb925d9672254e26029a9f0d6b4418037aad081bb9e2c8b0462b9812ae4c5f39f70998ef934c0f10fd02",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "15499998250688000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one19et0hagya58q9kc4ama7npp5ldtpydxpxg3528",
                            "bls-public-key": "9ace5f7b7226095aef39e6abe29cf09f21a7e834c6b82e76b1a3401dc2319e9a3e53ce2931dfcfc8b303e0c442943f8a",
                            "voting-power-unnormalized": "0.010812122679310906",
                            "voting-power-%": "0.003459879257379490",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "10006232000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one15cwr5yl9dq2yqw8slsxf2ezuagfz97zfvgyusp",
                            "bls-public-key": "2f9d7a51617a24e8f9659e20ec519885c24f75fad43a492e84a6c0b9ba0c0ab3aa74aee63dc0f03e5dfdc8aeb8ffd986",
                            "voting-power-unnormalized": "0.010812122679310906",
                            "voting-power-%": "0.003459879257379490",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9571849000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1mg5sc0lc0ps9qmal5fprk3788f09rwdqxehsnq",
                            "bls-public-key": "2c6281268374475e94f9e8dd8a078c21d6a3bf1be2b3e2dc4b1b497f89d881ac7cce008b18810adfa432fc4c617fd505",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1f5fae6ly754d3nsa25s99h0t6psdx2wg6yy33c",
                            "bls-public-key": "9e0af2d661d1362a95b909248c507092f8cc1c1dff653a9af8b6245f42898dfe570cce0a92d9931a793803cc3eae400a",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "16978722589999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1rx9qnp855d6atv36gkxwn9evt0j4amzp0fvck5",
                            "bls-public-key": "8c5d7d0ee1c4b24584880c908ac5c31eae07d6c5a5fe1dfc5778b34342237dcfc76716c060901d7e8d208396e4236786",
                            "voting-power-unnormalized": "0.014554175288489748",
                            "voting-power-%": "0.004657336092316719",
                            "effective-stake": "13492467827793000000000000.000000000000000000",
                            "raw-stake": "13492467827793000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1sv0s66ua6l82ng2t62fa5tlnk884n2gnrfnq23",
                            "bls-public-key": "2ff603b16c08f4c2f13ecec4f8184de176a0725cb71ca7d4915d94206115c8a614ae9c0df8b5fe0cb6ba3fa814764a02",
                            "voting-power-unnormalized": "0.014365646323622812",
                            "voting-power-%": "0.004597006823559300",
                            "effective-stake": "13317691796678000000000000.000000000000000000",
                            "raw-stake": "13317691796678000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one12s96xcv0d3vj7u3js84j6v4322t23996mqenwj",
                            "bls-public-key": "713c04a3b0a5e4f72238a86fffee54748f18f1a0130af73ed5ba67301ec9e282a438348fcf2a7ba66b60a7642439810a",
                            "voting-power-unnormalized": "0.013976020660216368",
                            "voting-power-%": "0.004472326611269238",
                            "effective-stake": "12956488799999000000000000.000000000000000000",
                            "raw-stake": "12956488799999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1npfgsk4qs0gg2x7tgsjazt72wxsw9q9k0y0568",
                            "bls-public-key": "f29d10d3700dc200a9b5cc063e19d9f8c57785304dc18dda170a09ff4b47772b0fa28f54e415f809d0bf2ba0c1fc2982",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "99899890347999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ma4dd2kqk4lvf8e9ddgl76gcdun3t9gydjdjwt",
                            "bls-public-key": "02e60595c0ae5a1766c5ac23b02f6220b237fd4e0f81144dc368a7681cdf56813017c8b1723122efad5bcfa9a78cc68e",
                            "voting-power-unnormalized": "0.010812122679310906",
                            "voting-power-%": "0.003459879257379490",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9524356054649000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1pgtnlatpnwl8laww7tc2f5qss6rjhzunwtrq5p",
                            "bls-public-key": "88bd80eaf033660d58d585da0dfec589815f5564b663dd216a4f8a920f3e86466add2b51b6252fabd919ec4b31a7b50e",
                            "voting-power-unnormalized": "0.014555384080438316",
                            "voting-power-%": "0.004657722905740261",
                            "effective-stake": "13493588439999000000000000.000000000000000000",
                            "raw-stake": "13493588439999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1jtq979pugs6484mpyz5ahvjgzcvv02sdclhg2n",
                            "bls-public-key": "3996a371b6790103534e5b9163d58f304b8cbd993e507cdb2894ae1c1356aab5c21bbb5335b3eb726f1d4aed6b8ca002",
                            "voting-power-unnormalized": "0.014101084496893890",
                            "voting-power-%": "0.004512347039006045",
                            "effective-stake": "13072429398442000000000000.000000000000000000",
                            "raw-stake": "13072429398442000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1wl3kppn0s8vn2shvjg6swyhyq5sc23cmq9u0sr",
                            "bls-public-key": "3d3e99618f79f96144d33e80b1517a46a65af719bfd9d06079105d1e28de197fac16195886d1967acf98046632753182",
                            "voting-power-unnormalized": "0.010812122679310906",
                            "voting-power-%": "0.003459879257379490",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "8257986692370000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one156l87txy4262muvmq3qcndwwlzt5tlk58uqvmy",
                            "bls-public-key": "ff6eae041955e6ce5f6e9ece59c7aa3f5d0c66ea8023cbf4afa1354565424d353718f1281d2b758ee3aff0b769e0c285",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1zhe0t4knr3asa7hvjv4zu5u64cjvj7uznp0vvz",
                            "bls-public-key": "a3a2287134bf0ab203f16bdf49ec04748b4ac7696803de6eadfc04ed901aa722afe57995bf8abb24644ccafb0bce7796",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "15015355961518000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one19fwj7f3e2kgz48cqe6vs43d6q08f5tpt3zhlu5",
                            "bls-public-key": "19092afa662abb802651b96eb8b20cf248edfa0d26bd0dccefa9d93fc7f9628224d3545cd1b710381a920b0b71d8ab12",
                            "voting-power-unnormalized": "0.010812122679310906",
                            "voting-power-%": "0.003459879257379484",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "4929048630834500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1v0dchgu5chzh2awpnfttdj27s8y6mhl6kyqlzd",
                            "bls-public-key": "13db6c25dca78002262f548c98c371566ed94bcaed28d3cac10671d9e8a7c81504fd7ff17f59bd9a1a1fe351a74f900a",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "89428019560951000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1gjsxmewzws9mt3fn65jmdhr3e4hel9xza8wd6t",
                            "bls-public-key": "842d27a14584d18fdf53951f0c24cc3a6a55ae0b4e639cbf9db15e675a6aa0f87819b78fb5d51ccf3b8bc2aefb47e186",
                            "voting-power-unnormalized": "0.014562300159046944",
                            "voting-power-%": "0.004659936050895022",
                            "effective-stake": "13499999999999600000000000.000000000000000000",
                            "raw-stake": "13499999999999600000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1qtxatr7lr87xyvah39vdc77j4agyd8323ucuq5",
                            "bls-public-key": "6986635b77c398241c9fc037ee38d49dc1a19d81c62d126aa26f66bd4e231c79f6ac53aeaaf949c69931da740c86b082",
                            "voting-power-unnormalized": "0.010812122679310906",
                            "voting-power-%": "0.003459879257379490",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9708792112800000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1c4keaqwlj8ljhdy6yzur5en40vnf3nzxv7qkda",
                            "bls-public-key": "0b4a1b26d04bd69f050620bc8902465ee1eb5ccb57ae4ee4bed5c75bb17fa71759eed179e39fe22f26f3db8234805596",
                            "voting-power-unnormalized": "0.010812122679310906",
                            "voting-power-%": "0.003459879257379490",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9594440000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1cpjqcv99r42m03xxvrflr549lqq6ktx7rddzkx",
                            "bls-public-key": "2d24f086b9cf9a7f3e934a9bf4bd9355a0aaf3b21c03d74725fe8253d01888bfa839eaafe5a99a41678d1d4750f2eb92",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1fs84nmfph4scmj3t8cduwqf7vpvs88279whxha",
                            "bls-public-key": "9522b29970238da7add130f96ceb7555c29f2e0e1529aee9186118e9bab6057a8ea190f9d310339d0960503c59d0e10a",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "14653027788460000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1cr5q35dwd2svwutwm3wg4tf6xpqn0xkt0qqh78",
                            "bls-public-key": "e3bf914f3a52dc1201710486f7914d9568061bec9e0d38fd6b518f34f5aef58c7c3f488c8901905ea6642c55501f1816",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "26015647918590000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1exusucsg5aw3kt4amh6quc786futqf0ycmfyrg",
                            "bls-public-key": "ccf101c81ffc71d686a9f92113fbf6a56c7c4db09cdc3a2bcd9526b1a24706d161634dbc4a50b14d987d371a59699806",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "17122239499999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1n0t2sxc02ss8jmvcxyrptruu69a62xj35a75jc",
                            "bls-public-key": "a36ba9f8e5226c0342d8b8a1bd782dc3daf39c69bad85693bdae2bbf99e77af17875951ac11bd19cbf0d1d3937ceaf12",
                            "voting-power-unnormalized": "0.013276601965510689",
                            "voting-power-%": "0.004248512628963420",
                            "effective-stake": "12308091755891900000000000.000000000000000000",
                            "raw-stake": "12308091755891900000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1frjlthpzmft0ufhlh5xjqw52xddxy3fyk7s02k",
                            "bls-public-key": "0c199a6a45e4388d92c6be4a7047dc09ba6a74ace4ea46c014f0239ae6943d3c1d07486ad77de0bba628e7f76ec69691",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one13mle5wuyn90cjhtkphyg5pdw5s4hy2fx9vnvsu",
                            "bls-public-key": "d0abf60762faaa469575bad17fe1c5bba858efe1196fc85d97f5cb6462dcffee2c731f7f22ee2f822fe2c7ef1e613402",
                            "voting-power-unnormalized": "0.010812122679310906",
                            "voting-power-%": "0.003459879257379490",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9267240000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one14h2358zxau3ptqmsfyrm65hr7emd5v6q2fvgum",
                            "bls-public-key": "b23aedbf896bf55b2787828c0488721ac8e8012eebcb3ca31ea0cb33596e98121eba8912904bdebe71ac77f7db6f1491",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1krus0q388f6yg6peea0mjwm4x42gvyyd5urn48",
                            "bls-public-key": "a4a75bfc607dd1bee6d60454309bb5fb4c9a48805bc514f29e56c5766e391545bc8d750011c6d1f4b12218adc7c15e95",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1he2kv2hv44krughkavnd5p9njannd50ckjfags",
                            "bls-public-key": "81109ca97ea1f1885bc84cc884f62b6a4322fa651f3dab1e67791b565a7229f44a07514b61222f3386450e6554ef9b86",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "27963813269999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1f470xd0f6yjtlvv0ml02cw0fhe6t7fp5r74ec8",
                            "bls-public-key": "385bf46c56a29f434ea17d38a9c4565881fa5463084782b8821734df4cbb6cbf6eab19fdb3f7bfb1f8429b2d3dd55a0a",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "19754928887233000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1hxqssk08xz96du0etpy727zxejqgs0yj0tjde7",
                            "bls-public-key": "73885355d436261e22de0529e198f0ff2f1d740926893a4a0d43478d6a21fd73f828013e85e93e20fcb69852affe990a",
                            "voting-power-unnormalized": "0.014022955708712287",
                            "voting-power-%": "0.004487345826787932",
                            "effective-stake": "13000000000000000000000000.000000000000000000",
                            "raw-stake": "13000000000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1920vfl67pucex2pfw059pylsfr8hpleal925pc",
                            "bls-public-key": "1c308f3dc327fdd3a22117789cb4c19203387b0e74d7f32e0cb4609e4afe8b72772c9963f7279290fb6c966a14bf090e",
                            "voting-power-unnormalized": "0.013514741141361640",
                            "voting-power-%": "0.004324717165235725",
                            "effective-stake": "12528859000000000000000000.000000000000000000",
                            "raw-stake": "12528859000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1uq442dvnqlk07cl2mtddxhd2mmuhlejxz2k5nx",
                            "bls-public-key": "0e1b7c7e68ff780fab2ffaf9fe3875e69673be3664b49b95d96ada91477435c401b03b8471dfb277d643884b33593c82",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1qrs6mmvll5h7mfhr3f8rxwlf627hhpfetheau5",
                            "bls-public-key": "1e083cc85229ffcb9fc6743bb91ead11b64be410e15b3af13c80b3c9bd51c99bb2ad48acd9ee4ca2c2fe3c07d8307b8d",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one14dx72ctzdfsxvsckjfwcqrl8uwdukddd877hqq",
                            "bls-public-key": "5df3a0f8666bb655371434054ce54cbaffce74f362a246b329970435099972aba9ee26a1c524d30cd379cb2795c7eb8a",
                            "voting-power-unnormalized": "0.010812122679310906",
                            "voting-power-%": "0.003459879257379490",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9421204480545800000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1l8n75pj8zmka0nxtqjneexf3p8l442g8xrxplx",
                            "bls-public-key": "e7b01b2bb0d947112dc90c256264cb4f584d80218cbb63a1bd2a4a684d6782e26fb53110a30ade33b40505de2c7a6f12",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "97604668442362000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "1f8ab84a6a98cb00399aa14938c0ca3ffbf3b83555c21559254e5a96047394cda67d2c97037a2ae1d44d6c32b3666002",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1nv2kkpmppsl3u4f3artyy24c9ptykkmmc643v6",
                            "bls-public-key": "351f04e4329c8e3a49ea956b8d85307a8eaf56849f20c0006e7b59346922c3e038a1fee4bd7cbf1b34551a0270b40710",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17ylqmsyzehvwwf2kx5kfg6ff0pydpeufgphvhp",
                            "bls-public-key": "946a2bd4fcbaea197a78fa72acb42233e2f3972871813f41fe2d19375ea276f38b84530b72afbada958d0b9b9b0d5f0e",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "95681941193606000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1f8hrk0l4a36hxsl8g6kqtg5ghqvzwg35s9y0sk",
                            "bls-public-key": "3774ee37c4f629346260edac71fc1ef45692accaffe60f02d6090b9ef91712f3bc8cdd355b1dcd06c4d2193d06e7f086",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "19631552779202400000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1jw7nlk68v6u4nw6ssrzy2nvrea4dxg4tea8u5j",
                            "bls-public-key": "31ba4affb8331bce3dd89b50ad7461064f8ffa33d8d681d17911efa9c1dae98948beb62c91d678806830d951251aed12",
                            "voting-power-unnormalized": "0.014628165977891226",
                            "voting-power-%": "0.004681013112925192",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "19318525170903500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1snuv9rgy4edcwaraf6tfk9wng3l29frpca8lk2",
                            "bls-public-key": "bbfa74d121b05e38c962af9c241336311d282abde49b7cda6826a53e1a44e62a75689ee71b68136af2b9e0425c16d903",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        }
                    ],
                    "hmy-voting-power": "0.680000000000000010",
                    "staked-voting-power": "0.319999999999999990",
                    "total-raw-staked": "927051348520145600000000000.000000000000000000"
                },
                "shard-3": {
                    "policy": "SuperMajorityStake",
                    "count": 114,
                    "external-validator-slot-count": 84,
                    "committee-members": [
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1upjqy8au5rfa70xwq52gvqsdjdcem5t44f8gtq",
                            "bls-public-key": "6c26de1193ce6a62b2683593a61c3c4b2d46cd383570dd289d8040dd705cc5fa6fbf608a9c0329e29016f78d84661b83",
                            "voting-power-unnormalized": "0.010763675384318274",
                            "voting-power-%": "0.003444376122981848",
                            "effective-stake": "10576617980000000000000000.000000000000000000",
                            "raw-stake": "10576617980000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1mhxpn2m2w22nuwr5gj7a3dv80p93kwnynrfepl",
                            "bls-public-key": "23abacb45b6c6566c4b2973709d7f514754811f7f82196a5aa1d5a904275ea722a59907c1b19c1278c692125d31d070b",
                            "voting-power-unnormalized": "0.010200666010543561",
                            "voting-power-%": "0.003264213123373923",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "4029096195000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one103frfx3zmeymel7uyrkd3t48gup2hkalknmj9j",
                            "bls-public-key": "072de8125621916a6f02fcd6a0a451ecbb3379b050c6b4098b2b0014f0afd7a4ad14112b3b4b221e16c31d6cb7665b11",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one18ms0urj0j4xv3vpxn0cp00wn70fddl64v8dqdp",
                            "bls-public-key": "7b565c693aadb0e7d0fb3431b1d9a1dac4b4fcc7da6c4d6e35a4ae7317efd27fdcc443a5d5f73dda541713d3d21da40f",
                            "voting-power-unnormalized": "0.013124510304227403",
                            "voting-power-%": "0.004199843297352769",
                            "effective-stake": "12896424939071000000000000.000000000000000000",
                            "raw-stake": "12896424939071000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ffw8maa9ff4ahjp3j6uy7qd2j4y8q2x8xrdk85",
                            "bls-public-key": "4f328a1326eaf8445eb588a86679ac4907d45e710e07dfff67fb36dd33e3f0023434c39248d249559fdd15466ac8938b",
                            "voting-power-unnormalized": "0.011100172242213009",
                            "voting-power-%": "0.003552055117508163",
                            "effective-stake": "10907267000000000000000000.000000000000000000",
                            "raw-stake": "10907267000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1hg4fnfu0g4v9fhk4nryluy7ylvf03dash5tufz",
                            "bls-public-key": "3a3efa9fce3b6a826b94a0abdc0f161d962c0c0dd40d9375e4306d017c76d3c0cbc367d387233883b1f872cf6f906193",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1gf2akkuad0sgmwwgta5d0q82g848z4rrmgm6ar",
                            "bls-public-key": "60011df3157bf63ae57646acca376f1f9898d80b80102f998aa241af7444e958651ecf29d143f3dd9107a5cc213eda10",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1znscqahk3rtpsudkdgrude0s4hlm2lwg2c8hw5",
                            "bls-public-key": "0d429fea2807ba838dfe01fabeca994b87ea89a6bdfa47847896e986fdeb441bb56232353db853bc0610ac56d12b018f",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "16566436626854000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ywrd5hrwf54dt7p6j3xjcas69xjeflxy2ejvv4",
                            "bls-public-key": "850b0487a61a00362f35129ff9883c54b9ab9e1a8088fa5b446c3680f44ad608cd17d6de700fc79312ede3a95b32dc8b",
                            "voting-power-unnormalized": "0.012224270474371031",
                            "voting-power-%": "0.003911766551798730",
                            "effective-stake": "12011830000000000000000000.000000000000000000",
                            "raw-stake": "12011830000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1syx0rmtttr8jehlxvnkpyx4hvrlevmcx3tcghy",
                            "bls-public-key": "02760cadc6ef3d3c1f8b66adbe182ebc252b451178efc168e856870311c8a7005c7060d28ea72c6c7adfab606989f413",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "22340355779391000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1yjtrsq78t02qgjcwn56x96kwkduwhmc8wnenfw",
                            "bls-public-key": "82c920ddfafe709488c6ccabd9087fe20a9cfe6f3003ae1595884ab3d47c99c2075d8068d2642cd3be3a361ba169b207",
                            "voting-power-unnormalized": "0.013031117836594643",
                            "voting-power-%": "0.004169957707710286",
                            "effective-stake": "12804655500000000000000000.000000000000000000",
                            "raw-stake": "12804655500000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one12f484m9f8d9yhh8va3sc09r8lwkcufu2flya2h",
                            "bls-public-key": "2c6cb2778d6c3459b75dc5a8fd7c23bfae25eaeaaef4d037ad19968b08c6f08b29fb9111fff3c627ef701f8a8e28b907",
                            "voting-power-unnormalized": "0.012134675031607446",
                            "voting-power-%": "0.003883096010114383",
                            "effective-stake": "11923791598894000000000000.000000000000000000",
                            "raw-stake": "11923791598894000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1rmsztmw3727yjuszwd484z8mvf9v6fkkze4r5s",
                            "bls-public-key": "bac85ed94cf9a029d6ea8497d345a3668a14b796bba4b7269d4d3026ff37800f931766e0de187c1d6275013671bf2103",
                            "voting-power-unnormalized": "0.010916431997489638",
                            "voting-power-%": "0.003493258239196684",
                            "effective-stake": "10726719899999000000000000.000000000000000000",
                            "raw-stake": "10726719899999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1el3arlc0dczjpr8crhufgszurt6hcmlm66evwa",
                            "bls-public-key": "8c0ec55728c48aa43c1a9836f988e847b48284ad6baf37683efa957b763cea5102b1feb7409bf404f970da27fa750997",
                            "voting-power-unnormalized": "0.011916202693493450",
                            "voting-power-%": "0.003813184861917904",
                            "effective-stake": "11709116000000000000000000.000000000000000000",
                            "raw-stake": "11709116000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1x48lqucxl5pn3956p7fx5vphszg6tylp9ty766",
                            "bls-public-key": "d975f041ebb45e2ebc6b04d2dab55a9c8d8cebf51ffa107015d9b3d58bdc6b421ca4a455ca6b6dcc4b159e13ddd2ea11",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one14ahhzt6zkcuwlkevgqa8j08axreakrqassnhyr",
                            "bls-public-key": "ec4bd019cf23b921ea4f96a2916f072168b2a7cc8ce87673dd2623b87177944a3f0c5ba6ae0802eec6f4b7f195e91417",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one18nnc68jyhjpr7w8kh9arq5j2026zhwt69pjvde",
                            "bls-public-key": "3074c2c46a0396d6720b4612a0641e29b13263eb4237ddfaa2317db99b8c0fd7e37a6b035c996265e82dd5c8286eb708",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1j6hg78slrsvq93n7xa0w7t857pu4vw4lmalnv9",
                            "bls-public-key": "10cb9229e88524b0fdd9659467e15528ae79330f06d0ae541827b77dca49f2a81bac0f849b07b78b4fac5142a0aee083",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1s5jcy0alpduv4ng4pz7u6yzxajk8usvxphkp3u",
                            "bls-public-key": "c58d8a8b3396b7f7ab6e6e7311a182a9d3a411cdc08e7eae35b9ecd46501a729d0d601afab024bd7dd5223ae098bfe97",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "38344302047376000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one10ld9ej7vmuf82wxc4ep4tjcx0m75h5fhkntm78",
                            "bls-public-key": "8c0b30de71543d83f77ebf2e68e980aa53c79879be6da479b1f0f0badc0bbc58dc0f24accca0b59adf01d703e6d6cc13",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "30072300670168000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1jpwryfv7z2dpedrlchg8z66gryhymwy6gwdk03",
                            "bls-public-key": "cfc6181d5b23b3b6fecc395c1b727ee12d0d35026cdc648942b427fbf28b12f5ed90776687fbcad5b9fdbcd8d4dad983",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "16082279307020000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1egemh5e9xjy3x8d3cq0kq7mw4sw4jjwgkc7axs",
                            "bls-public-key": "d90b4af4db279822edc6b4aa6a2b083512d0b6a873d8e71c814b7994e0f32b97f6a6d81d21344d7fa85e76f76af5e783",
                            "voting-power-unnormalized": "0.011700848541096450",
                            "voting-power-%": "0.003744271533150864",
                            "effective-stake": "11497504397180000000000000.000000000000000000",
                            "raw-stake": "11497504397180000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one184u853scm64f6fhaka93p4eqk25dr292gvdzx4",
                            "bls-public-key": "14d6fe69da4f7c85d15f06b6b93fe456a6a68cdfdabac18d395520444295bb616eda8c63d32df7ee17815b276e8c0b00",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one14xn25dqus5wgs9nkeuzm7uyf3rjqr5s7w72rv8",
                            "bls-public-key": "e92333fd7866a3802e902b18b72f97df92627869a8222d3dde533e07948e43ea3d9bd969ee7967b872bf6c0327e6ba80",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1n7twgx0x38najm8jvay5muglh0wxmv3j4ps93g",
                            "bls-public-key": "d276072c1f99a349c28b2b9a2e4184d9bc8df8912e0be9e6527749934fceef755d1ce15ba7eb0de8a80d9c9256189d87",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "99163187467985000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one149h38k3rt8m8gfaxxfn3zn43lqt6mzlvthcy5e",
                            "bls-public-key": "ab08be98ef02d0d0000eb21314121854ff9db7445aae41a7872be40d4fbdb1596bd70fbb16c96a582dae008370365f17",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "74347608499999950000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1t7p6nre40hq7z97anrf5cqug3n3776tn3as5ds",
                            "bls-public-key": "51d79e77275847d3d22c37172a86eb5810367caf35cff5b26d7ed56db0e4a92a12b13c347e4353a79a1111f8649eb887",
                            "voting-power-unnormalized": "0.011658231850873270",
                            "voting-power-%": "0.003730634192279446",
                            "effective-stake": "11455628324559000000000000.000000000000000000",
                            "raw-stake": "11455628324559000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1w5m99xs7dn3nfdxmsc8f5vjl8hg65dc2e5kp2x",
                            "bls-public-key": "1819d0789eb593764b7fe3f7f1a36aa113c0f1ffec14f146581e6451feeede5ff9e23d2a56c2edb7bd4f870e2b186c83",
                            "voting-power-unnormalized": "0.011231836588162385",
                            "voting-power-%": "0.003594187708211963",
                            "effective-stake": "11036643206451000000000000.000000000000000000",
                            "raw-stake": "11036643206451000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1k6ejnhwrlydzlua745avv9u0xmygerpl4xsr7v",
                            "bls-public-key": "0e0039fe4362333113f6a18fafdb7625dcfe708ae7ae7257bf2f8ec8ac775dd86636d83d66be617f939dcb6480ec288f",
                            "voting-power-unnormalized": "0.011150200563444875",
                            "voting-power-%": "0.003568064180302360",
                            "effective-stake": "10956425900000000000000000.000000000000000000",
                            "raw-stake": "10956425900000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1k6w6v432ztk8g360lwapd95q4fzjjm9wczyua0",
                            "bls-public-key": "6c34e759f76fa9c600202adf282aecc035c194ffbb7805c8322cf3fc074c1d3dfab9b1153b6901dd2c38503a04a46387",
                            "voting-power-unnormalized": "0.010200666010543561",
                            "voting-power-%": "0.003264213123373940",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "7762894992298500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1l9gddgsctsvv73ayuzns8czwdgxgy6ytv00j4j",
                            "bls-public-key": "7b2fa986cc6261cabb001c3f1a52ed55af814c7a44f08b01165d23c6bc75bc950beeca2da490c8262843269605b90b97",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "14019899131960800000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1cy54nt7chpmgpya0sjn6g6avtuhypuz88dn3ys",
                            "bls-public-key": "b87fa42b3c10fa896f5efcb3df29a2ebb341e51c79c06623c8315fe49503b6646b95fb137bf0dc969f1fb37308f2ac87",
                            "voting-power-unnormalized": "0.011919461018557437",
                            "voting-power-%": "0.003814227525938380",
                            "effective-stake": "11712317699998000000000000.000000000000000000",
                            "raw-stake": "11712317699998000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ma0aqp3evkn802s7eqw2qtpppvsxpfnw8mpuc8",
                            "bls-public-key": "420a7db834d090761b099a80cb2061220e06eb6ebca2962e00d1e1e0e66de64ed01a80d8673164f3736de2fb1416b493",
                            "voting-power-unnormalized": "0.010200666010543561",
                            "voting-power-%": "0.003264213123373940",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "8826825406052600000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one172alesnh6vana3ndwkhgu4nfazl9e5cwvnxtwl",
                            "bls-public-key": "5f7a2faeaa55f46a2b07164bc33a2d2569e05316b8c5f8d4757545342aeae8cde5cf30970aad748aa424871940b5818c",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1c8p90nmarr90j8vevhq9588a4pxh0tqctfmxeq",
                            "bls-public-key": "c47e65a0100104f29fdb034feeaa78e266092ae778a5be066c24682c351e994c7f8958a9fe3ce5feaaa64227fdeb120e",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17e50tsfnd0fcnyandw4vtknkehlq7gukkzd0r4",
                            "bls-public-key": "4d2b4a92b35454c3eb7f12a3724e668dad7c0094f209aecce21b2dce821ddcf7c6381ef44e853874eac1546f7154f983",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "82117228419762400000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1khyz6zyz3gzk8c5f9j76d5ng0rnkw6n75nwe0l",
                            "bls-public-key": "b5ddf57e56226de7d472e59071bd97a9c9c39e41f852d2f9cfbac9c540392465d7e4bfcdf38be777eed6199acbaaea87",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "16355537000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1fxtdau23qk0fl63e40g3h4nfwsj0k8uutx59qx",
                            "bls-public-key": "59b98b2f2ee7a192fc68c05c4af99028a4fbc8532ea56eacd47711fd193d55195826d1a247a054e41904a48b3176cd93",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "15685080193576500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1lrye4mmkld3a625ygvl8ulsmha3qzarmxny5pv",
                            "bls-public-key": "e7fb4c8bc46f4f317a0ed3b68c9692b64138b637f1da08d7b3b6d46203b07023aa6e647c19a36e331bd477b95e67b017",
                            "voting-power-unnormalized": "0.011488439781079446",
                            "voting-power-%": "0.003676300729945423",
                            "effective-stake": "11288787000000000000000000.000000000000000000",
                            "raw-stake": "11288787000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1twuxldpnwcafdu025jd7aa5r7we4j29ndtafuk",
                            "bls-public-key": "d5cf9cb52b9afb4f97997cb4830ec83e8471206d773d090ac2423bedb2175756ac315f32832822db9cbf74dff93ff10f",
                            "voting-power-unnormalized": "0.011973078346636436",
                            "voting-power-%": "0.003831385070923660",
                            "effective-stake": "11765003234999000000000000.000000000000000000",
                            "raw-stake": "11765003234999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one12lggt2syf9u6zy40kx5x74upwe9s766tmn8av7",
                            "bls-public-key": "70099d329cbdacfed3ffd7b4717386490e4dccdc9016bffe8bae5c469973a06e1c5c9fa900d09185f18f1e4f25ccb293",
                            "voting-power-unnormalized": "0.010200666010543561",
                            "voting-power-%": "0.003264213123373940",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9952777000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1xdnyc4c85vkh69am2wdd7rmcyzprmem5tnm9ck",
                            "bls-public-key": "30c41b92a7253f78050010ce4a24ad9ee0821420c12b1586ac56d20f14486b9167e2e400ff24251aac9cc309e69a938f",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "13884982968566000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1y3rrv8s2f6jyjvtyr6c5u37074z90gwnjadfuf",
                            "bls-public-key": "17759b3d922b64a8beac8b15acf05eb83ad587c7f7fd006ac9c5a187e0f40c0ad5155bc5af385cf72b0643931be39011",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1s5jcy0alpduv4ng4pz7u6yzxajk8usvxphkp3u",
                            "bls-public-key": "2f4b3a50a9996ca5fddb383ee01cbfe4824e2bcca4fe0dc1b8d2328203fb39d7cd04015bd9b97f70c15d4e9781d58593",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "38344302047376000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1seu070y2jpfuvz76vqpqry837jf8t6pm504f8j",
                            "bls-public-key": "72817a31165e7339410f85165ace34706005d22570646b77831f496fb9399fa9e8ef02a0535f2c6aba3a289e14b43b07",
                            "voting-power-unnormalized": "0.011999348646580404",
                            "voting-power-%": "0.003839791566905729",
                            "effective-stake": "11790816994408000000000000.000000000000000000",
                            "raw-stake": "11790816994408000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1keh8p8dw84jx5srnyvft3peckmgaurvuljhxzc",
                            "bls-public-key": "f52d35cc78db3eff64392b7746445af76680550c54c23c2ab59bca348b967ca6ad4e6419f67e9cdd3e6496e6e9dd0718",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1q3z4tgr42ylegju6tcvxmg30n234d347kuh8n0",
                            "bls-public-key": "2f9d9b9b9d906b22a3ee0071d9a0762dcf4cdad9103ab3c1c7a637386c04a7209cb1faa1e74334a0e1280c3d0ec91183",
                            "voting-power-unnormalized": "0.012617104370038930",
                            "voting-power-%": "0.004037473398412458",
                            "effective-stake": "12397837000000000000000000.000000000000000000",
                            "raw-stake": "12397837000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1dk3ul0r8l32600al7zql8jvemumj93myuaptkf",
                            "bls-public-key": "fdc88e22bdd90da5724d6ec8ad281bbe3c2891d09b6325b4cfbaa14666263393fd94b7df075832a3c431fd8ca6a6a78f",
                            "voting-power-unnormalized": "0.010493994096212907",
                            "voting-power-%": "0.003358078110788130",
                            "effective-stake": "10311623369999000000000000.000000000000000000",
                            "raw-stake": "10311623369999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1n4zfs2hhfsffekg3cwvkm2s0qs8d44z7nlxkwu",
                            "bls-public-key": "44ed7b6a7c29731e7b753feef367f08da97966ea56c3a8efe13b6b67a5c200132cbe4fb4946615de62ab52e14ef4e487",
                            "voting-power-unnormalized": "0.010200666010543561",
                            "voting-power-%": "0.003264213123373940",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9545872610000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1sy8vg3lxqez80c83ed845hf39mjjm8yhv0vdzh",
                            "bls-public-key": "c68ca2df8c1c386b57368df035efd4eed561e760e0556665bb04da2cd41219db5a27b5f6dea0294a91eab93ae03d8302",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ssm0ea54n5f39p59ne22rlq3nzgw6uqckusscj",
                            "bls-public-key": "fcb6388c0cfcd6a89578b71c8257a4618c74cf834bc1a7c280727f6fdcdff1cfb047b1f2db3f8e0a0da6119d881a9293",
                            "voting-power-unnormalized": "0.012583296843195925",
                            "voting-power-%": "0.004026654989822696",
                            "effective-stake": "12364617000000000000000000.000000000000000000",
                            "raw-stake": "12364617000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17zp5fnhea4fs8pyhv8xjkd70trql0lf5snva42",
                            "bls-public-key": "95ab15bead323bcf24a02f05b0f715b37944e1385679c9f2de8c108809933706e92f312bcd54a43571cf2f64a227558b",
                            "voting-power-unnormalized": "0.010200666010543561",
                            "voting-power-%": "0.003264213123373940",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9936274366000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1xpezw8k5e76t0jntvlgtug0t9wdzletvnl7r9f",
                            "bls-public-key": "b59da657b3f0acb84214bdafb4a493c37659a2dc4a2d43aa3316c31b763297608d3b1b37adcd326a5cc5a1a845e46b0b",
                            "voting-power-unnormalized": "0.010200666010543561",
                            "voting-power-%": "0.003264213123373940",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9355258362237400000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1k6w6v432ztk8g360lwapd95q4fzjjm9wczyua0",
                            "bls-public-key": "abf2689fcb4593ce9786d22e0858dc816498e4d5124b207445a6d3ccfb7b1621e81e7395fa1a400f35040ec2d9fc8383",
                            "voting-power-unnormalized": "0.010200666010543561",
                            "voting-power-%": "0.003264213123373940",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "7762894992298500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1h2d5l42krpdah38znp8gh25p5x7vcx68vxtuqr",
                            "bls-public-key": "1e91e8bc6a1071172dea3f905a65ffdebde9eb6f892c54bb8c7255b2f42b7c98cc9be9b19bdd2a7604d2822dd3c94d13",
                            "voting-power-unnormalized": "0.010200666010543561",
                            "voting-power-%": "0.003264213123373940",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "4630620497286000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1zxnkjncuxtt5u8df4hg4cxcwa3anqk6c2chz59",
                            "bls-public-key": "ae8b1b2a5e9de95db0e1028c1161ea952870410b428c16f318b0110cd6939b8d8139201ef89ec56a9f1e56fcb54e438f",
                            "voting-power-unnormalized": "0.010200666010543561",
                            "voting-power-%": "0.003264213123373940",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9272877000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1vjywuur8ckddmc4dsyx6qdgf590eu07ag9fg4a",
                            "bls-public-key": "b7aec767534872af7c905da7318cddf2248b0834ec1d64944ad725878cca0833f14cd3b2f7f01b6f041d573fe67ec299",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one10cwk8hfq5nr4u20jht35flukvtceunxcu8mw7y",
                            "bls-public-key": "b72bb57bb2e03beba80a03ec24ef3ebd9c91bdcef202ab0eb8c82119273c73e294330c6e1ba2ccb7d5fc6923f7784687",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1z5uz7d80leehn85yz77yucmr3sk9kdz56vcpg6",
                            "bls-public-key": "aad331aa5cfe5a58235cade19dde712b9375a06d20ccdfe7901a5618db6a21d75d6838781a32b6ecc62c814146a28f13",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "20004798671280000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1qdmxqgru6vqv5v2u0jhjvgyl4n7c4a550mjtmz",
                            "bls-public-key": "7ceb83d3af19a92cf74eef4ecfac8e3b9699789499eada1c2622f7497a6f082f83d0a5d6baf4e73274320409b505f18b",
                            "voting-power-unnormalized": "0.012517537030972921",
                            "voting-power-%": "0.004005611849911335",
                            "effective-stake": "12299999999999000000000000.000000000000000000",
                            "raw-stake": "12299999999999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1xg9tvmlgnhphfcn0j7t46eswyl6hucshg8th8a",
                            "bls-public-key": "35088a568fad16adc7b96e0f5923c3dc6793d9090f0640b9bf5abb7b8f1bd5294dd8552518cac466ca85211c7d71120e",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1c3l67kwzd2pzre55mqxs5pmpx8l3utas8cpq0p",
                            "bls-public-key": "0c5cdcef8f96df89bb8dc3db0fb243644bf142ea845cf062a4bbe833eeadbf159c12b52b2b77b71559a9874ef834418f",
                            "voting-power-unnormalized": "0.011713371259205204",
                            "voting-power-%": "0.003748278802945665",
                            "effective-stake": "11509809488218000000000000.000000000000000000",
                            "raw-stake": "11509809488218000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1920ku8c9uerwyavk9hnxgpdshak7w7dn9gm632",
                            "bls-public-key": "2e19dd61de8d74a9e4e571af05a9c597949a146da8cdffb1e53a836522fabd6fb8ab733f164763efe17a2b94db7a1193",
                            "voting-power-unnormalized": "0.010857600259344537",
                            "voting-power-%": "0.003474432082990252",
                            "effective-stake": "10668910573979500000000000.000000000000000000",
                            "raw-stake": "10668910573979500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1tmp0rda39a4fv0ajal0c2ahtf2pt3mz5vgsn59",
                            "bls-public-key": "2ac1cd49ebc0cb1c8a49cd90c41a555a7413f13252255ad68065d6f55cd16129876f4af22febf95b1a5f6766dbe90883",
                            "voting-power-unnormalized": "0.010200666010543561",
                            "voting-power-%": "0.003264213123373940",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "4609479000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one14pkx9aqrpeygamrtxegx8hm4jwvf904422f000",
                            "bls-public-key": "11e234fff630d4d86f8b2fb2597a7b307ef81962224421874b34a8089ad90d49e83d02e28c3a4f5430fe7be6a3138187",
                            "voting-power-unnormalized": "0.010200666010543561",
                            "voting-power-%": "0.003264213123373940",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9919590000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17k45klp4p67ej0kmt38jjka0ne4aweu02rp8ke",
                            "bls-public-key": "a0cb32aec7eceffdcb7e0c4bc2b7254cd3eac9d6e7e171fdc2bbe8f7346418ffdd0a646b0ecf6787de8b1a37c567c407",
                            "voting-power-unnormalized": "0.010200666010543561",
                            "voting-power-%": "0.003264213123373940",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "8815668000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one13yp54e9kynzw57g42878vhtrzu2hfw3nn8gy83",
                            "bls-public-key": "88b4da322731de51da65e6d2faba85782fa517002f6177c19932c10767cc6cef922ee17f7e46ff00424b8ffe4afeb291",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1p5jp6psqfy4hg3arswsxpyfxnrmrj64te3tuxu",
                            "bls-public-key": "8f657775630e2f58fe7fc679fd5827705eb19ad1ea47c78d3d5ac544ddc8d2fa0aa542bafd350d4eb7e9c822a89e3006",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "db66379230ed5b875d7f71b98c922a43c1d2a93a65013badaa2cca1a35ace401d37cf81ee54db02be961593ca535b507",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1yryvqzef37wyn4z8fsmux38t6mgaqyk5hvlqj5",
                            "bls-public-key": "33f2b540ead4c53b1d998539e6364558cb0aea657234c6dc6d04f07decda418488fa90116dbfbdd8950ece48ca278b17",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "13611518047196000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1pgna2zyqmwr4u9qwwfvpce40v3z6amylzhxe0s",
                            "bls-public-key": "3d37406a97787c13abf762398387f71ac8bd8d7dacb8c3412e442d85c8b6e49ebbe1469dc079713897545dc03864f897",
                            "voting-power-unnormalized": "0.013004590697498673",
                            "voting-power-%": "0.004161469023199575",
                            "effective-stake": "12778589364939000000000000.000000000000000000",
                            "raw-stake": "12778589364939000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17xz463re6h6hfpj28s6xgrx7eacec3yppfgu3u",
                            "bls-public-key": "f92c5631824378205ea2423fbe0a820ab3345a4af120a87236e6228c0a75287ac33ca1156e05abbed3169af8f49c1383",
                            "voting-power-unnormalized": "0.011189849940406239",
                            "voting-power-%": "0.003580751980929996",
                            "effective-stake": "10995386227053000000000000.000000000000000000",
                            "raw-stake": "10995386227053000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1gm8xwupd9e77ja46eaxv8tk4ea7re5zknaauvq",
                            "bls-public-key": "8184ae3b4c83756ae70e31db625fafc021d07b189140391152ad19df11841e920b93ee3ed71f8d498f3fdc570f415f93",
                            "voting-power-unnormalized": "0.010763674386986055",
                            "voting-power-%": "0.003444375803835538",
                            "effective-stake": "10576617000000000000000000.000000000000000000",
                            "raw-stake": "10576617000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one14k260sxkghzm7k8lnj46lvvk45fdcw667h39mp",
                            "bls-public-key": "78fa7956131032aea66a9485479f3cfd03248bc78d8883a9a02efb647eb5a6f1386588548eba06d4014ccda22309b087",
                            "voting-power-unnormalized": "0.010271623236215657",
                            "voting-power-%": "0.003286919435589010",
                            "effective-stake": "10093117000000000000000000.000000000000000000",
                            "raw-stake": "10093117000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one197tkyzudh4swfnfwj249s3qy2jfjh7nu3slvr9",
                            "bls-public-key": "f43a6eb6ea542bde832eab829e42d733c4685793d844b4be5bffec10ebe74c3ca680f0efaef6c9f57f7fe589505ada05",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1t9ummhthtnfez6m0523tyu86psmr78v733smfx",
                            "bls-public-key": "ab7df3e38a8423c31f8dd40d2952667bff711c9d00f717e528ffc661d1d26c3b431f403eb1c360a767fc8ad7fe2b3991",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1r6thhh5qzpyk58ddcguv5jhq6k6jh4lqhmwnqk",
                            "bls-public-key": "e2b812729d73a3e4538ec19cc2a8ba694660dc6eca53531026b6e6a3d119de7de43ed994771457211f581600c7488c05",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1pul5cd3hewakyfcewdn2m2xhuk7w0ese9u733s",
                            "bls-public-key": "24b8ea2a66cde6a6e405426117c556f133131cb628fb0a4938a59f52fa69181cb58674de1f3064c76b8883d66eb83f13",
                            "voting-power-unnormalized": "0.010577814506609841",
                            "voting-power-%": "0.003384900642115149",
                            "effective-stake": "10393987100606000000000000.000000000000000000",
                            "raw-stake": "10393987100606000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one159c8eq2a3282nhq2ufvwv72f82ja7qyl2snvh3",
                            "bls-public-key": "b1a7b73f93cb461f560d1f6dfe1149084746a20f38beb91045574df610661fb95b806039ad310a262a620f1235dee093",
                            "voting-power-unnormalized": "0.010287417721965309",
                            "voting-power-%": "0.003291973671028899",
                            "effective-stake": "10108637000000000000000000.000000000000000000",
                            "raw-stake": "10108637000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one12lh0hgsken9x7c6h6rwlmwk7j3fpl8rm9ws5pu",
                            "bls-public-key": "425240abe5de3d1878bed335d91e2ffc4e41606c45fb5a6edd4ede1b3f255fc4cf23f530a7160ac027ad42fb0f200e89",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one19usg0jpgp0rkkexxw57zdwf20c32mrmhdcdj53",
                            "bls-public-key": "6aec97cccb934f6c50c60737be830c92f480f2fd1106c0f9c910dfee0cfa458dded98e6618a500bc4f9b833c1ab20e95",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1le0asa2lmwg44p0h8sfyq9d3pwgwtpx7xvmnxn",
                            "bls-public-key": "01d4cb04100f31ee36cd95de3e2961d4611916438f5fa514e15ca139313b4196c02757af613b763b001f9402df853493",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "99969772112039000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one15cazch6k02clu4eqzw92mgk6l639sh9qpcx3ma",
                            "bls-public-key": "db6c36c33142c4f7684c2a56d8e970a5681951112a13fe8c41df278ad58e5aa7d384673c434e8e3d3ee269f4aed9d417",
                            "voting-power-unnormalized": "0.010555591904717244",
                            "voting-power-%": "0.003377789409509518",
                            "effective-stake": "10372150696000000000000000.000000000000000000",
                            "raw-stake": "10372150696000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1v8hcjxmstels4q02fxd7as8jszal9t69zchntf",
                            "bls-public-key": "15e5b5b1b455d8814d8986f9fd00bd64e897506c8e958bbbfd6f43e2302837ab625096f19f05b751fceac5caf387f483",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one102xvs5la4wfe9qut4nz76mxm7c3xx3jn4u95xx",
                            "bls-public-key": "5011e24ce96c2ecd77fc46bad5bb025eca84e24b92c263bfb10360264a53f4aee63ea33b7d5ecb7513616084f9fb650f",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "16880692586445000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "84ad0dc35bdb6ab51c70d7f65a38b1e5230fe451fa895938749c1732c109f6fac7e4107ae44961ef1280c96dedcc3e13",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1td5wvcfwv6zp4vmttl7657jkun30z3dhl5d222",
                            "bls-public-key": "61bb7372fb38bf661b382b8a6bc0c29009cfe7612bd886458f03d12097c24bb18198a6dc61a73005096839706ebf0c8f",
                            "voting-power-unnormalized": "0.010200666010543561",
                            "voting-power-%": "0.003264213123373940",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "8572740000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one15nr9mha7fz5w2kx2dd7rfnpyd2j68h5dsexrt9",
                            "bls-public-key": "fdd56e007ee3c4add8c737424387445423f5574da2961e5eec51c89c82f40a5b360f7e3883b40bf012c84ef4a2b7648f",
                            "voting-power-unnormalized": "0.010200666010543561",
                            "voting-power-%": "0.003264213123373940",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "4465685998925000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1mmnz9gyuuasz529mmtzc32cs7vpvadd05tp7uj",
                            "bls-public-key": "3434351415d20b3b4a5014b9aca44703dfef332e50e008a59ca8d1f9bb41b0ea695fb74a0f9e346138a429d08c24c793",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one140tj68zjnmdyhf6d9pst7m3gxgxn6kvknrfhwn",
                            "bls-public-key": "55ee5b8742f2e35a7b0f02d9ee644d18046ab988c2e82810f39fed22ba02bc5db9a72c8a2a0a0d6e9f89a3ea09e1440e",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ng4agl0mz8a58v86ap77qd3d5kc0q2kprptldk",
                            "bls-public-key": "af8cda6748c00cde2ecea66566adf9ccae811458a83ba33aedd9799f62ee5b092596919f32f36576b02f810d13102417",
                            "voting-power-unnormalized": "0.010303305319872124",
                            "voting-power-%": "0.003297057702359080",
                            "effective-stake": "10124248494000000000000000.000000000000000000",
                            "raw-stake": "10124248494000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1jv4n6rxsg8puxzaelvsymkryupyuezt05rk36c",
                            "bls-public-key": "24968b953506079535cb6bb95f4a1438870ad72d9be1d7ccb29fec672cfb63587b282a4e70759c41fde136aae3e5068f",
                            "voting-power-unnormalized": "0.010781714803830109",
                            "voting-power-%": "0.003450148737225635",
                            "effective-stake": "10594343899999000000000000.000000000000000000",
                            "raw-stake": "10594343899999000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one18syyn5nsuu9yz6nz0uuuns6587cwqnqex58v39",
                            "bls-public-key": "e5ac12e3545eba42d11d7440796745a52d3af8f3f4aa1f657ac4153f3ec00ea055fbe6f65f1d17f481dc4881e6e03197",
                            "voting-power-unnormalized": "0.010501979839921642",
                            "voting-power-%": "0.003360633548774925",
                            "effective-stake": "10319470332814000000000000.000000000000000000",
                            "raw-stake": "10319470332814000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one12a9taz0rphrfvde06af0w9hklt5efn79jk70jg",
                            "bls-public-key": "5b2456a10ed7538205aed36254eec816ceed1862eaaaa2771dbf4086ca907e6f99d9d21074391f2e4bfc3633b38c7b82",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "00d69ce5ccd22318af8d0eaee58b04aadd6f55cd7c728b1a45b1620aa6044b22f29d809a17554d0fde4e6bcdefe49e97",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one123qhn8m0amf7ap80gplf68eae5923lu2ltpupe",
                            "bls-public-key": "4077687225674df0113810e1a5d9d374e792c37884a255aeceafd0d721fa3e62dce471ac1464463fc3f0958451515093",
                            "voting-power-unnormalized": "0.010889238513323911",
                            "voting-power-%": "0.003484556324263652",
                            "effective-stake": "10699999000000000000000000.000000000000000000",
                            "raw-stake": "10699999000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17c6r80qvp9xthqq38e98gzq6qjma9svj63y927",
                            "bls-public-key": "a78144701f6cdb7f526ed4e0a1c8fd5adcb90ad4340fca1607b6fd3144080f2bc2bb05eadc82d1ce6b6b235bb2e5038f",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "13673488102600000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ecp9htmq8csm9wzhgshy24rz3f8facpzdw7zw8",
                            "bls-public-key": "a716b28f9da3cb58ef662199cc408fab6ea31a4f96c31ac63a2236d8986359209cbfda2e7b32ea2b00b03c19f7c8df13",
                            "voting-power-unnormalized": "0.012013493413250842",
                            "voting-power-%": "0.003844317892240269",
                            "effective-stake": "11804715945105400000000000.000000000000000000",
                            "raw-stake": "11804715945105400000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1fv77qz6ngvuvzhqzg9m0mqjx6d32dqwzqf6e9r",
                            "bls-public-key": "ae7a9cd8613dda5c3a385c471fe1908246d39228bfef1b1a7092b3798fb833acbb4fb0c31576e5d9e3156e48e6be5b0f",
                            "voting-power-unnormalized": "0.011484766952531090",
                            "voting-power-%": "0.003675125424809949",
                            "effective-stake": "11285178000000000000000000.000000000000000000",
                            "raw-stake": "11285178000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one19fwj7f3e2kgz48cqe6vs43d6q08f5tpt3zhlu5",
                            "bls-public-key": "b3f88974af22ec352fee49aae74eb5d6910e301aee5724d56b4a344b6ca2a379401ac3ca91ea076e509019421a211a0f",
                            "voting-power-unnormalized": "0.010200666010543561",
                            "voting-power-%": "0.003264213123373940",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "4929048630834500000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1fn554v95gw2htufxpyrk6r2wejr46gx0ewwpqn",
                            "bls-public-key": "5986458048a5839d14c93a248de63e121df1cbc2b2b93282156566870d5d3f7cb5f90cd6a41a7b8ca34101c62951060b",
                            "voting-power-unnormalized": "0.010306571520828545",
                            "voting-power-%": "0.003298102886665134",
                            "effective-stake": "10127457933018600000000000.000000000000000000",
                            "raw-stake": "10127457933018600000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one1xuxwzhaf7tmp850dckr2pxqjffh3m6gm24h59g",
                            "bls-public-key": "62c430b232e99d9e1a45e4653f9849096184487d327570e9173a990f122a0f757131e864cf822ce68eee431e4f86d509",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1c04stvq5q9xcuq9ucrlxrg9n6hu68n6ansu6vf",
                            "bls-public-key": "b8c18bcf8126343a4a97b24f49f6f6f61e27417c175941f59a46a0b89313863dc341a7d55f8621b7c563f06f9ade0003",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "21475956361454824000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1na892u23tfx43xfp0gep0fxkut0hswjka7r79y",
                            "bls-public-key": "c2cae6e2f2ebe3a445bf1190402955a3f3f0aa79bd981110565d5a863a28c93c43fbb700ab1091fe5593f3c08805468b",
                            "voting-power-unnormalized": "0.012099737263887840",
                            "voting-power-%": "0.003871915924444109",
                            "effective-stake": "11889461000000000000000000.000000000000000000",
                            "raw-stake": "11889461000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one17s02lunsym6neywxrf7c76f2k489kxg4v77e5j",
                            "bls-public-key": "bcc8e0cfd8c5a9b93d7596be630d320493830d8c381ed357fdaa54e554a945ca562e4980be13adb9b5c3570173542a8b",
                            "voting-power-unnormalized": "0.011914677182273171",
                            "voting-power-%": "0.003812696698327415",
                            "effective-stake": "11707617000000000000000000.000000000000000000",
                            "raw-stake": "11707617000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1yl4kcfqn6e58srfzf29uhss3u7arrmvtxy8tuf",
                            "bls-public-key": "415afe0102e4b3a1162eae6f6ba430b3f57fc3ce3d460ae35205ec3446eb4b3b2d23393a7a934d1e6163f6a63415e597",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "99895762545293624198796066.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
                            "bls-public-key": "2fb1832b89450c8f6cf78ea4075aea489059f43a5b4cee418d8e30675238235ef6aab40219e7933bf827cbe14d18230b",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "32499992735347506250000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1j3nn4wdfpju0d6zynx9cesjqmzrfwru0fwrmdu",
                            "bls-public-key": "f8ce1446daba5d62121c05eb87395b974996ca09a08b7c10ebe0ac5baf1c6c419b14d16badc2886d8789803230d7400b",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "22179024153314000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one18k6qtls8wwhw0v2kjl9lsyktrx9myyx26ey28j",
                            "bls-public-key": "ec43375dd33603472c859011e46b532070369c01b32db32ecd4184f53e7ac299b13f1743d8cd37d24ed8efd0b53b8993",
                            "voting-power-unnormalized": "0.010200666010543561",
                            "voting-power-%": "0.003264213123373940",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9999325200000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1dusx2pe9urxj5am753c2szwt3p0mna8rj7adxr",
                            "bls-public-key": "c6e983e80e8a0614aac1ac21effa5f43020881041a71654cb77aa7cdae94422b4deedd84203ed9a52c07a10e4c013717",
                            "voting-power-unnormalized": "0.010200666010543561",
                            "voting-power-%": "0.003264213123373940",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9924157000000000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": true,
                            "earning-account": "one173kc6tzq8mjafpjzme4u4rdhf3pn3j8cwesl2m",
                            "bls-public-key": "c2f66a6948be4f2747f5938091898357f96839a8a6766c1be80f989fd1e85fb7eb9b744aad6d6597445bc09d5ef7a916",
                            "voting-power-unnormalized": "0.033333333333333334",
                            "voting-power-%": "0.022666666666666667"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1ykgt7kz96emc7avsv6ca6czva9guvcg807eray",
                            "bls-public-key": "df8323b00d08177c7cbacbb1d633ced7962a82759b4828781cc132fcf97d9e45d9377fddc64da65802c2f6c79c3ecf97",
                            "voting-power-unnormalized": "0.013800901073088347",
                            "voting-power-%": "0.004416288343388271",
                            "effective-stake": "13561060996180575000000000.000000000000000000",
                            "raw-stake": "25482741896829000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1c0w53749uf70lfzdehhl0t23qdjvha0sf2ug5r",
                            "bls-public-key": "e552fbc280760d89e9f09cce27fb15223a9e45071f40cc03eb56a17613988214b7b6b0c8603237c55cddf47f11820187",
                            "voting-power-unnormalized": "0.011302465535540999",
                            "voting-power-%": "0.003616788971373120",
                            "effective-stake": "11106044722948000000000000.000000000000000000",
                            "raw-stake": "11106044722948000000000000.000000000000000000"
                        },
                        {
                            "is-harmony-slot": false,
                            "earning-account": "one1y5n7p8a845v96xyx2gh75wn5eyhtw5002lah27",
                            "bls-public-key": "f882f6c609eb79a351150874afd5d08a0dcb8a1b510ee5875b0dd51ffe5b569c9d9d733b870dd0a9408d7957bb207513",
                            "voting-power-unnormalized": "0.010200666010543561",
                            "voting-power-%": "0.003264213123373940",
                            "effective-stake": "10023392910220425000000000.000000000000000000",
                            "raw-stake": "9993117994000000000000000.000000000000000000"
                        }
                    ],
                    "hmy-voting-power": "0.680000000000000010",
                    "staked-voting-power": "0.319999999999999990",
                    "total-raw-staked": "982621419019120525000000000.000000000000000000"
                }
            },
            "external-slot-count": 320,
            "epos-median-stake": "0.000000000000000000"
        }
    }
}`)

// last epoch
// console.log(obj.result.current['quorum-deciders'])
console.log(
  _.sumBy([0, 1, 2, 3], e => {
    return _.sumBy(
      obj.result.current['quorum-deciders'][`shard-${e}`]['committee-members'],
      elem => {
        // if (!elem['raw-stake']) {
        //   console.log('error', elem)
        // }
        return elem['is-harmony-slot'] ? 0 : parseFloat(elem['raw-stake'])
      }
    )
  })
)
