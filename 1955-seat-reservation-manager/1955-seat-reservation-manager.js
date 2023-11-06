/**
 * @param {number} n
 */
var SeatManager = function(n) {
    this.seats = new Array(n).fill(0).map((val,ii) => ii+1).reverse();
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    return this.seats.pop();
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    this.seats.push(seatNumber);
    let jj = this.seats.length-1;
    while (jj > 0 && this.seats[jj]>this.seats[jj-1]){
        [this.seats[jj-1], this.seats[jj]] = [this.seats[jj], this.seats[jj-1]];
        jj--;
    }
    return null;
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */