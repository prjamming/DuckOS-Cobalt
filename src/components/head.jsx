import React from "react";
import { useLocalAppearance, useLocalTitle, useLocalIcon, useLocalCustomStyle, useLocalBorderRadius } from "../settings.jsx";
import { doc } from "prettier";

function Head({ defaultTitle }) {
    const [ localAppearance ] = useLocalAppearance();
    const [ localTitle ] = useLocalTitle();
    const [ localIcon ] = useLocalIcon();
    const [ localCustomStyle ] = useLocalCustomStyle();
    const [ localBorderRadius ] = useLocalBorderRadius();

    React.useEffect(() => {
      document.querySelector("#customStyle")?.remove()
      var style = document.createElement("style")
      style.id = "customStyle"
      style.textContent = localCustomStyle
      document.querySelector("head").appendChild(style)
    }, [localCustomStyle]);

    document.body.setAttribute("data-appearance", localAppearance);
    document.body.setAttribute("data-border-radius", localBorderRadius);

    React.useEffect(() => {
        var mainTitle = defaultTitle ? defaultTitle : "Cobalt"
        var title = localTitle || mainTitle || "";    
        document.title = title;
    }, [localTitle]);

    React.useEffect(() => {            
        var icon = localIcon || "/logos/logo.svg"
    
        for (var link of document.querySelectorAll("link[rel*='icon']")) {
          link.href = icon;
        }
      }, [localIcon]);

    React.useEffect(() => {
        document.body.setAttribute("data-appearance", localAppearance);
    }, [localAppearance]);

    React.useEffect(() => {
      document.body.setAttribute("data-border-radius", localBorderRadius);
    }, [localBorderRadius]);

    return <></>;
}

export default Head;