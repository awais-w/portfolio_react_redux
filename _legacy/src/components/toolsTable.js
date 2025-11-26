import React from 'react';
// import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import fedIcon from '../images/fed_icon.png';
import uiIcon from '../images/ui_icon.png';
import uxIcon from '../images/ux_icon.png';

export default function ToolsTable({toolsList}) {
    return (
        <React.Fragment>
            <Col xs="4" className="skills-col ux-col noPad">
                <div className="skills-header">
                    <img alt="UX" src={uxIcon} />
                    <h3>UX</h3>
                </div>
                <hr />
                <ul className="tools-list">
                    { toolsList.ux.map(item => {
                        return (
                            <li key={item.caption} className={item.expert?null:"small"}>
                                <div ><img alt={item.caption} src={item.image}/></div>  
                                <div className="caption">{item.caption}</div>
                            </li>
                        )
                    }) }
                    
                </ul>
            </Col>
            <Col xs="4" className="skills-col ui-col noPad">
                <div className="skills-header">
                    <img alt="UI" src={uiIcon} />
                    <h3>UI</h3>
                </div>
                <hr />
                <ul className="tools-list">
                    { toolsList.ui.map(item => {
                        return (
                            <li key={item.caption} className={item.expert?null:"small"}>
                                <div ><img alt={item.caption} src={item.image}/></div>  
                                <div className="caption">{item.caption}</div>
                            </li>
                        )
                    }) }
                    
                </ul>
            </Col>
            <Col xs="4" className="skills-col dev-col noPad">
                <div className="skills-header">
                    <img alt="FED" src={fedIcon} />
                    <h3>FED</h3>
                </div>
                <hr />
                <ul className="tools-list">
                    { toolsList.dev.map(item => {
                        return (
                            <li key={item.caption} className={item.expert?null:"small"}>
                                <div ><img alt={item.caption} src={item.image}/></div>  
                                <div className="caption">{item.caption}</div>
                            </li>
                        )
                    }) }
                    
                </ul>
            </Col>
        </React.Fragment>
    );
}