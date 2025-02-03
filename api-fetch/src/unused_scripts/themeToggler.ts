// [ ENTIRELY DEPRECATED, KEEPING HERE FOR FUTURE INSPIRATION T T ] ---
// theme switching ----------------------------------------------------
/*
document.querySelector('.themeSwitcher').addEventListener('click', () => {
    function x(el, dark, light) {
        return shades[el] == dark ? light : dark
    }
    function y(el, thickness) {
        const dark = `rgba(219, 219, 219, ${thickness})`;
        const light = `rgba(62, 62, 62, ${thickness})`;
        return shades[el] == dark ? light : dark;
    }

    currentThemeJSONField = (currentThemeJSONField == "ace/theme/twilight") ? "ace/theme/xcode" : "ace/theme/twilight";
    console.log("2.", currentThemeJSONField);
    window.isSwitcherToggling = false;

    const css_root = document.querySelector(':root');
    const root_variables = getComputedStyle(css_root);
    const shades = {
        bgcolor: root_variables.getPropertyValue('--bgcolor'),
        primarycard: root_variables.getPropertyValue('--primarycard'),
        hovercard: root_variables.getPropertyValue('--hovercard'),
        primarytext: root_variables.getPropertyValue('--primarytext'),
        secondarytext: root_variables.getPropertyValue('--secondarytext'),
        accentcolor: root_variables.getPropertyValue('--accentcolor'),
        green: root_variables.getPropertyValue('--green'),
        red: root_variables.getPropertyValue('--red'),
        border1: root_variables.getPropertyValue('--border1'),
        border2: root_variables.getPropertyValue('--border2'),
        border3: root_variables.getPropertyValue('--border3'),
        highlight: root_variables.getPropertyValue('--highlight'),
    };
    css_root.style.setProperty('--bgcolor', x('bgcolor', '#18191a', '#ffffff'));
    css_root.style.setProperty('--primarycard', x('primarycard', '#242526', '#eceff1'));
    css_root.style.setProperty('--hovercard', x('hovercard', '#3a3b3c', '#cfd8dc'));
    css_root.style.setProperty('--primarytext', x('primarytext', '#e4e6eb', '#18191a'));
    css_root.style.setProperty('--secondarytext', x('secondarytext', '#b0b3b8', '#3a3b3c'));
    css_root.style.setProperty('--accentcolor', x('accentcolor', '#3700b3', '#3700b3'));
    css_root.style.setProperty('--green', x('green', '#179f56', '#07c861'));
    css_root.style.setProperty('--red', x('red', '#ab0032', '#b00020'));
    css_root.style.setProperty('--highlight', x('highlight', '#ffffff', '#000000'));
    css_root.style.setProperty('--border1', y('border1', '0.2'));
    css_root.style.setProperty('--border2', y('border2', '0.4'));
    css_root.style.setProperty('--border3', y('border3', '0.7'));



    //const prev_hoverCol = hoverTabColor;
    const prev_tabCol = TabColor;
    //alert(prev_tabCol);

    hoverTabColor = x('hovercard', '#3a3b3c', '#cfd8dc');
    TabColor = x('primarycard', '#242526', '#eceff1');


    //alert(String(query_tab.style.backgroundColor));

    query_tab.style.backgroundColor = (query_tab.style.backgroundColor == prev_tabCol) ? hoverTabColor : TabColor;
    headers_tab.style.backgroundColor = (headers_tab.style.backgroundColor == prev_tabCol) ? hoverTabColor : TabColor;
    json_tab.style.backgroundColor = (json_tab.style.backgroundColor == prev_tabCol) ? hoverTabColor : TabColor;
});
 */
//---------------------------------------------------------------------
