import React from "react"
import { Route } from "react-router-dom"
import { ChorusList } from "./effects/ChorusList"
import { DelayList } from "./effects/DelayList"
import { DistortionList } from "./effects/DistortionList"
import { FlangerList } from "./effects/FlangerList"
import { PhaserList } from "./effects/PhaserList"
import { ReverbList } from "./effects/ReverbList"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/reverb">
                <ReverbList />
            </Route>

            <Route exact path="/distortion">
                <DistortionList />
            </Route>

            <Route exact path="/phaser">
                <PhaserList />
            </Route>

            <Route exact path="/delay">
                <DelayList />
            </Route>

            <Route exact path="/flanger">
                <FlangerList />
            </Route>

            <Route exact path="/chorus">
                <ChorusList /> 
            </Route>
        </>
    )
}