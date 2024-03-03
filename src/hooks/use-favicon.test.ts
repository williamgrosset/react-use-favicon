import { renderHook, act } from '@testing-library/react'
import useFavicon from './use-favicon'

describe('useFavicon', () => {
  beforeEach(() => {
    const favicon = document.createElement('link')
    favicon.type = 'image/x-icon'
    favicon.rel = 'favicon icon'
    favicon.href = '/assets/favicon.ico'
    favicon.id = 'test-favicon'

    document.head.appendChild(favicon)
  })

  it('should be defined', () => {
    expect(useFavicon).toBeDefined()
  })

  it('should render the hook', () => {
    const { result } = renderHook(() => useFavicon())

    expect(result.current).toBeDefined()
  })

  it('should fetch the current favicon', () => {
    const { result } = renderHook(() => useFavicon())

    expect(result.current.favicon?.href).toBe(
      'http://localhost/assets/favicon.ico'
    )
  })

  it('should update the favicon', () => {
    const { result } = renderHook(() => useFavicon())

    act(() => {
      result.current.update('/assets/favicon-two.ico')
    })

    expect(result.current.favicon?.href).toBe(
      'http://localhost/assets/favicon-two.ico'
    )
  })

  it('should restore the favicon', () => {
    const { result } = renderHook(() => useFavicon())

    act(() => {
      result.current.update('/assets/favicon-two.ico')
      result.current.restore()
    })

    expect(result.current.favicon?.href).toBe(
      'http://localhost/assets/favicon.ico'
    )
  })
})
