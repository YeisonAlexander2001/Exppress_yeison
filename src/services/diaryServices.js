"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.sum = exports.updateDiaryEntry = exports.eliminoDiaryEntry = exports.addDiaryEntry = exports.NoincluyeWeatherInfo = exports.getEntriesWithoutSensitiveInfo = exports.findById = exports.getEntries = void 0;
var diaries_json_1 = require("./diaries.json");
/**
 * ARREGLO (no el json) de entradas de diario,  que inicialmente contiene la información de los 4 registros en diaries.json
 */
var diaries = diaries_json_1["default"]; /* Asercion de Tipos */
/**
 * metodo que devuelve todas las entries (entradas) del diario
 * @returns retorna un array con las entradas
 */
var getEntries = function () { return diaries; };
exports.getEntries = getEntries;
/**
 * Metodo para encontrar una entrada en concreto a traves del Id de tipo number
 * @param id de tipo number
 * @returns una entrada por medio del Id, retorna en concreto un diaryEntry(con un id en concreto)
 */
var findById = function (id) {
    return diaries.find(function (d) { return d.id === id; });
};
exports.findById = findById;
/**
 * @returns retorna los parametros con excepcion del comment (Excepcion del metodo NonSensitiveInfoDiaryEntry)
 * se utiliza el .map para retornar todos los datos excepto el comentario
 */
/**
 * diaries. map????
 */
var getEntriesWithoutSensitiveInfo = function () {
    return diaries.map(function (_a) {
        var id = _a.id, date = _a.date, weather = _a.weather, visibility = _a.visibility;
        return {
            id: id,
            date: date,
            weather: weather,
            visibility: visibility
        };
    });
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
var NoincluyeWeatherInfo = function () {
    return diaries.map(function (_a) {
        var id = _a.id, date = _a.date, comment = _a.comment, visibility = _a.visibility;
        return {
            id: id,
            date: date,
            comment: comment,
            visibility: visibility
        };
    });
};
exports.NoincluyeWeatherInfo = NoincluyeWeatherInfo;
/**
 * Agrega un nuevo diario
 * @param // traemos un DiaryEntry el cual almacenamos en newdiary entry mediante el parametro de id: Math.max el cual
 * nos permite aumentar el uno el orden del id. Con el diaries.push mandamos la informacion al newDiary.
 * @returns
 */
var addDiaryEntry = function (diaryEntryReceivedData) {
    var newDiaryEntry = __assign({ id: Math.max.apply(Math, diaries.map(// [1,2,4,5,9,11]
        function (// [1,2,4,5,9,11]
        diary) { return diary.id; } // Lo que se retorna para cada una de las posiciones del arreglo
        )) + 1 }, diaryEntryReceivedData);
    diaries.push(newDiaryEntry);
    return newDiaryEntry;
};
exports.addDiaryEntry = addDiaryEntry;
var eliminoDiaryEntry = function (diaryEntryId) {
    diaries = diaries.filter(function (valor) {
        return valor.id !== diaryEntryId;
    });
};
exports.eliminoDiaryEntry = eliminoDiaryEntry;
var updateDiaryEntry = function (diaryEntryInput, fieldsToUpdate) {
    var newDiaryEntry = __assign(__assign({}, diaryEntryInput), fieldsToUpdate);
    document.write('se actualizo');
    return newDiaryEntry;
};
exports.updateDiaryEntry = updateDiaryEntry;
var sum = function (a, b) {
    return a + b;
};
exports.sum = sum;
