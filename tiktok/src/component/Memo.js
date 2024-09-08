import React from "react";
function Memo() {
    console.log('Memo');
    return (
        <div>
            <h1>Memo</h1>
        </div>
    );
}

export default React.memo(Memo);