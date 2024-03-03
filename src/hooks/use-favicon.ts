import { useState, useEffect } from 'react'

interface UseFavicon {
  favicon?: HTMLLinkElement
  update: (src: string) => void
  restore: () => void
}

export default function useFavicon(): UseFavicon {
  const [favicon, setFavicon] = useState<HTMLLinkElement | undefined>()
  const [originalHref, setOriginalHref] = useState<string>('')

  useEffect(() => {
    const link =
      document.querySelector<HTMLLinkElement>("link[rel*='icon']") ?? undefined

    if (link) {
      setFavicon(link)
      setOriginalHref(link.href)
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
    setFavicon(link)
  }

  const restore = () => {
    const link =
      document.querySelector<HTMLLinkElement>("link[rel*='icon']") ?? undefined

    if (link && link.href !== originalHref) {
      link.href = originalHref

      document.head.appendChild(link)
      setFavicon(link)
    }
  }

  return {
    favicon,
    update,
    restore
  }
}
