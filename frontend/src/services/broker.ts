import {Client, StompHeaders} from "@stomp/stompjs";

let client: Client | null = null
let token: string | null = null

export const broker = {
    connection(callback: (stomp: Client) => void): void {
        if (client === null) {
            client = new Client({brokerURL: "ws://localhost:8081/broker"})
        }

        if (!client.active) {
            client.activate()
        }

        if (!client.connected) {
            setTimeout(() => broker.connection(callback), 1000)
            return
        }

        callback(client)
    },
    headers(): StompHeaders | undefined {
        if (token !== null) {
            return {
                token: token
            }
        }

        return undefined
    },
    publish(domain: string, body: string): void {
        broker.connection(stomp => {
            stomp.publish({
                destination: domain,
                body: body,
                headers: broker.headers()
            })
        })
    },
    subscribe(domain: string, callback: (body: string) => void) {
        broker.connection(stomp => {
            stomp.subscribe(domain, message => callback(message.body), broker.headers())
        })
    },
    unsubscribe(domain: string): void {
        broker.connection(stomp => {
            stomp.unsubscribe(domain)
        })
    }
};
