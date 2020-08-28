import React, { useRef } from 'react';
import '../css/switch.css';


function Switch({setDarkMode, checked, setChecked}) {
    const ref = useRef(null); /* referencia valor mutable */
    function handleChange() {
        setChecked(ref.current.checked);
        setDarkMode(ref.current.checked);
    }

    return (
        <div className="dark-mode">
            <p className="dark-mode-title">Dark Mode</p>
            <input ref={ref} onChange={handleChange} checked={checked} type="checkbox" className="checkbox" id="checkbox" />
            <label className="switch" htmlFor="checkbox">
            </label>
        </div>
    )
}

export default Switch;