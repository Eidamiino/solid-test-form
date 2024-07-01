import { Show } from 'solid-js';

export default function Card(props) {
    return (
        <div class="card" classList={{ color: props.color, 'card-outline': props.outline, 'card-outline-tabs': props.outlineTabs, 'card-tabs': props.tabs }}>
            <Show when={props.children.header || props.children.tools || props.children.fullHeader || props.title !== "" || props.icon !== ""}>
                <div class="card-header" style={{ backgroundColor: props.headerBackgroundColor }}>
                    <Show when={!props.children.fullHeader}>
                        <h3 class="card-title">
                            <div style={{ color: props.titleColor }}>
                                <Show when={props.icon !== "" && !props.children.header}>
                                    <i class={props.icon}></i>
                                </Show>
                                <Show when={props.title !== "" && !props.children.header} fallback={props.children.header}>
                                    {props.title}
                                </Show>
                            </div>
                        </h3>
                        <div class="card-tools pull-right">
                            {props.children.tools}
                        </div>
                    </Show>
                </div>
            </Show>
            <div class="card-body" classList={{ 'p-0': props.noPadding }}>
                {props.children}
            </div>
            <Show when={props.children.footer}>
                <div class="card-footer">
                    {props.children.footer}
                </div>
            </Show>
        </div>
    );
}
