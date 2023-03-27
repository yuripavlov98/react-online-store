import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Ноутбуки'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Телевизоры'},
            {id: 4, name: 'Игровые консоли'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Xiaomi'},
        ]
        this._devices = [
            {id: 1, name: "12 pro", price: 49990, rating: 0, img: "9a56ba70-de47-47d9-a545-ba78e1206999.jpg"},
            {id: 2, name: "14 pro", price: 119990, rating: 0, img: "5a5ef583-c335-4d4b-91d4-f23b715ba8af.jpg"},
            {id: 3, name: "s23", price: 74990, rating: 0, img: "86d97723-6de0-409c-913f-39e17c4a6ba2.jpg"},
            {id: 4, name: "s23+", price: 94990, rating: 0, img: "e37c2d2a-6dd7-46d9-a1cc-e8610fe528d8.jpg"},
            {id: 5, name: "11", price: 44990, rating: 0, img: "18366e00-bfd2-47d9-9c00-d29a305363f6.jpg"}
            
        ]
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
}

