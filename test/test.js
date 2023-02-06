var assert = require('assert');
const Comparitor = require( "../src/index" );

// Rest with mocha, mocha --recursive

describe('Comparitor Function Testing', function () {

    it('byteAryToString: with version V', function () {
        assert.equal(
            Comparitor.aryToStr(
                [
                        118,
                        49,
                        46,
                        56,
                        46,
                        49,
                        0,
                    ]
            )
            , "v1.8.1"
        );
    });

    it('byteAryToString: without version V', function () {
        assert.equal(
            Comparitor.aryToStr(
                [
                    118,
                    49,
                    46,
                    56,
                    46,
                    49,
                    0,
                ], true
            )
            , "1.8.1"
        );
    });

    it('compByAry: identical arys', function () {
        assert.equal(
            Comparitor.compWithAry(
                [
                    118,
                    49,
                    46,
                    56,
                    46,
                    49,
                    0,
                ]
                , [
                    118,
                    49,
                    46,
                    56,
                    46,
                    49,
                    0
                ]
            )
            , true
        );
    });

    it('compByAry: arys with null chart', function () {

        assert.equal(
            Comparitor.compWithAry(
                [
                    118,
                    49,
                    46,
                    56,
                    46,
                    49,
                    0,
                ]
                , [
                    118,
                    49,
                    46,
                    56,
                    46,
                    49
                ]
            )
            , true
        );
    });

    it('compByAry: different arys', function () {

        assert.equal(
            Comparitor.compWithAry(
                [
                    118,
                    49,
                    46,
                    56,
                    46,
                    49,
                    0,
                ]
                , [
                    117,
                    49,
                    46,
                    56,
                    46,
                    49
                ]
            )
            , false
        );

    });

    it('compWithStr:', function () {

        assert.equal(
            Comparitor.compWithStr(
                [
                    118,
                    49,
                    46,
                    56,
                    46,
                    49,
                    0,
                ]
                , "v1.8.1"
                , false
            )
            , true
        );

        assert.equal(
            Comparitor.compWithStr(
                [
                    118,
                    49,
                    46,
                    56,
                    46,
                    49,
                    0,
                ]
                , "v1.8"
                , false
            )
            , false
        );

        assert.equal(
            Comparitor.compWithStr(
                [
                    118,
                    49,
                    46,
                    56,
                    46,
                    49,
                    0,
                ]
                , "1.8.1"
                , true
            )
            , true
        );

        assert.equal(
            Comparitor.compWithStr(
                [
                    118,
                    49,
                    46,
                    56,
                    46,
                    49
                ]
                , "1.8.1"
                , true
            )
            , true
        );

        assert.equal(
            Comparitor.compWithStr(
                [
                    117,
                    49,
                    46,
                    56,
                    46,
                    49,
                    0
                ]
                , "v1.8.1"
                , false
            )
            , false
        );

    });

});
