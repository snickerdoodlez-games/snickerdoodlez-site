
import { CSVRow } from '../types';

const RAW_RHYME_DATA = `
RHYME: -AT,Cat,Bat,Hat,Mat,Rat,Sat,Flat,Splat,Brat,Vat
RHYME: -IGHT,Light,Bright,Night,Sight,Fight,Might,Tight,Flight,Height,Right
RHYME: -AKE,Cake,Lake,Make,Take,Bake,Rake,Snake,Fake,Shake,Wake
RHYME: -OON,Moon,Spoon,Noon,Soon,Balloon,Cartoon,Tycoon,Lagoon,Cocoon,Baboon
RHYME: -AR,Car,Star,Far,Jar,Bar,Scar,Tar,Par,Guitar,Avatar
RHYME: -ICE,Ice,Mice,Rice,Dice,Price,Slice,Twice,Spice,Nice,Vice
RHYME: -AIL,Tail,Snail,Pail,Nail,Mail,Sail,Rail,Trail,Fail,Hail
RHYME: -EE,Tree,Bee,Knee,See,Free,Glee,Three,Agree,Flee,Spree
RHYME: -OCK,Sock,Rock,Lock,Clock,Block,Dock,Mock,Stock,Shock,Flock
RHYME: -UG,Bug,Rug,Mug,Hug,Tug,Plug,Slug,Drug,Jug,Shrug
RHYME: -AN,Pan,Fan,Man,Can,Van,Ran,Plan,Scan,Span,Tan
RHYME: -IP,Lip,Sip,Dip,Hip,Tip,Rip,Flip,Slip,Trip,Grip
RHYME: -ELL,Bell,Shell,Well,Tell,Sell,Fell,Smell,Spell,Swell,Yell
RHYME: -OP,Top,Hop,Pop,Mop,Stop,Shop,Drop,Cop,Crop,Prop
RHYME: -UNK,Junk,Trunk,Bunk,Sunk,Chunk,Skunk,Punk,Drunk,Shrunk,Funk
RHYME: -ASH,Cash,Dash,Bash,Mash,Rash,Flash,Splash,Crash,Trash,Sash
RHYME: -INE,Line,Mine,Fine,Dine,Nine,Pine,Shine,Vine,Wine,Spine
RHYME: -OLD,Cold,Gold,Hold,Told,Sold,Bold,Fold,Mold,Scold,Wold
RHYME: -ING,King,Ring,Sing,Wing,Swing,Bring,Spring,String,Thing,Cling
RHYME: -EET,Feet,Sweet,Meet,Street,Sheet,Greet,Tweet,Fleet,Beet,Sleet
RHYME: -ACK,Back,Sack,Pack,Rack,Black,Track,Stack,Snack,Crack,Quack
RHYME: -AME,Name,Game,Same,Tame,Fame,Lame,Frame,Flame,Blame,Shame
RHYME: -EST,Best,Nest,Rest,Test,West,Chest,Guest,Quest,Pest,Vest
RHYME: -ICK,Kick,Pick,Sick,Tick,Lick,Brick,Stick,Quick,Click,Trick
RHYME: -OT,Hot,Pot,Cot,Dot,Lot,Not,Rot,Slot,Spot,Plot
RHYME: -UMP,Jump,Bump,Lump,Pump,Dump,Hump,Stump,Thump,Grump,Clump
RHYME: -IDE,Ride,Hide,Side,Wide,Tide,Slide,Glide,Bride,Pride,Guide
RHYME: -ORE,More,Store,Core,Bore,Sore,Score,Shore,Snore,Floor,Door
RHYME: -OUT,Out,Shout,Scout,Spout,Trout,Snout,Stout,Doubt,Sprout,Gout
RHYME: -UN,Sun,Run,Fun,Bun,Gun,Nun,Pun,Stun,Spin,Ton
RHYME: -ED,Red,Bed,Fed,Led,Shed,Sled,Wed,Bred,Fled,Pled
RHYME: -OLOGY,Biology,Geology,Zoology,Psychology,Theology,Mythology,Ecology,Anthology
RHYME: -UTION,Solution,Pollution,Evolution,Revolution,Constitution,Execution,Distribution
RHYME: -ENTAL,Mental,Dental,Rental,Fundamental,Parental,Accidental,Continental,Instrumental
RHYME: -ITY,City,Pity,Witty,Gritty,Ability,Stability,Fragility,Hostility,Utility
RHYME: -ATE,Create,Debate,Estate,Inflate,Relate,Translate,Mandate,Vibrate
RHYME: -IOUS,Curious,Furious,Glorious,Serious,Various,Mysterious,Delirious,Hilarious
RHYME: -ACTION,Action,Fraction,Traction,Reaction,Attraction,Distraction,Transaction
RHYME: -ERSE,Verse,Reverse,Diverse,Converse,Universe,Traverse,Adverse,Disperse
RHYME: -ENCE,Defense,Expense,Immense,Pretense,Suspense,Intense,Offense,Incense
RHYME: -CTURE,Picture,Structure,Fracture,Lecture,Puncture,Stricture,Texture,Mixture
RHYME: -IZE,Realize,Organize,Recognize,Analyze,Criticize,Memorize,Visualize,Apologize
RHYME: -SION,Vision,Division,Collision,Revision,Decision,Precision,Invasion,Persuasion
RHYME: -ATOR,Creator,Debator,Elevator,Operator,Generator,Decorator,Calculator,Simulator
RHYME: -ISTIC,Artistic,Realistic,Optimistic,Pessimistic,Statistic,Logistic,Ballistic,Mystic
`;

let cachedRhymeData: CSVRow[] | null = null;

export const getRhymeData = (): CSVRow[] => {
  if (cachedRhymeData) return cachedRhymeData;

  const lines = RAW_RHYME_DATA.trim().split('\n');
  const data: CSVRow[] = [];
  let idCounter = 60000;

  lines.forEach(line => {
    if (!line.includes(',')) return;
    
    const parts = line.split(',')
        .map(s => s.trim().toLowerCase()) 
        .filter(s => s.length > 0 && s.length <= 14); // STRICT LIMIT
        
    if (parts.length < 5) return;

    // First part is category name, rest are words
    const catName = parts[0].toUpperCase();
    const words = parts.slice(1);

    if (words.length >= 4) {
        data.push({
            id: (idCounter++).toString(),
            name: catName,
            words: words
        });
    }
  });

  cachedRhymeData = data;
  return data;
};
