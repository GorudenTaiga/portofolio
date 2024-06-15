import React from 'react'
import {useRef, useEffect} from 'react'
import { useTypewriter } from 'react-simple-typewriter'

function useDocumentTitle(title) {
    const defaultTitle = useRef(document.title)
    useEffect(() => {
        document.title = title
    }, [title])
}

export default useDocumentTitle