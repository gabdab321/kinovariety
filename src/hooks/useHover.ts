import {RefObject, useEffect, useState} from "react";

export function useHover(ref: RefObject<HTMLElement>): boolean {
    const [isHovered, setIsHovered] = useState<boolean>(false)

    function handleMouseOver() {
        setIsHovered(true)
    }


    function handleMouseOut() {
        setIsHovered(false)
    }

    useEffect(() => {
        ref.current?.addEventListener("mouseover", handleMouseOver)
        ref.current?.addEventListener("mouseout", handleMouseOut)

        return () => {
            ref.current?.removeEventListener("mouseover", handleMouseOver)
            ref.current?.removeEventListener("mouseout", handleMouseOut)
        }
    })

    return isHovered
}