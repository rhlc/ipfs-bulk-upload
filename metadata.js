let fs = require("fs");
let axios = require("axios");

let ipfsArray = [];
let promises = [];

for (let i = 0; i < 100; i++) {
  ipfsArray.push({
    path: `metadata/${i}.json`,
    content: {
      image: `ipfs://QmXfP5r9Hm4Wdp2Z9kdBxRQtzjWGFj6DnozBGr7rtMe4Gg/images/${i}.png`,
      name: `How would you your nfts named #${i}`,
      description: "Please do add some description",
    },
  });
}
axios
  .post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
    headers: {
      "X-API-KEY":
        "na na na this is secret",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });


