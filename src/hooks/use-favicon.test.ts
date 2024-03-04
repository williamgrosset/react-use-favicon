import { renderHook, act } from '@testing-library/react'
import useFavicon from './use-favicon'

describe('useFavicon', () => {
  beforeEach(() => {
    const favicon = document.createElement('link')
    favicon.type = 'image/x-icon'
    favicon.rel = 'shortcut icon'
    favicon.href = '/assets/favicon.ico'

    document.head.appendChild(favicon)
  })

  it('should fetch the current favicon', () => {
    const { result } = renderHook(() => useFavicon())

    expect(result.current.url).toBe('http://localhost/assets/favicon.ico')
  })

  it('should update the favicon', () => {
    const { result } = renderHook(() => useFavicon())

    act(() => {
      result.current.update('/assets/favicon-two.ico')
    })

    expect(result.current.url).toBe('http://localhost/assets/favicon-two.ico')
  })

  it('should restore the favicon', () => {
    const { result } = renderHook(() => useFavicon())

    act(() => {
      result.current.update('/assets/favicon-two.ico')
      result.current.restore()
    })

    expect(result.current.url).toBe('http://localhost/assets/favicon.ico')
  })
})
