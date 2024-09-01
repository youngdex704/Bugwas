const fs = require('fs');
  let _monayOrg = JSON.parse(fs.readFileSync('./data/monay.json'))
  let monayAwal = 25;
  const addInventoriMonay = (sender) => {
        const obj = {id: sender, monay: monayAwal}
         _monayOrg.push(obj)
        fs.writeFileSync('./data/monay.json', JSON.stringify(_monayOrg))
   }
  const cekDuluJoinAdaApaKagaMonaynyaDiJson = (sender) => {
            let status = false
            Object.keys(_monayOrg).forEach((i) => {
                if (_monayOrg[i].id === sender) {
                    status = true
                }
            })
            return status
        }

const koinPerak = {};

const tambahKoinPerak = (userId) => {
  if (koinPerak[userId]) {
    koinPerak[userId] += 1;
  } else {
    koinPerak[userId] = 1;
  }
};

const cekKoinPerak = (userId) => {
  return koinPerak[userId] || 0;
};

const aMonay = (userId, amount, _dir) => {
let position = null
Object.keys(_dir).forEach((x) => {
if (_dir[x].id === userId) {
position = x
}
})
if (position !== null) {
_dir[position].monay += amount
fs.writeFileSync('./data/monay.json', JSON.stringify(_dir, null, 3))
} else {
var object_add = ({
id: userId,
monay: amount
})
_dir.push(object_add)
fs.writeFileSync('./data/monay.json', JSON.stringify(_dir, null, 3))
}
}

const kMonay = (userId, amount, _dir) => {
let position = null
Object.keys(_dir).forEach((x) => {
if (_dir[x].id === userId) {
position = x
}
})
if (position !== null) {
_dir[position].monay -= amount
fs.writeFileSync('./data/monay.json', JSON.stringify(_dir, null, 3))
}}

const cMonay = (userId, _dir) => {
let position = null
Object.keys(_dir).forEach((x) => {
if (_dir[x].id === userId) {
position = x
}
})
if (position !== null) {
return _dir[position].monay
} else {
return 0
}}

module.exports = { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson, aMonay, kMonay, cMonay }