/* La fonction "checkConnectFour" reçoit un un tableau à deux dimensions représentant une partie terminée du jeu puissance 4 et doit renvoyer le gagnant 
(:red_circle:, :large_yellow_circle: ou null en cas d'égalité).
 Note : la partie reçue dans "grid" ne sera jamais invalide et contiendra toujours une de ces valeur : ":red_circle:", ":large_yellow_circle:" ou " " (un espace). */
 const grid = [   [":red_circle:", ":red_circle:", ":red_circle:", ":red_circle:", " ", " ", " "],
 [" ", " ", " ", " ", " ", " ", " "],
 [" ", " ", " ", " ", " ", " ", " "],
 [" ", " ", " ", " ", " ", " ", " "],
 [" ", " ", " ", " ", " ", " ", " "],
 [" ", " ", " ", " ", " ", " ", " "]
];

 const checkConnectFour = (grid) => {
    
    const rows = grid.length;
    const cols = grid[0].length;

    // Check horizontale
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols - 3 ; j++) {
            if (grid[i][j] !== " " &&
                grid[i][j] === grid[i][j+1] &&
                grid[i][j] === grid[i][j+2] &&
                grid[i][j] === grid[i][j+3]) {
                return grid[i][j]
            }
        }
    }

    // Check verticale

    for(let i=0; i < rows -3; i++) {
        for(let j=0; j < cols; j++) {
            if (grid[i][j] !== " " &&
            grid[i][j] === grid[i+1][j] &&
            grid[i][j] === grid[i+2][j] &&
            grid[i][j] === grid[i+3][j]) {
            return grid[i][j]
            }
        }
    }

    // Check diagonale

    for(let i=0; i < rows -3; i++) {
        for(let j=0; j < cols -3; j++) {
            if (grid[i][j]!== " " &&
            grid[i][j] === grid[i+1][j+1] &&
            grid[i][j] === grid[i+2][j+2] &&
            grid[i][j] === grid[i+3][j+3]) {
            return grid[i][j]
            }
        }
    }

    // check diagonale inversé 

    for(let i=0; i < rows -3; i++) {
        for(let j=3; j < cols; j++) {
            if (grid[i][j]!== " " &&
            grid[i][j] === grid[i+3][j-1] &&
            grid[i][j] === grid[i+2][j-2] &&
            grid[i][j] === grid[i+1][j-3]) {
            return grid[i][j]
            }
        }
    }
    return null
}
console.log(checkConnectFour(grid));


