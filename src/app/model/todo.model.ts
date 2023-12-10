export class Todo {
    public id!: number | string;
    public name!: string;
    public description?: string;
    public done: boolean = false;
    public addedIn!: number;
    public deadline!: number;

    constructor() {

    }
}