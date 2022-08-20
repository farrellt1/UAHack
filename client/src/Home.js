import React from "react";
  
// We import all the components we need in our app
import Welcome from "./components/welcome";
import Essential from "./components/essential";
import Support from "./components/support";

export default function Forum() {
    return (
        <div>
            <Welcome />
            <Essential />
            <Support />
        </div>
    );
}