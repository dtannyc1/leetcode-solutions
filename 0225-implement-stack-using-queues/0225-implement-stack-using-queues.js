var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if (this.queue2.length > 0) {
        return this.queue2.shift();
    } else {
        if (this.queue1.length === 0) {
            return null;
        } else {
            // reverse to get last element
            while (this.queue1.length != 1) {
                this.queue2.push(this.queue1.shift());
            }
            let el = this.queue1.shift();

            // preserve order
            while (this.queue2.length != 0) {
                this.queue1.push(this.queue2.shift());
            }
            return el;
        }
    }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    while (this.queue1.length != 1) {
        this.queue2.push(this.queue1.shift());
    }
    let el = this.queue1[0];
    this.queue2.push(this.queue1.shift());

    // preserve order
    while (this.queue2.length != 0) {
        this.queue1.push(this.queue2.shift());
    }
    return el;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */