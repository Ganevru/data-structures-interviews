/** Class representing a Hash Table */
class HashTable {
  constructor(val) {
    this._storage = [];
    this._tableSize = val;
    this._inputSize = 0;
  }

  /**
   * Inserts a new key-value pair
   * @param {string} key - the key associated with the value
   * @param {*} value - the value to insert
   */
  insert(key, value) {
    const index = this._hash(key, this._tableSize);
    if (!this._storage[index]) this._storage[index] = [];
    this._storage[index].push([key, value]);
  }

  /**
   * Deletes a key-value pair
   * @param {string} key - the key associated with the value
   * @return {*} value - the deleted value
   */
  // remove(key) {

  // }

  /**
   * Returns the value associated with a key
   * @param {string} key - the key to search for
   * @return {*} - the value associated with the key
   */
  retrieve(key) {
    const index = this._hash(key, this._tableSize);
    const arrayAtIndex = this._storage[index];
    if (!arrayAtIndex) return undefined;
    const retrieveArray = arrayAtIndex.filter((e) => e[0] === key);
    if (retrieveArray[0] && retrieveArray[0][1]) return retrieveArray[0][1];
    return undefined;
  }

  /**
   * Hashes string value into an integer that can be mapped to an array index
   * @param {string} str - the string to be hashed
   * @param {number} n - the size of the storage array
   * @return {number} - an integer between 0 and n
   */
  _hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) * 3;

    return sum % n;
  }
}

module.exports = { HashTable };
