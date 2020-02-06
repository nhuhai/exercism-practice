enum Color {
  BLACK,
  BROWN,
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BLUE,
  VIOLET,
  GREY,
  WHITE,
};

export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw 'At least two colors need to be present';
    }

    this.colors = colors;
  }

  value = (): number => {
    const firstColor = <keyof typeof Color> this.colors[0].toUpperCase();
    const firstNumber = Color[firstColor];

    const secondColor = <keyof typeof Color> this.colors[1].toUpperCase();
    const secondNumber = Color[secondColor];

    return parseInt(`${firstNumber}${secondNumber}`, 10);
  };
}