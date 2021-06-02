import getUrlWithParamsConfig from "./getUrlWithParamsConfig";

describe('getUrlWithParamsConfig', () => {
    test('Должна принимать 2 аргумента "getPokemons" и пустой объект, на выходе получить объект с полями pathname, protocol, host и пустым query', () =>{


        const url = getUrlWithParamsConfig('getPokemons', {});

        expect(url).toEqual({
            protocol: 'http',
            host: 'zar.hosthot.ru',
            pathname: '/api/v1/pokemons',
            query: {}
        });
    });

    test('Должна принимать 2 аргумента "getPokemons" и {id: 25}, на выходе получить объект с полями pathname, protocol, host и query с полями name равное Pikachu', () =>{


        const url = getUrlWithParamsConfig('getPokemons', {id: 25});

        expect(url).toEqual({
            protocol: 'http',
            host: 'zar.hosthot.ru',
            pathname: '/api/v1/pokemon/25',
            query: {}
        });
    });
});