import React from 'react';

function ThemeButton({darkMode, onClick}) {
    return (
        <div className="themeButton" onClick={onClick}>
            {darkMode ? 
                <img className="themeButton__img" alt="themebutton light" src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-256.png" />
                : <img className="themeButton__img" alt="themebutton dark" src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_4-512.png" />}
        </div>
    );
}

export default ThemeButton;