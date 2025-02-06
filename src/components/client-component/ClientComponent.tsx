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
            <p>This is a client component</p>
            <button onClick={() => console.log('clicked')}>Click me!</button>
        </div>
    );
}
