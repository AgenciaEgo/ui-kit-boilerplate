'use client';

import './ClientComponent.scss';

export interface ClientComponentProps {
    label: string;
}

export function ClientComponent({ label }: ClientComponentProps) {
    console.log('hello from client');
    return (
        <div className="client-component">
            <h3>{label}</h3>
            <br />
            This is a client component
        </div>
    );
}
