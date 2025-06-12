'use client'

import { useEffect, useState } from 'react'
import SplashCursor from '../_ui/animations/SplashCursor/SplashCursor'

const SplashCursorWrapper = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768)
    }
    setIsDesktop(window.innerWidth > 768)

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return isDesktop ? (
    <SplashCursor DENSITY_DISSIPATION={12} />
  ) : (
    <SplashCursor
      DENSITY_DISSIPATION={12}
      SIM_RESOLUTION={64} // Reduced from 128
      DYE_RESOLUTION={512} // Reduced from 1440
      CAPTURE_RESOLUTION={256} // Reduced from 512
      PRESSURE_ITERATIONS={10} // Reduced from 20
      SHADING={false} // Disable shading for extra performance
    />
  )
}

export default SplashCursorWrapper