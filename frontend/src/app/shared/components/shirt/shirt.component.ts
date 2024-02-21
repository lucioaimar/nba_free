import { NgStyle } from '@angular/common';
import { Component, InputSignal, Signal, input } from '@angular/core';

@Component({
  selector: 'fnba-shirt',
  standalone: true,
  imports: [NgStyle],
  template: `
    <svg
      [attr.height]="size()"
      [attr.width]="size()"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xml:space="preserve"
      fill="#000000"
      stroke="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          [attr.fill]="color().colorMain"
          d="M355.01,12.346c4.046,22.454,15.52,71.255,43.465,110.234c4.925,6.869,7.011,15.37,6.126,23.775 l-13.859,131.668c-1.551,14.734-2.328,29.54-2.328,44.355v180.793c0,4.875-3.953,8.828-8.828,8.828H132.414 c-4.875,0-8.828-3.953-8.828-8.828V322.379c0-14.816-0.777-29.621-2.328-44.355l-13.859-131.668 c-0.885-8.406,1.203-16.906,6.126-23.775c27.945-38.98,39.418-87.782,43.465-110.234C158.281,5.184,164.479,0,171.755,0h168.489 C347.521,0,353.719,5.184,355.01,12.346z"
        ></path>
        <path
          [attr.fill]="color().colorMain"
          d="M159.244,6.892C162.793,57.29,204.698,97.103,256,97.103s93.207-39.814,96.756-90.211 C350.06,2.735,345.469,0,340.245,0h-168.49C166.531,0,161.94,2.735,159.244,6.892z"
        ></path>
        <path
          [attr.fill]="color().colorSecondary"
          d="M176.552,0c0,43.878,35.57,79.448,79.448,79.448S335.448,43.878,335.448,0H176.552z"
        ></path>
        <path
          [attr.fill]="color().colorMain"
          d="M203.034,0c0,29.252,23.713,52.966,52.966,52.966c29.252,0,52.966-23.713,52.966-52.966H203.034z"
        ></path>
        <g>
          <text x="160" y="250" class="text-[10rem] font-semibold">{{number()}}</text>
        </g>
      </g>
    </svg>
  `,
})
export class ShirtComponent {
  defaultColor: ColorOptions = {
    colorMain: '#ffffff',
    colorSecondary: '#000000',
  };

  color: InputSignal<ColorOptions> = input(this.defaultColor);
  number: InputSignal<string> = input('0');
  size: InputSignal<number> = input(124);
}

export interface ColorOptions {
  colorMain: string;
  colorSecondary: string;
}
