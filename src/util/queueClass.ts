import { proxy } from 'valtio'

interface TypeQueue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    size(): number;
}


class Queue<T> implements TypeQueue<T> {
    private storage: T[] = [];

    constructor(private capacity: number = Infinity) {}

    enqueue(item: T): void{
        if (this.size() === this.capacity) {
            throw Error("Queue has reach max capacity")
        }
        this.storage.push(item);
    }

    dequeue(): T | undefined {
        return this.storage.shift();
    }

    size(): number {
        return this.storage.length;
    }
    
    list(): T[] | undefined {
        return this.storage;
    }


}



export const dogqueue = new Queue<string>

export const myqueue = proxy(new Queue<string>)
