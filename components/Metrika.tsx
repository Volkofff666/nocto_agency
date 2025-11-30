'use client'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'

export function Metrika() {
  const pathName = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // @ts-ignore
    if (typeof window.ym !== 'undefined') {
        // @ts-ignore
        window.ym(102084820, 'hit', window.location.href) 
    }
  }, [pathName, searchParams])

  return (
    <Script 
      id="yandex-metrika" 
      strategy="lazyOnload" // <-- ГЛАВНОЕ ИЗМЕНЕНИЕ: Грузим когда всё остальное уже готово
    >
      {`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(102084820, "init", { 
             clickmap:true,
             trackLinks:true,
             accurateTrackBounce:true,
             webvisor:true
        });
      `}
    </Script>
  )
}
