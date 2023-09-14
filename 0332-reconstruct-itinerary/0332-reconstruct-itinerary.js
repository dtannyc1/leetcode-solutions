/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets, trip=["JFK"]) {
    // if tickets is empty, return trip
    if (tickets.length === 0) return trip; // base case

    // look through tickets, find ones that starts with trip[end]
    let subset = [];
    for (let ii = 0; ii < tickets.length; ii++){
        if (tickets[ii][0] === trip[trip.length-1]){
            subset.push(ii); // store indices of next possible tickets
        }
    }

    // if no options left within tickets but not empty, return null
    if (subset.length === 0) return null; 

    // sort alphabetically by destination
    subset.sort((ii, jj) => {
        let a = tickets[ii][1];
        let b = tickets[jj][1];
        if (a.charCodeAt(0) === b.charCodeAt(0)) {
            if (a.charCodeAt(1) === b.charCodeAt(1)) {
                if (a.charCodeAt(2) === b.charCodeAt(2)) {
                    return 0;
                } else {
                    if (a.charCodeAt(2) < b.charCodeAt(2)) {
                        return -1
                    } else {    
                        return 1;
                    }
                }
            } else {
                if (a.charCodeAt(1) < b.charCodeAt(1)) {
                    return -1
                } else {    
                    return 1;
                }
            }
        } else {
            if (a.charCodeAt(0) < b.charCodeAt(0)) {
                return -1
            } else {    
                return 1;
            }
        }
    })
    // console.log(tickets, trip)
    // console.log(subset);
    
    // recursively try to remove that particular element to build rest of trip
    for (let destinationi of subset) {
        let potTicket = tickets.splice(destinationi, 1);
        let potTrip = trip.slice(0);
        potTrip.push(potTicket[0][1]);
        let nextTrip = findItinerary(tickets, potTrip);
        if (nextTrip) {
            return nextTrip; // found one
        }
        else {
            // put back ticket and move on
            tickets.splice(destinationi, 0, ...potTicket);
        }
    }

    return null;
};
