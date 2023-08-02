var FrontMiddleBackQueue = function() {
    this.queue = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
    this.queue.unshift(val);
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
    let middleIdx = Math.floor(this.queue.length/2);
    let tmpArr = this.queue.slice(0, middleIdx);
    tmpArr.push(val);
    this.queue = tmpArr.concat(this.queue.slice(middleIdx));
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
    this.queue.push(val);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
    console.log(this.queue)
    if (this.queue.length > 0) {
        return this.queue.shift();
    } else {
        return -1;
    }
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
    console.log(this.queue)
    if (this.queue.length > 0) {
        if (this.queue.length === 1) {
            let val = this.queue[0];
            this.queue = [];
            return val;
        }
        let middleIdx = Math.floor((this.queue.length-1)/2);
        let val = this.queue[middleIdx];
        let tmpArr = this.queue.slice(0, middleIdx);
        this.queue = tmpArr.concat(this.queue.slice(middleIdx+1));
        return val;
    } else {
        return -1;
    }
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
    console.log(this.queue)
    if (this.queue.length > 0) {
        return this.queue.pop();
    } else {
        return -1;
    }
};

/** 
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */