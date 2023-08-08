"use strict";
function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async ()=>{
        const token = await grecaptcha.enterprise.execute("6LfJwjQnAAAAADlLvNSbyiYPnfJK7lH_Lp0qteL6", {
            action: "LOGIN"
        });
    });
}

//# sourceMappingURL=contatti.a7e95b20.js.map
