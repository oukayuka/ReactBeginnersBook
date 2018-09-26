interface Character {
  name: string;
  age: number;
  height?: number;
}

export interface Characters {
  [code: string]: {
    school: string;
    players: Character[];
  };
}

export const characterData: Characters = {
  kitakomachi: {
    school: '北小町高校',
    players: [
      {
        name: '羽咲 綾乃',
        age: 16,
        height: 151,
      },
      {
        name: '荒垣 なぎさ',
        age: 18,
        height: 174,
      },
      {
        name: '泉 理子',
        age: 18,
        height: 163,
      },
    ],
  },
  furejo: {
    school: 'フレゼリシア女子短大付属高校',
    players: [
      {
        name: '志波姫 唯華',
        age: 18,
        height: 165,
      },
      {
        name: 'コニー・クリステンセン',
        age: 16,
      },
      {
        name: '多賀城 ヒナ',
        age: 17,
      },
    ],
  },
};
