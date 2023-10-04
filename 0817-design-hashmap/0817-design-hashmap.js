
var MyHashMap = function() {
    this.keys = [];
    this.vals = [];
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    if (this.keys.indexOf(key) === -1){
        this.keys.push(key);
        this.vals.push(value);
        return null;
    } else {
        this.vals[this.keys.indexOf(key)] = value;
        return null;
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    if (this.keys.indexOf(key) === -1){
        return -1;
    } else {
        return this.vals[this.keys.indexOf(key)];
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    if (this.keys.indexOf(key) === -1){
        return null;
    } else {
        this.vals.splice(this.keys.indexOf(key),1);
        this.keys.splice(this.keys.indexOf(key),1);
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */