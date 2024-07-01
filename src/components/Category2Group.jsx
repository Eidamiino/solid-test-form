import { createSignal } from "solid-js";
import Category2 from "./Category2";

export default function Category2Group(props) {
    console.log("aaa"+props.titles)
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
                <Category2
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