import { MoonIcon, SunIcon, DesktopIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"

export function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
  )
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
  console.log(darkQuery)
  const options = [
    {
      title: 'dark',
      icon: <MoonIcon className="w-5 h-5" />
    },
    {   
      title: 'light',
      icon: <SunIcon className="w-5 h-5" />
    },
    {    
      title: 'system',
      icon: <DesktopIcon className="w-5 h-5" />
    },
  ]
  function onWindowMatch(){
    if(localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)){
      element.classList.add('dark')
    }else{
      element.classList.remove('dark')
    }
  }
  onWindowMatch();
  useEffect(()=> {
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        break;
    
      case 'light':
        element.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        break;

      default:
        localStorage.removeItem('theme')
        onWindowMatch();
        break;
    }
  },[theme])

  darkQuery.addEventListener('change', (e) => {
    if(!('theme' in localStorage)){
      if(e.matches){
        element.classList.add('dark')
      }else{
        element.classList.remove('dark')
      }
    }
  })

    return (
            <div className="fixed top-5 right-5 duration-100 dark:bg-slate-700 bg-gray-100 rounded">

            {
            options?.map(opt=>(
                <button 
                key={opt.title}
                onClick={() => setTheme(opt.title)}
                className={`w-8 h-8 leading-8 text-lg rounded-full m-1 px-1.5 ${theme === opt.title && 'text-sky-600'}`}>
                {opt.icon}
                </button>

            ))
            }

        </div>
    )


}