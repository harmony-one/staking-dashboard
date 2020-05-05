// hmy_getMedianRawStakeSnapshot
const _ = require('lodash')
var obj = JSON.parse(`{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "epos-median-stake": "11792226953200500000000000.000000000000000000",
    "max-external-slots": 320,
    "epos-slot-winners": [
      {
        "slot-owner": "one1hwe68yprkhp5sqq5u7sm9uqu8jxz87fd7ffex7",
        "bls-public-key": "15dad6a28f96880c1462e9afa7745a9e65fdc971c981813847a0e4d00849b476c18c1ae9b1d75126b158eeeb21f08910",
        "raw-stake": "283699908324705500000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1cpyxfht07yj3sug3mk7ymk4rd6e5u9w62f8y74",
        "bls-public-key": "0ac6418533bf747db097810ae93245d1ac1b4fd55cbcdf08669721f182edc4ed37d73690d8764a801c29bd1f54267381",
        "raw-stake": "190222936068390700000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one19e8qg44vd26u7pp7nyp7ewgr8nqewwz57kwd2u",
        "bls-public-key": "941a8b18993f238f84282fd2cfaeae92349f20c0c077f7e6ea1e239f5b7512c937a48656e0113aa93ed4f9b9dfa91d89",
        "raw-stake": "100000000000000000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1vjeljc4p3kr9va9ckfjsjfxsz6aenl7a0hnz2d",
        "bls-public-key": "fff0e3c33a7ace777780577f0241c9943938f73ef73c6d38249454e0703b4977aa0ff2e2d1e0e4fddfa121a24f0d7b99",
        "raw-stake": "99999999650055000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1lq4dln5lhvfnp6z8m4cmnmqrrxugkefrnsj8at",
        "bls-public-key": "76fb43d2f9963f4cca0e08aa7f5f6ab0cc6232f6f26a7e2a20c2e1184ef9d88543f22e5ef57d66afa4391d95e15c3796",
        "raw-stake": "99999066533522000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1le0asa2lmwg44p0h8sfyq9d3pwgwtpx7xvmnxn",
        "bls-public-key": "01d4cb04100f31ee36cd95de3e2961d4611916438f5fa514e15ca139313b4196c02757af613b763b001f9402df853493",
        "raw-stake": "99969772112039000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1npfgsk4qs0gg2x7tgsjazt72wxsw9q9k0y0568",
        "bls-public-key": "f29d10d3700dc200a9b5cc063e19d9f8c57785304dc18dda170a09ff4b47772b0fa28f54e415f809d0bf2ba0c1fc2982",
        "raw-stake": "99899890347999000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1yl4kcfqn6e58srfzf29uhss3u7arrmvtxy8tuf",
        "bls-public-key": "415afe0102e4b3a1162eae6f6ba430b3f57fc3ce3d460ae35205ec3446eb4b3b2d23393a7a934d1e6163f6a63415e597",
        "raw-stake": "99895762545293624198796066.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1n7twgx0x38najm8jvay5muglh0wxmv3j4ps93g",
        "bls-public-key": "d276072c1f99a349c28b2b9a2e4184d9bc8df8912e0be9e6527749934fceef755d1ce15ba7eb0de8a80d9c9256189d87",
        "raw-stake": "99163187467985000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one18tflcxt67uar3wtvvlwuae3jux3m62vq92wkam",
        "bls-public-key": "c412add5d19b3e40491808d6cef958eb9e4a1e7770cc5b8046870f6aab078c9aa4d3f8ed8396e4d18af83faf0e5bc70c",
        "raw-stake": "98089542452727300000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1l8n75pj8zmka0nxtqjneexf3p8l442g8xrxplx",
        "bls-public-key": "e7b01b2bb0d947112dc90c256264cb4f584d80218cbb63a1bd2a4a684d6782e26fb53110a30ade33b40505de2c7a6f12",
        "raw-stake": "97604668442362000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one17ylqmsyzehvwwf2kx5kfg6ff0pydpeufgphvhp",
        "bls-public-key": "946a2bd4fcbaea197a78fa72acb42233e2f3972871813f41fe2d19375ea276f38b84530b72afbada958d0b9b9b0d5f0e",
        "raw-stake": "95681941193606000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1x2ge0efu3mv56mpndzsrwtd62d24qtshkmsp56",
        "bls-public-key": "cf8e8ac33008ba6f286a276e07a08cb75683499795cf05078c176b51b1b8aae43276e39b5175ddf898c595e890146011",
        "raw-stake": "95158633699998000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one17e50tsfnd0fcnyandw4vtknkehlq7gukkzd0r4",
        "bls-public-key": "4d2b4a92b35454c3eb7f12a3724e668dad7c0094f209aecce21b2dce821ddcf7c6381ef44e853874eac1546f7154f983",
        "raw-stake": "82117228419762400000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one149h38k3rt8m8gfaxxfn3zn43lqt6mzlvthcy5e",
        "bls-public-key": "85dde30f23ffd30b511582550a20d675e96beaf348af5c1401eaef69e8485ac867cd78e9d4e59f42d9c65b8ae4466981",
        "raw-stake": "74347608499999950000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one149h38k3rt8m8gfaxxfn3zn43lqt6mzlvthcy5e",
        "bls-public-key": "ab08be98ef02d0d0000eb21314121854ff9db7445aae41a7872be40d4fbdb1596bd70fbb16c96a582dae008370365f17",
        "raw-stake": "74347608499999950000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1d02tffmrxp6m392uxayxlpyaekdl6k5znnr7tw",
        "bls-public-key": "2eb44f4d5cfed5190b2935b6bbfa0b17b78c1aa1e236bc3795db3640a15249e062291aa0bbce9e4ea1002bbe3cb61500",
        "raw-stake": "47026109568739000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1s5jcy0alpduv4ng4pz7u6yzxajk8usvxphkp3u",
        "bls-public-key": "2f4b3a50a9996ca5fddb383ee01cbfe4824e2bcca4fe0dc1b8d2328203fb39d7cd04015bd9b97f70c15d4e9781d58593",
        "raw-stake": "38344302047376000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1s5jcy0alpduv4ng4pz7u6yzxajk8usvxphkp3u",
        "bls-public-key": "c58d8a8b3396b7f7ab6e6e7311a182a9d3a411cdc08e7eae35b9ecd46501a729d0d601afab024bd7dd5223ae098bfe97",
        "raw-stake": "38344302047376000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1gx48chqc44kuacely55jm0glcwkqvsy7k2jj3s",
        "bls-public-key": "9e4263a599be82dc0c61e6c117af02b1f4b46e5fe6f654a8b325586d11cca7a44fdd3f1c2c4004c02e04bd7f46183d04",
        "raw-stake": "34337820569606000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
        "bls-public-key": "356b0732524bdd3a2ac6f2a09aa29da9a71b73167f42c64e5ba2b3322d82f79ade31b56efe61782f25c354c1dec28f88",
        "raw-stake": "32499992735347506250000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
        "bls-public-key": "62937063063c3c8390c86fd406b3155158fe8ecf1e82b0116e1e27cd8fb021c61c39469658d212cb89168ada8ab89a08",
        "raw-stake": "32499992735347506250000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
        "bls-public-key": "778fedb1699a7741eae03dbdcbc376c983b1a23aa9da2548c1706442acc3431747a957cf7aee2ae0fa028bc0c83a1684",
        "raw-stake": "32499992735347506250000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
        "bls-public-key": "dfca9b0bb41a358023b75136f51882e2b5396806f4287a0200f772c2b7b8a5981730fbc7558b086da8217969518d3498",
        "raw-stake": "32499992735347506250000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
        "bls-public-key": "1f8ab84a6a98cb00399aa14938c0ca3ffbf3b83555c21559254e5a96047394cda67d2c97037a2ae1d44d6c32b3666002",
        "raw-stake": "32499992735347506250000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
        "bls-public-key": "6302b0a03e573ffc8fd6a51ee48f0d1d66d9320a67d40f807469bc6677d678510c8d72fda9cbb170e06a22efe2dc890a",
        "raw-stake": "32499992735347506250000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
        "bls-public-key": "804f4659bbd2c3615bb749bdd363395c6ffea3a3bb95364073295585477c17ccb9fdc4b0fb0dc7620a90c71fc4056012",
        "raw-stake": "32499992735347506250000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
        "bls-public-key": "a0301ee493e3a78516929e7a89b6779e828962b8516a4dd41b1374e21a179f00fa6c3b75387c357138d5d1eca6c2d312",
        "raw-stake": "32499992735347506250000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
        "bls-public-key": "00d69ce5ccd22318af8d0eaee58b04aadd6f55cd7c728b1a45b1620aa6044b22f29d809a17554d0fde4e6bcdefe49e97",
        "raw-stake": "32499992735347506250000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
        "bls-public-key": "2fb1832b89450c8f6cf78ea4075aea489059f43a5b4cee418d8e30675238235ef6aab40219e7933bf827cbe14d18230b",
        "raw-stake": "32499992735347506250000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
        "bls-public-key": "2864f5f1cd848f2c7302faf6bdfc7456984365226c3d53c7cd63cd1dd316fee75a7ae48560ba5658ab47497b952eea99",
        "raw-stake": "32499992735347506250000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
        "bls-public-key": "2992b4fa2d94d3ba42a43c6cafc0436c6bc33aeff346014e637af676c16f1514c8daa7ab5edf7b431acda813332f4505",
        "raw-stake": "32499992735347506250000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
        "bls-public-key": "9f68854a0d27f0af2bfc447cd0cc724857ee90b10fe668e8bbadbbd81a6051f593813f15533004a76c2a0ccb25306911",
        "raw-stake": "32499992735347506250000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
        "bls-public-key": "d72a260c8325571aa5cda49b44d7f5fefe86b22a2d93bcd2dd3958a2ccc391f38babcf9a8a4571517df3307c65378091",
        "raw-stake": "32499992735347506250000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
        "bls-public-key": "84ad0dc35bdb6ab51c70d7f65a38b1e5230fe451fa895938749c1732c109f6fac7e4107ae44961ef1280c96dedcc3e13",
        "raw-stake": "32499992735347506250000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd",
        "bls-public-key": "db66379230ed5b875d7f71b98c922a43c1d2a93a65013badaa2cca1a35ace401d37cf81ee54db02be961593ca535b507",
        "raw-stake": "32499992735347506250000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one10ld9ej7vmuf82wxc4ep4tjcx0m75h5fhkntm78",
        "bls-public-key": "8c0b30de71543d83f77ebf2e68e980aa53c79879be6da479b1f0f0badc0bbc58dc0f24accca0b59adf01d703e6d6cc13",
        "raw-stake": "30072300670168000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1he2kv2hv44krughkavnd5p9njannd50ckjfags",
        "bls-public-key": "81109ca97ea1f1885bc84cc884f62b6a4322fa651f3dab1e67791b565a7229f44a07514b61222f3386450e6554ef9b86",
        "raw-stake": "27963813269999000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one19lj3xq29rvhwepwg0zk4j3nl46wp9df9wpmpk7",
        "bls-public-key": "eac7fa740a4ff3d51ecd9e268404312c80bb0f7b72172d89c73c50be2e00b0d711405fefe34622b2f78d72865c35dc05",
        "raw-stake": "26921511573999000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1cr5q35dwd2svwutwm3wg4tf6xpqn0xkt0qqh78",
        "bls-public-key": "e3bf914f3a52dc1201710486f7914d9568061bec9e0d38fd6b518f34f5aef58c7c3f488c8901905ea6642c55501f1816",
        "raw-stake": "26015647918590000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ykgt7kz96emc7avsv6ca6czva9guvcg807eray",
        "bls-public-key": "df8323b00d08177c7cbacbb1d633ced7962a82759b4828781cc132fcf97d9e45d9377fddc64da65802c2f6c79c3ecf97",
        "raw-stake": "25482741896829000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one17es0cg3xsl49r0kfnhsvpju8kgsn6kc57ae7nz",
        "bls-public-key": "bfff42cdcce61c05045d061553b3debe3b5c9d53874c19fb372506f90ff6decdda60a162481c896d7552b17511e28c84",
        "raw-stake": "24999748641221000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one190rdr2khdhn9jecmjex4m54gafn0y2ktyy9cxr",
        "bls-public-key": "527a78e9a3b6f5a389cb9965121268603e735145b2e03c8ed5ef561dc423fac1684666e60fef903ba9a12bd8231bb698",
        "raw-stake": "22964391942388000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1syx0rmtttr8jehlxvnkpyx4hvrlevmcx3tcghy",
        "bls-public-key": "02760cadc6ef3d3c1f8b66adbe182ebc252b451178efc168e856870311c8a7005c7060d28ea72c6c7adfab606989f413",
        "raw-stake": "22340355779391000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1j3nn4wdfpju0d6zynx9cesjqmzrfwru0fwrmdu",
        "bls-public-key": "f8ce1446daba5d62121c05eb87395b974996ca09a08b7c10ebe0ac5baf1c6c419b14d16badc2886d8789803230d7400b",
        "raw-stake": "22179024153314000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1km7xg8e3xjys7azp9f4xp8hkw79vm2h3f2lade",
        "bls-public-key": "95b7f81b4ad71a93e866c918a122a8754cf6db02c0f3df93d00e6651b77323d527ac39fc3e990f9c2f6e1e3ea9d15112",
        "raw-stake": "21681008033520300000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1c04stvq5q9xcuq9ucrlxrg9n6hu68n6ansu6vf",
        "bls-public-key": "b8c18bcf8126343a4a97b24f49f6f6f61e27417c175941f59a46a0b89313863dc341a7d55f8621b7c563f06f9ade0003",
        "raw-stake": "21475956361454824000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1lxzmu83x2lrekvutjjsdk06539mx45e8n8y5pn",
        "bls-public-key": "04dd842a98503c32b7008a65ce3bee3923d9dde459566d1c415bee6ea179fc836275bad656fa65aae7ce04d5ef649981",
        "raw-stake": "21013333851777000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1vfqqagdzz352mtvdl69v0hw953hm993n6v26yl",
        "bls-public-key": "e8c0e8bbdc60a12496b16c5153acc68c28c2a51b616fe094fa3e230aff3911ffc08061323efab4ccba2a4835236b1495",
        "raw-stake": "20941148411331100000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1la07f5wduc3379ffzlpqrl4rcvlchyvtwf3uyj",
        "bls-public-key": "26f5128639f480843e52a8328bb37d9c0b74e4dab75e8945dbcb4977c5995b3cc29807181a5a64d2c433ac4ed81e7d81",
        "raw-stake": "20619631054079000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one14nt6nwd3p9v5dk7er3rkvg6y0nh8v9k7j3nuqq",
        "bls-public-key": "6094253b1c87ac6d65077588a9452f983a348a7439feea9607ea90cf257acac37ae5f8be18fdf60e3bd7b20fb0f8b509",
        "raw-stake": "20558389039903000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1mcc9plwyqpeyhk4tv2a9wka6tzckc37wsn36az",
        "bls-public-key": "ebeb24316d8dd38485eee5ce3849d8c6b19d7cd35dbcd0456792bdbf1ae415f8d78c3f28f63ae42de21e3b3b4dceb48e",
        "raw-stake": "20319897835502000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1z5uz7d80leehn85yz77yucmr3sk9kdz56vcpg6",
        "bls-public-key": "aad331aa5cfe5a58235cade19dde712b9375a06d20ccdfe7901a5618db6a21d75d6838781a32b6ecc62c814146a28f13",
        "raw-stake": "20004798671280000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1f470xd0f6yjtlvv0ml02cw0fhe6t7fp5r74ec8",
        "bls-public-key": "385bf46c56a29f434ea17d38a9c4565881fa5463084782b8821734df4cbb6cbf6eab19fdb3f7bfb1f8429b2d3dd55a0a",
        "raw-stake": "19754928887233000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1f8hrk0l4a36hxsl8g6kqtg5ghqvzwg35s9y0sk",
        "bls-public-key": "3774ee37c4f629346260edac71fc1ef45692accaffe60f02d6090b9ef91712f3bc8cdd355b1dcd06c4d2193d06e7f086",
        "raw-stake": "19631552779202400000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1dkyjjf8s94nvml9rvksexlt4a78lu9u63ul8lf",
        "bls-public-key": "477607bcaddd8f43378515e39917e9786ae5414769c811ab6bcdf1ac2a0e3dea313a3d88673468c2aa0600c7cb0d1b92",
        "raw-stake": "19359629444774000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1jw7nlk68v6u4nw6ssrzy2nvrea4dxg4tea8u5j",
        "bls-public-key": "31ba4affb8331bce3dd89b50ad7461064f8ffa33d8d681d17911efa9c1dae98948beb62c91d678806830d951251aed12",
        "raw-stake": "19318525170903500000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1cts9rdxhd25hcwt6ulstnp50suwuzzdtsxr6pg",
        "bls-public-key": "266e262c3a6c3e1a0ac3eb0f83e6745328953177e63762814dddfe7ed4fc0dc966cac7b4966936a8d16bba76dc088698",
        "raw-stake": "19316265617397700000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1jg8yescd779juu89rcg9cjcwedsu9ptacdyqrl",
        "bls-public-key": "0501e4924bb1200a5cf4334c9a5476cf6b0e4b8930671d240284844c9c96ccddb57b4b9cce6db94dde1c606dcf044181",
        "raw-stake": "18659188142549400000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1t8n4gyt6ta64k3js3vy8vffw53njahq2yzjlxw",
        "bls-public-key": "583f72670f72e4546fa9000ab73b1b48e51780b93fed48cbf8507500d3b0a5e7e626331f6c41730b5483b14941dde000",
        "raw-stake": "18321466032276500000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one15a45k4a76lhsj7z9p242ey33f2g9x6k3uhdhd6",
        "bls-public-key": "51dcd37346474c3ac0a33f23a3fc1791d40ad1ea718dc4351a8d735a38c7591adae5093d6dba0231645b877abd9b0a16",
        "raw-stake": "17695121928702000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one13pe96vgege60pjhzuaw3fkw9veq032a4yupjvs",
        "bls-public-key": "d6915141cc262b09f2cea56ffec2d32cae724f7062e580d576dec9256d865a19bbb0bac13f5f9a63309ea9a38fad5708",
        "raw-stake": "17559494094743000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1exusucsg5aw3kt4amh6quc786futqf0ycmfyrg",
        "bls-public-key": "ccf101c81ffc71d686a9f92113fbf6a56c7c4db09cdc3a2bcd9526b1a24706d161634dbc4a50b14d987d371a59699806",
        "raw-stake": "17122239499999000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1f5fae6ly754d3nsa25s99h0t6psdx2wg6yy33c",
        "bls-public-key": "9e0af2d661d1362a95b909248c507092f8cc1c1dff653a9af8b6245f42898dfe570cce0a92d9931a793803cc3eae400a",
        "raw-stake": "16978722589999000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one102xvs5la4wfe9qut4nz76mxm7c3xx3jn4u95xx",
        "bls-public-key": "5011e24ce96c2ecd77fc46bad5bb025eca84e24b92c263bfb10360264a53f4aee63ea33b7d5ecb7513616084f9fb650f",
        "raw-stake": "16880692586445000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1dgccuj65y4ujn6lsvyx0zndmnskyrwatn6j02v",
        "bls-public-key": "294a0bc5af28548abaf809a8f6d9e18c8e01215333d3e760a296e4463bb8030e46c99e4e679840e4e6dc452cb0b31196",
        "raw-stake": "16666665999999000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1znscqahk3rtpsudkdgrude0s4hlm2lwg2c8hw5",
        "bls-public-key": "0d429fea2807ba838dfe01fabeca994b87ea89a6bdfa47847896e986fdeb441bb56232353db853bc0610ac56d12b018f",
        "raw-stake": "16566436626854000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1vusgu2vytafhfczp7kqj6jvquvgx7nequ2zcjz",
        "bls-public-key": "516ed79377753aafeb17a06b219375ccb1a3fdbb6cf1659b055d5946f4432ec35deec920a11c83d8c5045f60fde81082",
        "raw-stake": "16440769900000000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1khyz6zyz3gzk8c5f9j76d5ng0rnkw6n75nwe0l",
        "bls-public-key": "b5ddf57e56226de7d472e59071bd97a9c9c39e41f852d2f9cfbac9c540392465d7e4bfcdf38be777eed6199acbaaea87",
        "raw-stake": "16355537000000000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1z3jh7jh6wy8aptw7qeyx9l2w4xer5wg6t9tgtu",
        "bls-public-key": "bc43e8a52a584d12ae9a1571effc42d269b633d38a0ce2eb5b73032db9919ba02a07a2124b55bc63ebe87271bd67e184",
        "raw-stake": "16352137000000000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1hwn68w7m5g8daltvrjkmq23qn58nrvr3yz6ryt",
        "bls-public-key": "48ad00d97fb657f3476b5a8466798f33a23b16615091ebcd3587c14c9aad9e2e28c28fd12a7e9c887e621eb2f7860d00",
        "raw-stake": "16233173207520000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1jpwryfv7z2dpedrlchg8z66gryhymwy6gwdk03",
        "bls-public-key": "cfc6181d5b23b3b6fecc395c1b727ee12d0d35026cdc648942b427fbf28b12f5ed90776687fbcad5b9fdbcd8d4dad983",
        "raw-stake": "16082279307020000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1fxtdau23qk0fl63e40g3h4nfwsj0k8uutx59qx",
        "bls-public-key": "59b98b2f2ee7a192fc68c05c4af99028a4fbc8532ea56eacd47711fd193d55195826d1a247a054e41904a48b3176cd93",
        "raw-stake": "15685080193576500000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1q98lxvxcxl228y4dt6xqjrzkha206usucfx02r",
        "bls-public-key": "58f36f139ce7d0d06b304fc75ab3fbb24fa57c40b0d8db47adb77aa5d23ffded9330afaf22a3564f6a0abd17e1bf9d88",
        "raw-stake": "15644441930663500000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1njyvqvw3jq2klrl77udzuj4xlh8tslgj434urs",
        "bls-public-key": "63efb4491b04f94d63944e0541c8d0c2afb3edd22c7f32c5c90698cfc4b2fc974145ee68cae14d12ec9c5373fc423d8c",
        "raw-stake": "15514334647999396829228846.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ndzkyjg9aesmr5pl3vhpqufugvgs4mxme96j2f",
        "bls-public-key": "84bcc8102ca3fb925d9672254e26029a9f0d6b4418037aad081bb9e2c8b0462b9812ae4c5f39f70998ef934c0f10fd02",
        "raw-stake": "15499998250688000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1nzkhudzmyczmy0ukvjewlx4zyqjmc8ujhfhq90",
        "bls-public-key": "dc735a503388d93a86ad56ab8d2f0c79dbec64b9331812beeab068553959650e848e6fbb3fc280081e90abb50074bd16",
        "raw-stake": "15443977610171000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1mrm8xffrt9ruq40czu8k78tka03p5mteqzx29g",
        "bls-public-key": "06e268d186891b0a7e7c116267d0ab02d13055da47ed697c8f42a382588497629638c75a169c34a4df647cf915582e00",
        "raw-stake": "15365619079644800000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1x40tck8cu3l8k4erztfgerx99taywpn7xcfvgv",
        "bls-public-key": "e73156109914a4e05be1ada2912b0788957b37270e0dd9bfe214f93c85c826ecbc37bc9bc78f879361f432c0a62c7095",
        "raw-stake": "15309247994682000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ae46extxed94jxfqthtl6j2tt5mn684zdh7gu2",
        "bls-public-key": "faea76b6eccf17a61ba36a6a20b4dc9542eea9e5a8f83b48732247abb871f0f95ef4d23a8c13577050ef38a7817d4518",
        "raw-stake": "15186010900000000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1dcmp24uqgwszcvmm8n6r5dvhqhuukdj86pkg6n",
        "bls-public-key": "5e5ccd77a8d7d630f52d9572d8d63694ccfd18e7013729294365df154493cf481b6aa5ae18ba21bba345bfaf1d641e10",
        "raw-stake": "15166762121246200000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1gle0elf9ckg5j5v9qkn7xv2w2e7vhv38fe93fq",
        "bls-public-key": "e3bfe63510fc86c638c1cea8fc553e1b9a35812f767c35f8c174d563b228f9d76955fa35c171741ae6e99e780235ac98",
        "raw-stake": "15083875297925000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1zhe0t4knr3asa7hvjv4zu5u64cjvj7uznp0vvz",
        "bls-public-key": "a3a2287134bf0ab203f16bdf49ec04748b4ac7696803de6eadfc04ed901aa722afe57995bf8abb24644ccafb0bce7796",
        "raw-stake": "15015355961518000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1hzck9h2lrhqnc5zcaf08ka4cx02z4yaucfy6hk",
        "bls-public-key": "d24b31a4fd2791ebb3e83c8afc84b5011fb95c66a6aa241a3826048ed0e2fd6356c461ce3b50df3354afbdd3b26f0d90",
        "raw-stake": "14999999415000000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1fsyyst59aez33e5566xpfu44reh8g856qfqup7",
        "bls-public-key": "0a775e4b828b40f6415859f9fbc2a569ee3e5a62e485dba5781d5df3731c90c8fe865a365ae531575f91f5cbc7350e05",
        "raw-stake": "14961000000000000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1wqq9xrca6g5vfaqwm47gc953kgy6kqxm2pffuj",
        "bls-public-key": "045e3d2dbc7624a3ba1f3aa253b8663d587a51c4490c071d44bfb88ac9b243e680b806b742630d2320cd9f1d99d4e58a",
        "raw-stake": "14899781907755000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1d4lgd6skvqh24hxac0h7s4jpf7newr73wv4plq",
        "bls-public-key": "922b2874d6fe9308634095ebdb74847f7851503987b7b352454c975a0ac8861adad693ae8f9ba5fe1e0060c6e06fd604",
        "raw-stake": "14715774307544000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1fs84nmfph4scmj3t8cduwqf7vpvs88279whxha",
        "bls-public-key": "9522b29970238da7add130f96ceb7555c29f2e0e1529aee9186118e9bab6057a8ea190f9d310339d0960503c59d0e10a",
        "raw-stake": "14653027788460000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1j8p97zd3f6qsa03xjd89xgg35naca865dkj70r",
        "bls-public-key": "cdd12b97dc34764007e5fba0e97f7edd26ee3501efaf37ba79a84b08b856b9c2ac83ba99814ea9e7bae32e4693a23b86",
        "raw-stake": "14643953274843000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one135f4zp70a6dsv759rx72f7t49ev8hmqn67e4ta",
        "bls-public-key": "d16ccb8b0b805d31066da270396cb8ed20db45a5c7741c709285d4064ee00040234506d03ed61c6d434321d8d07a7a8c",
        "raw-stake": "14625962208172000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ekup98s5tqxtr5hdzsz664cfy579jpq6w5smrr",
        "bls-public-key": "718b9ead7b9aaa9cb70570450c6256937c86f08978c8a48b536c2a849f61ff52f1b78b39014064cefc5f223efd45a080",
        "raw-stake": "14359214388330000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one10rr5n6qvjxlyhrhnkzxtjslzffrp4trl3wtsuh",
        "bls-public-key": "2b1f282e9684d3a4d3bb77970deacf989e538524f704d92f7eed6fddd743abae23f0a4ef461baca47f33514f1963838c",
        "raw-stake": "14351610943107000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one16xt3gl6l7q8afksksgwdmdahd5s75trgy6ut3k",
        "bls-public-key": "c91f5cde7343af440026bf7b97d6e7bc5bc45ecd7d14201cb0250361aaccc5cb94610d0b9ecefba9b28f205c0aebf385",
        "raw-stake": "14138721244629000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1cr8qrjl6khac9d5auyslvxln864vmqd5xll2zh",
        "bls-public-key": "42fa89ee6e6296133ac05bbfd8c95976540ef369683864f0aaa3c7f0f5390046d077a3f4156e51654ba8c14234654c12",
        "raw-stake": "14121217920071000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1996e8rujj8xq7v23ztldwm2cpfwz7kqxzq7shq",
        "bls-public-key": "6f59fc2dafbe524349122e1ce72b9abe4adf0690cf04cda59358b467965cbd22c9728e381e3c68d5e3d073b5ed2cfb00",
        "raw-stake": "14035462378809000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1l9gddgsctsvv73ayuzns8czwdgxgy6ytv00j4j",
        "bls-public-key": "7b2fa986cc6261cabb001c3f1a52ed55af814c7a44f08b01165d23c6bc75bc950beeca2da490c8262843269605b90b97",
        "raw-stake": "14019899131960800000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1wy9dkhsy8m7u0z5rzypmxsyyawmu6a7v9dwh2p",
        "bls-public-key": "1c4a0caa22867ae484aa4034b6546d843c7476b514ad5844a89b4de69e6ea8f87ae240f41b5ffcb100ae6dcf50feec15",
        "raw-stake": "13990119000000000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ge9k4ryucjqmrpnv3nn0f5gy696qy0r8djawee",
        "bls-public-key": "e55c39c0b3a05360dea4736aa05e1e0ddff8fb3f3de3d6a33d30017c5742d46d4420ba3e45b6acd6d1eeb4ced2e4ba86",
        "raw-stake": "13966808690000000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1yc64ch2fthece9ngplvxjnywqnguacp0e39s3h",
        "bls-public-key": "6c56ef94ebb523ebb48e25f4d1665756885c6b8d6dde7d413d2a540a815dcef60671ec2a8bc03691677eb176a65fd799",
        "raw-stake": "13923517000000000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1xdnyc4c85vkh69am2wdd7rmcyzprmem5tnm9ck",
        "bls-public-key": "30c41b92a7253f78050010ce4a24ad9ee0821420c12b1586ac56d20f14486b9167e2e400ff24251aac9cc309e69a938f",
        "raw-stake": "13884982968566000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one17j706lucfndyf5celgpwru45cf0qn2yyqgsf6q",
        "bls-public-key": "a9199bc02cdc1a6c268959f89d7aa5c0abcad899a8b98bc50cd1824bed0668ff34c53344e9be0f39b92df2f6eff26e0e",
        "raw-stake": "13863253405036000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one17c6r80qvp9xthqq38e98gzq6qjma9svj63y927",
        "bls-public-key": "a78144701f6cdb7f526ed4e0a1c8fd5adcb90ad4340fca1607b6fd3144080f2bc2bb05eadc82d1ce6b6b235bb2e5038f",
        "raw-stake": "13673488102600000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ryjmd93fadj280e6p6mjs8sl2gx49mvd8wzjxd",
        "bls-public-key": "c4c90fd9a2d52d62569cab936ed3e7a758263fbc78c47983a96f8c9ff90bcdb32fdebaf1d06319b01334d44cf5246712",
        "raw-stake": "13669021117998000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one10n3vn6rz05zvkwus4ey0ll890qxpsxpzphttck",
        "bls-public-key": "a76550cfd535db4f3ef3d51fa354e12d6efce90d3f1025357d1028a9c06fc9148d16f0fc24683ff7dbc6262c4ae61116",
        "raw-stake": "13614146000000000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1yryvqzef37wyn4z8fsmux38t6mgaqyk5hvlqj5",
        "bls-public-key": "33f2b540ead4c53b1d998539e6364558cb0aea657234c6dc6d04f07decda418488fa90116dbfbdd8950ece48ca278b17",
        "raw-stake": "13611518047196000000000000.000000000000000000",
        "eposed-stake": "13561060996180575000000000.000000000000000000"
      },
      {
        "slot-owner": "one1p9xya88j2344kgslgxxkugqg38ua59s4uc5ru6",
        "bls-public-key": "9f63ff2423cfb6adeac732b73163b8cca684cfa907b31dadbd9e40b342984304ffbdc777ac715dc96235138051cdca19",
        "raw-stake": "13509815680000000000000000.000000000000000000",
        "eposed-stake": "13509815680000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1gjsxmewzws9mt3fn65jmdhr3e4hel9xza8wd6t",
        "bls-public-key": "a689b39bb1de4f1591e29094b91d00596b0f371ea16fadf8b4143c680a1f9aff3e805e167eda2c583827ed0e7c8c9882",
        "raw-stake": "13499999999999600000000000.000000000000000000",
        "eposed-stake": "13499999999999600000000000.000000000000000000"
      },
      {
        "slot-owner": "one1gjsxmewzws9mt3fn65jmdhr3e4hel9xza8wd6t",
        "bls-public-key": "842d27a14584d18fdf53951f0c24cc3a6a55ae0b4e639cbf9db15e675a6aa0f87819b78fb5d51ccf3b8bc2aefb47e186",
        "raw-stake": "13499999999999600000000000.000000000000000000",
        "eposed-stake": "13499999999999600000000000.000000000000000000"
      },
      {
        "slot-owner": "one1pgtnlatpnwl8laww7tc2f5qss6rjhzunwtrq5p",
        "bls-public-key": "88bd80eaf033660d58d585da0dfec589815f5564b663dd216a4f8a920f3e86466add2b51b6252fabd919ec4b31a7b50e",
        "raw-stake": "13493588439999000000000000.000000000000000000",
        "eposed-stake": "13493588439999000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1rx9qnp855d6atv36gkxwn9evt0j4amzp0fvck5",
        "bls-public-key": "8c5d7d0ee1c4b24584880c908ac5c31eae07d6c5a5fe1dfc5778b34342237dcfc76716c060901d7e8d208396e4236786",
        "raw-stake": "13492467827793000000000000.000000000000000000",
        "eposed-stake": "13492467827793000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1hyqgueh0fv7mwwtt82f74wq9guzmw8ytf74qhn",
        "bls-public-key": "4c0d79ddeea979f76b086eb314781807c4c0ce4665b84a9084a7816e9019447981700c0c1a8e83d34e82bbf1502fc101",
        "raw-stake": "13417430470000000000000000.000000000000000000",
        "eposed-stake": "13417430470000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1p0fecz3s2ldn53829fpj99m92cr4vfcc5hmj32",
        "bls-public-key": "1d806a18353315437848dcf16a6297a51974b81a2fbfbd4e9b6611af77af3f32061d07128328634ad24ba28af9ddee82",
        "raw-stake": "13382520645100000000000000.000000000000000000",
        "eposed-stake": "13382520645100000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1sv0s66ua6l82ng2t62fa5tlnk884n2gnrfnq23",
        "bls-public-key": "2ff603b16c08f4c2f13ecec4f8184de176a0725cb71ca7d4915d94206115c8a614ae9c0df8b5fe0cb6ba3fa814764a02",
        "raw-stake": "13317691796678000000000000.000000000000000000",
        "eposed-stake": "13317691796678000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1fllr7w9m3vwxv5evwvnaflk2qy0uauyarvl7hh",
        "bls-public-key": "cbfa86225cfa21641ce914bf3d4ef8e6e736830589530f79eed434f8bebb939c18a695cf7f007ad5d367c4491ad49a08",
        "raw-stake": "13268088434632000000000000.000000000000000000",
        "eposed-stake": "13268088434632000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1kudknr8x9t9hp9znl5n0guy239mhn2a4wpektc",
        "bls-public-key": "a24ef25fd8139314d898bea9ddf3ec5c38a198a35e79bd130f9e0f948144a94bc9312f559c6901fc7a0d8ee1a762d088",
        "raw-stake": "13193991000000000000000000.000000000000000000",
        "eposed-stake": "13193991000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1yjfg8kua4tvs8gjtdjed90gse3cmvd0yy6wcwu",
        "bls-public-key": "81b038da89b005335e677f61935d552e866e281a57fa03fe95c5154ecc5f8cf3d5a5b83486acaba38bc90d69b1738881",
        "raw-stake": "13120000093412000000000000.000000000000000000",
        "eposed-stake": "13120000093412000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1jtq979pugs6484mpyz5ahvjgzcvv02sdclhg2n",
        "bls-public-key": "3996a371b6790103534e5b9163d58f304b8cbd993e507cdb2894ae1c1356aab5c21bbb5335b3eb726f1d4aed6b8ca002",
        "raw-stake": "13072429398442000000000000.000000000000000000",
        "eposed-stake": "13072429398442000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1hxqssk08xz96du0etpy727zxejqgs0yj0tjde7",
        "bls-public-key": "73885355d436261e22de0529e198f0ff2f1d740926893a4a0d43478d6a21fd73f828013e85e93e20fcb69852affe990a",
        "raw-stake": "13000000000000000000000000.000000000000000000",
        "eposed-stake": "13000000000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1zk24v0nmh662f3u0jz5wsu65y4pjtjuc2kskdf",
        "bls-public-key": "285021b00e21f75364d92ebcbc204e73f268e50163347cbd97a5401c800f6348252c2c23fc6ba9e099f3a6380726ac85",
        "raw-stake": "12987290382041000000000000.000000000000000000",
        "eposed-stake": "12987290382041000000000000.000000000000000000"
      },
      {
        "slot-owner": "one12s96xcv0d3vj7u3js84j6v4322t23996mqenwj",
        "bls-public-key": "713c04a3b0a5e4f72238a86fffee54748f18f1a0130af73ed5ba67301ec9e282a438348fcf2a7ba66b60a7642439810a",
        "raw-stake": "12956488799999000000000000.000000000000000000",
        "eposed-stake": "12956488799999000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1re7ccpvjq09jagrfxmulzwkw9jy6y6g62u3xrm",
        "bls-public-key": "d8135f6e42a8009fa68d2410e37c357b39704228e698a014554a7fc0a95bc87a7da6877b18b96f9f34a5be0bd35f3a18",
        "raw-stake": "12930771300000000000000000.000000000000000000",
        "eposed-stake": "12930771300000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1n7f0h0jaq0lz80daqppd8yl5nq026jfjw23zlg",
        "bls-public-key": "02c3c1f6968adff78e07aa70cee4f3e9790e8d2213fe9f56c7ff41bd476fa67d4eb6274215bf7486b7d53aef96725400",
        "raw-stake": "12923909300000000000000000.000000000000000000",
        "eposed-stake": "12923909300000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1xwp3sf6vetnl4hdlzp2wa7f4kn2lqrpdxzppzg",
        "bls-public-key": "64c7572f1c7889d4d3954139835dca43998bd603d4ae7232f55dff82d166f42a65832423c03b85488905b14cdc68c994",
        "raw-stake": "12899410792710000000000000.000000000000000000",
        "eposed-stake": "12899410792710000000000000.000000000000000000"
      },
      {
        "slot-owner": "one18ms0urj0j4xv3vpxn0cp00wn70fddl64v8dqdp",
        "bls-public-key": "7b565c693aadb0e7d0fb3431b1d9a1dac4b4fcc7da6c4d6e35a4ae7317efd27fdcc443a5d5f73dda541713d3d21da40f",
        "raw-stake": "12896424939071000000000000.000000000000000000",
        "eposed-stake": "12896424939071000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1h3ugwlrl825dchuaw7nrdtjqazl5yr7r3nv93s",
        "bls-public-key": "d7dc5b3e803dff45b1ffa22ff9268dc25991afc3ddedd3b5aa7a7c10810fddd30ceaf7fafe0b24befa6aed398d8e6706",
        "raw-stake": "12833188999999000000000000.000000000000000000",
        "eposed-stake": "12833188999999000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1yjtrsq78t02qgjcwn56x96kwkduwhmc8wnenfw",
        "bls-public-key": "82c920ddfafe709488c6ccabd9087fe20a9cfe6f3003ae1595884ab3d47c99c2075d8068d2642cd3be3a361ba169b207",
        "raw-stake": "12804655500000000000000000.000000000000000000",
        "eposed-stake": "12804655500000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1pgna2zyqmwr4u9qwwfvpce40v3z6amylzhxe0s",
        "bls-public-key": "3d37406a97787c13abf762398387f71ac8bd8d7dacb8c3412e442d85c8b6e49ebbe1469dc079713897545dc03864f897",
        "raw-stake": "12778589364939000000000000.000000000000000000",
        "eposed-stake": "12778589364939000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1yr22qm5su0s3tpl0dzytj07ru6ywrxrpg4caz7",
        "bls-public-key": "a2ef59759bc200f4d9b471ddd201e9e0c7f5fbe696180b98ca2294c800afc550c877ea7c9c70191fb7192fd897161b95",
        "raw-stake": "12729740000000000000000000.000000000000000000",
        "eposed-stake": "12729740000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one15hvt2vq2hhh5parkgel5dcamhwcn2dlnu2kaec",
        "bls-public-key": "73916ee014b31e12c48d45996e1dfac993264d5e99949eeab7a93ef74aaddaf8073d1a37fbb6f0ad1d86efb9567cd90e",
        "raw-stake": "12724816989999000000000000.000000000000000000",
        "eposed-stake": "12724816989999000000000000.000000000000000000"
      },
      {
        "slot-owner": "one10zad8mkynw0wsxzqkv4xfjrk2qe7vvfywardkd",
        "bls-public-key": "e51a0049025c2598b3465dffaca6cf613f7c0024fe1bd9c50063919a7ed3cb24a864dc3336030ffc87c3f3bf38b81e8b",
        "raw-stake": "12678597000000000000000000.000000000000000000",
        "eposed-stake": "12678597000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ur06pgutfdqcnah5qh6czecrz65el4vh4x2lws",
        "bls-public-key": "1dd099f60af6cda418180e663c527e0175ed11c42a3920683d1a1e33a8500ba69cd3b5ebb7d6801ac2dbce6b1611a185",
        "raw-stake": "12623441410000000000000000.000000000000000000",
        "eposed-stake": "12623441410000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1920vfl67pucex2pfw059pylsfr8hpleal925pc",
        "bls-public-key": "1c308f3dc327fdd3a22117789cb4c19203387b0e74d7f32e0cb4609e4afe8b72772c9963f7279290fb6c966a14bf090e",
        "raw-stake": "12528859000000000000000000.000000000000000000",
        "eposed-stake": "12528859000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1a8v9d2mcuzkv73zuc2c5ssht9sh5wjejx32mpg",
        "bls-public-key": "1b5e942f91a4c74f72223488820e5101c18d305a7a1bc1c50dea3557b68c05c983e8946bfc24cf198f2fc437053a9b14",
        "raw-stake": "12521085346537000000000000.000000000000000000",
        "eposed-stake": "12521085346537000000000000.000000000000000000"
      },
      {
        "slot-owner": "one10eqee99zcxmx2kxux92tqkjpmc04wk9ugr79p6",
        "bls-public-key": "b5498a248bf1ef9f03497ec3fe27f8e6c984e052e8ded27a728e5c6526eed506b879f5eafcfaef2785c3fcab468e0489",
        "raw-stake": "12459166307176000000000000.000000000000000000",
        "eposed-stake": "12459166307176000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1q3z4tgr42ylegju6tcvxmg30n234d347kuh8n0",
        "bls-public-key": "2f9d9b9b9d906b22a3ee0071d9a0762dcf4cdad9103ab3c1c7a637386c04a7209cb1faa1e74334a0e1280c3d0ec91183",
        "raw-stake": "12397837000000000000000000.000000000000000000",
        "eposed-stake": "12397837000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ssm0ea54n5f39p59ne22rlq3nzgw6uqckusscj",
        "bls-public-key": "fcb6388c0cfcd6a89578b71c8257a4618c74cf834bc1a7c280727f6fdcdff1cfb047b1f2db3f8e0a0da6119d881a9293",
        "raw-stake": "12364617000000000000000000.000000000000000000",
        "eposed-stake": "12364617000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1xf6nzwlhq4a4sz4du24hc0a4mtzr560f0jy9e6",
        "bls-public-key": "eae9004dc0045b8928e231306ae73dc5045628195c3f5b95b78c31426237e21b52a10601d42cc8a873ff0af135e8fa92",
        "raw-stake": "12352698001036000000000000.000000000000000000",
        "eposed-stake": "12352698001036000000000000.000000000000000000"
      },
      {
        "slot-owner": "one10lld3hn55sg7s7ra0kqrpgj44km5uaytlq7ny4",
        "bls-public-key": "ed73e02999b85033833f88341ebddb5cf70309d7aeed8e70084e88c93e03be9c838e7a2fa617ae806017b580f5566594",
        "raw-stake": "12325147800000000000000000.000000000000000000",
        "eposed-stake": "12325147800000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1age7nde9wkcv99z2u9cej4szmq73aa2c5tcsjm",
        "bls-public-key": "cd6d4e6c4307851d4eeeb2c17fb6104207b53542f0bf9c533f0078a5c74863c23d151de9627d09098ad6c5c3cf594682",
        "raw-stake": "12315718000000000000000000.000000000000000000",
        "eposed-stake": "12315718000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1n0t2sxc02ss8jmvcxyrptruu69a62xj35a75jc",
        "bls-public-key": "a36ba9f8e5226c0342d8b8a1bd782dc3daf39c69bad85693bdae2bbf99e77af17875951ac11bd19cbf0d1d3937ceaf12",
        "raw-stake": "12308091755891900000000000.000000000000000000",
        "eposed-stake": "12308091755891900000000000.000000000000000000"
      },
      {
        "slot-owner": "one1qdmxqgru6vqv5v2u0jhjvgyl4n7c4a550mjtmz",
        "bls-public-key": "7ceb83d3af19a92cf74eef4ecfac8e3b9699789499eada1c2622f7497a6f082f83d0a5d6baf4e73274320409b505f18b",
        "raw-stake": "12299999999999000000000000.000000000000000000",
        "eposed-stake": "12299999999999000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1dsy63tatz7avdrl24y5clramvgur9hsarglcdl",
        "bls-public-key": "8f77c124107705daa9f07c547be2512571d98365af80a76ca692d2bfbd343170eb1c542fa69def1ff3fdf58925c24396",
        "raw-stake": "12286761000000000000000000.000000000000000000",
        "eposed-stake": "12286761000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1fxpzt6wrhtgavt2wuyxv0vys2n73888ef8llg8",
        "bls-public-key": "5816b0c90cb81bed2a1a465f76df18420583e211c5aae899756bc2a1e7716983babdb0e8e41f6c9b474cdf40c1db4090",
        "raw-stake": "12199842994584866772700000.000000000000000000",
        "eposed-stake": "12199842994584866772700000.000000000000000000"
      },
      {
        "slot-owner": "one1zcntyvm3a8xl5umwwdhcn5k5wnqklaetp0gyug",
        "bls-public-key": "c9993defc6410169380b3708060308faef5a5e11e575b50dc2a0ca7b39e7fea916cce5c6536368f1aa22355970c13495",
        "raw-stake": "12197033851392000000000000.000000000000000000",
        "eposed-stake": "12197033851392000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1wje75aedczmj4dwjs08l2xcg7vx0dy23lcajk0",
        "bls-public-key": "cbf0fa521218cfa09d7c997ad9efa8107f19a215a4792cd593da8be61b14b268cb8eae74f878a4b90279883b3f720092",
        "raw-stake": "12098807000000000000000000.000000000000000000",
        "eposed-stake": "12098807000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ps7d865t4k6gf457p9rst6alkkczdr9z9fapkk",
        "bls-public-key": "d31e38437cac604b54bb6b5380f9767679f569801b3747674409fab22f00874aed5f437d1476764efa06876ef6cd198c",
        "raw-stake": "12075860633959500000000000.000000000000000000",
        "eposed-stake": "12075860633959500000000000.000000000000000000"
      },
      {
        "slot-owner": "one1jw462yf0ltq82rvlnjaxazqupja86rpkz3pvqz",
        "bls-public-key": "dec11a8d74b5ce864016644013c985647624555c12e1c19d6a5f32134b26e08c3d33d969d409aa6396138e35ed5f0099",
        "raw-stake": "12059945039998000000000000.000000000000000000",
        "eposed-stake": "12059945039998000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ywrd5hrwf54dt7p6j3xjcas69xjeflxy2ejvv4",
        "bls-public-key": "850b0487a61a00362f35129ff9883c54b9ab9e1a8088fa5b446c3680f44ad608cd17d6de700fc79312ede3a95b32dc8b",
        "raw-stake": "12011830000000000000000000.000000000000000000",
        "eposed-stake": "12011830000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1u3stkh6x9ev6z2p2dkk30d26jglz4zykvlf0ga",
        "bls-public-key": "dd7d66b75f5f9d3122b246641699d1a19960f41ca2002e489cd71b0707f07d6bc42864b2bd5ab9420951ffd80e52d018",
        "raw-stake": "12010000000000000000000000.000000000000000000",
        "eposed-stake": "12010000000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1cra2m6atas4wtda25vd37rvc7x0x8cwqnwrnxs",
        "bls-public-key": "721fb6c6e35dae99dd6fa6e058376fb4e85d3879d29d5f46a07c9dbfe064cecb4852be7a0b914e626fc8e75e30253215",
        "raw-stake": "11998536349999000000000000.000000000000000000",
        "eposed-stake": "11998536349999000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1m3w07gke5ekxg8yyj66v5eky5wx2e5kvqh3fkc",
        "bls-public-key": "e1049c214ef21c3954d5ef0ca0132256fce020b8096ead11debab5aa5f05e09bdb3aaf2a2816536373ccc0c05623b215",
        "raw-stake": "11991187000000000000000000.000000000000000000",
        "eposed-stake": "11991187000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ux8hw7ue7gs8k0vgspgsnx5neqxp34heawragg",
        "bls-public-key": "28d6bdcbc569b7d4275aed117ed83334ef5c11c0e27ec849628b5e55c80e34df8e6b88f41727ad4e03ca7e0e8342168c",
        "raw-stake": "11983622608540300000000000.000000000000000000",
        "eposed-stake": "11983622608540300000000000.000000000000000000"
      },
      {
        "slot-owner": "one1nv6q6y9t7tpketgrwp3z6kmq5v505nwp0ph4ez",
        "bls-public-key": "fa24d37d68d349ada82e5d5ee226bd2e23b3783b613d8fbae2d29409848501c2c8e43bfb24374aaafb454772a17d8101",
        "raw-stake": "11959666731948000000000000.000000000000000000",
        "eposed-stake": "11959666731948000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1k3r0xmuw2zhwvww88nx337h0ee7g2h3edgl66l",
        "bls-public-key": "5c99f48ccc1377faf79f6d36f46222e6c124083a58e9a47f7bc9e37a0bf529215671f71ff1bc4c3f8c5548b484c31e85",
        "raw-stake": "11947717000000000000000000.000000000000000000",
        "eposed-stake": "11947717000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one12f484m9f8d9yhh8va3sc09r8lwkcufu2flya2h",
        "bls-public-key": "2c6cb2778d6c3459b75dc5a8fd7c23bfae25eaeaaef4d037ad19968b08c6f08b29fb9111fff3c627ef701f8a8e28b907",
        "raw-stake": "11923791598894000000000000.000000000000000000",
        "eposed-stake": "11923791598894000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1na892u23tfx43xfp0gep0fxkut0hswjka7r79y",
        "bls-public-key": "c2cae6e2f2ebe3a445bf1190402955a3f3f0aa79bd981110565d5a863a28c93c43fbb700ab1091fe5593f3c08805468b",
        "raw-stake": "11889461000000000000000000.000000000000000000",
        "eposed-stake": "11889461000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one106fd5vadl0tnk74ccggdtn6m3xkju40ewj23cc",
        "bls-public-key": "085175d5724be15f0159cdd4da275d5efdabc3696641c5b5c70fe5d1ac8afebcfc8508b7cf5f8030dc1988a42ae5c109",
        "raw-stake": "11860100000000000000000000.000000000000000000",
        "eposed-stake": "11860100000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1536umpe5vvqdl3gp2lugukvk78rrn3jmmld9x7",
        "bls-public-key": "c8a405b15961bb09a1829cd6d71a1feb983b24175e24e5a7b32587cfdbc7ad7c77ff78f953a9ad8523234c44d6077588",
        "raw-stake": "11814877111100000000000000.000000000000000000",
        "eposed-stake": "11814877111100000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ecp9htmq8csm9wzhgshy24rz3f8facpzdw7zw8",
        "bls-public-key": "a716b28f9da3cb58ef662199cc408fab6ea31a4f96c31ac63a2236d8986359209cbfda2e7b32ea2b00b03c19f7c8df13",
        "raw-stake": "11804715945105400000000000.000000000000000000",
        "eposed-stake": "11804715945105400000000000.000000000000000000"
      },
      {
        "slot-owner": "one1p2jts72rfcn0a0jqk29ymecdz2krjzgsr5vqvd",
        "bls-public-key": "ed6e3417442ec8f82146a5cdc730763184e5b132c6b1f936cfa1387394b7cb66a19aba68835a00c4a7ca415e20ad8c8d",
        "raw-stake": "11792886906401000000000000.000000000000000000",
        "eposed-stake": "11792886906401000000000000.000000000000000000"
      },
      {
        "slot-owner": "one12eq6zag7tjsgm6s68ms9es4xd97eyjgkmf7et0",
        "bls-public-key": "4a349cca1e4f67db7a9a188642286c17439d30b76f60d389adc74bec7ffdef49744fccc99d1861a7c6a0294f392c5b09",
        "raw-stake": "11791567000000000000000000.000000000000000000",
        "eposed-stake": "11791567000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1seu070y2jpfuvz76vqpqry837jf8t6pm504f8j",
        "bls-public-key": "72817a31165e7339410f85165ace34706005d22570646b77831f496fb9399fa9e8ef02a0535f2c6aba3a289e14b43b07",
        "raw-stake": "11790816994408000000000000.000000000000000000",
        "eposed-stake": "11790816994408000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1d5adetdwd6zkhu8l48q9fq4j4pmwckpu3eng67",
        "bls-public-key": "0c0bc237d97290e31a9282f6162ecfca5c5532e59298ed3fedbbf8fa9642e9a35a67df277b9c70c5a7886eea3c54cd0d",
        "raw-stake": "11781877000000000000000000.000000000000000000",
        "eposed-stake": "11781877000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ss2xx6agknad0k3m0v5m7sr4xz97vzsk0rk4a6",
        "bls-public-key": "c2fa456fc54960829ab205014e8eb2c359b4f8b0ce3759756031bf2a57ee4b5d69c8ef94716ae8a33cb47ada9be5c884",
        "raw-stake": "11781877000000000000000000.000000000000000000",
        "eposed-stake": "11781877000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1sn4c3zjj9s83ezfplc72sgvelalwp45yxltzv8",
        "bls-public-key": "866da1ce28c6370f53b40c243d630044a1c24a5d8e9101525205e807710a7f242465ef020cb416f4f46bb1e9aab57b18",
        "raw-stake": "11781877000000000000000000.000000000000000000",
        "eposed-stake": "11781877000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1twuxldpnwcafdu025jd7aa5r7we4j29ndtafuk",
        "bls-public-key": "d5cf9cb52b9afb4f97997cb4830ec83e8471206d773d090ac2423bedb2175756ac315f32832822db9cbf74dff93ff10f",
        "raw-stake": "11765003234999000000000000.000000000000000000",
        "eposed-stake": "11765003234999000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1566p89a2hmwkxle67nvqq7pvncgy3h5jukdcnk",
        "bls-public-key": "178604c4f3757bd6266a4b24651ef82d371db8dc3a1dcfeface2e15c00522a263bebc833e34f545a927ebea1e98c3880",
        "raw-stake": "11752357999000000000000000.000000000000000000",
        "eposed-stake": "11752357999000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1r55rwumsrm6w3d20uhaa3hm4rxr442k0qx9gj8",
        "bls-public-key": "f64d27b412859b15cbe055d86e313b52f7a851b01782ff213855ef89c1ee57b1a5d25f8159c013006f104a8206b04900",
        "raw-stake": "11715642906941000000000000.000000000000000000",
        "eposed-stake": "11715642906941000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1cy54nt7chpmgpya0sjn6g6avtuhypuz88dn3ys",
        "bls-public-key": "b87fa42b3c10fa896f5efcb3df29a2ebb341e51c79c06623c8315fe49503b6646b95fb137bf0dc969f1fb37308f2ac87",
        "raw-stake": "11712317699998000000000000.000000000000000000",
        "eposed-stake": "11712317699998000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1el3arlc0dczjpr8crhufgszurt6hcmlm66evwa",
        "bls-public-key": "8c0ec55728c48aa43c1a9836f988e847b48284ad6baf37683efa957b763cea5102b1feb7409bf404f970da27fa750997",
        "raw-stake": "11709116000000000000000000.000000000000000000",
        "eposed-stake": "11709116000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one17s02lunsym6neywxrf7c76f2k489kxg4v77e5j",
        "bls-public-key": "bcc8e0cfd8c5a9b93d7596be630d320493830d8c381ed357fdaa54e554a945ca562e4980be13adb9b5c3570173542a8b",
        "raw-stake": "11707617000000000000000000.000000000000000000",
        "eposed-stake": "11707617000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1l4gjj04y99uwjsw2xpe9mv2t6ffyup0da29ltu",
        "bls-public-key": "3a1c468d71ab8986b74eaaffa48e28a9f94a95487ddb37418bb97ebfc1db93f2bdf0e3a555f1bd598629e9adecee3a86",
        "raw-stake": "11700395000000000000000000.000000000000000000",
        "eposed-stake": "11700395000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1zjlwqjty6kzefgt8lqgmsx4zzsafzdqxlejsvg",
        "bls-public-key": "7a889a816230d7cd4db499ab1eed84e2ae5c115f5cd8a89e48831f29bade2b805f255b836ddb7bdaf02c6299b5ff3188",
        "raw-stake": "11686445000000000000000000.000000000000000000",
        "eposed-stake": "11686445000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1sus3s4pe9cjv42r2ddfpwly4kr5g67nyquzh9u",
        "bls-public-key": "3fcf948144eee7fc7534a76eeb3b98d85ec4a306d621a382a93971d170c4e81c11dba276e4a84367a466344a1ce7a20c",
        "raw-stake": "11678569890750000000000000.000000000000000000",
        "eposed-stake": "11678569890750000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ykwud6atcdvpurn5lyrhfmu3kpf4quvzgtqsmu",
        "bls-public-key": "0c0ae256b9ee46eddb1993308a42fbada95619282420cb36cb496718c8e24af6df3b25ad4a22e97ad3dd04631709b014",
        "raw-stake": "11639779763999000000000000.000000000000000000",
        "eposed-stake": "11639779763999000000000000.000000000000000000"
      },
      {
        "slot-owner": "one19a5t994apfnv68yqxmdnx8jf8qdy0pqzwdl96k",
        "bls-public-key": "7b57317d3b209b58bceccf54237ed72b03471fc24e2604468ea6afb9edea720869f311863f8fab4984c161f457e8c206",
        "raw-stake": "11571877000000000000000000.000000000000000000",
        "eposed-stake": "11571877000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1gxezhtvlt7yt2rj6jqegtlkvqgzs5jyfzx7qlh",
        "bls-public-key": "68c6e7ef3d891a155c9ca41d041addd012eee40571bbde3e2f719b06e2abefd4115195ac6100b39b57263e9a7b507588",
        "raw-stake": "11561699999999000000000000.000000000000000000",
        "eposed-stake": "11561699999999000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1c3l67kwzd2pzre55mqxs5pmpx8l3utas8cpq0p",
        "bls-public-key": "0c5cdcef8f96df89bb8dc3db0fb243644bf142ea845cf062a4bbe833eeadbf159c12b52b2b77b71559a9874ef834418f",
        "raw-stake": "11509809488218000000000000.000000000000000000",
        "eposed-stake": "11509809488218000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1egemh5e9xjy3x8d3cq0kq7mw4sw4jjwgkc7axs",
        "bls-public-key": "d90b4af4db279822edc6b4aa6a2b083512d0b6a873d8e71c814b7994e0f32b97f6a6d81d21344d7fa85e76f76af5e783",
        "raw-stake": "11497504397180000000000000.000000000000000000",
        "eposed-stake": "11497504397180000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1t7p6nre40hq7z97anrf5cqug3n3776tn3as5ds",
        "bls-public-key": "51d79e77275847d3d22c37172a86eb5810367caf35cff5b26d7ed56db0e4a92a12b13c347e4353a79a1111f8649eb887",
        "raw-stake": "11455628324559000000000000.000000000000000000",
        "eposed-stake": "11455628324559000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1lsvf8fms0emzvw45eazx855cdjh6x467fa4ad8",
        "bls-public-key": "2d848e108d36985cc4b355fefb700eebf59ff56b57c69e5e93bf4efbce21dd6769674a12f1ce7ba5cfccbaae13ea218c",
        "raw-stake": "11452565594532500000000000.000000000000000000",
        "eposed-stake": "11452565594532500000000000.000000000000000000"
      },
      {
        "slot-owner": "one1awswe9xrx5rcjxvtdd6lwta9py2t09g6cet05h",
        "bls-public-key": "2dd420cd3ca4279ebd5be60c153c6e0cc82cc3d0784ac2eef64fc64e0eec7fb22da3617018f8c91e9ab2aa7cb1ac1091",
        "raw-stake": "11401323760000000000000000.000000000000000000",
        "eposed-stake": "11401323760000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1uehsyxsr36d8ntskrln0jwvmskk2x44kqycj9z",
        "bls-public-key": "24e75a6611e25fe4d1abe5495ee80ac88351010756912993b5f327ff762b342c862df28eb083205afa0f4b672c56ce94",
        "raw-stake": "11386285000000000000000000.000000000000000000",
        "eposed-stake": "11386285000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one18dvfm36hq69rfqhzmys7fvmh8qgmqw5z6m28kg",
        "bls-public-key": "ae8cc5cb7818994b98d72c1f8d5415e3e315f4a975a58121344dea8a8fc79c0942609f2e502fe67ab2742176a886548d",
        "raw-stake": "11338015000000000000000000.000000000000000000",
        "eposed-stake": "11338015000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1dgtd73aumt2vx2el35g8wqkjsj4yzxkjg7sx9d",
        "bls-public-key": "83ea04ae5efe9c1ccbacf9a0cea9206a5d38090d5fddd19f2919bef04a89e82c4f662e991c9e9d06b593cccb4340e496",
        "raw-stake": "11315299787484000000000000.000000000000000000",
        "eposed-stake": "11315299787484000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1lrye4mmkld3a625ygvl8ulsmha3qzarmxny5pv",
        "bls-public-key": "e7fb4c8bc46f4f317a0ed3b68c9692b64138b637f1da08d7b3b6d46203b07023aa6e647c19a36e331bd477b95e67b017",
        "raw-stake": "11288787000000000000000000.000000000000000000",
        "eposed-stake": "11288787000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ce9rr00xr4pjfhp7k20j339emqhsegm8063vr9",
        "bls-public-key": "c0f93557b237f799d4086d931649a9023a0807893dc3c8265033a482fa128fdfa39efadff5fb9411f873aba255272488",
        "raw-stake": "11287239000000000000000000.000000000000000000",
        "eposed-stake": "11287239000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1fv77qz6ngvuvzhqzg9m0mqjx6d32dqwzqf6e9r",
        "bls-public-key": "ae7a9cd8613dda5c3a385c471fe1908246d39228bfef1b1a7092b3798fb833acbb4fb0c31576e5d9e3156e48e6be5b0f",
        "raw-stake": "11285178000000000000000000.000000000000000000",
        "eposed-stake": "11285178000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one14e55qn02ux59x3musrvwrpfgv67u6cvq6sf69a",
        "bls-public-key": "23b45d2c58eefa44ff0563c815eec8a9efbd9064cf08c8392356b31f058ce4265edc23dbd0722f6c12a36086552c6688",
        "raw-stake": "11275877000000000000000000.000000000000000000",
        "eposed-stake": "11275877000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1wxlm29z9u08udhwuulgssnnh902vh9wfnt5tyh",
        "bls-public-key": "20026c7ecc0c7b2bb5fd217d3a16cae4dff30b8c610d476da1a41f467db43f4d3fff706a6ebef4983564c67fc164f80a",
        "raw-stake": "11249999000000000000000000.000000000000000000",
        "eposed-stake": "11249999000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1jn5ak4qhh57feptrkqf4yzwtsc9azwx24r7p0w",
        "bls-public-key": "547a324c91b2a3ae8535071ad2da9c7bf3c3574214b0b9ee390664a3c5ee37884d87e895aa175b590b449349daf65c8c",
        "raw-stake": "11182356340308800000000000.000000000000000000",
        "eposed-stake": "11182356340308800000000000.000000000000000000"
      },
      {
        "slot-owner": "one1fzalye006mpjkss2thhd2rtplemvu6wkjxxzmx",
        "bls-public-key": "e52d7ee43f9a9a44d5329adfe7bfd70547f6894d52de3114de73f213205b72f5809cf97975a0f18006573e209ca37f94",
        "raw-stake": "11164603921076000000000000.000000000000000000",
        "eposed-stake": "11164603921076000000000000.000000000000000000"
      },
      {
        "slot-owner": "one13aydpznlr2wlhu62etn6kf3eya0fgazm0ynyez",
        "bls-public-key": "fd0225712ef2178f00a2b8e2f0ef7ec1781c69228310cdad48eaf78e2fcee8d7bb222b08ebd8b0d483fe7738b3ac0701",
        "raw-stake": "11163131947338000000000000.000000000000000000",
        "eposed-stake": "11163131947338000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1237cvlujddq9f68s94344rptsuwx0h7ek5lcnc",
        "bls-public-key": "c7c333c66d3c88440b8595306d5cdd733294f3d35b6da5f37e94f0241c620f0af4766a4a4dcc44704a18f2aff7be2785",
        "raw-stake": "11117724059990000000000000.000000000000000000",
        "eposed-stake": "11117724059990000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1c0w53749uf70lfzdehhl0t23qdjvha0sf2ug5r",
        "bls-public-key": "e552fbc280760d89e9f09cce27fb15223a9e45071f40cc03eb56a17613988214b7b6b0c8603237c55cddf47f11820187",
        "raw-stake": "11106044722948000000000000.000000000000000000",
        "eposed-stake": "11106044722948000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1z28zsvjvevexnnyyy2t5qv57vsx0ct7fvnnhl5",
        "bls-public-key": "c49f2e8c28f7c187b68f24f846550bcc5fe60c2719754eca1b55305d2591c3ec2b6e5291cba1c8f887fbe926e7ee5805",
        "raw-stake": "11086886916642000000000000.000000000000000000",
        "eposed-stake": "11086886916642000000000000.000000000000000000"
      },
      {
        "slot-owner": "one14yk0psfzn8tv2wrgw93huyllrq8te9s44d97zd",
        "bls-public-key": "db913f9c7d7dc3c32b4fe84632f99e203ce91bedf72eb7bf2527df3ab81e8f223a39a514ae05362c31e56bb4f5028785",
        "raw-stake": "11076617000000000000000000.000000000000000000",
        "eposed-stake": "11076617000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1x9a8cl3aryhp9c3nyr0hzxzrhmlasgv4g47tya",
        "bls-public-key": "ed393a3426af7bc5d8c7325e3a8d8451ea95696f9d3e32429979af7f84114b2a29130c65a59c1976dadc4a2ca126e408",
        "raw-stake": "11046317000000000000000000.000000000000000000",
        "eposed-stake": "11046317000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1w5m99xs7dn3nfdxmsc8f5vjl8hg65dc2e5kp2x",
        "bls-public-key": "1819d0789eb593764b7fe3f7f1a36aa113c0f1ffec14f146581e6451feeede5ff9e23d2a56c2edb7bd4f870e2b186c83",
        "raw-stake": "11036643206451000000000000.000000000000000000",
        "eposed-stake": "11036643206451000000000000.000000000000000000"
      },
      {
        "slot-owner": "one12c8tpmtaezelshv4r4yuwnvsurxhslw8jsgpeu",
        "bls-public-key": "71f79aa6548a3277a574ec5cbf31d1424484e204032c914505662cb4963cb4e29bb22219715a64a67f9c4fa7076e1a15",
        "raw-stake": "11006730380000000000000000.000000000000000000",
        "eposed-stake": "11006730380000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one17xz463re6h6hfpj28s6xgrx7eacec3yppfgu3u",
        "bls-public-key": "f92c5631824378205ea2423fbe0a820ab3345a4af120a87236e6228c0a75287ac33ca1156e05abbed3169af8f49c1383",
        "raw-stake": "10995386227053000000000000.000000000000000000",
        "eposed-stake": "10995386227053000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1k6ejnhwrlydzlua745avv9u0xmygerpl4xsr7v",
        "bls-public-key": "0e0039fe4362333113f6a18fafdb7625dcfe708ae7ae7257bf2f8ec8ac775dd86636d83d66be617f939dcb6480ec288f",
        "raw-stake": "10956425900000000000000000.000000000000000000",
        "eposed-stake": "10956425900000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1pzsehc47gl6euwnqe0lfmsdh83l3t2a7lygrzt",
        "bls-public-key": "c41182d63481d03875ccad187f9be6e3b97cc17fadc6fc67ca2be7a0ebb07e06d1442f0613ce165c9bf25c20c1a08991",
        "raw-stake": "10921876994586000000000000.000000000000000000",
        "eposed-stake": "10921876994586000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ffw8maa9ff4ahjp3j6uy7qd2j4y8q2x8xrdk85",
        "bls-public-key": "4f328a1326eaf8445eb588a86679ac4907d45e710e07dfff67fb36dd33e3f0023434c39248d249559fdd15466ac8938b",
        "raw-stake": "10907267000000000000000000.000000000000000000",
        "eposed-stake": "10907267000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1g520fddr2y4skj7crgp607uzzammlyy6tqgrln",
        "bls-public-key": "b1a2f231ab6718d6454c4fbaba10d9a919bc1c236b4ec8b0b78746fca58bcdabe8de4b8c423749c21a10de3d408ebe89",
        "raw-stake": "10872322337800000000000000.000000000000000000",
        "eposed-stake": "10872322337800000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1l8pyucgwcjlrchkcdw05jqfsz58pnkk53kdle7",
        "bls-public-key": "ca75abb7b6e16bd8a434a1f38b05b4b148ac575fca4ae060ddd176a5240854c1586579ea5a9d5c0771c80978aca39e98",
        "raw-stake": "10800000000000000000000000.000000000000000000",
        "eposed-stake": "10800000000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1gvvve6xfnlytdgfngqx3sfe5pmywnc9ykaudn8",
        "bls-public-key": "9d29878d00d093f9bb88042724b12d6ff6192ba9db78fb8fac62f633387797266f16ff43dd7ff88b3e615315550a1106",
        "raw-stake": "10799999200000000000000000.000000000000000000",
        "eposed-stake": "10799999200000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1n9at5vm0wwkh2zj6ldtgp5aqe0tsnx7ymnglp6",
        "bls-public-key": "476efad0d6d8a5c90a71b08903be7574ca6689d4c8c1e489db1ce24a204f5c7b236e969a5029a9c2368bfa1c5db25484",
        "raw-stake": "10794199999999000000000000.000000000000000000",
        "eposed-stake": "10794199999999000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1dzjvumwsmflf89m5r0w579lhn6p40xc487ry04",
        "bls-public-key": "81891c77159f2880152e3ce5b978398782697eb16b0c656e35e3660f0185fe84fff28cf687e684f2f87873167a58f618",
        "raw-stake": "10785192000000000000000000.000000000000000000",
        "eposed-stake": "10785192000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1expja5cuma5pdu4m3nnlesvnjpapkqr4maguhf",
        "bls-public-key": "6dc4f4b5a35f500960aa1daf66425e1fdf9f811327b32db6c9fe0d634554da9b258bd920a78135d8a65f36545e80e70e",
        "raw-stake": "10780679000000000000000000.000000000000000000",
        "eposed-stake": "10780679000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ygchq3eve4u2majguwh8e55k3ys8l4t5nex224",
        "bls-public-key": "1599542a6a047d65c8900075e6a92aa03492e0373019e15a729cde20253983dff723fae4be6e0a55e922d923897bc680",
        "raw-stake": "10776731700599000000000000.000000000000000000",
        "eposed-stake": "10776731700599000000000000.000000000000000000"
      },
      {
        "slot-owner": "one10ehr5wca4gpt298ppklwuypnzqg6r44hl7ffgs",
        "bls-public-key": "7b2b06915b1416abe6edd51d9bde4699b83c35749e569cf530902aa10a349b7f9c918bc5572b650e283e80445ecf8704",
        "raw-stake": "10762190037551000000000000.000000000000000000",
        "eposed-stake": "10762190037551000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1rmsztmw3727yjuszwd484z8mvf9v6fkkze4r5s",
        "bls-public-key": "bac85ed94cf9a029d6ea8497d345a3668a14b796bba4b7269d4d3026ff37800f931766e0de187c1d6275013671bf2103",
        "raw-stake": "10726719899999000000000000.000000000000000000",
        "eposed-stake": "10726719899999000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1t73da8de332nfx7x6hj9pnas2aa3e8pcrvryw0",
        "bls-public-key": "842698605a26e28aef1ff006292389e5c2716233bcf91c54adf4562d772e7c07e8aee292fa698027c113188df7b95999",
        "raw-stake": "10715074999999000000000000.000000000000000000",
        "eposed-stake": "10715074999999000000000000.000000000000000000"
      },
      {
        "slot-owner": "one123qhn8m0amf7ap80gplf68eae5923lu2ltpupe",
        "bls-public-key": "4077687225674df0113810e1a5d9d374e792c37884a255aeceafd0d721fa3e62dce471ac1464463fc3f0958451515093",
        "raw-stake": "10699999000000000000000000.000000000000000000",
        "eposed-stake": "10699999000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1qe9wp88t048y6r9hlzf42jqv6v8cfnk5enl94c",
        "bls-public-key": "2c0ba52118e3f3ad5130b189a2040a3f47b608ce698e4eefaef6acd97b0ba5aa8c2ff0d28189faf9c7f094ccca6e6c09",
        "raw-stake": "10672115074961200000000000.000000000000000000",
        "eposed-stake": "10672115074961200000000000.000000000000000000"
      },
      {
        "slot-owner": "one155rynlqtatfupkpv9qftvnh8m0mcy6a8yrwwwk",
        "bls-public-key": "581d2a6ea0872d64ea5664d49e2057aca47bd987e69315606eb87c69163c3a0e2b0e99899c641e8959606ea7e2fbf108",
        "raw-stake": "10669538345808500000000000.000000000000000000",
        "eposed-stake": "10669538345808500000000000.000000000000000000"
      },
      {
        "slot-owner": "one1920ku8c9uerwyavk9hnxgpdshak7w7dn9gm632",
        "bls-public-key": "2e19dd61de8d74a9e4e571af05a9c597949a146da8cdffb1e53a836522fabd6fb8ab733f164763efe17a2b94db7a1193",
        "raw-stake": "10668910573979500000000000.000000000000000000",
        "eposed-stake": "10668910573979500000000000.000000000000000000"
      },
      {
        "slot-owner": "one1xnzpe9aqgm7aqd9f4sgzm5ycqgmw7uga43f2gd",
        "bls-public-key": "f97888cfd9c3be5b469bb7c2a8cd5f94f547e343610e89db418083c7ec2e9a22ad2598884a0737e62faf1f2539a15504",
        "raw-stake": "10653999000000000000000000.000000000000000000",
        "eposed-stake": "10653999000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one135yfjuu5xhm7p3trj39tmg6v8pu067hgul38dy",
        "bls-public-key": "b16e9a5492989618ef7c5723b4360b554ef44a0dd7c4624ab660d23431b2ae00b5d00e32c26bc75b50bacc68b7d50908",
        "raw-stake": "10609377000000000000000000.000000000000000000",
        "eposed-stake": "10609377000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1zzz5hanvsmtvl86zuur6nwx8tarcdh0g94vj9l",
        "bls-public-key": "95d54d59d5d9937d0a4227235e4755f5ca2329bbbf9973fcc7104cb6a9a125e840c4e8a9aaa974e31da1b35f22117a99",
        "raw-stake": "10600000000000000000000000.000000000000000000",
        "eposed-stake": "10600000000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1080c4h7uev7u68s330vnxsfw7h6t86ufer8923",
        "bls-public-key": "6435387ff7654d16d6eb77029c18157a2056cb15bb9391ab7926bdb955b64e7a472228ad60d5e6889c2883b15837a915",
        "raw-stake": "10596162000000000000000000.000000000000000000",
        "eposed-stake": "10596162000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1jv4n6rxsg8puxzaelvsymkryupyuezt05rk36c",
        "bls-public-key": "24968b953506079535cb6bb95f4a1438870ad72d9be1d7ccb29fec672cfb63587b282a4e70759c41fde136aae3e5068f",
        "raw-stake": "10594343899999000000000000.000000000000000000",
        "eposed-stake": "10594343899999000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1z5je797487dw9qpgkqtrka3ws4m73unasdfj2c",
        "bls-public-key": "959c14a7daf951b6fbfb0fe84158bd7441daa232575b46d28418ceb7c8d66a2df57886c70fafea6c87317e1ae5821092",
        "raw-stake": "10583663170901000000000000.000000000000000000",
        "eposed-stake": "10583663170901000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1upjqy8au5rfa70xwq52gvqsdjdcem5t44f8gtq",
        "bls-public-key": "6c26de1193ce6a62b2683593a61c3c4b2d46cd383570dd289d8040dd705cc5fa6fbf608a9c0329e29016f78d84661b83",
        "raw-stake": "10576617980000000000000000.000000000000000000",
        "eposed-stake": "10576617980000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1gm8xwupd9e77ja46eaxv8tk4ea7re5zknaauvq",
        "bls-public-key": "8184ae3b4c83756ae70e31db625fafc021d07b189140391152ad19df11841e920b93ee3ed71f8d498f3fdc570f415f93",
        "raw-stake": "10576617000000000000000000.000000000000000000",
        "eposed-stake": "10576617000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1hq70696u36wfhpfzjggsm9zw3vz7l49403ndtx",
        "bls-public-key": "832672b827e9d07ba1aad1e3550e38b869d14d771cc20d10b66263e2fc5e3383cedccc5d06b64ced3b75b78e70556c09",
        "raw-stake": "10576617000000000000000000.000000000000000000",
        "eposed-stake": "10576617000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1esvnhtvek2ggz3e8fq6znejtpzgr7uqjaf8h45",
        "bls-public-key": "200dd9daa86dcf89b18bd468e6e8dd2c59f0b50ef4194f463f7b02a86a381dd4cfe589ccebe43bba3144f04489f2d98a",
        "raw-stake": "10572312000000000000000000.000000000000000000",
        "eposed-stake": "10572312000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1uahjhhl8ajwshuxlxyzhqa6m565mek6kg6hqc3",
        "bls-public-key": "6a5851aa43c99baeba79b2996194025d9994360a329d82486befc70e90199480cf1114bc08dde1675595f215f8ad6d89",
        "raw-stake": "10567239000000000000000000.000000000000000000",
        "eposed-stake": "10567239000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1cf3fckv4u3kvjvqczyydl9jpy6pfa0fs8cauac",
        "bls-public-key": "87237e610109682036dda3e7edb27982d342ccf4e5a3d81ae5fbe7cf433ad3261eaee15b30fd3c24859522f5950cfe01",
        "raw-stake": "10510100000000000000000000.000000000000000000",
        "eposed-stake": "10510100000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one14shlkfq00yfmf3r4gglt0hqfcxrgx7ysmsz832",
        "bls-public-key": "b46870f3b41be0b72f256ad2dae48529bd5e314d26ece4c2b0ed42cb7c772a1e6c1eac487adc8ca1172b23540ce9578e",
        "raw-stake": "10499999000000000000000000.000000000000000000",
        "eposed-stake": "10499999000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ym5k67rqeuchrsgy2eztwhkkt3r5kkp3ed2w6n",
        "bls-public-key": "5155e59612c78a878f5c3e62f060bd12d16e42102129db81f39ba32fc4b4d0ba78b5623636b1da498961fdcf9c03370a",
        "raw-stake": "10471877000000000000000000.000000000000000000",
        "eposed-stake": "10471877000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1cvdmwpnwdcke9sg8srlncxd0rmyac395q2qrwa",
        "bls-public-key": "1a0f8186ff37146c49706036ae839530d5b007bf1d42770e44d4c1e751e416f2a1353631189ef17e972d506f3e970e81",
        "raw-stake": "10451636518965600000000000.000000000000000000",
        "eposed-stake": "10451636518965600000000000.000000000000000000"
      },
      {
        "slot-owner": "one1rg25sq00gqzu38vhm4z4j7ty5j9mpq72et9zv5",
        "bls-public-key": "4fceb39b832522462839dd3bd805e8784705a77d73ad4191f2d6bd7f44803796d7060007008078b0ab3fd6f806a0d014",
        "raw-stake": "10449921523501000000000000.000000000000000000",
        "eposed-stake": "10449921523501000000000000.000000000000000000"
      },
      {
        "slot-owner": "one14c9sgmh2lgpc3lk9t4frs3vs9cf7zy3rkrwyzx",
        "bls-public-key": "4ac7a265e7ddc0cc71cb14cd10ccb87b241e84a5a7acc7bae3ebc1f1164dafca754a54ca92672c5e11967bc04c000299",
        "raw-stake": "10445472484105000000000000.000000000000000000",
        "eposed-stake": "10445472484105000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1svtmmvm0nxcqz0nj83ceq54cplu3vdf73l076z",
        "bls-public-key": "86823f71815aae6d443eee2d448d0742b086af84659054eb161858a5f7b5dec190012c3163fd4b703e95469336c84016",
        "raw-stake": "10410100000000000000000000.000000000000000000",
        "eposed-stake": "10410100000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1pul5cd3hewakyfcewdn2m2xhuk7w0ese9u733s",
        "bls-public-key": "24b8ea2a66cde6a6e405426117c556f133131cb628fb0a4938a59f52fa69181cb58674de1f3064c76b8883d66eb83f13",
        "raw-stake": "10393987100606000000000000.000000000000000000",
        "eposed-stake": "10393987100606000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1a8avzz3hcvhfrh2tp7rdprpvwt838y9um9c2q7",
        "bls-public-key": "d0356c9cf2a8a737167219729f35d7e8486ad104e839b62ca051e72e45ea49cf54041cfdf21ac7244d4de0890c76f40c",
        "raw-stake": "10379090379447400000000000.000000000000000000",
        "eposed-stake": "10379090379447400000000000.000000000000000000"
      },
      {
        "slot-owner": "one15cazch6k02clu4eqzw92mgk6l639sh9qpcx3ma",
        "bls-public-key": "db6c36c33142c4f7684c2a56d8e970a5681951112a13fe8c41df278ad58e5aa7d384673c434e8e3d3ee269f4aed9d417",
        "raw-stake": "10372150696000000000000000.000000000000000000",
        "eposed-stake": "10372150696000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1yzp3yw8x848jazrz7w5a24zulum2nsjqnd9n67",
        "bls-public-key": "df69d69cfba54c0e579eaa43f75846ff05b9bcadf09b502f7c5eb5410e5a5c7bab0e68bfd9b079aa981bc136c84c5495",
        "raw-stake": "10321652000000000000000000.000000000000000000",
        "eposed-stake": "10321652000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one18syyn5nsuu9yz6nz0uuuns6587cwqnqex58v39",
        "bls-public-key": "e5ac12e3545eba42d11d7440796745a52d3af8f3f4aa1f657ac4153f3ec00ea055fbe6f65f1d17f481dc4881e6e03197",
        "raw-stake": "10319470332814000000000000.000000000000000000",
        "eposed-stake": "10319470332814000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1dk3ul0r8l32600al7zql8jvemumj93myuaptkf",
        "bls-public-key": "fdc88e22bdd90da5724d6ec8ad281bbe3c2891d09b6325b4cfbaa14666263393fd94b7df075832a3c431fd8ca6a6a78f",
        "raw-stake": "10311623369999000000000000.000000000000000000",
        "eposed-stake": "10311623369999000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1mehlyz3vvd8jx3l7lt66wm7m8cn6xmre96utvw",
        "bls-public-key": "cbc21b59a384f1a16e74ec97e7b63cd03451dd96f665fc0e92deadbefee1cfe579303dbb37bda6edc1bf9d6be8f9dd00",
        "raw-stake": "10267066099999000000000000.000000000000000000",
        "eposed-stake": "10267066099999000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1hv558esjr6jc57ahlvu7ape0p975hyq3t26sms",
        "bls-public-key": "687610ae21d8a707eb77c4fcc089cae8f8dcde89a925744ded3ab89460aace710a6396f87a012eee3d3153e240f69785",
        "raw-stake": "10189077000000000000000000.000000000000000000",
        "eposed-stake": "10189077000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1lu0dr894pf8enqzcza4ytm4wcx9eyzkx0f7ha7",
        "bls-public-key": "0ebde7d86adf404a903f0856f169931cc0a3e4f78eafadaf575d839511abf15838e7af6baeada9ab2f13dc7d6291bd08",
        "raw-stake": "10162286000000000000000000.000000000000000000",
        "eposed-stake": "10162286000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1fn554v95gw2htufxpyrk6r2wejr46gx0ewwpqn",
        "bls-public-key": "5986458048a5839d14c93a248de63e121df1cbc2b2b93282156566870d5d3f7cb5f90cd6a41a7b8ca34101c62951060b",
        "raw-stake": "10127457933018600000000000.000000000000000000",
        "eposed-stake": "10127457933018600000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ng4agl0mz8a58v86ap77qd3d5kc0q2kprptldk",
        "bls-public-key": "af8cda6748c00cde2ecea66566adf9ccae811458a83ba33aedd9799f62ee5b092596919f32f36576b02f810d13102417",
        "raw-stake": "10124248494000000000000000.000000000000000000",
        "eposed-stake": "10124248494000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1j9gr0maryak7mmgkgw67gsgz3wxhmnv6cpvnqy",
        "bls-public-key": "8a742d8c2419c862bea4de4cbae81b1223b2c369d688dc2bbcc04c2717bd71eeceae05b7ed84200abae634c01a494918",
        "raw-stake": "10123175117179000000000000.000000000000000000",
        "eposed-stake": "10123175117179000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ryuvxq3mgcvj0a2ukpa5dkuxmlc2gdf7pcc775",
        "bls-public-key": "764d50e4781440ac44e78f9001f6f8d7770bdea0d9d3647e578d28d34fcb9a7392f20912e8a6f9b9d08c4e07ec6f1609",
        "raw-stake": "10117838637504000000000000.000000000000000000",
        "eposed-stake": "10117838637504000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1s2k8p76yedjzdu9wqkj3pwrf72n453zhyssjhp",
        "bls-public-key": "73b31b932c2d747e72ed74a033819fcfeb19328785835c44155a8fc49ef4d85dbadafbaebe132ce93a0baa5fcb588d82",
        "raw-stake": "10111900000000000000000000.000000000000000000",
        "eposed-stake": "10111900000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one159c8eq2a3282nhq2ufvwv72f82ja7qyl2snvh3",
        "bls-public-key": "b1a7b73f93cb461f560d1f6dfe1149084746a20f38beb91045574df610661fb95b806039ad310a262a620f1235dee093",
        "raw-stake": "10108637000000000000000000.000000000000000000",
        "eposed-stake": "10108637000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one14k260sxkghzm7k8lnj46lvvk45fdcw667h39mp",
        "bls-public-key": "78fa7956131032aea66a9485479f3cfd03248bc78d8883a9a02efb647eb5a6f1386588548eba06d4014ccda22309b087",
        "raw-stake": "10093117000000000000000000.000000000000000000",
        "eposed-stake": "10093117000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one10nay2vc33vx088ecvqfu9yk96get0j43qzp8qp",
        "bls-public-key": "2113771d0a9636607c6fe8bab2887f430854fff8f3856babe17a31399b1a3cc240f6f3edca0de7b43c80f7c4650fed91",
        "raw-stake": "10076862000000000000000000.000000000000000000",
        "eposed-stake": "10076862000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one1jm28f73rmg7lnca7duuyuqrhkp4ahfzdvzzdsf",
        "bls-public-key": "becd65dfdcb41486187b5e9c4e1b0758ff30c302b0bfb29b57e92278c4c55a869c3d9d176b9b4339787b1e961e306c14",
        "raw-stake": "10044673148036000000000000.000000000000000000",
        "eposed-stake": "10044673148036000000000000.000000000000000000"
      },
      {
        "slot-owner": "one13zw4cvg2jnuq494r79agr2pq5nr3rlmp9lh3e8",
        "bls-public-key": "e0bf10df5e9b77753ae384350492945498bbe73399a60452bc73785a50fcf4dc742f32d7fa8b04e144c542e0c6183f99",
        "raw-stake": "10040453000000000000000000.000000000000000000",
        "eposed-stake": "10040453000000000000000000.000000000000000000"
      },
      {
        "slot-owner": "one17n0g9ccvaz3j2tx6hx5aq94czf54ha3h5e376e",
        "bls-public-key": "cbe242f24fe0ce3076c243d352710c0a444da5c9dcd08b72c5113e9d84bb278fbce6d0d7b42977e57670f505ceebec91",
        "raw-stake": "10008773399999000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one19et0hagya58q9kc4ama7npp5ldtpydxpxg3528",
        "bls-public-key": "9ace5f7b7226095aef39e6abe29cf09f21a7e834c6b82e76b1a3401dc2319e9a3e53ce2931dfcfc8b303e0c442943f8a",
        "raw-stake": "10006232000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1rhpfn58kvmmdmqfnw4uuzgedkvcfk7h67zsrc8",
        "bls-public-key": "c9e3840c651df5ea559f5c9e12f816a28a706627acaeaa73affd0c7bba049f6fb0457d616f07978c2ec8f8c5f46cc011",
        "raw-stake": "10004334000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1c9h3u72czs6sk755tjyse7x5t70m38ppnkx922",
        "bls-public-key": "e6791a7fd6ad130035dc16cb9a463bc6932f782d3599b7317873b76e137df0d4b23903d93655efec4067442e8f532c09",
        "raw-stake": "10000000000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one18k6qtls8wwhw0v2kjl9lsyktrx9myyx26ey28j",
        "bls-public-key": "ec43375dd33603472c859011e46b532070369c01b32db32ecd4184f53e7ac299b13f1743d8cd37d24ed8efd0b53b8993",
        "raw-stake": "9999325200000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1qrgn3tlf58zsdp87s7pg0rhtjd5q8r56lthyrn",
        "bls-public-key": "ca565e3b6879fcc151d645c699d9bfd2427b5382ee3457b519bf019d836d9f892cc6e32fdc1044fa3d88da1a2a70858a",
        "raw-stake": "9999148692774000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1y5n7p8a845v96xyx2gh75wn5eyhtw5002lah27",
        "bls-public-key": "f882f6c609eb79a351150874afd5d08a0dcb8a1b510ee5875b0dd51ffe5b569c9d9d733b870dd0a9408d7957bb207513",
        "raw-stake": "9993117994000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one12lggt2syf9u6zy40kx5x74upwe9s766tmn8av7",
        "bls-public-key": "70099d329cbdacfed3ffd7b4717386490e4dccdc9016bffe8bae5c469973a06e1c5c9fa900d09185f18f1e4f25ccb293",
        "raw-stake": "9952777000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one17zp5fnhea4fs8pyhv8xjkd70trql0lf5snva42",
        "bls-public-key": "95ab15bead323bcf24a02f05b0f715b37944e1385679c9f2de8c108809933706e92f312bcd54a43571cf2f64a227558b",
        "raw-stake": "9936274366000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1dusx2pe9urxj5am753c2szwt3p0mna8rj7adxr",
        "bls-public-key": "c6e983e80e8a0614aac1ac21effa5f43020881041a71654cb77aa7cdae94422b4deedd84203ed9a52c07a10e4c013717",
        "raw-stake": "9924157000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one14pkx9aqrpeygamrtxegx8hm4jwvf904422f000",
        "bls-public-key": "11e234fff630d4d86f8b2fb2597a7b307ef81962224421874b34a8089ad90d49e83d02e28c3a4f5430fe7be6a3138187",
        "raw-stake": "9919590000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1uckk7fce9dfx0ma3hnz8q8n24dfdjjhdup8r7h",
        "bls-public-key": "7fe6236649f37e199b8e3a033cb24ca27ad5a8fc7d168f87a82c7ba2731e0957a0b516c6b0370983be4f739dcaef1f90",
        "raw-stake": "9919590000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one18qwdyxz8g5x96ynn3a7uk94pe9dt4euhz2strt",
        "bls-public-key": "4b0c4441f134b30cbff349cb660d85009c1b0871bf7fb6d0a1ec87b439fa1f217fb9fdf262cd92c2fe03032426058e19",
        "raw-stake": "9853212874188000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1znu9dyea02l968hncspjpp8xxrzsyu26xkrjuu",
        "bls-public-key": "32454cd8cfe11e9137ea05a259fd44c65e4a76764504186815c69ed745a226939642a8a16ccb79f4d990c6aaa19f9e10",
        "raw-stake": "9809324327000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1gjt4latm8qepeg7f98hz9s38vg8keavl85qcdk",
        "bls-public-key": "c214a0ca0ec4524ece2926775b311a67f65734dd7a1a4d147e07f4774c31721ce5943f47b7e826fcb3a25c08523d7b85",
        "raw-stake": "9794162994000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1tcdagh2wwlcnw5c2dwenz9k0t9ckssyrwy6c37",
        "bls-public-key": "74772987f4d907c7222687305f3d2f318abddc8d51f910bf5726c4e0dfe9e2e66cf985c416d8a03f98a3155c1f2cb310",
        "raw-stake": "9754613000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1x08eyghh8uhldsg2vkmss6dzul4zamkmmkqeeh",
        "bls-public-key": "c562f92121a31e899053fd8633f9253e87062f862c29251e6c648c7191285ca5b4da0b7a059c8b4f5505d9fe46610912",
        "raw-stake": "9714191000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1qtxatr7lr87xyvah39vdc77j4agyd8323ucuq5",
        "bls-public-key": "6986635b77c398241c9fc037ee38d49dc1a19d81c62d126aa26f66bd4e231c79f6ac53aeaaf949c69931da740c86b082",
        "raw-stake": "9708792112800000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ka8trua6hsqmszqzthr30cj0rxz33lklq307zl",
        "bls-public-key": "f69cb2dbba98a4fbbded60ad8a8e599762afaf4c9031cd0a5b2e1aa339abb8dd91d17a938cc96b4d9ca62eee39976995",
        "raw-stake": "9689422000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one148gj6aajacau3j0sgpafa3e6grxngy3gjfhw40",
        "bls-public-key": "365cfdec86227f8fab1bdc9d5bbcb91a4396f462ec2bc638701e1a0a9c46705b67d4540408fcb33aeaec2ea3b2247195",
        "raw-stake": "9688971900000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1stl2wdvm273xck38wdp5ecfj0nap4ctx8wycs9",
        "bls-public-key": "f1d9ead27405f680502a1f74fa0961158c9c1b9caba8d6f9066db66a6cf9bd35aa588a0d397bfc2c3ae9765133f45c19",
        "raw-stake": "9688842000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1z8l2gca5rw5ws3pss0p76fyla9ge9zer3hne9d",
        "bls-public-key": "144d3664a430c34f35ccffcc8c8d704cdfa44dea81597a6c85af5ece395516fafbf7ad01774bea15413da8a0773acd81",
        "raw-stake": "9673378000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1a8mnuqpq5ge9z492zzqqrgjhlccgrl04aumd89",
        "bls-public-key": "f2fff44529c72145644db258b61385258011b7a56540241f41bd2fe1fc4f5764fc0285662412b2e9e7e8dec29f613b0c",
        "raw-stake": "9605057000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1c4keaqwlj8ljhdy6yzur5en40vnf3nzxv7qkda",
        "bls-public-key": "0b4a1b26d04bd69f050620bc8902465ee1eb5ccb57ae4ee4bed5c75bb17fa71759eed179e39fe22f26f3db8234805596",
        "raw-stake": "9594440000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1gqnfh2kkfn6wsgwtx7tnqkw86wpcqsk807kkcr",
        "bls-public-key": "523bbc459ef6d0d5130df5ac7bfa5f8709171689219849b343db9213be6db5630ba134c448b49883ac3efbb67dc6f819",
        "raw-stake": "9586877000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1n4zfs2hhfsffekg3cwvkm2s0qs8d44z7nlxkwu",
        "bls-public-key": "44ed7b6a7c29731e7b753feef367f08da97966ea56c3a8efe13b6b67a5c200132cbe4fb4946615de62ab52e14ef4e487",
        "raw-stake": "9545872610000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one148ghmpck56hkmprx7p0yuf0cgrpkl7lj47tyea",
        "bls-public-key": "7e40362268e44a5cc1de9cd9e6341b9a558cfc3bc34a152b5450b40c1aff67543b1462ede1d0b2066838acdfcae6d001",
        "raw-stake": "9536546714320000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ma4dd2kqk4lvf8e9ddgl76gcdun3t9gydjdjwt",
        "bls-public-key": "02e60595c0ae5a1766c5ac23b02f6220b237fd4e0f81144dc368a7681cdf56813017c8b1723122efad5bcfa9a78cc68e",
        "raw-stake": "9524356054649000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1t79hk65dkn3ef4n6xhg5xdjhq58nk7ld4h2x2v",
        "bls-public-key": "56e3bb8b8edbf2633cc7b2b61306c8ea3b1cad6eb36a52ba98c2d3e5c29a743233ffeb428b418f46af3bef0c66903f01",
        "raw-stake": "9510653499000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one19cuygr776f7j9ep97hjm0np9ay6nus9w5msy0n",
        "bls-public-key": "be205ec86841a3b96249f80e364c416a63b938617ade36b6798b377188d99bf27b5e85189116f4a4ba1b7a0c060cb115",
        "raw-stake": "9507403000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1zax7yd82fpl986prn9gcsygvlq6p877hawq364",
        "bls-public-key": "947bf4e754b28c1b4b393e42215a904747514351df7013d7a6dce706323cbf4593ec283468c8257b3a827dcd04502195",
        "raw-stake": "9446656692058000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one14dx72ctzdfsxvsckjfwcqrl8uwdukddd877hqq",
        "bls-public-key": "5df3a0f8666bb655371434054ce54cbaffce74f362a246b329970435099972aba9ee26a1c524d30cd379cb2795c7eb8a",
        "raw-stake": "9421204480545800000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1xpezw8k5e76t0jntvlgtug0t9wdzletvnl7r9f",
        "bls-public-key": "b59da657b3f0acb84214bdafb4a493c37659a2dc4a2d43aa3316c31b763297608d3b1b37adcd326a5cc5a1a845e46b0b",
        "raw-stake": "9355258362237400000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1373zh2mwd8gvm7kmgqkwzcgtnz59uf0s07xrq4",
        "bls-public-key": "ec8c1a764c774312d5bf8013db6374a88872ea5b5cf44e73474716504b2e088a18f37c8e1bc759debb1a85622359760a",
        "raw-stake": "9351877000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1v23gu2vl237uzqgcnwnnm8nqv4ckr6zehfkm0f",
        "bls-public-key": "65927ba35be03f040053369745fe7867bac95424b8a6ddd0819fe30a309ece9afd148e7883020f26b10bf93b8cbb210d",
        "raw-stake": "9295497000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1rd6wgcpcq8jn40md379ftlew8ukewu8ztl4n4x",
        "bls-public-key": "59045a780785e3d5cebc2532be7ebd1ee4f236594e8484bff36dd1d0c59b1f94c344507eede9c9ad0fd283a11c452515",
        "raw-stake": "9289717000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one16pavfhark2j7h7235hgrfrx3lwlj7xnkslesa7",
        "bls-public-key": "324ed2e36044dda94d7f4495134f6c838aefc194766cbcdb969537098936040976320808a68a8cb34eaa10e01d7f9092",
        "raw-stake": "9289390000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1es8mknwyq4zr45qvey82pa578q3th062sk6lzj",
        "bls-public-key": "a4955e29ea83ff526211afc8bec440bed5058833bf5b2160404c46538e331a6a394d02a6c8c984a92de10393f7e6f009",
        "raw-stake": "9276064000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1dt4md3nh3apdsmm8t0p2lsul2my5c2t93ky06k",
        "bls-public-key": "e51276b7d84c593298cb0331559ce2790d9d2343364ea6f0a8e4a00c84952d59b0bc0569b028aaaaefd317772a7eda86",
        "raw-stake": "9275240000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1z9pa5m7xrng7y4drwkwaau9m8ey77mkx6tl96a",
        "bls-public-key": "289df32bc0f08f35b539bf0f6bd434b8638868497a55c2c76a578dfe83539a784f2a7c650df61a90143bdbd7ac72dc95",
        "raw-stake": "9271877000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1yyayy87jcrdr8669cg7lsqtn4j94zu5fca25yp",
        "bls-public-key": "2cad967813e89ea39e89fa849f50cd7bd57eb6e019ec32c9e977d6fc73f24bea4e16b5cfbce2cbad3efe5b9acfa35581",
        "raw-stake": "9271877000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one17tj2jjehdlg8xfgp48xpeyqur2qf6nvs88jvyu",
        "bls-public-key": "89778b500d0fd1710a34d161673b57a149d462340446743f6f5f4631eb856667525368ded0841b8f5034b4ff4f839e01",
        "raw-stake": "9271867000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1fllqjv6hq8vfvz5kwyhaknw0f2emvfqmq0s2tu",
        "bls-public-key": "b599ab0a5b37542f80b61274249aa0d095a90b32498f766d940f5af64d441ae84bf2189a7030f5e9ad06fb024a04d699",
        "raw-stake": "9267240000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one13mle5wuyn90cjhtkphyg5pdw5s4hy2fx9vnvsu",
        "bls-public-key": "d0abf60762faaa469575bad17fe1c5bba858efe1196fc85d97f5cb6462dcffee2c731f7f22ee2f822fe2c7ef1e613402",
        "raw-stake": "9267240000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one10cf8n0w52fzk2a2spwwms452j4aqx3cmg80ftg",
        "bls-public-key": "80b44e97b102cc424ff7eb6f7a4f199bbfb2bc2c53f7c754fe2d69378fec74e0e3330e494b644ba960024ae1d78d2f0d",
        "raw-stake": "9207240994213000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1leh5rmuclw5u68gw07d86kqxjd69zuny3h23c3",
        "bls-public-key": "8305a3c41781663d2ba7509382925365400941409da98260f26d3132f91196fb8cdc423906663eef36334556652eb504",
        "raw-stake": "9203573349999000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1lpzdnqz47xnpand6k33zw6zlwx3fxc0veftt3r",
        "bls-public-key": "a35e9bae77e2accedfb32363a04f18daea638c8e53e945a40b4fbcdac28891b3594dff5299587d1291d9934967d8ba19",
        "raw-stake": "9055159751655000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1ma0aqp3evkn802s7eqw2qtpppvsxpfnw8mpuc8",
        "bls-public-key": "420a7db834d090761b099a80cb2061220e06eb6ebca2962e00d1e1e0e66de64ed01a80d8673164f3736de2fb1416b493",
        "raw-stake": "8826825406052600000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1xsf70cu7uuu5k6f0kpxp9at8r4dmg0sttzx40t",
        "bls-public-key": "577bac828dacca2acf29f8d38365a5af015b88298482c38f09ccde44f3c1a2d7011f710c4a7fe450d8b5d4e7a6950a05",
        "raw-stake": "8651010000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1td5wvcfwv6zp4vmttl7657jkun30z3dhl5d222",
        "bls-public-key": "61bb7372fb38bf661b382b8a6bc0c29009cfe7612bd886458f03d12097c24bb18198a6dc61a73005096839706ebf0c8f",
        "raw-stake": "8572740000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1wl3kppn0s8vn2shvjg6swyhyq5sc23cmq9u0sr",
        "bls-public-key": "3d3e99618f79f96144d33e80b1517a46a65af719bfd9d06079105d1e28de197fac16195886d1967acf98046632753182",
        "raw-stake": "8257986692370000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1k6w6v432ztk8g360lwapd95q4fzjjm9wczyua0",
        "bls-public-key": "6c34e759f76fa9c600202adf282aecc035c194ffbb7805c8322cf3fc074c1d3dfab9b1153b6901dd2c38503a04a46387",
        "raw-stake": "7762894992298500000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1k6w6v432ztk8g360lwapd95q4fzjjm9wczyua0",
        "bls-public-key": "abf2689fcb4593ce9786d22e0858dc816498e4d5124b207445a6d3ccfb7b1621e81e7395fa1a400f35040ec2d9fc8383",
        "raw-stake": "7762894992298500000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1v0fguw8l5l0gk7fvjq2h9pqgxcekrvy273pfsy",
        "bls-public-key": "0c3fd89575cd27f81d910ae0e25fa28bd0973fc16e5669c5460eb6717ce3fd00ab55c05ef7b2dfc3f1b74a1674f08788",
        "raw-stake": "7274041718057000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one12s2t8sexugpk9emwkuh37ncrensha47ec689jh",
        "bls-public-key": "3c77583eb6e18b74f739a8ddd0406afd06475e601a74611fd726249344cfb9c59264605060f6c530ce847048b099be0a",
        "raw-stake": "6285950000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one12s2t8sexugpk9emwkuh37ncrensha47ec689jh",
        "bls-public-key": "f0de93bf5daa8b0cdc22d6940c9cbe684c89e05def5a18296e954f8b94f862f86cf04cde96fbf3ca4b7be8dc0d67ff13",
        "raw-stake": "6285950000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1xk5p89nzd89044wf770ppqwv4rsz4wn78jgqzl",
        "bls-public-key": "d8e2d426c4977cd5805115f152c26b7450171d453952cc27bd319dd4e7b5a3268b559790dfee9f14c7280e0e6df06c91",
        "raw-stake": "5281876863274500000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1xk5p89nzd89044wf770ppqwv4rsz4wn78jgqzl",
        "bls-public-key": "baea58a081d297ac3e5b8b07f628e6a3cabffa81aa8ae01889fe5f9ff54a323403fc5933ecb78e7a55ea46e76ed26b01",
        "raw-stake": "5281876863274500000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1mhxpn2m2w22nuwr5gj7a3dv80p93kwnynrfepl",
        "bls-public-key": "23abacb45b6c6566c4b2973709d7f514754811f7f82196a5aa1d5a904275ea722a59907c1b19c1278c692125d31d070b",
        "raw-stake": "5008281694999000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one19fwj7f3e2kgz48cqe6vs43d6q08f5tpt3zhlu5",
        "bls-public-key": "19092afa662abb802651b96eb8b20cf248edfa0d26bd0dccefa9d93fc7f9628224d3545cd1b710381a920b0b71d8ab12",
        "raw-stake": "4929048630834500000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one19fwj7f3e2kgz48cqe6vs43d6q08f5tpt3zhlu5",
        "bls-public-key": "b3f88974af22ec352fee49aae74eb5d6910e301aee5724d56b4a344b6ca2a379401ac3ca91ea076e509019421a211a0f",
        "raw-stake": "4929048630834500000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one15nr9mha7fz5w2kx2dd7rfnpyd2j68h5dsexrt9",
        "bls-public-key": "fdd56e007ee3c4add8c737424387445423f5574da2961e5eec51c89c82f40a5b360f7e3883b40bf012c84ef4a2b7648f",
        "raw-stake": "4791870998925000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1tmp0rda39a4fv0ajal0c2ahtf2pt3mz5vgsn59",
        "bls-public-key": "2ac1cd49ebc0cb1c8a49cd90c41a555a7413f13252255ad68065d6f55cd16129876f4af22febf95b1a5f6766dbe90883",
        "raw-stake": "4609479000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1gd0d2vdtuygksd0n9nxxrn0xthxl584ls6q0ra",
        "bls-public-key": "c80ded184edb79de84f0e9f236c8abec76ce49494baf727fa888ef24768a206066a73ee8edf5b79145205e2076ff1f08",
        "raw-stake": "4199999000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      },
      {
        "slot-owner": "one1jy0a490u77phe6h9ms9gaeaupvcq9gpzq9cy9u",
        "bls-public-key": "405be6c51b2acfb917be43dc8664893a83d3e6782dead8b7bd3d2eee24b453ae6827a4e558eb32d0f4fad4cdfd9a1593",
        "raw-stake": "3354136000000000000000000.000000000000000000",
        "eposed-stake": "10023392910220425000000000.000000000000000000"
      }
    ],
    "epos-slot-candidates": [
      {
        "stake": 10123175117179000000000000,
        "keys-at-auction": [
          "8a742d8c2419c862bea4de4cbae81b1223b2c369d688dc2bbcc04c2717bd71eeceae05b7ed84200abae634c01a494918"
        ],
        "percentage-of-total-auction-stake": "0.001650508667356895",
        "stake-per-key": 10123175117179000000000000,
        "validator": "one1j9gr0maryak7mmgkgw67gsgz3wxhmnv6cpvnqy"
      },
      {
        "stake": 9809324327000000000000000,
        "keys-at-auction": [
          "32454cd8cfe11e9137ea05a259fd44c65e4a76764504186815c69ed745a226939642a8a16ccb79f4d990c6aaa19f9e10"
        ],
        "percentage-of-total-auction-stake": "0.001599337622358554",
        "stake-per-key": 9809324327000000000000000,
        "validator": "one1znu9dyea02l968hncspjpp8xxrzsyu26xkrjuu"
      },
      {
        "stake": 14625962208172000000000000,
        "keys-at-auction": [
          "d16ccb8b0b805d31066da270396cb8ed20db45a5c7741c709285d4064ee00040234506d03ed61c6d434321d8d07a7a8c"
        ],
        "percentage-of-total-auction-stake": "0.002384654726762189",
        "stake-per-key": 14625962208172000000000000,
        "validator": "one135f4zp70a6dsv759rx72f7t49ev8hmqn67e4ta"
      },
      {
        "stake": 20558389039903000000000000,
        "keys-at-auction": [
          "6094253b1c87ac6d65077588a9452f983a348a7439feea9607ea90cf257acac37ae5f8be18fdf60e3bd7b20fb0f8b509"
        ],
        "percentage-of-total-auction-stake": "0.003351892949048439",
        "stake-per-key": 20558389039903000000000000,
        "validator": "one14nt6nwd3p9v5dk7er3rkvg6y0nh8v9k7j3nuqq"
      },
      {
        "stake": 10576617000000000000000000,
        "keys-at-auction": [
          "8184ae3b4c83756ae70e31db625fafc021d07b189140391152ad19df11841e920b93ee3ed71f8d498f3fdc570f415f93"
        ],
        "percentage-of-total-auction-stake": "0.001724439005326515",
        "stake-per-key": 10576617000000000000000000,
        "validator": "one1gm8xwupd9e77ja46eaxv8tk4ea7re5zknaauvq"
      },
      {
        "stake": 9605057000000000000000000,
        "keys-at-auction": [
          "f2fff44529c72145644db258b61385258011b7a56540241f41bd2fe1fc4f5764fc0285662412b2e9e7e8dec29f613b0c"
        ],
        "percentage-of-total-auction-stake": "0.001566033348771585",
        "stake-per-key": 9605057000000000000000000,
        "validator": "one1a8mnuqpq5ge9z492zzqqrgjhlccgrl04aumd89"
      },
      {
        "stake": 11889461000000000000000000,
        "keys-at-auction": [
          "c2cae6e2f2ebe3a445bf1190402955a3f3f0aa79bd981110565d5a863a28c93c43fbb700ab1091fe5593f3c08805468b"
        ],
        "percentage-of-total-auction-stake": "0.001938488488399305",
        "stake-per-key": 11889461000000000000000000,
        "validator": "one1na892u23tfx43xfp0gep0fxkut0hswjka7r79y"
      },
      {
        "stake": 12528859000000000000000000,
        "keys-at-auction": [
          "1c308f3dc327fdd3a22117789cb4c19203387b0e74d7f32e0cb4609e4afe8b72772c9963f7279290fb6c966a14bf090e"
        ],
        "percentage-of-total-auction-stake": "0.002042737592921834",
        "stake-per-key": 12528859000000000000000000,
        "validator": "one1920vfl67pucex2pfw059pylsfr8hpleal925pc"
      },
      {
        "stake": 99999999650055000000000000,
        "keys-at-auction": [
          "fff0e3c33a7ace777780577f0241c9943938f73ef73c6d38249454e0703b4977aa0ff2e2d1e0e4fddfa121a24f0d7b99"
        ],
        "percentage-of-total-auction-stake": "0.016304258717999590",
        "stake-per-key": 99999999650055000000000000,
        "validator": "one1vjeljc4p3kr9va9ckfjsjfxsz6aenl7a0hnz2d"
      },
      {
        "stake": 99969772112039000000000000,
        "keys-at-auction": [
          "01d4cb04100f31ee36cd95de3e2961d4611916438f5fa514e15ca139313b4196c02757af613b763b001f9402df853493"
        ],
        "percentage-of-total-auction-stake": "0.016299330341980133",
        "stake-per-key": 99969772112039000000000000,
        "validator": "one1le0asa2lmwg44p0h8sfyq9d3pwgwtpx7xvmnxn"
      },
      {
        "stake": 13990119000000000000000000,
        "keys-at-auction": [
          "1c4a0caa22867ae484aa4034b6546d843c7476b514ad5844a89b4de69e6ea8f87ae240f41b5ffcb100ae6dcf50feec15"
        ],
        "percentage-of-total-auction-stake": "0.002280985204698211",
        "stake-per-key": 13990119000000000000000000,
        "validator": "one1wy9dkhsy8m7u0z5rzypmxsyyawmu6a7v9dwh2p"
      },
      {
        "stake": 26999999999999200000000000,
        "keys-at-auction": [
          "a689b39bb1de4f1591e29094b91d00596b0f371ea16fadf8b4143c680a1f9aff3e805e167eda2c583827ed0e7c8c9882",
          "842d27a14584d18fdf53951f0c24cc3a6a55ae0b4e639cbf9db15e675a6aa0f87819b78fb5d51ccf3b8bc2aefb47e186"
        ],
        "percentage-of-total-auction-stake": "0.004402149869264862",
        "stake-per-key": 13499999999999600000000000,
        "validator": "one1gjsxmewzws9mt3fn65jmdhr3e4hel9xza8wd6t"
      },
      {
        "stake": 11452565594532500000000000,
        "keys-at-auction": [
          "2d848e108d36985cc4b355fefb700eebf59ff56b57c69e5e93bf4efbce21dd6769674a12f1ce7ba5cfccbaae13ea218c"
        ],
        "percentage-of-total-auction-stake": "0.001867255930915556",
        "stake-per-key": 11452565594532500000000000,
        "validator": "one1lsvf8fms0emzvw45eazx855cdjh6x467fa4ad8"
      },
      {
        "stake": 20004798671280000000000000,
        "keys-at-auction": [
          "aad331aa5cfe5a58235cade19dde712b9375a06d20ccdfe7901a5618db6a21d75d6838781a32b6ecc62c814146a28f13"
        ],
        "percentage-of-total-auction-stake": "0.003261634142794361",
        "stake-per-key": 20004798671280000000000000,
        "validator": "one1z5uz7d80leehn85yz77yucmr3sk9kdz56vcpg6"
      },
      {
        "stake": 9919590000000000000000000,
        "keys-at-auction": [
          "7fe6236649f37e199b8e3a033cb24ca27ad5a8fc7d168f87a82c7ba2731e0957a0b516c6b0370983be4f739dcaef1f90"
        ],
        "percentage-of-total-auction-stake": "0.001617315623024531",
        "stake-per-key": 9919590000000000000000000,
        "validator": "one1uckk7fce9dfx0ma3hnz8q8n24dfdjjhdup8r7h"
      },
      {
        "stake": 14961000000000000000000000,
        "keys-at-auction": [
          "0a775e4b828b40f6415859f9fbc2a569ee3e5a62e485dba5781d5df3731c90c8fe865a365ae531575f91f5cbc7350e05"
        ],
        "percentage-of-total-auction-stake": "0.002439280155336058",
        "stake-per-key": 14961000000000000000000000,
        "validator": "one1fsyyst59aez33e5566xpfu44reh8g856qfqup7"
      },
      {
        "stake": 2005799000000000000000000,
        "keys-at-auction": [
          "010118a662e038e16ec5cb5785a19d3a0e9e5c1da5524c76d11ae907815b3e7b35558fd7bc23d5f39d8791b375a1628b"
        ],
        "percentage-of-total-auction-stake": "0.000327030659467476",
        "stake-per-key": 2005799000000000000000000,
        "validator": "one1lkr2fd3tlzsx2lf45k424njlqcvjy9576ufrv6"
      },
      {
        "stake": 2007967000000000000000000,
        "keys-at-auction": [
          "bf485d2f502c0bc0027418af779a27edf24df997a896fd4380fdd50acd7d8fbb3587324a613494d7bdcdb002a2c44e94"
        ],
        "percentage-of-total-auction-stake": "0.000327384135797719",
        "stake-per-key": 2007967000000000000000000,
        "validator": "one1yt0xugdy30ejkz9wfjwtfzm7gcflg90zs6pyzd"
      },
      {
        "stake": 11036643206451000000000000,
        "keys-at-auction": [
          "1819d0789eb593764b7fe3f7f1a36aa113c0f1ffec14f146581e6451feeede5ff9e23d2a56c2edb7bd4f870e2b186c83"
        ],
        "percentage-of-total-auction-stake": "0.001799442868459357",
        "stake-per-key": 11036643206451000000000000,
        "validator": "one1w5m99xs7dn3nfdxmsc8f5vjl8hg65dc2e5kp2x"
      },
      {
        "stake": 12315718000000000000000000,
        "keys-at-auction": [
          "cd6d4e6c4307851d4eeeb2c17fb6104207b53542f0bf9c533f0078a5c74863c23d151de9627d09098ad6c5c3cf594682"
        ],
        "percentage-of-total-auction-stake": "0.002007986532726093",
        "stake-per-key": 12315718000000000000000000,
        "validator": "one1age7nde9wkcv99z2u9cej4szmq73aa2c5tcsjm"
      },
      {
        "stake": 14359214388330000000000000,
        "keys-at-auction": [
          "718b9ead7b9aaa9cb70570450c6256937c86f08978c8a48b536c2a849f61ff52f1b78b39014064cefc5f223efd45a080"
        ],
        "percentage-of-total-auction-stake": "0.002341163471938330",
        "stake-per-key": 14359214388330000000000000,
        "validator": "one1ekup98s5tqxtr5hdzsz664cfy579jpq6w5smrr"
      },
      {
        "stake": 14035462378809000000000000,
        "keys-at-auction": [
          "6f59fc2dafbe524349122e1ce72b9abe4adf0690cf04cda59358b467965cbd22c9728e381e3c68d5e3d073b5ed2cfb00"
        ],
        "percentage-of-total-auction-stake": "0.002288378106516584",
        "stake-per-key": 14035462378809000000000000,
        "validator": "one1996e8rujj8xq7v23ztldwm2cpfwz7kqxzq7shq"
      },
      {
        "stake": 190222936068390700000000000,
        "keys-at-auction": [
          "0ac6418533bf747db097810ae93245d1ac1b4fd55cbcdf08669721f182edc4ed37d73690d8764a801c29bd1f54267381"
        ],
        "percentage-of-total-auction-stake": "0.031014439746098859",
        "stake-per-key": 190222936068390700000000000,
        "validator": "one1cpyxfht07yj3sug3mk7ymk4rd6e5u9w62f8y74"
      },
      {
        "stake": 12364617000000000000000000,
        "keys-at-auction": [
          "fcb6388c0cfcd6a89578b71c8257a4618c74cf834bc1a7c280727f6fdcdff1cfb047b1f2db3f8e0a0da6119d881a9293"
        ],
        "percentage-of-total-auction-stake": "0.002015959152224508",
        "stake-per-key": 12364617000000000000000000,
        "validator": "one1ssm0ea54n5f39p59ne22rlq3nzgw6uqckusscj"
      },
      {
        "stake": 11792886906401000000000000,
        "keys-at-auction": [
          "ed6e3417442ec8f82146a5cdc730763184e5b132c6b1f936cfa1387394b7cb66a19aba68835a00c4a7ca415e20ad8c8d"
        ],
        "percentage-of-total-auction-stake": "0.001922742798269260",
        "stake-per-key": 11792886906401000000000000,
        "validator": "one1p2jts72rfcn0a0jqk29ymecdz2krjzgsr5vqvd"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "4433d90f6ae044f553ef9f8de95f1a96889e43352d6bbead3d75cd8c8306758a5296ae550388f4bb87c95c9a54e8790c"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1fchs24cqnzyxsxzmulxsldru7zl3zahxwwyqnk"
      },
      {
        "stake": 9446656692058000000000000,
        "keys-at-auction": [
          "947bf4e754b28c1b4b393e42215a904747514351df7013d7a6dce706323cbf4593ec283468c8257b3a827dcd04502195"
        ],
        "percentage-of-total-auction-stake": "0.001540207352664237",
        "stake-per-key": 9446656692058000000000000,
        "validator": "one1zax7yd82fpl986prn9gcsygvlq6p877hawq364"
      },
      {
        "stake": 9688842000000000000000000,
        "keys-at-auction": [
          "f1d9ead27405f680502a1f74fa0961158c9c1b9caba8d6f9066db66a6cf9bd35aa588a0d397bfc2c3ae9765133f45c19"
        ],
        "percentage-of-total-auction-stake": "0.001579693871986266",
        "stake-per-key": 9688842000000000000000000,
        "validator": "one1stl2wdvm273xck38wdp5ecfj0nap4ctx8wycs9"
      },
      {
        "stake": 10008773399999000000000000,
        "keys-at-auction": [
          "cbe242f24fe0ce3076c243d352710c0a444da5c9dcd08b72c5113e9d84bb278fbce6d0d7b42977e57670f505ceebec91"
        ],
        "percentage-of-total-auction-stake": "0.001631856315344761",
        "stake-per-key": 10008773399999000000000000,
        "validator": "one17n0g9ccvaz3j2tx6hx5aq94czf54ha3h5e376e"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "17cc0907aff2b191d2c8b7292a2c2e1138e429e700a7a987d41dc73c6d830b731d88f36bb4199068d71c86d0baef5511"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1xtwcqcject9fmv64ptx6wyerw8y0k2n299n0ah"
      },
      {
        "stake": 16082279307020000000000000,
        "keys-at-auction": [
          "cfc6181d5b23b3b6fecc395c1b727ee12d0d35026cdc648942b427fbf28b12f5ed90776687fbcad5b9fdbcd8d4dad983"
        ],
        "percentage-of-total-auction-stake": "0.002622096435143748",
        "stake-per-key": 16082279307020000000000000,
        "validator": "one1jpwryfv7z2dpedrlchg8z66gryhymwy6gwdk03"
      },
      {
        "stake": 12075860633959500000000000,
        "keys-at-auction": [
          "d31e38437cac604b54bb6b5380f9767679f569801b3747674409fab22f00874aed5f437d1476764efa06876ef6cd198c"
        ],
        "percentage-of-total-auction-stake": "0.001968879567075818",
        "stake-per-key": 12075860633959500000000000,
        "validator": "one1ps7d865t4k6gf457p9rst6alkkczdr9z9fapkk"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "7c1c875e7ac8c34a6515c6f905adb325e1bcd99b70dd03d694040995243907a524469c0a6cdc4b2d984b094fe7da4608"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one190fnupefn57dg5r5s3nfjzsn6hg7fdn98ftskq"
      },
      {
        "stake": 12099000000000000000000,
        "keys-at-auction": [
          "c3674a18b560e9709416ca0c7666bcd5849d2d66768897129251c7a7ddb885d93d07eb91c559d753ad5adc27ead7af82"
        ],
        "percentage-of-total-auction-stake": "0.000001972652269194",
        "stake-per-key": 12099000000000000000000,
        "validator": "one1cz5yv23r2narsentclrdsfx3ms9ws8nh4l63wl"
      },
      {
        "stake": 11287239000000000000000000,
        "keys-at-auction": [
          "c0f93557b237f799d4086d931649a9023a0807893dc3c8265033a482fa128fdfa39efadff5fb9411f873aba255272488"
        ],
        "percentage-of-total-auction-stake": "0.001840300655118990",
        "stake-per-key": 11287239000000000000000000,
        "validator": "one1ce9rr00xr4pjfhp7k20j339emqhsegm8063vr9"
      },
      {
        "stake": 2005459000000000000000000,
        "keys-at-auction": [
          "20406c142cdcf825eca786bd0244381422cbbfb2d13043f416fc64cdc8bc7cfa6f9555b016acda468016b491bdcbcc11"
        ],
        "percentage-of-total-auction-stake": "0.000326975224987641",
        "stake-per-key": 2005459000000000000000000,
        "validator": "one1e53m72h933rzpsnku6gkwjy8mkrtfcq8gt35gf"
      },
      {
        "stake": 2199999000000000000000000,
        "keys-at-auction": [
          "6e554bf237032b3d564e457b127aa5a2902b85e76030e7428c485c983a1a7f37f8ccd35d10d3019630b916954324af95"
        ],
        "percentage-of-total-auction-stake": "0.000358693530008634",
        "stake-per-key": 2199999000000000000000000,
        "validator": "one1ff43kztajacdw4093w73vdtxxjcz37m0xfc3sm"
      },
      {
        "stake": 15309247994682000000000000,
        "keys-at-auction": [
          "e73156109914a4e05be1ada2912b0788957b37270e0dd9bfe214f93c85c826ecbc37bc9bc78f879361f432c0a62c7095"
        ],
        "percentage-of-total-auction-stake": "0.002496059409567953",
        "stake-per-key": 15309247994682000000000000,
        "validator": "one1x40tck8cu3l8k4erztfgerx99taywpn7xcfvgv"
      },
      {
        "stake": 19631552779202400000000000,
        "keys-at-auction": [
          "3774ee37c4f629346260edac71fc1ef45692accaffe60f02d6090b9ef91712f3bc8cdd355b1dcd06c4d2193d06e7f086"
        ],
        "percentage-of-total-auction-stake": "0.003200779166682765",
        "stake-per-key": 19631552779202400000000000,
        "validator": "one1f8hrk0l4a36hxsl8g6kqtg5ghqvzwg35s9y0sk"
      },
      {
        "stake": 10127457933018600000000000,
        "keys-at-auction": [
          "5986458048a5839d14c93a248de63e121df1cbc2b2b93282156566870d5d3f7cb5f90cd6a41a7b8ca34101c62951060b"
        ],
        "percentage-of-total-auction-stake": "0.001651206948734242",
        "stake-per-key": 10127457933018600000000000,
        "validator": "one1fn554v95gw2htufxpyrk6r2wejr46gx0ewwpqn"
      },
      {
        "stake": 11401323760000000000000000,
        "keys-at-auction": [
          "2dd420cd3ca4279ebd5be60c153c6e0cc82cc3d0784ac2eef64fc64e0eec7fb22da3617018f8c91e9ab2aa7cb1ac1091"
        ],
        "percentage-of-total-auction-stake": "0.001858901329612291",
        "stake-per-key": 11401323760000000000000000,
        "validator": "one1awswe9xrx5rcjxvtdd6lwta9py2t09g6cet05h"
      },
      {
        "stake": 12299999999999000000000000,
        "keys-at-auction": [
          "7ceb83d3af19a92cf74eef4ecfac8e3b9699789499eada1c2622f7497a6f082f83d0a5d6baf4e73274320409b505f18b"
        ],
        "percentage-of-total-auction-stake": "0.002005423829331667",
        "stake-per-key": 12299999999999000000000000,
        "validator": "one1qdmxqgru6vqv5v2u0jhjvgyl4n7c4a550mjtmz"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "8e71c663e96d9af6cd6604dbd8648553cb95815c0871d05dd2c3908dd1ce22dc60f2a4e76f4bdbb59207f85ded4dd300"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one18m42hyw6xxwag3jlzuaz2vn5h4y4rp9l2wc2zl"
      },
      {
        "stake": 13673488102600000000000000,
        "keys-at-auction": [
          "a78144701f6cdb7f526ed4e0a1c8fd5adcb90ad4340fca1607b6fd3144080f2bc2bb05eadc82d1ce6b6b235bb2e5038f"
        ],
        "percentage-of-total-auction-stake": "0.002229360883824334",
        "stake-per-key": 13673488102600000000000000,
        "validator": "one17c6r80qvp9xthqq38e98gzq6qjma9svj63y927"
      },
      {
        "stake": 14351610943107000000000000,
        "keys-at-auction": [
          "2b1f282e9684d3a4d3bb77970deacf989e538524f704d92f7eed6fddd743abae23f0a4ef461baca47f33514f1963838c"
        ],
        "percentage-of-total-auction-stake": "0.002339923786553353",
        "stake-per-key": 14351610943107000000000000,
        "validator": "one10rr5n6qvjxlyhrhnkzxtjslzffrp4trl3wtsuh"
      },
      {
        "stake": 13614146000000000000000000,
        "keys-at-auction": [
          "a76550cfd535db4f3ef3d51fa354e12d6efce90d3f1025357d1028a9c06fc9148d16f0fc24683ff7dbc6262c4ae61116"
        ],
        "percentage-of-total-auction-stake": "0.002219685593853871",
        "stake-per-key": 13614146000000000000000000,
        "validator": "one10n3vn6rz05zvkwus4ey0ll890qxpsxpzphttck"
      },
      {
        "stake": 2478674609999000000000000,
        "keys-at-auction": [
          "91d23767cd8b84b3265a0e040484a4ca6aa0ad38d1cd55dbf01942c010a02e80c0c795dcbe16b74cbeda21672f533688"
        ],
        "percentage-of-total-auction-stake": "0.000404129522605835",
        "stake-per-key": 2478674609999000000000000,
        "validator": "one1pves5kuememu5vah29urf52yfn6espc2vylxmd"
      },
      {
        "stake": 10311623369999000000000000,
        "keys-at-auction": [
          "fdc88e22bdd90da5724d6ec8ad281bbe3c2891d09b6325b4cfbaa14666263393fd94b7df075832a3c431fd8ca6a6a78f"
        ],
        "percentage-of-total-auction-stake": "0.001681233758153739",
        "stake-per-key": 10311623369999000000000000,
        "validator": "one1dk3ul0r8l32600al7zql8jvemumj93myuaptkf"
      },
      {
        "stake": 8572740000000000000000000,
        "keys-at-auction": [
          "61bb7372fb38bf661b382b8a6bc0c29009cfe7612bd886458f03d12097c24bb18198a6dc61a73005096839706ebf0c8f"
        ],
        "percentage-of-total-auction-stake": "0.001397721713712695",
        "stake-per-key": 8572740000000000000000000,
        "validator": "one1td5wvcfwv6zp4vmttl7657jkun30z3dhl5d222"
      },
      {
        "stake": 11497504397180000000000000,
        "keys-at-auction": [
          "d90b4af4db279822edc6b4aa6a2b083512d0b6a873d8e71c814b7994e0f32b97f6a6d81d21344d7fa85e76f76af5e783"
        ],
        "percentage-of-total-auction-stake": "0.001874582869589615",
        "stake-per-key": 11497504397180000000000000,
        "validator": "one1egemh5e9xjy3x8d3cq0kq7mw4sw4jjwgkc7axs"
      },
      {
        "stake": 10111900000000000000000000,
        "keys-at-auction": [
          "73b31b932c2d747e72ed74a033819fcfeb19328785835c44155a8fc49ef4d85dbadafbaebe132ce93a0baa5fcb588d82"
        ],
        "percentage-of-total-auction-stake": "0.001648670343074840",
        "stake-per-key": 10111900000000000000000000,
        "validator": "one1s2k8p76yedjzdu9wqkj3pwrf72n453zhyssjhp"
      },
      {
        "stake": 10668910573979500000000000,
        "keys-at-auction": [
          "2e19dd61de8d74a9e4e571af05a9c597949a146da8cdffb1e53a836522fabd6fb8ab733f164763efe17a2b94db7a1193"
        ],
        "percentage-of-total-auction-stake": "0.001739486788460880",
        "stake-per-key": 10668910573979500000000000,
        "validator": "one1920ku8c9uerwyavk9hnxgpdshak7w7dn9gm632"
      },
      {
        "stake": 2001999000000000000000000,
        "keys-at-auction": [
          "a23afaeb77c957251b92fd25a15031cd2d93c40fa8c2da1747d5132ba62463e4b528438507616fd988492c8c3b549c03"
        ],
        "percentage-of-total-auction-stake": "0.000326411097634024",
        "stake-per-key": 2001999000000000000000000,
        "validator": "one1km2a6jnmq5j8ugxe4juwaf65qwk40ta8atde8s"
      },
      {
        "stake": 11182356340308800000000000,
        "keys-at-auction": [
          "547a324c91b2a3ae8535071ad2da9c7bf3c3574214b0b9ee390664a3c5ee37884d87e895aa175b590b449349daf65c8c"
        ],
        "percentage-of-total-auction-stake": "0.001823200314872776",
        "stake-per-key": 11182356340308800000000000,
        "validator": "one1jn5ak4qhh57feptrkqf4yzwtsc9azwx24r7p0w"
      },
      {
        "stake": 148695216999999900000000000,
        "keys-at-auction": [
          "85dde30f23ffd30b511582550a20d675e96beaf348af5c1401eaef69e8485ac867cd78e9d4e59f42d9c65b8ae4466981",
          "ab08be98ef02d0d0000eb21314121854ff9db7445aae41a7872be40d4fbdb1596bd70fbb16c96a582dae008370365f17"
        ],
        "percentage-of-total-auction-stake": "0.024243652965810344",
        "stake-per-key": 74347608499999950000000000,
        "validator": "one149h38k3rt8m8gfaxxfn3zn43lqt6mzlvthcy5e"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "d3db51f3a0baa69ee4afe0a5de84b0d1d358479b076a7136ba654eba38c6de780a06566a0e0d9fd9aeca34922c2b1f13"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1k36kv8qv0qkgvq9uvgk4fr7gv852unnadc6svk"
      },
      {
        "stake": 9510653499000000000000000,
        "keys-at-auction": [
          "56e3bb8b8edbf2633cc7b2b61306c8ea3b1cad6eb36a52ba98c2d3e5c29a743233ffeb428b418f46af3bef0c66903f01"
        ],
        "percentage-of-total-auction-stake": "0.001550641557675833",
        "stake-per-key": 9510653499000000000000000,
        "validator": "one1t79hk65dkn3ef4n6xhg5xdjhq58nk7ld4h2x2v"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "3073be638c4bc5ff60ca24440d1145ef7431101f92a406653acfc41ba5fdc073573aa28d0ceda2df63553dcaefd8a18c"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1egf2muj00tl80vxdn0ee5da5nn4dpeh4p0wv3m"
      },
      {
        "stake": 10669538345808500000000000,
        "keys-at-auction": [
          "581d2a6ea0872d64ea5664d49e2057aca47bd987e69315606eb87c69163c3a0e2b0e99899c641e8959606ea7e2fbf108"
        ],
        "percentage-of-total-auction-stake": "0.001739589142004397",
        "stake-per-key": 10669538345808500000000000,
        "validator": "one155rynlqtatfupkpv9qftvnh8m0mcy6a8yrwwwk"
      },
      {
        "stake": 10762190037551000000000000,
        "keys-at-auction": [
          "7b2b06915b1416abe6edd51d9bde4699b83c35749e569cf530902aa10a349b7f9c918bc5572b650e283e80445ecf8704"
        ],
        "percentage-of-total-auction-stake": "0.001754695313585561",
        "stake-per-key": 10762190037551000000000000,
        "validator": "one10ehr5wca4gpt298ppklwuypnzqg6r44hl7ffgs"
      },
      {
        "stake": 9207240994213000000000000,
        "keys-at-auction": [
          "80b44e97b102cc424ff7eb6f7a4f199bbfb2bc2c53f7c754fe2d69378fec74e0e3330e494b644ba960024ae1d78d2f0d"
        ],
        "percentage-of-total-auction-stake": "0.001501172397739483",
        "stake-per-key": 9207240994213000000000000,
        "validator": "one10cf8n0w52fzk2a2spwwms452j4aqx3cmg80ftg"
      },
      {
        "stake": 11164603921076000000000000,
        "keys-at-auction": [
          "e52d7ee43f9a9a44d5329adfe7bfd70547f6894d52de3114de73f213205b72f5809cf97975a0f18006573e209ca37f94"
        ],
        "percentage-of-total-auction-stake": "0.001820305914502227",
        "stake-per-key": 11164603921076000000000000,
        "validator": "one1fzalye006mpjkss2thhd2rtplemvu6wkjxxzmx"
      },
      {
        "stake": 16355537000000000000000000,
        "keys-at-auction": [
          "b5ddf57e56226de7d472e59071bd97a9c9c39e41f852d2f9cfbac9c540392465d7e4bfcdf38be777eed6199acbaaea87"
        ],
        "percentage-of-total-auction-stake": "0.002666649076529954",
        "stake-per-key": 16355537000000000000000000,
        "validator": "one1khyz6zyz3gzk8c5f9j76d5ng0rnkw6n75nwe0l"
      },
      {
        "stake": 11509809488218000000000000,
        "keys-at-auction": [
          "0c5cdcef8f96df89bb8dc3db0fb243644bf142ea845cf062a4bbe833eeadbf159c12b52b2b77b71559a9874ef834418f"
        ],
        "percentage-of-total-auction-stake": "0.001876589123474957",
        "stake-per-key": 11509809488218000000000000,
        "validator": "one1c3l67kwzd2pzre55mqxs5pmpx8l3utas8cpq0p"
      },
      {
        "stake": 13669021117998000000000000,
        "keys-at-auction": [
          "c4c90fd9a2d52d62569cab936ed3e7a758263fbc78c47983a96f8c9ff90bcdb32fdebaf1d06319b01334d44cf5246712"
        ],
        "percentage-of-total-auction-stake": "0.002228632575095382",
        "stake-per-key": 13669021117998000000000000,
        "validator": "one1ryjmd93fadj280e6p6mjs8sl2gx49mvd8wzjxd"
      },
      {
        "stake": 15015355961518000000000000,
        "keys-at-auction": [
          "a3a2287134bf0ab203f16bdf49ec04748b4ac7696803de6eadfc04ed901aa722afe57995bf8abb24644ccafb0bce7796"
        ],
        "percentage-of-total-auction-stake": "0.002448142491961622",
        "stake-per-key": 15015355961518000000000000,
        "validator": "one1zhe0t4knr3asa7hvjv4zu5u64cjvj7uznp0vvz"
      },
      {
        "stake": 10445472484105000000000000,
        "keys-at-auction": [
          "4ac7a265e7ddc0cc71cb14cd10ccb87b241e84a5a7acc7bae3ebc1f1164dafca754a54ca92672c5e11967bc04c000299"
        ],
        "percentage-of-total-auction-stake": "0.001703056864085700",
        "stake-per-key": 10445472484105000000000000,
        "validator": "one14c9sgmh2lgpc3lk9t4frs3vs9cf7zy3rkrwyzx"
      },
      {
        "stake": 13493588439999000000000000,
        "keys-at-auction": [
          "88bd80eaf033660d58d585da0dfec589815f5564b663dd216a4f8a920f3e86466add2b51b6252fabd919ec4b31a7b50e"
        ],
        "percentage-of-total-auction-stake": "0.002200029577298415",
        "stake-per-key": 13493588439999000000000000,
        "validator": "one1pgtnlatpnwl8laww7tc2f5qss6rjhzunwtrq5p"
      },
      {
        "stake": 9536546714320000000000000,
        "keys-at-auction": [
          "7e40362268e44a5cc1de9cd9e6341b9a558cfc3bc34a152b5450b40c1aff67543b1462ede1d0b2066838acdfcae6d001"
        ],
        "percentage-of-total-auction-stake": "0.001554863254506788",
        "stake-per-key": 9536546714320000000000000,
        "validator": "one148ghmpck56hkmprx7p0yuf0cgrpkl7lj47tyea"
      },
      {
        "stake": 9351877000000000000000000,
        "keys-at-auction": [
          "ec8c1a764c774312d5bf8013db6374a88872ea5b5cf44e73474716504b2e088a18f37c8e1bc759debb1a85622359760a"
        ],
        "percentage-of-total-auction-stake": "0.001524754226404900",
        "stake-per-key": 9351877000000000000000000,
        "validator": "one1373zh2mwd8gvm7kmgqkwzcgtnz59uf0s07xrq4"
      },
      {
        "stake": 21681008033520300000000000,
        "keys-at-auction": [
          "95b7f81b4ad71a93e866c918a122a8754cf6db02c0f3df93d00e6651b77323d527ac39fc3e990f9c2f6e1e3ea9d15112"
        ],
        "percentage-of-total-auction-stake": "0.003534927654825728",
        "stake-per-key": 21681008033520300000000000,
        "validator": "one1km7xg8e3xjys7azp9f4xp8hkw79vm2h3f2lade"
      },
      {
        "stake": 10267066099999000000000000,
        "keys-at-auction": [
          "cbc21b59a384f1a16e74ec97e7b63cd03451dd96f665fc0e92deadbefee1cfe579303dbb37bda6edc1bf9d6be8f9dd00"
        ],
        "percentage-of-total-auction-stake": "0.001673969025549838",
        "stake-per-key": 10267066099999000000000000,
        "validator": "one1mehlyz3vvd8jx3l7lt66wm7m8cn6xmre96utvw"
      },
      {
        "stake": 11959666731948000000000000,
        "keys-at-auction": [
          "fa24d37d68d349ada82e5d5ee226bd2e23b3783b613d8fbae2d29409848501c2c8e43bfb24374aaafb454772a17d8101"
        ],
        "percentage-of-total-auction-stake": "0.001949935012611029",
        "stake-per-key": 11959666731948000000000000,
        "validator": "one1nv6q6y9t7tpketgrwp3z6kmq5v505nwp0ph4ez"
      },
      {
        "stake": 12923909300000000000000000,
        "keys-at-auction": [
          "02c3c1f6968adff78e07aa70cee4f3e9790e8d2213fe9f56c7ff41bd476fa67d4eb6274215bf7486b7d53aef96725400"
        ],
        "percentage-of-total-auction-stake": "0.002107147616125468",
        "stake-per-key": 12923909300000000000000000,
        "validator": "one1n7f0h0jaq0lz80daqppd8yl5nq026jfjw23zlg"
      },
      {
        "stake": 20619631054079000000000000,
        "keys-at-auction": [
          "26f5128639f480843e52a8328bb37d9c0b74e4dab75e8945dbcb4977c5995b3cc29807181a5a64d2c433ac4ed81e7d81"
        ],
        "percentage-of-total-auction-stake": "0.003361878005518750",
        "stake-per-key": 20619631054079000000000000,
        "validator": "one1la07f5wduc3379ffzlpqrl4rcvlchyvtwf3uyj"
      },
      {
        "stake": 11712317699998000000000000,
        "keys-at-auction": [
          "b87fa42b3c10fa896f5efcb3df29a2ebb341e51c79c06623c8315fe49503b6646b95fb137bf0dc969f1fb37308f2ac87"
        ],
        "percentage-of-total-auction-stake": "0.001909606586364306",
        "stake-per-key": 11712317699998000000000000,
        "validator": "one1cy54nt7chpmgpya0sjn6g6avtuhypuz88dn3ys"
      },
      {
        "stake": 14643953274843000000000000,
        "keys-at-auction": [
          "cdd12b97dc34764007e5fba0e97f7edd26ee3501efaf37ba79a84b08b856b9c2ac83ba99814ea9e7bae32e4693a23b86"
        ],
        "percentage-of-total-auction-stake": "0.002387588036828621",
        "stake-per-key": 14643953274843000000000000,
        "validator": "one1j8p97zd3f6qsa03xjd89xgg35naca865dkj70r"
      },
      {
        "stake": 10872322337800000000000000,
        "keys-at-auction": [
          "b1a2f231ab6718d6454c4fbaba10d9a919bc1c236b4ec8b0b78746fca58bcdabe8de4b8c423749c21a10de3d408ebe89"
        ],
        "percentage-of-total-auction-stake": "0.001772651568813079",
        "stake-per-key": 10872322337800000000000000,
        "validator": "one1g520fddr2y4skj7crgp607uzzammlyy6tqgrln"
      },
      {
        "stake": 13120000093412000000000000,
        "keys-at-auction": [
          "81b038da89b005335e677f61935d552e866e281a57fa03fe95c5154ecc5f8cf3d5a5b83486acaba38bc90d69b1738881"
        ],
        "percentage-of-total-auction-stake": "0.002139118766517420",
        "stake-per-key": 13120000093412000000000000,
        "validator": "one1yjfg8kua4tvs8gjtdjed90gse3cmvd0yy6wcwu"
      },
      {
        "stake": 10956425900000000000000000,
        "keys-at-auction": [
          "0e0039fe4362333113f6a18fafdb7625dcfe708ae7ae7257bf2f8ec8ac775dd86636d83d66be617f939dcb6480ec288f"
        ],
        "percentage-of-total-auction-stake": "0.001786364031233207",
        "stake-per-key": 10956425900000000000000000,
        "validator": "one1k6ejnhwrlydzlua745avv9u0xmygerpl4xsr7v"
      },
      {
        "stake": 9267240000000000000000000,
        "keys-at-auction": [
          "d0abf60762faaa469575bad17fe1c5bba858efe1196fc85d97f5cb6462dcffee2c731f7f22ee2f822fe2c7ef1e613402"
        ],
        "percentage-of-total-auction-stake": "0.001510954790905456",
        "stake-per-key": 9267240000000000000000000,
        "validator": "one13mle5wuyn90cjhtkphyg5pdw5s4hy2fx9vnvsu"
      },
      {
        "stake": 13072429398442000000000000,
        "keys-at-auction": [
          "3996a371b6790103534e5b9163d58f304b8cbd993e507cdb2894ae1c1356aab5c21bbb5335b3eb726f1d4aed6b8ca002"
        ],
        "percentage-of-total-auction-stake": "0.002131362717308418",
        "stake-per-key": 13072429398442000000000000,
        "validator": "one1jtq979pugs6484mpyz5ahvjgzcvv02sdclhg2n"
      },
      {
        "stake": 11046317000000000000000000,
        "keys-at-auction": [
          "ed393a3426af7bc5d8c7325e3a8d8451ea95696f9d3e32429979af7f84114b2a29130c65a59c1976dadc4a2ca126e408"
        ],
        "percentage-of-total-auction-stake": "0.001801020108792951",
        "stake-per-key": 11046317000000000000000000,
        "validator": "one1x9a8cl3aryhp9c3nyr0hzxzrhmlasgv4g47tya"
      },
      {
        "stake": 14715774307544000000000000,
        "keys-at-auction": [
          "922b2874d6fe9308634095ebdb74847f7851503987b7b352454c975a0ac8861adad693ae8f9ba5fe1e0060c6e06fd604"
        ],
        "percentage-of-total-auction-stake": "0.002399297923855110",
        "stake-per-key": 14715774307544000000000000,
        "validator": "one1d4lgd6skvqh24hxac0h7s4jpf7newr73wv4plq"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "d642fc780048dbeb840327d880df0905815d93b8a52593ab9ba87ae76e42f48a5f8130d8de02f653352835d6d115218d"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1tf3fnj2v74tdd6j0ddxcadlu3uqyfjwjtq9wef"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "97653f6c4fbe501caeb60ed78f2c99f177b58c304bebea7595cb82df32f04c1487fdc845ac0770849557cefe84af1a0f"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one143gferzlsyqy45qlt6elcxrgmny85ahdfszuk2"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "3761c02a32c2a17c799858ca3a2d18715603cab2913d3eb9f47ccd8d8c5f186879d70386a3c739ce3ca827d79ac52682"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1zean0hmkcanfscyk0rgj8f2nwqs5acp9exmk22"
      },
      {
        "stake": 11860100000000000000000000,
        "keys-at-auction": [
          "085175d5724be15f0159cdd4da275d5efdabc3696641c5b5c70fe5d1ac8afebcfc8508b7cf5f8030dc1988a42ae5c109"
        ],
        "percentage-of-total-auction-stake": "0.001933701394980361",
        "stake-per-key": 11860100000000000000000000,
        "validator": "one106fd5vadl0tnk74ccggdtn6m3xkju40ewj23cc"
      },
      {
        "stake": 10576617000000000000000000,
        "keys-at-auction": [
          "832672b827e9d07ba1aad1e3550e38b869d14d771cc20d10b66263e2fc5e3383cedccc5d06b64ced3b75b78e70556c09"
        ],
        "percentage-of-total-auction-stake": "0.001724439005326515",
        "stake-per-key": 10576617000000000000000000,
        "validator": "one1hq70696u36wfhpfzjggsm9zw3vz7l49403ndtx"
      },
      {
        "stake": 14899781907755000000000000,
        "keys-at-auction": [
          "045e3d2dbc7624a3ba1f3aa253b8663d587a51c4490c071d44bfb88ac9b243e680b806b742630d2320cd9f1d99d4e58a"
        ],
        "percentage-of-total-auction-stake": "0.002429298999159281",
        "stake-per-key": 14899781907755000000000000,
        "validator": "one1wqq9xrca6g5vfaqwm47gc953kgy6kqxm2pffuj"
      },
      {
        "stake": 10715074999999000000000000,
        "keys-at-auction": [
          "842698605a26e28aef1ff006292389e5c2716233bcf91c54adf4562d772e7c07e8aee292fa698027c113188df7b95999"
        ],
        "percentage-of-total-auction-stake": "0.001747013555941118",
        "stake-per-key": 10715074999999000000000000,
        "validator": "one1t73da8de332nfx7x6hj9pnas2aa3e8pcrvryw0"
      },
      {
        "stake": 17122239499999000000000000,
        "keys-at-auction": [
          "ccf101c81ffc71d686a9f92113fbf6a56c7c4db09cdc3a2bcd9526b1a24706d161634dbc4a50b14d987d371a59699806"
        ],
        "percentage-of-total-auction-stake": "0.002791654236164611",
        "stake-per-key": 17122239499999000000000000,
        "validator": "one1exusucsg5aw3kt4amh6quc786futqf0ycmfyrg"
      },
      {
        "stake": 2000999000000000000000000,
        "keys-at-auction": [
          "239e7f16fee07fc273f8531e305e809ea2a38c25c550e1a11ece753013674c9874aee46e52610d400e5eb01769393f96"
        ],
        "percentage-of-total-auction-stake": "0.000326248055046273",
        "stake-per-key": 2000999000000000000000000,
        "validator": "one1c5yan96ad3z9guqshy5eqxj5cv8g42949jcxwn"
      },
      {
        "stake": 19754928887233000000000000,
        "keys-at-auction": [
          "385bf46c56a29f434ea17d38a9c4565881fa5463084782b8821734df4cbb6cbf6eab19fdb3f7bfb1f8429b2d3dd55a0a"
        ],
        "percentage-of-total-auction-stake": "0.003220894726602666",
        "stake-per-key": 19754928887233000000000000,
        "validator": "one1f470xd0f6yjtlvv0ml02cw0fhe6t7fp5r74ec8"
      },
      {
        "stake": 9708792112800000000000000,
        "keys-at-auction": [
          "6986635b77c398241c9fc037ee38d49dc1a19d81c62d126aa26f66bd4e231c79f6ac53aeaaf949c69931da740c86b082"
        ],
        "percentage-of-total-auction-stake": "0.001582946590003093",
        "stake-per-key": 9708792112800000000000000,
        "validator": "one1qtxatr7lr87xyvah39vdc77j4agyd8323ucuq5"
      },
      {
        "stake": 16880692586445000000000000,
        "keys-at-auction": [
          "5011e24ce96c2ecd77fc46bad5bb025eca84e24b92c263bfb10360264a53f4aee63ea33b7d5ecb7513616084f9fb650f"
        ],
        "percentage-of-total-auction-stake": "0.002752271802315607",
        "stake-per-key": 16880692586445000000000000,
        "validator": "one102xvs5la4wfe9qut4nz76mxm7c3xx3jn4u95xx"
      },
      {
        "stake": 12059945039998000000000000,
        "keys-at-auction": [
          "dec11a8d74b5ce864016644013c985647624555c12e1c19d6a5f32134b26e08c3d33d969d409aa6396138e35ed5f0099"
        ],
        "percentage-of-total-auction-stake": "0.001966284647450748",
        "stake-per-key": 12059945039998000000000000,
        "validator": "one1jw462yf0ltq82rvlnjaxazqupja86rpkz3pvqz"
      },
      {
        "stake": 10921876994586000000000000,
        "keys-at-auction": [
          "c41182d63481d03875ccad187f9be6e3b97cc17fadc6fc67ca2be7a0ebb07e06d1442f0613ce165c9bf25c20c1a08991"
        ],
        "percentage-of-total-auction-stake": "0.001780731088290559",
        "stake-per-key": 10921876994586000000000000,
        "validator": "one1pzsehc47gl6euwnqe0lfmsdh83l3t2a7lygrzt"
      },
      {
        "stake": 11285178000000000000000000,
        "keys-at-auction": [
          "ae7a9cd8613dda5c3a385c471fe1908246d39228bfef1b1a7092b3798fb833acbb4fb0c31576e5d9e3156e48e6be5b0f"
        ],
        "percentage-of-total-auction-stake": "0.001839964624345636",
        "stake-per-key": 11285178000000000000000000,
        "validator": "one1fv77qz6ngvuvzhqzg9m0mqjx6d32dqwzqf6e9r"
      },
      {
        "stake": 99163187467985000000000000,
        "keys-at-auction": [
          "d276072c1f99a349c28b2b9a2e4184d9bc8df8912e0be9e6527749934fceef755d1ce15ba7eb0de8a80d9c9256189d87"
        ],
        "percentage-of-total-auction-stake": "0.016167822694373709",
        "stake-per-key": 99163187467985000000000000,
        "validator": "one1n7twgx0x38najm8jvay5muglh0wxmv3j4ps93g"
      },
      {
        "stake": 99899890347999000000000000,
        "keys-at-auction": [
          "f29d10d3700dc200a9b5cc063e19d9f8c57785304dc18dda170a09ff4b47772b0fa28f54e415f809d0bf2ba0c1fc2982"
        ],
        "percentage-of-total-auction-stake": "0.016287936638334478",
        "stake-per-key": 99899890347999000000000000,
        "validator": "one1npfgsk4qs0gg2x7tgsjazt72wxsw9q9k0y0568"
      },
      {
        "stake": 13193991000000000000000000,
        "keys-at-auction": [
          "a24ef25fd8139314d898bea9ddf3ec5c38a198a35e79bd130f9e0f948144a94bc9312f559c6901fc7a0d8ee1a762d088"
        ],
        "percentage-of-total-auction-stake": "0.002151182435397537",
        "stake-per-key": 13193991000000000000000000,
        "validator": "one1kudknr8x9t9hp9znl5n0guy239mhn2a4wpektc"
      },
      {
        "stake": 9507403000000000000000000,
        "keys-at-auction": [
          "be205ec86841a3b96249f80e364c416a63b938617ade36b6798b377188d99bf27b5e85189116f4a4ba1b7a0c060cb115"
        ],
        "percentage-of-total-auction-stake": "0.001550111587907393",
        "stake-per-key": 9507403000000000000000000,
        "validator": "one19cuygr776f7j9ep97hjm0np9ay6nus9w5msy0n"
      },
      {
        "stake": 11163131947338000000000000,
        "keys-at-auction": [
          "fd0225712ef2178f00a2b8e2f0ef7ec1781c69228310cdad48eaf78e2fcee8d7bb222b08ebd8b0d483fe7738b3ac0701"
        ],
        "percentage-of-total-auction-stake": "0.001820065920094883",
        "stake-per-key": 11163131947338000000000000,
        "validator": "one13aydpznlr2wlhu62etn6kf3eya0fgazm0ynyez"
      },
      {
        "stake": 11338015000000000000000000,
        "keys-at-auction": [
          "ae8cc5cb7818994b98d72c1f8d5415e3e315f4a975a58121344dea8a8fc79c0942609f2e502fe67ab2742176a886548d"
        ],
        "percentage-of-total-auction-stake": "0.001848579305554612",
        "stake-per-key": 11338015000000000000000000,
        "validator": "one18dvfm36hq69rfqhzmys7fvmh8qgmqw5z6m28kg"
      },
      {
        "stake": 12199842994584866772700000,
        "keys-at-auction": [
          "5816b0c90cb81bed2a1a465f76df18420583e211c5aae899756bc2a1e7716983babdb0e8e41f6c9b474cdf40c1db4090"
        ],
        "percentage-of-total-auction-stake": "0.001989093971987600",
        "stake-per-key": 12199842994584866772700000,
        "validator": "one1fxpzt6wrhtgavt2wuyxv0vys2n73888ef8llg8"
      },
      {
        "stake": 9853212874188000000000000,
        "keys-at-auction": [
          "4b0c4441f134b30cbff349cb660d85009c1b0871bf7fb6d0a1ec87b439fa1f217fb9fdf262cd92c2fe03032426058e19"
        ],
        "percentage-of-total-auction-stake": "0.001606493324664698",
        "stake-per-key": 9853212874188000000000000,
        "validator": "one18qwdyxz8g5x96ynn3a7uk94pe9dt4euhz2strt"
      },
      {
        "stake": 10780679000000000000000000,
        "keys-at-auction": [
          "6dc4f4b5a35f500960aa1daf66425e1fdf9f811327b32db6c9fe0d634554da9b258bd920a78135d8a65f36545e80e70e"
        ],
        "percentage-of-total-auction-stake": "0.001757709801868069",
        "stake-per-key": 10780679000000000000000000,
        "validator": "one1expja5cuma5pdu4m3nnlesvnjpapkqr4maguhf"
      },
      {
        "stake": 12352698001036000000000000,
        "keys-at-auction": [
          "eae9004dc0045b8928e231306ae73dc5045628195c3f5b95b78c31426237e21b52a10601d42cc8a873ff0af135e8fa92"
        ],
        "percentage-of-total-auction-stake": "0.002014015847790021",
        "stake-per-key": 12352698001036000000000000,
        "validator": "one1xf6nzwlhq4a4sz4du24hc0a4mtzr560f0jy9e6"
      },
      {
        "stake": 10076862000000000000000000,
        "keys-at-auction": [
          "2113771d0a9636607c6fe8bab2887f430854fff8f3856babe17a31399b1a3cc240f6f3edca0de7b43c80f7c4650fed91"
        ],
        "percentage-of-total-auction-stake": "0.001642957656885236",
        "stake-per-key": 10076862000000000000000000,
        "validator": "one10nay2vc33vx088ecvqfu9yk96get0j43qzp8qp"
      },
      {
        "stake": 10726719899999000000000000,
        "keys-at-auction": [
          "bac85ed94cf9a029d6ea8497d345a3668a14b796bba4b7269d4d3026ff37800f931766e0de187c1d6275013671bf2103"
        ],
        "percentage-of-total-auction-stake": "0.001748912170571215",
        "stake-per-key": 10726719899999000000000000,
        "validator": "one1rmsztmw3727yjuszwd484z8mvf9v6fkkze4r5s"
      },
      {
        "stake": 11678569890750000000000000,
        "keys-at-auction": [
          "3fcf948144eee7fc7534a76eeb3b98d85ec4a306d621a382a93971d170c4e81c11dba276e4a84367a466344a1ce7a20c"
        ],
        "percentage-of-total-auction-stake": "0.001904104256213600",
        "stake-per-key": 11678569890750000000000000,
        "validator": "one1sus3s4pe9cjv42r2ddfpwly4kr5g67nyquzh9u"
      },
      {
        "stake": 5008281694999000000000000,
        "keys-at-auction": [
          "23abacb45b6c6566c4b2973709d7f514754811f7f82196a5aa1d5a904275ea722a59907c1b19c1278c692125d31d070b"
        ],
        "percentage-of-total-auction-stake": "0.000816563207736374",
        "stake-per-key": 5008281694999000000000000,
        "validator": "one1mhxpn2m2w22nuwr5gj7a3dv80p93kwnynrfepl"
      },
      {
        "stake": 283699908324705500000000000,
        "keys-at-auction": [
          "15dad6a28f96880c1462e9afa7745a9e65fdc971c981813847a0e4d00849b476c18c1ae9b1d75126b158eeeb21f08910"
        ],
        "percentage-of-total-auction-stake": "0.046255167197855287",
        "stake-per-key": 283699908324705500000000000,
        "validator": "one1hwe68yprkhp5sqq5u7sm9uqu8jxz87fd7ffex7"
      },
      {
        "stake": 99999066533522000000000000,
        "keys-at-auction": [
          "76fb43d2f9963f4cca0e08aa7f5f6ab0cc6232f6f26a7e2a20c2e1184ef9d88543f22e5ef57d66afa4391d95e15c3796"
        ],
        "percentage-of-total-auction-stake": "0.016304106580265377",
        "stake-per-key": 99999066533522000000000000,
        "validator": "one1lq4dln5lhvfnp6z8m4cmnmqrrxugkefrnsj8at"
      },
      {
        "stake": 10108637000000000000000000,
        "keys-at-auction": [
          "b1a7b73f93cb461f560d1f6dfe1149084746a20f38beb91045574df610661fb95b806039ad310a262a620f1235dee093"
        ],
        "percentage-of-total-auction-stake": "0.001648138335111010",
        "stake-per-key": 10108637000000000000000000,
        "validator": "one159c8eq2a3282nhq2ufvwv72f82ja7qyl2snvh3"
      },
      {
        "stake": 12987290382041000000000000,
        "keys-at-auction": [
          "285021b00e21f75364d92ebcbc204e73f268e50163347cbd97a5401c800f6348252c2c23fc6ba9e099f3a6380726ac85"
        ],
        "percentage-of-total-auction-stake": "0.002117481431755862",
        "stake-per-key": 12987290382041000000000000,
        "validator": "one1zk24v0nmh662f3u0jz5wsu65y4pjtjuc2kskdf"
      },
      {
        "stake": 82117228419762400000000000,
        "keys-at-auction": [
          "4d2b4a92b35454c3eb7f12a3724e668dad7c0094f209aecce21b2dce821ddcf7c6381ef44e853874eac1546f7154f983"
        ],
        "percentage-of-total-auction-stake": "0.013388605420461504",
        "stake-per-key": 82117228419762400000000000,
        "validator": "one17e50tsfnd0fcnyandw4vtknkehlq7gukkzd0r4"
      },
      {
        "stake": 2199999000000000000000000,
        "keys-at-auction": [
          "4b14fd044346978f8ac501e20be61d2d7432356dfa2df5dc94db75f38b90aa7ff01fd25e132e174f6eb58c86a2406599"
        ],
        "percentage-of-total-auction-stake": "0.000358693530008634",
        "stake-per-key": 2199999000000000000000000,
        "validator": "one104dluzaq4p54dx40d8znqqqjwamd5u7n8f45ja"
      },
      {
        "stake": 12896424939071000000000000,
        "keys-at-auction": [
          "7b565c693aadb0e7d0fb3431b1d9a1dac4b4fcc7da6c4d6e35a4ae7317efd27fdcc443a5d5f73dda541713d3d21da40f"
        ],
        "percentage-of-total-auction-stake": "0.002102666494796933",
        "stake-per-key": 12896424939071000000000000,
        "validator": "one18ms0urj0j4xv3vpxn0cp00wn70fddl64v8dqdp"
      },
      {
        "stake": 10162286000000000000000000,
        "keys-at-auction": [
          "0ebde7d86adf404a903f0856f169931cc0a3e4f78eafadaf575d839511abf15838e7af6baeada9ab2f13dc7d6291bd08"
        ],
        "percentage-of-total-auction-stake": "0.001656885406901239",
        "stake-per-key": 10162286000000000000000000,
        "validator": "one1lu0dr894pf8enqzcza4ytm4wcx9eyzkx0f7ha7"
      },
      {
        "stake": 10583663170901000000000000,
        "keys-at-auction": [
          "959c14a7daf951b6fbfb0fe84158bd7441daa232575b46d28418ceb7c8d66a2df57886c70fafea6c87317e1ae5821092"
        ],
        "percentage-of-total-auction-stake": "0.001725587831263947",
        "stake-per-key": 10583663170901000000000000,
        "validator": "one1z5je797487dw9qpgkqtrka3ws4m73unasdfj2c"
      },
      {
        "stake": 16566436626854000000000000,
        "keys-at-auction": [
          "0d429fea2807ba838dfe01fabeca994b87ea89a6bdfa47847896e986fdeb441bb56232353db853bc0610ac56d12b018f"
        ],
        "percentage-of-total-auction-stake": "0.002701034697447856",
        "stake-per-key": 16566436626854000000000000,
        "validator": "one1znscqahk3rtpsudkdgrude0s4hlm2lwg2c8hw5"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "6104d497b19866bfb7df53a4ba485cf3da53aac0fc8b5f34a1cae7edf9ad7e80d033f829a53e0c8eec6ed09f14b6d482"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one17pe0rnwav5u7l37a2apyjghg3pqmapsnsva078"
      },
      {
        "stake": 12804655500000000000000000,
        "keys-at-auction": [
          "82c920ddfafe709488c6ccabd9087fe20a9cfe6f3003ae1595884ab3d47c99c2075d8068d2642cd3be3a361ba169b207"
        ],
        "percentage-of-total-auction-stake": "0.002087704167974380",
        "stake-per-key": 12804655500000000000000000,
        "validator": "one1yjtrsq78t02qgjcwn56x96kwkduwhmc8wnenfw"
      },
      {
        "stake": 10044673148036000000000000,
        "keys-at-auction": [
          "becd65dfdcb41486187b5e9c4e1b0758ff30c302b0bfb29b57e92278c4c55a869c3d9d176b9b4339787b1e961e306c14"
        ],
        "percentage-of-total-auction-stake": "0.001637709503164306",
        "stake-per-key": 10044673148036000000000000,
        "validator": "one1jm28f73rmg7lnca7duuyuqrhkp4ahfzdvzzdsf"
      },
      {
        "stake": 3304699000000000000000000,
        "keys-at-auction": [
          "36f0aa3318b9dcd1bc77c6eda83087c221a4c4356935da5aa4ad65bdd5666dbf12eab418b12c71f0504b9df0ee231a13"
        ],
        "percentage-of-total-auction-stake": "0.000538806676696672",
        "stake-per-key": 3304699000000000000000000,
        "validator": "one1kk8shsve0wdxun9qd2m79wwumwl74cehu9y7v6"
      },
      {
        "stake": 30072300670168000000000000,
        "keys-at-auction": [
          "8c0b30de71543d83f77ebf2e68e980aa53c79879be6da479b1f0f0badc0bbc58dc0f24accca0b59adf01d703e6d6cc13"
        ],
        "percentage-of-total-auction-stake": "0.004903065720876949",
        "stake-per-key": 30072300670168000000000000,
        "validator": "one10ld9ej7vmuf82wxc4ep4tjcx0m75h5fhkntm78"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "80c38a512aeafbd88aa5750006eb551dce652d6339f3c0c54ad1879348e76ebfc0d0d2e629a11fb26b50031932c28b13"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1d587g2cmsh78x7anqhckzxwll3yqlv5c2ahhp3"
      },
      {
        "stake": 2000999000000000000000000,
        "keys-at-auction": [
          "e7cd3fc95d3b1fc9c17021d67073b02bd61c5f4d5d726dd3dbfc7bfaaee4c5f19474371075ebbe15f2bfc2d4b132f20d"
        ],
        "percentage-of-total-auction-stake": "0.000326248055046273",
        "stake-per-key": 2000999000000000000000000,
        "validator": "one133vpazf7aafwfh3dcsg7zmfs2ua04c6y0slstm"
      },
      {
        "stake": 3313912000000000000000000,
        "keys-at-auction": [
          "54da90839166538c24d970bd7e0ffa7c084d27b6c7ca0440f15d119e14b0a5a606cd57b76840214c7ca3baab74533583"
        ],
        "percentage-of-total-auction-stake": "0.000540308788057618",
        "stake-per-key": 3313912000000000000000000,
        "validator": "one1z647dry47pv3c58we2myyv0npt6a5rqjjn95xt"
      },
      {
        "stake": 9936274366000000000000000,
        "keys-at-auction": [
          "95ab15bead323bcf24a02f05b0f715b37944e1385679c9f2de8c108809933706e92f312bcd54a43571cf2f64a227558b"
        ],
        "percentage-of-total-auction-stake": "0.001620035885232148",
        "stake-per-key": 9936274366000000000000000,
        "validator": "one17zp5fnhea4fs8pyhv8xjkd70trql0lf5snva42"
      },
      {
        "stake": 14138721244629000000000000,
        "keys-at-auction": [
          "c91f5cde7343af440026bf7b97d6e7bc5bc45ecd7d14201cb0250361aaccc5cb94610d0b9ecefba9b28f205c0aebf385"
        ],
        "percentage-of-total-auction-stake": "0.002305213699208064",
        "stake-per-key": 14138721244629000000000000,
        "validator": "one16xt3gl6l7q8afksksgwdmdahd5s75trgy6ut3k"
      },
      {
        "stake": 12308091755891900000000000,
        "keys-at-auction": [
          "a36ba9f8e5226c0342d8b8a1bd782dc3daf39c69bad85693bdae2bbf99e77af17875951ac11bd19cbf0d1d3937ceaf12"
        ],
        "percentage-of-total-auction-stake": "0.002006743130151891",
        "stake-per-key": 12308091755891900000000000,
        "validator": "one1n0t2sxc02ss8jmvcxyrptruu69a62xj35a75jc"
      },
      {
        "stake": 12623441410000000000000000,
        "keys-at-auction": [
          "1dd099f60af6cda418180e663c527e0175ed11c42a3920683d1a1e33a8500ba69cd3b5ebb7d6801ac2dbce6b1611a185"
        ],
        "percentage-of-total-auction-stake": "0.002058158553803918",
        "stake-per-key": 12623441410000000000000000,
        "validator": "one1ur06pgutfdqcnah5qh6czecrz65el4vh4x2lws"
      },
      {
        "stake": 20941148411331100000000000,
        "keys-at-auction": [
          "e8c0e8bbdc60a12496b16c5153acc68c28c2a51b616fe094fa3e230aff3911ffc08061323efab4ccba2a4835236b1495"
        ],
        "percentage-of-total-auction-stake": "0.003414299027451852",
        "stake-per-key": 20941148411331100000000000,
        "validator": "one1vfqqagdzz352mtvdl69v0hw953hm993n6v26yl"
      },
      {
        "stake": 9276064000000000000000000,
        "keys-at-auction": [
          "a4955e29ea83ff526211afc8bec440bed5058833bf5b2160404c46538e331a6a394d02a6c8c984a92de10393f7e6f009"
        ],
        "percentage-of-total-auction-stake": "0.001512393478699767",
        "stake-per-key": 9276064000000000000000000,
        "validator": "one1es8mknwyq4zr45qvey82pa578q3th062sk6lzj"
      },
      {
        "stake": 11275877000000000000000000,
        "keys-at-auction": [
          "23b45d2c58eefa44ff0563c815eec8a9efbd9064cf08c8392356b31f058ce4265edc23dbd0722f6c12a36086552c6688"
        ],
        "percentage-of-total-auction-stake": "0.001838448165236968",
        "stake-per-key": 11275877000000000000000000,
        "validator": "one14e55qn02ux59x3musrvwrpfgv67u6cvq6sf69a"
      },
      {
        "stake": 9999325200000000000000000,
        "keys-at-auction": [
          "ec43375dd33603472c859011e46b532070369c01b32db32ecd4184f53e7ac299b13f1743d8cd37d24ed8efd0b53b8993"
        ],
        "percentage-of-total-auction-stake": "0.001630315856367339",
        "stake-per-key": 9999325200000000000000000,
        "validator": "one18k6qtls8wwhw0v2kjl9lsyktrx9myyx26ey28j"
      },
      {
        "stake": 11086886916642000000000000,
        "keys-at-auction": [
          "c49f2e8c28f7c187b68f24f846550bcc5fe60c2719754eca1b55305d2591c3ec2b6e5291cba1c8f887fbe926e7ee5805"
        ],
        "percentage-of-total-auction-stake": "0.001807634732987087",
        "stake-per-key": 11086886916642000000000000,
        "validator": "one1z28zsvjvevexnnyyy2t5qv57vsx0ct7fvnnhl5"
      },
      {
        "stake": 10100000000000000000000,
        "keys-at-auction": [
          "f49b5529a77b3825a3bdd6fbcce9ebfb075709962a999a8ecae56043fed9a7082b98b93cb940e66cec5681804eed5590"
        ],
        "percentage-of-total-auction-stake": "0.000001646730136281",
        "stake-per-key": 10100000000000000000000,
        "validator": "one1pg44eghky5vgxqgsnfag0c4yprjedjyx27g4dw"
      },
      {
        "stake": 3304699381348000000000000,
        "keys-at-auction": [
          "69a8d757d5d71b2e8801093eed965f789397ddd91d22bb0f41f6fbb284fc87e9ed57a72aff7db577d4f29bdd7d336598"
        ],
        "percentage-of-total-auction-stake": "0.000538806738872637",
        "stake-per-key": 3304699381348000000000000,
        "validator": "one1r3fep66wv4l3zwh9h3h77jrkgygwspwc9e8v7u"
      },
      {
        "stake": 1304740000000000000000000,
        "keys-at-auction": [
          "adcf584ec7b1d2a437901e286d2e3f4cc149ac788cd2b91b4f79dce3c547ad397633281d97d4e235e8907ed215b73b19"
        ],
        "percentage-of-total-auction-stake": "0.000212728185941660",
        "stake-per-key": 1304740000000000000000000,
        "validator": "one1mkpv4lgafalhttczf2n8n2rkzyxev3lw9kgfkm"
      },
      {
        "stake": 12325147800000000000000000,
        "keys-at-auction": [
          "ed73e02999b85033833f88341ebddb5cf70309d7aeed8e70084e88c93e03be9c838e7a2fa617ae806017b580f5566594"
        ],
        "percentage-of-total-auction-stake": "0.002009523991720063",
        "stake-per-key": 12325147800000000000000000,
        "validator": "one10lld3hn55sg7s7ra0kqrpgj44km5uaytlq7ny4"
      },
      {
        "stake": 10800000000000000000000000,
        "keys-at-auction": [
          "ca75abb7b6e16bd8a434a1f38b05b4b148ac575fca4ae060ddd176a5240854c1586579ea5a9d5c0771c80978aca39e98"
        ],
        "percentage-of-total-auction-stake": "0.001760859947705997",
        "stake-per-key": 10800000000000000000000000,
        "validator": "one1l8pyucgwcjlrchkcdw05jqfsz58pnkk53kdle7"
      },
      {
        "stake": 9673378000000000000000000,
        "keys-at-auction": [
          "144d3664a430c34f35ccffcc8c8d704cdfa44dea81597a6c85af5ece395516fafbf7ad01774bea15413da8a0773acd81"
        ],
        "percentage-of-total-auction-stake": "0.001577172581409291",
        "stake-per-key": 9673378000000000000000000,
        "validator": "one1z8l2gca5rw5ws3pss0p76fyla9ge9zer3hne9d"
      },
      {
        "stake": 10499999000000000000000000,
        "keys-at-auction": [
          "b46870f3b41be0b72f256ad2dae48529bd5e314d26ece4c2b0ed42cb7c772a1e6c1eac487adc8ca1172b23540ce9578e"
        ],
        "percentage-of-total-auction-stake": "0.001711947008338243",
        "stake-per-key": 10499999000000000000000000,
        "validator": "one14shlkfq00yfmf3r4gglt0hqfcxrgx7ysmsz832"
      },
      {
        "stake": 9295497000000000000000000,
        "keys-at-auction": [
          "65927ba35be03f040053369745fe7867bac95424b8a6ddd0819fe30a309ece9afd148e7883020f26b10bf93b8cbb210d"
        ],
        "percentage-of-total-auction-stake": "0.001515561885307523",
        "stake-per-key": 9295497000000000000000000,
        "validator": "one1v23gu2vl237uzqgcnwnnm8nqv4ckr6zehfkm0f"
      },
      {
        "stake": 9275240000000000000000000,
        "keys-at-auction": [
          "e51276b7d84c593298cb0331559ce2790d9d2343364ea6f0a8e4a00c84952d59b0bc0569b028aaaaefd317772a7eda86"
        ],
        "percentage-of-total-auction-stake": "0.001512259131607460",
        "stake-per-key": 9275240000000000000000000,
        "validator": "one1dt4md3nh3apdsmm8t0p2lsul2my5c2t93ky06k"
      },
      {
        "stake": 11715642906941000000000000,
        "keys-at-auction": [
          "f64d27b412859b15cbe055d86e313b52f7a851b01782ff213855ef89c1ee57b1a5d25f8159c013006f104a8206b04900"
        ],
        "percentage-of-total-auction-stake": "0.001910148736709099",
        "stake-per-key": 11715642906941000000000000,
        "validator": "one1r55rwumsrm6w3d20uhaa3hm4rxr442k0qx9gj8"
      },
      {
        "stake": 11639779763999000000000000,
        "keys-at-auction": [
          "0c0ae256b9ee46eddb1993308a42fbada95619282420cb36cb496718c8e24af6df3b25ad4a22e97ad3dd04631709b014"
        ],
        "percentage-of-total-auction-stake": "0.001897779813568945",
        "stake-per-key": 11639779763999000000000000,
        "validator": "one1ykwud6atcdvpurn5lyrhfmu3kpf4quvzgtqsmu"
      },
      {
        "stake": 11106044722948000000000000,
        "keys-at-auction": [
          "e552fbc280760d89e9f09cce27fb15223a9e45071f40cc03eb56a17613988214b7b6b0c8603237c55cddf47f11820187"
        ],
        "percentage-of-total-auction-stake": "0.001810758271302841",
        "stake-per-key": 11106044722948000000000000,
        "validator": "one1c0w53749uf70lfzdehhl0t23qdjvha0sf2ug5r"
      },
      {
        "stake": 11991187000000000000000000,
        "keys-at-auction": [
          "e1049c214ef21c3954d5ef0ca0132256fce020b8096ead11debab5aa5f05e09bdb3aaf2a2816536373ccc0c05623b215"
        ],
        "percentage-of-total-auction-stake": "0.001955074158680818",
        "stake-per-key": 11991187000000000000000000,
        "validator": "one1m3w07gke5ekxg8yyj66v5eky5wx2e5kvqh3fkc"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "a2d36bbaf18ba541136c4eefad381c70006defe6c09f735971a1f35dd5b23d9a2afc294fcfc24777561148ae07882a13"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1hqj5a8nge8l9wkfv0cffnx4l86wc2tx8596s80"
      },
      {
        "stake": 13317691796678000000000000,
        "keys-at-auction": [
          "2ff603b16c08f4c2f13ecec4f8184de176a0725cb71ca7d4915d94206115c8a614ae9c0df8b5fe0cb6ba3fa814764a02"
        ],
        "percentage-of-total-auction-stake": "0.002171350933394723",
        "stake-per-key": 13317691796678000000000000,
        "validator": "one1sv0s66ua6l82ng2t62fa5tlnk884n2gnrfnq23"
      },
      {
        "stake": 9545872610000000000000000,
        "keys-at-auction": [
          "44ed7b6a7c29731e7b753feef367f08da97966ea56c3a8efe13b6b67a5c200132cbe4fb4946615de62ab52e14ef4e487"
        ],
        "percentage-of-total-auction-stake": "0.001556383772671547",
        "stake-per-key": 9545872610000000000000000,
        "validator": "one1n4zfs2hhfsffekg3cwvkm2s0qs8d44z7nlxkwu"
      },
      {
        "stake": 9924157000000000000000000,
        "keys-at-auction": [
          "c6e983e80e8a0614aac1ac21effa5f43020881041a71654cb77aa7cdae94422b4deedd84203ed9a52c07a10e4c013717"
        ],
        "percentage-of-total-auction-stake": "0.001618060238522788",
        "stake-per-key": 9924157000000000000000000,
        "validator": "one1dusx2pe9urxj5am753c2szwt3p0mna8rj7adxr"
      },
      {
        "stake": 95158633699998000000000000,
        "keys-at-auction": [
          "cf8e8ac33008ba6f286a276e07a08cb75683499795cf05078c176b51b1b8aae43276e39b5175ddf898c595e890146011"
        ],
        "percentage-of-total-auction-stake": "0.015514909885254871",
        "stake-per-key": 95158633699998000000000000,
        "validator": "one1x2ge0efu3mv56mpndzsrwtd62d24qtshkmsp56"
      },
      {
        "stake": 95681941193606000000000000,
        "keys-at-auction": [
          "946a2bd4fcbaea197a78fa72acb42233e2f3972871813f41fe2d19375ea276f38b84530b72afbada958d0b9b9b0d5f0e"
        ],
        "percentage-of-total-auction-stake": "0.015600231293201977",
        "stake-per-key": 95681941193606000000000000,
        "validator": "one17ylqmsyzehvwwf2kx5kfg6ff0pydpeufgphvhp"
      },
      {
        "stake": 22964391942388000000000000,
        "keys-at-auction": [
          "527a78e9a3b6f5a389cb9965121268603e735145b2e03c8ed5ef561dc423fac1684666e60fef903ba9a12bd8231bb698"
        ],
        "percentage-of-total-auction-stake": "0.003744173888404940",
        "stake-per-key": 22964391942388000000000000,
        "validator": "one190rdr2khdhn9jecmjex4m54gafn0y2ktyy9cxr"
      },
      {
        "stake": 14121217920071000000000000,
        "keys-at-auction": [
          "42fa89ee6e6296133ac05bbfd8c95976540ef369683864f0aaa3c7f0f5390046d077a3f4156e51654ba8c14234654c12"
        ],
        "percentage-of-total-auction-stake": "0.002302359911877890",
        "stake-per-key": 14121217920071000000000000,
        "validator": "one1cr8qrjl6khac9d5auyslvxln864vmqd5xll2zh"
      },
      {
        "stake": 12724816989999000000000000,
        "keys-at-auction": [
          "73916ee014b31e12c48d45996e1dfac993264d5e99949eeab7a93ef74aaddaf8073d1a37fbb6f0ad1d86efb9567cd90e"
        ],
        "percentage-of-total-auction-stake": "0.002074687090701669",
        "stake-per-key": 12724816989999000000000000,
        "validator": "one15hvt2vq2hhh5parkgel5dcamhwcn2dlnu2kaec"
      },
      {
        "stake": 10451636518965600000000000,
        "keys-at-auction": [
          "1a0f8186ff37146c49706036ae839530d5b007bf1d42770e44d4c1e751e416f2a1353631189ef17e972d506f3e970e81"
        ],
        "percentage-of-total-auction-stake": "0.001704061864280357",
        "stake-per-key": 10451636518965600000000000,
        "validator": "one1cvdmwpnwdcke9sg8srlncxd0rmyac395q2qrwa"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "da40854723119afbe7bde3a6b48d08a1af1f83a66a45fb264de7b15ac1232f83feb5cc95d765bd892d95aff9c8b56c96"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1edgyul3jxgks7j4ld9n5du4hd2r0d4wphyjzy8"
      },
      {
        "stake": 9055159751655000000000000,
        "keys-at-auction": [
          "a35e9bae77e2accedfb32363a04f18daea638c8e53e945a40b4fbcdac28891b3594dff5299587d1291d9934967d8ba19"
        ],
        "percentage-of-total-auction-stake": "0.001476376678404507",
        "stake-per-key": 9055159751655000000000000,
        "validator": "one1lpzdnqz47xnpand6k33zw6zlwx3fxc0veftt3r"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "52a4758ec3d2876c46538367adc2c0eb59c9026bc3280f8986527de0141d6e6b54d0f194274792d5971beafc49a71f0f"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one10gzhav0weramg90thvu6kl6y8qp0w3jvel9erx"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "a10c83f687b7dbfb84e508cd345694675ea730c1ca881b869f2a26a95121d4718899f15806a208ca18ffe19b9e743104"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one13akr6683l3lfnfu44r3n9qnmq6la0fsy8r5kdv"
      },
      {
        "stake": 10372150696000000000000000,
        "keys-at-auction": [
          "db6c36c33142c4f7684c2a56d8e970a5681951112a13fe8c41df278ad58e5aa7d384673c434e8e3d3ee269f4aed9d417"
        ],
        "percentage-of-total-auction-stake": "0.001691102290014563",
        "stake-per-key": 10372150696000000000000000,
        "validator": "one15cazch6k02clu4eqzw92mgk6l639sh9qpcx3ma"
      },
      {
        "stake": 24999748641221000000000000,
        "keys-at-auction": [
          "bfff42cdcce61c05045d061553b3debe3b5c9d53874c19fb372506f90ff6decdda60a162481c896d7552b17511e28c84"
        ],
        "percentage-of-total-auction-stake": "0.004076023711578100",
        "stake-per-key": 24999748641221000000000000,
        "validator": "one17es0cg3xsl49r0kfnhsvpju8kgsn6kc57ae7nz"
      },
      {
        "stake": 2001417853781000000000000,
        "keys-at-auction": [
          "30254662ce3aec6083e4cd116607451c4fbba1e52704603dc162735ec937bd72249b205f96b6ab06941028a173649297"
        ],
        "percentage-of-total-auction-stake": "0.000326316346050617",
        "stake-per-key": 2001417853781000000000000,
        "validator": "one1ds4a49sert8r6s3kyzaz5r6pzqxq9wv26fe0xl"
      },
      {
        "stake": 11315299787484000000000000,
        "keys-at-auction": [
          "83ea04ae5efe9c1ccbacf9a0cea9206a5d38090d5fddd19f2919bef04a89e82c4f662e991c9e9d06b593cccb4340e496"
        ],
        "percentage-of-total-auction-stake": "0.001844875758524700",
        "stake-per-key": 11315299787484000000000000,
        "validator": "one1dgtd73aumt2vx2el35g8wqkjsj4yzxkjg7sx9d"
      },
      {
        "stake": 2399999000000000000000000,
        "keys-at-auction": [
          "08c5de6061d35c3ca2278c9d778b63171a411e42dc3841006483c3e9b2e21a5b0f7e38a75033492c2fddad8d02fda682"
        ],
        "percentage-of-total-auction-stake": "0.000391302047558745",
        "stake-per-key": 2399999000000000000000000,
        "validator": "one1g63evc5azju5jxhytfmn4z3p4qutmarm8n9j02"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "1f81e955aa7e368a23225aa688f3ebc8999875a9d92ba2eb31296a0318cda83f11a5f9140d71b7ce732387d357473c12"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1g256lgqwzdtwujmplcut8qwnw6zuxfjqvp0mss"
      },
      {
        "stake": 12098807000000000000000000,
        "keys-at-auction": [
          "cbf0fa521218cfa09d7c997ad9efa8107f19a215a4792cd593da8be61b14b268cb8eae74f878a4b90279883b3f720092"
        ],
        "percentage-of-total-auction-stake": "0.001972620801974533",
        "stake-per-key": 12098807000000000000000000,
        "validator": "one1wje75aedczmj4dwjs08l2xcg7vx0dy23lcajk0"
      },
      {
        "stake": 16978722589999000000000000,
        "keys-at-auction": [
          "9e0af2d661d1362a95b909248c507092f8cc1c1dff653a9af8b6245f42898dfe570cce0a92d9931a793803cc3eae400a"
        ],
        "percentage-of-total-auction-stake": "0.002768254867772247",
        "stake-per-key": 16978722589999000000000000,
        "validator": "one1f5fae6ly754d3nsa25s99h0t6psdx2wg6yy33c"
      },
      {
        "stake": 10100000000000000000000,
        "keys-at-auction": [
          "f90b6d39d359bf877cb7969ca033240d6501d965b8bea30f05d78a805a59de6588442a6b6dab0c74ed05d12fd5c0f78a"
        ],
        "percentage-of-total-auction-stake": "0.000001646730136281",
        "stake-per-key": 10100000000000000000000,
        "validator": "one1arfssfxgzfuuerkgmn7z8x4pwpwm6wny7w3la2"
      },
      {
        "stake": 10000000000000000000000000,
        "keys-at-auction": [
          "e6791a7fd6ad130035dc16cb9a463bc6932f782d3599b7317873b76e137df0d4b23903d93655efec4067442e8f532c09"
        ],
        "percentage-of-total-auction-stake": "0.001630425877505553",
        "stake-per-key": 10000000000000000000000000,
        "validator": "one1c9h3u72czs6sk755tjyse7x5t70m38ppnkx922"
      },
      {
        "stake": 10004334000000000000000000,
        "keys-at-auction": [
          "c9e3840c651df5ea559f5c9e12f816a28a706627acaeaa73affd0c7bba049f6fb0457d616f07978c2ec8f8c5f46cc011"
        ],
        "percentage-of-total-auction-stake": "0.001631132504080864",
        "stake-per-key": 10004334000000000000000000,
        "validator": "one1rhpfn58kvmmdmqfnw4uuzgedkvcfk7h67zsrc8"
      },
      {
        "stake": 2004739000000000000000000,
        "keys-at-auction": [
          "382ab63aa5a492e9637423235bca64d2d517326171e0ac9bebef0cb38e6486bd0f201b5f7f37d6e50255f28537201693"
        ],
        "percentage-of-total-auction-stake": "0.000326857834324460",
        "stake-per-key": 2004739000000000000000000,
        "validator": "one15va9ljxxr8rtegupcml7sdfyrqegkccn0rzcuc"
      },
      {
        "stake": 13966808690000000000000000,
        "keys-at-auction": [
          "e55c39c0b3a05360dea4736aa05e1e0ddff8fb3f3de3d6a33d30017c5742d46d4420ba3e45b6acd6d1eeb4ced2e4ba86"
        ],
        "percentage-of-total-auction-stake": "0.002277184631434543",
        "stake-per-key": 13966808690000000000000000,
        "validator": "one1ge9k4ryucjqmrpnv3nn0f5gy696qy0r8djawee"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "6e559381b496722c086c33c9ac5512282ae7627c40bc62242c37303851b1e02c2a5eb4fc625439e6edbae8b27d48fa99"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1zs30klnj9rk50aqj9annatwnk9u6r7f7qunwdr"
      },
      {
        "stake": 21475956361454824000000000,
        "keys-at-auction": [
          "b8c18bcf8126343a4a97b24f49f6f6f61e27417c175941f59a46a0b89313863dc341a7d55f8621b7c563f06f9ade0003"
        ],
        "percentage-of-total-auction-stake": "0.003501495499589594",
        "stake-per-key": 21475956361454824000000000,
        "validator": "one1c04stvq5q9xcuq9ucrlxrg9n6hu68n6ansu6vf"
      },
      {
        "stake": 12729740000000000000000000,
        "keys-at-auction": [
          "a2ef59759bc200f4d9b471ddd201e9e0c7f5fbe696180b98ca2294c800afc550c877ea7c9c70191fb7192fd897161b95"
        ],
        "percentage-of-total-auction-stake": "0.002075489750991754",
        "stake-per-key": 12729740000000000000000000,
        "validator": "one1yr22qm5su0s3tpl0dzytj07ru6ywrxrpg4caz7"
      },
      {
        "stake": 1304740000000000000000000,
        "keys-at-auction": [
          "b181bd14fbcdd16ec6808626383a357f3051b1420e4b17765c418b2e856baa7278c314977503acea4480176846cc1380"
        ],
        "percentage-of-total-auction-stake": "0.000212728185941660",
        "stake-per-key": 1304740000000000000000000,
        "validator": "one1xgwkf8n3fn7emlxkszymn7k7tp4qk9ptp93mx5"
      },
      {
        "stake": 9267240000000000000000000,
        "keys-at-auction": [
          "b599ab0a5b37542f80b61274249aa0d095a90b32498f766d940f5af64d441ae84bf2189a7030f5e9ad06fb024a04d699"
        ],
        "percentage-of-total-auction-stake": "0.001510954790905456",
        "stake-per-key": 9267240000000000000000000,
        "validator": "one1fllqjv6hq8vfvz5kwyhaknw0f2emvfqmq0s2tu"
      },
      {
        "stake": 14653027788460000000000000,
        "keys-at-auction": [
          "9522b29970238da7add130f96ceb7555c29f2e0e1529aee9186118e9bab6057a8ea190f9d310339d0960503c59d0e10a"
        ],
        "percentage-of-total-auction-stake": "0.002389067569011315",
        "stake-per-key": 14653027788460000000000000,
        "validator": "one1fs84nmfph4scmj3t8cduwqf7vpvs88279whxha"
      },
      {
        "stake": 9289390000000000000000000,
        "keys-at-auction": [
          "324ed2e36044dda94d7f4495134f6c838aefc194766cbcdb969537098936040976320808a68a8cb34eaa10e01d7f9092"
        ],
        "percentage-of-total-auction-stake": "0.001514566184224131",
        "stake-per-key": 9289390000000000000000000,
        "validator": "one16pavfhark2j7h7235hgrfrx3lwlj7xnkslesa7"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "74db35e3e2ed0e04f1c8e5569d8559531965585b2f93ecb87519708c6952a7c38eed2901bd3926ef9c747387b92b3119"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1c43tg8ug4tl7wzyvax9urgnv7g4ndk9zxdyz8e"
      },
      {
        "stake": 11781877000000000000000000,
        "keys-at-auction": [
          "c2fa456fc54960829ab205014e8eb2c359b4f8b0ce3759756031bf2a57ee4b5d69c8ef94716ae8a33cb47ada9be5c884"
        ],
        "percentage-of-total-auction-stake": "0.001920947714638749",
        "stake-per-key": 11781877000000000000000000,
        "validator": "one1ss2xx6agknad0k3m0v5m7sr4xz97vzsk0rk4a6"
      },
      {
        "stake": 16233173207520000000000000,
        "keys-at-auction": [
          "48ad00d97fb657f3476b5a8466798f33a23b16615091ebcd3587c14c9aad9e2e28c28fd12a7e9c887e621eb2f7860d00"
        ],
        "percentage-of-total-auction-stake": "0.002646698567157043",
        "stake-per-key": 16233173207520000000000000,
        "validator": "one1hwn68w7m5g8daltvrjkmq23qn58nrvr3yz6ryt"
      },
      {
        "stake": 1010100000000000000000000,
        "keys-at-auction": [
          "834bc376d7a552f0b3b2946421f4c02fb8869a6978d665c20d0486129029261bab00dbdf71165f057c4354f64f8e9e08"
        ],
        "percentage-of-total-auction-stake": "0.000164689317886836",
        "stake-per-key": 1010100000000000000000000,
        "validator": "one18lcmkd5h3l49hz58rt6hqd3tvpjtmy5uwzfqfv"
      },
      {
        "stake": 11117724059990000000000000,
        "keys-at-auction": [
          "c7c333c66d3c88440b8595306d5cdd733294f3d35b6da5f37e94f0241c620f0af4766a4a4dcc44704a18f2aff7be2785"
        ],
        "percentage-of-total-auction-stake": "0.001812662500637379",
        "stake-per-key": 11117724059990000000000000,
        "validator": "one1237cvlujddq9f68s94344rptsuwx0h7ek5lcnc"
      },
      {
        "stake": 9271867000000000000000000,
        "keys-at-auction": [
          "89778b500d0fd1710a34d161673b57a149d462340446743f6f5f4631eb856667525368ded0841b8f5034b4ff4f839e01"
        ],
        "percentage-of-total-auction-stake": "0.001511709188958978",
        "stake-per-key": 9271867000000000000000000,
        "validator": "one17tj2jjehdlg8xfgp48xpeyqur2qf6nvs88jvyu"
      },
      {
        "stake": 12678597000000000000000000,
        "keys-at-auction": [
          "e51a0049025c2598b3465dffaca6cf613f7c0024fe1bd9c50063919a7ed3cb24a864dc3336030ffc87c3f3bf38b81e8b"
        ],
        "percentage-of-total-auction-stake": "0.002067151263926427",
        "stake-per-key": 12678597000000000000000000,
        "validator": "one10zad8mkynw0wsxzqkv4xfjrk2qe7vvfywardkd"
      },
      {
        "stake": 13382520645100000000000000,
        "keys-at-auction": [
          "1d806a18353315437848dcf16a6297a51974b81a2fbfbd4e9b6611af77af3f32061d07128328634ad24ba28af9ddee82"
        ],
        "percentage-of-total-auction-stake": "0.002181920796602334",
        "stake-per-key": 13382520645100000000000000,
        "validator": "one1p0fecz3s2ldn53829fpj99m92cr4vfcc5hmj32"
      },
      {
        "stake": 13884982968566000000000000,
        "keys-at-auction": [
          "30c41b92a7253f78050010ce4a24ad9ee0821420c12b1586ac56d20f14486b9167e2e400ff24251aac9cc309e69a938f"
        ],
        "percentage-of-total-auction-stake": "0.002263843554067388",
        "stake-per-key": 13884982968566000000000000,
        "validator": "one1xdnyc4c85vkh69am2wdd7rmcyzprmem5tnm9ck"
      },
      {
        "stake": 15365619079644800000000000,
        "keys-at-auction": [
          "06e268d186891b0a7e7c116267d0ab02d13055da47ed697c8f42a382588497629638c75a169c34a4df647cf915582e00"
        ],
        "percentage-of-total-auction-stake": "0.002505250297134594",
        "stake-per-key": 15365619079644800000000000,
        "validator": "one1mrm8xffrt9ruq40czu8k78tka03p5mteqzx29g"
      },
      {
        "stake": 10124248494000000000000000,
        "keys-at-auction": [
          "af8cda6748c00cde2ecea66566adf9ccae811458a83ba33aedd9799f62ee5b092596919f32f36576b02f810d13102417"
        ],
        "percentage-of-total-auction-stake": "0.001650683673491422",
        "stake-per-key": 10124248494000000000000000,
        "validator": "one1ng4agl0mz8a58v86ap77qd3d5kc0q2kprptldk"
      },
      {
        "stake": 10117838637504000000000000,
        "keys-at-auction": [
          "764d50e4781440ac44e78f9001f6f8d7770bdea0d9d3647e578d28d34fcb9a7392f20912e8a6f9b9d08c4e07ec6f1609"
        ],
        "percentage-of-total-auction-stake": "0.001649638593901205",
        "stake-per-key": 10117838637504000000000000,
        "validator": "one1ryuvxq3mgcvj0a2ukpa5dkuxmlc2gdf7pcc775"
      },
      {
        "stake": 10776731700599000000000000,
        "keys-at-auction": [
          "1599542a6a047d65c8900075e6a92aa03492e0373019e15a729cde20253983dff723fae4be6e0a55e922d923897bc680"
        ],
        "percentage-of-total-auction-stake": "0.001757066223959103",
        "stake-per-key": 10776731700599000000000000,
        "validator": "one1ygchq3eve4u2majguwh8e55k3ys8l4t5nex224"
      },
      {
        "stake": 9594440000000000000000000,
        "keys-at-auction": [
          "0b4a1b26d04bd69f050620bc8902465ee1eb5ccb57ae4ee4bed5c75bb17fa71759eed179e39fe22f26f3db8234805596"
        ],
        "percentage-of-total-auction-stake": "0.001564302325617438",
        "stake-per-key": 9594440000000000000000000,
        "validator": "one1c4keaqwlj8ljhdy6yzur5en40vnf3nzxv7qkda"
      },
      {
        "stake": 2001000000000000000000000,
        "keys-at-auction": [
          "2212fb42aed0391f5f480bc213bcc6a118e1bd910da8ea2100da08da98c9140dabae817fcc652a9a4a1e1470cfe58291"
        ],
        "percentage-of-total-auction-stake": "0.000326248218088861",
        "stake-per-key": 2001000000000000000000000,
        "validator": "one1mvquy9x0aswr4ssmr5xzm8q5ve5smfmukzpul8"
      },
      {
        "stake": 10567239000000000000000000,
        "keys-at-auction": [
          "6a5851aa43c99baeba79b2996194025d9994360a329d82486befc70e90199480cf1114bc08dde1675595f215f8ad6d89"
        ],
        "percentage-of-total-auction-stake": "0.001722909991938590",
        "stake-per-key": 10567239000000000000000000,
        "validator": "one1uahjhhl8ajwshuxlxyzhqa6m565mek6kg6hqc3"
      },
      {
        "stake": 10100000000000000000000,
        "keys-at-auction": [
          "f909b7a88d5a74a515a622c6556843ff80481d55d1465e74d7709a180cd9409df59d727a2cb86a21bb0fc9634c11ae8e"
        ],
        "percentage-of-total-auction-stake": "0.000001646730136281",
        "stake-per-key": 10100000000000000000000,
        "validator": "one1sj0ws72z5h370sx0kakdctfvjjq0945d0khhhn"
      },
      {
        "stake": 10189077000000000000000000,
        "keys-at-auction": [
          "687610ae21d8a707eb77c4fcc089cae8f8dcde89a925744ded3ab89460aace710a6396f87a012eee3d3153e240f69785"
        ],
        "percentage-of-total-auction-stake": "0.001661253480869665",
        "stake-per-key": 10189077000000000000000000,
        "validator": "one1hv558esjr6jc57ahlvu7ape0p975hyq3t26sms"
      },
      {
        "stake": 10410100000000000000000000,
        "keys-at-auction": [
          "86823f71815aae6d443eee2d448d0742b086af84659054eb161858a5f7b5dec190012c3163fd4b703e95469336c84016"
        ],
        "percentage-of-total-auction-stake": "0.001697289642742056",
        "stake-per-key": 10410100000000000000000000,
        "validator": "one1svtmmvm0nxcqz0nj83ceq54cplu3vdf73l076z"
      },
      {
        "stake": 10995386227053000000000000,
        "keys-at-auction": [
          "f92c5631824378205ea2423fbe0a820ab3345a4af120a87236e6228c0a75287ac33ca1156e05abbed3169af8f49c1383"
        ],
        "percentage-of-total-auction-stake": "0.001792716223775536",
        "stake-per-key": 10995386227053000000000000,
        "validator": "one17xz463re6h6hfpj28s6xgrx7eacec3yppfgu3u"
      },
      {
        "stake": 9999148692774000000000000,
        "keys-at-auction": [
          "ca565e3b6879fcc151d645c699d9bfd2427b5382ee3457b519bf019d836d9f892cc6e32fdc1044fa3d88da1a2a70858a"
        ],
        "percentage-of-total-auction-stake": "0.001630287078172455",
        "stake-per-key": 9999148692774000000000000,
        "validator": "one1qrgn3tlf58zsdp87s7pg0rhtjd5q8r56lthyrn"
      },
      {
        "stake": 12956488799999000000000000,
        "keys-at-auction": [
          "713c04a3b0a5e4f72238a86fffee54748f18f1a0130af73ed5ba67301ec9e282a438348fcf2a7ba66b60a7642439810a"
        ],
        "percentage-of-total-auction-stake": "0.002112459462112924",
        "stake-per-key": 12956488799999000000000000,
        "validator": "one12s96xcv0d3vj7u3js84j6v4322t23996mqenwj"
      },
      {
        "stake": 97604668442362000000000000,
        "keys-at-auction": [
          "e7b01b2bb0d947112dc90c256264cb4f584d80218cbb63a1bd2a4a684d6782e26fb53110a30ade33b40505de2c7a6f12"
        ],
        "percentage-of-total-auction-stake": "0.015913717719377661",
        "stake-per-key": 97604668442362000000000000,
        "validator": "one1l8n75pj8zmka0nxtqjneexf3p8l442g8xrxplx"
      },
      {
        "stake": 12930771300000000000000000,
        "keys-at-auction": [
          "d8135f6e42a8009fa68d2410e37c357b39704228e698a014554a7fc0a95bc87a7da6877b18b96f9f34a5be0bd35f3a18"
        ],
        "percentage-of-total-auction-stake": "0.002108266414362612",
        "stake-per-key": 12930771300000000000000000,
        "validator": "one1re7ccpvjq09jagrfxmulzwkw9jy6y6g62u3xrm"
      },
      {
        "stake": 10563753726549000000000000,
        "keys-at-auction": [
          "d8e2d426c4977cd5805115f152c26b7450171d453952cc27bd319dd4e7b5a3268b559790dfee9f14c7280e0e6df06c91",
          "baea58a081d297ac3e5b8b07f628e6a3cabffa81aa8ae01889fe5f9ff54a323403fc5933ecb78e7a55ea46e76ed26b01"
        ],
        "percentage-of-total-auction-stake": "0.001722341743936121",
        "stake-per-key": 5281876863274500000000000,
        "validator": "one1xk5p89nzd89044wf770ppqwv4rsz4wn78jgqzl"
      },
      {
        "stake": 10572312000000000000000000,
        "keys-at-auction": [
          "200dd9daa86dcf89b18bd468e6e8dd2c59f0b50ef4194f463f7b02a86a381dd4cfe589ccebe43bba3144f04489f2d98a"
        ],
        "percentage-of-total-auction-stake": "0.001723737106986249",
        "stake-per-key": 10572312000000000000000000,
        "validator": "one1esvnhtvek2ggz3e8fq6znejtpzgr7uqjaf8h45"
      },
      {
        "stake": 11923791598894000000000000,
        "keys-at-auction": [
          "2c6cb2778d6c3459b75dc5a8fd7c23bfae25eaeaaef4d037ad19968b08c6f08b29fb9111fff3c627ef701f8a8e28b907"
        ],
        "percentage-of-total-auction-stake": "0.001944085838082009",
        "stake-per-key": 11923791598894000000000000,
        "validator": "one12f484m9f8d9yhh8va3sc09r8lwkcufu2flya2h"
      },
      {
        "stake": 10040453000000000000000000,
        "keys-at-auction": [
          "e0bf10df5e9b77753ae384350492945498bbe73399a60452bc73785a50fcf4dc742f32d7fa8b04e144c542e0c6183f99"
        ],
        "percentage-of-total-auction-stake": "0.001637021439307826",
        "stake-per-key": 10040453000000000000000000,
        "validator": "one13zw4cvg2jnuq494r79agr2pq5nr3rlmp9lh3e8"
      },
      {
        "stake": 15186010900000000000000000,
        "keys-at-auction": [
          "faea76b6eccf17a61ba36a6a20b4dc9542eea9e5a8f83b48732247abb871f0f95ef4d23a8c13577050ef38a7817d4518"
        ],
        "percentage-of-total-auction-stake": "0.002475966514744139",
        "stake-per-key": 15186010900000000000000000,
        "validator": "one1ae46extxed94jxfqthtl6j2tt5mn684zdh7gu2"
      },
      {
        "stake": 11804715945105400000000000,
        "keys-at-auction": [
          "a716b28f9da3cb58ef662199cc408fab6ea31a4f96c31ac63a2236d8986359209cbfda2e7b32ea2b00b03c19f7c8df13"
        ],
        "percentage-of-total-auction-stake": "0.001924671435350226",
        "stake-per-key": 11804715945105400000000000,
        "validator": "one1ecp9htmq8csm9wzhgshy24rz3f8facpzdw7zw8"
      },
      {
        "stake": 15525789984597000000000000,
        "keys-at-auction": [
          "6c34e759f76fa9c600202adf282aecc035c194ffbb7805c8322cf3fc074c1d3dfab9b1153b6901dd2c38503a04a46387",
          "abf2689fcb4593ce9786d22e0858dc816498e4d5124b207445a6d3ccfb7b1621e81e7395fa1a400f35040ec2d9fc8383"
        ],
        "percentage-of-total-auction-stake": "0.002531364975960349",
        "stake-per-key": 7762894992298500000000000,
        "validator": "one1k6w6v432ztk8g360lwapd95q4fzjjm9wczyua0"
      },
      {
        "stake": 10000000000000000000000,
        "keys-at-auction": [
          "d679a4b943102defdb6405146371b8989a69c75b8009f1e379a6d4d9a858df4ffb71b92931249efb13def4a499a67799"
        ],
        "percentage-of-total-auction-stake": "0.000001630425877506",
        "stake-per-key": 10000000000000000000000,
        "validator": "one1htajfd9ncg3jfvw56k5400mtqm9f8nc583l2ln"
      },
      {
        "stake": 25482741896829000000000000,
        "keys-at-auction": [
          "df8323b00d08177c7cbacbb1d633ced7962a82759b4828781cc132fcf97d9e45d9377fddc64da65802c2f6c79c3ecf97"
        ],
        "percentage-of-total-auction-stake": "0.004154772181838494",
        "stake-per-key": 25482741896829000000000000,
        "validator": "one1ykgt7kz96emc7avsv6ca6czva9guvcg807eray"
      },
      {
        "stake": 2006764000000000000000000,
        "keys-at-auction": [
          "9f59f76b201d09fe299a11bee8509a441412e34b837adc1ddd8d4758c0ceb017dc02ef3ed6b770845bf4a7d5fd30c919"
        ],
        "percentage-of-total-auction-stake": "0.000327187995564655",
        "stake-per-key": 2006764000000000000000000,
        "validator": "one17u02mjqlkg054damrta0tgxykp6prens9zzmr5"
      },
      {
        "stake": 9586877000000000000000000,
        "keys-at-auction": [
          "523bbc459ef6d0d5130df5ac7bfa5f8709171689219849b343db9213be6db5630ba134c448b49883ac3efbb67dc6f819"
        ],
        "percentage-of-total-auction-stake": "0.001563069234526280",
        "stake-per-key": 9586877000000000000000000,
        "validator": "one1gqnfh2kkfn6wsgwtx7tnqkw86wpcqsk807kkcr"
      },
      {
        "stake": 9689422000000000000000000,
        "keys-at-auction": [
          "f69cb2dbba98a4fbbded60ad8a8e599762afaf4c9031cd0a5b2e1aa339abb8dd91d17a938cc96b4d9ca62eee39976995"
        ],
        "percentage-of-total-auction-stake": "0.001579788436687161",
        "stake-per-key": 9689422000000000000000000,
        "validator": "one1ka8trua6hsqmszqzthr30cj0rxz33lklq307zl"
      },
      {
        "stake": 12459166307176000000000000,
        "keys-at-auction": [
          "b5498a248bf1ef9f03497ec3fe27f8e6c984e052e8ded27a728e5c6526eed506b879f5eafcfaef2785c3fcab468e0489"
        ],
        "percentage-of-total-auction-stake": "0.002031374715936505",
        "stake-per-key": 12459166307176000000000000,
        "validator": "one10eqee99zcxmx2kxux92tqkjpmc04wk9ugr79p6"
      },
      {
        "stake": 10100000000000000000000,
        "keys-at-auction": [
          "a52399a1b99dc0ae18191ecde7bb149b336840228bd6aba37dc8f8c667feed46e7ecb32a83bca9d3042c3183ce3ac200"
        ],
        "percentage-of-total-auction-stake": "0.000001646730136281",
        "stake-per-key": 10100000000000000000000,
        "validator": "one13fkznua5wx70e32jat3egpp5qnhnlu9397x7a9"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "1e1273b8075ac5377e56e09397eb3c1b35f5ba86d502bf22d068de2dc6abaa27ec50075eef40753c6d8c339861eca786"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one19fm504vtmuvnzfhzx7eeqhcan3ne5faw72mtv2"
      },
      {
        "stake": 10001000000000000000000,
        "keys-at-auction": [
          "9de3f7edae31daa0cd35542f5372801e2fb1df69821dcb84b4d98ec51d92839bb4265dd7b78176508f29cc306de13c05"
        ],
        "percentage-of-total-auction-stake": "0.000001630588920093",
        "stake-per-key": 10001000000000000000000,
        "validator": "one1225f76qslg5m6tml4j6agyjw3ngy0cfgcllqqx"
      },
      {
        "stake": 13509815680000000000000000,
        "keys-at-auction": [
          "9f63ff2423cfb6adeac732b73163b8cca684cfa907b31dadbd9e40b342984304ffbdc777ac715dc96235138051cdca19"
        ],
        "percentage-of-total-auction-stake": "0.002202675308500228",
        "stake-per-key": 13509815680000000000000000,
        "validator": "one1p9xya88j2344kgslgxxkugqg38ua59s4uc5ru6"
      },
      {
        "stake": 11781877000000000000000000,
        "keys-at-auction": [
          "0c0bc237d97290e31a9282f6162ecfca5c5532e59298ed3fedbbf8fa9642e9a35a67df277b9c70c5a7886eea3c54cd0d"
        ],
        "percentage-of-total-auction-stake": "0.001920947714638749",
        "stake-per-key": 11781877000000000000000000,
        "validator": "one1d5adetdwd6zkhu8l48q9fq4j4pmwckpu3eng67"
      },
      {
        "stake": 11709116000000000000000000,
        "keys-at-auction": [
          "8c0ec55728c48aa43c1a9836f988e847b48284ad6baf37683efa957b763cea5102b1feb7409bf404f970da27fa750997"
        ],
        "percentage-of-total-auction-stake": "0.001909084572911431",
        "stake-per-key": 11709116000000000000000000,
        "validator": "one1el3arlc0dczjpr8crhufgszurt6hcmlm66evwa"
      },
      {
        "stake": 10000000000000000000000,
        "keys-at-auction": [
          "f1558e3fff2d89c37acec3d055bf0131c864fb222574bef27ca0af13dd3fd73173d8e818d842b117f5c6d5bcd545250d"
        ],
        "percentage-of-total-auction-stake": "0.000001630425877506",
        "stake-per-key": 10000000000000000000000,
        "validator": "one12jell2lqaesqcye4qdp9cx8tzks4pega465r3k"
      },
      {
        "stake": 10609377000000000000000000,
        "keys-at-auction": [
          "b16e9a5492989618ef7c5723b4360b554ef44a0dd7c4624ab660d23431b2ae00b5d00e32c26bc75b50bacc68b7d50908"
        ],
        "percentage-of-total-auction-stake": "0.001729780280501223",
        "stake-per-key": 10609377000000000000000000,
        "validator": "one135yfjuu5xhm7p3trj39tmg6v8pu067hgul38dy"
      },
      {
        "stake": 19316265617397700000000000,
        "keys-at-auction": [
          "266e262c3a6c3e1a0ac3eb0f83e6745328953177e63762814dddfe7ed4fc0dc966cac7b4966936a8d16bba76dc088698"
        ],
        "percentage-of-total-auction-stake": "0.003149373931937598",
        "stake-per-key": 19316265617397700000000000,
        "validator": "one1cts9rdxhd25hcwt6ulstnp50suwuzzdtsxr6pg"
      },
      {
        "stake": 10600000000000000000000000,
        "keys-at-auction": [
          "95d54d59d5d9937d0a4227235e4755f5ca2329bbbf9973fcc7104cb6a9a125e840c4e8a9aaa974e31da1b35f22117a99"
        ],
        "percentage-of-total-auction-stake": "0.001728251430155886",
        "stake-per-key": 10600000000000000000000000,
        "validator": "one1zzz5hanvsmtvl86zuur6nwx8tarcdh0g94vj9l"
      },
      {
        "stake": 10510100000000000000000000,
        "keys-at-auction": [
          "87237e610109682036dda3e7edb27982d342ccf4e5a3d81ae5fbe7cf433ad3261eaee15b30fd3c24859522f5950cfe01"
        ],
        "percentage-of-total-auction-stake": "0.001713593901517111",
        "stake-per-key": 10510100000000000000000000,
        "validator": "one1cf3fckv4u3kvjvqczyydl9jpy6pfa0fs8cauac"
      },
      {
        "stake": 11288787000000000000000000,
        "keys-at-auction": [
          "e7fb4c8bc46f4f317a0ed3b68c9692b64138b637f1da08d7b3b6d46203b07023aa6e647c19a36e331bd477b95e67b017"
        ],
        "percentage-of-total-auction-stake": "0.001840553045044828",
        "stake-per-key": 11288787000000000000000000,
        "validator": "one1lrye4mmkld3a625ygvl8ulsmha3qzarmxny5pv"
      },
      {
        "stake": 10576617980000000000000000,
        "keys-at-auction": [
          "6c26de1193ce6a62b2683593a61c3c4b2d46cd383570dd289d8040dd705cc5fa6fbf608a9c0329e29016f78d84661b83"
        ],
        "percentage-of-total-auction-stake": "0.001724439165108251",
        "stake-per-key": 10576617980000000000000000,
        "validator": "one1upjqy8au5rfa70xwq52gvqsdjdcem5t44f8gtq"
      },
      {
        "stake": 1440184183808000000000000,
        "keys-at-auction": [
          "cd66ad1d678e9f48caf13cef708f05985f806d2cecc1322aa4d4ec760478e323a856fb7d9504ea4a8cbcd608a7b70388"
        ],
        "percentage-of-total-auction-stake": "0.000234811356165478",
        "stake-per-key": 1440184183808000000000000,
        "validator": "one1rejxfdzs3s6cl6mtymvgj8hjqp29ufemapvpam"
      },
      {
        "stake": 1414841000000000000000000,
        "keys-at-auction": [
          "78933f02116b634637daa03e6c8488ad803d42d6b3c684f46ce98db114019b6155f5aaebef124dbb5a3323f938547d0b"
        ],
        "percentage-of-total-auction-stake": "0.000230679337895583",
        "stake-per-key": 1414841000000000000000000,
        "validator": "one1hwlrve3qyk7e8e2z9q6xtu6u96qu0lw623ummd"
      },
      {
        "stake": 2004250000000000000000000,
        "keys-at-auction": [
          "863990d9eec134394d01091392697dc9e2fe55f293a443bf058d888d164e513e3d9635863f0f323b7b1968e95459a687"
        ],
        "percentage-of-total-auction-stake": "0.000326778106499050",
        "stake-per-key": 2004250000000000000000000,
        "validator": "one1myz6h2hhl83lzd3f6uj0umlq2d9pr9u7ggtzk6"
      },
      {
        "stake": 11006730380000000000000000,
        "keys-at-auction": [
          "71f79aa6548a3277a574ec5cbf31d1424484e204032c914505662cb4963cb4e29bb22219715a64a67f9c4fa7076e1a15"
        ],
        "percentage-of-total-auction-stake": "0.001794565803827853",
        "stake-per-key": 11006730380000000000000000,
        "validator": "one12c8tpmtaezelshv4r4yuwnvsurxhslw8jsgpeu"
      },
      {
        "stake": 10319470332814000000000000,
        "keys-at-auction": [
          "e5ac12e3545eba42d11d7440796745a52d3af8f3f4aa1f657ac4153f3ec00ea055fbe6f65f1d17f481dc4881e6e03197"
        ],
        "percentage-of-total-auction-stake": "0.001682513147277079",
        "stake-per-key": 10319470332814000000000000,
        "validator": "one18syyn5nsuu9yz6nz0uuuns6587cwqnqex58v39"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "a8da2b1416631eb1b2e22cfac8f168c3019ce92579559a521c346cf1edac7271a30c29d6e034191b4b21b94f92787702"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one12lwj5h27ne8ada20s7ya5qzmwvuwpsj423kcg7"
      },
      {
        "stake": 33300000000000000000000,
        "keys-at-auction": [
          "7bb0f452d7caa759f99180dfc9384e56366ed4b2f961ff58735f9231996df8e485e43dac167ba10fdb54e6a81d01f493"
        ],
        "percentage-of-total-auction-stake": "0.000005429318172093",
        "stake-per-key": 33300000000000000000000,
        "validator": "one1e4lcuaeuuhdqz23vnnkq6d7l8pd6rtkghz9tcs"
      },
      {
        "stake": 219999000000000000000000,
        "keys-at-auction": [
          "8900237ad57305ef68f363db911a59b05dcae3d8a977818ed77a72658115f2016a87aeb67b18da3657e1e44734677a05"
        ],
        "percentage-of-total-auction-stake": "0.000035869206262534",
        "stake-per-key": 219999000000000000000000,
        "validator": "one1el0346s4z6mkdj59hkwchqxhq0k8etzxawrgky"
      },
      {
        "stake": 8651010000000000000000000,
        "keys-at-auction": [
          "577bac828dacca2acf29f8d38365a5af015b88298482c38f09ccde44f3c1a2d7011f710c4a7fe450d8b5d4e7a6950a05"
        ],
        "percentage-of-total-auction-stake": "0.001410483057055931",
        "stake-per-key": 8651010000000000000000000,
        "validator": "one1xsf70cu7uuu5k6f0kpxp9at8r4dmg0sttzx40t"
      },
      {
        "stake": 15443977610171000000000000,
        "keys-at-auction": [
          "dc735a503388d93a86ad56ab8d2f0c79dbec64b9331812beeab068553959650e848e6fbb3fc280081e90abb50074bd16"
        ],
        "percentage-of-total-auction-stake": "0.002518026074723916",
        "stake-per-key": 15443977610171000000000000,
        "validator": "one1nzkhudzmyczmy0ukvjewlx4zyqjmc8ujhfhq90"
      },
      {
        "stake": 10594343899999000000000000,
        "keys-at-auction": [
          "24968b953506079535cb6bb95f4a1438870ad72d9be1d7ccb29fec672cfb63587b282a4e70759c41fde136aae3e5068f"
        ],
        "percentage-of-total-auction-stake": "0.001727329244975147",
        "stake-per-key": 10594343899999000000000000,
        "validator": "one1jv4n6rxsg8puxzaelvsymkryupyuezt05rk36c"
      },
      {
        "stake": 13417430470000000000000000,
        "keys-at-auction": [
          "4c0d79ddeea979f76b086eb314781807c4c0ce4665b84a9084a7816e9019447981700c0c1a8e83d34e82bbf1502fc101"
        ],
        "percentage-of-total-auction-stake": "0.002187612584791949",
        "stake-per-key": 13417430470000000000000000,
        "validator": "one1hyqgueh0fv7mwwtt82f74wq9guzmw8ytf74qhn"
      },
      {
        "stake": 10699999000000000000000000,
        "keys-at-auction": [
          "4077687225674df0113810e1a5d9d374e792c37884a255aeceafd0d721fa3e62dce471ac1464463fc3f0958451515093"
        ],
        "percentage-of-total-auction-stake": "0.001744555525888354",
        "stake-per-key": 10699999000000000000000000,
        "validator": "one123qhn8m0amf7ap80gplf68eae5923lu2ltpupe"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "d493d4f5ee9b7af9a7e8e3384331f6b791e85253238cdbcc569f4b4a64ebac495762aa4b3e1669a0c712ec017d93f816"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1uf48d8h242ns80w7lr0wl20e3rf6unr0f64mhs"
      },
      {
        "stake": 20319897835502000000000000,
        "keys-at-auction": [
          "ebeb24316d8dd38485eee5ce3849d8c6b19d7cd35dbcd0456792bdbf1ae415f8d78c3f28f63ae42de21e3b3b4dceb48e"
        ],
        "percentage-of-total-auction-stake": "0.003313008725927153",
        "stake-per-key": 20319897835502000000000000,
        "validator": "one1mcc9plwyqpeyhk4tv2a9wka6tzckc37wsn36az"
      },
      {
        "stake": 100000000000000000000000,
        "keys-at-auction": [
          "9b064ba9d9239f9efd95e240c21aef62087ca7d26d20ad8aa0c484874b517c34702f43d126f87eb6f3f76ae188c35e0d"
        ],
        "percentage-of-total-auction-stake": "0.000016304258775056",
        "stake-per-key": 100000000000000000000000,
        "validator": "one17acwjm0awk5v47n3yxzz2hvvdddtkwrnelhgav"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "f07c0c1e697d4dc98eb1ce24d94e66bab6e43a50d8ce7083f8696ad9601b864dfd250374f09cde59f4f686d865f8ea97"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1ajs5cvdt8v37z6520rch7h9wy97dg5f5dr5lxm"
      },
      {
        "stake": 10321652000000000000000000,
        "keys-at-auction": [
          "df69d69cfba54c0e579eaa43f75846ff05b9bcadf09b502f7c5eb5410e5a5c7bab0e68bfd9b079aa981bc136c84c5495"
        ],
        "percentage-of-total-auction-stake": "0.001682868851940694",
        "stake-per-key": 10321652000000000000000000,
        "validator": "one1yzp3yw8x848jazrz7w5a24zulum2nsjqnd9n67"
      },
      {
        "stake": 11752357999000000000000000,
        "keys-at-auction": [
          "178604c4f3757bd6266a4b24651ef82d371db8dc3a1dcfeface2e15c00522a263bebc833e34f545a927ebea1e98c3880"
        ],
        "percentage-of-total-auction-stake": "0.001916134860327898",
        "stake-per-key": 11752357999000000000000000,
        "validator": "one1566p89a2hmwkxle67nvqq7pvncgy3h5jukdcnk"
      },
      {
        "stake": 11947717000000000000000000,
        "keys-at-auction": [
          "5c99f48ccc1377faf79f6d36f46222e6c124083a58e9a47f7bc9e37a0bf529215671f71ff1bc4c3f8c5548b484c31e85"
        ],
        "percentage-of-total-auction-stake": "0.001947986697391301",
        "stake-per-key": 11947717000000000000000000,
        "validator": "one1k3r0xmuw2zhwvww88nx337h0ee7g2h3edgl66l"
      },
      {
        "stake": 900800000000000000000000,
        "keys-at-auction": [
          "e1febbaf5af29b651662f1f2ff2af2ef9e3d9ca324c9c8526f3486a148293fd5d4b591b63f1912422a4ea162758eed12"
        ],
        "percentage-of-total-auction-stake": "0.000146868763045700",
        "stake-per-key": 900800000000000000000000,
        "validator": "one1df49l0afjgltkaheussp8e7y708ac9zuyfpfle"
      },
      {
        "stake": 13923517000000000000000000,
        "keys-at-auction": [
          "6c56ef94ebb523ebb48e25f4d1665756885c6b8d6dde7d413d2a540a815dcef60671ec2a8bc03691677eb176a65fd799"
        ],
        "percentage-of-total-auction-stake": "0.002270126242268848",
        "stake-per-key": 13923517000000000000000000,
        "validator": "one1yc64ch2fthece9ngplvxjnywqnguacp0e39s3h"
      },
      {
        "stake": 2005400000000000000000000,
        "keys-at-auction": [
          "50b9baa0bcc762565df463da81f38b7e2dc12298834fe509f204beed4889bfa20899d6bd09e4c3fb6c29423195037014"
        ],
        "percentage-of-total-auction-stake": "0.000326965605474964",
        "stake-per-key": 2005400000000000000000000,
        "validator": "one14shk8s5ucmueku9hjyccvwxkgu6tky9rrzdfc8"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "3daead086d4e4ce77cfbbcaa320bc19f3c009d36a239ed042b3fbfe5a580ec66d3a4f315bc023c5696928aba8589b10f"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one14vrwvgn7yeamgp75jgj73ucl2xnxvlnsm2aa8v"
      },
      {
        "stake": 15499998250688000000000000,
        "keys-at-auction": [
          "84bcc8102ca3fb925d9672254e26029a9f0d6b4418037aad081bb9e2c8b0462b9812ae4c5f39f70998ef934c0f10fd02"
        ],
        "percentage-of-total-auction-stake": "0.002527159824921252",
        "stake-per-key": 15499998250688000000000000,
        "validator": "one1ndzkyjg9aesmr5pl3vhpqufugvgs4mxme96j2f"
      },
      {
        "stake": 11790816994408000000000000,
        "keys-at-auction": [
          "72817a31165e7339410f85165ace34706005d22570646b77831f496fb9399fa9e8ef02a0535f2c6aba3a289e14b43b07"
        ],
        "percentage-of-total-auction-stake": "0.001922405314461505",
        "stake-per-key": 11790816994408000000000000,
        "validator": "one1seu070y2jpfuvz76vqpqry837jf8t6pm504f8j"
      },
      {
        "stake": 1827777000000000000000000,
        "keys-at-auction": [
          "a433c89ef2958c64c4c8fce06627d8dafad61fccaea449b44fb297444219bb8eaab845800c48be7c774ff8ef8f0c4998"
        ],
        "percentage-of-total-auction-stake": "0.000298005491910947",
        "stake-per-key": 1827777000000000000000000,
        "validator": "one18hjmdhyx53dc055cmp0pgwfgqf57fq0jtlqwcn"
      },
      {
        "stake": 9271877000000000000000000,
        "keys-at-auction": [
          "2cad967813e89ea39e89fa849f50cd7bd57eb6e019ec32c9e977d6fc73f24bea4e16b5cfbce2cbad3efe5b9acfa35581"
        ],
        "percentage-of-total-auction-stake": "0.001511710819384855",
        "stake-per-key": 9271877000000000000000000,
        "validator": "one1yyayy87jcrdr8669cg7lsqtn4j94zu5fca25yp"
      },
      {
        "stake": 12010000000000000000000000,
        "keys-at-auction": [
          "dd7d66b75f5f9d3122b246641699d1a19960f41ca2002e489cd71b0707f07d6bc42864b2bd5ab9420951ffd80e52d018"
        ],
        "percentage-of-total-auction-stake": "0.001958141478884169",
        "stake-per-key": 12010000000000000000000000,
        "validator": "one1u3stkh6x9ev6z2p2dkk30d26jglz4zykvlf0ga"
      },
      {
        "stake": 4609479000000000000000000,
        "keys-at-auction": [
          "2ac1cd49ebc0cb1c8a49cd90c41a555a7413f13252255ad68065d6f55cd16129876f4af22febf95b1a5f6766dbe90883"
        ],
        "percentage-of-total-auction-stake": "0.000751541384341842",
        "stake-per-key": 4609479000000000000000000,
        "validator": "one1tmp0rda39a4fv0ajal0c2ahtf2pt3mz5vgsn59"
      },
      {
        "stake": 49900000000000000000000,
        "keys-at-auction": [
          "e429cbf74e8ab28ed295999d179ad79827c7febe0208a6145aa91bbb60b68a0b1907de4c38573352cafe00c8105b1116"
        ],
        "percentage-of-total-auction-stake": "0.000008135825128753",
        "stake-per-key": 49900000000000000000000,
        "validator": "one1675d7adqu9egn0ehd9fx4f6jmdjfynw3gkr48q"
      },
      {
        "stake": 12197033851392000000000000,
        "keys-at-auction": [
          "c9993defc6410169380b3708060308faef5a5e11e575b50dc2a0ca7b39e7fea916cce5c6536368f1aa22355970c13495"
        ],
        "percentage-of-total-auction-stake": "0.001988635962012073",
        "stake-per-key": 12197033851392000000000000,
        "validator": "one1zcntyvm3a8xl5umwwdhcn5k5wnqklaetp0gyug"
      },
      {
        "stake": 16440769900000000000000000,
        "keys-at-auction": [
          "516ed79377753aafeb17a06b219375ccb1a3fdbb6cf1659b055d5946f4432ec35deec920a11c83d8c5045f60fde81082"
        ],
        "percentage-of-total-auction-stake": "0.002680545669107438",
        "stake-per-key": 16440769900000000000000000,
        "validator": "one1vusgu2vytafhfczp7kqj6jvquvgx7nequ2zcjz"
      },
      {
        "stake": 11814877111100000000000000,
        "keys-at-auction": [
          "c8a405b15961bb09a1829cd6d71a1feb983b24175e24e5a7b32587cfdbc7ad7c77ff78f953a9ad8523234c44d6077588"
        ],
        "percentage-of-total-auction-stake": "0.001926328138148549",
        "stake-per-key": 11814877111100000000000000,
        "validator": "one1536umpe5vvqdl3gp2lugukvk78rrn3jmmld9x7"
      },
      {
        "stake": 2549999000000000000000000,
        "keys-at-auction": [
          "57a5f880a581b0030f43e87b19d32f016da51d749887fab5ec918e2c5a063c9d3243e56595ca3864c3ff718c842c2a98"
        ],
        "percentage-of-total-auction-stake": "0.000415758435721328",
        "stake-per-key": 2549999000000000000000000,
        "validator": "one1h83nwlj5ktaavq423rxhrdyuy77lyjtg46zg68"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "962cadab63636e77c3f64fdf6f1019e28a890298b1fd299f33ac904d0412ff3044250e4006d2cebb0ff9da09e2f04701"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one10pk5pmg3tnxhwm5gpv95nqmzju4p44rqjlnk9a"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "7bb4a3c51724b942d680e760140e3c49e7c89e374454ec03d37eb7c67931f1fbe9222a0b377d7ab1075b7796b488d506"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1jh98u0eedumatzh2tmt0ydc43tpzxdu9m328m9"
      },
      {
        "stake": 47026109568739000000000000,
        "keys-at-auction": [
          "2eb44f4d5cfed5190b2935b6bbfa0b17b78c1aa1e236bc3795db3640a15249e062291aa0bbce9e4ea1002bbe3cb61500"
        ],
        "percentage-of-total-auction-stake": "0.007667258595928356",
        "stake-per-key": 47026109568739000000000000,
        "validator": "one1d02tffmrxp6m392uxayxlpyaekdl6k5znnr7tw"
      },
      {
        "stake": 11076617000000000000000000,
        "keys-at-auction": [
          "db913f9c7d7dc3c32b4fe84632f99e203ce91bedf72eb7bf2527df3ab81e8f223a39a514ae05362c31e56bb4f5028785"
        ],
        "percentage-of-total-auction-stake": "0.001805960299201792",
        "stake-per-key": 11076617000000000000000000,
        "validator": "one14yk0psfzn8tv2wrgw93huyllrq8te9s44d97zd"
      },
      {
        "stake": 4791870998925000000000000,
        "keys-at-auction": [
          "fdd56e007ee3c4add8c737424387445423f5574da2961e5eec51c89c82f40a5b360f7e3883b40bf012c84ef4a2b7648f"
        ],
        "percentage-of-total-auction-stake": "0.000781279047831570",
        "stake-per-key": 4791870998925000000000000,
        "validator": "one15nr9mha7fz5w2kx2dd7rfnpyd2j68h5dsexrt9"
      },
      {
        "stake": 300049000000000000000000,
        "keys-at-auction": [
          "7c2e12fa9c5bf0e3480332ad4d07f2ee6fe78dd6b67022e104f0620e510e51ae77d768e782f48b04f839f9a3c0ec4a91"
        ],
        "percentage-of-total-auction-stake": "0.000048920765411966",
        "stake-per-key": 300049000000000000000000,
        "validator": "one17knkg356pfkpqa8uk7qgmwe3p5uv8lyzz6yrnj"
      },
      {
        "stake": 4199999000000000000000000,
        "keys-at-auction": [
          "c80ded184edb79de84f0e9f236c8abec76ce49494baf727fa888ef24768a206066a73ee8edf5b79145205e2076ff1f08"
        ],
        "percentage-of-total-auction-stake": "0.000684778705509744",
        "stake-per-key": 4199999000000000000000000,
        "validator": "one1gd0d2vdtuygksd0n9nxxrn0xthxl584ls6q0ra"
      },
      {
        "stake": 10100000000000000000000,
        "keys-at-auction": [
          "2c318c5967c5697d135d705b69b0843edfe15cd72239b8a154b3e950c43b1ba90e0e7e7260e281b1e2bfbb051f785281"
        ],
        "percentage-of-total-auction-stake": "0.000001646730136281",
        "stake-per-key": 10100000000000000000000,
        "validator": "one162rs6d2gzs34tg58nathmlcpdxtfsrgleyfe6e"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "6de3e03b114f853cfd6aa01d7ecfae241b5e68af05688a376a0814397d72d052c56ddb299ae4a376c7e067700e8ed393"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1w0wq5jvdgnwappudspkf7xwkwzatykudhlyw2l"
      },
      {
        "stake": 10907267000000000000000000,
        "keys-at-auction": [
          "4f328a1326eaf8445eb588a86679ac4907d45e710e07dfff67fb36dd33e3f0023434c39248d249559fdd15466ac8938b"
        ],
        "percentage-of-total-auction-stake": "0.001778349036966236",
        "stake-per-key": 10907267000000000000000000,
        "validator": "one1ffw8maa9ff4ahjp3j6uy7qd2j4y8q2x8xrdk85"
      },
      {
        "stake": 10393987100606000000000000,
        "keys-at-auction": [
          "24b8ea2a66cde6a6e405426117c556f133131cb628fb0a4938a59f52fa69181cb58674de1f3064c76b8883d66eb83f13"
        ],
        "percentage-of-total-auction-stake": "0.001694662553928693",
        "stake-per-key": 10393987100606000000000000,
        "validator": "one1pul5cd3hewakyfcewdn2m2xhuk7w0ese9u733s"
      },
      {
        "stake": 14019899131960800000000000,
        "keys-at-auction": [
          "7b2fa986cc6261cabb001c3f1a52ed55af814c7a44f08b01165d23c6bc75bc950beeca2da490c8262843269605b90b97"
        ],
        "percentage-of-total-auction-stake": "0.002285840634476653",
        "stake-per-key": 14019899131960800000000000,
        "validator": "one1l9gddgsctsvv73ayuzns8czwdgxgy6ytv00j4j"
      },
      {
        "stake": 8826825406052600000000000,
        "keys-at-auction": [
          "420a7db834d090761b099a80cb2061220e06eb6ebca2962e00d1e1e0e66de64ed01a80d8673164f3736de2fb1416b493"
        ],
        "percentage-of-total-auction-stake": "0.001439148455825162",
        "stake-per-key": 8826825406052600000000000,
        "validator": "one1ma0aqp3evkn802s7eqw2qtpppvsxpfnw8mpuc8"
      },
      {
        "stake": 19359629444774000000000000,
        "keys-at-auction": [
          "477607bcaddd8f43378515e39917e9786ae5414769c811ab6bcdf1ac2a0e3dea313a3d88673468c2aa0600c7cb0d1b92"
        ],
        "percentage-of-total-auction-stake": "0.003156444082567799",
        "stake-per-key": 19359629444774000000000000,
        "validator": "one1dkyjjf8s94nvml9rvksexlt4a78lu9u63ul8lf"
      },
      {
        "stake": 10785192000000000000000000,
        "keys-at-auction": [
          "81891c77159f2880152e3ce5b978398782697eb16b0c656e35e3660f0185fe84fff28cf687e684f2f87873167a58f618"
        ],
        "percentage-of-total-auction-stake": "0.001758445613066587",
        "stake-per-key": 10785192000000000000000000,
        "validator": "one1dzjvumwsmflf89m5r0w579lhn6p40xc487ry04"
      },
      {
        "stake": 76688604094752000000000000,
        "keys-at-auction": [
          "2f4b3a50a9996ca5fddb383ee01cbfe4824e2bcca4fe0dc1b8d2328203fb39d7cd04015bd9b97f70c15d4e9781d58593",
          "c58d8a8b3396b7f7ab6e6e7311a182a9d3a411cdc08e7eae35b9ecd46501a729d0d601afab024bd7dd5223ae098bfe97"
        ],
        "percentage-of-total-auction-stake": "0.012503508462586196",
        "stake-per-key": 38344302047376000000000000,
        "validator": "one1s5jcy0alpduv4ng4pz7u6yzxajk8usvxphkp3u"
      },
      {
        "stake": 11561699999999000000000000,
        "keys-at-auction": [
          "68c6e7ef3d891a155c9ca41d041addd012eee40571bbde3e2f719b06e2abefd4115195ac6100b39b57263e9a7b507588"
        ],
        "percentage-of-total-auction-stake": "0.001885049486795432",
        "stake-per-key": 11561699999999000000000000,
        "validator": "one1gxezhtvlt7yt2rj6jqegtlkvqgzs5jyfzx7qlh"
      },
      {
        "stake": 10449921523501000000000000,
        "keys-at-auction": [
          "4fceb39b832522462839dd3bd805e8784705a77d73ad4191f2d6bd7f44803796d7060007008078b0ab3fd6f806a0d014"
        ],
        "percentage-of-total-auction-stake": "0.001703782246981828",
        "stake-per-key": 10449921523501000000000000,
        "validator": "one1rg25sq00gqzu38vhm4z4j7ty5j9mpq72et9zv5"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "134a93585a5b04df0e9b8d128fe9ceafcd15441810a090993d64584ef1e5a3acadb82816462c88afe34ace4a23dbc60d"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1f0cu6naycd7hs0yxr8zxa6c8yne093u3gwkutw"
      },
      {
        "stake": 11686445000000000000000000,
        "keys-at-auction": [
          "7a889a816230d7cd4db499ab1eed84e2ae5c115f5cd8a89e48831f29bade2b805f255b836ddb7bdaf02c6299b5ff3188"
        ],
        "percentage-of-total-auction-stake": "0.001905388234404538",
        "stake-per-key": 11686445000000000000000000,
        "validator": "one1zjlwqjty6kzefgt8lqgmsx4zzsafzdqxlejsvg"
      },
      {
        "stake": 10006232000000000000000000,
        "keys-at-auction": [
          "9ace5f7b7226095aef39e6abe29cf09f21a7e834c6b82e76b1a3401dc2319e9a3e53ce2931dfcfc8b303e0c442943f8a"
        ],
        "percentage-of-total-auction-stake": "0.001631441958912414",
        "stake-per-key": 10006232000000000000000000,
        "validator": "one19et0hagya58q9kc4ama7npp5ldtpydxpxg3528"
      },
      {
        "stake": 11791567000000000000000000,
        "keys-at-auction": [
          "4a349cca1e4f67db7a9a188642286c17439d30b76f60d389adc74bec7ffdef49744fccc99d1861a7c6a0294f392c5b09"
        ],
        "percentage-of-total-auction-stake": "0.001922527597314052",
        "stake-per-key": 11791567000000000000000000,
        "validator": "one12eq6zag7tjsgm6s68ms9es4xd97eyjgkmf7et0"
      },
      {
        "stake": 16352137000000000000000000,
        "keys-at-auction": [
          "bc43e8a52a584d12ae9a1571effc42d269b633d38a0ce2eb5b73032db9919ba02a07a2124b55bc63ebe87271bd67e184"
        ],
        "percentage-of-total-auction-stake": "0.002666094731731602",
        "stake-per-key": 16352137000000000000000000,
        "validator": "one1z3jh7jh6wy8aptw7qeyx9l2w4xer5wg6t9tgtu"
      },
      {
        "stake": 14999999415000000000000000,
        "keys-at-auction": [
          "d24b31a4fd2791ebb3e83c8afc84b5011fb95c66a6aa241a3826048ed0e2fd6356c461ce3b50df3354afbdd3b26f0d90"
        ],
        "percentage-of-total-auction-stake": "0.002445638720878415",
        "stake-per-key": 14999999415000000000000000,
        "validator": "one1hzck9h2lrhqnc5zcaf08ka4cx02z4yaucfy6hk"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "9a2db6dbd166a0027fd629d6ece3b80ace549e7f8871379c81924e7a56a666b2bfb7d9b99c315fdf02830be9ba8adc81"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1sflhvu404tvkryce5kxx2e9qzgfdsjgaf3203u"
      },
      {
        "stake": 2009004000000000000000000,
        "keys-at-auction": [
          "c645b85b3cf25a46968de0930b2d2093b93483162f64acafc4d3a61b84b93b5deba1104e4e6b7b5c22b384880a200705"
        ],
        "percentage-of-total-auction-stake": "0.000327553210961217",
        "stake-per-key": 2009004000000000000000000,
        "validator": "one1hcwr3560qnwyxylg57cnfavjngevrjc4aaqu0l"
      },
      {
        "stake": 10596162000000000000000000,
        "keys-at-auction": [
          "6435387ff7654d16d6eb77029c18157a2056cb15bb9391ab7926bdb955b64e7a472228ad60d5e6889c2883b15837a915"
        ],
        "percentage-of-total-auction-stake": "0.001727625672704099",
        "stake-per-key": 10596162000000000000000000,
        "validator": "one1080c4h7uev7u68s330vnxsfw7h6t86ufer8923"
      },
      {
        "stake": 13268088434632000000000000,
        "keys-at-auction": [
          "cbfa86225cfa21641ce914bf3d4ef8e6e736830589530f79eed434f8bebb939c18a695cf7f007ad5d367c4491ad49a08"
        ],
        "percentage-of-total-auction-stake": "0.002163263472885616",
        "stake-per-key": 13268088434632000000000000,
        "validator": "one1fllr7w9m3vwxv5evwvnaflk2qy0uauyarvl7hh"
      },
      {
        "stake": 12011830000000000000000000,
        "keys-at-auction": [
          "850b0487a61a00362f35129ff9883c54b9ab9e1a8088fa5b446c3680f44ad608cd17d6de700fc79312ede3a95b32dc8b"
        ],
        "percentage-of-total-auction-stake": "0.001958439846819753",
        "stake-per-key": 12011830000000000000000000,
        "validator": "one1ywrd5hrwf54dt7p6j3xjcas69xjeflxy2ejvv4"
      },
      {
        "stake": 26921511573999000000000000,
        "keys-at-auction": [
          "eac7fa740a4ff3d51ecd9e268404312c80bb0f7b72172d89c73c50be2e00b0d711405fefe34622b2f78d72865c35dc05"
        ],
        "percentage-of-total-auction-stake": "0.004389352913181322",
        "stake-per-key": 26921511573999000000000000,
        "validator": "one19lj3xq29rvhwepwg0zk4j3nl46wp9df9wpmpk7"
      },
      {
        "stake": 9919590000000000000000000,
        "keys-at-auction": [
          "11e234fff630d4d86f8b2fb2597a7b307ef81962224421874b34a8089ad90d49e83d02e28c3a4f5430fe7be6a3138187"
        ],
        "percentage-of-total-auction-stake": "0.001617315623024531",
        "stake-per-key": 9919590000000000000000000,
        "validator": "one14pkx9aqrpeygamrtxegx8hm4jwvf904422f000"
      },
      {
        "stake": 10653999000000000000000000,
        "keys-at-auction": [
          "f97888cfd9c3be5b469bb7c2a8cd5f94f547e343610e89db418083c7ec2e9a22ad2598884a0737e62faf1f2539a15504"
        ],
        "percentage-of-total-auction-stake": "0.001737055566851828",
        "stake-per-key": 10653999000000000000000000,
        "validator": "one1xnzpe9aqgm7aqd9f4sgzm5ycqgmw7uga43f2gd"
      },
      {
        "stake": 13000000000000000000000000,
        "keys-at-auction": [
          "73885355d436261e22de0529e198f0ff2f1d740926893a4a0d43478d6a21fd73f828013e85e93e20fcb69852affe990a"
        ],
        "percentage-of-total-auction-stake": "0.002119553640757219",
        "stake-per-key": 13000000000000000000000000,
        "validator": "one1hxqssk08xz96du0etpy727zxejqgs0yj0tjde7"
      },
      {
        "stake": 12571900000000000000000000,
        "keys-at-auction": [
          "3c77583eb6e18b74f739a8ddd0406afd06475e601a74611fd726249344cfb9c59264605060f6c530ce847048b099be0a",
          "f0de93bf5daa8b0cdc22d6940c9cbe684c89e05def5a18296e954f8b94f862f86cf04cde96fbf3ca4b7be8dc0d67ff13"
        ],
        "percentage-of-total-auction-stake": "0.002049755108941206",
        "stake-per-key": 6285950000000000000000000,
        "validator": "one12s2t8sexugpk9emwkuh37ncrensha47ec689jh"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "cf4268c647c71e31ffdb5cfba58b1ce7015e807ccc0c70ba5ba99a1756b4b33843f9ad7e4237026a36f29f4017800901"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1y0l3crfuhmf48yh8ynhd7ndmr7lhj5t0360cxp"
      },
      {
        "stake": 18659188142549400000000000,
        "keys-at-auction": [
          "0501e4924bb1200a5cf4334c9a5476cf6b0e4b8930671d240284844c9c96ccddb57b4b9cce6db94dde1c606dcf044181"
        ],
        "percentage-of-total-auction-stake": "0.003042242320085731",
        "stake-per-key": 18659188142549400000000000,
        "validator": "one1jg8yescd779juu89rcg9cjcwedsu9ptacdyqrl"
      },
      {
        "stake": 2000999000000000000000000,
        "keys-at-auction": [
          "a07ac593d3964d8158aa41e8f1d338dcc49bacf76a238a8b8862eb1823d7353265172f373d35dc858bda13094fb3b386"
        ],
        "percentage-of-total-auction-stake": "0.000326248055046273",
        "stake-per-key": 2000999000000000000000000,
        "validator": "one1twj0krxc0a78zkuv2k7uc7zklwpfh5azkk6wv9"
      },
      {
        "stake": 10471877000000000000000000,
        "keys-at-auction": [
          "5155e59612c78a878f5c3e62f060bd12d16e42102129db81f39ba32fc4b4d0ba78b5623636b1da498961fdcf9c03370a"
        ],
        "percentage-of-total-auction-stake": "0.001707361924685522",
        "stake-per-key": 10471877000000000000000000,
        "validator": "one1ym5k67rqeuchrsgy2eztwhkkt3r5kkp3ed2w6n"
      },
      {
        "stake": 12833188999999000000000000,
        "keys-at-auction": [
          "d7dc5b3e803dff45b1ffa22ff9268dc25991afc3ddedd3b5aa7a7c10810fddd30ceaf7fafe0b24befa6aed398d8e6706"
        ],
        "percentage-of-total-auction-stake": "0.002092356343651798",
        "stake-per-key": 12833188999999000000000000,
        "validator": "one1h3ugwlrl825dchuaw7nrdtjqazl5yr7r3nv93s"
      },
      {
        "stake": 21013333851777000000000000,
        "keys-at-auction": [
          "04dd842a98503c32b7008a65ce3bee3923d9dde459566d1c415bee6ea179fc836275bad656fa65aae7ce04d5ef649981"
        ],
        "percentage-of-total-auction-stake": "0.003426068328460065",
        "stake-per-key": 21013333851777000000000000,
        "validator": "one1lxzmu83x2lrekvutjjsdk06539mx45e8n8y5pn"
      },
      {
        "stake": 22179024153314000000000000,
        "keys-at-auction": [
          "f8ce1446daba5d62121c05eb87395b974996ca09a08b7c10ebe0ac5baf1c6c419b14d16badc2886d8789803230d7400b"
        ],
        "percentage-of-total-auction-stake": "0.003616125491738383",
        "stake-per-key": 22179024153314000000000000,
        "validator": "one1j3nn4wdfpju0d6zynx9cesjqmzrfwru0fwrmdu"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "1948669a27b3500d2fd12b64ee2edf0f0e839d137cb58706c18bd90e9fb2f4dc0e9154f67696e5bf34fb8ef16fdbbd13"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one10xkhggcc6qyldh4jxpc89pzl2pux7tmpvfe0ay"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "f44fc644eb5f2422ee4b12dd06c5feb729051070bb8d8c78d6ea1c1b764972dc16329c39c251d4b1b80eb5ee22053f93"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one13qnewlw4znat8gmyga495qanlquf3v5ngpsg89"
      },
      {
        "stake": 17695121928702000000000000,
        "keys-at-auction": [
          "51dcd37346474c3ac0a33f23a3fc1791d40ad1ea718dc4351a8d735a38c7591adae5093d6dba0231645b877abd9b0a16"
        ],
        "percentage-of-total-auction-stake": "0.002885058469817171",
        "stake-per-key": 17695121928702000000000000,
        "validator": "one15a45k4a76lhsj7z9p242ey33f2g9x6k3uhdhd6"
      },
      {
        "stake": 69527485554000000000000,
        "keys-at-auction": [
          "dae69d8ab3fcfa9a84dee91109f15235f5d1a1f8c856d2ba4b3e432cde43d8fe052a9a81708ec524aa462482db713707"
        ],
        "percentage-of-total-auction-stake": "0.000011335941164514",
        "stake-per-key": 69527485554000000000000,
        "validator": "one1hqxr7qfc8efpg3nrg4nudk9prx98xa3p927dt2"
      },
      {
        "stake": 13611518047196000000000000,
        "keys-at-auction": [
          "33f2b540ead4c53b1d998539e6364558cb0aea657234c6dc6d04f07decda418488fa90116dbfbdd8950ece48ca278b17"
        ],
        "percentage-of-total-auction-stake": "0.002219257125628221",
        "stake-per-key": 13611518047196000000000000,
        "validator": "one1yryvqzef37wyn4z8fsmux38t6mgaqyk5hvlqj5"
      },
      {
        "stake": 9952777000000000000000000,
        "keys-at-auction": [
          "70099d329cbdacfed3ffd7b4717386490e4dccdc9016bffe8bae5c469973a06e1c5c9fa900d09185f18f1e4f25ccb293"
        ],
        "percentage-of-total-auction-stake": "0.001622726517384208",
        "stake-per-key": 9952777000000000000000000,
        "validator": "one12lggt2syf9u6zy40kx5x74upwe9s766tmn8av7"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "c4794f96f3b26dce700e074caf67d4b1189bf7d8ed8d98ea29aa942aa3b180af8f8e733789ae394235bdfe6d8e553293"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1pdjdqdfmxh6vpwz8mv0vcaayph42p0xdltgsf6"
      },
      {
        "stake": 10379090379447400000000000,
        "keys-at-auction": [
          "d0356c9cf2a8a737167219729f35d7e8486ad104e839b62ca051e72e45ea49cf54041cfdf21ac7244d4de0890c76f40c"
        ],
        "percentage-of-total-auction-stake": "0.001692233753961997",
        "stake-per-key": 10379090379447400000000000,
        "validator": "one1a8avzz3hcvhfrh2tp7rdprpvwt838y9um9c2q7"
      },
      {
        "stake": 13492467827793000000000000,
        "keys-at-auction": [
          "8c5d7d0ee1c4b24584880c908ac5c31eae07d6c5a5fe1dfc5778b34342237dcfc76716c060901d7e8d208396e4236786"
        ],
        "percentage-of-total-auction-stake": "0.002199846869784484",
        "stake-per-key": 13492467827793000000000000,
        "validator": "one1rx9qnp855d6atv36gkxwn9evt0j4amzp0fvck5"
      },
      {
        "stake": 2652369500000000000000000,
        "keys-at-auction": [
          "ae7812a39813a2f166bfbebf70d6621218019a53df2183433910fca67a0aae4fe414e0985ed2a9fb7160b3b9432edb02"
        ],
        "percentage-of-total-auction-stake": "0.000432449186950646",
        "stake-per-key": 2652369500000000000000000,
        "validator": "one1k8e77d76c9zyr6dnyaru08kf7ujrfarzesxkng"
      },
      {
        "stake": 15644441930663500000000000,
        "keys-at-auction": [
          "58f36f139ce7d0d06b304fc75ab3fbb24fa57c40b0d8db47adb77aa5d23ffded9330afaf22a3564f6a0abd17e1bf9d88"
        ],
        "percentage-of-total-auction-stake": "0.002550710296288670",
        "stake-per-key": 15644441930663500000000000,
        "validator": "one1q98lxvxcxl228y4dt6xqjrzkha206usucfx02r"
      },
      {
        "stake": 10093117000000000000000000,
        "keys-at-auction": [
          "78fa7956131032aea66a9485479f3cfd03248bc78d8883a9a02efb647eb5a6f1386588548eba06d4014ccda22309b087"
        ],
        "percentage-of-total-auction-stake": "0.001645607914149121",
        "stake-per-key": 10093117000000000000000000,
        "validator": "one14k260sxkghzm7k8lnj46lvvk45fdcw667h39mp"
      },
      {
        "stake": 99895762545293624198796066,
        "keys-at-auction": [
          "415afe0102e4b3a1162eae6f6ba430b3f57fc3ce3d460ae35205ec3446eb4b3b2d23393a7a934d1e6163f6a63415e597"
        ],
        "percentage-of-total-auction-stake": "0.016287263630699670",
        "stake-per-key": 99895762545293624198796066,
        "validator": "one1yl4kcfqn6e58srfzf29uhss3u7arrmvtxy8tuf"
      },
      {
        "stake": 9688971900000000000000000,
        "keys-at-auction": [
          "365cfdec86227f8fab1bdc9d5bbcb91a4396f462ec2bc638701e1a0a9c46705b67d4540408fcb33aeaec2ea3b2247195"
        ],
        "percentage-of-total-auction-stake": "0.001579715051218414",
        "stake-per-key": 9688971900000000000000000,
        "validator": "one148gj6aajacau3j0sgpafa3e6grxngy3gjfhw40"
      },
      {
        "stake": 11765003234999000000000000,
        "keys-at-auction": [
          "d5cf9cb52b9afb4f97997cb4830ec83e8471206d773d090ac2423bedb2175756ac315f32832822db9cbf74dff93ff10f"
        ],
        "percentage-of-total-auction-stake": "0.001918196572327891",
        "stake-per-key": 11765003234999000000000000,
        "validator": "one1twuxldpnwcafdu025jd7aa5r7we4j29ndtafuk"
      },
      {
        "stake": 999999000000000000000000,
        "keys-at-auction": [
          "800a3e9b73efe8b6895179c40275a40d0251e8e78158ef0f2dc16b0e43a87c16a6a70c58485c146fb2be863d73da4a0c"
        ],
        "percentage-of-total-auction-stake": "0.000163042424707968",
        "stake-per-key": 999999000000000000000000,
        "validator": "one1hkwxmmunpcu35s5n5hqwdkz8dxkl0e8n50vgun"
      },
      {
        "stake": 9355258362237400000000000,
        "keys-at-auction": [
          "b59da657b3f0acb84214bdafb4a493c37659a2dc4a2d43aa3316c31b763297608d3b1b37adcd326a5cc5a1a845e46b0b"
        ],
        "percentage-of-total-auction-stake": "0.001525305532454207",
        "stake-per-key": 9355258362237400000000000,
        "validator": "one1xpezw8k5e76t0jntvlgtug0t9wdzletvnl7r9f"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "e8fd99151c2031ab3622cb0822bb81001e22ce2e409c0ea88d2aa13744f930a21c56fbc6a2d40a73cb87ab144d718307"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1chhgvdmc99casc2g7lnphxfztv76hyz78y7sx5"
      },
      {
        "stake": 11571877000000000000000000,
        "keys-at-auction": [
          "7b57317d3b209b58bceccf54237ed72b03471fc24e2604468ea6afb9edea720869f311863f8fab4984c161f457e8c206"
        ],
        "percentage-of-total-auction-stake": "0.001886708771211132",
        "stake-per-key": 11571877000000000000000000,
        "validator": "one19a5t994apfnv68yqxmdnx8jf8qdy0pqzwdl96k"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "89831aae4ef915f733a352d46629c9e87817e40960b8850906ff8f2871ef177d416ff4f890572e47b34eb37cbd3d7999"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1xf6nar7rzg3hz4cm80xcux9wvh40kwxvklfzkt"
      },
      {
        "stake": 11455628324559000000000000,
        "keys-at-auction": [
          "51d79e77275847d3d22c37172a86eb5810367caf35cff5b26d7ed56db0e4a92a12b13c347e4353a79a1111f8649eb887"
        ],
        "percentage-of-total-auction-stake": "0.001867755286344657",
        "stake-per-key": 11455628324559000000000000,
        "validator": "one1t7p6nre40hq7z97anrf5cqug3n3776tn3as5ds"
      },
      {
        "stake": 15514334647999396829228846,
        "keys-at-auction": [
          "63efb4491b04f94d63944e0541c8d0c2afb3edd22c7f32c5c90698cfc4b2fc974145ee68cae14d12ec9c5373fc423d8c"
        ],
        "percentage-of-total-auction-stake": "0.002529497268237922",
        "stake-per-key": 15514334647999396829228846,
        "validator": "one1njyvqvw3jq2klrl77udzuj4xlh8tslgj434urs"
      },
      {
        "stake": 2001199000000000000000000,
        "keys-at-auction": [
          "651aaf1726da13f80f467a6859c933d905413f54e2bc015f9ba3aecfea04ea23a2945cab7c7ccdcbcc26265a92aed213"
        ],
        "percentage-of-total-auction-stake": "0.000326280663563823",
        "stake-per-key": 2001199000000000000000000,
        "validator": "one12j7afgp5fdd77h2epc9r0qyrw83rg7qgfpjgjc"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "f2a2b0ebf12acf37b97e6546dabb5d84adf705ecd8f11e29d6d5d118fee8284e87910d526b88ff15307bb37ed68aa196"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1strph7xz44rkl6q555y6u37lu73g4x6eut29qn"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "445feaee7eb4b4ac671fa20d5faeed0da0ac149d8a73032e30f5fa5d6cc49e187c52c64c922c552fd2be3f80d4cfda10"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1usymykqqqnlq67nl9etk4pw2th2g0ndnreykjt"
      },
      {
        "stake": 12778589364939000000000000,
        "keys-at-auction": [
          "3d37406a97787c13abf762398387f71ac8bd8d7dacb8c3412e442d85c8b6e49ebbe1469dc079713897545dc03864f897"
        ],
        "percentage-of-total-auction-stake": "0.002083454277861379",
        "stake-per-key": 12778589364939000000000000,
        "validator": "one1pgna2zyqmwr4u9qwwfvpce40v3z6amylzhxe0s"
      },
      {
        "stake": 34337820569606000000000000,
        "keys-at-auction": [
          "9e4263a599be82dc0c61e6c117af02b1f4b46e5fe6f654a8b325586d11cca7a44fdd3f1c2c4004c02e04bd7f46183d04"
        ],
        "percentage-of-total-auction-stake": "0.005598527123382809",
        "stake-per-key": 34337820569606000000000000,
        "validator": "one1gx48chqc44kuacely55jm0glcwkqvsy7k2jj3s"
      },
      {
        "stake": 11249999000000000000000000,
        "keys-at-auction": [
          "20026c7ecc0c7b2bb5fd217d3a16cae4dff30b8c610d476da1a41f467db43f4d3fff706a6ebef4983564c67fc164f80a"
        ],
        "percentage-of-total-auction-stake": "0.001834228949151159",
        "stake-per-key": 11249999000000000000000000,
        "validator": "one1wxlm29z9u08udhwuulgssnnh902vh9wfnt5tyh"
      },
      {
        "stake": 11000000000000000000000,
        "keys-at-auction": [
          "63e0d3bc39629d268ca5182e021f07d3a6d79aa517133153f1089770f7e8143087aec3de55544f2e8b25759398f65001"
        ],
        "percentage-of-total-auction-stake": "0.000001793468465256",
        "stake-per-key": 11000000000000000000000,
        "validator": "one1z2mk04tjw0ttascmvznu9pq7zpuz9e3l0qxssp"
      },
      {
        "stake": 12397837000000000000000000,
        "keys-at-auction": [
          "2f9d9b9b9d906b22a3ee0071d9a0762dcf4cdad9103ab3c1c7a637386c04a7209cb1faa1e74334a0e1280c3d0ec91183"
        ],
        "percentage-of-total-auction-stake": "0.002021375426989581",
        "stake-per-key": 12397837000000000000000000,
        "validator": "one1q3z4tgr42ylegju6tcvxmg30n234d347kuh8n0"
      },
      {
        "stake": 11707617000000000000000000,
        "keys-at-auction": [
          "bcc8e0cfd8c5a9b93d7596be630d320493830d8c381ed357fdaa54e554a945ca562e4980be13adb9b5c3570173542a8b"
        ],
        "percentage-of-total-auction-stake": "0.001908840172072393",
        "stake-per-key": 11707617000000000000000000,
        "validator": "one17s02lunsym6neywxrf7c76f2k489kxg4v77e5j"
      },
      {
        "stake": 16666665999999000000000000,
        "keys-at-auction": [
          "294a0bc5af28548abaf809a8f6d9e18c8e01215333d3e760a296e4463bb8030e46c99e4e679840e4e6dc452cb0b31196"
        ],
        "percentage-of-total-auction-stake": "0.002717376353814033",
        "stake-per-key": 16666665999999000000000000,
        "validator": "one1dgccuj65y4ujn6lsvyx0zndmnskyrwatn6j02v"
      },
      {
        "stake": 9524356054649000000000000,
        "keys-at-auction": [
          "02e60595c0ae5a1766c5ac23b02f6220b237fd4e0f81144dc368a7681cdf56813017c8b1723122efad5bcfa9a78cc68e"
        ],
        "percentage-of-total-auction-stake": "0.001552875657807642",
        "stake-per-key": 9524356054649000000000000,
        "validator": "one1ma4dd2kqk4lvf8e9ddgl76gcdun3t9gydjdjwt"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "9c6dbc793297467d4fce5b07f7f5661410586ea2839f888d88a406dfd6104c0a6820863c0290a26b3d48e4066d60e28a"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one136f6ry9akqj8kj3zlgx38zy8f433h346dnxgxy"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "3527463dfc58e122db52ccb7e72a4fb4cc8006f6eb0cabac00846d56f594f8762360561b17daa4c1f27caa58304b2480"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1pjrlf97t4luadrhpskqeejdv29xk6gt2u66sxy"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "9993736d688f85533a277fbda150cd632cb9c1ffcadd3846f2ceeb4265774a6e44775068e7a4f3acc78dc41509ecfd97"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1vx3xzr3frltweh4u4nmtdwaxxrzv0eylepc2v7"
      },
      {
        "stake": 13863253405036000000000000,
        "keys-at-auction": [
          "a9199bc02cdc1a6c268959f89d7aa5c0abcad899a8b98bc50cd1824bed0668ff34c53344e9be0f39b92df2f6eff26e0e"
        ],
        "percentage-of-total-auction-stake": "0.002260300709798766",
        "stake-per-key": 13863253405036000000000000,
        "validator": "one17j706lucfndyf5celgpwru45cf0qn2yyqgsf6q"
      },
      {
        "stake": 22340355779391000000000000,
        "keys-at-auction": [
          "02760cadc6ef3d3c1f8b66adbe182ebc252b451178efc168e856870311c8a7005c7060d28ea72c6c7adfab606989f413"
        ],
        "percentage-of-total-auction-stake": "0.003642429417539982",
        "stake-per-key": 22340355779391000000000000,
        "validator": "one1syx0rmtttr8jehlxvnkpyx4hvrlevmcx3tcghy"
      },
      {
        "stake": 10672115074961200000000000,
        "keys-at-auction": [
          "2c0ba52118e3f3ad5130b189a2040a3f47b608ce698e4eefaef6acd97b0ba5aa8c2ff0d28189faf9c7f094ccca6e6c09"
        ],
        "percentage-of-total-auction-stake": "0.001740009258593385",
        "stake-per-key": 10672115074961200000000000,
        "validator": "one1qe9wp88t048y6r9hlzf42jqv6v8cfnk5enl94c"
      },
      {
        "stake": 15083875297925000000000000,
        "keys-at-auction": [
          "e3bfe63510fc86c638c1cea8fc553e1b9a35812f767c35f8c174d563b228f9d76955fa35c171741ae6e99e780235ac98"
        ],
        "percentage-of-total-auction-stake": "0.002459314061880370",
        "stake-per-key": 15083875297925000000000000,
        "validator": "one1gle0elf9ckg5j5v9qkn7xv2w2e7vhv38fe93fq"
      },
      {
        "stake": 2610947200000000000000000,
        "keys-at-auction": [
          "565942554ff78154983a407aab4529c051e0c54822f820e687cf0e16b52b480418dfda990cd4610a9807c98c00415e16"
        ],
        "percentage-of-total-auction-stake": "0.000425695587968067",
        "stake-per-key": 2610947200000000000000000,
        "validator": "one1sa0g9g22qjk4yxk95ymyrcg2aysh2yv97mtqqm"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "417a914ca4fb5e07f53988e0ae9c775cb2e063121a1d349c340e13996a089e28849ecac12bf7bf96c40bd1f2a4fd370c"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1unc4nv7dwjywdlnwezqy4944cxpcyjeruum8ee"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "c76be577fc2178f2142eaaaf28722349a064bb0b33fcb1e296ecff1f1693ab36167f95ccf98442f4b954fd824ab23012"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one10v9t6x552yht4kh6ncyk2yrhp852n45hhja3ul"
      },
      {
        "stake": 9993117994000000000000000,
        "keys-at-auction": [
          "f882f6c609eb79a351150874afd5d08a0dcb8a1b510ee5875b0dd51ffe5b569c9d9d733b870dd0a9408d7957bb207513"
        ],
        "percentage-of-total-auction-stake": "0.001629303817438398",
        "stake-per-key": 9993117994000000000000000,
        "validator": "one1y5n7p8a845v96xyx2gh75wn5eyhtw5002lah27"
      },
      {
        "stake": 9289717000000000000000000,
        "keys-at-auction": [
          "59045a780785e3d5cebc2532be7ebd1ee4f236594e8484bff36dd1d0c59b1f94c344507eede9c9ad0fd283a11c452515"
        ],
        "percentage-of-total-auction-stake": "0.001514619499150325",
        "stake-per-key": 9289717000000000000000000,
        "validator": "one1rd6wgcpcq8jn40md379ftlew8ukewu8ztl4n4x"
      },
      {
        "stake": 15166762121246200000000000,
        "keys-at-auction": [
          "5e5ccd77a8d7d630f52d9572d8d63694ccfd18e7013729294365df154493cf481b6aa5ae18ba21bba345bfaf1d641e10"
        ],
        "percentage-of-total-auction-stake": "0.002472828144045082",
        "stake-per-key": 15166762121246200000000000,
        "validator": "one1dcmp24uqgwszcvmm8n6r5dvhqhuukdj86pkg6n"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "9d776d9d14baf728c7d46320a96a1fd9744da1d8855b9bb73d6266b866df69bf904669ff35bd229bcddbd199b994cc93"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1mxae35nn3cn2kfrltc95ttav3vvmvrr4w7dxnr"
      },
      {
        "stake": 10020000000000000000000,
        "keys-at-auction": [
          "5dcf4e55a4b1dfe0a76fa9d64603640f6647daf0407f1612c47acce7b9961f88ba12b4f1c7075d08c4e531cfa943a185"
        ],
        "percentage-of-total-auction-stake": "0.000001633686729261",
        "stake-per-key": 10020000000000000000000,
        "validator": "one1xmr2xef8472y2p64trl338y0kewce9rvp34l34"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "5897edcb89b18289a09fb5907ac03f73b8715dbbb9236a7fc99f030134817837403a59a47c8fc641a6a4785cc4a45293"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one17x5g2npfdm4t54tmawvjfgqefzmsu5krkgv85t"
      },
      {
        "stake": 410999000000000000000000,
        "keys-at-auction": [
          "d511cd99ba4f855334b4be82988be7bb59301ab6896d8af5bc8bb4d3b7dce27a6dca42c8836a52f998ca0bea5b70b08c"
        ],
        "percentage-of-total-auction-stake": "0.000067010340522890",
        "stake-per-key": 410999000000000000000000,
        "validator": "one1j4946ygzl5mjx5k7uuglqkuf5mhyu8njwa5fuz"
      },
      {
        "stake": 12521085346537000000000000,
        "keys-at-auction": [
          "1b5e942f91a4c74f72223488820e5101c18d305a7a1bc1c50dea3557b68c05c983e8946bfc24cf198f2fc437053a9b14"
        ],
        "percentage-of-total-auction-stake": "0.002041470156344951",
        "stake-per-key": 12521085346537000000000000,
        "validator": "one1a8v9d2mcuzkv73zuc2c5ssht9sh5wjejx32mpg"
      },
      {
        "stake": 11700395000000000000000000,
        "keys-at-auction": [
          "3a1c468d71ab8986b74eaaffa48e28a9f94a95487ddb37418bb97ebfc1db93f2bdf0e3a555f1bd598629e9adecee3a86"
        ],
        "percentage-of-total-auction-stake": "0.001907662678503658",
        "stake-per-key": 11700395000000000000000000,
        "validator": "one1l4gjj04y99uwjsw2xpe9mv2t6ffyup0da29ltu"
      },
      {
        "stake": 11983622608540300000000000,
        "keys-at-auction": [
          "28d6bdcbc569b7d4275aed117ed83334ef5c11c0e27ec849628b5e55c80e34df8e6b88f41727ad4e03ca7e0e8342168c"
        ],
        "percentage-of-total-auction-stake": "0.001953840840722470",
        "stake-per-key": 11983622608540300000000000,
        "validator": "one1ux8hw7ue7gs8k0vgspgsnx5neqxp34heawragg"
      },
      {
        "stake": 9421204480545800000000000,
        "keys-at-auction": [
          "5df3a0f8666bb655371434054ce54cbaffce74f362a246b329970435099972aba9ee26a1c524d30cd379cb2795c7eb8a"
        ],
        "percentage-of-total-auction-stake": "0.001536057558235313",
        "stake-per-key": 9421204480545800000000000,
        "validator": "one14dx72ctzdfsxvsckjfwcqrl8uwdukddd877hqq"
      },
      {
        "stake": 15685080193576500000000000,
        "keys-at-auction": [
          "59b98b2f2ee7a192fc68c05c4af99028a4fbc8532ea56eacd47711fd193d55195826d1a247a054e41904a48b3176cd93"
        ],
        "percentage-of-total-auction-stake": "0.002557336063835693",
        "stake-per-key": 15685080193576500000000000,
        "validator": "one1fxtdau23qk0fl63e40g3h4nfwsj0k8uutx59qx"
      },
      {
        "stake": 9271877000000000000000000,
        "keys-at-auction": [
          "289df32bc0f08f35b539bf0f6bd434b8638868497a55c2c76a578dfe83539a784f2a7c650df61a90143bdbd7ac72dc95"
        ],
        "percentage-of-total-auction-stake": "0.001511710819384855",
        "stake-per-key": 9271877000000000000000000,
        "validator": "one1z9pa5m7xrng7y4drwkwaau9m8ey77mkx6tl96a"
      },
      {
        "stake": 3304739000000000000000000,
        "keys-at-auction": [
          "78a1270aad235ba49ea5de2971af8a9e77691666d8d4f89446bd9d9325a08f065a6739535b777ba557fd421e0721b199"
        ],
        "percentage-of-total-auction-stake": "0.000538813198400182",
        "stake-per-key": 3304739000000000000000000,
        "validator": "one1hh4h29f647nqyp66k8sm3qyjqznlcvq7qu2tw5"
      },
      {
        "stake": 11998536349999000000000000,
        "keys-at-auction": [
          "721fb6c6e35dae99dd6fa6e058376fb4e85d3879d29d5f46a07c9dbfe064cecb4852be7a0b914e626fc8e75e30253215"
        ],
        "percentage-of-total-auction-stake": "0.001956272415722939",
        "stake-per-key": 11998536349999000000000000,
        "validator": "one1cra2m6atas4wtda25vd37rvc7x0x8cwqnwrnxs"
      },
      {
        "stake": 9203573349999000000000000,
        "keys-at-auction": [
          "8305a3c41781663d2ba7509382925365400941409da98260f26d3132f91196fb8cdc423906663eef36334556652eb504"
        ],
        "percentage-of-total-auction-stake": "0.001500574415535884",
        "stake-per-key": 9203573349999000000000000,
        "validator": "one1leh5rmuclw5u68gw07d86kqxjd69zuny3h23c3"
      },
      {
        "stake": 100000000000000000000000000,
        "keys-at-auction": [
          "941a8b18993f238f84282fd2cfaeae92349f20c0c077f7e6ea1e239f5b7512c937a48656e0113aa93ed4f9b9dfa91d89"
        ],
        "percentage-of-total-auction-stake": "0.016304258775055529",
        "stake-per-key": 100000000000000000000000000,
        "validator": "one19e8qg44vd26u7pp7nyp7ewgr8nqewwz57kwd2u"
      },
      {
        "stake": 9754613000000000000000000,
        "keys-at-auction": [
          "74772987f4d907c7222687305f3d2f318abddc8d51f910bf5726c4e0dfe9e2e66cf985c416d8a03f98a3155c1f2cb310"
        ],
        "percentage-of-total-auction-stake": "0.001590417346025207",
        "stake-per-key": 9754613000000000000000000,
        "validator": "one1tcdagh2wwlcnw5c2dwenz9k0t9ckssyrwy6c37"
      },
      {
        "stake": 17559494094743000000000000,
        "keys-at-auction": [
          "d6915141cc262b09f2cea56ffec2d32cae724f7062e580d576dec9256d865a19bbb0bac13f5f9a63309ea9a38fad5708"
        ],
        "percentage-of-total-auction-stake": "0.002862945356797493",
        "stake-per-key": 17559494094743000000000000,
        "validator": "one13pe96vgege60pjhzuaw3fkw9veq032a4yupjvs"
      },
      {
        "stake": 19318525170903500000000000,
        "keys-at-auction": [
          "31ba4affb8331bce3dd89b50ad7461064f8ffa33d8d681d17911efa9c1dae98948beb62c91d678806830d951251aed12"
        ],
        "percentage-of-total-auction-stake": "0.003149742335388345",
        "stake-per-key": 19318525170903500000000000,
        "validator": "one1jw7nlk68v6u4nw6ssrzy2nvrea4dxg4tea8u5j"
      },
      {
        "stake": 10794199999999000000000000,
        "keys-at-auction": [
          "476efad0d6d8a5c90a71b08903be7574ca6689d4c8c1e489db1ce24a204f5c7b236e969a5029a9c2368bfa1c5db25484"
        ],
        "percentage-of-total-auction-stake": "0.001759914300696881",
        "stake-per-key": 10794199999999000000000000,
        "validator": "one1n9at5vm0wwkh2zj6ldtgp5aqe0tsnx7ymnglp6"
      },
      {
        "stake": 519999883765560100000000000,
        "keys-at-auction": [
          "356b0732524bdd3a2ac6f2a09aa29da9a71b73167f42c64e5ba2b3322d82f79ade31b56efe61782f25c354c1dec28f88",
          "62937063063c3c8390c86fd406b3155158fe8ecf1e82b0116e1e27cd8fb021c61c39469658d212cb89168ada8ab89a08",
          "778fedb1699a7741eae03dbdcbc376c983b1a23aa9da2548c1706442acc3431747a957cf7aee2ae0fa028bc0c83a1684",
          "dfca9b0bb41a358023b75136f51882e2b5396806f4287a0200f772c2b7b8a5981730fbc7558b086da8217969518d3498",
          "1f8ab84a6a98cb00399aa14938c0ca3ffbf3b83555c21559254e5a96047394cda67d2c97037a2ae1d44d6c32b3666002",
          "6302b0a03e573ffc8fd6a51ee48f0d1d66d9320a67d40f807469bc6677d678510c8d72fda9cbb170e06a22efe2dc890a",
          "804f4659bbd2c3615bb749bdd363395c6ffea3a3bb95364073295585477c17ccb9fdc4b0fb0dc7620a90c71fc4056012",
          "a0301ee493e3a78516929e7a89b6779e828962b8516a4dd41b1374e21a179f00fa6c3b75387c357138d5d1eca6c2d312",
          "00d69ce5ccd22318af8d0eaee58b04aadd6f55cd7c728b1a45b1620aa6044b22f29d809a17554d0fde4e6bcdefe49e97",
          "2fb1832b89450c8f6cf78ea4075aea489059f43a5b4cee418d8e30675238235ef6aab40219e7933bf827cbe14d18230b",
          "2864f5f1cd848f2c7302faf6bdfc7456984365226c3d53c7cd63cd1dd316fee75a7ae48560ba5658ab47497b952eea99",
          "2992b4fa2d94d3ba42a43c6cafc0436c6bc33aeff346014e637af676c16f1514c8daa7ab5edf7b431acda813332f4505",
          "9f68854a0d27f0af2bfc447cd0cc724857ee90b10fe668e8bbadbbd81a6051f593813f15533004a76c2a0ccb25306911",
          "d72a260c8325571aa5cda49b44d7f5fefe86b22a2d93bcd2dd3958a2ccc391f38babcf9a8a4571517df3307c65378091",
          "84ad0dc35bdb6ab51c70d7f65a38b1e5230fe451fa895938749c1732c109f6fac7e4107ae44961ef1280c96dedcc3e13",
          "db66379230ed5b875d7f71b98c922a43c1d2a93a65013badaa2cca1a35ace401d37cf81ee54db02be961593ca535b507"
        ],
        "percentage-of-total-auction-stake": "0.084782126679124882",
        "stake-per-key": 32499992735347506250000000,
        "validator": "one1u6c4wer2dkm767hmjeehnwu6tqqur62gx9vqsd"
      },
      {
        "stake": 3354136000000000000000000,
        "keys-at-auction": [
          "405be6c51b2acfb917be43dc8664893a83d3e6782dead8b7bd3d2eee24b453ae6827a4e558eb32d0f4fad4cdfd9a1593"
        ],
        "percentage-of-total-auction-stake": "0.000546867013107297",
        "stake-per-key": 3354136000000000000000000,
        "validator": "one1jy0a490u77phe6h9ms9gaeaupvcq9gpzq9cy9u"
      },
      {
        "stake": 12286761000000000000000000,
        "keys-at-auction": [
          "8f77c124107705daa9f07c547be2512571d98365af80a76ca692d2bfbd343170eb1c542fa69def1ff3fdf58925c24396"
        ],
        "percentage-of-total-auction-stake": "0.002003265308512600",
        "stake-per-key": 12286761000000000000000000,
        "validator": "one1dsy63tatz7avdrl24y5clramvgur9hsarglcdl"
      },
      {
        "stake": 11781877000000000000000000,
        "keys-at-auction": [
          "866da1ce28c6370f53b40c243d630044a1c24a5d8e9101525205e807710a7f242465ef020cb416f4f46bb1e9aab57b18"
        ],
        "percentage-of-total-auction-stake": "0.001920947714638749",
        "stake-per-key": 11781877000000000000000000,
        "validator": "one1sn4c3zjj9s83ezfplc72sgvelalwp45yxltzv8"
      },
      {
        "stake": 11386285000000000000000000,
        "keys-at-auction": [
          "24e75a6611e25fe4d1abe5495ee80ac88351010756912993b5f327ff762b342c862df28eb083205afa0f4b672c56ce94"
        ],
        "percentage-of-total-auction-stake": "0.001856449371265331",
        "stake-per-key": 11386285000000000000000000,
        "validator": "one1uehsyxsr36d8ntskrln0jwvmskk2x44kqycj9z"
      },
      {
        "stake": 10799999200000000000000000,
        "keys-at-auction": [
          "9d29878d00d093f9bb88042724b12d6ff6192ba9db78fb8fac62f633387797266f16ff43dd7ff88b3e615315550a1106"
        ],
        "percentage-of-total-auction-stake": "0.001760859817271927",
        "stake-per-key": 10799999200000000000000000,
        "validator": "one1gvvve6xfnlytdgfngqx3sfe5pmywnc9ykaudn8"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "f90cc8dee5b3267b39f2e6a335d41a64a42622c61fc8de122149d896b4e2d92148c945f5669fec2329cfa98f4c317582"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one1fgvrcscjsy5dnnd7xz5pv3q05rm32rfnln9ny7"
      },
      {
        "stake": 9858097261669000000000000,
        "keys-at-auction": [
          "19092afa662abb802651b96eb8b20cf248edfa0d26bd0dccefa9d93fc7f9628224d3545cd1b710381a920b0b71d8ab12",
          "b3f88974af22ec352fee49aae74eb5d6910e301aee5724d56b4a344b6ca2a379401ac3ca91ea076e509019421a211a0f"
        ],
        "percentage-of-total-auction-stake": "0.001607289687839177",
        "stake-per-key": 4929048630834500000000000,
        "validator": "one19fwj7f3e2kgz48cqe6vs43d6q08f5tpt3zhlu5"
      },
      {
        "stake": 9714191000000000000000000,
        "keys-at-auction": [
          "c562f92121a31e899053fd8633f9253e87062f862c29251e6c648c7191285ca5b4da0b7a059c8b4f5505d9fe46610912"
        ],
        "percentage-of-total-auction-stake": "0.001583826838543154",
        "stake-per-key": 9714191000000000000000000,
        "validator": "one1x08eyghh8uhldsg2vkmss6dzul4zamkmmkqeeh"
      },
      {
        "stake": 18321466032276500000000000,
        "keys-at-auction": [
          "583f72670f72e4546fa9000ab73b1b48e51780b93fed48cbf8507500d3b0a5e7e626331f6c41730b5483b14941dde000"
        ],
        "percentage-of-total-auction-stake": "0.002987179233286259",
        "stake-per-key": 18321466032276500000000000,
        "validator": "one1t8n4gyt6ta64k3js3vy8vffw53njahq2yzjlxw"
      },
      {
        "stake": 9794162994000000000000000,
        "keys-at-auction": [
          "c214a0ca0ec4524ece2926775b311a67f65734dd7a1a4d147e07f4774c31721ce5943f47b7e826fcb3a25c08523d7b85"
        ],
        "percentage-of-total-auction-stake": "0.001596865679392486",
        "stake-per-key": 9794162994000000000000000,
        "validator": "one1gjt4latm8qepeg7f98hz9s38vg8keavl85qcdk"
      },
      {
        "stake": 8257986692370000000000000,
        "keys-at-auction": [
          "3d3e99618f79f96144d33e80b1517a46a65af719bfd9d06079105d1e28de197fac16195886d1967acf98046632753182"
        ],
        "percentage-of-total-auction-stake": "0.001346403519933654",
        "stake-per-key": 8257986692370000000000000,
        "validator": "one1wl3kppn0s8vn2shvjg6swyhyq5sc23cmq9u0sr"
      },
      {
        "stake": 12899410792710000000000000,
        "keys-at-auction": [
          "64c7572f1c7889d4d3954139835dca43998bd603d4ae7232f55dff82d166f42a65832423c03b85488905b14cdc68c994"
        ],
        "percentage-of-total-auction-stake": "0.002103153316100880",
        "stake-per-key": 12899410792710000000000000,
        "validator": "one1xwp3sf6vetnl4hdlzp2wa7f4kn2lqrpdxzppzg"
      },
      {
        "stake": 26015647918590000000000000,
        "keys-at-auction": [
          "e3bf914f3a52dc1201710486f7914d9568061bec9e0d38fd6b518f34f5aef58c7c3f488c8901905ea6642c55501f1816"
        ],
        "percentage-of-total-auction-stake": "0.004241658558654261",
        "stake-per-key": 26015647918590000000000000,
        "validator": "one1cr5q35dwd2svwutwm3wg4tf6xpqn0xkt0qqh78"
      },
      {
        "stake": 10000000000000000000000,
        "keys-at-auction": [
          "866e3bfb740fb94cd67b342e773903b85dba351392130d76e5857f7a99588de324c81bc894c1d769ab2b7b0c6ffefe83"
        ],
        "percentage-of-total-auction-stake": "0.000001630425877506",
        "stake-per-key": 10000000000000000000000,
        "validator": "one106430f8t45jf0vlh0xs0u629kd7h83sy6qecj5"
      },
      {
        "stake": 27963813269999000000000000,
        "keys-at-auction": [
          "81109ca97ea1f1885bc84cc884f62b6a4322fa651f3dab1e67791b565a7229f44a07514b61222f3386450e6554ef9b86"
        ],
        "percentage-of-total-auction-stake": "0.004559292478913954",
        "stake-per-key": 27963813269999000000000000,
        "validator": "one1he2kv2hv44krughkavnd5p9njannd50ckjfags"
      },
      {
        "stake": 98089542452727300000000000,
        "keys-at-auction": [
          "c412add5d19b3e40491808d6cef958eb9e4a1e7770cc5b8046870f6aab078c9aa4d3f8ed8396e4d18af83faf0e5bc70c"
        ],
        "percentage-of-total-auction-stake": "0.015992772832760609",
        "stake-per-key": 98089542452727300000000000,
        "validator": "one18tflcxt67uar3wtvvlwuae3jux3m62vq92wkam"
      },
      {
        "stake": 7274041718057000000000000,
        "keys-at-auction": [
          "0c3fd89575cd27f81d910ae0e25fa28bd0973fc16e5669c5460eb6717ce3fd00ab55c05ef7b2dfc3f1b74a1674f08788"
        ],
        "percentage-of-total-auction-stake": "0.001185978585117508",
        "stake-per-key": 7274041718057000000000000,
        "validator": "one1v0fguw8l5l0gk7fvjq2h9pqgxcekrvy273pfsy"
      },
      {
        "stake": 1999999000000000000000000,
        "keys-at-auction": [
          "f92f2fe9fa14d658aa52fa3b7cde1fb79d50e92898b075641ebe9e9686376d65a8eda93be9dfb6b590e5c813aebbaa96"
        ],
        "percentage-of-total-auction-stake": "0.000326085012458523",
        "stake-per-key": 1999999000000000000000000,
        "validator": "one19wyux0m57azlzxtsvhs3dtnhr3eg8eepmy98yn"
      }
    ]
  }
}`)

//
console.log(obj.result['epos-slot-winners'])
console.log(
  _.sumBy(obj.result['epos-slot-winners'], e => parseFloat(e['raw-stake']))
)
