import axios from "./_snowpack/pkg/axios.js";
import prettyBytes from "./_snowpack/pkg/pretty-bytes.js";

let currentThemeJSONField = "ace/theme/twilight";

const query_tab = document.getElementsByClassName('queryParamsTab')[0];
const headers_tab = document.getElementsByClassName('HeadersTab')[0];
const json_tab = document.getElementsByClassName('JSONTab')[0];

let hoverTabColor = "#202020";
let TabColor = "#121212";

const sendBtn = document.querySelector('[data-send-btn]');

if (sendBtn.style.color != ('#e3e6eb' || '#b0b3b8'))
    sendBtn.style.color = '#b0b3b8';


// json editor field --------------------------------------------------
let text_input = {

};
text_input = JSON.stringify(text_input, null, 4).replace(/{\s*/g, '{\n\n');
document.getElementById("editor").innerHTML = text_input;
const ace_editor = ace.edit("editor");
ace_editor.getSession().setMode("ace/mode/json");
ace_editor.setTheme("ace/theme/twilight");
ace_editor.getSession().setTabSize(4);
ace_editor.getSession().setUseWrapMode(true);
//---------------------------------------------------------------------


// functions to change tabs -----------------------------------------
const tab_index = {
    '[data-query-params-tab]': 1,
    '[data-headers-tab]': 2,
    '[data-json-tab]': 3
}

document.querySelector('[data-query-params-tab]').addEventListener('click', () => {
    toggleTabs(tab_index["[data-query-params-tab]"]);
});
document.querySelector('[data-headers-tab]').addEventListener('click', () => {
    toggleTabs(tab_index["[data-headers-tab]"]);
});
document.querySelector('[data-json-tab]').addEventListener('click', () => {
    toggleTabs(tab_index["[data-json-tab]"]);
});
//---------------------------------------------------------------------


// functions to add key:value fields ----------------------------------
const field_index = {
    '[data-add-query-params-field-btn]': 0,
    '[data-add-header-field-btn]': 1
}

document.querySelector('[data-add-query-params-field-btn]').addEventListener('click', () => {
    const queryParamsContainer = document.getElementsByClassName('keyValueField')[field_index["[data-add-query-params-field-btn]"]];
    queryParamsContainer.appendChild(createKeyValuePair());
})
document.querySelector('[data-add-header-field-btn]').addEventListener('click', () => {
    const HeadersContainer = document.getElementsByClassName('keyValueField')[field_index["[data-add-header-field-btn]"]];
    HeadersContainer.appendChild(createKeyValuePair());
})
//---------------------------------------------------------------------




// functions to toggle b/w response box tabs --------------------------
const response_index = {
    "[data-body-response-tab]": 1,
    "[data-header-response-tab]": 2
}
document.querySelector('[data-body-response-tab]').addEventListener('click', () => {
    toggleResponseTabs(response_index['[data-body-response-tab]']);
});
document.querySelector('[data-header-response-tab]').addEventListener('click', () => {
    toggleResponseTabs(response_index['[data-header-response-tab]']);
});
//---------------------------------------------------------------------




// tab functioning ----------------------------------------------------
function toggleTabs(num) {
    query_tab.style.backgroundColor = (num == 1) ? hoverTabColor : TabColor;
    headers_tab.style.backgroundColor = (num == 2) ? hoverTabColor : TabColor;
    json_tab.style.backgroundColor = (num == 3) ? hoverTabColor : TabColor;

    query_tab.style.fontWeight = (num == 1) ? "bold" : "normal";
    headers_tab.style.fontWeight = (num == 2) ? "bold" : "normal";
    json_tab.style.fontWeight = (num == 3) ? "bold" : "normal";


    const query_field = document.getElementsByClassName('queryWrapper')[0];
    const headers_field = document.getElementsByClassName('headerWrapper')[0];
    const json_field = document.getElementsByClassName('jsonWrapper')[0];



    if (num == 1) {
        query_field.style.display = "block";
        headers_field.style.display = "none";
        json_field.style.display = "none";
    } else if (num == 2) {
        query_field.style.display = "none";
        headers_field.style.display = "block";
        json_field.style.display = "none";
    } else {
        query_field.style.display = "none";
        headers_field.style.display = "none";
        json_field.style.display = "block";
    }
}

function toggleResponseTabs(num) {
    const bodyAnsBox = document.getElementsByClassName('bodyAnsContainer')[0];
    const headerAnsBox = document.getElementsByClassName('headerAnsContainer')[0];

    bodyAnsBox.style.display = (num === 1) ? "block" : "none";
    headerAnsBox.style.display = (num === 2) ? "block" : "none";

    const bodyResponseTab = document.querySelector('[data-body-response-tab]');
    const headerResponseTab = document.querySelector('[data-header-response-tab]');
    const hoverShade = '#202020';
    const tabShade = '#121212';

    bodyResponseTab.style.backgroundColor = (num === 1) ? hoverShade : tabShade;
    headerResponseTab.style.backgroundColor = (num === 2) ? hoverShade : tabShade;
    bodyResponseTab.style.fontWeight = (num === 1) ? "bold" : "normal";
    headerResponseTab.style.fontWeight = (num === 2) ? "bold" : "normal";
}
//---------------------------------------------------------------------




// append new key:val pairs -------------------------------------------
function createKeyValuePair() {
    const element = document.querySelector('[data-key-value-template]').content.cloneNode(true);
    element.querySelector('[data-remove-btn]').addEventListener('click', e => {
        e.target.closest('[data-key-value-pair]').remove();
    });
    return element;
}
//---------------------------------------------------------------------
function checkValidURL(url) {
    const url_pattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return url_pattern.test(url);
}

function convertTime(time_in_ms) {
    if (time_in_ms < 1000)
        return String(time_in_ms) + "ms";
    else {
        const sec = parseInt(parseInt(time_in_ms) / 1000) || 0;
        const ms = parseInt(time_in_ms) % 1000;
        return ((sec == 0) ? "" : (sec + "s ")) + ms + "ms";
    }
}
//---------------------------------------------------------------------




sendBtn.addEventListener('click', () => {
    const requested_url = String(document.querySelector('[data-url]').value);
    const responseShow = document.getElementsByClassName('responseWrapper')[0];

    if (!checkValidURL(requested_url)) {
        responseShow.style.display = "none";
        alert("Malformed URL, cannot submit.");
        return;
    }

    if (!requested_url) {
        responseShow.style.display = "none";
        alert("Empty URL, cannot submit.");
        return;
    }



    //initialization
    const headerField = document.getElementsByClassName('headerAnswer')[0];
    const statusbar = document.querySelector('[data-status]');
    const timebar = document.querySelector('[data-time]');
    const sizebar = document.querySelector('[data-size]');
    const bodyAns = document.getElementsByClassName('bodyAnswer')[0];

    headerField.innerHTML = "";
    statusbar.innerHTML = "";
    timebar.innerHTML = "";
    sizebar.innerHTML = "";
    bodyAns.innerHTML = "";

    //const headerAns = document.getElementsByClassName('headerAnswer')[0];


    const http_request_type = String(document.querySelector('[data-req-type]').value);
    const params = toObjects(document.getElementsByClassName('keyValueField')[0]);
    const headers = toObjects(document.getElementsByClassName('keyValueField')[1]);

    console.log("Headers is: ",headers)


    let json_data = {};
    try {
        json_data = JSON.parse(ace_editor.getValue() || null);
        console.log("json data is = ", json_data);
    } catch {
        responseShow.style.display = "none";
        alert("JSON data is malformed.");
        return;
    }

    axios.interceptors.request.use(req => {
        req.customData = req.customData || {};
        req.customData.startTime = new Date().getTime();
        return req;
    });

    function endTime(res) {
        res.customData = res.customData || {};
        res.customData.time = new Date().getTime() - res.config.customData.startTime;
        return res;
    }

    axios.interceptors.response.use(endTime, e => {
        return Promise.reject(endTime(e.response));
    })

    
    

    axios({
        url: requested_url,
        method: http_request_type,
        params: params,
        headers: headers,
        data: JSON.stringify(json_data)
    })
        .then((res) => {
            //console.log(res);
            responseShow.style.display = "block";

            console.table(params);

            statusbar.innerHTML = res.status || "429";
            if (statusbar.innerHTML == "429") {
                timebar.innerHTML = "nil";
                sizebar.innerHTML = "nil";
                bodyAns.innerHTML = JSON.stringify({}, null, 4);
            } else {
                timebar.innerHTML = convertTime(res.customData.time);
                sizebar.innerHTML = prettyBytes(
                    JSON.stringify(res.headers).length + JSON.stringify(res.data).length
                );

                bodyAns.innerHTML = JSON.stringify(res.data, null, 4);
            }

            createEditorField();
            //const api_response = "" || res_editor.getValue();
            //resJSONField(res.data);
            updateHeadersResponseField(res.headers);
        })
        .catch(err => {
            console.error("[ERROR]:", String(err));
        });
});


function createEditorField() {
    const res_editor = ace.edit("responseEditor");
    res_editor.getSession().setMode("ace/mode/json");
    res_editor.setTheme(currentThemeJSONField);
    res_editor.getSession().setTabSize(4);
    res_editor.getSession().setUseWrapMode(true);
}



function toObjects(container) {
    const pairs = container.querySelectorAll('[data-key-value-pair]');

    return [...pairs].reduce((data_obj, each_pair) => {
        const key = each_pair.querySelector('[data-key]').value;
        const val = each_pair.querySelector('[data-value]').value;

        if (key === "")
            return data_obj;

        return { ...data_obj, [key]: val };
    }, {});
}

function updateHeadersResponseField(header) {
    const headerField = document.getElementsByClassName('headerAnswer')[0];
    headerField.innerHTML = "";

    Object.entries(header).forEach(([key, value]) => {
        const keyField = document.createElement('div');
        keyField.textContent = String(key);
        headerField.append(keyField);

        const valField = document.createElement('div');
        valField.textContent = String(value);
        headerField.append(valField);
    });
}
