import { ChangeDetectionStrategy, Component } from '@angular/core';

const Reflect = window['Reflect'];

const c = class c { };
Component({})(c);
const DecoratorFactory = Object.getPrototypeOf(Reflect.getOwnMetadata('annotations', c)[0]);

export function ThemeComponent(metadata) {
    return (ctor: Function) => {
        Object.setPrototypeOf(metadata, DecoratorFactory);
        const path = metadata.themeConfig.path + '/demo.css';
        metadata.styles = [require(path)];
        Reflect.defineMetadata('annotations', [metadata], ctor);
    };
};
