import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <button onClick={handleClick}>
            You pressed me {count} times! 🥲
        </button>
    )
}














// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// //import React, { useState } from "react";
// import axios from "axios";

// export default function Test() {
//     const [count, setCount] = React.useState(0); // Declaring a state variable 'count' with initial value 0

//     function handleButton() {
//         console.log("Test button");
//         setCount(count - 1);
//     }

// // export default function Test() {
//   return (
//   <Box sx={{backgroundColor: '#89CFF0'}}>
//     Num = {count}
//     Page2
//     <Typography sx={{fontSize: '20px'}}>Heading</Typography>
//     <Button onClick={handleButton}>Increase Count</Button>
//     </Box>
//   );
// }
