import { createSignal } from "solid-js";
import Category1 from "./Category1";

export default function Category1Group(props) {
    const [selectedIndex, setSelectedIndex] = createSignal(null);
    const changeSelected = (index) => {
        setSelectedIndex(index);
        
        const url = new URL(window.location.href);
        url.searchParams.set('categoryPath', props.titles[index]);
        window.history.pushState(null, '', url.toString());

        const event = new Event('urlChangeCategory1');
        window.dispatchEvent(event);
    };

    return (
        <div>
            {props.titles.map((title, index) => (
                <Category1
                    index={index}
                    title={title}
                    icon="fas fa-h"
                    selected={selectedIndex() == index}
                    onSelect={() => changeSelected(index)}
                />
            ))}
        </div>
    );
}