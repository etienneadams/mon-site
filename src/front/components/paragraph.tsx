import React from "react"
import { FunctionComponent } from "react"

type Props = {
    text: string
}

const Paragraph: FunctionComponent<Props> = (props: Props) => {

    const bigFirstLetter = (text: string) => {
        let firstLetter = text.substring(0,1)
        return (
            <p><b style={firstLetterStyle}>{firstLetter}</b>{text.substring(1)}</p>
        );
    }

    // CSS 
    const textStyle: React.CSSProperties = {
        textAlign: 'justify',
        textJustify: 'auto',
        fontSize: '2vw',
    }

    const firstLetterStyle : React.CSSProperties = {
        fontSize: '3.5vw',
        fontWeight: 'bold',
    }
    
    return (
        <p style={textStyle}>
            {bigFirstLetter(props.text)}
        </p>
    )
}

export default Paragraph