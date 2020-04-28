let matrix = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]];
let mat = [[],[],[],[],[],[],[]];
count = 0;
if(count == 0){
    let y=0;
    loop1:
        for(let row = 0 ; row < matrix.length; row++){
            for(let col = 0 ; col< matrix[row].length;col++){
                mat[count][y] = matrix[row][col];
                y++;
            }
            break loop1;
    }
    count++;
}
console.log(count);

if(count == 1){
    let y = 0;
    for(let row = 0; row<matrix.length;row++){
        for(let col = 0;col<matrix[row].length;col++){
            if(col !== 4){
                continue;
            }else{
               mat[count][y] = matrix[row][col];
               y++;
            }
        }
    }
    count++;
}
if(count == 2){
    for(let row = 0; row < matrix.length;row++){
        if(row !== 3){
            continue
        }else{
            for(let col = 0;col< matrix[row].length;col++){
                mat[count][col] = matrix[row][col]
            }
        }
    }
    count++;
}
if(count == 3){
    let y = 0
    for(let row = 0;row <matrix.length;row++){
        if(row == 0){
            continue;
        }else{
            for(let col = 0;col< matrix[row].length;col++){
                if(col == 0){
                    mat[count][y] = matrix[row][col];
                    y++;
                }else{
                    continue;
                }
            }
        }
    }
    count++;
}

if(count == 4){
    let y = 0;
    for(let row = 0;row <matrix.length;row++){
        if(row !== 1){
            continue;
        }else{
            for(let col = 0;col< matrix[row].length;col++){
                if(col == 4){
                    break;
                }else{
                    mat[count][y] = matrix[row][col];
                    y++;
                }
            }
        }
    }
    count++;
}

if(count == 5){
    let y = 0;
    for(let row = 0;row <matrix.length;row++){
        if(row == 0 || row == 3){
            continue;
        }else{
            for(let col = 0;col< matrix[row].length;col++){
                if(col !==3){
                    continue;
                }else{
                    mat[count][y] = matrix[row][col];
                    y++;
                }
            }
        }

    }
    count++;
}
if(count == 6){
    let y=0;
    for(let row = 0;row <matrix.length;row++){
        if(row == 0 || row == 1 || row ==3){
            continue;
        }else{
            for(let col = 0;col< matrix[row].length;col++){
                if(col == 0 || col == 4){
                    continue;
                }else{
                    mat[count][y] = matrix[row][col];
                    y++;
                }
            }
        }
    }
}
console.log(mat);