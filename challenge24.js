import NP from 'number-precision';
NP.enableBoundaryChecking(false);

const testInput1 = `esenee`;
const testInput2 = `esew`;
const testInput3 = `nwwswee`;
const testInput4 =
`sesenwnenenewseeswwswswwnenewsewsw
neeenesenwnwwswnenewnwwsewnenwseswesw
seswneswswsenwwnwse
nwnwneseeswswnenewneswwnewseswneseene
swweswneswnenwsewnwneneseenw
eesenwseswswnenwswnwnwsewwnwsene
sewnenenenesenwsewnenwwwse
wenwwweseeeweswwwnwwe
wsweesenenewnwwnwsenewsenwwsesesenwne
neeswseenwwswnwswswnw
nenwswwsewswnenenewsenwsenwnesesenew
enewnwewneswsewnwswenweswnenwsenwsw
sweneswneswneneenwnewenewwneswswnese
swwesenesewenwneswnwwneseswwne
enesenwswwswneneswsenwnewswseenwsese
wnwnesenesenenwwnenwsewesewsesesew
nenewswnwewswnenesenwnesewesw
eneswnwswnwsenenwnwnwwseeswneewsenese
neswnwewnwnwseenwseesewsenwsweewe
wseweeenwnesenwwwswnew`;
const realInput = 
`wwwnewnwwnwewswnwsenwwwnwnwwwnww
wewswseswnwwwwenwnewnwswenwsenee
sesesesesesenewsesesesesesesesesesesese
swnenewneneeeseeswnenweswsenenwnenene
eneeeenenesweneseneeeenew
neseneseewenewswnwsesenwwnenenwene
nwwsewwwnwnwnenwwwenwwwnwwnwswse
nwnenwnewnwsenwnwnwnwnwsenwwnwnwnwnwnwnwnw
seseseseseeseseseseswseseseseswswsenwse
eeweseseeeeenwneewweeseeee
seseeseseseseseweseseneseseseseseesee
seseseseeseseeweseseseneeseseesese
swwnwwwnwnwwnwnwenwnwnwnwwwnwwnwnw
eewsenwseneseseswseenwsesenwseesewsw
wswwwswswswwswswwwwswswweswww
nwnwnwnwwnwnwewnwnwnwseswewnwwnwnwnw
wwswswswswwneswswswwseswwnewwswswsw
swsenwswswswswswwsesweeswsese
eseesenwesesewweeeneeneenewenew
eenwswnwnwnwnwswnwnwnwenwwnwnenewsw
wweweswnwwweswswnwwwwwswwww
swneswwswswswswswseswswswnwswsweseswswsw
wswseseswsesenesesesesewseswseseswnesese
nenwnwwwnwswewnwwwnwwwswnwnwnwnwnw
seseseswswswsenwswswne
swswwnewneswswswswneseswsesese
seswseswseswswsenwseswsewswseswswseesw
wsewwwwwwwswwnewwwwwwwww
sesesesesesenesesesewseseseseseseseswse
enwseswswseswswswswswswswseswseswsesesw
nenenenwneenwneenenenwnwnenenenwswnwsw
enwseeeeeneswseewswnwnenewwe
eewnenwwswswneneeewweeseenesene
eswswnwnwnenwenwneswnwnwnwnenwnwnwnwne
wwseeesenwnwneeewwseweewneesw
seesenwneeseesweseeeeeseseseseese
wwwswswswwswswweswswwswswwswsww
nwnweseswswswswswswswseswseswswswswswsw
eneseneneneeenenenenwnenenwneeneese
senwsenenewnwseewnesesenwsesesesesew
neeeeneneneeneeneeeeweeneesene
swenwsweswsweseswweenwnww
nwnwwwnwwnwwwwwwwnwwnewswwnw
eesenweseeeeswsesese
swseseeseesenwseseseswseswseswsesesew
nenwnewwenenwwswseswesewnenwenwene
wwswwwnwwnwnwnwwwwnwwneww
seneeeeeneenwnwsweseeneeneeweee
nenwswnwswswnwnwnwwnwwnwnenenwnwnwesenwse
neneeswneneeeeneeeneeneneeneeswne
wswsenenwneseswswwnwwweseneswswsene
seseseseseseseswseseneseseswsenewsesesesw
wswseswsesenwneswnwsewwneeswse
swnwswwswswswwswseeswesweeneswswnw
swswneswswswswenwswwswswseswswseswswsw
esesewseeweswsesenwswswswneseswseswse
nwwneswswswswswnweeenwnenwnwnenesewe
seeseewseeseewseseeeseeeseese
newsenwseseseswseesenenewseseseseesesww
wneswswwswswswwswswwswswswswsewswsww
wesesesewewseseewwseseseseeseese
enenwnwnwnwnwnenewnwnwneswenwwnwnwne
seeeseseeseseeeseeeesesesew
swnwnenwnwswnenwnwenwnenwnenwnwnenenwnwnw
nenenenenewneenwneeswswnene
enwnwwnwnwnwswesenwnwswseeewewse
swwnwenenewwnwseeneswenwsewenene
seeseeweesenesenweeeeesesesee
nwnwnwnwnwnwneswwnwnwwnenwnwwsenwnwenw
wswswseseseswswswseneseseswsenenwswseswse
wwwsewwwwswwwwwnwwnewwww
wnwnwwwswewswwswwweww
nwswswswseseeseseseseseseseseseswnesese
eeeeweneneeneeewe
swswswsewswswswsesenwswnwseswswseeew
nwnwnwnwwnwswenwenwneswwnwnwnwnwnwswnwnw
nwnwnwnwnwsenwwnwnwwnenwnwnwnwnwnwnwnwnw
nwneswneswnwswenwneneeneseenewnwnenwse
neewswswswseneseneseswsesewsewswsesww
enwneneneneneneeeeneneseneneneneene
eneeseseeeeseeeeeeeeeswee
seeseeeseneseeeeesesesweseseswnwsee
newnesewswneewnwneeneeneseneenenew
ewsenwnwsweenwnesewnwseseseswsewsenw
ewseseseseseseseseeeeeeseeseewse
wwswswwewwnwwwwwwwwswwwnewsw
eeswneeswnwenwenweseeneesesesenwe
eswswswswnewwnwseswwseseneswnenenwswsw
sesesesenwsenwneseseseneswnenwsewwsenww
neeeeeneeeneseeneeeenweneee
nenwwswwwwwnwwwwwwnww
nwnenwnenwnenwnenenwnwnwnwnenwnwsenewnene
nwwwneswwswswswsweswsewswwswswswswswsw
nenwnwnwnwnwsenwnwsenwnwnwnw
seeeeeeeeeeeeeweesee
nwnwnwnwnwnwnenwnwnwsenenwnwnwnwnenwewnw
eenesesweeeseeneenweswseeeeee
neswsenewnenesenenenesenwneneneneneswwne
sesesewsenwseseseseseseseseseseesesese
seseseseesesesesesesesesesesenwseswsesese
enwswseesewsesesewnesesesewnwseseesw
seseswseneseseseseseseseseseseswsesesese
nwsenwnwnwswwnwnwnwnenwsewnwnewnwnwwe
wesenweswswneneewnenwswswswnwesew
seseseseeseseswseseseseswswsesesenwsesw
wnwswneeneswwnwwswenwnwswnwnenwnesenw
swnenenwnwnwnenwnwnwswnenenesene
neneewnesenenewnewsenwnenenwnwnenenenene
swewwnwwnwwnwwwnewwwswwnw
senwsewswesesenwnesesesesesesesweseswse
seseeeenwseeseseneesewseeew
wnweswnesenewwseswsewwnwwwnese
eeeeseeweseseneeseseeseseneesesw
senewesenewnwswwwnesenwewwnesw
nwnwnwnwnwnwwnwnwnwnwnenwnwnenwe
eeneewneesenenenenenenenenenenenene
sweeneneneswneeneneswneneswnenenwswene
wswwswswweswwswswwnesweswswwsw
eeeeneeenwneneeeeewnesenenenee
sweswswswswswswswswswswwnwswswswswswsw
sesewseseeseenweseeseeeseseesese
swnwswswseswseswswswseseseswswsesenw
sesewsesesenwseseseseseseewneseesese
swwswswswswswswswwswwwswswneswswswsw
eenwseeeeenwneeenwsewswseeswee
swswseseseseseseswseneswswswswseswswsesenw
wwswswnwewwwswswesw
neneneneenwswnenenwwnenwnenw
seswseswswsweswswswwnwswseswseswswswsese
seseseeweseenweseeseesweeneeese
swswwwwwwswwwswwwswwnenwewww
swwwewnewwwwwenewswwwww
eeenenesenwseeneeeew
wwwwnwswswswwwewwwwwwswwswe
seenwseseseseseeneseseeseswseseswsesese
sesewnwesenwnewseswwneneseswseswew
swswswswsweseswswseswswswseseseswswsew
eneenwneenwseeseneeeenwswweswsww
seewneseseseesesesenesenwsesewseeee
sweeesewneweweeeese
nwnwnwnenwnwnwnwnwnenwnwnwnwsenwnwnwnew
wwswswneneswswswswseswswswswswswewswnwsw
wwnwwwwswwnewnewwwsewwwwwnw
sewsesesenweseswsesewswseseneeswsese
seswswswswswswswswswswneswswswswswwsesesw
eeseenesenwsewseneeesenweswnweesw
swseesenwewneseseeseswswnewewnesw
nenesweeeenenewnwneeeneneswnewsene
swwseswsweswseswsesesenwseeswswseswsw
nwnwneswweswesenwnwnwwnwnwnwnenenwwwse
wwwwswwwwnwswwwwwwwewww
eseseneeseswwneweeswswnenwnwneswese
senwwnwnwenenenwsenew
swswswswseswswswneswswswswswswswswseswnw
seswsesenwswseseswseswswswseseswswswswsw
enweenenweesewneeeeeseeswseenenw
neneneneeseweeneneneeeneneneeene
esesenesenwseswseseswseseneseseseseww
eswswsenewseswseswenweswwnwseseswsenw
seseneseseseseseseseseseseewseesesese
nenenenenenenesenenewnenene
swswswswwswswswneswenewswswwswseswwsesw
nwnwwenenwsenwnenwwnenwsenenw
seeneseseesewsewnweneesesewesese
neseeseenweneeeneneweesweeenww
swsesenwseseseseseswsesesesesesesesesese
swwseneseswsewseseseneswseswswseswseeswse
nwnwneewnenwnwnwwwnwnwwnwswwswsese
wwewwwsweswwwnww
swnwnwnwnwnwwnwewnwnwneenwnwnwwswnw
swwwwswwwseneswswwswwwswwswwww
neeseseseseewsesewseenesesesesenenwwse
nwnwwnwnwnwnwnwnwnwnwnwnwsenwwnwnwnwnw
eeweneeeeeeeeeneseeeeee
enwwesweeeneeneneeeseneenenenew
swswsenwswwswweswwswwswswwwwswne
wewnwwnewnwwnwnwnwwnwnwwnwswwswnw
nenwneneneseneeneneeneeneeenenenene
nwwswnewsewnwwwwwnewwww
eneneneesenwneneeneeeswswnesweenwne
wwwwwwwwwwwnwwwwsenwwenww
swswnwesewwswswwwwswswwwwnewswwsw
wwnwwwwwwnwnwnwwwenwwnwww
seesenwseseseseseswswseswseswwnwseswsw
nwnwnwnwnwneneneneswswnenwnenwenwnwnenenw
sewwwsewnewnwnwsenwwnenwnwswnwnwnew
neneseeneeeneneneneeneenwneneneee
sweswewswwswnwnwswswswswsesweswnwwsw
wwnenwenwsenwnwwnwnwwnwnwnwnwwwnw
eneeneweeesewneneeeeneneeeee
swswnewswswswseseseswswswswneswseswswsw
wwnewwswnwewsw
neenwneeeswenweneseneeeneenenese
seswswnwsesesenwswseswseswseeswswswseswse
neneswswswswseswswwswneswswwswsweseneswne
sesewnwwnwnenwnwnwenwnwnewneenwnenw
wswsenwewnewewwswswwswswwswswwwne
senwnwsesesweswswnesewseseseeesee
eeswneneneeneenenenenenenenenenenene
swwseswswswswswswswneswswseseswnewswswswne
eswseswswswswswwswseswswseswneswswnesw
swsesenwwnwswsenwseseeswsesenenenwwse
seesewseseseeeseseseseeeeseeese
swseseswswneswseswswswseseseseswswswsesw
wwwnwwwewnwnwwwwwwwwwswww
nwnenwnenenenenenenenwneneswnenenenwswene
neseneneneseenwnenenenewnewnwnwnenwnww
wwnwweenwwwwwwnwnwwwswwwwnw
wnwwsenwsenewnewnwwnwnwwnwwnwww
wnwwwwnwnwwwwwnwnwwswwnwweww
wswswwwswswwswwwneswwseweswwe
seeneseeeseseweeee
senwnwnwenwnwnwswwnwnwenwnw
eneneeneenwneeswnenenenenewnenenee
swwweeseseeseeeneneseseseseeeene
seseeseseeseeseseseseneseseseseswese
neswsenwswsesesesesenwseseseseeseesesw
senwswnenwnenenenwewnwnwnenwnwnwne
nweenwswseswnwneseneseseswnewseswnwwne
swwwsewwwewwswwwwnwswwwwswnwsw
wnwnwnwenenenenwnwsenwneenwneseswnwswnwnw
neswnenenwneneenenenenwneseweswnenwsene
wwswneneswnwsenewneeneeeenenewsw
eseneeeseeeseseseswseseneewseewe
nwnenwnenwnwnwnwwnwsenenenwsenwnwneswne
wwwsewwwenewwsw
nwnwnenwnesenwwwwwnwnwwnwsewewnw
nwnwenwnwnwnwnwnwnwnwsewnwnwswnwnwnwnww
swnenwnewwnweswswenwnwnwsenwwnwenw
nwnwnwnwnwwenwnwwewwnw
swswnwnewnenenwseswnenenenenenenenwswesene
swswsweeswsewseswsesesesesesewswswsenw
wnwwswswwwswsewswneewswswswwneww
eweeeeweneenee
seeswseneneseneswsewneswsewswswwsese
nenesenwneneneneewneeneeee
wswswwsenewswswewnwwwswsw
wneenenwnwnenwnesenwnwnenwnwnwnwnwwnw
enwseewenwswswnwnwseswswnweswsesenwnw
nwswswsesenenwnwwnenesenwnew
neswwsewwneewswswnewswwnwnwwsesw
nwnenenenwneneeswnenenwnenwneswnwnwnene
neesewnwnwwwwnw
seeseseseweseneeeseesenewseseese
sweneneneneswsweeeesenwnenww
neneneneneneneseneneneneneewenene
seseseenweseseseeseseseseseenwse
seswswswswwwswwwswswswneswswswwnwswsw
swswwswswswnwswsweswswewswswswswweswsw
senenenewnwnenwsene
swnenwnwneswnwnwnenweenwnw
sewwwseseesenesesenwwswseesesenesese
nwnwsenenwnwnwnwwnenwnwnenwnesenwsenenenw
eeeseseeeseseeseeeenweseseee
neseseseswnwsenwsenwsesesenenwsewsesese
eeeeeneeseseseseesewesweeneesese
nwwwwswnewwwwwewenenesesewsenw
wnenenwnwnenesenwnwnenwswnwnenwneeswnwnw
seeswswnwseenesenwsesesenwwenwswwswse
seseseneseseseswseseseneseneseseseswwse
nwnwnwnwnweswenwnwnwnwswnwnwseswewnwse
eeswneeeneeeweeneeenweenenew
swneswswwwnwswwwswnewswseswwewswne
sesenwseseseseseseesesenwsesesesesese
enwseneswwswewwswwewwwwswnenwnww
wwnewwwwwwnwwwwnwsewwwnwwnw
nwswwwswwswwseswswswwwswwwswww
eewnwsweeeeeenweeeenesweseee
seeeseeeeeeseseeseseseseeesenw
neseswsenewseseeswswsewne
nwseseseseseseseswneesewseswswseswsese
swnwnwnwwnesesenww
senwnwwnwneweswnwwsenesewwnewwne
eenwsweeeseeeseseeeeseeseesee
eeseswneseeseeeswesenwseseeseese
eeeseseneesesweeseenweseeesewew
wwwswnweswwswswswswnwswnewseswswsw
nwwswnewseswswswnewwswewwwswseww
swnwswswwsesweswswswswswswswswswswswswse
nwswwswneswnwwweswwwseswwwwswwwsw
ewwnwswwnwnewseww
wwwwwsesewwwwnenwewwnwwseww
seseseesenweseseeseseenwsesenwseswnwswnw
swswsewswswwswnew
neneneneneneneneneswnenenenenenenenenene
wnwswwewwnwsewweneswwwwswweww
seseseseesewswseseseseenenesesesesese
ewswswwswwswwewswwwwnwwsweww
nwnwnwnwwsewnwnwnwnwnenwnwnwnwnwsenewnwnw
seseswswswswnweswsenesesesesenwsesese
nenenwnwwnesenesenwswnenwnwnweewnese
wwwswswswwwewwswwwwwwwswsw
nesewweenwswnesewsewnewnwenwsewse
swnwwwnwwewwewseswwswwswwsww
eseeeeseseeswneseeeesenwse
swswswsesweswswswswswswswswswnwswswnwswswsw
newwneswwwwsewwwswsewwwseneesw
senwswseneeswseseesenwwnesesesweseesese
nwenewneenesenenwneswnwnwsenwnwnenwwnw
eeeeneesweeeenwneweeeneeee
wewwwwwwsewwwwswwswwwneww
nenenwneswewswneneswsenesenew
nwneswnwnwnwneenenenwsenwnwne
nwseweenwnweweeeeswsesenwwee
enwseswwwswwwwnewwwswswswwswswsew
nenewneeneneenenesenenenesenenewnene
seswsweeseswswsewseswswsewnwswsw
nwnwnwnwnwnwneenwnenwnwnwnwnwnwwnwnwnw
eeeneeeeeeswneenwneeeeeswe
senwnenwnwnwnwnwnwnwwnwnenwneenwwnenwse
swwwnwnwwwswwnenwwnwneenweseseew
sesenesewsewneswsesesesenwwesenwsese
newwnwneewsewwswwnwnwwwnwwswnw
nenwwswwnwwwwnw
nenenenwneswneeeenwenenesweneswnenene
nwwswwswwwnesewwwwswwswse
sesenwseswswswseswswswswsw
eesweeeeneee
swewswswsesesweswswswseseseswswswsenw
swswswseseswsenwseseseswsweswswseseswsesw
wwnwenwnwwwsewwewwnwwnwwww
swswswwswswswwswswneswswswwseswswswsw
wewseseenesenwsenwnenwnwnwnwsenwnwnwnw
neneswnenwnenenenenenwneswnenwne
seswweswswseseseswseswswsweseswswswswswnw
swswswwswswwwswwwneswswseswswswswsw
eneneeweeseeeneneewe
nwnwnewseneneeneneseswswnenenenenwnwnenw
wneeeneneneneseneneeswnewneeweese
nwsenwnewnenwnwnwnenwsenenwnesenwnewnwnwnw
eesweeseeeeenweeeeeweeee
nwnwnwwwnwwwnwnewwse
wseseenwnwsenwnwnwnwnenenwnwnwnwswnwnwnw
wnwsenwwnwsewnwnewnwnwwwwwneww
nwsenwnenesenenenwnenenenwnwwnwwnenenenwse
neeseseenesewsewnwnesweeewwneeee
swseseseseseseseeeseseseseesesesesene
eweeeseeneeseeseeseweseesesw
wwnwsenwneswnenenwnenweseneneswnwswne
neewwnesenesenewenenenenenenenenenene
nwnenwnwnwenwnwwnwwswnwnenwnwswswsew
esenenenenenenenenenenenewneneneneseewne
senwseswseswswseeseswseseseseseswsesesese
wnwewwnwwnewsewnwww
seewwseseseseswswseseeseswswseseseswnw
seneseeswnwsesesesesenweesesenwwsee
wwwswwwwweswswww
sesesesewnwsenwsweseweseseeseseenesese
swwwseseseswnwwnenwnwswsw
swseseseesenwswnewsenwseswseseseswnesesw
swswswwwswewswwnwswwwwwswswswsw
neneswseswswnwneswnwswswswswsewswsesw
eeeewenenweeeeesenwseeeew
swseswseswswnwswswseswsweswswswwswswsw
nenenewnwnenenwnenwnenwnenenesenenenenenw
wwwwnewnwwsewwnwwwwwsewnewwnw
nwswswseswswswsenwseswswseswswswswnwsene
nenenwsweneneneeneneewneneewseswnenwne
seseswswseswseswswneswsweswnwenwseswswsw
nwneswnewnwnwseewewneeneswnwnwenesw
senwnwnwnwnwnwnwwswenwnwnewnenwwnwsee
nenenenenenenenwnenenenenenenesenesenewnw
eenenwenweeneneswneneesw
newwwwswnewwnwwwsewwwsewwse
enwnwnesenenwenweswsewseweswnewswse
nwnwnwnwnwnenwnenenwnwnenwnwnwswnwswnenwenw
nenenweeneneneeeneeeneneseenene
eswwsweswsweswswswwswswwsw
eeneneenenenenwneeneneneneeneeneesw
wwwswnwwewwnwnwnwnwnwnwenwnwwnw
swswnwswswswwwswswneswseeswswswswswww
eeneneseneneneneneswnwneeseneenenwne
nwwwseenwnwnwwsww
nwesesenwnwsesweeseseseeseeseesee
weweeeweeneeseeeswseeenwew
wswwwwwwwwsewwewwswwnenew
wewneeeeeesweeeeewswenene
nwwneewsesewswwwnwewwsewnwnwnw
seeseswenwneseeeeeseneseewnwwwnw
neneneswnenenenwnenenenenenenenenenenene
sewnwnwnwwwswnwewnwneswwnesenww
neswsesewswwsenwswnwnweswne
eneeneswneeneeweeeene
swnwsenwnwnwnwnwnwnwnwnwnwnwewnwnwnwnw
eseseseseseseeeesenwseseeseseewse
nwnwnwnwsenwwwnwwwnwnwnenwswnwnesenw
neswneswneseneneneswenenenenenenenewnenw
seenwenweeseswesweeeeeeeese
wnenweswwnwneneneenenenwnwesewnenw
neneneeswenenenenenenenenenwnenenenenene
weneeswnweeweeeseseeeese
wwwwwnewwwswnwwwwwwwwww
nwsenwsesesenwwwnwnwwewnwnwsenwnwnenw
nwnenwwsenenwesenwnwwsewnwnwnenewsw
nwnwnwnenwnwnenwswnwneneneenwsenenwnwnew
neneneneneneneneneneneneneseewnenenenwne
nenewnenwneneeseeewseenenwnenesesw
enewswswswswswswweswswwseswwswswenww
wswswswswswswswswswsweswswneneswswswne
wnwnwnwnwenwswnwwnwwwwnwnwwenwnwnw
seseseewesesenwseseeeseese
nwnesenwnenwnwnenwnwenenwnenwneswnwnenwsw
wesenwneswwswwswnewwswwwewww
sewewnwwewsewnenenwseswwwswweswsw
eswswswseswswwewwwwnenwwnewsww
wnwswwswnwneseswseswswsesesweeesesenene
seseswneneseswseseswnewseseseseswsesew
wwwnwwwwwwwneewnwwwsew
esenewsewseswnese
wnwnwswnwwnewnwwnwnwwnwnwnwwnwww
sewseseswseswneeswseseesesesewsese
wwwswewnwwwwenwnwwnwew
neneseeneeneneneeeneswwnwnwneneeenene
eeeeeneeeeeeeeesweeeene
wwwwswwwwwnwwwsewwnewwwwne
swsenwswsewneswswswswswswseneswswsw
nenewweneeseenesenwnenwwneeeseswsene
swswwwswswswwneswswswweswswwswwsw
sweneewwswwswswswneswswwnwwswwswse
wseneneswneswnenenenenenwenwnwswswsenenee
wswwswwwneswwswseswswswwwswswene
enweeeeeeeeeeeeeeeswee
enwseseeeeneeewenweeeesewe
nenwnwnenenwnwneenenwnwnwnenenwswnwnene
nenenewneswneeesenwneneneneewenenene
nenwneneneneneneneneseswnewneseenenenenew
nwnwnwnenwnwnwnwnwswnwnenwnwnwnwnwenwnenw
seeswnwseseseswseswseseswswswswswswsesw
nwewewnwnwnwewnwwsewnwwswweww
nwnwnwnwenwnwnwnwnwswnwnwnwnwnwnwnwnwnw
seseseneswwsweesesewseseseswseswwne
wseneseseeswswswsewseswswseswswwese
wwnwswwwnwnwsewwwenwnwnwww
wseswseseseeseseseseseseseseswsesesese
swsesenwswwswsweswneswswnwswswswswsesw
weeeenenenwseewnesweneeeneswnene
eenwnenenenenenenwneesenenesenenwnwsesw
swesweswnwnewenwnwnwwnwwenwwwnwnw
seewsenwswswswseseseseseseseswseswswsese
neeenewsewneneneseweeneneenenwne
nenwnwnwnwneeenwnenwnenenwswnenenwwne
swswwswswewswswwswswswswswswswswswsw
eseseseseseseesewenwseswseeesesese
nwnwnwsenwnenwnwwnwnwnwnwnwnenwnenene
esweenwneeeeseenw
sesenwseseesesesesesesesesesesesesesenw
wwwwnwwnewwwwwwwnwwse
swnwewnwneeswweneeeseeenenenenene
newenewnenesewswnenwsenenwsenwenenw
seneseseseseseeswseseseswseswnwswseseswse
nwwwwwwwwwwswwwnewwwnwwnw
eenwsweewswnwewnwseswswswwwsesw
eeneneneeneenenesweneneeeeenwne
nenewnenewneneneneneneseenenwnenwnenene
weeenweneeneeeneneeneeeeesee
nenwneneeesenwswsewnewwnesweenesene
wswnewneseswsenwsesewnwswsenenesewsw
swswswnwnwwswsewnenewnesesww
nwwenwnwwnwnwwnwseneenwwnwsew
seeseseseseswseseseseseseseswsesenwswnwnw
sewwwwswwewwwwswwwswwneswsewne
seneseneneenenesenwnenesenwnenewwenene
nenenenenenenwnesenenenenw
swwswswswswweweswwswswswwwwwenw
wwwsenwswswswwewwwswwwswwneww
wwwwwsewsewwswnwwnwwnwsewwww
eeneswswnwewweeneesweee
eneswswwswswswswswswwnwswwswwwswse
swseseseseswnwseseseseneswswswswsesesesw
swseseseseswsewswseseswsesenesesesesese
neeeweeneeenesweeneeewesenene
nwswswswseswswswseswsenwseseswseseswswsw
swneeseneneneenwenweeeeewnenene
wwsesweswnwwwwwwenwwsewnwnwne
swswseseswswsewswseeswsese
wwwwswswswwwswswnwewwswswwwsw
swwsweswwswewewwwswnwewwww
esenwsewsenesweseesenweesee
eneeeeseeseeeneswweneseenewwe
swnwswswswswswswswswswswswswswswswswswesw
eneeseeesesesenwwenwsese
neeneneeesweeneeneneeeneeenenenw
wsenwwwswwwwnwnewwnwnwwwnwwww
neseeneneneeneneneneneenweneeeee
nwneswwswwswnwenwwneneseeseseswwswnw
nwnwnwnenwnwnwewnwwsenwnwnwnwnwnwnwnwne
ewwnewseenwwnwew
nwnenenenenewnenwnenwneneenenwnenenwnw
nenwnwnewnwnwnwwsewsew
eseeseeeeeeseeeeew
seseeseeseseswnwsenwsesenwsesesesenwsenwse
wnwenwnwenwnwsewnwnewnwneswwewswsw
neneneneneneswnenenewnenwnenenenwnesene
sesesesesesesenweswseseseseseesesesesese
enweeeeeeseseeeeenweeeeese
sesesesenewseseneseseneseseseswsesesewse
seswswseweswnwswnweseswneswwswswswse
wsenwwnwwwwww
nwsewwnwwswwnewnewwwwwswww
newwwsewwnwnewwwswswwwswwwsw
sesenwneneswseswesewseseeneseeswnwnw
nwseseseeseswseseeeseseswsenwesenese
nwnwswswswewswewsewswwsw
sesenwseseseseneseseeswseneseswseswwsese
ewwwsewwwwewwnwwwnwwwww
eeswneenweeenwseeeesweenweee
wswseesweswswnwswwwswewswneswswsw
swseseseswsweswwseeseseswswnwsenweswse
seseswwseseswseswswseseseswnesesesesesesw
swneswswnewenwnesewnesewnenenwseeene
nwenwnwnwnwwnwnwnwswnwnwsenwnwnwnwsenw
wnwenwneswseesee
eeeenweseseeesweeeeeeenwnw
swswswswswswsesweswswswswnwswswswswswswsw
nwwewwwwwwewwwwwew
nenenwnwswnwnwnwnwnwnenenenwnwnwenwnenwnw
neewnenewnwnenenwsenwe
sesewsenwseseenwnwswene
nenwnwenenesenenewneswnenenenesenw
eeeseeesenweeenwenweeeneese
wnewswnwwwwwswwswseswswnewwwnew
sesesesesewseseesenesesesw
nenenesenenenenenenwneenene
swsesesesenesewseseseseswsesesesesesene
neeneeeneeneneenenweeeesee
senwnwnwnwenenenwnwnwswnw
swswneswswneswswwwswwswswswswswwsww
wwwwwwsewwwwwwwwwnewnwsew
eeseesesewneeeseseseseeeeesesese
neswnenwswswwswsenesweswwswswsweswswsw
swseswwwwnwswsenwwwwewwwnesww
neeseeswnwnwsweswe
wenwnwnewnwnwsenwnenenwnwsenwnwswnwnwne
eweswneeesesesenwneeseeesesesewsee
nwneswneenwnwnenwnwnwnenwnwnwnwnwnwnenw
swseseseswswneswnwwseseseseswsesesesesese
nenwnewenenwneswsenenenenwnenewsenenenw
nwnwnenwnwnwnwwnwnwnwnenwnwse
esesewsenweseseseeneseee
swsesenweeeeeenwneeeeesweeswe
nwnwnwwswewsewwwwnwsewwwnwwe
nwnwenwnwwnwnwnwnwnwwnwnwnwnwwwwwe
nwwesweewsesenwsenewnwswnwsenwswsesw
nesenenwnenenenenenwswnenenwnwnenwnew
seneewnwnesweseneenwnenewnenenene
nenenenwneswnwnenenwnwwenwenenenwnwnenw
nwnwenwnwnwnwnwnwnwnwnwnwnwnwnwswnwww
nenenenenenenenenewneswneneneenenene
swnwenwnwnwswnenwnenewwweseeseewswne
eeenweeneesweeeeeeeneeee
eeneeneweneee
wseswenewseeneenwneneseenwwesesw
nwnwnwnwnwenwwnwnwnwwwnwwnwnwnwwnw
nesewswswsesewesweswswseseswswnwnene
nwswswnwwnewwwsesesenwesewswnese
wwwsewnenwsewwswswswwnwwsewewsw
eswsesewseseneswwseesenenwnwnweswseswse
swswwswswseswswswswswswswswswswswswneswsw
nwneseseswwnesewsenwswnenewsene
wswswswnwswswswswswswswswsweswswseswnesw
senesenesewseeewseseswsesesesenesesese`;

const layTiles = (input, floor = {}, days = 10) => {
    let steps = input.split('\n');

    for (const step of steps) {
        let path = parseLine(step);
        let target = follow(0, 0, path, floor);
        target.color = target.color === 'white' ? 'black' : 'white';
    }
    // how many are black?
    console.log(numBlackTiles(floor));

    // simulate 100 days of game of life.
    for (let i = 0; i < days; i++) {
        runDay(floor);
        console.log(`Day ${i + 1}: ${numBlackTiles(floor)}`);
    }
};

const runDay = (floor) => {
    // cull white tiles from the floor.

    // make a copy of the floor.
    let floorCopy = {};
    for (let key in floor) {
        floorCopy[key] = {
            x: floor[key].x,
            y: floor[key].y,
            color: floor[key].color
        };
    }
    // expand the copy to include all white neighbors of all black tiles.
    for (let key in floorCopy) {
        if (floorCopy[key].color === 'black') {
            blackNeighbors(floorCopy[key], floorCopy);
        }
    }
    // for every tile on the floorcopy, 
    // if black && blackNeighbors === 0 or blackNeighbors > 2, then flip to white on real floor.
    // else if white and blackNeighbors === 2, then flip to black on real floor.
    for (let key in floorCopy) {
        let tile = floorCopy[key];
        let black = tile.color === 'black';
        let bn = blackNeighbors(tile, floorCopy);
        if (black && (bn === 0 || bn > 2)) {
            floor[key].color = 'white';
        } else if (!black && bn === 2) {
            floor[key] = {
                x: floorCopy[key].x,
                y: floorCopy[key].y,
                color: floorCopy[key].color
            };
            floor[key].color = 'black';
        }
    }
};

const blackNeighbors = (tile, floor) => {
    let dirs = ['e', 'se', 'sw', 'w', 'nw', 'ne'];
    let bn = 0;
    for (const dir of dirs) {
        bn += follow(tile.x, tile.y, [dir], floor).color === "black" ? 1 : 0;
    }
    return bn;
};

const numBlackTiles = (floor) => {
    let res = 0;
    for (let tileLoc in floor) {
        res += floor[tileLoc].color === "black" ? 1 : 0;
    }
    return res;
};

// warning: creates new target tile (white) if it isn't already on the floor.
const follow = (refX, refY, path, floor) => {
    for (let move of path) {
        switch (move) {
            case 'e':
                refX += 1;
                break;
            case 'se':
                refX += 1/2;
                refY = NP.minus(refY, NP.divide(NP.strip(Math.sqrt(3), 4),2));
                break;
            case 'sw':
                refX -= 1/2;
                refY = NP.minus(refY, NP.divide(NP.strip(Math.sqrt(3), 4),2));
                break;
            case 'w':
                refX -= 1;
                break;
            case 'nw':
                refX -= 1/2;
                refY = NP.plus(refY, NP.divide(NP.strip(Math.sqrt(3), 4),2));
                break;
            case 'ne':
                refX += 1/2;
                refY = NP.plus(refY, NP.divide(NP.strip(Math.sqrt(3), 4),2));
                break;
            default:
                throw new Error('path instruction error.');
        }
    }
    let key = refX + ',' + refY;
    let target = floor[key]
    if (target) {
        return target;
    } else {
        return floor[key] = {
            x: refX, 
            y: refY, 
            color: 'white'
        };
    }
};

const parseLine = (line) => {
    let res = [];
    for (let i = 0; i < line.length; i++) {
        let char = line[i];
        if (char === 'e' || char === 'w') {
            res.push(char);
        } else {
            res.push(char + line[i + 1]);
            i += 1;
        }
    }
    return res;
};

/**************************************** Main ********************** */
// layTiles(testInput1);
// layTiles(testInput2);
// layTiles(testInput3);
layTiles(realInput, {}, 100);