import React, {useState} from 'react';
import "../css/admin/admin.css";
export function Admin({isAuthenticated}) {
    const [mode, setMode] = useState('open');
    if(!isAuthenticated) {
        return;
    }
    const handleDrawer = () => {
      setMode(mode == 'open' ? 'close': 'open');
    }

    return (
      <>
        <header>
            <span className="inner-text">Header</span>
        </header>
        <button onClick={handleDrawer}>--</button>
        <div className="wrapper">
            <aside className={"sidebar" + mode}>
               <span className="inner-text">inner text</span>
            </aside>
            <main className="content">
                <div className="inner-text">
                    main contents
                </div>
            </main>
        </div>
       </>

    )
}



