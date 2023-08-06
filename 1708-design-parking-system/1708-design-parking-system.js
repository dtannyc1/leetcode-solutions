/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.bigLim = big;
    this.medLim = medium; 
    this.smlLim = small;
    this.cars = [0,0,0];
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if (carType === 1) {
        if (this.cars[0] < this.bigLim){
            this.cars[0] += 1;
            return true;
        } else {
            return false;
        }
    } else if (carType === 2){
        if (this.cars[1] < this.medLim) {
            this.cars[1] += 1;
            return true;
        } else {
            return false;
        }
    } else if (carType === 3) {
        if (this.cars[2] < this.smlLim) {
            this.cars[2] += 1;
            return true;
        } else {
            return false;
        }
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */