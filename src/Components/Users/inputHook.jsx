import React, { useState } from 'react'

const inputHook = (val) => {

    const [state, setState] = useState(val);

    const inputFild = e => {
        setState(e.target.value);
    };

    const clear = () => {
        setState("");
    }

 return [state, inputFild, clear ]
};

export default inputHook;