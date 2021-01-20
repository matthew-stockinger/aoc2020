const testInput1 =
    `Tile 2311:
..##.#..#.
##..#.....
#...##..#.
####.#...#
##.##.###.
##...#.###
.#.#.#..##
..#....#..
###...#.#.
..###..###

Tile 1951:
#.##...##.
#.####...#
.....#..##
#...######
.##.#....#
.###.#####
###.##.##.
.###....#.
..#.#..#.#
#...##.#..

Tile 1171:
####...##.
#..##.#..#
##.#..#.#.
.###.####.
..###.####
.##....##.
.#...####.
#.##.####.
####..#...
.....##...

Tile 1427:
###.##.#..
.#..#.##..
.#.##.#..#
#.#.#.##.#
....#...##
...##..##.
...#.#####
.#.####.#.
..#..###.#
..##.#..#.

Tile 1489:
##.#.#....
..##...#..
.##..##...
..#...#...
#####...#.
#..#.#.#.#
...#.#.#..
##.#...##.
..##.##.##
###.##.#..

Tile 2473:
#....####.
#..#.##...
#.##..#...
######.#.#
.#...#.#.#
.#########
.###.#..#.
########.#
##...##.#.
..###.#.#.

Tile 2971:
..#.#....#
#...###...
#.#.###...
##.##..#..
.#####..##
.#..####.#
#..#.#..#.
..####.###
..#.#.###.
...#.#.#.#

Tile 2729:
...#.#.#.#
####.#....
..#.#.....
....#..#.#
.##..##.#.
.#.####...
####.#.#..
##.####...
##..#.##..
#.##...##.

Tile 3079:
#.#.#####.
.#..######
..#.......
######....
####.#..#.
.#...#.##.
#.#####.##
..#.###...
..#.......
..#.###...`;

const realInput =
    `Tile 2477:
....#...#.
#..##...#.
...#.....#
..#...#.#.
#.#......#
.#.#######
..#.#...#.
.#.....#..
#..#......
.###.####.

Tile 2609:
.##...####
...#.##.##
...#......
...#....#.
.##....#.#
..........
....##....
#....#..##
..######..
.##.##.#.#

Tile 3461:
##.##..##.
.##....#..
...#....#.
#.#.#...#.
........#.
.#.#..#..#
..#.......
#..##.....
...#.....#
.#..####..

Tile 1753:
#...#####.
#...#.#..#
#.#....#..
#.......#.
.....###.#
.......#..
.....#....
..##...#.#
#......#..
#.#..##.#.

Tile 1259:
...##...##
#.##.#.###
#.#.....#.
###..#...#
...#......
##.#..#...
#........#
..##.####.
..##....##
....##.#..

Tile 3181:
.#######.#
#...#....#
#.....#..#
#.#.#...#.
.#..#.....
....#.....
#.......#.
#.........
..#..###..
.##..#...#

Tile 1123:
#..####.#.
#...#.....
#.........
....#.#..#
..........
..##...#.#
#..#......
#...#.#..#
.##.##....
#####.####

Tile 2699:
....###.#.
#.#......#
#..##....#
..#.....#.
#.#......#
....#...##
.##...#.##
..........
#.#...#...
##.#...#.#

Tile 2897:
#.#.##..##
#....#..##
....#...#.
..........
#..#..#..#
#.........
##.......#
##.##....#
........##
#.##.#...#

Tile 2531:
.##....#.#
#...#..###
...#....#.
#.......##
#.......##
......#...
#.#.......
#......#.#
#..#.#...#
...#.##..#

Tile 3917:
.#.#.#..#.
##..#....#
....#....#
#.##..#..#
#...#....#
.....#.#.#
.....#.#.#
##..#.#.##
.....#...#
.##.###.##

Tile 1193:
#.###...##
#..##.####
#.#......#
...###....
.#.#..#...
##...#...#
##.......#
..........
...#......
##..#.#.#.

Tile 2011:
####.#..#.
..#...#..#
#.....#...
..........
..#.#.....
#........#
.....#...#
#........#
.........#
.###..##..

Tile 3209:
######.##.
......#..#
....#...##
..##..#...
...#.....#
....##...#
#.......##
..#..#....
....#.....
.#..#.####

Tile 3659:
.#...##..#
........#.
#...#.....
#........#
....##...#
#..#....#.
.#..#..#..
#....#.#.#
.........#
###.#.#..#

Tile 3623:
.##..##...
..#.....##
#.........
.#.#.....#
...#.....#
.......##.
#.......#.
...#.#...#
#......#.#
..#####...

Tile 3049:
####.#####
..#.....#.
.#..#...#.
.#..##...#
#........#
#.#.......
#.##......
.#....#..#
##........
.####..#.#

Tile 3361:
....#.#..#
...#...###
#....#...#
#....##..#
###.#.##.#
...#.#...#
##.#......
#....##..#
.#.....###
.##.#.....

Tile 2861:
.#.##.#..#
#..#...#..
....#....#
..#.....##
...#.....#
#..##.....
##.......#
.....#...#
.#..#..#..
..#.#.#.#.

Tile 3797:
.......##.
#....#....
#..#...#..
#..#..###.
#.#...#..#
.#...#...#
...##.....
.#.....#..
..#.....#.
#.##.##..#

Tile 3593:
.#.....###
..##....#.
..##..#...
#...#...##
.#.....#.#
#.#...#..#
#....#...#
#.....#..#
###..#.###
.##..##.#.

Tile 2161:
.#.##....#
#....#....
....#....#
####...##.
#..#..##.#
#.........
..#.#...##
#.....#..#
.........#
#.###.#...

Tile 3769:
#..###....
##........
#.#....#..
....#.....
#..##.#...
#....#.#..
#........#
......#.#.
##.....#.#
.#....#..#

Tile 3467:
..#.#.####
##.......#
.##..#....
...###...#
.##.###..#
....###..#
.....#....
##.......#
#....##...
#.#..#..#.

Tile 2503:
#..###.###
.#.....#.#
#......#.#
...#.##...
###.#....#
....#....#
#.#...##..
#.......#.
#.#.#....#
....######

Tile 3389:
#..###..##
..........
.......##.
..........
..........
..........
#.....###.
.........#
##.#.##..#
.##.##.#..

Tile 3919:
..#..#.#..
##....##.#
##..#...#.
#.......##
#.#.#.#...
##..#.#..#
......##.#
...###...#
#...#.....
..#.#.#...

Tile 2663:
#.#...####
.......#.#
.#.....#..
#.....#.##
.#..#.....
..##..#..#
#......##.
...#...#..
#.##...#.#
...##.....

Tile 3253:
.#####..#.
.......#.#
#..#...##.
....#.....
.........#
...#.#....
##........
........#.
#....#...#
.####.##.#

Tile 3329:
......####
.......#.#
..##......
#....#...#
.....##...
.....#..##
.....#....
.#.#.#....
.#.......#
#.##......

Tile 2393:
.#...#...#
....#.....
....#...##
#.#..##.#.
...#.#...#
.....#..#.
.##..##..#
##..#..#..
.#........
.##.#.#.#.

Tile 2339:
##....##.#
..#......#
##.....##.
.........#
...##....#
#....#.##.
#.#.....##
.#..#.##..
##.###..#.
######..#.

Tile 1097:
###.##.#.#
.#.#.....#
...#.#....
##...##...
.#....##..
#....##.##
....##....
#.#......#
#.#..#...#
#.####....

Tile 2423:
#....#.#..
#.....#...
#.........
#...#.....
..###.#..#
#...##....
#.........
#..#.....#
...#..#...
#..##.#...

Tile 3067:
.#####.#.#
###..#.#..
..........
#........#
..##.....#
#......#..
.#..#.#...
##...#..##
....#.....
...#.##.##

Tile 3541:
#.#.##.###
..........
..#.#...##
#..##.#..#
.........#
#.....#...
#..#......
#.##......
.#...#.#.#
.#####..##

Tile 3559:
##.#.#.#..
#....#..#.
##...#....
.....#..##
#.........
..#...#...
.#...#...#
#...#..#..
....#....#
.....###.#

Tile 2797:
.....#..##
#.#....#..
##...#....
#.........
...#......
...#...#..
#.......#.
..........
....#....#
#......###

Tile 2803:
##....#.##
..#.......
.###.#....
#.#.#.....
.........#
#..#...##.
#.#.##..#.
.##...##.#
#.#......#
.###.#.#..

Tile 2297:
.#.#.##.#.
#.##.....#
#.##....#.
.......#.#
#..#......
.##.#..#..
..........
..#.##..##
#.......##
.###.##.#.

Tile 3511:
...#.#....
#.....#..#
.......#..
..##.#.##.
#.#....#..
#.#.#.#...
.#........
#.#.....##
.#....#..#
####..#.#.

Tile 2083:
#####.....
##..#.#..#
....#....#
...#......
##....##.#
#....#.#..
##.....##.
.......#.#
##........
###..##.##

Tile 1567:
####.###.#
....#....#
.#..##.#..
#........#
...#.#...#
#.#..##.##
##...#....
##........
#........#
#...#.#..#

Tile 2767:
..###.##..
#..#..#..#
.###.....#
#..#......
......####
....#..#..
#.....##.#
#.#...#..#
.#....##..
.#..####..

Tile 2081:
.#.##.####
#...#.#...
#...#.##..
..#.....##
...##....#
...#......
...#.#....
..........
..........
.####..###

Tile 1697:
...#...###
#..#..#...
.....#..#.
#........#
#..#......
#.......#.
#....#....
#...#.##..
#....#..##
#.##..#...

Tile 3433:
.###...##.
#........#
.#...###.#
##.......#
.......#.#
.....##.#.
#..#..#...
.......#..
.....###..
.....#.#.#

Tile 1543:
#.###.##..
.#...#....
##.....###
#..####.#.
#...#.....
.#......##
#.........
....#.#.##
##.......#
.#........

Tile 2389:
#....#####
.##......#
###.#....#
..#.......
...#.#...#
.......#.#
#....#....
...#...#..
#.#.......
.##..###.#

Tile 2347:
#....##..#
#......###
........#.
.#...#.#..
#........#
.....##...
#........#
#.....#...
##....#..#
##...#.###

Tile 1877:
.#.#.##.#.
#..##...##
#...#...##
##.#......
........##
....#.#..#
#..##.....
....#...##
#.#.#.#..#
.#..#..#.#

Tile 2927:
.#.#...###
#...#.....
..#.......
##...#...#
#..#...#.#
..........
#.#..##...
#.#.......
.....#...#
......###.

Tile 1483:
..#.#...#.
###.##....
#..##.....
.#...##..#
...#.##.##
#.#..#.#.#
..#..#....
#..#......
#........#
....##.##.

Tile 1493:
#.#....##.
..#....#..
..........
.....#...#
.....##..#
...#..#..#
.........#
#.#.#....#
.#.....#.#
..###...#.

Tile 2621:
#..##.#..#
..##.#...#
..........
#......#..
.###..#...
###.#....#
##..#....#
##..#....#
.........#
##.#......

Tile 3167:
..#.###..#
###.#....#
#........#
..##......
###.#..#..
##...#...#
..........
##.#...#.#
.###.....#
####.##...

Tile 3701:
.#.#...##.
......#...
#.........
......#..#
....#....#
....#.#..#
#..##....#
#.....#..#
#...###..#
..##.#....

Tile 1663:
##.#..##..
#.....#...
....###...
#....##..#
....#...#.
#..####..#
...##.....
.##..#....
#.#....#..
#..##.#.##

Tile 1879:
.#....#...
....###.#.
#....#...#
#..##.....
#......#.#
.....#....
#.........
.........#
.#........
##.#...#.#

Tile 1021:
..#.......
.#......##
.##...#...
.##.......
##.#...#.#
#..#.....#
.#........
...###...#
###.......
....#..###

Tile 3767:
..#.#....#
.....#.#..
..#..#....
##..##....
.#.......#
...#......
......##.#
#.......##
#........#
.######.##

Tile 1847:
....####.#
##.#...#..
##.#.##..#
..####...#
#........#
#.........
#...#....#
##.#.#..##
..##.....#
##.##..#..

Tile 3691:
#.##..#...
...#....#.
#...#.....
.....#....
......#.#.
.#........
.#........
.........#
..........
#.....##.#

Tile 2351:
###..###.#
#....##...
#......#..
###......#
#...##.###
##...##..#
..#.......
.#....##..
...#......
.###.##.##

Tile 2753:
#.####..#.
#.......#.
..#.#.....
.....#....
#..#..#...
#......#..
..#...####
#.......##
....#...#.
....#.#..#

Tile 2141:
....##...#
..#..#....
..........
..........
###....#..
...##.#...
##.#.....#
.#....#..#
#.#....#..
.#########

Tile 1901:
.....#.#.#
#......#..
#...#...#.
...#....##
#..#.#....
........#.
.......#.#
#.....##..
#...#.#.##
.#....##.#

Tile 3137:
.##...#...
.#.....###
#.#.#..#.#
#.###.#...
#..##...#.
.........#
#.#..###.#
#......#.#
#......#..
.#..#.#...

Tile 3407:
.#.###.###
...#......
..#.##....
.#.....#..
....#.#..#
...#...#..
....#..#..
##...#....
.#....###.
##.###.##.

Tile 1013:
##.#.###..
#...#.##.#
#........#
#..#.....#
..........
.........#
...#......
.#.....#.#
.......#..
.#...####.

Tile 1049:
...#....##
#.........
#.....#..#
#..#....##
.##...#...
......#..#
##..#.#...
#.##....##
....#....#
#####.#.#.

Tile 2549:
#.#..###.#
#..#......
...#....#.
.....#...#
#.##.....#
###..#.#..
...##.....
##...#....
#......#..
..##.####.

Tile 2843:
.##.###...
....#....#
#.......##
#........#
.......#.#
#.......##
#.#..#...#
#...#.....
#...#....#
.....###..

Tile 1889:
##.##..#..
...#....##
#........#
#......#..
##..#.#.##
......#...
..#.......
..#......#
#.#..#....
..#......#

Tile 2887:
.####.##.#
#..#......
#.........
#....#....
#....#...#
.....#...#
#.#.#.##.#
.#........
##.#.#....
...#.#.##.

Tile 1579:
..######.#
..........
#.##..#...
####..#..#
#........#
...##....#
..#.......
..........
..........
....#....#

Tile 3079:
##.#....#.
###.....##
...##...##
#....#..#.
....###...
...####...
...#.#....
.#.#.#..##
.....#..#.
##...#..#.

Tile 1297:
.####.###.
##...#...#
.....#..#.
#...#.....
###......#
.#..#....#
#....#..##
.##...#...
#....#....
###.####.#

Tile 1783:
...#.#.#..
#...#.....
..#..#...#
......##..
###..#.##.
.#...###..
#.........
#........#
..#......#
..#..##.#.

Tile 1609:
.#.##..#.#
.#.#....#.
#.##......
..#......#
.##.#.#.##
..#.......
###......#
...#...#.#
...###....
..#.....#.

Tile 3793:
##.#.##.#.
...#......
..##....#.
#...#...##
.......#.#
.....#.#..
....#....#
#.##.....#
#..#.##..#
###.##..#.

Tile 1069:
..#.#...#.
..#.#....#
##..#.#..#
.....#....
.....##.#.
.#.##.#...
#.......##
##........
....#.#..#
.#..###.##

Tile 1229:
..#.#####.
.......#..
....#.#.##
.#........
#...#..##.
##....#.#.
#........#
..........
.......#..
##.##....#

Tile 1163:
....#.#.#.
#..#.#...#
.........#
#........#
#....#....
..#.#....#
#...#....#
#....##...
#..#......
#..##.#.##

Tile 3847:
#...#.####
.........#
......#...
#..#..#.##
.....##...
#........#
#...#....#
#.#....#.#
#...#....#
#....#####

Tile 3823:
#..##.....
..#..#.#..
#.........
#.#.##....
#....#...#
#..#......
#...#.....
..........
..........
...#..#..#

Tile 3583:
#...#.###.
##......##
.#........
..#.......
....##..#.
.........#
##........
###.#...#.
.#........
#.#..####.

Tile 2399:
#..##..#..
##......#.
#.#.#.#...
...##.#..#
......#..#
#.#.###...
.#.....#.#
###..#....
.#.#..#..#
###..##...

Tile 3347:
.#.#....#.
..#.#....#
..........
#.##.#.#.#
....#.....
.#....#...
#........#
#....#...#
#..####..#
..#####.#.

Tile 1307:
#...#...#.
....#....#
.#.......#
.......#..
#.#.#...##
#..#.#.#.#
##.#.#.##.
....##....
#.....#.##
.#..#...#.

Tile 2099:
.##...####
...#.##.##
.....##...
#...#.#...
.#......#.
#........#
...#..####
....##..#.
.....#....
..#.###...

Tile 3109:
#..#.###.#
....#.#.##
....##..##
#.#...#...
#.......#.
#..#......
.#.....#.#
#.##....#.
..#.......
....##..#.

Tile 1787:
#...#...##
#.........
###.......
...#..##..
#.#.##....
##....#..#
##........
#..##.##.#
..#....###
....#..#.#

Tile 3019:
#.##...#.#
#...##...#
...#..#.#.
......##.#
.#..####..
#.#.....#.
#......#..
#.........
..........
...###...#

Tile 2857:
.#...##.#.
#.....#..#
#.....##..
#......#.#
...#..#...
...#.....#
#...###..#
.....##..#
...#...#..
##.#....##

Tile 3083:
#..##..##.
.#....#.##
#..#....##
..........
#...#..#.#
.........#
.#........
##.......#
..........
.##...##..

Tile 1583:
#.###.....
....##.#..
..........
#.....#.##
#........#
##........
#......#..
.........#
#.#.#.....
.#.####...

Tile 2693:
...####.#.
.........#
#.........
....#.##.#
#.......#.
.........#
...#......
.......#.#
..#.#....#
.#..#..#..

Tile 1019:
.#.#......
#......#.#
.#...#.#.#
#.#.......
......#.#.
#........#
##..#..#.#
#.#####.#.
.....#...#
.......###

Tile 1031:
#..#......
.........#
#.....#..#
....#.#.#.
..#......#
#...#....#
...#..##..
.#..#...#.
.......##.
.#.#..#...

Tile 3119:
...#.#..##
#.##......
....#.#.##
##..#.#..#
........#.
#...#.#...
...#.....#
..##....##
#..#...#.#
###...#.#.

Tile 1811:
.####..###
#......#.#
#.........
.......#..
..#.##...#
........##
#....#....
#..#.#.#.#
#..#...#..
..####.###

Tile 2473:
.#....####
##.....#..
....#..###
#..#....#.
###...##..
..........
...#.#...#
........##
##......##
....#.....

Tile 1373:
..#..#....
#...####.#
....#....#
....###...
...#.##.#.
#..#.#...#
...#..#..#
#..#.#...#
##.###....
.#.#####..

Tile 3803:
#...##.#.#
#.#..#..#.
.........#
..#......#
.#.#..#..#
..........
##..#.###.
..#####.##
....##...#
.#.##.##..

Tile 1291:
#..#.....#
#..#..##.#
#.#......#
....#...#.
##.######.
#........#
#....#....
#.....#...
#####.....
#######.#.

Tile 1489:
#...#...##
#..#....#.
....##....
....#.....
#........#
#.#......#
##......##
#.#.#.....
.....#.#.#
#.#.###.##

Tile 2633:
.#..##.#..
..#.#...##
#.........
#..#......
#..#.....#
#.........
#....#..##
#.###.....
#.##.#..#.
...#..###.

Tile 2441:
#.#..###..
...#.....#
#...##...#
#.##...#..
#.....####
#..#....#.
...#......
#.........
#.#.......
....###.#.

Tile 2689:
##..#.....
.#........
..........
#.#.......
....#...##
..........
#.....#...
#...#.....
#.....#...
####...#..

Tile 1559:
#..###..#.
#.......##
......#...
.##..###..
#..#..##.#
..#...##.#
#.........
#..#.#...#
##.....###
.#.....#..

Tile 1973:
.###......
#......#.#
.#........
...#.....#
..#....#..
....##....
..........
......#..#
.....#....
#..#.#...#

Tile 2113:
#.##.#.#.#
..#..##...
#...#.#...
.#.#......
.#..###..#
........#.
#........#
#.#.#..#..
..........
##.##...#.

Tile 2903:
..#...##.#
#...#.....
#..###.###
...#.#...#
#...#...##
#..#..#..#
#........#
##.###...#
#.#..#...#
.#....#...

Tile 2003:
.##.#..#..
...##...##
.#.....#.#
##..##...#
...#.#.#.#
.........#
#...#.##..
.....##..#
#.#..#....
###...##.#

Tile 2273:
...##.#...
.##....##.
#......##.
#.......##
....##...#
......#...
..#.#.....
.#.#..##.#
#........#
..#.#..#..

Tile 2111:
#.#..#..##
#...##...#
..........
###.....##
##......#.
..........
#....#####
#...#.#.#.
....#..#.#
#...#.###.

Tile 2203:
.#####.##.
#...##...#
#..#...#..
#.###...##
#....##.##
#....#..##
....#.....
...#....##
#.#...#...
#.#.#..###

Tile 2153:
#.###..#..
..........
...#.....#
..###..##.
...#.....#
....#....#
#...#....#
#.........
#..##...#.
###.##..#.

Tile 2963:
.#.#.####.
#....#....
.........#
#........#
#..#.....#
#.#......#
......#.##
.....#....
#...###...
.####..##.

Tile 3491:
...##.####
#.#.....##
.#..#..##.
#........#
.#...#...#
....#...#.
#.#......#
.........#
....#...#.
##.##..#.#

Tile 2087:
#.#......#
#..##..#..
#..#......
#...##...#
#......#.#
#.#...#...
......#..#
#...#....#
#....#....
##.#..#..#

Tile 2063:
..##...##.
....#....#
#..#...#.#
#........#
##......##
..#..##..#
......#.#.
#.#.......
..##.#....
.#######..

Tile 3851:
.#........
#.#.....#.
.........#
......#...
.#....#..#
...##.....
#........#
#.......#.
#.#......#
##.####..#

Tile 1117:
##.......#
..#......#
##.......#
##........
...####.#.
..##.##..#
...#....#.
##.#......
.........#
.#.##....#

Tile 3967:
...#.##...
#..#..##.#
#.....##.#
#......#.#
#.......#.
##........
#..#.#.#..
....#.#.##
.#.#..#...
###.##.##.

Tile 2879:
###..#..##
.....#.#..
...##.....
#.###.#..#
.........#
.#.#.....#
#.#.##....
#..##....#
##.......#
#.##.#####

Tile 2851:
###..#.##.
.###...##.
...##.#.#.
#........#
#........#
.#.#......
##.#......
..###.....
.#...#..#.
#.####..#.

Tile 3529:
.#.#.#####
..........
...#..#..#
...#.....#
#.#......#
#....####.
.....#...#
#.##......
.#...#...#
#.#..###.#

Tile 3307:
#.#..###..
....#..###
#.##....##
#..#.##.#.
#.#...##.#
.#....#...
...#.#...#
...#...#.#
##......#.
...#......

Tile 3739:
#.###.#...
.#.#..##.#
..#..#..##
#...##...#
#...#..#..
.........#
.....#...#
##....#...
.#......##
...#..#..#

Tile 2617:
##.###.#..
..#......#
..#....#..
.#....#...
.#..#.....
...#..##..
...#.....#
#.......#.
#.#..#...#
..###..#..

Tile 2053:
.#....#.##
#...#.....
.........#
#........#
...#..##..
###..#.###
........#.
.....#####
##....#...
.###.##..#

Tile 2447:
.#.....##.
......##.#
#......#..
.#......#.
.#.##.#..#
#.#....###
#.#......#
##........
.#.......#
#.#.#....#

Tile 1999:
.#...###..
#...#..#..
#.#.......
...#....##
#.#.......
##...###..
#......#..
...###.#..
####...##.
.....#..#.

Tile 1009:
...#####.#
....##...#
...#.#....
#..#.#.#.#
#...##....
........##
#.....#..#
.#..##.#.#
#..#...#..
...#.#..##

Tile 2267:
.#.#..##..
.#.......#
#........#
.#.......#
#..#...#.#
#..#..#..#
.####.....
..#......#
##.....#..
##...####.

Tile 2131:
###.#..##.
.#....#...
...##.####
..#.#..#..
#.#....#.#
...###.#..
#.....#..#
..#...####
##.#..#..#
#..###..##

Tile 2251:
###.......
....#.#..#
.....#....
...#..#...
.........#
##..#.....
##.......#
.#.....#.#
#.#.....#.
#...#.....

Tile 1109:
..##....#.
.#...#..##
#.........
#..##....#
...#...#..
#.##......
.#...#.#..
...#..##..
.#...##...
.##.###.#.

Tile 3343:
..###.#.##
#....#.###
....#....#
.........#
..##....#.
#.....##..
#..#......
.........#
.###...#..
.#..######

Tile 2383:
.#.####.##
#.....#..#
#......#.#
##.....##.
#......###
....#...#.
....#...#.
##....#..#
##..###..#
.####.#...

Tile 2281:
..#...##..
#..#...#.#
.#........
.#.#....##
..##.#.#..
..#...#...
###.#..#.#
#...##.#.#
...##.#..#
#..#.....#

Tile 3191:
.###.###.#
..#.......
.##....###
...#..#...
..#......#
#...#.....
#........#
#....#..##
#.#.#...#.
#.......#.`;

class Tile {
    constructor(tileAsArray) {
        // tileAsArray should have length 11.
        // element 0 should be string with tile number.
        // 10 more elements are in the form '#.#.#####.'
        // use those to populate properties of the Tile.
        let idStr = tileAsArray[0];
        this.id = parseInt(idStr.match(/(?<=\s)\d+(?=:)/g)[0]);

        // store original tile information as 2D array of strings '.' or '#'
        this.image = [];
        for (let i = 1; i < tileAsArray.length; i++) {
            this.image.push(tileAsArray[i].split(''));
        }

        // sideVals is array of format [top, right, bottom, left, topFlip, rightFlip, bottomFlip, leftFlip]
        // each item is a decimal number.
        this.sideVals = this.getSideVals();
    }

    getSideVals() {
        let t = this.hashToDecimal(this.getSideStr('top'));
        let r = this.hashToDecimal(this.getSideStr('right'));
        let b = this.hashToDecimal(this.getSideStr('bottom'));
        let l = this.hashToDecimal(this.getSideStr('left'));
        let tf = this.hashToDecimal(this.flipStr(this.getSideStr('top')));
        let rf = this.hashToDecimal(this.flipStr(this.getSideStr('right')));
        let bf = this.hashToDecimal(this.flipStr(this.getSideStr('bottom')));
        let lf = this.hashToDecimal(this.flipStr(this.getSideStr('left')));
        return [t, r, b, l, tf, rf, bf, lf];
    }

    // takes str of the form '#...##.#..'
    // converts that to binary and then returns decimal equivalent.
    hashToDecimal(str) {
        str = str.replace(/#/g, '1').replace(/\./g, '0');
        return parseInt(str, 2);
    }

    // side is a string 'top', 'right', 'bottom', 'left
    // parses this.image and returns a string of the form '#..#..#.##'
    getSideStr(side) {
        switch (side) {
            case 'top':
                return this.image[0].join('');
                break;
            case 'right':
                return this.image.reduce((a, c) => {
                    a.push(c[c.length - 1]);
                    return a;
                }, []).join('');
                break;
            case 'bottom':
                return this.image[this.image.length - 1].join('');
                break;
            case 'left':
                return this.image.reduce((a, c) => {
                    a.push(c[0]);
                    return a;
                }, []).join('');
                break;
            default:
                throw new Error('getSideStr invalid side');
        }
    }

    // returns the mirror image of a string.
    // e.g. '#...##.#..' becomes '..#.##...#'
    flipStr(str) {
        let a = str.split('');
        for (let i = 0; i < a.length / 2; i++) {
            [a[i], a[a.length - 1 - i]] = [a[a.length - 1 - i], a[i]];
        }
        return a.join('');
    }

    rotRight() {
        const rowLen = this.image[0].length;
        const numRows = this.image.length;
        const emptyRow = new Array(rowLen);
        let imageCopy = [];
        for (let row = 0; row < numRows; row++) {
            imageCopy.push([...emptyRow]);
        }

        // populate imageCopy with rotated image.
        for (let row = 0; row < numRows; row++) {
            for (let pos = 0; pos < rowLen; pos++) {
                imageCopy[pos][rowLen - 1 - row] = this.image[row][pos];
            }
        }

        // deep copy imageCopy back to this.image.
        for (let row = 0; row < numRows; row++) {
            this.image[row] = [...imageCopy[row]];
        }

        // redo sideVals
        this.sideVals = this.getSideVals();
    }

    rotLeft() {
        const rowLen = this.image[0].length;
        const numRows = this.image.length;
        const emptyRow = new Array(rowLen);
        let imageCopy = [];
        for (let row = 0; row < numRows; row++) {
            imageCopy.push([...emptyRow]);
        }

        // populate imageCopy with rotated image.
        for (let row = 0; row < numRows; row++) {
            for (let pos = 0; pos < rowLen; pos++) {
                imageCopy[numRows - 1 - pos][row] = this.image[row][pos];
            }
        }

        // deep copy imageCopy back to this.image.
        for (let row = 0; row < numRows; row++) {
            this.image[row] = [...imageCopy[row]];
        }

        // redo sideVals
        this.sideVals = this.getSideVals();
    }

    vFlip() {
        const rowLen = this.image[0].length;
        const numRows = this.image.length;
        const emptyRow = new Array(rowLen);
        let imageCopy = [];
        for (let row = 0; row < numRows; row++) {
            imageCopy.push([...emptyRow]);
        }

        // populate imageCopy with flipped image.
        for (let row = 0; row < numRows; row++) {
            for (let pos = 0; pos < rowLen; pos++) {
                imageCopy[numRows - 1 - row][pos] = this.image[row][pos];
            }
        }

        // deep copy imageCopy back to this.image.
        for (let row = 0; row < numRows; row++) {
            this.image[row] = [...imageCopy[row]];
        }

        // redo sideVals
        this.sideVals = this.getSideVals();
    }

    hFlip() {
        const rowLen = this.image[0].length;
        const numRows = this.image.length;
        const emptyRow = new Array(rowLen);
        let imageCopy = [];
        for (let row = 0; row < numRows; row++) {
            imageCopy.push([...emptyRow]);
        }

        // populate imageCopy with flipped image.
        for (let row = 0; row < numRows; row++) {
            for (let pos = 0; pos < rowLen; pos++) {
                imageCopy[row][rowLen - 1 - pos] = this.image[row][pos];
            }
        }

        // deep copy imageCopy back to this.image.
        for (let row = 0; row < numRows; row++) {
            this.image[row] = [...imageCopy[row]];
        }

        // redo sideVals
        this.sideVals = this.getSideVals();
    }
};

// testing for Tile class.
// let tile1Arr = 
// `Tile 3079:
// #.#.#####.
// .#..######
// ..#.......
// ######....
// ####.#..#.
// .#...#.##.
// #.#####.##
// ..#.###...
// ..#.......
// ..#.###...`.split('\n');
// let tile1 = new Tile(tile1Arr);
// console.log(tile1.sideVals);


/********** parse input.  create tiles Map *************** */

const initTiles = (input) => {
    let tileStrings = input.split('\n\n');
    tileStrings.forEach(tileStr => {
        let tile = new Tile(tileStr.split('\n'));
        tiles.set(tile.id, tile);
    });
};


/************* find which sides have matches, for each tile ***************** */
/* for each Tile in tiles, find side matches in other tiles.
 * add a property called matches to each Tile.  Value is binary string with 8 places: t r b l tf rf bf lf
 *  A 1 in a place represents a match for that side or flipped side.
 */

const findMatches = () => {
    tiles.forEach(tile => {
        tile.matches = '';
        tile.sideVals.forEach((sideVal, index) => {
            // check this tile's top.  if any other sides of any other tiles match, add '1' to matches, else add '0'.
            // then check this tile's right....
            // *** depends on only one match being possible in the grid ***
            for (const otherTile of tiles.values()) {
                if (otherTile.id === tile.id) {
                    continue;
                }
                if (otherTile.sideVals.some(otherSideVal => otherSideVal === sideVal)) {
                    tile.matches += '1';
                }
            }
            // if all other tiles were searched with no match, then matches won't have gotten longer.
            if (tile.matches.length === index) tile.matches += '0';
        });
    });
};


/*********** Which tiles have 4 matches?  those are corners.  multiply id's. */
const cornerProduct = () => {
    const tilesArr = [...tiles].map(tile => tile[1]);
    const cornerTiles = tilesArr.filter(tile => tile.matches.match(/1/g).length === 4);
    // added the next stuff to help me figure out shape of final grid in part 2.
    const edgeTiles = tilesArr.filter(tile => tile.matches.match(/1/g).length === 6);
    const innerTiles = tilesArr.filter(tile => tile.matches.match(/1/g).length === 8);
    console.log(`edge tiles\n${edgeTiles.length}`);
    console.log(`inner tiles\n${innerTiles.length}`);
    return cornerTiles.reduce((a, c) => a * c.id, 1);
};

/************* Part 2 *************************** */
// 1. put puzzle together.
// 2. strip each tile's border data.
// 3. combine resulting tiles into one large image.
// 4. find sea monsters.  replace with O's
// 5. count waves/roughness.

// assumes a grid of 12 x 12 tiles.
// returns a 2D array of sorted and oriented tiles.
const arrangeTiles = (tilesMap) => {
    const tilesArr = Array.from(tilesMap.values());
    // output will be 2D array of Tiles.
    let emptyRow = new Array(12);
    let gridcopy = [];
    for (let i = 0; i < 12; i++) {
        gridcopy.push([...emptyRow]);
    }
    // place first tile, somewhat arbitrarily, from choices of corner tiles.
    gridcopy[0][0] = tilesMap.get(1753);

    for (let row = 0; row < 12; row++) {
        for (let pos = 0; pos < 12; pos++) {
            if (gridcopy[row][pos]) {
                // skip the first, already-placed corner tile.
                continue;
            } else if (pos === 0) {
                // for the first tile in each row, 
                // match the bottom val of the tile above.
                let tileAbove = gridcopy[row - 1][0];
                let matchVal = tileAbove.sideVals[2];
                gridcopy[row][pos] = tilesArr.find(tile => {
                    let includesMatch = tile.sideVals.includes(matchVal);
                    return includesMatch && tile.id !== tileAbove.id;
                });
                orient(gridcopy[row][pos], row, pos, matchVal, gridcopy);
            } else {
                // match righthand val of the tile to the left.
                let tileLeft = gridcopy[row][pos - 1];
                let matchVal = tileLeft.sideVals[1];
                gridcopy[row][pos] = tilesArr.find(tile => {
                    let includesMatch = tile.sideVals.includes(matchVal);
                    return includesMatch && tile.id !== tileLeft.id;
                });
                orient(gridcopy[row][pos], row, pos, matchVal, gridcopy);
            }
        }
    }
    return gridcopy;
};

// notes about this:  sideVals are decimal representations of binary numbers.
// top and bottom are interpreted left to right.
// left and right are interpreted top to bottom.
// Therefore, if a tile is oriented to have matchVal on the top or left,
// then this guarantees that the tile doesn't need any more flipping, etc.
const orient = (tile, row, pos, matchVal, grid) => {
    if (pos === 0) {
        // orient first piece in a row so the top has matchVal.
        let sideWithMatch = tile.sideVals.indexOf(matchVal);
        // console.log(tile.sideVals);
        // console.log(sideWithMatch);
        switch (sideWithMatch) {
            case 0:
                break;
            case 1:
                tile.rotLeft();
                break;
            case 2:
                tile.vFlip();
                break;
            case 3:
                tile.rotRight();
                tile.hFlip();
                break;
            case 4:
                tile.hFlip();
                break;
            case 5:
                tile.rotLeft();
                tile.hFlip();
                break;
            case 6:
                tile.rotRight();
                tile.rotRight();
                break;
            case 7:
                tile.rotRight();
                break;
            default:
                throw new Error('orient top match error.  Invalid sideWithMatch');
        }
    } else {
        // orient so the left has matchVal.
        let sideWithMatch = tile.sideVals.indexOf(matchVal);
        // console.log(tile.sideVals);
        // console.log(sideWithMatch);
        switch (sideWithMatch) {
            case 0:
                tile.rotLeft();
                tile.vFlip();
                break;
            case 1:
                tile.hFlip();
                break;
            case 2:
                tile.rotRight();
                break;
            case 3:
                break;
            case 4:
                tile.rotLeft();
                break;
            case 5:
                tile.rotLeft();
                tile.rotLeft();
                break;
            case 6:
                tile.rotRight();
                tile.vFlip();
                break;
            case 7:
                tile.vFlip();
                break;
            default:
                throw new Error('orient left match error.  Invalid sideWithMatch');
        }
    }
    // console.log(`new sidevals: ${tile.sideVals}`);
};

// grid should be a 2D array of tiles.
const trimTiles = (grid) => {
    grid.forEach((row, rowIndex) => {
        row.forEach((tile, tilePos) => {
            // remove top and bottom row.
            tile.image = tile.image.slice(1, -1);
            // remove first and last position from each row.
            tile.image = tile.image.map(row => row = row.slice(1, -1));
        });
    });
};

// returns an array of strings.
// Each element/string is a row of the full connected image from all tiles.
const fullImage = (grid) => {
    let imgNumRows = grid[0][0].image.length;
    let res = new Array(grid.length * imgNumRows);
    // iterate through tiles.
    for (let row = 0; row < grid.length; row++) {
        for (let pos = 0; pos < grid[0].length; pos++) {
            let img = grid[row][pos].image.map(r => r.join(''));
            for (let imgRow = 0; imgRow < imgNumRows; imgRow++) {
                if (res[row * imgNumRows + imgRow]) {
                    res[row * imgNumRows + imgRow] += img[imgRow];
                } else {
                    res[row * imgNumRows + imgRow] = img[imgRow];
                }
            }
        }
    }
    return res;
}

const findMonster = (image) => {
    let monsterCount = 0;
    for (let row = 0; row <= image.length - 3; row++) {
        for (let pos = 0; pos <= image[0].length - 20; pos++) {
            if (monsterHere(row, pos, image)) {
                monsterCount += 1;
                // console.log(`monster found at row ${row} and pos ${pos}`);
                zeroMonster(row, pos, image);
            }
        }
    }
    return monsterCount;
};

const monsterHere = (row, pos, image) => {
    // monster1 = `                  # `;
    // monster2 = `#    ##    ##    ###`;
    // monster3 = ` #  #  #  #  #  #   `;
    // position offsets to check.
    const monster1 = [18];
    const monster2 = [0, 5, 6, 11, 12, 17, 18, 19];
    const monster3 = [1, 4, 7, 10, 13, 16];

    let row1Check = monster1.every(offset => image[row][pos + offset] === '#');
    let row2Check = monster2.every(offset => image[row + 1][pos + offset] === '#');
    let row3Check = monster3.every(offset => image[row + 2][pos + offset] === '#');
    return row1Check && row2Check && row3Check;
};

const zeroMonster = (row, pos, image) => {
    const monster1 = [18];
    const monster2 = [0, 5, 6, 11, 12, 17, 18, 19];
    const monster3 = [1, 4, 7, 10, 13, 16];
    monster1.forEach(offset => {
        let firstPiece = image[row].slice(0, pos + offset);
        let secondPiece = image[row].slice(pos + offset + 1);
        image[row] = firstPiece + 'O' + secondPiece;
    });
    monster2.forEach(offset => {
        let firstPiece = image[row + 1].slice(0, pos + offset);
        let secondPiece = image[row + 1].slice(pos + offset + 1);
        image[row + 1] = firstPiece + 'O' + secondPiece;
    });
    monster3.forEach(offset => {
        let firstPiece = image[row + 2].slice(0, pos + offset);
        let secondPiece = image[row + 2].slice(pos + offset + 1);
        image[row + 2] = firstPiece + 'O' + secondPiece;
    });
};

const rotR = (image) => {
    const rowLen = image[0].length;
    const numRows = image.length;
    const emptyRow = new Array(rowLen);
    let imageCopy = [];
    for (let row = 0; row < numRows; row++) {
        imageCopy.push([...emptyRow]);
    }

    // populate imageCopy with rotated image.
    for (let row = 0; row < numRows; row++) {
        for (let pos = 0; pos < rowLen; pos++) {
            imageCopy[pos][rowLen - 1 - row] = image[row][pos];
        }
    }

    // deep copy imageCopy back to this.image.
    for (let row = 0; row < numRows; row++) {
        image[row] = imageCopy[row].join('');
    }

    return image;
};

const rotL = (image) => {
    const rowLen = image[0].length;
    const numRows = image.length;
    const emptyRow = new Array(rowLen);
    let imageCopy = [];
    for (let row = 0; row < numRows; row++) {
        imageCopy.push([...emptyRow]);
    }

    // populate imageCopy with rotated image.
    for (let row = 0; row < numRows; row++) {
        for (let pos = 0; pos < rowLen; pos++) {
            imageCopy[numRows - 1 - pos][row] = image[row][pos];
        }
    }

    // deep copy imageCopy back to this.image.
    for (let row = 0; row < numRows; row++) {
        image[row] = imageCopy[row].join('');
    }

    return image;
};

const vFl = (image) => {
    const rowLen = image[0].length;
    const numRows = image.length;
    const emptyRow = new Array(rowLen);
    let imageCopy = [];
    for (let row = 0; row < numRows; row++) {
        imageCopy.push([...emptyRow]);
    }

    // populate imageCopy with rotated image.
    for (let row = 0; row < numRows; row++) {
        for (let pos = 0; pos < rowLen; pos++) {
            imageCopy[numRows - 1 - row][pos] = image[row][pos];
        }
    }

    // deep copy imageCopy back to this.image.
    for (let row = 0; row < numRows; row++) {
        image[row] = imageCopy[row].join('');
    }

    return image;
};

const hFl = (image) => {
    const rowLen = image[0].length;
    const numRows = image.length;
    const emptyRow = new Array(rowLen);
    let imageCopy = [];
    for (let row = 0; row < numRows; row++) {
        imageCopy.push([...emptyRow]);
    }

    // populate imageCopy with rotated image.
    for (let row = 0; row < numRows; row++) {
        for (let pos = 0; pos < rowLen; pos++) {
            imageCopy[row][rowLen - 1 - pos] = image[row][pos];
        }
    }

    // deep copy imageCopy back to this.image.
    for (let row = 0; row < numRows; row++) {
        image[row] = imageCopy[row].join('');
    }

    return image;
};

const countWaves = (image) => {
    let res = 0;
    for (let r = 0; r < image.length; r++) {
        for (let char = 0; char < image[r].length; char++) {
            res += image[r][char] === '#' ? 1 : 0;
        }
    }
    return res;
}
/************ Main ****************************** */

const tiles = new Map();
initTiles(realInput);
findMatches();

let grid1 = arrangeTiles(tiles);
trimTiles(grid1);
let fullImage1 = fullImage(grid1);
// found flip and rotate to be the ticket, by trial and error.
vFl(fullImage1);
rotR(fullImage1);
console.log(findMonster(fullImage1));
console.log(`remaining roughness = ${countWaves(fullImage1)}`);

