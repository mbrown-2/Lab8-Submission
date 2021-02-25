const formatVolumeIconPath = require('../assets/scripts/main');

describe('the volume is ', () => {
    test('mute', () => {
        expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`);
    });

    test('too low', () => {
        expect(formatVolumeIconPath(22)).toBe(`./assets/media/icons/volume-level-1.svg`);
    });

    test('just right', () => {
        expect(formatVolumeIconPath(45)).toBe(`./assets/media/icons/volume-level-2.svg`);
    });

    test('too loud', () => {
        expect(formatVolumeIconPath(87)).toBe(`./assets/media/icons/volume-level-3.svg`);
    });
});