import { createSignal } from 'solid-js';

export default function Category3Scopes(props) {
    const [scopes, setScopes] = createSignal([]);

    function parseScopes() {
        const parsedScopes = JSON.parse(props.scopes);
        setScopes(parsedScopes);
    }

    parseScopes();

    return (

        <>
            {props.selected && scopes().map((scope) => (
                <div key={scope.scope_code} class='col-md-6 mb-3'>
                    <h5 class="font-weight-bold" style="border-bottom: 2px solid red;">{scope.scope_title}</h5>
                    {scope.documents.map((document) => (
                        <p key={document.document_id}><a href="#" style="color:darkred;">{document.document_title}</a></p>
                    ))}
                </div>
            ))}
        </>
    );
}
