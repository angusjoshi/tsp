const getDists = circles => {
    const dists = [];
    for(let i = 0; i < circles.length; i++) { 
        dists.push([]);
        for(let j = 0; j < circles.length; j++) { 
            dists[i].push(0);
        }

    }
    for(let i = 0; i < circles.length; i++) {
        for(let j = 0; j < circles.length; j++) {
            if(i === j) dists[i][j] = 0;
            else {
                dists[i][j] = dists[j][i] = 
                    dist(circles[i], circles[j])
            }
        }
    }
    return dists;
}
const dist = (circle1, circle2) => { 
    const deltaX = circle2.x - circle1.x;
    const deltaY = circle2.y - circle1.y;
    return Math.sqrt(deltaX*deltaX + deltaY*deltaY);
}

const nearestNeighbor = async (circles, setPath, pathSpeed) => {
    if(circles.length === 0) return [];
    const dists = getDists(circles);
    const visited = new Set();
    const result = [0];
    for(let i = 0; i < circles.length - 1; i++) {
        const lastNode = result[i];
        visited.add(lastNode);
        const distsFromLastNode = dists[lastNode];
        const indexedDists = [];
        for(let j = 0; j < dists.length; j++) { 
            indexedDists.push([j, distsFromLastNode[j]]);
        }
        indexedDists.sort((a,b) => {
            if(a[1] === b[1]) return 0;
            if(a[1] < b[1]) return -1;
            return 1;
        })
        let j = 0;
        while(visited.has(indexedDists[j][0])) j++;
        await sleep(1000 * Math.pow(Math.E,-pathSpeed));
        result.push(indexedDists[j][0]);
        setPath([...result]);
    }
    return result;
}
const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
Number.prototype.mod = function (n) {
    "use strict";
    return ((this % n) + n) % n;
  };
const trySwap = async (i, dists, path, setPath, pathSpeed) => { 
    const j = (i + 1) % path.length;
    const before = (i - 1).mod(path.length);
    const after = (j + 1) % path.length;
    const distBefore = dists[path[before]][path[i]] + dists[path[j]][path[after]];
    const distAfter = dists[path[before]][path[j]] + dists[path[i]][path[after]];
    if(distAfter < distBefore) { 
        await sleep(1000 * Math.pow(Math.E,-pathSpeed));
        swap(path, i, j)
        setPath([...path]);
        return true;
    }
    return false;
}
const swapHeuristic = async (circles, setPath, pathSpeed) => {
    const path = genInitialPerm(circles);
    const k = 1000;
    const dists = getDists(circles);
    let better = true;
    let count = 0;
    while(better && (count < k || k === -1)) {
        better = false;
        count++;
        for(let i = 0; i < circles.length; i++) { 
            if(await trySwap(i, dists, path, setPath, pathSpeed)) better = true;
        }
    }
    return path;
}
const genInitialPerm = circles => { 
    const path = [];
    for(let i = 0; i < circles.length; i++) {
        path.push(i);
    }
    return path;
}
const twoOptHeuristic = async (circles, setPath, pathSpeed) => { 
    const path = genInitialPerm(circles);
    let better = true;
    let count = 0;
    const dists = getDists(circles);
    const k = 1000;
    while(better && (count < k || k === -1)) { 
        better = false;
        count++;
        for(let j = 0; j < circles.length - 1; j++) { 
            for(let i = 0; i < j; i++) { 
                if(i !== j) { 
                    if(await tryReverse(path, setPath, dists, i, j, pathSpeed)) better = true;
                }
            }
        }
    }
    return path;
}
const tryReverse = async (path, setPath, dists, i, j, pathSpeed) => {
    const before = (i - 1).mod(path.length);
    const after = (j + 1).mod(path.length);
    const distBefore = dists[path[before]][path[i]] + dists[path[j]][path[after]];
    const distAfter = dists[path[before]][path[j]] + dists[path[i]][path[after]];
    if(distAfter < distBefore) { 
        await sleep(1000 * Math.pow(Math.E,-pathSpeed));
        reverse(path, i, j);
        setPath([...path]);
        return true;
    }
    return false;
}
const reverse = (path, i, j) => {
    while(i < j) { 
        swap(path, i++, j--);
    }
}

// const antColonyOpt = async(circles, setPath, pathSpeed) { 

// }
const tourValue = (dists, path) => {
    if(path.length <= 1) return 0;
    let total = dists[path[0]][path[path.length - 1]];
    for(let i = 1; i < path.length; i++) { 
        total += dists[path[i-1]][path[i]];
    }
    return total;
}
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
export { nearestNeighbor, swapHeuristic, twoOptHeuristic };