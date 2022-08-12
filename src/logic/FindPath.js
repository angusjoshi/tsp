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

function nearestNeighbor(circles) {
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
        result.push(indexedDists[j][0]);
    }
    console.log(tourValue(dists, result))
    return result;
}


const tourValue = (dists, path) => {
    if(path.length <= 1) return 0;
    let total = dists[path[0]][path[path.length - 1]];
    for(let i = 1; i < path.length; i++) { 
        total += dists[path[i-1]][path[i]];
    }
    return total;
}
export default nearestNeighbor;