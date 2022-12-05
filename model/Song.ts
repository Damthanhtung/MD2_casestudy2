export class Song {
    private _id !: number;
    private _name !: string;
    private _creator !: string;
    private _singer !: string;
    private _type !: string;
    private _releaseDate !: string;
    private _numberOfListens !: number;

    constructor(id: number, name: string, creator: string, singer: string, type: string, releaseDate: string, numberOfListens: number) {
        this._id = id;
        this._name = name;
        this._creator = creator;
        this._singer = singer;
        this._type = type;
        this._releaseDate = releaseDate;
        this._numberOfListens = numberOfListens;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get creator(): string {
        return this._creator;
    }

    set creator(value: string) {
        this._creator = value;
    }

    get singer(): string {
        return this._singer;
    }

    set singer(value: string) {
        this._singer = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get releaseDate(): string {
        return this._releaseDate;
    }

    set releaseDate(value: string) {
        this._releaseDate = value;
    }

    get numberOfListens(): number {
        return this._numberOfListens;
    }

    set numberOfListens(value: number) {
        this._numberOfListens = value;
    }
}