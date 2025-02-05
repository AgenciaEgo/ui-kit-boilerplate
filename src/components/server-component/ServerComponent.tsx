import './ServerComponent.scss';

export interface ServerComponentProps {
    label: string;
}

export function ServerComponent({ label }: ServerComponentProps) {
    console.log('hello from server');
    return (
        <div className="server-component">
            <h3>{label}</h3>
            <br />
            This is a server component
        </div>
    );
}
