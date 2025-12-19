
import { CSVRow } from '../types';

const RAW_EMOJI_DATA = `
Faces Happy,😀😃😄😁😆😅🤣😂🙂🙃
Faces Sad,☹️🙁😕😟😔😞😒😏😣😖
Faces Love,🥰😍😘😗😙😚
Faces Sick,🤢🤮🤧😷🤒🤕
Faces Cool,😎🤠🤓
Hand Gestures,👍👎👊✊🤛🤜🤞✌️🤟🤘
Hearts,❤️🧡💛💚💙💜🖤🤍🤎💔
Animals Farm,🐮🐷🐑🐴🐐🐔🐓🐣🦆
Animals Wild,🐒🦍🦧🐺🦊🦝🦁🐯
Animals Sea,🐋🐬🦭🐟🐠🐡🦈🐙🐚
Animals Bugs,🐌🦋🐛🐜🐝🪲🐞🦗🕷️🦂
Plants,💐🌸💮🏵️🌹🌺🌻🌼🌷🌱
Trees,🌲🌳🌴🌵🌾🌿☘️🍀🍁🍂
Fruit,🍇🍈🍉🍊🍋🍌🍍🥭🍎🍏🍐🍑🍒🍓🥝
Veggie,🥑🍆🥔🥕🌽🌶️🥒🥬🥦🧄🧅🍄
Food Prep,🍞🥐🥖🥨🥞🧀🍖🍗🥓🍔🍟🍕🌭🥪🌮
Food Asian,🍱🍲🍛🍜🍝🍠🍢🍣🍤🍥🥮
Sweets,🍦🍧🍨🍩🍪🎂🍰🧁🍫🍬🍭
Drink,🥛☕🍵🍶🍺🍻🥂🍷🥃🍸🍹🧃
Activity,⚽🏀🏈⚾🎾🏐🏉⛳⛸️🎿🛷🥌
Travel Land,🚗🚕🚙🚌🚎🏎️🚓🚑🚒🚐🚚🚛🚜
Travel Air,✈️🛩️🛫🛬🚀🛸🚁
Travel Water,⚓⛵🛶🚤🛳️⛴️🛥️🚢
Sky,☀️🌝🌚🌑🌒🌓🌔🌕🌖
Weather,☁️⛅⛈️🌤️🌥️🌦️🌧️🌨️🌩️
Object,⌚📱📲💻⌨️🖥️🖨️🖱️🖲️🕹️
Book,📔📕📖📗📘📙📚📓📒📃
Money,💰💴💵💶💷💸💳🧾
Office,✉️📧📨📩📤📥📦
Tool,🔨🪓⛏️⚒️🛠️🗡️⚔️🔧
Science,⚗️🔭🔬🧬🧪🧫💊🩺
Clothing Tops,👕👚👔🧥🥋🎽
Clothing Bottoms,👖👙👘👗🧦
Shoes,👞👟🥾👡👠🥿
Flags Red,🇦🇱🇧🇭🇨🇳🇩🇰🇭🇰🇮🇲
Flags Blue,🇦🇷🇦🇺🇧🇼🇫🇮🇬🇷🇭🇳🇮🇱
Flags Stripes,🇦🇹🇧🇪🇧🇬🇨🇮🇪🇪🇫🇷🇩🇪
Cards,♠️♣️♥️♦️
Music,🎼🎵🎶🎹🎻🎺
Stationery,✏️✒️🖋️🖊️🖌️🖍️
Kitchen,🍳🥘🥣🥗🍲🍛
Medical,💉💊🩹🩺🏥
Halloween,🎃👻🕷️🕸️🦇💀
Christmas,🎄🎅🎁❄️⛄🦌
Easter,🐰🥚🐣🌷
Love,💍💒💌💑
Time,⏳⌛⏰⌚🕰️
Audio,🔇🔈🔉🔊
Weather Cold,❄️🌨️☃️⛄
Weather Hot,☀️😎🏖️🏜️
Insects,🐝🐞🦋🦗🕷️
Dinosaurs,🦖🦕🐊🐍
Warning Signs,⚠️🚸⛔🚫
Constellations,♈♉♊♋♌♍♎♏
Shapes Blue,🟦🔷🔹🔵
Shapes Red,🟥🔴🔻🛑
Shapes Yellow,🟨🟡🔶🔸
Shapes Green,🟩🟢📗
Purple Things,🍇🍆👾👿🟣
Orange Things,🍊🥕🦊🏀
Black Things,🖤🎱🎓🕶️
White Things,🤍🦢🏐🦴
Gray Things,🐘🌪️💿🐭
`;

let cachedEmojiData: CSVRow[] | null = null;

export const getEmojiData = (): CSVRow[] => {
  if (cachedEmojiData) return cachedEmojiData;

  const lines = RAW_EMOJI_DATA.trim().split('\n');
  const data: CSVRow[] = [];
  let idCounter = 90000;

  // Check for Intl.Segmenter availability
  const hasSegmenter = typeof Intl !== 'undefined' && 'Segmenter' in Intl;

  lines.forEach(line => {
    if (!line.includes(',')) return;
    
    // Split by the first comma to separate Category Name and Emojis
    const firstCommaIndex = line.indexOf(',');
    const name = line.substring(0, firstCommaIndex).trim();
    const emojiString = line.substring(firstCommaIndex + 1).trim();
    
    let words: string[] = [];

    if (hasSegmenter) {
        // Use Intl.Segmenter to correctly split emojis including ZWJ sequences and skin tones
        // @ts-ignore
        const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
        // @ts-ignore
        const segments = segmenter.segment(emojiString);
        // @ts-ignore
        for (const { segment } of segments) {
            const trimmed = segment.trim();
            if (trimmed.length > 0) {
                words.push(trimmed);
            }
        }
    } else {
        // Fallback for older browsers (might still break some complex emojis)
        words = Array.from(emojiString).filter(char => char.trim().length > 0);
    }

    // Explicitly remove duplicates from the source immediately
    words = Array.from(new Set(words));

    // Filter constraint: "IF A CATEGORY HAS LESS THAN 3 EMOJIS IT CAN NOT BE USED"
    // CHANGED TO 3 FOR NEW GRID LAYOUT
    if (words.length >= 3) {
        data.push({
            id: (idCounter++).toString(),
            name: name,
            words: words
        });
    }
  });

  cachedEmojiData = data;
  return data;
};
