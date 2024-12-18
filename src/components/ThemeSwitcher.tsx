'use client'

import { Button } from '@nextui-org/button'
import { useTheme } from 'next-themes'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      isIconOnly
      radius="full"
      onPress={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
    >
      {theme === 'light' ? <IoMoonOutline size={20} /> : <IoSunnyOutline size={20} />}
    </Button>
  )
}
