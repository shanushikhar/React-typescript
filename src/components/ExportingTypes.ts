export type Event = {
    clickedOneButton: () => void;
    clickedSecondButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
    clickedThirdButton: (
      event: React.MouseEvent<HTMLButtonElement>,
      id: number
    ) => void;
    clickedStringButton: (name: string) => void;
  };