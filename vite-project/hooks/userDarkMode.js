import React, { useEffect, useState } from 'react'

const userDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode')

        return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-sheme:dark)').matches;
    })
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
    }, [isDarkMode])
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }
    return [isDarkMode, toggleDarkMode]
}

export default userDarkMode
