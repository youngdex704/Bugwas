const fs = require('fs');

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

const addGold = (userId, amount, _dir) => {
let position = null
Object.keys(_dir).forEach((x) => {
if (_dir[x].id === userId) {
position = x
}
})
if (position !== null) {
_dir[position].gold += amount
fs.writeFileSync('./data/gold.json', JSON.stringify(_dir, null, 3))
} else {
var object_add = ({
id: userId,
gold: amount
})
_dir.push(object_add)
fs.writeFileSync('./data/gold.json', JSON.stringify(_dir, null, 3))
}
}

const minGold = (userId, amount, _dir) => {
let position = null
Object.keys(_dir).forEach((x) => {
if (_dir[x].id === userId) {
position = x
}
})
if (position !== null) {
_dir[position].gold -= amount
fs.writeFileSync('./data/gold.json', JSON.stringify(_dir, null, 3))
}}

const cekGold = (userId, _dir) => {
let position = null
Object.keys(_dir).forEach((x) => {
if (_dir[x].id === userId) {
position = x
}
})
if (position !== null) {
return _dir[position].gold
} else {
return 0
}}

module.exports = { addGold, minGold, cekGold }