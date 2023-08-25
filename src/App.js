import { useEffect, useState } from "react";
import "./App.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { showHelpText,changeTheme,setMarkdownText } from "./store/markdownSlice";

function App() {
  const dispatch = useDispatch();
  const { isShowingHelp, textHelp, markdownText, theme } = useSelector(
    (state) => state.markdown
  );
  console.log(isShowingHelp);
  console.log(textHelp);
  console.log(markdownText);
  console.log(theme);


  useEffect(() => {
    if (!theme) {
        document.body.style.backgroundColor = 'rgb(39,39,42)';
        document.body.style.color = '#fff'
    } else {
        document.body.style.backgroundColor = 'rgb(249,250,251)';
        document.body.style.color = '#000'
    }
}, [theme]);
  return (
    <div className={theme ?  "container" : "container"} >
      <div className={theme ? "header" : "header dark"} >
        <h1>Markdown Previewer</h1>
        <div className="buttons">
          <button  
          
          onClick={()=> dispatch(changeTheme())}>
            {!theme && <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>}
            {theme && <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>}
          </button>
          <button onClick={() => dispatch(showHelpText())}><strong>?</strong></button>
        </div>
      </div>
      <div className="App">
        {!isShowingHelp && (
          <textarea
            autoFocus
            className={theme? "textarea":"textarea dark"}
            value={markdownText}
            onChange={(e) => dispatch(setMarkdownText(e.target.value))}
          />
        )}
        {isShowingHelp && (
          <textarea
            autoFocus
            className={theme? "textarea":"textarea dark"}
            value={textHelp}
          />
        )}
        {!isShowingHelp && (
          <ReactMarkdown children={markdownText} 
          className={theme ? "markdown":"markdown dark"}
          />
        )}
        {isShowingHelp && (
          <ReactMarkdown children={textHelp} className="markdown" />
        )}
      </div>
      <div className="footer">
      <ul className={theme? "infoli": "infoli dark"}>
        <li className={theme ? "li1": "li1 dark"}>
          <a href="https://www.linkedin.com/in/yusuf-efe-30513222b/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="28"
              height="28"
              focusable="false"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
          linkedln
        </li>

        <li className={theme ? "li2": "li2 dark"}>
          <a href="https://github.com/Yusufefe16">
            <svg
              height="28"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="28"
              data-view-component="true"
              class="octicon octicon-mark-github v-align-middle color-fg-default"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </a>
          github
        </li>
      </ul>
      </div>
    </div>
  );
}

export default App;
