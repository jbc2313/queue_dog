// This was based off of a blog post from Gleb Irovich
// Thanks for the help Gleb!

interface TypeStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
}

export class Stack<T> implements TypeStack<T> {
    private storage: T[] = [];

    constructor(private capacity: number = Infinity) {}

    push(item: T): void {
        if(this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }

    pop(): T | undefined {
        return this.storage.pop()
    }

    peek(): T | undefined {
        return this.storage[this.size() - 1];
    }

    size(): number {
        return this.storage.length;
    }
    
}

