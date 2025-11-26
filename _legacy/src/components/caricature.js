import React from 'react';
import figureHead from '../images/figureHead.png';
import figureArm from '../images/figureArm.png';
import figureBody from '../images/figureBody.png';
import figureSteam from '../images/steam.png';

export default function Caricature() {

    return (
        <div className="caricature animated fadeIn">
            <div className="arm figure">
                <img className="steam" alt="figure" src={figureSteam} />
                <img className="arm-img" alt="figure" src={figureArm} />
            </div>
            <img className="body figure" alt="figure" src={figureBody} />
            <img className="head figure" alt="figure" src={figureHead} />
        </div>
    );

}
