import { FunctionComponent } from "react"
import Paragraph from "./paragraph.tsx"
import React from "react"
import { useMobile } from "./contexts/mobileContext.tsx"

type Props = {
    title: string
    banner?: string
    texts: string[]
    carousel: string // TODO: change type to carousel
    picLeft: boolean
}

const InfoSection: FunctionComponent<Props> = (props: Props) => {
    const { isMobile } = useMobile()

    // CSS
    const contentStyle: React.CSSProperties = {
        margin: '5vh',
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
    }

    const carouselStyle: React.CSSProperties = {
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: isMobile ? props.picLeft ? '' : '2vh'
                    : props.picLeft ? '' : '5vw',
    }

    const profileStyle: React.CSSProperties = {
        width: isMobile ? '15vh' : '20vw',
    }

    const bannerStyle: React.CSSProperties = {
        width: '100%',
    }

    return (
        <div>
            <h2> {props.title} </h2>
            {props.banner && <img style={bannerStyle} src={props.banner} alt="" />}
            <div style={contentStyle}>
                {props.picLeft ? 
                    <>
                        <div style={carouselStyle}>
                            {/*TODO : mettre un carousel à la place de la photo unique */}
                            <img style={profileStyle} src={props.carousel} alt=""/>
                        </div>
                        <div>
                            {props.texts.map((text, index) => (
                                <Paragraph key={index} text={text} />
                            ))}
                        </div>
                    </>
                : 
                    <>
                        <div>
                            {props.texts.map((text, index) => (
                                <Paragraph key={index} text={text} />
                            ))}
                        </div>
                        <div style={carouselStyle}>
                            {/*TODO : mettre un carousel à la place de la photo unique */}
                            <img style={profileStyle} src={props.carousel} alt=""/>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default InfoSection