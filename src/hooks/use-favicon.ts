import { useCallback, useEffect, useState } from 'react'

interface UseFavicon {
  url: string
  update: (src: string) => void
  restore: () => void
}

const FAVICON_SELECTOR = "link[rel*='icon']"

export default function useFavicon(
  selectors: string = FAVICON_SELECTOR
): UseFavicon {
  const [url, setUrl] = useState<string>('')
  const [originalUrl, setOriginalUrl] = useState<string>('')

  useEffect(() => {
    const link = document.querySelector<HTMLLinkElement>(selectors) ?? undefined

    if (link) {
      setUrl(link.href)
      setOriginalUrl(link.href)
    }
  }, [selectors])

  const update = useCallback(
    (src: string) => {
      const link =
        document.querySelector<HTMLLinkElement>(selectors) ??
        document.createElement('link')
      link.type = 'image/x-icon'
      link.rel = 'shortcut icon'
      link.href = src

      document.head.appendChild(link)
      setUrl(link.href)
    },
    [selectors]
  )

  const restore = useCallback(() => {
    const link = document.querySelector<HTMLLinkElement>(selectors) ?? undefined

    if (link && link.href !== originalUrl) {
      link.href = originalUrl

      document.head.appendChild(link)
      setUrl(link.href)
    }
  }, [selectors, originalUrl])

  return {
    url,
    update,
    restore
  }
}
