import { createSignal, createEffect } from "solid-js";
import Category1 from "./Category1";

export default function Category1Group(props) {
    const [selectedIndex, setSelectedIndex] = createSignal(null);
    const changeSelected = (index) => {
        setSelectedIndex(index);
        
        const url = new URL(window.location.href);
        url.searchParams.set('categoryPath', props.items[index].categoryFullCode);
        window.history.pushState(null, '', url.toString());

        const event = new Event('urlChangeCategory1');
        window.dispatchEvent(event);
    };
    createEffect(() => {
        if (selectedIndex() === null) {
            changeSelected(0);
        }
    });
    

    return (
        <div>
            {props.items.map((category, index) => (
                <Category1
                    index={index}
                    title={category.categoryTitle}
                    icon={category.categoryIcon}
                    selected={selectedIndex() == index}
                    onSelect={() => changeSelected(index)}
                />
            ))}
        </div>
    );
}