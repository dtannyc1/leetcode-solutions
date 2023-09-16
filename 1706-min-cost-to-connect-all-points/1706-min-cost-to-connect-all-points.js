/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    // calculate manhattan distance between all points
    // starting from point 0, find closest point and add it to a tree
    // using remaining nodes, find the next closest point to the tree
    // iterate until no more nodes

    if (points.length === 1) return 0;
    let dists = ({}); // create dict of mapping

    for (let ii = 0; ii < points.length; ii++){
        let [xi, yi] = points[ii];
        for (let jj = ii+1; jj < points.length; jj++){
            let [xj, yj] = points[jj];
            let dist = Math.abs(xi-xj) + Math.abs(yi-yj);
            if (dists[ii]) {
                dists[ii].push([jj, dist]);
            } else {
                dists[ii] = [[jj,dist]];
            }
            if (dists[jj]){
                dists[jj].push([ii, dist]);
            } else {
                dists[jj] = [[ii,dist]];
            }
        }
    }

    let sorterFunc = function(a,b) {
        if (a[1] < b[1]) return 1;
        if (a[1] === b[1]) return 0;
        return -1;
    };

    for (let ii = 0; ii < points.length; ii++){
        dists[ii].sort(sorterFunc);
    }

    console.log(dists);
    
    let tree = ['0'];
    let totalDist = 0;

    while (tree.length < points.length){
        let minDist = Infinity;
        let minInd = -1;
        
        for (let node of tree){
            let len = dists[node].length;
            while (tree.includes(dists[node][len-1][0].toString())){
                dists[node].pop();
                len--;
            }
            if (dists[node][len-1][1] < minDist){
                minDist = dists[node][len-1][1];
                minInd = dists[node][len-1][0];
            }
        }

        totalDist += minDist;
        tree.push(minInd.toString());
    }

    // console.log(tree)
    return totalDist;
};