import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { InputGroup, Input, Form } from 'reactstrap';
class Media extends Component {
    static propTypes = {
        layers: PropTypes.array,
        activeLayer: PropTypes.number,
        activeKey: PropTypes.number
    };

    render() {
        const btn_colors = ["MediumSeaGreen", "LimeGreen", "cornflowerblue", "violet", "tomato", "orange"];
        const colori = btn_colors[this.props.activeKey];
        let activeObj = null;
            
        return (
            <div id="layers" className="col-9 p-0 m-0" style={{ height: "450px", background: colori, color: "ivory" }}>
                <div className="row">
                    <div className="col-9">
                        <div style={{ background: "white", backgroundImage: `url("https://ipfs.io/ipfs/QmTNbkJ5x3iY4VEiEUARfrCreqBZ3tXHU3oFnsUK7QnDie")`, width: "750px", height: "430px", overflow: "hidden", position: "relative", top: "10px", left: "10px" }}>
                            {console.log(this.props.layers),

                                this.props.layers.map(laya => (

                                    <div key={laya.key} style={{ width: "750px", height: "430px", position: "absolute", top: "0", left: "0", overflow: "hidden" }}>
                                        {

                                             
                                         (this.props.activeKey === 0) ? activeObj = laya.obj.top : null,
                                                (this.props.activeKey === 1) ? activeObj = laya.obj.mid : null,
                                                    (this.props.activeKey === 2) ? activeObj = laya.obj.start : null,
                                                        (this.props.activeKey === 3) ? activeObj = laya.obj.low : null,
                                                            (this.props.activeKey === 4) ? activeObj = laya.obj.bottom : null,
                                                                (this.props.activeKey === 5) ? activeObj = laya.obj.custom : null

                                            }
                                                        {

                                           // console.log(laya.key, this.props.layers[laya.key], "media log"), this.props.layers[laya.key].obj.start 
                                           activeObj ?
                                            <img id="layers[layer].obj.alpha" src={`https://ipfs.io/ipfs/${laya.path}`} style={{ position: "absolute", top: `${activeObj.y}px`, left: `${activeObj.x}px`, width: `${(activeObj.z / 100 * ((750) - 20))}px`, opacity: `${activeObj.o / 100}`, transform: `rotate(${activeObj.r}deg)` }} />
                                            :
                                            <img id="layers[layer].obj.alpha" src={`https://ipfs.io/ipfs/${laya.path}`} style={{ position: "absolute", top: `${laya.obj.alpha.y}px`, left: `${laya.obj.alpha.x}px`, width: `${(laya.obj.alpha.z / 100 * ((750) - 20))}px`, opacity: `${laya.obj.alpha.o / 100}`, transform: `rotate(${laya.obj.alpha.r}deg)` }} />
                                        }
                                    </div>
                                ))}
                        </div>
                    </div>

                </div>
            </div >

        );
    }
}

const mapStateToProps = state => ({
    layers: state.layerState.layers,
    activeKey: state.layerState.activeKey
});
export default connect(mapStateToProps)(Media);