import { createEffect } from "solid-js";
export default function Category(props) {
    var highlightedFullCodeLevel1 = ""
    var highlightedFullCodeLevel2 = ""
    var highlightedFullCodeLevel3 = ""
    createEffect(() => {
        //kazdy update
        let splitCategoryPath = (props.categoryPath).split(".")
        console.log("rozdelena" + splitCategoryPath)

        highlightedFullCodeLevel1 = splitCategoryPath[0]
        if (splitCategoryPath[1]) highlightedFullCodeLevel2 = splitCategoryPath[1]
        if (splitCategoryPath[2]) highlightedFullCodeLevel3 = splitCategoryPath[2]

    })

    return (
        <div>
            <p>CategoryPath: {props.categoryPath}</p>
        </div>
    );
}