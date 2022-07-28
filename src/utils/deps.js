export default class Deps {

    static #instance = new Map();

    static get(type) {
        return this.#instance.get(type)
        ?? this.add(type, new type());
    }

    static add(type, instance) {
        return this.#instance
        .set(type, instance)
        .get(type)
    }

};


