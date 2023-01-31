import React, {useState} from 'react';
import "../css/admin/admin.css";
export function Admin({isAuthenticated}) {
    const [toggle, setToggle] = useState(true);
    if(!isAuthenticated) {
        return;
    }
    return (
      <>
        <header>
            <span className="inner-text">Header</span>
        </header>
        <button onClick={()=>setToggle(!toggle)}>--</button>
        <div className="wrapper">
            {toggle && 
            (<aside className={"sidebar"}>
               <span className="inner-text">inner text</span>
            </aside>)
            }
            <main className="content">
                <div className="inner-text">
                    main contents
                </div>
            </main>
        </div>
       </>

    )
}



