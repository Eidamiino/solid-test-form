import { createSignal, createEffect } from "solid-js";
import Category2 from "./Category2";
import { urlParams, events } from "../constants";


export default function Category2Group(props) {
    const [selectedIndex, setSelectedIndex] = createSignal(null);
    const changeSelected = (index) => {
        setSelectedIndex(index);
        
        const url = new URL(window.location.href);
        url.searchParams.set(urlParams.categoryPath, props.items[index].categoryFullCode);
        window.history.pushState(null, '', url.toString());

        const event = new Event(events.categoryChanged);
        window.dispatchEvent(event); 

        const indexEvent = new Event(events.resetIndexes2)
        window.dispatchEvent(indexEvent)
    };
    createEffect(() => {
        if (selectedIndex() === null) {
            changeSelected(0);
        }
        window.addEventListener(events.resetIndexes, resetSelectedIndex);
    });

    const resetSelectedIndex = () => {
        changeSelected(0)
    }

    

    return (
        <>
            {props.items.map((category, index) => (
                <Category2
                    index={index}
                    title={category.categoryTitle}
                    icon={category.categoryIcon}
                    selected={selectedIndex() == index}
                    onSelect={() => changeSelected(index)}
                />
            ))}
        </>
    );
}