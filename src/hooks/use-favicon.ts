import { useState, useEffect } from 'react'

interface UseFavicon {
  url: string
  update: (src: string) => void
  restore: () => void
}

export default function useFavicon(): UseFavicon {
  const [faviconUrl, setFaviconUrl] = useState<string>('')
  const [originalUrl, setOriginalUrl] = useState<string>('')

  useEffect(() => {
    const link =
      document.querySelector<HTMLLinkElement>("link[rel*='icon']") ?? undefined

    if (link) {
      setFaviconUrl(link.href)
      setOriginalUrl(link.href)
    }
  }, [])

  const update = (src: string) => {
    const link =
      document.querySelector<HTMLLinkElement>("link[rel*='icon']") ??
      document.createElement('link')
    link.type = 'image/x-icon'
    link.rel = 'shortcut icon'
    link.href = src

    document.head.appendChild(link)
    setFaviconUrl(link.href)
  }

  const restore = () => {
    const link =
      document.querySelector<HTMLLinkElement>("link[rel*='icon']") ?? undefined

    if (link && link.href !== originalUrl) {
      link.href = originalUrl

      document.head.appendChild(link)
      setFaviconUrl(link.href)
    }
  }

  return {
    url: faviconUrl,
    update,
    restore
  }
}
