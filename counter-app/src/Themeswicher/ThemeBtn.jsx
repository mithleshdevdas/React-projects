import React from "react";
import useTheme from "./theme";

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
    return (
         <>
 
      
          
      <label>
                <input
                    type="checkbox"
                    value=""
                    checked={ themeMode === 'dark' }
                    onChange={onChangeBtn}
                /> <span>toggle thme</span>   
      </label>
      </>
  );
}
//

// 
