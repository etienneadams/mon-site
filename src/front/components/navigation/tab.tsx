import React from "react";
import { FunctionComponent } from "react";
import Colors from "../../colors/colors.tsx";

type Props = {
    label: string;
}
const Tab: FunctionComponent<Props> = (props: Props) => {


    // CSS
    const colors = Colors();

    const divStyle: React.CSSProperties = {
        backgroundColor: colors.mainGreen,
        color: 'white',
    };

    return (
        <div style={divStyle}>
            {props.label}
        </div>
    );
};

export default Tab;