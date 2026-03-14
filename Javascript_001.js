function printHollowDiamond(n) {
    let result = "";

    
    for (let i = 0; i < n; i++) {
        let row = "";
       
        for (let j = 0; j < n - i - 1; j++) row += " ";
        
        row += "*"; 

        if (i > 0) {
           
            for (let j = 0; j < 2 * i - 1; j++) row += " ";
            row += "*"; 
        }
        result += row + "\n";
    }

    // Lower part
    for (let i = n - 2; i >= 0; i--) {
        let row = "";
        
        for (let j = 0; j < n - i - 1; j++) row += " ";
        
        row += "*"; 

        if (i > 0) {
           
            for (let j = 0; j < 2 * i - 1; j++) row += " ";
            row += "*"; 
        }
        result += row + "\n";
    }

    console.log(result);
}


printHollowDiamond(5);