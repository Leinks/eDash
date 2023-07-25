import { MoonIcon, SunIcon, DesktopIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"

export function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
  )
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
  // console.log(darkQuery)
  const options = [
    {
      title: 'dark',
      icon: <MoonIcon className="w-4 h-4" />
    },
    {   
      title: 'light',
      icon: <SunIcon className="w-4 h-4" />
    },
    {    
      title: 'system',
      icon: <DesktopIcon className="w-4 h-4" />
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
            <div className="fixed top-5 right-5 duration-800 dark:bg-black bg-gray-200 rounded">

            {
            options?.map(opt=>(
                <button 
                key={opt.title}
                onClick={() => setTheme(opt.title)}
                className={`w-6 h-6 leading-8 text-lg rounded-full m-1 px-1  ${theme === opt.title && 'text-sky-700'}`}>
                {opt.icon}
                </button>

            ))
            }

        </div>
    )


}